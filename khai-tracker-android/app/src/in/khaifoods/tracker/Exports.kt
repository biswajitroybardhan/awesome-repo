package `in`.khaifoods.tracker

import android.content.Intent
import android.net.Uri
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

/**
 * Exports are the participant's, not the vendor's. Each format answers a different question:
 * CSV for the study team, FHIR for a hospital system, PDF for the clinician in the room, JSON
 * for a complete portable copy. Nothing is uploaded by exporting; the file is handed to the app
 * the participant picks in the system share sheet.
 */
object Exports {

    fun shareFoodCsv(a: MainActivity) {
        val entries = a.store.all(a.prefs.code()).sortedBy { it.date }
        val sb = StringBuilder("participant_code,date,meal,food_id,food,quantity,unit,kcal,carb_g,protein_g,fat_g,sodium_mg\n")
        for (e in entries) {
            for ((slot, list) in e.meals) {
                for (f in list) {
                    sb.append(csv(a.prefs.code())).append(',')
                        .append(e.date).append(',')
                        .append(slot).append(',')
                        .append(f.foodId).append(',')
                        .append(csv(a.foodLabel(f, "en"))).append(',')
                        .append(num(f.qty)).append(',')
                        .append(csv(f.unit)).append(',')
                        .append(num(f.kcal)).append(',')
                        .append(num(f.carb)).append(',')
                        .append(num(f.protein)).append(',')
                        .append(num(f.fat)).append(',')
                        .append(num(f.sodium)).append('\n')
                }
            }
        }
        share(a, write(a, "khai_food_${a.prefs.code()}_${DateU.today()}.csv", sb.toString()),
            "text/csv", a.getString(R.string.export_food))
    }

    fun shareMetricsCsv(a: MainActivity) {
        val entries = a.store.all(a.prefs.code()).sortedBy { it.date }
        val sb = StringBuilder(
            "participant_code,date,complete,systolic,diastolic,pulse,glucose,glucose_type,weight_kg," +
                "energy,mood,sleep_h,meds_taken,meds_total,food_items,est_kcal,est_carb_g,note\n"
        )
        for (e in entries) {
            sb.append(csv(a.prefs.code())).append(',')
                .append(e.date).append(',')
                .append(if (a.dayComplete(e)) 1 else 0).append(',')
                .append(e.sys?.toString() ?: "").append(',')
                .append(e.dia?.toString() ?: "").append(',')
                .append(e.pulse?.toString() ?: "").append(',')
                .append(e.glucose?.let { num(it) } ?: "").append(',')
                .append(if (e.glucose == null) "" else e.glucoseType).append(',')
                .append(e.weight?.let { num(it) } ?: "").append(',')
                .append(e.energy?.toString() ?: "").append(',')
                .append(e.mood?.toString() ?: "").append(',')
                .append(e.sleep?.let { num(it) } ?: "").append(',')
                .append(e.meds.count { it.status == "taken" }).append(',')
                .append(e.meds.size).append(',')
                .append(e.foodCount()).append(',')
                .append(num(e.totalKcal)).append(',')
                .append(num(e.totalCarb)).append(',')
                .append(csv(e.note)).append('\n')
        }
        share(a, write(a, "khai_metrics_${a.prefs.code()}_${DateU.today()}.csv", sb.toString()),
            "text/csv", a.getString(R.string.export_metrics))
    }

    fun shareBackup(a: MainActivity) {
        val root = JSONObject()
            .put("format", "khai.backup.v1")
            .put("exportedAt", isoNow())
            .put("app", "Khai Tracker 1.0.0")
            .put("deviceId", a.prefs.deviceId)
        val profile = a.prefs.profile()
        root.put("profile", profile?.toJson() ?: JSONObject())
        val arr = JSONArray()
        for (e in a.store.all(a.prefs.code()).sortedBy { it.date }) {
            val o = e.toJson()
            o.put("code", a.prefs.code())
            arr.put(o)
        }
        root.put("days", arr)
        share(a, write(a, "khai_backup_${a.prefs.code()}_${DateU.today()}.json", root.toString(2)),
            "application/json", a.getString(R.string.export_backup))
    }

