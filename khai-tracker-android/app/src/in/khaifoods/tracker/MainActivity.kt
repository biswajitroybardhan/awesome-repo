package `in`.khaifoods.tracker

import android.app.Activity
import android.app.AlertDialog
import android.content.Context
import android.content.Intent
import android.graphics.Typeface
import android.os.Build
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import android.window.OnBackInvokedDispatcher
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast

enum class Screen { TODAY, HISTORY, PROGRESS, ASSISTANT, SETTINGS }

class MainActivity : Activity() {

    lateinit var prefs: Prefs
    lateinit var store: Store
    lateinit var lib: FoodLibrary

    private lateinit var body: FrameLayout
    private lateinit var navBar: LinearLayout
    private lateinit var title: TextView

    var screen = Screen.TODAY
    var date: String = DateU.today()
    var editingProfile = false
    private var unlocked = false
    private var leftAt = 0L
    private var tts: TextToSpeech? = null

    /** The day being edited, so text typed into a field survives leaving the screen. */
    private var liveEntry: DayEntry? = null
    private var liveDirty = false

    override fun attachBaseContext(newBase: Context) {
        super.attachBaseContext(Lang.wrap(newBase))
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val app = application as KhaiApp
        prefs = app.prefs
        store = app.store
        lib = app.library
        if (prefs.hidePreviews) {
            window.setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE)
        }
        Reminders.ensureChannel(this)
        buildShell()
        registerBackHandler()
        unlocked = !prefs.pinEnabled
        render()
    }

    override fun onResume() {
        super.onResume()
        if (prefs.hidePreviews) {
            window.setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE)
        } else {
            window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
        }
    }

    /**
     * Coming back from the share sheet should not demand a PIN, but a phone left on a table for
     * a few minutes should. One minute is the line.
     */
    override fun onStart() {
        super.onStart()
        if (this::body.isInitialized && prefs.pinEnabled && leftAt > 0 &&
            System.currentTimeMillis() - leftAt > 60_000L
        ) {
            unlocked = false
            leftAt = 0L
            render()
        }
    }

    override fun onPause() {
        flushEntry()
        super.onPause()
    }

    override fun onStop() {
        if (prefs.pinEnabled && !isChangingConfigurations) leftAt = System.currentTimeMillis()
        super.onStop()
    }

    override fun onDestroy() {
        tts?.shutdown()
        super.onDestroy()
    }

    // ---------------------------------------------------------------- shell

    private fun buildShell() {
        val root = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setBackgroundColor(color(R.color.khai_bg))
            fitsSystemWindows = true
        }

        val top = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.CENTER_VERTICAL
            setBackgroundColor(color(R.color.khai_primary))
            setPadding(dp(18), dp(14), dp(12), dp(14))
        }
        val brand = TextView(this).apply {
            text = getString(R.string.brand) + " "
            textSize = 20f
            typeface = Typeface.create("serif", Typeface.BOLD)
            setTextColor(color(R.color.white))
        }
        val sub = TextView(this).apply {
            text = getString(R.string.brand_sub)
            textSize = 20f
            typeface = Typeface.create("serif", Typeface.NORMAL)
            setTextColor(0xCCFFFFFF.toInt())
        }
        title = TextView(this).apply {
            textSize = 13.5f
            setTextColor(0xCCFFFFFF.toInt())
            gravity = Gravity.END
            maxLines = 1
            setPadding(dp(8), 0, dp(6), 0)
        }
        val gear = TextView(this).apply {
            text = "\u2699"
            textSize = 22f
            setTextColor(color(R.color.white))
            gravity = Gravity.CENTER
            isClickable = true
            isFocusable = true
            contentDescription = getString(R.string.tab_settings)
            setPadding(dp(12), dp(4), dp(12), dp(4))
            setOnClickListener { go(Screen.SETTINGS) }
        }
        top.addView(brand)
        top.addView(sub)
        top.addView(title, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f).apply {
            gravity = Gravity.END
        })
        top.addView(gear)

        body = FrameLayout(this).apply {
            layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 0, 1f)
        }

        navBar = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            setBackgroundColor(color(R.color.khai_surface))
            setPadding(0, dp(4), 0, dp(4))
            elevation = dp(8).toFloat()
        }

        root.addView(top)
        root.addView(body)
        root.addView(navBar)
        setContentView(root)
    }

    fun render() {
        // Any half-typed field belongs to the day being left behind.
        if (this::body.isInitialized) flushEntry()
        stopSpeech()
        title.text = when (screen) {
            Screen.TODAY -> DateU.pretty(date)
            Screen.HISTORY -> getString(R.string.tab_history)
            Screen.PROGRESS -> getString(R.string.progress_title)
            Screen.ASSISTANT -> getString(R.string.assistant_title)
            Screen.SETTINGS -> getString(R.string.settings_title)
        }

        if (!prefs.onboardingDone) {
            navBar.visibility = View.GONE
            setBody(OnboardingView(this).build())
            return
        }
        if (editingProfile) {
            navBar.visibility = View.GONE
            setBody(OnboardingView(this, editMode = true).build())
            return
        }
        if (!unlocked) {
            navBar.visibility = View.GONE
            setBody(pinGate())
            return
        }

        navBar.visibility = View.VISIBLE
        buildNav()
        val view: View = when (screen) {
            Screen.TODAY -> TodayScreen(this).build()
            Screen.HISTORY -> HistoryScreen(this).build()
            Screen.PROGRESS -> ProgressScreen(this).build()
            Screen.ASSISTANT -> AssistantScreen(this).build()
            Screen.SETTINGS -> SettingsScreen(this).build()
        }
        setBody(view)
    }

    private fun setBody(view: View) {
        body.removeAllViews()
        body.addView(view, FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT)
    }

    private fun buildNav() {
        navBar.removeAllViews()
        val items = listOf(
            Triple(Screen.TODAY, getString(R.string.tab_today), "\u25C9"),
            Triple(Screen.HISTORY, getString(R.string.tab_history), "\u25A6"),
            Triple(Screen.PROGRESS, getString(R.string.tab_progress), "\u2197"),
            Triple(Screen.ASSISTANT, getString(R.string.assistant_tab), "\u2753"),
            Triple(Screen.SETTINGS, getString(R.string.tab_settings), "\u2261")
        )
        for ((target, label, glyph) in items) {
            val active = screen == target
            val item = LinearLayout(this).apply {
                orientation = LinearLayout.VERTICAL
                gravity = Gravity.CENTER
                isClickable = true
                isFocusable = true
                contentDescription = label
                setPadding(0, dp(7), 0, dp(5))
                layoutParams = LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f)
                setOnClickListener { go(target) }
            }
            item.addView(TextView(this).apply {
                text = glyph
                textSize = 17f
                gravity = Gravity.CENTER
                setTextColor(color(if (active) R.color.khai_primary else R.color.khai_muted))
            })
            item.addView(TextView(this).apply {
                text = label
                textSize = 11.5f
                gravity = Gravity.CENTER
                setTypeface(Typeface.create("sans-serif", if (active) Typeface.BOLD else Typeface.NORMAL))
                setTextColor(color(if (active) R.color.khai_primary else R.color.khai_muted))
                setPadding(0, dp(1), 0, dp(2))
            })
            item.addView(View(this).apply {
                setBackgroundColor(color(if (active) R.color.khai_primary else android.R.color.transparent))
                layoutParams = LinearLayout.LayoutParams(dp(22), dp(3)).apply { topMargin = dp(2) }
            })
            navBar.addView(item)
        }
    }

    fun go(target: Screen) {
        screen = target
        if (target == Screen.TODAY && DateU.isFuture(date)) date = DateU.today()
        render()
    }

    fun openDay(day: String) {
        date = day
        screen = Screen.TODAY
        render()
    }

    // ---------------------------------------------------------------- pin gate

    private fun pinGate(): View {
        val content = Ui.v(this).apply { setPadding(dp(20), dp(26), dp(20), dp(20)) }
        content.addView(Ui.hero(this, getString(R.string.app_name)))
        content.addView(Ui.body(this, getString(R.string.pin_hint)))
        val input = Ui.input(this, getString(R.string.pin_enter), numeric = true).apply {
            inputType = android.text.InputType.TYPE_CLASS_NUMBER or android.text.InputType.TYPE_NUMBER_VARIATION_PASSWORD
            filters = arrayOf(android.text.InputFilter.LengthFilter(4))
        }
        val error = Ui.body(this, "")
        content.addView(Ui.field(this, getString(R.string.pin_enter), input))
        content.addView(error)
        val okButton = Ui.button(this, getString(R.string.ok), true) {
            if (prefs.checkPin(input.text.toString())) {
                unlocked = true
                render()
            } else {
                val wait = prefs.pinBlockSeconds()
                error.text = if (wait > 0) {
                    getString(R.string.pin_wrong) + " " + getString(R.string.pin_locked, wait)
                } else {
                    getString(R.string.pin_wrong)
                }
                input.setText("")
                if (wait > 0) render()
            }
        }
        val blockedFor = prefs.pinBlockSeconds()
        if (blockedFor > 0) {
            okButton.isEnabled = false
            input.isEnabled = false
            error.text = getString(R.string.pin_locked, blockedFor)
            input.postDelayed({ render() }, blockedFor * 1000L)
        }
        content.addView(okButton)
        content.addView(Ui.smallButton(this, getString(R.string.erase), false) {
            AlertDialog.Builder(this)
                .setMessage(R.string.erase_confirm)
                .setNegativeButton(R.string.cancel, null)
                .setPositiveButton(R.string.erase_yes) { _, _ ->
                    eraseEverything()
                    unlocked = true
                    render()
                }
                .show()
        })
        return Ui.scroll(this, content)
    }

    // ---------------------------------------------------------------- facilities

    fun dp(v: Int): Int = Ui.run { this@MainActivity.dp(v) }

    fun color(id: Int): Int = Ui.run { this@MainActivity.color(id) }

    fun toast(msg: String) = Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()

    fun entry(day: String = date): DayEntry = store.load(prefs.code(), day) ?: DayEntry(day)

    /**
     * Fields that save as you type are cheap to lose and expensive to retype. A typed reading is
     * held on the live entry and written when the screen changes, the app pauses or save is pressed.
     */
    fun touchEntry(entry: DayEntry) {
        if (liveDirty && liveEntry?.date != entry.date) flushEntry()
        liveEntry = entry
        liveDirty = true
    }

    private fun flushEntry() {
        if (!liveDirty) return
        liveDirty = false
        liveEntry?.let { store.save(prefs.code(), it) }
    }

    /**
     * Complete means food and a measurement, plus medicine status when the profile lists medicines.
     * A participant who takes no medicines should still be able to record a complete day.
     */
    fun dayComplete(e: DayEntry): Boolean {
        val medsPrescribed = prefs.profile()?.medicines?.isNotEmpty() == true
        return e.hasFood() && e.hasReading() && (!medsPrescribed || e.hasMeds())
    }

    /** The participant's own erase: records, settings, PIN, reminders, in that order. */
    fun eraseEverything() {
        liveEntry = null
        liveDirty = false
        prefs.eraseAll(store)
        Exports.clearCache(this)
        Reminders.cancel(this)
    }

    /**
     * A dish name is stored as a snapshot of what the participant saw, but the stable library id is
     * authoritative. Resolve through the library so a language switch never leaves a screen half in
     * the old language; fall back to the snapshot if the dish has since left the library.
     */
    fun foodLabel(item: FoodItem, lang: String = prefs.lang): String =
        lib.byId(item.foodId)?.label(lang) ?: item.label

    fun save(entry: DayEntry): Boolean {
        val ok = store.save(prefs.code(), entry)
        if (ok && liveEntry?.date == entry.date) liveDirty = false
        if (ok) {
            toast(getString(R.string.saved))
            if (prefs.syncUrl.isNotBlank()) Sync.tryBackground(this)
        } else {
            toast(getString(R.string.save_failed))
        }
        return ok
    }

    /** Saves a structural change (a food, a medicine state, a rating) without a toast. */
    fun saveQuiet(entry: DayEntry) {
        store.save(prefs.code(), entry)
        if (prefs.syncUrl.isNotBlank()) Sync.tryBackground(this)
    }

    /** Reads text aloud with the phone's own TTS engine. No microphone, no network. */
    fun speak(text: String) {
        val utteranceId = "khai_speech_" + System.currentTimeMillis()
        val existing = tts
        if (existing != null) {
            existing.speak(text, TextToSpeech.QUEUE_FLUSH, null, utteranceId)
            return
        }
        tts = TextToSpeech(this) { status ->
            if (status == TextToSpeech.SUCCESS) {
                val engine = tts
                val res = engine?.setLanguage(Languages.locale(prefs.lang))
                if (res == TextToSpeech.LANG_MISSING_DATA || res == TextToSpeech.LANG_NOT_SUPPORTED) {
                    runOnUiThread { toast(getString(R.string.read_aloud_unavailable)) }
                } else {
                    engine?.speak(text, TextToSpeech.QUEUE_FLUSH, null, utteranceId)
                }
            } else {
                runOnUiThread { toast(getString(R.string.read_aloud_unavailable)) }
            }
        }
    }

    fun stopSpeech() {
        tts?.stop()
    }

    fun switchLanguage(code: String) {
        prefs.lang = code
        startActivity(Intent(this, MainActivity::class.java))
        finish()
    }

    @Suppress("DEPRECATION")
    private fun handleBack() {
        // Leaving an unfinished profile edit must not strand the participant there.
        if (editingProfile) {
            editingProfile = false
            render()
            return
        }
        if (screen != Screen.TODAY && prefs.onboardingDone && unlocked) {
            go(Screen.TODAY)
        } else {
            super.onBackPressed()
        }
    }

    /**
     * Apps targeting SDK 35 get predictive back by default, which bypasses onBackPressed().
     * Register the modern callback where it exists and keep the legacy override for API 24-32.
     */
    private fun registerBackHandler() {
        if (Build.VERSION.SDK_INT >= 33) {
            onBackInvokedDispatcher.registerOnBackInvokedCallback(
                OnBackInvokedDispatcher.PRIORITY_DEFAULT
            ) { handleBack() }
        }
    }

    @Deprecated("Superseded by OnBackInvokedDispatcher on API 33+")
    override fun onBackPressed() {
        handleBack()
    }
}
