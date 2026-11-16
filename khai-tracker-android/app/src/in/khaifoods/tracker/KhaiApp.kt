package `in`.khaifoods.tracker

import android.app.Application
import android.content.res.Configuration
import android.os.LocaleList
import java.util.Locale

class KhaiApp : Application() {

    lateinit var prefs: Prefs
        private set
    lateinit var store: Store
        private set
    lateinit var library: FoodLibrary
        private set

    override fun onCreate() {
        super.onCreate()
        instance = this
        prefs = Prefs(this)
        store = Store(this)
        library = FoodLibrary(this)
        Reminders.ensureChannel(this)
        if (prefs.reminderOn) Reminders.schedule(this)
    }

    companion object {
        lateinit var instance: KhaiApp
            private set
    }
}

/** Applies the participant's chosen language to any context, on every API level we support. */
object Lang {
    fun wrap(base: android.content.Context): android.content.Context {
        val code = base.getSharedPreferences("khai_settings", android.content.Context.MODE_PRIVATE)
            .getString("lang", "en") ?: "en"
        val locale = Locale(code)
        Locale.setDefault(locale)
        val config = Configuration(base.resources.configuration)
        config.setLocales(LocaleList(locale))
        config.setLayoutDirection(locale)
        return base.createConfigurationContext(config)
    }
}
