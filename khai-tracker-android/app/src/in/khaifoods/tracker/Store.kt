package `in`.khaifoods.tracker

import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import org.json.JSONObject

/**
 * Encrypted record store.
 *
 * Every day record is serialised to JSON, encrypted with AES-256-GCM using a non-exportable
 * Android keystore key, and only then written to SQLite. The database file on its own yields
 * nothing readable: no names, no medicines, no readings, no notes.
 *
 * `dirty` marks records not yet acknowledged by the study server, which is what makes the
 * sync path idempotent and resumable after a dropped connection.
 */
class Store(context: Context) {

    private val helper = object : SQLiteOpenHelper(context.applicationContext, DB_NAME, null, DB_VERSION) {
        override fun onCreate(db: SQLiteDatabase) {
            db.execSQL(
                """CREATE TABLE entries (
                     code TEXT NOT NULL,
                     date TEXT NOT NULL,
                     iv BLOB NOT NULL,
                     ct BLOB NOT NULL,
                     updated_ms INTEGER NOT NULL,
                     dirty INTEGER NOT NULL DEFAULT 1,
                     PRIMARY KEY (code, date)
                   )"""
            )
            db.execSQL("CREATE INDEX idx_entries_code ON entries(code, date)")
        }

        override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
            // Records are opaque; there is no safe in-place migration of ciphertext.
            // A schema break must ship a migration that re-encrypts, never a drop.
        }
    }

    private fun aad(code: String, date: String) = "$code|$date"

    @Synchronized
    fun save(code: String, entry: DayEntry): Boolean {
        return try {
            entry.updatedAt = System.currentTimeMillis()
            val plain = entry.toJson().toString()
            val (iv, ct) = Crypto.encrypt(plain, aad(code, entry.date))
            val cv = ContentValues().apply {
                put("code", code)
                put("date", entry.date)
                put("iv", iv)
                put("ct", ct)
                put("updated_ms", entry.updatedAt)
                put("dirty", 1)
            }
            helper.writableDatabase.insertWithOnConflict("entries", null, cv, SQLiteDatabase.CONFLICT_REPLACE)
            true
        } catch (e: Exception) {
            false
        }
    }

    fun load(code: String, date: String): DayEntry? {
        helper.readableDatabase.rawQuery(
            "SELECT iv, ct FROM entries WHERE code=? AND date=?",
            arrayOf(code, date)
        ).use { c ->
            if (!c.moveToFirst()) return null
            return try {
                val json = Crypto.decrypt(c.getBlob(0), c.getBlob(1), aad(code, date))
                DayEntry.from(date, JSONObject(json))
            } catch (e: Exception) {
                null
            }
        }
    }

    fun dates(code: String): List<String> {
        val out = mutableListOf<String>()
        helper.readableDatabase.rawQuery(
            "SELECT date FROM entries WHERE code=? ORDER BY date ASC",
            arrayOf(code)
        ).use { c ->
            while (c.moveToNext()) out.add(c.getString(0))
        }
        return out
    }

    fun all(code: String): List<DayEntry> = dates(code).mapNotNull { load(code, it) }

    fun pendingDates(code: String): List<String> {
        val out = mutableListOf<String>()
        helper.readableDatabase.rawQuery(
            "SELECT date FROM entries WHERE code=? AND dirty=1 ORDER BY date ASC",
            arrayOf(code)
        ).use { c -> while (c.moveToNext()) out.add(c.getString(0)) }
        return out
    }

    fun pendingCount(code: String): Int = pendingDates(code).size

    fun markSynced(code: String, dates: Collection<String>) {
        if (dates.isEmpty()) return
        val db = helper.writableDatabase
        db.beginTransaction()
        try {
            for (d in dates) {
                val cv = ContentValues().apply { put("dirty", 0) }
                db.update("entries", cv, "code=? AND date=?", arrayOf(code, d))
            }
            db.setTransactionSuccessful()
        } finally {
            db.endTransaction()
        }
    }

    /** Participant-initiated wipe: rows first, then the key, so nothing is recoverable. */
    fun eraseAll() {
        try {
            helper.writableDatabase.delete("entries", null, null)
        } catch (_: Exception) {
        }
        Crypto.wipe()
    }

    fun recordCount(): Int {
        helper.readableDatabase.rawQuery("SELECT COUNT(*) FROM entries", null).use { c ->
            return if (c.moveToFirst()) c.getInt(0) else 0
        }
    }

    companion object {
        private const val DB_NAME = "khai_records.db"
        private const val DB_VERSION = 1
    }
}
