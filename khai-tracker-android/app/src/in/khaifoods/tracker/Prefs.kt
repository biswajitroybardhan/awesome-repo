package `in`.khaifoods.tracker

import android.content.Context
import android.content.SharedPreferences
import android.util.Base64
import org.json.JSONArray
import org.json.JSONObject
import java.security.MessageDigest
import java.security.SecureRandom
import java.util.Locale
import java.util.UUID
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.PBEKeySpec

/**
 * Non-clinical settings. Never contains readings or notes; those live encrypted in [Store].
 * A PIN is stored only as a salted PBKDF2 hash, never in clear.
 */
class Prefs(context: Context) {

    private val sp: SharedPreferences =
        context.applicationContext.getSharedPreferences("khai_settings", Context.MODE_PRIVATE)

    var lang: String
        get() {
            val saved = sp.getString("lang", "en") ?: "en"
            return if (Languages.SHIPPED.any { it.code == saved }) saved else "en"
        }
        set(v) = sp.edit().putString(
            "lang", if (Languages.SHIPPED.any { it.code == v }) v else "en"
        ).apply()

    var deviceId: String
        get() {
            var v = sp.getString("device_id", null)
            if (v == null) {
                v = UUID.randomUUID().toString()
                sp.edit().putString("device_id", v).apply()
            }
            return v
        }
        set(v) = sp.edit().putString("device_id", v).apply()

    var reminderOn: Boolean
        get() = sp.getBoolean("reminder_on", false)
        set(v) = sp.edit().putBoolean("reminder_on", v).apply()

    /** Minutes after midnight, default 21:00. */
    var reminderMinutes: Int
        get() = sp.getInt("reminder_min", 21 * 60)
        set(v) = sp.edit().putInt("reminder_min", v).apply()

    var hidePreviews: Boolean
        get() = sp.getBoolean("hide_previews", true)
        set(v) = sp.edit().putBoolean("hide_previews", v).apply()

    var syncUrl: String
        get() = sp.getString("sync_url", "") ?: ""
        set(v) = sp.edit().putString("sync_url", v.trim()).apply()

    var lastSyncAt: Long
        get() = sp.getLong("last_sync_at", 0L)
        set(v) = sp.edit().putLong("last_sync_at", v).apply()

    var lastSyncOk: Boolean
        get() = sp.getBoolean("last_sync_ok", false)
        set(v) = sp.edit().putBoolean("last_sync_ok", v).apply()

    var lastSyncMessage: String
        get() = sp.getString("last_sync_msg", "") ?: ""
        set(v) = sp.edit().putString("last_sync_msg", v).apply()

    /** Per-device bearer credential issued by the institution. Never a participant password. */
    var syncToken: String
        get() = sp.getString("sync_token", "") ?: ""
        set(v) = sp.edit().putString("sync_token", v.trim()).apply()

    /** Base64 SHA-256 of the server's SPKI. Empty means system trust anchors only. */
    var syncPin: String
        get() = sp.getString("sync_pin", "") ?: ""
        set(v) = sp.edit().putString("sync_pin", v.trim()).apply()

    /** Explicit, revocable consent to send this participant's records to the configured server. */
    var syncConsent: Boolean
        get() = sp.getBoolean("sync_consent", false)
        set(v) = sp.edit().putBoolean("sync_consent", v).apply()

    var pinHash: String
        get() = sp.getString("pin_hash", "") ?: ""
        set(v) = sp.edit().putString("pin_hash", v).apply()

    var pinSalt: String
        get() = sp.getString("pin_salt", "") ?: ""
        set(v) = sp.edit().putString("pin_salt", v).apply()

    var pinEnabled: Boolean
        get() = sp.getBoolean("pin_enabled", false)
        set(v) = sp.edit().putBoolean("pin_enabled", v).apply()

    var onboardingDone: Boolean
        get() = sp.getBoolean("onboard_done", false)
        set(v) = sp.edit().putBoolean("onboard_done", v).apply()

    // ---- profile (identity + conditions/medicines; health metadata, so encrypted) ----
    private companion object {
        const val PROFILE_PLAIN = "profile"
        const val PROFILE_ENC = "profile_enc"
    }

