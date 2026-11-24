package `in`.khaifoods.tracker

import android.Manifest
import android.app.AlertDialog
import android.app.TimePickerDialog
import android.content.pm.PackageManager
import android.os.Build
import android.text.InputType
import android.util.Base64
import android.view.View
import android.view.ViewGroup
import android.widget.CheckBox
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.Switch
import android.widget.TextView
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

/** Everything the participant can change, in one place, with the risky choices explained. */
class SettingsScreen(private val a: MainActivity) {

    fun build(): View {
        val content = Ui.v(a)
        content.setPadding(a.dp(16), a.dp(14), a.dp(16), a.dp(28))

        content.addView(profileCard())
        content.addView(languageCard())
        content.addView(reminderCard())
        content.addView(lockCard())
        content.addView(syncCard())
        content.addView(aboutCard())

        return Ui.scroll(a, content)
    }

    // ---------------------------------------------------------------- profile

    private fun profileCard(): View = Ui.section(a, a.getString(R.string.profile)) { c ->
        val p = a.prefs.profile()
        if (p == null) {
            c.addView(Ui.body(a, a.getString(R.string.onboard_intro)))
        } else {
            c.addView(row(a.getString(R.string.onboard_code), p.code))
            c.addView(row(a.getString(R.string.onboard_age), Labels.ageBand(a, p.ageBandKey)))
            c.addView(row(a.getString(R.string.onboard_conditions),
                Labels.conditions(a, p.conditionKeys).ifBlank { "—" }))
            c.addView(row(a.getString(R.string.onboard_meds),
                p.medicines.joinToString("; ") { if (it.dose.isBlank()) it.name else "${it.name} ${it.dose}" }.ifBlank { "—" }))
            c.addView(Ui.body(a, a.getString(R.string.consent_meta)))
        }
        c.addView(Ui.smallButton(a, a.getString(R.string.edit_profile), false) {
            a.editingProfile = true
            a.render()
        })
    }

    private fun row(label: String, value: String): LinearLayout = Ui.v(a).apply {
        setPadding(0, a.dp(4), 0, a.dp(4))
        addView(TextView(a).apply {
            text = label
            textSize = 12f
            setTextColor(a.color(R.color.khai_muted))
        })
        addView(TextView(a).apply {
            text = value
            textSize = 14.5f
            setTextColor(a.color(R.color.khai_text))
        })
    }

    // ---------------------------------------------------------------- language

    private fun languageCard(): View = Ui.section(a, a.getString(R.string.language)) { c ->
        c.addView(Ui.body(a, a.getString(R.string.language_hint)))
        val current = Languages.find(a.prefs.lang)
        val shortDraft = a.getString(R.string.draft_notice).split(" — ").first()
        val label = current.native + if (current.isDraft) " · $shortDraft" else ""
        c.addView(Ui.smallButton(a, label, false) { showLanguagePicker() })
    }

    private fun showLanguagePicker() {
        val shortDraft = a.getString(R.string.draft_notice).split(" — ").first()
        val labels = Languages.SHIPPED.map { lang ->
            lang.native + if (lang.isDraft) " · $shortDraft" else ""
        }.toTypedArray<String>()
        val checked = Languages.SHIPPED.indexOfFirst { it.code == a.prefs.lang }
        AlertDialog.Builder(a)
            .setTitle(a.getString(R.string.language))
            .setSingleChoiceItems(labels, if (checked < 0) 0 else checked) { dialog, which ->
                val code = Languages.SHIPPED[which].code
                dialog.dismiss()
                if (code != a.prefs.lang) a.switchLanguage(code)
            }
            .setNegativeButton(R.string.cancel, null)
            .show()
    }

    // ---------------------------------------------------------------- reminders

