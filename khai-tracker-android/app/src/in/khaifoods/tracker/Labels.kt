package `in`.khaifoods.tracker

import android.content.Context
import android.content.res.Configuration
import java.util.Locale

/**
 * Localised display for the two coded fields in the profile.
 *
 * Codes are stored, labels are rendered. That matters more than it looks: the participant can
 * switch from Hindi to English a year into the study, and the stored record must still mean the
 * same thing. It also means a clinician or an HL7 mapping gets a stable token rather than
 * "उच्च रक्तचाप" or "High blood pressure" depending on which phone opened the record last.
 */
object Labels {

    fun ageBand(ctx: Context, key: String): String =
        pick(ctx, R.array.age_band_keys, R.array.age_bands, key)

    fun condition(ctx: Context, key: String): String =
        pick(ctx, R.array.condition_keys, R.array.condition_options, key)

    fun conditions(ctx: Context, keys: List<String>): String =
        keys.map { condition(ctx, it) }.joinToString(", ")

    /** English rendering, used for the clinician sheet even when the app is in Hindi. */
    fun ageBandEnglish(ctx: Context, key: String): String =
        pick(english(ctx), R.array.age_band_keys, R.array.age_bands, key)

    fun conditionsEnglish(ctx: Context, keys: List<String>): String =
        keys.map { pick(english(ctx), R.array.condition_keys, R.array.condition_options, it) }
            .joinToString(", ")

    fun english(ctx: Context): Context {
        val config = Configuration(ctx.resources.configuration)
        config.setLocale(Locale.ENGLISH)
        return ctx.createConfigurationContext(config)
    }

    private fun pick(ctx: Context, keysRes: Int, labelsRes: Int, key: String): String {
        val keys = ctx.resources.getStringArray(keysRes)
        val index = keys.indexOf(key)
        if (index < 0) return key
        val labels = ctx.resources.getStringArray(labelsRes)
        return if (index < labels.size) labels[index] else key
    }
}
