package `in`.khaifoods.tracker

import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import kotlin.math.roundToInt

/** What the participant sees about their own record: completeness first, interpretation second. */
class ProgressScreen(private val a: MainActivity) {

    fun build(): View {
        val code = a.prefs.code()
        val entries = a.store.all(code)
        val byDate = entries.associateBy { it.date }
        val window = DateU.lastN(21)
        val complete = window.count { byDate[it]?.let { e -> a.dayComplete(e) } == true }
        val logged = window.count { byDate[it] != null }
        val pct = (complete * 100.0 / 21).roundToInt()
        val hi = a.prefs.lang.startsWith("hi")

        val content = Ui.v(a)
        content.setPadding(a.dp(16), a.dp(14), a.dp(16), a.dp(28))

        // ---- headline number
        content.addView(Ui.section(a, a.getString(R.string.completeness)) { c ->
            c.addView(TextView(a).apply {
                text = "$pct%"
                textSize = 40f
                typeface = android.graphics.Typeface.create("serif", android.graphics.Typeface.BOLD)
                setTextColor(a.color(R.color.khai_primary))
                setPadding(0, 0, 0, 0)
            })
            c.addView(Ui.body(a, "$complete / 21 · " + a.getString(R.string.days_logged) + ": $logged"))
            c.addView(Ui.body(a, a.getString(R.string.completeness_hint)))
        })

        // ---- stats
        val week = DateU.lastN(7)
        val weekLogged = week.count { byDate[it] != null }
        val row = Ui.h(a)
        row.addView(Ui.stat(a, streakText(byDate), a.getString(R.string.streak)), weight())
        row.addView(Ui.stat(a, "$weekLogged", a.getString(R.string.this_week)), weight())
        row.addView(Ui.stat(a, "${entries.size}", a.getString(R.string.days_logged)), weight())
        content.addView(row)
        content.addView(Ui.blank(a, 12))

        // ---- insights
        val insights = Insights.analyse(entries, hi)
        content.addView(Ui.section(a, a.getString(R.string.insights_title)) { c ->
            if (insights.isEmpty()) {
                c.addView(Ui.body(a, a.getString(R.string.insights_empty)))
            } else {
                for (i in insights) {
                    val block = Ui.v(a)
                    block.setPadding(0, a.dp(8), 0, a.dp(8))
                    block.addView(TextView(a).apply {
                        text = i.headline
                        textSize = 15f
                        setTextColor(a.color(R.color.khai_text))
                        setTypeface(android.graphics.Typeface.DEFAULT_BOLD)
                    })
                    block.addView(Ui.body(a, i.detail, muted = false))
                    block.addView(Ui.pill(a, strengthLabel(i.strength), a.color(R.color.khai_bg), a.color(R.color.khai_muted)))
                    c.addView(block)
                    c.addView(Ui.divider(a))
                }
            }
            c.addView(Ui.body(a, a.getString(R.string.insights_caveat)))
        })

        // ---- exports
        content.addView(Ui.section(a, a.getString(R.string.export_title)) { c ->
            c.addView(Ui.body(a, a.getString(R.string.export_hint)))
            c.addView(Ui.button(a, a.getString(R.string.export_summary), true) {
                Exports.sharePdf(a)
            })
            val r1 = Ui.h(a)
            r1.addView(Ui.rowButton(a, a.getString(R.string.export_food), false, 1f) { Exports.shareFoodCsv(a) })
            r1.addView(Ui.rowButton(a, a.getString(R.string.export_metrics), false, 1f) { Exports.shareMetricsCsv(a) })
            c.addView(r1)
            val r2 = Ui.h(a)
            r2.addView(Ui.rowButton(a, a.getString(R.string.export_fhir), false, 1f) { Exports.shareFhir(a) })
            r2.addView(Ui.rowButton(a, a.getString(R.string.export_backup), false, 1f) { Exports.shareBackup(a) })
            c.addView(r2)
        })

        // ---- privacy
        content.addView(Ui.section(a, a.getString(R.string.privacy_title)) { c ->
            c.addView(Ui.body(a, a.getString(R.string.privacy_body)))
            c.addView(Ui.smallButton(a, a.getString(R.string.erase), false) {
                android.app.AlertDialog.Builder(a)
                    .setMessage(R.string.erase_confirm)
                    .setNegativeButton(R.string.cancel, null)
                    .setPositiveButton(R.string.erase_yes) { _, _ ->
                        a.eraseEverything()
                        a.screen = Screen.TODAY
                        a.render()
                    }
                    .show()
            })
        })

        return Ui.scroll(a, content)
    }

    private fun weight(): LinearLayout.LayoutParams =
        LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f).apply {
            marginEnd = a.dp(8)
        }

    private fun strengthLabel(strength: String): String = a.getString(
        when (strength) {
            "moderate" -> R.string.insight_moderate
            "descriptive" -> R.string.insight_descriptive
            else -> R.string.insight_early
        }
    )

    private fun streakText(byDate: Map<String, DayEntry>): String {
        var streak = 0
        var cursor = DateU.today()
        if (byDate[cursor] == null) cursor = DateU.shift(cursor, -1)
        while (byDate[cursor] != null && streak < 400) {
            streak++
            cursor = DateU.shift(cursor, -1)
        }
        return streak.toString()
    }
}
