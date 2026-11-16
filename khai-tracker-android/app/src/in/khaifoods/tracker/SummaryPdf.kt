package `in`.khaifoods.tracker

import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.Typeface
import android.graphics.pdf.PdfDocument
import java.io.ByteArrayOutputStream
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import kotlin.math.roundToInt

/**
 * One page for the clinician. The design rule is that a doctor should be able to read this in
 * under a minute and see, immediately, what is measured, what is missing and what is only a
 * self-reported observation. It never diagnoses and never suggests a dose.
 */
object SummaryPdf {

    private const val W = 595
    private const val H = 842
    private const val M = 40f

    fun build(a: MainActivity, entries: List<DayEntry>): ByteArray {
        val doc = PdfDocument()
        val page = doc.startPage(PdfDocument.PageInfo.Builder(W, H, 1).create())
        val c = page.canvas

        val green = Color.rgb(31, 92, 58)
        val ink = Color.rgb(22, 33, 27)
        val muted = Color.rgb(91, 107, 98)
        val line = Color.rgb(214, 224, 218)

        val serif = Typeface.create("serif", Typeface.BOLD)
        val serifReg = Typeface.create("serif", Typeface.NORMAL)
        val sans = Typeface.create("sans-serif", Typeface.NORMAL)
        val sansBold = Typeface.create("sans-serif", Typeface.BOLD)

        fun paint(size: Float, color: Int, tf: Typeface = sans, align: Paint.Align = Paint.Align.LEFT): Paint =
            Paint(Paint.ANTI_ALIAS_FLAG).apply {
                textSize = size; this.color = color; typeface = tf; textAlign = align
            }

        // ---- header
        c.drawRect(0f, 0f, W.toFloat(), 92f, Paint().apply { color = green })
        c.drawText("Khai Tracker", M, 42f, paint(22f, Color.WHITE, serif))
        c.drawText("Clinician summary", M + 150f, 42f, paint(15f, Color.argb(210, 255, 255, 255), serifReg))
        c.drawText("Generated on the participant's device · not a diagnosis", M, 66f,
            paint(9.5f, Color.argb(200, 255, 255, 255), sans))
        val stamp = SimpleDateFormat("d MMM yyyy, HH:mm", Locale.US).format(Date())
        c.drawText(stamp, W - M, 66f, paint(9.5f, Color.argb(200, 255, 255, 255), sans, Paint.Align.RIGHT))

        var y = 118f

        // ---- participant block
        val p = a.prefs.profile()
        c.drawText("Participant ${a.prefs.code()}", M, y, paint(14f, ink, serif))
        y += 16f
        val meta = buildString {
            append("Age band: ").append(
                p?.let { Labels.ageBandEnglish(a, it.ageBandKey) }?.ifBlank { "—" } ?: "—"
            )
            append("   ·   Conditions: ").append(
                p?.let { Labels.conditionsEnglish(a, it.conditionKeys) }?.takeIf { it.isNotEmpty() }
                    ?: "none recorded"
            )
        }
        c.drawText(meta, M, y, paint(9.5f, muted, sans))
        y += 14f
        c.drawText("Period: ${entries.firstOrNull()?.date ?: "—"} to ${entries.lastOrNull()?.date ?: "—"}" +
            "   ·   ${entries.size} days recorded", M, y, paint(9.5f, muted, sans))
        y += 10f
        c.drawLine(M, y, W - M, y, Paint().apply { color = line; strokeWidth = 1f })
        y += 22f

        // ---- three headline numbers
        val complete = entries.count { a.dayComplete(it) }
        val window = maxOf(entries.size, 21)
        val completeness = if (window == 0) 0 else (complete * 100.0 / window).roundToInt()
        val medSlots = entries.sumOf { it.meds.size }
        val medTaken = entries.sumOf { e -> e.meds.count { it.status == "taken" } }
        val adherence = if (medSlots == 0) 0 else (medTaken * 100.0 / medSlots).roundToInt()
        val readings = entries.count { it.hasReading() }

        val boxW = (W - 2 * M - 24f) / 3f
        val stats = listOf(
            "$completeness%" to "complete days",
            "$adherence%" to "medicines taken as logged",
            "$readings" to "days with a measurement"
        )
        stats.forEachIndexed { i, (value, caption) ->
            val x = M + i * (boxW + 12f)
            c.drawRoundRect(x, y, x + boxW, y + 52f, 8f, 8f,
                Paint().apply { color = Color.rgb(231, 240, 234) })
            c.drawText(value, x + 12f, y + 26f, paint(20f, green, serif))
            c.drawText(caption, x + 12f, y + 42f, paint(8.5f, muted, sans))
        }
        y += 72f

        // ---- table
        c.drawText("Daily record", M, y, paint(11f, ink, serif))
        y += 8f
        val cols = floatArrayOf(M, M + 92f, M + 170f, M + 236f, M + 306f, M + 384f)
        c.drawText("Date", cols[0], y + 10f, paint(8.5f, muted, sansBold))
        c.drawText("BP", cols[1], y + 10f, paint(8.5f, muted, sansBold))
        c.drawText("Sugar", cols[2], y + 10f, paint(8.5f, muted, sansBold))
        c.drawText("Medicines", cols[3], y + 10f, paint(8.5f, muted, sansBold))
        c.drawText("Food items", cols[4], y + 10f, paint(8.5f, muted, sansBold))
        c.drawText("Entry", cols[5], y + 10f, paint(8.5f, muted, sansBold))
        y += 16f
        c.drawLine(M, y, W - M, y, Paint().apply { color = line; strokeWidth = 0.8f })
        y += 4f

        val recent = entries.sortedByDescending { it.date }.take(16)
        for (e in recent) {
            if (y > H - 190f) break
            val bp = if (e.sys != null && e.dia != null) "${e.sys}/${e.dia}" else "—"
            val sugar = e.glucose?.let { "${it.roundToInt()} ${if (e.glucoseType == "fasting") "F" else "PP"}" } ?: "—"
            val meds = if (e.meds.isEmpty()) "not logged"
            else "${e.meds.count { it.status == "taken" }}/${e.meds.size} taken"
            val entryState = when {
                a.dayComplete(e) -> "complete"
                e.hasFood() || e.hasReading() -> "partial"
                else -> "empty"
            }
            c.drawText(e.date.substring(5), cols[0], y + 11f, paint(8.5f, ink, sans))
            c.drawText(bp, cols[1], y + 11f, paint(8.5f, ink, sans))
            c.drawText(sugar, cols[2], y + 11f, paint(8.5f, ink, sans))
            c.drawText(meds, cols[3], y + 11f, paint(8.5f, ink, sans))
            c.drawText(e.foodCount().toString(), cols[4], y + 11f, paint(8.5f, ink, sans))
            c.drawText(entryState, cols[5], y + 11f, paint(8.5f, if (entryState == "complete") green else muted, sans))
            y += 15f
            c.drawLine(M, y, W - M, y, Paint().apply { color = Color.rgb(238, 242, 239); strokeWidth = 0.6f })
            y += 1f
        }

        // ---- flags
        y += 14f
        c.drawText("Points worth discussing", M, y, paint(11f, ink, serif))
        y += 14f
        val flags = mutableListOf<String>()
        val last7 = entries.sortedByDescending { it.date }.take(7)
        val highBp = last7.count { (it.sys ?: 0) >= 140 || (it.dia ?: 0) >= 90 }
        if (highBp >= 3) flags.add("Blood pressure at or above 140/90 on $highBp of the last ${last7.size} logged days.")
        val highSugar = last7.count { (it.glucose ?: 0.0) >= 180.0 }
        if (highSugar >= 2) flags.add("Blood sugar at or above 180 mg/dL on $highSugar of the last ${last7.size} logged days.")
        val missed = entries.takeLast(7).count { e -> e.meds.any { it.status != "taken" } }
        if (missed >= 2) flags.add("A medicine was recorded as skipped or changed on $missed of the last 7 days.")
        if (entries.count { !it.hasReading() } >= 7) flags.add("No measurement on most days; the record is food-led.")
        val weights = entries.mapNotNull { it.weight }
        if (weights.size >= 2) {
            val delta = weights.last() - weights.first()
            if (kotlin.math.abs(delta) >= 1.5) flags.add("Weight moved ${String.format(Locale.US, "%+.1f", delta)} kg across the logged period.")
        }
        if (flags.isEmpty()) flags.add("No threshold flags. Read the daily record above for the pattern.")

        for (f in flags.take(5)) {
            if (y > H - 200f) break
            val wrapped = wrap(f, paint(9.5f, ink, sans), W - 2 * M - 14f)
            for (lineText in wrapped) {
                c.drawCircle(M + 3f, y - 3f, 1.8f, Paint().apply { color = green })
                c.drawText(lineText, M + 12f, y, paint(9.5f, ink, sans))
                y += 12f
            }
            y += 2f
        }

        // ---- food frequency
        y += 8f
        if (y < H - 170f) {
            c.drawText("Most frequent foods", M, y, paint(11f, ink, serif))
            y += 14f
            val freq = mutableMapOf<String, Int>()
            for (e in entries) for (list in e.meals.values) for (f in list) {
                // The clinician sheet is English and titled in English; resolve the dish there too.
                val name = a.foodLabel(f, "en")
                freq[name] = (freq[name] ?: 0) + 1
            }
            // Two columns, but never more rows than the page can still hold.
            val maxRows = (((H - 112f) - y) / 12f).toInt().coerceIn(0, 4)
            val top = freq.entries.sortedByDescending { it.value }.take(maxRows * 2)
            if (top.isEmpty()) {
                c.drawText("No foods logged.", M, y, paint(9.5f, muted, sans))
                y += 12f
            } else {
                val half = (top.size + 1) / 2
                val leftColumn = top.take(half)
                val rightColumn = top.drop(half)
                val colX = (W - 2 * M) / 2f
                var yy = y
                for ((name, count) in leftColumn) {
                    c.drawText("$name  ×$count", M, yy, paint(9.5f, ink, sans))
                    yy += 12f
                }
                y = yy
                yy = y - leftColumn.size * 12f
                for ((name, count) in rightColumn) {
                    c.drawText("$name  ×$count", M + colX, yy, paint(9.5f, ink, sans))
                    yy += 12f
                }
                y = maxOf(y, yy)
            }
        }

        // ---- participant notes
        y += 8f
        val notes = entries.filter { it.note.isNotBlank() }.sortedByDescending { it.date }.take(3)
        if (notes.isNotEmpty() && y < H - 110f) {
            c.drawText("Participant's own notes", M, y, paint(11f, ink, serif))
            y += 13f
            for (n in notes) {
                if (y > H - 92f) break
                val text = "${n.date.substring(5)}: ${n.note}"
                for (l in wrap(text, paint(9f, muted, sans), W - 2 * M).take(2)) {
                    c.drawText(l, M, y, paint(9f, muted, sans)); y += 11f
                }
            }
        }

        // ---- footer
        val footY = H - 56f
        c.drawLine(M, footY - 12f, W - M, footY - 12f, Paint().apply { color = line; strokeWidth = 1f })
        val footPaint = paint(8.5f, muted, sans)
        var fy = footY
        for (lineText in wrap(
                "Self-reported record. Not a diagnosis, not a prescription. No medication " +
                    "change should be made on this sheet alone.",
                footPaint, W - 2 * M
            )) {
            c.drawText(lineText, M, fy, footPaint)
            fy += 10f
        }
        c.drawText("Khai Tracker 1.0.0 · Khai Foods Pvt Ltd, Jamshedpur · product owner: Biswajit Roy Bardhan",
            M, fy, paint(8f, muted, sans))
        c.drawText("Records encrypted at rest on the device; this file leaves it only when the participant shares it.",
            M, fy + 10f, paint(8f, muted, sans))

        doc.finishPage(page)
        val out = ByteArrayOutputStream()
        doc.writeTo(out)
        doc.close()
        return out.toByteArray()
    }

    private fun wrap(text: String, paint: Paint, maxWidth: Float): List<String> {
        val words = text.split(' ')
        val lines = mutableListOf<String>()
        var current = StringBuilder()
        for (w in words) {
            val candidate = if (current.isEmpty()) w else "$current $w"
            if (paint.measureText(candidate) > maxWidth && current.isNotEmpty()) {
                lines.add(current.toString())
                current = StringBuilder(w)
            } else {
                current = StringBuilder(candidate)
            }
        }
        if (current.isNotEmpty()) lines.add(current.toString())
        return lines
    }
}
