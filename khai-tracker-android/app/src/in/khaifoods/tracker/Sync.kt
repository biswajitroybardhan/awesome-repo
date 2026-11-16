package `in`.khaifoods.tracker

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL

/**
 * Offline-first sync.
 *
 * The device is the source of truth; the server is a store-and-forward target. The payload is a
 * full upsert of every day for one participant, keyed by (code, date), so a retry after a dropped
 * connection cannot duplicate a record and a week is never lost because a tower was down.
 * HTTPS is enforced here as well as in the manifest.
 */
object Sync {

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

        if (!base.startsWith("https://")) {
            prefs.lastSyncOk = false
            prefs.lastSyncMessage = a.getString(R.string.sync_need_https)
            if (!quiet) a.runOnUiThread { a.render() }
            return false
        }
        if (!online(a)) {
            prefs.lastSyncOk = false
            prefs.lastSyncMessage = a.getString(R.string.sync_offline)
            if (!quiet) a.runOnUiThread { a.render() }
            return false
        }

        val code = prefs.code()
        val all = a.store.all(code)
        if (all.isEmpty()) return true

        val days = JSONObject()
        for (e in all) days.put(e.date, e.toJson())
        val payload = JSONObject()
            .put("code", code)
            .put("device_id", prefs.deviceId)
            .put("days", days)

        var ok = false
        var message = a.getString(R.string.sync_fail)
        for (attempt in 0..1) {
            var conn: HttpURLConnection? = null
            try {
                conn = (URL("$base/api/sync").openConnection() as HttpURLConnection).apply {
                    requestMethod = "POST"
                    connectTimeout = 15_000
                    readTimeout = 20_000
                    doOutput = true
                    instanceFollowRedirects = false
                    setRequestProperty("Content-Type", "application/json; charset=utf-8")
                    setRequestProperty("Accept", "application/json")
                    setRequestProperty("User-Agent", "KhaiTracker/1.0.0 (Android)")
                }
                conn.outputStream.use { it.write(payload.toString().toByteArray(Charsets.UTF_8)) }
                val status = conn.responseCode
                if (status in 200..299) {
                    ok = true
                    message = a.getString(R.string.sync_ok)
                    a.store.markSynced(code, all.map { it.date })
                    prefs.lastSyncAt = System.currentTimeMillis()
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
