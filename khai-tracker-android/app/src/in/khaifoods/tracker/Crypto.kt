package `in`.khaifoods.tracker

import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import java.security.KeyStore
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec

/**
 * Record-level authenticated encryption with a non-exportable key held in the Android keystore.
 * AES-256-GCM, random 96-bit IV per record, record identity bound as AAD so ciphertext cannot be
 * moved between participants or dates.
 */
object Crypto {
    private const val ANDROID_KEYSTORE = "AndroidKeyStore"
    private const val ALIAS = "khai_record_key_v1"
    private const val TRANSFORM = "AES/GCM/NoPadding"

    @Synchronized
    private fun key(): SecretKey {
        val ks = KeyStore.getInstance(ANDROID_KEYSTORE).apply { load(null) }
        (ks.getEntry(ALIAS, null) as? KeyStore.SecretKeyEntry)?.let { return it.secretKey }
        val gen = KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, ANDROID_KEYSTORE)
        gen.init(
            KeyGenParameterSpec.Builder(ALIAS, KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT)
                .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
                .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
                .setKeySize(256)
                .setUserAuthenticationRequired(false)
                .build()
        )
        return gen.generateKey()
    }

    fun encrypt(plain: String, aad: String): Pair<ByteArray, ByteArray> {
        val c = Cipher.getInstance(TRANSFORM)
        c.init(Cipher.ENCRYPT_MODE, key())
        c.updateAAD(aad.toByteArray(Charsets.UTF_8))
        return Pair(c.iv, c.doFinal(plain.toByteArray(Charsets.UTF_8)))
    }

    fun decrypt(iv: ByteArray, cipherText: ByteArray, aad: String): String {
        val c = Cipher.getInstance(TRANSFORM)
        c.init(Cipher.DECRYPT_MODE, key(), GCMParameterSpec(128, iv))
        c.updateAAD(aad.toByteArray(Charsets.UTF_8))
        return String(c.doFinal(cipherText), Charsets.UTF_8)
    }

    /** True when the keystore can produce a usable key on this device. */
    fun available(): Boolean = try { key(); true } catch (e: Exception) { false }

    fun wipe() {
        try {
            val ks = KeyStore.getInstance(ANDROID_KEYSTORE).apply { load(null) }
            if (ks.containsAlias(ALIAS)) ks.deleteEntry(ALIAS)
        } catch (_: Exception) {
        }
    }
}
