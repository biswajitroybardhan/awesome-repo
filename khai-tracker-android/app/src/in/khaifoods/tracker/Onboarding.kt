package `in`.khaifoods.tracker

import android.text.InputType
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.CheckBox
import android.widget.LinearLayout
import android.widget.Spinner
import android.widget.TextView

/**
 * First run: identity, conditions, medicines and consent.
 *
 * The consent is deliberately explicit and time-stamped, read aloud in Hindi on request, and
 * limited to what the measurement needs. Nothing here is a name, address or identifier issued
 * by the state: the participant code is assigned by the study coordinator.
 */
class OnboardingView(private val a: MainActivity, private val editMode: Boolean = false) {

    private val conditions = mutableListOf<String>()
    private val medicines = mutableListOf<Med>()
    private var consentChecked = false

    fun build(): View {
        val ctx = a
        val existing = a.prefs.profile()
        val content = Ui.v(a)
        content.setPadding(a.dp(20), a.dp(20), a.dp(20), a.dp(28))

        content.addView(Ui.hero(a, a.getString(if (editMode) R.string.profile else R.string.onboard_title)))
        content.addView(Ui.body(a, a.getString(if (editMode) R.string.edit_profile else R.string.onboard_intro)))

        val code = Ui.input(a, a.getString(R.string.onboard_code_ph))
        code.filters = arrayOf(
            android.text.InputFilter.AllCaps(),
            android.text.InputFilter.LengthFilter(12),
            // The code is also a filename and a FHIR identifier, so keep it ASCII and tame.
            android.text.InputFilter { src, _, _, _, _, _ ->
                src.toString().replace(Regex("[^A-Za-z0-9_-]"), "")
            }
        )
        code.setText(existing?.code ?: "")
        content.addView(Ui.field(a, a.getString(R.string.onboard_code), code))

        val ageKeys = a.resources.getStringArray(R.array.age_band_keys)
        val ageLabels = a.resources.getStringArray(R.array.age_bands)
        val spinner = Spinner(a).apply {
            adapter = ArrayAdapter(
                a, android.R.layout.simple_spinner_item, ageLabels.toList()
            ).also { it.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item) }
            background = a.getDrawable(R.drawable.input_bg)
            minimumHeight = a.dp(48)
            setPadding(a.dp(8), a.dp(4), a.dp(8), a.dp(4))
            contentDescription = a.getString(R.string.onboard_age)
        }
        existing?.let {
            val idx = ageKeys.indexOf(it.ageBandKey)
            if (idx >= 0) spinner.setSelection(idx)
        }
        content.addView(Ui.label(a, a.getString(R.string.onboard_age)))
        content.addView(spinner)

        // conditions
        content.addView(Ui.label(a, a.getString(R.string.onboard_conditions)))
        val condWrap = Ui.v(a)
        val conditionKeys = a.resources.getStringArray(R.array.condition_keys)
        val conditionLabels = a.resources.getStringArray(R.array.condition_options)
        existing?.conditionKeys?.let { conditions.addAll(it) }
        for (i in conditionKeys.indices) {
            val key = conditionKeys[i]
            val cb = CheckBox(a).apply {
                text = conditionLabels[i]
                textSize = 15f
                isChecked = conditions.contains(key)
                minHeight = a.dp(44)
                setTextColor(a.color(R.color.khai_text))
                setOnCheckedChangeListener { _, checked ->
                    if (checked) {
                        if (!conditions.contains(key)) conditions.add(key)
                        if (key == conditionKeys.last()) {
                            // "None of these" is exclusive: clearing the rest clears their boxes.
                            for (j in 0 until condWrap.childCount) {
                                val v = condWrap.getChildAt(j) as? CheckBox
                                if (v != null && v !== this && v.isChecked) {
                                    v.isChecked = false
                                    conditions.remove(conditionKeys[j])
                                }
                            }
                        } else {
                            // ...and choosing a condition clears "None of these".
                            val noneBox = condWrap.getChildAt(conditionKeys.lastIndex) as? CheckBox
                            if (noneBox?.isChecked == true) noneBox.isChecked = false
                        }
                    } else {
                        conditions.remove(key)
                    }
                }
            }
            condWrap.addView(cb)
        }
        content.addView(condWrap)

