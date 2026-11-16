package `in`.khaifoods.tracker

import org.json.JSONArray
import org.json.JSONObject
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

/** Small date helpers. minSdk 24, so no java.time. */
object DateU {
    private val iso = SimpleDateFormat("yyyy-MM-dd", Locale.US)
    private val pretty = SimpleDateFormat("EEE d MMM", Locale.getDefault())

    fun today(): String = iso.format(Date())

    fun parse(s: String): Date? = try { iso.parse(s) } catch (e: Exception) { null }

    fun pretty(s: String): String = parse(s)?.let { pretty.format(it) } ?: s

    fun shift(s: String, days: Int): String {
        val c = Calendar.getInstance()
        c.time = parse(s) ?: Date()
        c.add(Calendar.DAY_OF_YEAR, days)
        return iso.format(c.time)
    }

    /** Inclusive list of the last n dates, oldest first, ending today. */
    fun lastN(n: Int): List<String> {
        val base = today()
        return (n - 1 downTo 0).map { shift(base, -it) }
    }

    /** ISO dates sort lexicographically, so "after today" is a string comparison. */
    fun isFuture(s: String): Boolean = s > today()

    /** ISO-8601 instant with offset, for FHIR timestamps. */
    fun instant(ms: Long): String =
        SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX", Locale.US).format(Date(ms))

    fun dayOfWeekShort(s: String): String {
        val c = Calendar.getInstance(); c.time = parse(s) ?: Date()
        return when (c.get(Calendar.DAY_OF_WEEK)) {
            Calendar.MONDAY -> "M"; Calendar.TUESDAY -> "T"; Calendar.WEDNESDAY -> "W"
            Calendar.THURSDAY -> "T"; Calendar.FRIDAY -> "F"; Calendar.SATURDAY -> "S"
            else -> "S"
        }
    }
}

data class Med(val name: String, val dose: String) {
    fun toJson() = JSONObject().put("name", name).put("dose", dose)
    companion object {
        fun from(j: JSONObject) = Med(j.optString("name"), j.optString("dose"))
    }
}

data class Profile(
    val code: String,
    /** Stable key such as "50_59", never the localised label, so the record survives a language change. */
    val ageBandKey: String,
    /** Stable keys such as "diabetes_t2"; see Labels for the display strings. */
    val conditionKeys: List<String>,
    val medicines: List<Med>,
    val consentVersion: String,
    val consentAt: Long,
    val deviceId: String,
    val createdAt: Long
) {
    fun toJson(): JSONObject {
        val conds = JSONArray(); conditionKeys.forEach { conds.put(it) }
        val meds = JSONArray(); medicines.forEach { meds.put(it.toJson()) }
        return JSONObject()
            .put("code", code)
            .put("ageBandKey", ageBandKey)
            .put("conditionKeys", conds)
            .put("medicines", meds)
            .put("consentVersion", consentVersion)
            .put("consentAt", consentAt)
            .put("deviceId", deviceId)
            .put("createdAt", createdAt)
    }

    companion object {
        fun from(j: JSONObject): Profile {
            val conditions = mutableListOf<String>()
            j.optJSONArray("conditionKeys")?.let { a ->
                for (i in 0 until a.length()) conditions.add(a.optString(i))
            }
            val meds = mutableListOf<Med>()
            j.optJSONArray("medicines")?.let { a ->
                for (i in 0 until a.length()) meds.add(Med.from(a.getJSONObject(i)))
            }
            // Keys written by a pre-release build were display labels. Map the known ones so an
            // upgraded install does not silently lose its conditions.
            var ageBand = j.optString("ageBandKey")
            if (ageBand.isEmpty()) ageBand = LEGACY_AGE[j.optString("ageBand")] ?: ""
            if (conditions.isEmpty()) {
                j.optJSONArray("conditions")?.let { a ->
                    for (i in 0 until a.length()) {
                        val raw = a.optString(i)
                        conditions.add(LEGACY_CONDITION[raw] ?: raw)
                    }
                }
            }
            return Profile(
                j.optString("code"), ageBand, conditions, meds,
                j.optString("consentVersion"), j.optLong("consentAt"),
                j.optString("deviceId"), j.optLong("createdAt")
            )
        }

        private val LEGACY_AGE = mapOf(
            "Under 40" to "lt40", "40–49" to "40_49", "50–59" to "50_59",
            "60–69" to "60_69", "70 and above" to "ge70"
        )

        private val LEGACY_CONDITION = mapOf(
            "Diabetes (type 2)" to "diabetes_t2",
            "Pre-diabetes" to "prediabetes",
            "High blood pressure" to "hypertension",
            "High cholesterol" to "cholesterol",
            "Weight management" to "weight",
            "None of these" to "none"
        )
    }
}

