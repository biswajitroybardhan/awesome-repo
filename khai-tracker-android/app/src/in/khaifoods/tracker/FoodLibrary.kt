package `in`.khaifoods.tracker

import android.content.Context
import org.json.JSONObject

data class Food(
    val id: String,
    val en: String,
    val hi: String,
    val region: String,
    val meals: List<String>,
    val unit: String,
    val portion: String,
    val kcal: DoubleRange,
    val carb: DoubleRange,
    val protein: DoubleRange,
    val fat: DoubleRange,
    val fiber: DoubleRange,
    val sodium: DoubleRange,
    val gi: String,
    val tags: List<String>
) {
    fun label(lang: String): String = if (lang.startsWith("hi")) hi else en

    fun detail(lang: String): String {
        val k = kcal.mid().toInt()
        return if (lang.startsWith("hi")) "$portion · ~$k कैलोरी" else "$portion · ~$k kcal"
    }
}

data class DoubleRange(val lo: Double, val hi: Double) {
    fun mid(): Double = (lo + hi) / 2.0
}

/**
 * Component-level food library for mixed Indian plates, loaded from assets so it can be
 * corrected and extended without touching code. Deliberately regional: the same dish differs
 * between a Bihari, Bengali, Odia, Punjabi and South Indian kitchen, so each carries its own
 * component and range rather than a single "Indian curry" row.
 */
class FoodLibrary(context: Context) {

    val items: List<Food>

    init {
        val raw = context.assets.open("foods.json").bufferedReader().use { it.readText() }
        val root = JSONObject(raw)
        val arr = root.getJSONArray("items")
        val out = mutableListOf<Food>()
        for (i in 0 until arr.length()) {
            val o = arr.getJSONObject(i)
            out.add(
                Food(
                    id = o.getString("id"),
                    en = o.getString("en"),
                    hi = o.optString("hi", o.getString("en")),
                    region = o.optString("region", "All"),
                    meals = o.optJSONArray("meals")?.let { a ->
                        (0 until a.length()).map { a.getString(it) }
                    } ?: listOf("breakfast", "lunch", "dinner", "snacks"),
                    unit = o.optString("unit", "portion"),
                    portion = o.optString("portion", ""),
                    kcal = range(o, "kcal"),
                    carb = range(o, "carb"),
                    protein = range(o, "protein"),
                    fat = range(o, "fat"),
                    fiber = range(o, "fiber"),
                    sodium = range(o, "sodium"),
                    gi = o.optString("gi", ""),
                    tags = o.optJSONArray("tags")?.let { a -> (0 until a.length()).map { a.getString(it) } } ?: emptyList()
                )
            )
        }
        items = out
    }

    private fun range(o: JSONObject, key: String): DoubleRange {
        val a = o.optJSONArray(key) ?: return DoubleRange(0.0, 0.0)
        val lo = a.optDouble(0, 0.0)
        val hi = a.optDouble(1, lo)
        return DoubleRange(lo, hi)
    }

    fun byId(id: String): Food? = items.firstOrNull { it.id == id }

    fun forMeal(slot: String): List<Food> =
        items.filter { it.meals.contains(slot) }.ifEmpty { items }

    fun search(query: String, slot: String? = null): List<Food> {
        val q = query.trim().lowercase()
        val pool = if (slot != null) forMeal(slot) else items
        if (q.isEmpty()) return pool
        return pool.filter {
            it.en.lowercase().contains(q) || it.hi.contains(query.trim()) ||
                it.region.lowercase().contains(q) || it.tags.any { t -> t.contains(q) }
        }
    }
}
