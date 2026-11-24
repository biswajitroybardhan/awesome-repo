package `in`.khaifoods.tracker

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.util.Base64
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import java.net.HttpURLConnection
import java.net.URI
import java.net.URL
import java.security.KeyStore
import java.security.MessageDigest
import java.security.SecureRandom
import java.security.cert.CertificateException
import javax.net.ssl.HttpsURLConnection
import javax.net.ssl.SSLContext
import javax.net.ssl.TrustManager
import javax.net.ssl.TrustManagerFactory
import javax.net.ssl.X509TrustManager

/**
 * Institution sync, not analytics.
 *
 * The device is the source of truth. Only dirty days are sent, keyed by (code, date), so a retry
 * after a dropped connection cannot duplicate a record. Sync is off unless an institution URL,
 * a per-device bearer token and explicit consent are configured. A server must acknowledge the
 * exact dates it persisted before the app clears their dirty flag.
 */
object Sync {

    private const val MAX_RESPONSE = 256 * 1024

    fun tryBackground(a: MainActivity) {
        Thread {
            try {
                push(a, quiet = true)
            } catch (_: Exception) {
            }
        }.start()
    }

    fun push(a: MainActivity, quiet: Boolean): Boolean {
        val prefs = a.prefs
        val base = prefs.syncUrl.trim().trimEnd('/')
        if (base.isEmpty()) return false

        val endpoint = try {
            parseEndpoint(base)
        } catch (e: Exception) {
            fail(a, quiet, a.getString(R.string.sync_bad_url))
            return false
        }
        if (!online(a)) {
            fail(a, quiet, a.getString(R.string.sync_offline))
            return false
        }
        if (!prefs.syncConsent) {
            fail(a, quiet, a.getString(R.string.sync_no_consent))
            return false
        }
        val token = prefs.syncToken.trim()
        if (token.isEmpty()) {
            fail(a, quiet, a.getString(R.string.sync_auth_missing))
            return false
        }
        val pin = try {
            decodePin(prefs.syncPin)
        } catch (e: Exception) {
            fail(a, quiet, a.getString(R.string.sync_bad_pin))
            return false
        }

        val code = prefs.code()
        val pending = a.store.pendingDates(code)
        if (pending.isEmpty()) {
            succeed(a, quiet, a.getString(R.string.sync_ok))
            return true
        }

        val days = JSONObject()
        for (date in pending) {
            a.store.load(code, date)?.let { days.put(date, it.toJson()) }
        }
        if (days.length() == 0) {
            fail(a, quiet, a.getString(R.string.sync_fail))
            return false
        }
        val payload = JSONObject()
            .put("schema", "khai-sync-v2")
            .put("code", code)
            .put("device_id", prefs.deviceId)
            .put("days", days)

        var ok = false
        var message = a.getString(R.string.sync_fail)
        for (attempt in 0..1) {
            var conn: HttpURLConnection? = null
            try {
                conn = (URL(endpoint.toString() + "/api/sync").openConnection() as HttpsURLConnection).apply {
                    requestMethod = "POST"
                    connectTimeout = 15_000
                    readTimeout = 20_000
                    doOutput = true
                    instanceFollowRedirects = false
                    setRequestProperty("Content-Type", "application/json; charset=utf-8")
                    setRequestProperty("Accept", "application/json")
                    setRequestProperty("Authorization", "Bearer $token")
                    setRequestProperty("User-Agent", "KhaiTracker/1.0.0 (Android)")
                    hostnameVerifier = HttpsURLConnection.getDefaultHostnameVerifier()
                    if (pin != null) sslSocketFactory = pinnedSocketFactory(pin)
                }
                conn.outputStream.use { it.write(payload.toString().toByteArray(Charsets.UTF_8)) }
                val status = conn.responseCode
                if (status in 200..299) {
                    val accepted = acceptedDates(readBody(conn))
                    val saved = accepted.intersect(pending.toSet())
                    if (saved.isEmpty()) {
                        message = a.getString(R.string.sync_ack_fail)
                        break
                    }
                    a.store.markSynced(code, saved)
                    prefs.lastSyncAt = System.currentTimeMillis()
                    ok = saved.size == pending.size
                    message = a.getString(if (ok) R.string.sync_ok else R.string.sync_fail)
                    break
                } else if (status in 400..499) {
                    // A refusal will not improve by retrying.
                    message = a.getString(R.string.sync_fail)
                    break
                }
            } catch (_: Exception) {
                if (attempt == 1) message = a.getString(R.string.sync_offline)
            } finally {
                try { conn?.disconnect() } catch (_: Exception) {}
            }
        }

        prefs.lastSyncOk = ok
        prefs.lastSyncMessage = message
        if (!quiet) a.runOnUiThread { a.render() }
        return ok
    }