    fun shareFhir(a: MainActivity) {
        val bundle = fhirBundle(a)
        share(a, write(a, "khai_fhir_${a.prefs.code()}_${DateU.today()}.json", bundle.toString(2)),
            "application/fhir+json", a.getString(R.string.export_fhir))
    }

    fun sharePdf(a: MainActivity) {
        val bytes = SummaryPdf.build(a, a.store.all(a.prefs.code()).sortedBy { it.date })
        val f = writeBytes(a, "khai_summary_${a.prefs.code()}_${DateU.today()}.pdf", bytes)
        share(a, f, "application/pdf", a.getString(R.string.export_summary))
    }

    // ---------------------------------------------------------------- FHIR R4

    /**
     * A minimal, valid FHIR R4 collection bundle. Deliberately conservative: vital signs and
     * body weight only, with LOINC codes, UCUM units, subject reference and provenance. Diet
     * intake is not emitted as an Observation because a component estimate is not a measurement
     * and should not enter a clinical record pretending to be one.
     */
    private fun fhirBundle(a: MainActivity): JSONObject {
        val code = a.prefs.code()
        val entries = a.store.all(code).sortedBy { it.date }
        val entry = JSONArray()

        val patient = JSONObject()
            .put("resourceType", "Patient")
            .put("id", "participant-$code")
            .put("identifier", JSONArray().put(JSONObject()
                .put("system", "https://khaifoods.in/participant")
                .put("value", code)))
            .put("active", true)
        entry.put(entryFor("patient-$code", patient))

        for (e in entries) {
            // Day precision, not a fabricated clock time. FHIR dateTime accepts "YYYY-MM-DD", and
            // the participant recorded a day, so pretending it was 08:00 would be invented data.
            val sys = e.sys
            val dia = e.dia
            if (sys != null && dia != null) {
                val obs = baseObservation("bp-${e.date}", "85354-9", "Blood pressure panel",
                    "vital-signs", code, e.date)
                obs.put("component", JSONArray()
                    .put(component("8480-6", "Systolic blood pressure", sys.toDouble(), "mm[Hg]"))
                    .put(component("8462-4", "Diastolic blood pressure", dia.toDouble(), "mm[Hg]")))
                entry.put(entryFor("obs-bp-${e.date}", obs))
            }
            e.glucose?.let { g ->
                val fasting = e.glucoseType == "fasting"
                val obs = baseObservation("glu-${e.date}",
                    if (fasting) "1558-6" else "2339-0",
                    if (fasting) "Glucose [Mass/volume] in Blood --fasting"
                    else "Glucose [Mass/volume] in Blood",
                    "laboratory", code, e.date)
                obs.put("valueQuantity", JSONObject()
                    .put("value", g).put("unit", "mg/dL")
                    .put("system", "http://unitsofmeasure.org").put("code", "mg/dL"))
                obs.put("note", JSONArray().put(JSONObject().put("text",
                    if (fasting) "Self-reported fasting sample" else "Self-reported after food")))
                entry.put(entryFor("obs-glu-${e.date}", obs))
            }
            e.weight?.let { w ->
                val obs = baseObservation("wt-${e.date}", "29463-7", "Body weight", "vital-signs", code, e.date)
                obs.put("valueQuantity", JSONObject()
                    .put("value", w).put("unit", "kg")
                    .put("system", "http://unitsofmeasure.org").put("code", "kg"))
                entry.put(entryFor("obs-wt-${e.date}", obs))
            }
        }

        val consentAt = a.prefs.profile()?.consentAt ?: 0L
        val consent = JSONObject()
            .put("resourceType", "Consent")
            .put("id", "consent-$code")
            .put("status", "active")
            .put("scope", JSONObject().put("coding", JSONArray().put(JSONObject()
                .put("system", "http://terminology.hl7.org/CodeSystem/consentscope")
                .put("code", "research"))))
            .put("category", JSONArray().put(JSONObject().put("coding", JSONArray().put(JSONObject()
                .put("system", "http://loinc.org").put("code", "59284-0")
                .put("display", "Patient Consent")))))
            .put("patient", JSONObject().put("reference", "urn:uuid:patient-$code"))
            .put("dateTime", if (consentAt > 0) DateU.instant(consentAt) else isoNow())
            .put("provision", JSONObject().put("type", "permit"))
        entry.put(entryFor("consent-$code", consent))

        val provenance = JSONObject()
            .put("resourceType", "Provenance")
            .put("id", "prov-$code")
            .put("recorded", isoNow())
            .put("agent", JSONArray().put(JSONObject().put("who", JSONObject()
                .put("display", "Khai Tracker on participant device"))))
            .put("target", JSONArray()
                .put(JSONObject().put("reference", "urn:uuid:patient-$code"))
                .put(JSONObject().put("reference", "urn:uuid:consent-$code")))
        entry.put(entryFor("prov-$code", provenance))

        return JSONObject()
            .put("resourceType", "Bundle")
            .put("id", "khai-bundle-$code")
            .put("type", "collection")
            .put("timestamp", isoNow())
            .put("entry", entry)
    }

