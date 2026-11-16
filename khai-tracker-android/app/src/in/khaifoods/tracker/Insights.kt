package `in`.khaifoods.tracker

import kotlin.math.roundToInt

/**
 * Personal pattern detection on the participant's own short time series.
 *
 * Rules are deliberately few, transparent and falsifiable, and every statement carries the
 * number of days it rests on. With 21 days and one person, the honest output is a described
 * regularity, never a p-value and never a prescription. Anything below four paired days is
 * suppressed rather than dressed up.
 */
data class Insight(val headline: String, val detail: String, val strength: String)

object Insights {

    fun analyse(entries: List<DayEntry>, hi: Boolean): List<Insight> {
        val byDate = entries.associateBy { it.date }
        val out = mutableListOf<Insight>()

        if (entries.count { it.hasReading() || it.hasFood() } < 4) return out

        // 1. Late, carbohydrate-heavy dinner vs next morning's fasting reading.
        val heavyDinner = mutableListOf<Double>()
        val lightDinner = mutableListOf<Double>()
        for (e in entries) {
            val next = byDate[DateU.shift(e.date, 1)] ?: continue
            val fasting = next.glucose?.takeIf { next.glucoseType == "fasting" } ?: continue
            val dinnerCarb = e.meals["dinner"]?.sumOf { it.carb } ?: continue
            if (dinnerCarb <= 0.0) continue
            if (dinnerCarb >= 60.0) heavyDinner.add(fasting) else lightDinner.add(fasting)
        }
        if (heavyDinner.size >= 2 && lightDinner.size >= 2) {
            val a = heavyDinner.average()
            val b = lightDinner.average()
            val gap = a - b
            if (gap >= 12) {
                out.add(
                    Insight(
                        headline = if (hi) "भारी रात के खाने के बाद सुबह की शुगर ऊँची रही"
                        else "Mornings were higher after a heavy dinner",
                        detail = if (hi)
                            "जिन रातों में खाने में 60 ग्राम से अधिक कार्बोहाइड्रेट था, अगली सुबह खाली पेट शुगर औसतन ${a.roundToInt()} mg/dL रही; हल्के खाने के बाद ${b.roundToInt()} mg/dL (${heavyDinner.size} बनाम ${lightDinner.size} दिन)।"
                        else
                            "After dinners carrying more than 60 g carbohydrate, the next fasting reading averaged ${a.roundToInt()} mg/dL, against ${b.roundToInt()} mg/dL after lighter dinners (${heavyDinner.size} vs ${lightDinner.size} days).",
                        strength = if (heavyDinner.size + lightDinner.size >= 6) "moderate" else "early"
                    )
                )
            }
        }

        // 2. Estimated dietary sodium vs systolic pressure.
        val highSodium = mutableListOf<Int>()
        val lowSodium = mutableListOf<Int>()
        for (e in entries) {
            val sys = e.sys ?: continue
            val sodium = e.meals.values.flatten().sumOf { it.sodium }
            if (sodium <= 0.0) continue
            if (sodium >= 3000) highSodium.add(sys) else lowSodium.add(sys)
        }
        if (highSodium.size >= 3 && lowSodium.size >= 3) {
            val a = highSodium.average()
            val b = lowSodium.average()
            if (a - b >= 6) {
                out.add(
                    Insight(
                        headline = if (hi) "नमकीन दिनों में ऊपरी रक्तचाप ऊँचा रहा"
                        else "Systolic ran higher on saltier days",
                        detail = if (hi)
                            "जिन दिनों अनुमानित सोडियम 3,000 mg से ऊपर था, ऊपरी रक्तचाप औसतन ${a.roundToInt()} mmHg रहा; कम नमक वाले दिनों में ${b.roundToInt()} mmHg (${highSodium.size} बनाम ${lowSodium.size} दिन)।"
                        else
                            "On days estimated above 3,000 mg sodium, systolic averaged ${a.roundToInt()} mmHg against ${b.roundToInt()} mmHg on lower-salt days (${highSodium.size} vs ${lowSodium.size} days).",
                        strength = "early"
                    )
                )
            }
        }

        // 3. Sweet drinks and readings taken after food.
        val sweetDrinkDays = entries.filter { e ->
            e.meals.values.flatten().any { it.foodId in setOf("soft_drink", "juice_packaged", "lassi_sweet") }
        }
        if (sweetDrinkDays.size >= 2) {
            out.add(
                Insight(
                    headline = if (hi) "मीठे पेय कई दिनों में दर्ज हुए"
                    else "Sweet drinks appeared on several days",
                    detail = if (hi)
                        "${sweetDrinkDays.size} दिनों में मीठा पेय दर्ज हुआ। इन दिनों के खाने के बाद के माप की तुलना बाकी दिनों से करें — ऐप स्वयं इसे अभी नहीं जोड़ता।"
                    else
                        "A sweet drink was logged on ${sweetDrinkDays.size} days. Compare the after-food readings on those days with the rest; the app does not yet pair the two automatically.",
                    strength = "early"
                )
            )
        }

        // 4. Where the week breaks.
        val logged = entries.map { it.date }.toSet()
        val weekdays = DateU.lastN(21)
        val perDow = (0..6).map { dow ->
            val days = weekdays.filter { d -> dowOf(d) == dow }
            days.count { logged.contains(it) } to days.size
        }
        val worst = perDow.withIndex().minByOrNull { if (it.value.second == 0) 2.0 else it.value.first.toDouble() / it.value.second }
        if (worst != null && worst.value.second > 0) {
            val namesEn = listOf("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
            val namesHi = listOf("रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार")
            val name = if (hi) namesHi[worst.index] else namesEn[worst.index]
            out.add(
                Insight(
                    headline = if (hi) "सबसे अधिक छूटा दिन: $name"
                    else "Most often missed: $name",
                    detail = if (hi)
                        "पिछले 21 दिनों में $name को ${worst.value.second} में से ${worst.value.first} दिन रिकॉर्ड हुआ। छूटा हुआ दिन भी जानकारी है — यह व्यस्तता या तबीयत का संकेत हो सकता है।"
                    else
                        "In the last 21 days, $name was logged on ${worst.value.first} of ${worst.value.second}. A missed day is also data: it can signal a busy day or a bad one.",
                    strength = "descriptive"
                )
            )
        }

        return out.take(4)
    }

    private fun dowOf(date: String): Int {
        val c = java.util.Calendar.getInstance()
        c.time = DateU.parse(date) ?: java.util.Date()
        // Calendar: Sunday=1 .. Saturday=7 -> 0..6
        return c.get(java.util.Calendar.DAY_OF_WEEK) - 1
    }
}
