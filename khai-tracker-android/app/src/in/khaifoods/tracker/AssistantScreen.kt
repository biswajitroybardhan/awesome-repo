package `in`.khaifoods.tracker

import android.graphics.Typeface
import android.text.InputType
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.HorizontalScrollView
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView

/**
 * Khai Guide — a deterministic, grounded helper for the Android app.
 *
 * There is no model, no training and no network call. Every answer is a fixed
 * string resource that already ships with the translated help text, so the
 * helper cannot invent a claim. Personal interpretation, diagnosis and
 * treatment questions are redirected to a qualified clinician.
 *
 * Answers can be read aloud by the phone's own text-to-speech engine. There is
 * no microphone input and no network call; the helper still uses text only.
 */
class AssistantScreen(private val a: MainActivity) {

    private data class Intent(
        val phrases: List<String>,
        val answers: List<Int>
    )

    /** Phrases are English keywords plus the current locale's own help labels. */
    private fun intents(): List<Intent> = listOf(
        Intent(
            listOf(
                "medical device", "is this a device", "diagnose", "diagnosis",
                "approved", "fda", "certified", "a doctor", a.str(R.string.disclaimer)
            ),
            listOf(R.string.disclaimer, R.string.ask_clinician)
        ),
        Intent(
            listOf(
                "advice", "treatment", "prescription", "should i", "what medicine",
                "change my", "diet plan", "not medical advice"
            ),
            listOf(R.string.disclaimer, R.string.ask_clinician)
        ),
        Intent(
            listOf(
                "reading", "blood pressure", "sugar", "glucose", "weight", "pulse",
                "interpret", "normal", "high", "low", "my numbers", "bp",
                a.str(R.string.vitals_title)
            ),
            listOf(R.string.vitals_hint, R.string.insights_empty, R.string.insights_caveat, R.string.ask_clinician)
        ),
        Intent(
            listOf(
                "medicine", "medication", "drug", "dose", "tablet", "pill",
                "missed a dose", a.str(R.string.meds_title)
            ),
            listOf(R.string.disclaimer, R.string.meds_hint, R.string.ask_clinician)
        ),
        Intent(
            listOf(
                "export", "download", "csv", "fhir", "json", "print", "share",
                "backup", a.str(R.string.export_title)
            ),
            listOf(R.string.export_hint, R.string.privacy_body, R.string.ask_clinician)
        ),
        Intent(
            listOf(
                "privacy", "private", "data", "secure", "encrypt", "upload",
                "server", "who sees", a.str(R.string.consent_title), a.str(R.string.privacy_title)
            ),
            listOf(R.string.consent_body, R.string.privacy_body)
        ),
        Intent(
            listOf(
                "language", "hindi", "english", "translate", "switch language", a.str(R.string.language)
            ),
            listOf(R.string.language_hint)
        ),
        Intent(
            listOf(
                "food", "carb", "portion", "dish", "calorie", "diet", "meal",
                "eat", "estimate", a.str(R.string.range_note)
            ),
            listOf(R.string.range_note, R.string.insights_caveat)
        ),
        Intent(
            listOf(
                "pattern", "trend", "progress", "completeness", "streak", "insight",
                "a week", a.str(R.string.progress_title), a.str(R.string.insights_title)
            ),
            listOf(R.string.insights_empty, R.string.completeness_hint, R.string.insights_caveat)
        ),
        Intent(
            listOf("what is", "about", "who built", "khai foods", "purpose", "your app", "this app", a.str(R.string.about)),
            listOf(R.string.about_body, R.string.disclaimer)
        )
    )

    private fun norm(value: String): String = value.lowercase()
        .replace(Regex("[\\u200b-\\u200d\\ufeff]"), "")
        .replace(Regex("[.,!?;:'\"()\\[\\]{}…·—–_\\-]"), " ")
        .replace(Regex("\\s+"), " ")
        .trim()

    /** Deterministic: pick the intent with the most phrase hits, then read its fixed strings. */
    private fun answerFor(question: String): String {
        val q = norm(question)
        if (q.isEmpty()) return a.str(R.string.assistant_unknown)

        var best: Intent? = null
        var bestScore = 0
        for (intent in intents()) {
            var score = 0
            for (raw in intent.phrases) {
                val phrase = norm(raw)
                if (phrase.isNotEmpty() && q.contains(phrase)) {
                    score += if (phrase.contains(' ')) 2 else 1
                }
            }
            if (score > bestScore) {
                bestScore = score
                best = intent
            }
        }

        val keys = (best?.answers ?: listOf(R.string.assistant_unknown)).toMutableList()
        val clinician = a.str(R.string.ask_clinician)
        if (clinician !in keys.map { a.str(it) }) keys.add(R.string.ask_clinician)

        val seen = HashSet<String>()
        val parts = ArrayList<String>()
        for (key in keys) {
            val text = a.str(key)
            if (text.isNotEmpty() && seen.add(text)) parts.add(text)
        }
        return parts.joinToString("\n\n")
    }