    private fun reminderCard(): View = Ui.section(a, a.getString(R.string.reminders)) { c ->
        c.addView(Ui.body(a, a.getString(R.string.reminder_hint)))

        val sw = Switch(a).apply {
            isChecked = a.prefs.reminderOn
            text = if (isChecked) a.getString(R.string.reminder_on) else a.getString(R.string.reminder_off)
            textSize = 15f
            setTextColor(a.color(R.color.khai_text))
            minHeight = a.dp(48)
            setOnCheckedChangeListener { _, checked ->
                a.prefs.reminderOn = checked
                text = a.getString(if (checked) R.string.reminder_on else R.string.reminder_off)
                if (checked) {
                    Reminders.schedule(a)
                    requestNotificationPermission()
                } else {
                    Reminders.cancel(a)
                }
            }
        }
        c.addView(sw)

        val timeRow = Ui.h(a)
        timeRow.setPadding(0, a.dp(8), 0, 0)
        timeRow.addView(TextView(a).apply {
            text = a.getString(R.string.reminder_time) + ": " + timeText(a.prefs.reminderMinutes)
            textSize = 14.5f
            setTextColor(a.color(R.color.khai_primary))
            isClickable = true
            setPadding(0, a.dp(10), 0, a.dp(10))
            setOnClickListener { pickTime() }
        }, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
        c.addView(timeRow)
    }

    private fun timeText(minutes: Int): String = String.format(Locale.US, "%02d:%02d", minutes / 60, minutes % 60)

    private fun pickTime() {
        val cal = Calendar.getInstance().apply {
            set(Calendar.HOUR_OF_DAY, a.prefs.reminderMinutes / 60)
            set(Calendar.MINUTE, a.prefs.reminderMinutes % 60)
        }
        TimePickerDialog(a, { _, hour, minute ->
            a.prefs.reminderMinutes = hour * 60 + minute
            if (a.prefs.reminderOn) Reminders.schedule(a)
            a.render()
        }, cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE), true).show()
    }

    private fun requestNotificationPermission() {
        if (Build.VERSION.SDK_INT >= 33) {
            if (checkSelf(a, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                a.requestPermissions(arrayOf(Manifest.permission.POST_NOTIFICATIONS), 1001)
            }
        }
    }

    private fun checkSelf(ctx: android.content.Context, perm: String): Int =
        ctx.checkSelfPermission(perm)

    // ---------------------------------------------------------------- app lock

    private fun lockCard(): View = Ui.section(a, a.getString(R.string.pin_lock)) { c ->
        c.addView(Ui.body(a, a.getString(R.string.pin_hint)))
        if (a.prefs.pinEnabled) {
            val r = Ui.h(a)
            r.addView(Ui.rowButton(a, a.getString(R.string.pin_change), false, 1f) { askPin(change = true) })
            r.addView(Ui.rowButton(a, a.getString(R.string.pin_remove), false, 1f) {
                a.prefs.clearPin()
                a.toast(a.getString(R.string.pin_removed))
                a.render()
            })
            c.addView(r)
        } else {
            c.addView(Ui.smallButton(a, a.getString(R.string.pin_set), false) { askPin(change = false) })
        }

        val hide = Switch(a).apply {
            isChecked = a.prefs.hidePreviews
            text = a.getString(R.string.hide_previews)
            textSize = 14.5f
            setTextColor(a.color(R.color.khai_text))
            setPadding(0, a.dp(10), 0, 0)
            setOnCheckedChangeListener { _, checked ->
                a.prefs.hidePreviews = checked
                a.window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_SECURE)
                if (checked) a.window.setFlags(
                    android.view.WindowManager.LayoutParams.FLAG_SECURE,
                    android.view.WindowManager.LayoutParams.FLAG_SECURE
                )
            }
        }
        c.addView(hide)
    }

