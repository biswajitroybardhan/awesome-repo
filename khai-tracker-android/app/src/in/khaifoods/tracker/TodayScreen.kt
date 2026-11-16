package `in`.khaifoods.tracker

import android.graphics.Typeface
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView

/** The daily instrument: what was eaten, what was taken, what was measured, how the day felt. */
class TodayScreen(private val a: MainActivity) {

    private fun slotLabel(slot: String): String = when (slot) {
        "breakfast" -> a.getString(R.string.meal_breakfast)
        "lunch" -> a.getString(R.string.meal_lunch)
        "dinner" -> a.getString(R.string.meal_dinner)
        else -> a.getString(R.string.meal_snacks)
    }

    fun build(): View {
        val e = a.entry()
        val content = Ui.v(a)
        content.setPadding(a.dp(16), a.dp(12), a.dp(16), a.dp(30))

        content.addView(dateStrip())

        if (a.dayComplete(e)) {
            content.addView(Ui.pill(a, "✓ " + a.getString(R.string.done), a.color(R.color.khai_primary_light), a.color(R.color.khai_primary_dark)))
        }

        // ---- meals
        for (slot in listOf("breakfast", "lunch", "dinner", "snacks")) {
            content.addView(mealCard(e, slot))
        }

        // ---- estimate
        if (e.hasFood()) {
            content.addView(Ui.section(a, a.getString(R.string.todays_total)) { c ->
                val carb = e.totalCarb
                val kcal = e.totalKcal
                c.addView(Ui.body(a, "≈ ${carb.toInt()} g " + a.getString(R.string.total_carbs) + " · ≈ ${kcal.toInt()} kcal"))
                c.addView(Ui.body(a, a.getString(R.string.range_note)))
            })
        }

        content.addView(medsCard(e))
        content.addView(readingsCard(e))
        content.addView(wellbeingCard(e))

        content.addView(Ui.button(a, a.getString(R.string.save_today), true) {
            a.save(e)
            a.render()
        })
        content.addView(Ui.body(a, a.getString(R.string.already_saved)))
        content.addView(Ui.body(a, a.getString(R.string.disclaimer)))
        return Ui.scroll(a, content)
    }