    fun build(): View {
        val content = Ui.v(a)
        content.setPadding(a.dp(16), a.dp(14), a.dp(16), a.dp(24))

        content.addView(Ui.hero(a, a.str(R.string.assistant_title)))
        content.addView(Ui.body(a, a.str(R.string.assistant_intro)))
        if (Languages.isDraft(a.prefs.lang)) {
            content.addView(Ui.body(a, a.str(R.string.draft_notice), muted = false))
        }
        content.addView(Ui.body(a, a.str(R.string.disclaimer)))
        content.addView(Ui.blank(a, 6))

        // ---- conversation log (native text views, no WebView)
        val log = Ui.v(a).apply {
            background = Ui.rounded(a, a.color(R.color.khai_bg), 12)
            setPadding(a.dp(12), a.dp(12), a.dp(12), a.dp(12))
            layoutParams = LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT
            ).apply { bottomMargin = a.dp(10) }
        }
        content.addView(log)

        // The enclosing scroll view is built at the end of this method. Keep a
        // reference so each new answer can be brought into view.
        var scroll: ScrollView? = null
        var input: EditText? = null

        fun addMessage(mine: Boolean, text: String) {
            val wrapper = Ui.v(a).apply {
                layoutParams = LinearLayout.LayoutParams(
                    ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
                ).apply {
                    if (mine) gravity = Gravity.END
                    topMargin = a.dp(6)
                }
            }
            val bubble = TextView(a).apply {
                this.text = text
                textSize = 14f
                setTextColor(a.color(if (mine) R.color.white else R.color.khai_text))
                setLineSpacing(a.dp(3).toFloat(), 1f)
                background = Ui.rounded(a, a.color(if (mine) R.color.khai_primary_dark else R.color.khai_surface), 12)
                setPadding(a.dp(12), a.dp(10), a.dp(12), a.dp(10))
                layoutParams = LinearLayout.LayoutParams(
                    ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
                )
            }
            wrapper.addView(bubble)
            if (!mine) {
                wrapper.addView(Ui.smallButton(a, a.str(R.string.assistant_listen), false) {
                    a.speak(text)
                }.apply {
                    layoutParams = LinearLayout.LayoutParams(
                        ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
                    ).apply { topMargin = a.dp(2) }
                })
            }
            log.addView(wrapper)
            scroll?.post { scroll?.fullScroll(View.FOCUS_DOWN) }
        }

        fun ask(question: String) {
            val q = question.trim()
            if (q.isEmpty()) return
            addMessage(true, q)
            addMessage(false, answerFor(q))
            input?.setText("")
        }

        // The intro and the non-medical claim are already shown above this log;
        // repeating them here would push the first real answer off screen.

        // ---- suggested questions, from the current locale's own help labels
        val chips = listOf(
            R.string.about, R.string.vitals_title, R.string.meds_title,
            R.string.export_title, R.string.privacy_title, R.string.insights_title,
            R.string.language
        ).map { a.str(it) }
        content.addView(Ui.chipRow(a, chips) { ask(it) })

        // ---- question box
        val row = Ui.h(a)
        val inputView = Ui.input(a, a.str(R.string.assistant_input_ph)).apply {
            inputType = InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_FLAG_CAP_SENTENCES
            maxLines = 4
            layoutParams = LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f)
        }
        input = inputView
        val send = Ui.button(a, a.str(R.string.assistant_send), true) { ask(inputView.text.toString()) }
        send.isAllCaps = false
        send.typeface = Typeface.create("sans-serif-medium", Typeface.NORMAL)
        send.layoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT
        ).apply { topMargin = a.dp(10); marginStart = a.dp(8) }
        row.addView(inputView)
        row.addView(send)
        content.addView(row)

        val result = Ui.scroll(a, content)
        scroll = result
        return result
    }
}

/** Short alias so answer strings read cleanly above. */
private fun MainActivity.str(id: Int): String = getString(id)