    private fun askPin(change: Boolean) {
        val input = EditText(a).apply {
            inputType = InputType.TYPE_CLASS_NUMBER or InputType.TYPE_NUMBER_VARIATION_PASSWORD
            filters = arrayOf(android.text.InputFilter.LengthFilter(4))
            hint = a.getString(R.string.pin_new)
            setPadding(a.dp(16), a.dp(12), a.dp(16), a.dp(12))
        }
        val holder = LinearLayout(a).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(a.dp(20), a.dp(8), a.dp(20), a.dp(4))
            addView(input)
        }
        AlertDialog.Builder(a)
            .setTitle(a.getString(if (change) R.string.pin_change else R.string.pin_set))
            .setView(holder)
            .setNegativeButton(R.string.cancel, null)
            .setPositiveButton(R.string.save) { _, _ ->
                val pin = input.text.toString()
                if (pin.length == 4) {
                    a.prefs.setPin(pin)
                    a.toast(a.getString(R.string.pin_saved))
                    a.render()
                } else {
                    a.toast(a.getString(R.string.pin_four))
                }
            }
            .show()
    }

    // ---------------------------------------------------------------- sync

    private fun syncCard(): View = Ui.section(a, a.getString(R.string.sync_title)) { c ->
        c.addView(Ui.body(a, a.getString(R.string.sync_hint)))
        val url = Ui.input(a, a.getString(R.string.sync_url_ph))
        url.setText(a.prefs.syncUrl)
        url.inputType = InputType.TYPE_TEXT_VARIATION_URI
        c.addView(Ui.field(a, a.getString(R.string.sync_url), url))

        val token = Ui.input(a, a.getString(R.string.sync_token_ph))
        token.setText(a.prefs.syncToken)
        token.inputType = InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
        c.addView(Ui.field(a, a.getString(R.string.sync_token), token))

        val pin = Ui.input(a, a.getString(R.string.sync_pin_ph))
        pin.setText(a.prefs.syncPin)
        c.addView(Ui.field(a, a.getString(R.string.sync_pin), pin))

        val consent = CheckBox(a).apply {
            text = a.getString(R.string.sync_consent)
            isChecked = a.prefs.syncConsent
            textSize = 13f
            setTextColor(a.color(R.color.khai_text))
            setPadding(0, a.dp(6), 0, a.dp(4))
        }
        c.addView(consent)

        val r = Ui.h(a)
        r.addView(Ui.rowButton(a, a.getString(R.string.sync_save), false, 1f) {
            val value = url.text.toString().trim().trimEnd('/')
            if (value.isEmpty()) {
                a.prefs.syncUrl = ""
                a.prefs.syncToken = ""
                a.prefs.syncPin = ""
                a.prefs.syncConsent = false
                a.toast(a.getString(R.string.sync_never))
                a.render()
                return@rowButton
            }
            if (!value.startsWith("https://")) {
                a.toast(a.getString(R.string.sync_need_https))
                return@rowButton
            }
            val suppliedToken = token.text.toString().trim()
            if (suppliedToken.isEmpty()) {
                a.toast(a.getString(R.string.sync_auth_missing))
                return@rowButton
            }
            val suppliedPin = pin.text.toString().trim()
            if (suppliedPin.isNotEmpty() && !validPin(suppliedPin)) {
                a.toast(a.getString(R.string.sync_bad_pin))
                return@rowButton
            }
            if (!consent.isChecked) {
                a.toast(a.getString(R.string.sync_no_consent))
                return@rowButton
            }
            a.prefs.syncUrl = value
            a.prefs.syncToken = suppliedToken
            a.prefs.syncPin = suppliedPin
            a.prefs.syncConsent = true
            a.toast(a.getString(R.string.sync_save))
            a.render()
        })
        r.addView(Ui.rowButton(a, a.getString(R.string.sync_now), true, 1f) {
            a.toast(a.getString(R.string.loading))
            Thread {
                Sync.push(a, quiet = false)
                a.runOnUiThread {
                    a.toast(a.prefs.lastSyncMessage)
                    a.render()
                }
            }.start()
        })
        c.addView(r)

        val status = TextView(a).apply {
            text = statusText()
            textSize = 12.5f
            setTextColor(a.color(R.color.khai_muted))
            setPadding(0, a.dp(8), 0, 0)
        }
        c.addView(status)
    }

    private fun validPin(value: String): Boolean = try {
        val compact = value.replace(Regex("\\s"), "")
        compact.isNotEmpty() && Base64.decode(compact, Base64.DEFAULT).size == 32
    } catch (e: Exception) {
        false
    }

    private fun statusText(): String {
        val pending = a.store.pendingCount(a.prefs.code())
        val last = a.prefs.lastSyncAt
        val whenText = if (last == 0L) a.getString(R.string.sync_never)
        else SimpleDateFormat("d MMM, HH:mm", Locale.getDefault()).format(Date(last))
        val base = if (a.prefs.lastSyncMessage.isBlank()) whenText else a.prefs.lastSyncMessage
        return "$base · " + a.getString(R.string.pending) + ": $pending"
    }

    // ---------------------------------------------------------------- about

    private fun aboutCard(): View = Ui.section(a, a.getString(R.string.about)) { c ->
        c.addView(Ui.body(a, a.getString(R.string.about_body), muted = false))
        c.addView(Ui.body(a, a.getString(R.string.about_credit)))
        c.addView(Ui.body(a, a.getString(R.string.disclaimer)))
    }
}
