package `in`.khaifoods.tracker

import android.content.Context
import android.content.SharedPreferences
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
        get() = sp.getString("lang", "en") ?: "en"
        set(v) = sp.edit().putString("lang", v).apply()

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
        get() = sp.getBoolean("hide_previews", false)
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

    // ---- profile (non-clinical identity + conditions/medicines) ----
    fun saveProfile(p: Profile) {
        sp.edit()
            .putString("profile", p.toJson().toString())
            .putBoolean("onboard_done", true)
            .apply()
    }

    fun profile(): Profile? {
        val raw = sp.getString("profile", null) ?: return null
        return try { Profile.from(JSONObject(raw)) } catch (e: Exception) { null }
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
        return constantTimeEquals(hashPin(pin, pinSalt), pinHash)
    }

    fun clearPin() {
        pinEnabled = false
        pinHash = ""
        pinSalt = ""
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