    fun saveProfile(p: Profile) {
        val plain = p.toJson().toString()
        val (iv, ct) = Crypto.encrypt(plain, "khai-profile-v1")
        val packed = Base64.encodeToString(iv, Base64.DEFAULT) + "." +
                     Base64.encodeToString(ct, Base64.DEFAULT)
        sp.edit()
            .putString(PROFILE_ENC, packed)
            .remove(PROFILE_PLAIN)
            .putBoolean("onboard_done", true)
            .apply()
    }

    fun profile(): Profile? {
        val enc = sp.getString(PROFILE_ENC, null)
        if (!enc.isNullOrEmpty()) {
            return try {
                val parts = enc.split(".", limit = 2)
                val iv = Base64.decode(parts[0], Base64.DEFAULT)
                val ct = Base64.decode(parts[1], Base64.DEFAULT)
                val json = Crypto.decrypt(iv, ct, "khai-profile-v1")
                Profile.from(JSONObject(json))
            } catch (e: Exception) {
                null
            }
        }
        // One-time migration from the old plaintext profile.
        val raw = sp.getString(PROFILE_PLAIN, null) ?: return null
        return try {
            val p = Profile.from(JSONObject(raw))
            saveProfile(p)
            p
        } catch (e: Exception) {
            null
        }
    }

    fun code(): String = profile()?.code ?: ""

    // ---- PIN ----
    fun setPin(pin: String) {
        val saltBytes = ByteArray(16).also { SecureRandom().nextBytes(it) }
        val salt = toHex(saltBytes)
        pinSalt = salt
        pinHash = hashPin(pin, salt)
        pinEnabled = true
    }

    fun checkPin(pin: String): Boolean {
        if (!pinEnabled || pinHash.isEmpty()) return true
        if (pinBlockSeconds() > 0) return false
        if (!constantTimeEquals(hashPin(pin, pinSalt), pinHash)) {
            recordPinFailure()
            return false
        }
        clearPinFailures()
        return true
    }

    fun clearPin() {
        pinEnabled = false
        pinHash = ""
        pinSalt = ""
        clearPinFailures()
    }

    var pinFailures: Int
        get() = sp.getInt("pin_failures", 0)
        private set(v) = sp.edit().putInt("pin_failures", v).apply()

    var pinBlockedUntil: Long
        get() = sp.getLong("pin_blocked_until", 0L)
        private set(v) = sp.edit().putLong("pin_blocked_until", v).apply()

    /** Exponential backoff: 5 s, 10 s, 20 s … capped at 5 minutes. */
    fun recordPinFailure(): Long {
        val attempt = pinFailures + 1
        pinFailures = attempt
        val seconds = minOf(5 * (1 shl minOf(attempt - 1, 6)), 300)
        pinBlockedUntil = System.currentTimeMillis() + seconds * 1000L
        return seconds.toLong()
    }

    fun pinBlockSeconds(): Long =
        maxOf(0L, (pinBlockedUntil - System.currentTimeMillis()) / 1000L)

    fun clearPinFailures() {
        pinFailures = 0
        pinBlockedUntil = 0L
    }

    private fun hashPin(pin: String, saltHex: String): String {
        val salt = fromHex(saltHex)
        val spec = PBEKeySpec(pin.toCharArray(), salt, 120_000, 256)
        val f = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1")
        return toHex(f.generateSecret(spec).encoded)
    }

    private fun constantTimeEquals(a: String, b: String): Boolean {
        if (a.length != b.length) return false
        var r = 0
        for (i in a.indices) r = r or (a[i].code xor b[i].code)
        return r == 0
    }

    private fun toHex(b: ByteArray): String {
        val sb = StringBuilder(b.size * 2)
        // Locale.US is deliberate: some locales localise decimal digits, which would make the
        // stored hash unreadable to fromHex() on the same phone after a language change.
        for (x in b) sb.append(String.format(Locale.US, "%02x", x))
        return sb.toString()
    }

    private fun fromHex(s: String): ByteArray {
        if (s.isEmpty()) return ByteArray(0)
        val out = ByteArray(s.length / 2)
        for (i in out.indices) {
            out[i] = ((Character.digit(s[i * 2], 16) shl 4) + Character.digit(s[i * 2 + 1], 16)).toByte()
        }
        return out
    }

    fun eraseAll(store: Store) {
        store.eraseAll()
        sp.edit().clear().apply()
    }
}