    private fun entryFor(fullUrl: String, resource: JSONObject): JSONObject =
        JSONObject().put("fullUrl", "urn:uuid:$fullUrl").put("resource", resource)

    private fun baseObservation(id: String, loinc: String, display: String,
                                category: String, code: String, ts: String): JSONObject =
        JSONObject()
            .put("resourceType", "Observation")
            .put("id", id)
            .put("status", "final")
            .put("category", JSONArray().put(JSONObject()
                .put("coding", JSONArray().put(JSONObject()
                    .put("system", "http://terminology.hl7.org/CodeSystem/observation-category")
                    .put("code", category)))))
            .put("code", JSONObject().put("coding", JSONArray().put(JSONObject()
                .put("system", "http://loinc.org").put("code", loinc).put("display", display))))
            .put("subject", JSONObject().put("reference", "urn:uuid:patient-$code"))
            .put("effectiveDateTime", ts)

    private fun component(loinc: String, display: String, value: Double, ucum: String): JSONObject =
        JSONObject()
            .put("code", JSONObject().put("coding", JSONArray().put(JSONObject()
                .put("system", "http://loinc.org").put("code", loinc).put("display", display))))
            .put("valueQuantity", JSONObject()
                .put("value", value).put("unit", ucum)
                .put("system", "http://unitsofmeasure.org").put("code", ucum))

    // ---------------------------------------------------------------- plumbing

    private fun write(a: MainActivity, name: String, content: String): File =
        writeBytes(a, name, content.toByteArray(Charsets.UTF_8))

    private fun writeBytes(a: MainActivity, name: String, bytes: ByteArray): File {
        val dir = File(a.cacheDir, "exports").apply { mkdirs() }
        val cutoff = System.currentTimeMillis() - 86_400_000L
        dir.listFiles()?.forEach { if (it.lastModified() < cutoff) it.delete() }
        val f = File(dir, name)
        f.writeBytes(bytes)
        return f
    }

    private fun share(a: MainActivity, file: File, mime: String, title: String) {
        val uri: Uri = ExportProvider.uriFor(a, file)
        val send = Intent(Intent.ACTION_SEND).apply {
            type = mime
            putExtra(Intent.EXTRA_STREAM, uri)
            putExtra(Intent.EXTRA_SUBJECT, title)
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
        try {
            a.startActivity(Intent.createChooser(send, title))
        } catch (e: Exception) {
            // A phone with no mail client, no chat app and no file manager is unusual but real.
            a.toast(a.getString(R.string.share_unavailable))
        }
    }

    /** Removes generated files so a participant's "erase" really erases exports too. */
    fun clearCache(context: android.content.Context) {
        File(context.cacheDir, "exports").deleteRecursively()
    }

    /**
     * Quotes a CSV cell and neutralises spreadsheet formulas. A note beginning with
     * = + - @ or a control character must never be interpreted as a formula when
     * a coordinator opens the export in Excel or Sheets.
     */
    private fun csv(v: String): String {
        if (v.isEmpty()) return ""
        val safe = if (v.first() in "=+-@\t\r") "'$v" else v
        return if (safe.any { it == ',' || it == '"' || it == '\n' || it == '\r' }) {
            "\"" + safe.replace("\"", "\"\"") + "\""
        } else safe
    }

    private fun num(d: Double): String =
        if (d == d.toLong().toDouble()) d.toLong().toString()
        else String.format(Locale.US, "%.1f", d)

    private fun isoNow(): String =
        SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX", Locale.US).format(Date())
}