    private fun dateStrip(): View {
        val card = Ui.card(a)
        val row = Ui.h(a)
        row.addView(roundGlyph("\u2039") {
            a.date = DateU.shift(a.date, -1)
            a.render()
        })
        val mid = Ui.v(a)
        mid.addView(TextView(a).apply {
            text = DateU.pretty(a.date)
            textSize = 18f
            typeface = Typeface.create("serif", Typeface.BOLD)
            setTextColor(a.color(R.color.khai_text))
            gravity = Gravity.CENTER
        })
        val isToday = a.date == DateU.today()
        mid.addView(TextView(a).apply {
            text = if (isToday) a.getString(R.string.tab_today) else a.getString(R.string.back)
            textSize = 12f
            gravity = Gravity.CENTER
            setTextColor(a.color(R.color.khai_muted))
            setPadding(0, a.dp(2), 0, 0)
            if (!isToday) {
                isClickable = true
                setOnClickListener { a.date = DateU.today(); a.render() }
            }
        })
        row.addView(mid, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
        row.addView(roundGlyph("\u203A") {
            if (!DateU.isFuture(DateU.shift(a.date, 1))) {
                a.date = DateU.shift(a.date, 1)
                a.render()
            }
        })
        card.addView(row)
        return card
    }

    private fun roundGlyph(text: String, onClick: () -> Unit): TextView = TextView(a).apply {
        this.text = text
        textSize = 24f
        gravity = Gravity.CENTER
        setTextColor(a.color(R.color.khai_primary))
        background = Ui.rounded(a, a.color(R.color.khai_primary_light), 12)
        isClickable = true
        isFocusable = true
        layoutParams = LinearLayout.LayoutParams(a.dp(48), a.dp(48))
        setOnClickListener { onClick() }
    }

    private fun mealCard(e: DayEntry, slot: String): View {
        val card = Ui.card(a) { c ->
            val head = Ui.h(a)
            head.addView(Ui.heading(a, slotLabel(slot)))
            val add = TextView(a).apply {
                text = a.getString(R.string.add_food)
                textSize = 13.5f
                typeface = Typeface.create("sans-serif-medium", Typeface.NORMAL)
                setTextColor(a.color(R.color.khai_primary))
                setPadding(a.dp(10), a.dp(6), 0, a.dp(6))
                isClickable = true
                isFocusable = true
                setOnClickListener {
                    FoodPicker.show(a, slot) { food, qty ->
                        val item = FoodItem(
                            foodId = food.id,
                            label = food.label(a.prefs.lang),
                            qty = qty,
                            unit = food.unit,
                            kcal = food.kcal.mid() * qty,
                            carb = food.carb.mid() * qty,
                            protein = food.protein.mid() * qty,
                            fat = food.fat.mid() * qty,
                            sodium = food.sodium.mid() * qty
                        )
                        e.meals[slot]?.add(item)
                        a.saveQuiet(e)
                        a.render()
                    }
                }
            }
            head.addView(add, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f).apply {
                gravity = Gravity.END
            })
            c.addView(head)

            val list = e.meals[slot] ?: return@card
            if (list.isEmpty()) {
                c.addView(Ui.body(a, a.getString(R.string.no_food_yet)))
            }
            for ((idx, item) in list.withIndex()) {
                val row = Ui.h(a)
                val left = Ui.v(a)
                left.addView(TextView(a).apply {
                    text = a.foodLabel(item)
                    textSize = 15f
                    setTextColor(a.color(R.color.khai_text))
                })
                left.addView(TextView(a).apply {
                    val q = if (item.qty == item.qty.toInt().toDouble()) item.qty.toInt().toString() else item.qty.toString()
                    text = "$q × ${item.unit} · ≈ ${item.carb.toInt()} g " + a.getString(R.string.carbs)
                    textSize = 12.5f
                    setTextColor(a.color(R.color.khai_muted))
                })
                row.addView(left, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
                row.addView(TextView(a).apply {
                    text = "\u2715"
                    textSize = 15f
                    setTextColor(a.color(R.color.khai_muted))
                    setPadding(a.dp(12), a.dp(8), a.dp(2), a.dp(8))
                    isClickable = true
                    contentDescription = a.getString(R.string.remove)
                    setOnClickListener {
                        list.removeAt(idx)
                        a.saveQuiet(e)
                        a.render()
                    }
                })
                c.addView(row)
            }
        }
        return card
    }

    private fun medsCard(e: DayEntry): View {
        val profileMeds = a.prefs.profile()?.medicines ?: emptyList()
        return Ui.section(a, a.getString(R.string.meds_title)) { c ->
            c.addView(Ui.body(a, a.getString(R.string.meds_hint)))
            if (profileMeds.isEmpty()) {
                c.addView(Ui.body(a, a.getString(R.string.meds_none)))
                c.addView(Ui.smallButton(a, a.getString(R.string.add_medicines), false) { a.go(Screen.SETTINGS) })
                return@section
            }
            for (m in profileMeds) {
                val label = if (m.dose.isBlank()) m.name else "${m.name} · ${m.dose}"
                c.addView(TextView(a).apply {
                    text = label
                    textSize = 14.5f
                    setTextColor(a.color(R.color.khai_text))
                    setPadding(0, a.dp(8), 0, a.dp(4))
                })
                val current = e.meds.firstOrNull { it.name == m.name }
                val index = when (current?.status) {
                    "skipped" -> 1
                    "changed" -> 2
                    else -> 0
                }
                c.addView(
                    Ui.segmented(
                        a,
                        listOf(
                            a.getString(R.string.meds_taken),
                            a.getString(R.string.meds_skipped),
                            a.getString(R.string.meds_changed)
                        ),
                        if (current == null) -1 else index
                    ) { picked ->
                        val status = when (picked) {
                            1 -> "skipped"
                            2 -> "changed"
                            else -> "taken"
                        }
                        e.meds.removeAll { it.name == m.name }
                        e.meds.add(MedStatus(m.name, m.dose, status))
                        a.saveQuiet(e)
                    }
                )
            }
        }
    }

    private fun readingsCard(e: DayEntry): View = Ui.section(a, a.getString(R.string.vitals_title)) { c ->
        c.addView(Ui.body(a, a.getString(R.string.vitals_hint)))

        val bpRow = Ui.h(a)
        bpRow.addView(numColumn(a.getString(R.string.bp_sys), e.sys?.toString() ?: "") { e.sys = it.toIntOrNull(); a.touchEntry(e) }, weight())
        bpRow.addView(numColumn(a.getString(R.string.bp_dia), e.dia?.toString() ?: "") { e.dia = it.toIntOrNull(); a.touchEntry(e) }, weight())
        bpRow.addView(numColumn(a.getString(R.string.pulse), e.pulse?.toString() ?: "") { e.pulse = it.toIntOrNull(); a.touchEntry(e) }, weight())
        c.addView(bpRow)

        c.addView(Ui.label(a, a.getString(R.string.glucose)))
        val gRow = Ui.h(a)
        gRow.addView(decColumn("mg/dL", e.glucose?.let { if (it == it.toInt().toDouble()) it.toInt().toString() else it.toString() } ?: "") {
            e.glucose = it.toDoubleOrNull()
            a.touchEntry(e)
        }, weight())
        c.addView(gRow)
        c.addView(
            Ui.segmented(
                a,
                listOf(a.getString(R.string.glucose_fasting), a.getString(R.string.glucose_pp)),
                if (e.glucoseType == "pp") 1 else 0
            ) { idx -> e.glucoseType = if (idx == 1) "pp" else "fasting"; a.saveQuiet(e) }
        )

        c.addView(Ui.label(a, a.getString(R.string.weight)))
        val wRow = Ui.h(a)
        wRow.addView(decColumn("kg", e.weight?.let { if (it == it.toInt().toDouble()) it.toInt().toString() else it.toString() } ?: "") {
            e.weight = it.toDoubleOrNull()
            a.touchEntry(e)
        }, weight())
        c.addView(wRow)
    }

    private fun wellbeingCard(e: DayEntry): View = Ui.section(a, a.getString(R.string.wellbeing_title)) { c ->
        c.addView(Ui.label(a, a.getString(R.string.energy)))
        c.addView(Ui.rating(a, e.energy ?: 0) { e.energy = it; a.saveQuiet(e) })
        c.addView(Ui.label(a, a.getString(R.string.mood)))
        c.addView(Ui.rating(a, e.mood ?: 0) { e.mood = it; a.saveQuiet(e) })
        c.addView(Ui.field(a, a.getString(R.string.sleep), Ui.input(a, "7", decimal = true).apply {
            setText(e.sleep?.let { if (it == it.toInt().toDouble()) it.toInt().toString() else it.toString() } ?: "")
            onChangeText { v -> e.sleep = v.toDoubleOrNull(); a.touchEntry(e) }
        }))
        c.addView(Ui.field(a, a.getString(R.string.note), Ui.input(a, "").apply {
            setText(e.note)
            onChangeText { v -> e.note = v; a.touchEntry(e) }
        }))
    }

    private fun weight(): LinearLayout.LayoutParams =
        LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f).apply { marginEnd = a.dp(6) }

    private fun numColumn(label: String, value: String, onChange: (String) -> Unit): LinearLayout {
        val col = Ui.v(a)
        col.addView(Ui.label(a, label))
        val input = Ui.input(a, "—", numeric = true)
        if (value.isNotEmpty()) input.setText(value)
        input.onChangeText(onChange)
        col.addView(input)
        return col
    }

    private fun decColumn(hint: String, value: String, onChange: (String) -> Unit): LinearLayout {
        val col = Ui.v(a)
        val input = Ui.input(a, hint, decimal = true)
        if (value.isNotEmpty()) input.setText(value)
        input.onChangeText(onChange)
        col.addView(input)
        return col
    }
}

