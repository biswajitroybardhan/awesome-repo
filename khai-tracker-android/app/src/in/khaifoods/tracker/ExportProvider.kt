package `in`.khaifoods.tracker

import android.content.ContentProvider
import android.content.ContentValues
import android.content.Context
import android.database.Cursor
import android.database.MatrixCursor
import android.net.Uri
import android.os.ParcelFileDescriptor
import android.provider.OpenableColumns
import java.io.File

/**
 * Serves generated exports to the system share sheet with a one-shot read grant.
 * Nothing is exposed publicly: the provider is not exported and the grant dies with the intent.
 */
class ExportProvider : ContentProvider() {

    override fun onCreate(): Boolean = true

    override fun openFile(uri: Uri, mode: String): ParcelFileDescriptor? {
        val ctx = context ?: return null
        val name = uri.lastPathSegment ?: return null
        if (name.contains("..") || name.contains('/') || name.contains('\\')) return null
        val f = File(File(ctx.cacheDir, "exports"), name)
        if (!f.exists()) return null
        return ParcelFileDescriptor.open(f, ParcelFileDescriptor.MODE_READ_ONLY)
    }

    override fun getType(uri: Uri): String = when {
        uri.lastPathSegment?.endsWith(".pdf") == true -> "application/pdf"
        uri.lastPathSegment?.endsWith(".csv") == true -> "text/csv"
        else -> "application/json"
    }

    override fun query(uri: Uri, projection: Array<out String>?, selection: String?,
                       selectionArgs: Array<out String>?, sortOrder: String?): Cursor? {
        val ctx = context ?: return null
        val name = uri.lastPathSegment ?: return null
        val file = File(File(ctx.cacheDir, "exports"), name)
        if (!file.exists()) return null
        // Some receivers (mail clients, Drive) ask for a display name and size before opening.
        // Answering properly means the attachment arrives with a sensible filename.
        val columns = projection ?: arrayOf(OpenableColumns.DISPLAY_NAME, OpenableColumns.SIZE)
        val cursor = MatrixCursor(columns, 1)
        val row = cursor.newRow()
        for (column in columns) {
            when (column) {
                OpenableColumns.DISPLAY_NAME -> row.add(name)
                OpenableColumns.SIZE -> row.add(file.length())
                else -> row.add(null)
            }
        }
        return cursor
    }

    override fun insert(uri: Uri, values: ContentValues?): Uri? = null

    override fun delete(uri: Uri, selection: String?, selectionArgs: Array<out String>?): Int = 0

    override fun update(uri: Uri, values: ContentValues?, selection: String?,
                        selectionArgs: Array<out String>?): Int = 0

    companion object {
        const val AUTHORITY = "in.khaifoods.tracker.exports"

        fun uriFor(context: Context, file: File): Uri {
            val dir = File(context.cacheDir, "exports").apply { mkdirs() }
            val target = File(dir, file.name)
            if (target.absolutePath != file.absolutePath && file.exists()) {
                file.copyTo(target, overwrite = true)
            }
            return Uri.parse("content://$AUTHORITY/${file.name}")
        }
    }
}