        // medicines
        content.addView(Ui.label(a, a.getString(R.string.onboard_meds)))
        val medList = Ui.v(a)
        existing?.medicines?.let { medicines.addAll(it) }
        fun renderMeds() {
            medList.removeAllViews()
            if (medicines.isEmpty()) {
                medList.addView(Ui.body(a, a.getString(R.string.meds_empty)))
            }
            for ((i, m) in medicines.toList().withIndex()) {
                val row = Ui.h(a)
                row.addView(TextView(a).apply {
                    text = if (m.dose.isBlank()) m.name else "${m.name} · ${m.dose}"
                    textSize = 14.5f
                    setTextColor(a.color(R.color.khai_text))
                    setPadding(0, a.dp(6), 0, a.dp(6))
                }, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
                row.addView(TextView(a).apply {
                    text = "\u2715"
                    textSize = 16f
                    setTextColor(a.color(R.color.khai_danger))
                    setPadding(a.dp(12), a.dp(6), a.dp(4), a.dp(6))
                    isClickable = true
                    contentDescription = a.getString(R.string.remove)
                    setOnClickListener {
                        medicines.removeAt(i)
                        renderMeds()
                    }
                })
                medList.addView(row)
            }
        }
        renderMeds()

        val medName = Ui.input(a, a.getString(R.string.onboard_meds_ph))
        val medDose = Ui.input(a, a.getString(R.string.dose_hint))
        val addRow = Ui.h(a)
        addRow.addView(medName, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1.6f).apply {
            marginEnd = a.dp(6)
        })
        addRow.addView(medDose, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
        content.addView(addRow)
        content.addView(Ui.smallButton(a, a.getString(R.string.onboard_add_med), false) {
            val n = medName.text.toString().trim()
            if (n.isNotEmpty()) {
                medicines.add(Med(n, medDose.text.toString().trim()))
                medName.setText("")
                medDose.setText("")
                renderMeds()
            }
        })
        content.addView(medList)

        // consent
        content.addView(Ui.divider(a))
        content.addView(Ui.heading(a, a.getString(R.string.consent_title)))
        content.addView(Ui.body(a, a.getString(R.string.consent_body), muted = false))
        content.addView(Ui.smallButton(a, a.getString(R.string.consent_listen), false) {
            a.speak(a.getString(R.string.consent_body))
        })
        val consentBox = CheckBox(a).apply {
            text = a.getString(R.string.consent_check)
            textSize = 15f
            isChecked = editMode
            minHeight = a.dp(48)
            setTextColor(a.color(R.color.khai_text))
            setPadding(0, a.dp(8), 0, a.dp(4))
            setOnCheckedChangeListener { _, c -> consentChecked = c }
        }
        consentChecked = editMode
        content.addView(consentBox)
        content.addView(Ui.body(a, a.getString(R.string.consent_meta)))

        val error = Ui.body(a, "").apply { setTextColor(a.color(R.color.khai_danger)) }
        content.addView(error)

        content.addView(Ui.button(a, a.getString(if (editMode) R.string.save else R.string.onboard_start), true) {
            val codeText = code.text.toString().trim().uppercase()
            if (codeText.isEmpty()) {
                error.text = a.getString(R.string.onboard_error_code); return@button
            }
            if (spinner.selectedItemPosition < 0) {
                error.text = a.getString(R.string.onboard_error_age); return@button
            }
            if (!consentChecked) {
                error.text = a.getString(R.string.onboard_error_consent); return@button
            }
            val ageBandKey = ageKeys[spinner.selectedItemPosition]
            val profile = Profile(
                code = codeText,
                ageBandKey = ageBandKey,
                conditionKeys = conditions.toList(),
                medicines = medicines.toList(),
                consentVersion = existing?.consentVersion ?: "1.0",
                consentAt = existing?.consentAt ?: System.currentTimeMillis(),
                deviceId = a.prefs.deviceId,
                createdAt = existing?.createdAt ?: System.currentTimeMillis()
            )
            a.prefs.saveProfile(profile)
            if (editMode) {
                a.editingProfile = false
                a.go(Screen.SETTINGS)
            } else {
                a.screen = Screen.TODAY
                a.render()
            }
        })

        content.addView(Ui.body(a, a.getString(R.string.disclaimer)))
        return Ui.scroll(a, content)
    }
}
