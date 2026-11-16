package `in`.khaifoods.tracker

import android.app.AlertDialog
import android.graphics.Typeface
import android.view.Gravity
import android.view.ViewGroup
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView

/**
 * Search-first food entry. Deliberately not a barcode scanner: the plate in front of the
 * participant is a home-cooked composite, so the unit of entry is a component ("one katori of
 * dal", "two rotis") with a portion cue, and the result is a range rather than grams.
 */
object FoodPicker {

    fun show(a: MainActivity, slot: String, onPick: (Food, Double) -> Unit) {
        val wrap = LinearLayout(a).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(a.dp(20), a.dp(8), a.dp(20), a.dp(4))
        }
        val search = Ui.input(a, a.getString(R.string.search_food))
        val listWrap = LinearLayout(a).apply { orientation = LinearLayout.VERTICAL }
        val scroll = ScrollView(a).apply {
            addView(listWrap)
            layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, a.dp(400))
        }

        fun fill(query: String) {
            listWrap.removeAllViews()
            val results = a.lib.search(query, slot).take(60)
            if (results.isEmpty()) {
                listWrap.addView(Ui.empty(a, a.getString(R.string.no_food_yet)))
                return
            }
            for (food in results) {
                val row = LinearLayout(a).apply {
                    orientation = LinearLayout.HORIZONTAL
                    gravity = Gravity.CENTER_VERTICAL
                    isClickable = true
                    isFocusable = true
                    setPadding(0, a.dp(10), 0, a.dp(10))
                    contentDescription = food.label(a.prefs.lang)
                }
                val col = Ui.v(a)
                col.addView(TextView(a).apply {
                    text = food.label(a.prefs.lang)
                    textSize = 15.5f
                    setTextColor(a.color(R.color.khai_text))
                })
                col.addView(TextView(a).apply {
                    text = food.detail(a.prefs.lang) + " · " + food.region
                    textSize = 12f
                    setTextColor(a.color(R.color.khai_muted))
                })
                row.addView(col, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
                row.addView(TextView(a).apply {
                    text = "+"
                    textSize = 22f
                    typeface = Typeface.DEFAULT_BOLD
                    setTextColor(a.color(R.color.khai_primary))
                    setPadding(a.dp(14), 0, a.dp(4), 0)
                })
                row.setOnClickListener { askQuantity(a, food, slot, onPick) }
                listWrap.addView(row)
                listWrap.addView(View_divider(a))
            }
        }

        search.onChangeText { fill(it) }
        wrap.addView(search)
        wrap.addView(scroll)
        fill("")

        val dialog = AlertDialog.Builder(a)
            .setTitle(a.getString(R.string.add_food) + " · " + slotLabel(a, slot))
            .setView(wrap)
            .setNegativeButton(a.getString(R.string.cancel), null)
            .create()
        dialog.show()
    }

    private fun slotLabel(a: MainActivity, slot: String): String = when (slot) {
        "breakfast" -> a.getString(R.string.meal_breakfast)
        "lunch" -> a.getString(R.string.meal_lunch)
        "dinner" -> a.getString(R.string.meal_dinner)
        else -> a.getString(R.string.meal_snacks)
    }

    private fun askQuantity(a: MainActivity, food: Food, slot: String, onPick: (Food, Double) -> Unit) {
        val box = LinearLayout(a).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(a.dp(20), a.dp(8), a.dp(20), a.dp(4))
        }
        box.addView(TextView(a).apply {
            text = food.label(a.prefs.lang)
            textSize = 16f
            typeface = Typeface.create("serif", Typeface.BOLD)
            setTextColor(a.color(R.color.khai_text))
        })
        box.addView(TextView(a).apply {
            text = food.portion
            textSize = 12.5f
            setTextColor(a.color(R.color.khai_muted))
            setPadding(0, a.dp(2), 0, a.dp(6))
        })
        val qty = Ui.input(a, "1", decimal = true).apply { setText("1") }
        box.addView(Ui.label(a, a.getString(R.string.portion_q) + " (" + food.unit + ")"))
        box.addView(qty)

        AlertDialog.Builder(a)
            .setTitle(a.getString(R.string.add_food))
            .setView(box)
            .setNegativeButton(a.getString(R.string.cancel), null)
            .setPositiveButton(a.getString(R.string.done)) { _, _ ->
                val q = qty.text.toString().trim().toDoubleOrNull() ?: 1.0
                onPick(food, if (q <= 0.0) 1.0 else q)
            }
            .show()
    }

    private fun View_divider(a: MainActivity): TextView = TextView(a).apply {
        layoutParams = LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 1)
        setBackgroundColor(a.color(R.color.khai_line))
        text = ""
    }
}
