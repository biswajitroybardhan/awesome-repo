package `in`.khaifoods.tracker

import android.graphics.Typeface
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView

/** The 21-day grid that matches the pilot protocol, plus a readable list of recent days. */
class HistoryScreen(private val a: MainActivity) {

    fun build(): View {
        val content = Ui.v(a)
        content.setPadding(a.dp(16), a.dp(14), a.dp(16), a.dp(28))
        val code = a.prefs.code()
        val entries = a.store.all(code).associateBy { it.date }

        content.addView(Ui.section(a, a.getString(R.string.history_title)) { c ->
            c.addView(Ui.body(a, a.getString(R.string.history_hint)))

            val days = DateU.lastN(21)
            for (week in 0 until 3) {
                val row = Ui.h(a)
                for (i in 0 until 7) {
                    val idx = week * 7 + i
                    if (idx >= days.size) {
                        row.addView(View(a), LinearLayout.LayoutParams(0, a.dp(56), 1f))
                        continue
                    }
                    val day = days[idx]
                    row.addView(dayCell(day, entries[day]), LinearLayout.LayoutParams(0, a.dp(56), 1f).apply {
                        marginEnd = a.dp(4)
                    })
                }
                c.addView(row)
                c.addView(Ui.blank(a, 4))
            }

            c.addView(Ui.chipRow(a, listOf(
                "◼ " + a.getString(R.string.done),
                "◻ " + a.getString(R.string.nothing_logged)
            )))
        })

        content.addView(Ui.section(a, a.getString(R.string.day_detail)) { c ->
            val recent = days20(entries)
            if (recent.isEmpty()) {
                c.addView(Ui.body(a, a.getString(R.string.nothing_logged)))
            }
            for (e in recent) {
                c.addView(recentRow(e))
            }
        })

        return Ui.scroll(a, content)
    }

    private fun days20(entries: Map<String, DayEntry>): List<DayEntry> =
        DateU.lastN(21).mapNotNull { entries[it] }.sortedByDescending { it.date }.take(10)

    private fun dayCell(day: String, entry: DayEntry?): View {
        val complete = entry != null && a.dayComplete(entry)
        val partial = entry != null && !complete
        val bg = when {
            complete -> a.color(R.color.khai_primary)
            partial -> a.color(R.color.khai_primary_light)
            else -> a.color(R.color.khai_bg)
        }
        val fg = if (complete) a.color(R.color.white) else a.color(R.color.khai_text)
        return LinearLayout(a).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER
            setBackgroundColor(bg)
            background = Ui.rounded(a, bg, 10)
            isClickable = true
            isFocusable = true
            contentDescription = DateU.pretty(day)
            setOnClickListener { a.openDay(day) }
            addView(TextView(a).apply {
                text = DateU.dayOfWeekShort(day)
                textSize = 10.5f
                gravity = Gravity.CENTER
                setTextColor(if (complete) 0xCFFFFFFF.toInt() else a.color(R.color.khai_muted))
            })
            addView(TextView(a).apply {
                text = day.substring(8).trimStart('0')
                textSize = 15f
                typeface = Typeface.create("serif", Typeface.BOLD)
                gravity = Gravity.CENTER
                setTextColor(fg)
            })
        }
    }

    private fun recentRow(e: DayEntry): View {
        val row = Ui.h(a)
        row.setPadding(0, a.dp(8), 0, a.dp(8))
        row.isClickable = true
        row.setOnClickListener { a.openDay(e.date) }

        val left = Ui.v(a)
        left.addView(TextView(a).apply {
            text = DateU.pretty(e.date)
            textSize = 14.5f
            typeface = Typeface.DEFAULT_BOLD
            setTextColor(a.color(R.color.khai_text))
        })
        val bits = mutableListOf<String>()
        if (e.hasFood()) bits.add(a.getString(R.string.food_items, e.foodCount()))
        if (e.hasReading()) {
            if (e.sys != null && e.dia != null) bits.add("BP ${e.sys}/${e.dia}")
            e.glucose?.let { bits.add("${it.toInt()} mg/dL") }
        }
        if (e.hasMeds()) {
            bits.add(a.getString(
                R.string.meds_summary,
                e.meds.count { it.status == "taken" },
                e.meds.size
            ))
        }
        left.addView(TextView(a).apply {
            text = if (bits.isEmpty()) a.getString(R.string.nothing_logged) else bits.joinToString(" · ")
            textSize = 12.5f
            setTextColor(a.color(R.color.khai_muted))
            setPadding(0, a.dp(2), 0, 0)
        })
        row.addView(left, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
        row.addView(TextView(a).apply {
            text = "\u203A"
            textSize = 20f
            setTextColor(a.color(R.color.khai_muted))
            setPadding(a.dp(8), 0, 0, 0)
        })
        return row
    }
}
