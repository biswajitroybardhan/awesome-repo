# German (de) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: German (Deutsch)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/de.json` (app and site)
- Generated automatically; no reviewer has approved this draft.

## What to check

1. Meaning matches the English source. Do not translate dish names or brand names; they must stay in their familiar original form.
2. The non-medical-device disclaimer and the no-affiliation sentence are accurate and complete.
3. Consent wording is understandable to a lay person and does not imply care, diagnosis or a relationship with any named health system.
4. Numbers, units, placeholders (`{...}`, `%1$d`) and inline tags (`<b>`, `<br>`) are preserved exactly.
5. Tone is neutral and non-promotional; no invented capability is added.

## Automated checks (not a human review)

- App: 0 problem(s)
- Site: 0 problem(s)

## App strings — German

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | Über die App |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nEntwickelt von Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, Indien.\n\nKonzipiert für geteilte Telefone, unstabile Netzwerke und gemischte indische Gerichte. Offline zuerst. Keine Analyse durch Dritte. Keine Werbung. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Produktverantwortlicher: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Lebensmittel hinzufügen |  |
| `add_medicines` | Add medicines | Medikamente hinzufügen |  |
| `already_saved` | Saved. You can keep editing and save again. | Gespeichert. Sie können weiter bearbeiten und erneut speichern. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Fragen Sie eine qualifizierte Fachperson. |  |
| `assistant_input_ph` | Ask a question | Frage eingeben |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Antworten ausschließlich aus den eigenen Hilfetexten dieses Werkzeugs. Keine KI, keine Diagnose, keine Beratung. |  |
| `assistant_listen` | Listen | Anhören |  |
| `assistant_send` | Send | Senden |  |
| `assistant_tab` | Guide | Hilfe |  |
| `assistant_title` | Khai Guide | Khai-Hilfe |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | Dafür habe ich keine Antwort. Ich beantworte nur Fragen zur Nutzung dieses Werkzeugs. |  |
| `back` | Back | Zurück |  |
| `bp_dia` | Diastolic (lower) | Diastolisch (unterer Wert) |  |
| `bp_sys` | Systolic (upper) | Systolisch (oberer Wert) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | Abbrechen |  |
| `carbs` | Carbohydrate | Kohlenhydrate |  |
| `close` | Close | Schließen |  |
| `completeness` | 21-day completeness | Vollständigkeit über 21 Tage |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Tage mit Mahlzeiten, Medikamenten und einem Messwert, geteilt durch 21. Gezählt anhand gespeicherter Einträge, nicht aus dem Gedächtnis. |  |
| `confirm` | Confirm | Bestätigen |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Sie entscheiden, was Sie erfassen. Ihre Einträge bleiben auf diesem Telefon verschlüsselt und werden nur dann an den Khai-Studienserver gesendet, wenn Ihr Koordinator Ihnen eine Serveradresse gibt. Sie können jederzeit alles löschen. Es werden kein Name, keine Adresse, keine Aadhaar-Nummer und keine Kontaktliste erhoben. Sie können Ihre Teilnahme beenden, indem Sie Ihre Daten löschen. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Ich habe dies gelesen oder gehört und stimme der Teilnahme zu. |  |
| `consent_listen` | Listen in Hindi | Auf Hindi anhören |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Einwilligung Version 1.0 · auf diesem Gerät mit Zeitstempel erfasst |  |
| `consent_title` | Consent | Einwilligung |  |
| `day_detail` | Day detail | Tagesdetails |  |
| `days_logged` | Days logged | Erfasste Tage |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker ist ein Tracking-Tool, keine medizinische Beratung. Es stellt nie eine Diagnose und ändert nie ein Rezept. |  |
| `done` | Done | Fertig |  |
| `dose_hint` | Dose (optional) | Dosis (optional) |  |
| `edit_day` | Edit this day | Diesen Tag bearbeiten |  |
| `edit_profile` | Edit profile | Profil bearbeiten |  |
| `energy` | Energy | Energie |  |
| `erase` | Erase my data | Meine Daten löschen |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Dadurch werden alle Einträge, Ihr Profil und Ihre Erinnerungseinstellungen auf diesem Telefon dauerhaft gelöscht. Dies kann nicht rückgängig gemacht werden. |  |
| `erase_yes` | Erase everything | Alles löschen |  |
| `estimated` | estimated | geschätzt |  |
| `export_backup` | Full backup (JSON) | Vollständige Sicherung (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Gesundheitsakte (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Ernährungsprotokoll (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Teilen Sie nur mit Personen Ihrer Wahl. Dateien verlassen das Telefon erst, wenn Sie auf Teilen tippen. |  |
| `export_metrics` | Daily readings (CSV) | Tägliche Messwerte (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Zusammenfassung für die behandelnde Person (PDF) |  |
| `export_title` | Export and share | Exportieren und teilen |  |
| `export_working` | Preparing file… | Datei wird vorbereitet… |  |
| `fat` | Fat | Fett |  |
| `food_items` | %1$d food items | %1$d Lebensmittel |  |
| `food_library_title` | Food library | Lebensmittelbibliothek |  |
| `glucose` | Blood sugar | Blutzucker |  |
| `glucose_fasting` | Fasting | Nüchtern |  |
| `glucose_pp` | After food | Nach dem Essen |  |
| `hide_previews` | Hide this app in the recent-apps preview | Diese App in der Recent-Apps-Vorschau verbergen |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Ein ausgefülltes Kästchen bedeutet einen Eintrag. Tippen Sie auf einen Tag, um ihn anzusehen oder zu korrigieren. |  |
| `history_title` | Last 21 days | Letzte 21 Tage |  |
| `insight_descriptive` | description | Beschreibung |  |
| `insight_early` | early signal | frühes Signal |  |
| `insight_moderate` | moderate signal | mittleres Signal |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Dies sind Beobachtungen zu Ihren eigenen Einträgen, weder eine Diagnose noch eine Behandlungsempfehlung. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Erfassen Sie eine Woche lang weiter. Muster erscheinen, sobald mindestens fünf Tage mit Messwerten vorliegen. |  |
| `insights_title` | What your own data shows | Was Ihre eigenen Daten zeigen |  |
| `kcal` | Energy | Energie |  |
| `language` | Language / भाषा | Sprache / भाषा |  |
| `loading` | Loading… | Wird geladen… |  |
| `meal_breakfast` | Breakfast | Frühstück |  |
| `meal_dinner` | Dinner | Abendessen |  |
| `meal_lunch` | Lunch | Mittagessen |  |
| `meal_snacks` | Snacks & drinks | Snacks und Getränke |  |
| `meds_changed` | Changed | Geändert |  |
| `meds_empty` | No medicines listed yet. | Noch keine Medikamente aufgeführt. |  |
| `meds_hint` | Tick what you actually did today. | Kreuzen Sie an, was Sie heute tatsächlich gemacht haben. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | In Ihrem Profil sind keine Medikamente aufgeführt. Fügen Sie sie einmal hinzu und kreuzen Sie sie dann täglich an. |  |
| `meds_skipped` | Skipped | Ausgelassen |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d von %2$d Medikamenten eingenommen |  |
| `meds_taken` | Taken | Eingenommen |  |
| `meds_title` | Medicines | Medikamente |  |
| `mood` | Mood | Stimmung |  |
| `no` | No | Nein |  |
| `no_food_yet` | Nothing added yet | Noch nichts hinzugefügt |  |
| `note` | Anything else? (optional) | Noch etwas? (optional) |  |
| `nothing_logged` | No entry for this day. | Kein Eintrag für diesen Tag. |  |
| `notif_channel` | Daily reminder | Tägliche Erinnerung |  |
| `notif_channel_desc` | One daily reminder to record your day. | Eine tägliche Erinnerung, um den Tag zu erfassen. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Zwei ruhige Minuten: Was haben Sie gegessen, und was haben Sie heute gemessen? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Erlauben Sie Benachrichtigungen, damit Sie die tägliche Erinnerung erhalten. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + Weiteres hinzufügen |  |
| `onboard_age` | Age group | Altersgruppe |  |
| `onboard_age_ph` | Select | Auswählen |  |
| `onboard_code` | Participant code | Teilnehmercode |  |
| `onboard_code_ph` | e.g. K01 | z. B. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Erkrankungen (alle zutreffenden ankreuzen) |  |
| `onboard_error_age` | Please choose an age group. | Bitte wählen Sie eine Altersgruppe. |  |
| `onboard_error_code` | Please enter your participant code. | Bitte geben Sie Ihren Teilnehmercode ein. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Bitte bestätigen Sie die Einwilligung, um fortzufahren. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Ein tägliches Ernährungs- und Gesundheitsprotokoll, das Ihnen und Ihrer behandelnden Person zeigt, was zwischen den Terminen tatsächlich passiert. Es ist ein Tracking-Tool, keine medizinische Beratung. |  |
| `onboard_meds` | Daily medicines (name and dose) | Tägliche Medikamente (Name und Dosis) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | z. B. Metformin 500 mg |  |
| `onboard_start` | Start tracking | Tracking starten |  |
| `onboard_title` | Welcome to Khai Tracker | Willkommen bei Khai Tracker |  |
| `pending` | Pending sync | Synchronisierung ausstehend |  |
| `per_portion` | per portion | pro Portion |  |
| `pick_day` | Pick a day above. | Wählen Sie oben einen Tag aus. |  |
| `pin_change` | Change PIN | PIN ändern |  |
| `pin_enter` | Enter your PIN | PIN eingeben |  |
| `pin_four` | A PIN must be exactly 4 digits. | Eine PIN muss genau 4 Ziffern haben. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Nützlich auf einem geteilten Familientelefon. Beim Öffnen der App und erneut nach einer Minute Abwesenheit wird eine 4-stellige PIN abgefragt. |  |
| `pin_lock` | App lock | App-Sperre |  |
| `pin_new` | Choose a 4-digit PIN | 4-stellige PIN wählen |  |
| `pin_remove` | Remove PIN | PIN entfernen |  |
| `pin_removed` | PIN removed. | PIN entfernt. |  |
| `pin_saved` | PIN saved. | PIN gespeichert. |  |
| `pin_set` | Set PIN | PIN festlegen |  |
| `pin_wrong` | Wrong PIN. Try again. | Falsche PIN. Bitte erneut versuchen. |  |
| `portion_q` | Portion | Portion |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | Ihre Einträge sind auf diesem Gerät mit einem Schlüssel verschlüsselt, der im sicheren Keystore dieses Telefons gespeichert ist. Nichts wird gesendet, es sei denn, Sie richten einen Studienserver ein. Es gibt keine Analyse und keine Werbung. |  |
| `privacy_title` | Privacy | Datenschutz |  |
| `profile` | Profile and medicines | Profil und Medikamente |  |
| `progress_title` | Progress | Fortschritt |  |
| `protein` | Protein | Protein |  |
| `pulse` | Pulse | Puls |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Schätzwerte sind Spannen, da dasselbe Gericht je nach Haushalt variiert. Sie dienen zum Erkennen von Mustern, nicht zum Zählen von Kalorien. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | Hindi-Sprachausgabe ist auf diesem Telefon nicht installiert. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Eine dezente Benachrichtigung zur gewünschten Zeit. Kein Druck wegen unterbrochener Serien, keine Werbung. |  |
| `reminder_off` | Reminder off | Erinnerung aus |  |
| `reminder_on` | Reminder on | Erinnerung an |  |
| `reminder_time` | Reminder time | Erinnerungszeit |  |
| `reminders` | Daily reminder | Tägliche Erinnerung |  |
| `remove` | Remove | Entfernen |  |
| `remove_confirm` | Remove this item? | Diesen Eintrag entfernen? |  |
| `save` | Save | Speichern |  |
| `save_failed` | Could not save. Please try again. | Speichern nicht möglich. Bitte erneut versuchen. |  |
| `save_today` | Save today | Heute speichern |  |
| `saved` | Saved on this device. Encrypted. | Auf diesem Gerät gespeichert. Verschlüsselt. |  |
| `search_food` | Search a dish in English or Hindi | Gericht auf Englisch oder Hindi suchen |  |
| `settings_title` | Settings | Einstellungen |  |
| `share` | Share | Teilen |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Keine App auf diesem Telefon kann die Datei empfangen. Installieren Sie eine E-Mail- oder Datei-App und versuchen Sie es erneut. |  |
| `sleep` | Sleep last night (hours) | Schlaf letzte Nacht (Stunden) |  |
| `sodium` | Salt (sodium) | Salz (Natrium) |  |
| `streak` | Day streak | Tage in Folge |  |
| `sync_bad_url` | That does not look like a valid address. | Das sieht nicht wie eine gültige Adresse aus. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Synchronisierung fehlgeschlagen. Die Einträge sind auf diesem Telefon sicher und werden erneut versucht. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | Optional. Ihr Koordinator gibt Ihnen eine Serveradresse. Lassen Sie das Feld leer, um alles nur auf diesem Telefon zu behalten. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | Verwenden Sie eine HTTPS-Adresse. Gesundheitsdaten werden nie unverschlüsselt gesendet. |  |
| `sync_never` | Not synced yet. | Noch nicht synchronisiert. |  |
| `sync_now` | Sync now | Jetzt synchronisieren |  |
| `sync_offline` | No internet right now. Entries queued. | Derzeit keine Internetverbindung. Einträge zwischengespeichert. |  |
| `sync_ok` | Synced. All entries are on the server. | Synchronisiert. Alle Einträge sind auf dem Server. |  |
| `sync_save` | Save address | Adresse speichern |  |
| `sync_title` | Study sync | Studien-Synchronisierung |  |
| `sync_url` | Server address | Serveradresse |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Verlauf |  |
| `tab_progress` | Progress | Fortschritt |  |
| `tab_settings` | Settings | Einstellungen |  |
| `tab_today` | Today | Heute |  |
| `this_week` | This week | Diese Woche |  |
| `todays_total` | Today\'s estimate | Schätzung für heute |  |
| `total_carbs` | Carbohydrate | Kohlenhydrate |  |
| `uncertainty` | Range, not a single number | Eine Spanne, keine einzelne Zahl |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Tragen Sie nur ein, was Sie gemessen haben. Ein leeres Feld bedeutet: nicht gemessen – auch das ist eine nützliche Information. |  |
| `vitals_title` | Readings | Messwerte |  |
| `weight` | Weight (kg) | Gewicht (kg) |  |
| `wellbeing_title` | How was the day? | Wie war der Tag? |  |
| `yes` | Yes | Ja |  |

## Site strings — German

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Über diese Demo |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK herunterladen |  |
| `action_menu` | Open menu | Menü öffnen |  |
| `action_theme` | Switch theme | Design wechseln |  |
| `addFood` | Add food | Lebensmittel hinzufügen |  |
| `addMed` | + Add another | + Weiteres hinzufügen |  |
| `adherence` | medicines taken | Medikamente eingenommen |  |
| `ageLabel` | Age band | Altersgruppe |  |
| `allFoods` | All | Alle |  |
| `askClinician` | Ask a qualified clinician. | Fragen Sie eine qualifizierte Fachperson. |  |
| `assistantInputPh` | Ask a question | Frage eingeben |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Antworten ausschließlich aus den eigenen Hilfetexten dieses Werkzeugs. Keine KI, keine Diagnose, keine Beratung. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Ein Wechsel der Anzeigesprache ändert nur die Beschriftungen. Gespeicherte Werte bleiben stabile Codes, sodass kein Tag überschrieben wird. |  |
| `assistantListen` | Listen | Anhören |  |
| `assistantNav` | Guide | Hilfe |  |
| `assistantSend` | Send | Senden |  |
| `assistantTitle` | Khai Guide | Khai-Hilfe |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Dafür habe ich keine Antwort. Ich beantworte nur Fragen zur Nutzung dieses Werkzeugs. |  |
| `avgBp` | avg BP | Ø Blutdruck |  |
| `back` | Back | Zurück |  |
| `bmiNote` | Not a diagnosis. | Keine Diagnose. |  |
| `bpSys` | Systolic | Systolisch |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Als Blueprint lesen, nicht als Ankündigung: Es werden kein Krankenhauseinsatz, kein Pilotprojekt, keine Befürwortung und keine Partnerschaft behauptet. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | Die ehrliche Linie: Die Teilnehmer-App und die Browser-Demo existieren heute. Jede Krankenhaus-Komponente hier ist ein Designvorschlag. |  |
| `codeLabel` | Participant code | Teilnehmercode |  |
| `codeShort` | Code | Code |  |
| `completeDays` | complete days | vollständige Tage |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Tage mit Ernährung, Medikamentenstatus (falls verschrieben) und mindestens einer Messung, geteilt durch 21. Gezählt anhand gespeicherter Einträge, nicht aus dem Gedächtnis. |  |
| `conditionsLabel` | Conditions (select all that apply) | Erkrankungen (alle zutreffenden auswählen) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Sie entscheiden, was Sie eingeben. In dieser Demo bleibt alles im lokalen Speicher dieses Browsers – es gibt keinen Server und nichts wird hochgeladen. In der Android-App sind die Einträge auf dem Telefon verschlüsselt. Es werden kein Name, keine Adresse, kein staatlicher Ausweis und keine Kontaktliste erhoben. Sie können jederzeit alles löschen. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Ich habe dies gelesen und verstehe, dass diese Browser-Demo nicht für echte klinische Akten bestimmt ist. |  |
| `consentTitle` | Consent | Einwilligung |  |
| `dayComplete` | Day complete | Tag vollständig |  |
| `demoBadge` | Demo | Demo |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Nur Demo · kein Medizinprodukt · nicht für echte klinische Akten. |  |
| `downloadToast` | {name} downloaded. | {name} heruntergeladen. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Entwurf der Übersetzung – vor klinischer Nutzung von Muttersprachlern zu prüfen. |  |
| `early` | early signal | frühes Signal |  |
| `eraseBtn` | Erase my data | Meine Daten löschen |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Dadurch werden das Profil, alle Tage und alle Einstellungen aus diesem Browser entfernt. Dies kann nicht rückgängig gemacht werden. |  |
| `eraseTitle` | Erase everything | Alles löschen |  |
| `eraseYes` | Erase everything | Alles löschen |  |
| `errCode` | Please enter your participant code. | Bitte geben Sie Ihren Teilnehmercode ein. |  |
| `errConsent` | Consent is required to continue. | Die Einwilligung ist erforderlich, um fortzufahren. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Auffällige Messwerte werden für ein Gespräch markiert. Die App stellt nie eine Diagnose und ändert nie ein Rezept. |  |
| `escalateNone` | No threshold flags in the recent record. | Keine Schwellenwert-Hinweise in den letzten Einträgen. |  |
| `escalateTitle` | Flags for the clinician | Hinweise für die behandelnde Person |  |
| `estTotal` | Today’s estimate | Schätzung für heute |  |
| `exportBackup` | Complete backup (JSON) | Vollständige Sicherung (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Gesundheitsakte (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Ernährungsprotokoll (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Tägliche Messwerte (CSV) |  |
| `exportPrint` | Clinician summary (print) | Zusammenfassung für die behandelnde Person (Druck) |  |
| `exportsTitle` | Export & share | Exportieren und teilen |  |
| `eyebrow_capability` | Capability map | Fähigkeitsübersicht |  |
| `eyebrow_demo` | Browser demo · no install | Browser-Demo · keine Installation |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Krankenhaus-Einsatz · Referenzdesign |  |
| `fasting` | Fasting | Nüchtern |  |
| `foodItemsOne` | 1 item | 1 Eintrag |  |
| `foodLogged` | Food | Ernährung |  |
| `foodPickerTitle` | Choose a dish | Gericht auswählen |  |
| `footerNote` | Nothing leaves this browser. | Nichts verlässt diesen Browser. |  |
| `footer_browser_demo` | Browser demo | Browser-Demo |  |
| `footer_contact` | Contact | Kontakt |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Nur Demo · kein Medizinprodukt · keine Verbindung zu Zhongshan Hospital, HIMSS oder einem genannten Gesundheitssystem. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Ein Messinstrument für die Zeit zwischen den Terminen. Entwickelt in Jamshedpur für geteilte Telefone, schwache Akkus und weit entfernte Praxen. |  |
| `footer_hospital_design` | Hospital design | Krankenhaus-Konzept |  |
| `footer_limits` | Limits and answers | Grenzen und Antworten |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Kein Medizinprodukt. Keine Verbindung zu Zhongshan Hospital, HIMSS oder einem genannten Gesundheitssystem. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Nichts verlässt diesen Browser. |  |
| `footer_product` | Product | Produkt |  |
| `footer_transparency` | Transparency | Transparenz |  |
| `footer_verification` | Verification | Verifizierung |  |
| `glucose` | Blood sugar | Blutzucker |  |
| `head_404` | That page is not here. | Diese Seite gibt es nicht. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Ein geschlossener Kreislauf, gebaut für Orte, die ein Krankenhaus nie erreicht. |  |
| `head_functions` | Every function, honestly labelled. | Jede Funktion ehrlich benannt. |  |
| `head_hospital` | The hospital is the unit of change. | Das Krankenhaus ist die Einheit des Wandels. |  |
| `head_privacy` | Your record stays yours. | Ihr Protokoll gehört Ihnen. |  |
| `head_security` | What is protected, and what is not. | Was geschützt ist – und was nicht. |  |
| `historyTitle` | The last 21 days | Die letzten 21 Tage |  |
| `hospAudit` | Audit trail | Auditpfad |  |
| `hospCohort` | Cohort | Kohorte |  |
| `hospComplete` | complete | vollständig |  |
| `hospDisc1` | Prescribed but not dispensed | Verordnet, aber nicht ausgegeben |  |
| `hospDiscrepancies` | Medication discrepancies | Medikationsabweichungen |  |
| `hospOpenHospital` | Open hospital control room | Krankenhaus-Leitstand öffnen |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Erfassen Sie etwa eine Woche in der Teilnehmer-App, um hier ein Prüfpaket zu sehen. |  |
| `hospReviewPack` | Today's review pack | Prüfpaket für heute |  |
| `hospitalBack` | Back to app | Zurück zur App |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Eine Entwurfsskizze der Krankenhaus-Ebene, die auf demselben Protokoll aufbaut. Die Kohorte unten ist synthetisch – keine echten Patienten, keine Verbindung zu einem Krankenhaus, keine klinischen Entscheidungen. |  |
| `hospitalTitle` | Hospital control room | Krankenhaus-Leitstand |  |
| `hospital_layer` | Hospital deployment layer | Ebene für den Krankenhauseinsatz |  |
| `hospital_s1` | Status of this document | Status dieses Dokuments |  |
| `hospital_s10` | Governance and safety | Governance und Sicherheit |  |
| `hospital_s11` | Phased rollout | Schrittweise Einführung |  |
| `hospital_s12` | What would make this real | Was dies wirklich machen würde |  |
| `hospital_s2` | Why the hospital, not just the phone | Warum das Krankenhaus, nicht nur das Telefon |  |
| `hospital_s3` | Reference topology | Referenztopologie |  |
| `hospital_s4` | Roles and access | Rollen und Zugriffe |  |
| `hospital_s5` | Coordinator console | Koordinator-Konsole |  |
| `hospital_s6` | Clinician review workflow | Prüfablauf der behandelnden Person |  |
| `hospital_s7` | Closed-loop medication | Geschlossener Medikationskreislauf |  |
| `hospital_s8` | Integration contract | Integrationsvertrag |  |
| `hospital_s9` | Identity and data flow | Identität und Datenfluss |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Führen Sie etwa eine Woche lang ein Protokoll. Für Muster sind mindestens vier gepaarte Tage nötig. |  |
| `insightsTitle` | What your own numbers say | Was Ihre eigenen Zahlen sagen |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Sprache |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Dieselbe Protokollstruktur, dieselbe Lebensmittelbibliothek und dieselben Regeln wie die Android-Version, vollständig in dieser Seite ausgeführt. Nicht für echte klinische Akten. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Dies ist das vollständige Muster des Projekts, vom Messinstrument auf dem Telefon bis zu einem von einer behandelnden Person überwachten geschlossenen Kreislauf. Jede Funktion ist als Geliefert, Demo oder Roadmap gekennzeichnet, mit einer genannten Voraussetzung. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Ein Protokoll auf dem Telefon schließt einen Kreislauf erst, wenn eine Praxis darauf reagieren kann. Diese Seite ist eine Referenzarchitektur für diese Krankenhaus-Ebene. Es ist ein Design-Blueprint: nichts ist eingesetzt, und kein Krankenhaus wird als Partner genannt. |  |
| `legendComplete` | Complete | Vollständig |  |
| `legend_read` | How to read this map | So lesen Sie diese Übersicht |  |
| `loadSample` | Load 14-day sample | 14-Tage-Beispiel laden |  |
| `mealBreakfast` | Breakfast | Frühstück |  |
| `medsLabel` | Daily medicines (name and dose) | Tägliche Medikamente (Name und Dosis) |  |
| `medsTitle` | Medicines | Medikamente |  |
| `nav_blueprint` | Blueprint | Blaupause |  |
| `nav_clinician` | For clinicians | Für behandelnde Personen |  |
| `nav_demo` | Demo | Demo |  |
| `nav_functions` | Functions | Funktionen |  |
| `nav_hospital` | Hospital | Krankenhaus |  |
| `nav_loop` | The loop | Der Kreislauf |  |
| `nav_security` | Security | Sicherheit |  |
| `nav_what` | What it does | Was es macht |  |
| `noDataToast` | No days recorded yet — add a day first. | Noch keine Tage erfasst – fügen Sie zuerst einen Tag hinzu. |  |
| `noMatches` | No dish matches that. | Kein passendes Gericht gefunden. |  |
| `noMeds` | No medicines recorded in your profile. | Keine Medikamente in Ihrem Profil erfasst. |  |
| `not_map` | What this map is not | Was diese Übersicht nicht ist |  |
| `note` | Anything else? (optional) | Noch etwas? (optional) |  |
| `nothingLogged` | No record for this day. | Kein Eintrag für diesen Tag. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Nur in diesem Browser gespeichert. Kein Konto, kein Upload. |  |
| `planAccept` | Accept | Akzeptieren |  |
| `planAccepted` | Marked accepted in this demo. | In dieser Demo als akzeptiert markiert. |  |
| `planAcceptedState` | accepted | akzeptiert |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Ernährungswerte sind Schätzungen von Haushaltsportionen als Spannen, keine gewogenen Messungen. Musterentwürfe stammen von wenigen gepaarten Tagen einer Person – sie sind Anhaltspunkte für eine behandelnde Person, keine Befunde. |  |
| `planConfidenceTitle` | How sure is this? | Wie sicher ist das? |  |
| `planDecision` | Demo decision | Demo-Entscheidung |  |
| `planDraftLabel` | Draft for review | Entwurf zur Prüfung |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | Die Bearbeitung erfolgt mit der behandelnden Person im Prüfgespräch; diese Demo erfasst nur die Entscheidung. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Erfassen Sie zuerst etwa eine Woche Ernährung und Messwerte. Für einen Entwurf sind mindestens vier gepaarte Tage nötig. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Ein Entwurf zur Prüfung durch eine Ernährungsfachkraft, erstellt ausschließlich aus Ihren erfassten Tagen. Zur Veranschaulichung – keine Beratung. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Geringe Aussagekraft – nur wenige gepaarte Tage. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Nur zur Veranschaulichung. Weder Beratung noch Diagnose. Ändern Sie Ihre Ernährung oder Ihre Medikamente nicht aufgrund dieses Entwurfs – eine qualifizierte behandelnde Person entscheidet. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Erstellt aus {n} Tagen mit sowohl Ernährung als auch einer Messung. |  |
| `planTitle` | Weekly plan draft | Entwurf für den Wochenplan |  |
| `planTypePortion` | Portion | Portion |  |
| `prevDay` | Previous day | Vorheriger Tag |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Wählen Sie im Druckdialog „Als PDF speichern“ für eine einseitige Zusammenfassung. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} vollständige Tage · {logged} Tage erfasst |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} vollständige Tage · {logged} Tag erfasst |  |
| `progressTitle` | Progress | Fortschritt |  |
| `recentDays` | Recent days | Letzte Tage |  |
| `removedToast` | Removed. | Entfernt. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Sieht das Prüfpaket für zugewiesene Teilnehmende, mit Hinweisen und Entwurfspunkten verknüpft mit den Quelltagen. |  |
| `roleCoordinator` | Coordinator | Koordinator |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Sieht die Vollständigkeit der Kohorte, die Prüfliste und den Auditpfad. Kann kein Rezept ändern. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Sieht die Liste der Medikationsabweichungen und die Prüfpunkte verordnet → ausgegeben → eingenommen. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | Die Regel für alle Zeilen: Die Software liest zuerst, ein Mensch entscheidet. |  |
| `sampleTitle` | Sample data | Beispieldaten |  |
| `saveToday` | Save today’s record | Tageseintrag speichern |  |
| `savedToast` | Saved in this browser. | In diesem Browser gespeichert. |  |
| `settingsTitle` | Settings | Einstellungen |  |
| `skip` | Skip to demo | Zur Demo springen |  |
| `skip_content` | Skip to content | Zum Inhalt springen |  |
| `start` | Start recording | Erfassung starten |  |
| `status` | Status | Status |  |
| `status_demo` | Demo | Demo |  |
| `status_roadmap` | Roadmap | Roadmap |  |
| `status_shipped` | Shipped | Geliefert |  |
| `stepProfile` | 1 · Who | 1 · Wer |  |
| `tabToday` | Today | Heute |  |
| `taken` | Taken | Eingenommen |  |
| `thisWeek` | this week | diese Woche |  |
| `title_404` | Page not found — Khai Tracker | Seite nicht gefunden – Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Blueprint für die digitale Transformation – Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker – Browser-Demo |  |
| `title_functions` | Function map — Khai Tracker | Funktionsübersicht – Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Blueprint für den Krankenhauseinsatz – Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker – Ihr Tag, gemessen |  |
| `title_privacy` | Privacy — Khai Tracker | Datenschutz – Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Sicherheit – Khai Tracker |  |
| `vitalsTitle` | Readings | Messwerte |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Ein tägliches Protokoll von Ernährung und Gesundheit, damit Sie und Ihre behandelnde Person sehen, was zwischen den Terminen tatsächlich passiert. Es führt ein Protokoll. Es gibt keine Behandlungsempfehlungen. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Willkommen bei Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Wie war der Tag? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: German (de)
Reviewer is a native speaker: yes / no
Relevant competence (linguistic / clinical / consent): ______________
Date (YYYY-MM-DD): ____________________________

App strings checked:      yes / no
Site strings checked:     yes / no
Consent wording checked:  yes / no
Disclaimer + no-affiliation sentence checked: yes / no
Placeholders, units and dish names checked:   yes / no

Decision: APPROVED FOR REAL USE / NOT APPROVED
Reviewer signature: ___________________________
```

Approval must be recorded in the release ticket before this locale is listed as reviewed. Until then the picker keeps its draft notice.