    private fun fail(a: MainActivity, quiet: Boolean, message: String) {
        a.prefs.lastSyncOk = false
        a.prefs.lastSyncMessage = message
        if (!quiet) a.runOnUiThread { a.render() }
    }

    private fun succeed(a: MainActivity, quiet: Boolean, message: String) {
        a.prefs.lastSyncOk = true
        a.prefs.lastSyncMessage = message
        if (!quiet) a.runOnUiThread { a.render() }
    }

    /** Only an absolute HTTPS URL with a host, without embedded credentials or a fragment. */
    private fun parseEndpoint(value: String): URI {
        val uri = URI(value)
        if (uri.scheme?.lowercase() != "https" || uri.host.isNullOrEmpty() ||
            uri.userInfo != null || uri.fragment != null || uri.rawQuery != null
        ) {
            throw IllegalArgumentException("unsafe sync endpoint")
        }
        return uri
    }

    private fun decodePin(raw: String): ByteArray? {
        val value = raw.replace(Regex("\\s"), "")
        if (value.isEmpty()) return null
        val bytes = Base64.decode(value, Base64.DEFAULT)
        if (bytes.size != 32) throw IllegalArgumentException("pin must be a SHA-256 digest")
        return bytes
    }

    /**
     * Keeps system trust anchors, but additionally requires the pinned SPKI digest on the leaf
     * certificate. Rotation is explicit: the coordinator issues a new pin with the new server key.
     */
    private fun pinnedSocketFactory(pin: ByteArray): javax.net.ssl.SSLSocketFactory {
        val factory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm())
        factory.init(null as KeyStore?)
        val system = factory.trustManagers.first { it is X509TrustManager } as X509TrustManager
        val pinning = object : X509TrustManager {
            override fun checkClientTrusted(chain: Array<out java.security.cert.X509Certificate>?, authType: String?) =
                system.checkClientTrusted(chain, authType)

            override fun checkServerTrusted(chain: Array<out java.security.cert.X509Certificate>?, authType: String?) {
                system.checkServerTrusted(chain, authType)
                val leaf = chain?.firstOrNull() ?: throw CertificateException("empty certificate chain")
                val spki = MessageDigest.getInstance("SHA-256").digest(leaf.publicKey.encoded)
                if (!MessageDigest.isEqual(spki, pin)) throw CertificateException("server key pin mismatch")
            }

            override fun getAcceptedIssuers(): Array<java.security.cert.X509Certificate> = system.acceptedIssuers
        }
        // TLS 1.2+ only: older protocol versions are never negotiated on this path.
        return SSLContext.getInstance("TLSv1.2").apply {
            init(null, arrayOf<TrustManager>(pinning), SecureRandom())
        }.socketFactory
    }

    private fun acceptedDates(body: String): Set<String> {
        if (body.isBlank()) return emptySet()
        val json = try { JSONObject(body) } catch (e: Exception) { return emptySet() }
        val array = json.optJSONArray("accepted_dates") ?: return emptySet()
        val out = HashSet<String>()
        for (i in 0 until array.length()) {
            val date = array.optString(i, "")
            if (date.isNotEmpty()) out.add(date)
        }
        return out
    }

    private fun readBody(conn: HttpURLConnection): String {
        val stream = try {
            if (conn.responseCode < 400) conn.inputStream else conn.errorStream
        } catch (e: Exception) {
            null
        } ?: return ""
        val out = ByteArrayOutputStream()
        val buf = ByteArray(8192)
        var total = 0
        stream.use {
            while (true) {
                val n = it.read(buf)
                if (n < 0) break
                total += n
                if (total > MAX_RESPONSE) break
                out.write(buf, 0, n)
            }
        }
        return out.toString("UTF-8")
    }

    fun online(ctx: Context): Boolean {
        return try {
            val cm = ctx.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
            val net = cm.activeNetwork ?: return false
            val caps = cm.getNetworkCapabilities(net) ?: return false
            caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
        } catch (_: Exception) {
            true
        }
    }
}