/** One food component on the plate. Nutrition is a midpoint of the library range. */
data class FoodItem(
    val foodId: String,
    val label: String,
    val qty: Double,
    val unit: String,
    val kcal: Double,
    val carb: Double,
    val protein: Double,
    val fat: Double,
    val sodium: Double
) {
    fun toJson() = JSONObject()
        .put("id", foodId).put("label", label).put("qty", qty).put("unit", unit)
        .put("kcal", kcal).put("carb", carb).put("protein", protein).put("fat", fat).put("sodium", sodium)

    companion object {
        fun from(j: JSONObject) = FoodItem(
            j.optString("id"), j.optString("label"), j.optDouble("qty", 1.0), j.optString("unit"),
            j.optDouble("kcal", 0.0), j.optDouble("carb", 0.0), j.optDouble("protein", 0.0),
            j.optDouble("fat", 0.0), j.optDouble("sodium", 0.0)
        )
    }
}

data class MedStatus(val name: String, val dose: String, val status: String) // taken | skipped | changed
{
    fun toJson() = JSONObject().put("name", name).put("dose", dose).put("status", status)
    companion object {
        fun from(j: JSONObject) = MedStatus(j.optString("name"), j.optString("dose"), j.optString("status", "taken"))
    }
}

class DayEntry(val date: String) {
    val meals: MutableMap<String, MutableList<FoodItem>> = linkedMapOf(
        "breakfast" to mutableListOf(),
        "lunch" to mutableListOf(),
        "dinner" to mutableListOf(),
        "snacks" to mutableListOf()
    )
    val meds: MutableList<MedStatus> = mutableListOf()
    var sys: Int? = null
    var dia: Int? = null
    var pulse: Int? = null
    var glucose: Double? = null
    var glucoseType: String = "fasting"
    var weight: Double? = null
    var energy: Int? = null
    var mood: Int? = null
    var sleep: Double? = null
    var note: String = ""
    var updatedAt: Long = 0L

    fun hasFood(): Boolean = meals.values.any { it.isNotEmpty() }

    fun hasReading(): Boolean = glucose != null || (sys != null && dia != null) || weight != null

    fun hasMeds(): Boolean = meds.isNotEmpty()

    val totalCarb: Double get() = meals.values.flatten().sumOf { it.carb }
    val totalKcal: Double get() = meals.values.flatten().sumOf { it.kcal }

    fun foodCount(): Int = meals.values.sumOf { it.size }

    fun toJson(): JSONObject {
        val m = JSONObject()
        for ((slot, list) in meals) {
            val a = JSONArray(); list.forEach { a.put(it.toJson()) }
            m.put(slot, a)
        }
        val medsA = JSONArray(); meds.forEach { medsA.put(it.toJson()) }
        return JSONObject()
            .put("v", SCHEMA_VERSION)
            .put("code", "")
            .put("date", date)
            .put("meals", m)
            .put("meds", medsA)
            .put("sys", sys ?: JSONObject.NULL)
            .put("dia", dia ?: JSONObject.NULL)
            .put("pulse", pulse ?: JSONObject.NULL)
            .put("glucose", glucose ?: JSONObject.NULL)
            .put("glucoseType", glucoseType)
            .put("weight", weight ?: JSONObject.NULL)
            .put("energy", energy ?: JSONObject.NULL)
            .put("mood", mood ?: JSONObject.NULL)
            .put("sleep", sleep ?: JSONObject.NULL)
            .put("note", note)
            .put("updatedAt", updatedAt)
    }

    companion object {
        /** Bump only together with a reader that still understands every earlier shape. */
        const val SCHEMA_VERSION = 1

        fun from(date: String, j: JSONObject): DayEntry {
            val e = DayEntry(date)
            j.optJSONObject("meals")?.let { m ->
                for (slot in e.meals.keys.toList()) {
                    m.optJSONArray(slot)?.let { a ->
                        for (i in 0 until a.length()) e.meals[slot]!!.add(FoodItem.from(a.getJSONObject(i)))
                    }
                }
            }
            j.optJSONArray("meds")?.let { a ->
                for (i in 0 until a.length()) e.meds.add(MedStatus.from(a.getJSONObject(i)))
            }
            if (!j.isNull("sys")) e.sys = j.optInt("sys")
            if (!j.isNull("dia")) e.dia = j.optInt("dia")
            if (!j.isNull("pulse")) e.pulse = j.optInt("pulse")
            if (!j.isNull("glucose")) e.glucose = j.optDouble("glucose")
            e.glucoseType = j.optString("glucoseType", "fasting")
            if (!j.isNull("weight")) e.weight = j.optDouble("weight")
            if (!j.isNull("energy")) e.energy = j.optInt("energy")
            if (!j.isNull("mood")) e.mood = j.optInt("mood")
            if (!j.isNull("sleep")) e.sleep = j.optDouble("sleep")
            e.note = j.optString("note", "")
            e.updatedAt = j.optLong("updatedAt", 0L)
            return e
        }
    }
}
