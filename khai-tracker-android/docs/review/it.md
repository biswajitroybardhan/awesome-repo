# Italian (it) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Italian (Italiano)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/it.json` (app and site)
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

## App strings — Italian

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | Informazioni |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nRealizzato da Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nProgettato per telefoni condivisi, reti instabili e piatti indiani variegati. Prima di tutto offline. Nessuna analisi da parte di terzi. Nessuna pubblicità. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Responsabile di prodotto: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Aggiungi un alimento |  |
| `add_medicines` | Add medicines | Aggiungi farmaci |  |
| `already_saved` | Saved. You can keep editing and save again. | Salvato. Può continuare a modificare e salvare di nuovo. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Chiedi a un professionista sanitario qualificato. |  |
| `assistant_input_ph` | Ask a question | Fai una domanda |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Risposte tratte solo dal testo di aiuto di questo strumento. Nessuna IA, nessuna diagnosi, nessun consiglio. |  |
| `assistant_listen` | Listen | Ascolta |  |
| `assistant_send` | Send | Invia |  |
| `assistant_tab` | Guide | Guida |  |
| `assistant_title` | Khai Guide | Guida Khai |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | Non ho una risposta per questo. Rispondo solo alle domande sull'uso di questo strumento. |  |
| `back` | Back | Indietro |  |
| `bp_dia` | Diastolic (lower) | Diastolica (bassa) |  |
| `bp_sys` | Systolic (upper) | Sistolica (alta) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | Annulla |  |
| `carbs` | Carbohydrate | Carboidrati |  |
| `close` | Close | Chiudi |  |
| `completeness` | 21-day completeness | Completezza su 21 giorni |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Giorni con pasti, farmaci e una misura, divisi per 21. Contati dalle voci salvate, non dalla memoria. |  |
| `confirm` | Confirm | Conferma |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Lei sceglie cosa registrare. Le Sue voci restano crittografate su questo telefono e vengono inviate al server dello studio Khai solo se il Suo coordinatore Le fornisce un indirizzo server. Può cancellare tutto in qualsiasi momento. Non vengono raccolti nome, indirizzo, numero Aadhaar o rubrica. Può ritirarsi cancellando i Suoi dati. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Ho letto o ascoltato questo e acconsento a partecipare. |  |
| `consent_listen` | Listen in Hindi | Ascolta in hindi |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Versione del consenso 1.0 · registrata su questo dispositivo con data e ora |  |
| `consent_title` | Consent | Consenso |  |
| `day_detail` | Day detail | Dettagli del giorno |  |
| `days_logged` | Days logged | Giorni registrati |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker è uno strumento di monitoraggio, non un consiglio medico. Non fa mai diagnosi e non modifica mai una prescrizione. |  |
| `done` | Done | Fatto |  |
| `dose_hint` | Dose (optional) | Dose (facoltativa) |  |
| `edit_day` | Edit this day | Modifica questo giorno |  |
| `edit_profile` | Edit profile | Modifica profilo |  |
| `energy` | Energy | Energia |  |
| `erase` | Erase my data | Cancella i miei dati |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Questo elimina definitivamente tutte le voci, il Suo profilo e le impostazioni dei promemoria su questo telefono. Non è possibile annullare. |  |
| `erase_yes` | Erase everything | Cancella tutto |  |
| `estimated` | estimated | stimato |  |
| `export_backup` | Full backup (JSON) | Backup completo (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Cartella sanitaria (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Registro alimentare (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Condivida solo con le persone che sceglie. I file lasciano il telefono solo quando tocca Condividi. |  |
| `export_metrics` | Daily readings (CSV) | Misure giornaliere (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Riepilogo per il clinico (PDF) |  |
| `export_title` | Export and share | Esporta e condividi |  |
| `export_working` | Preparing file… | Preparazione del file… |  |
| `fat` | Fat | Grassi |  |
| `food_items` | %1$d food items | %1$d alimenti |  |
| `food_library_title` | Food library | Libreria alimentare |  |
| `glucose` | Blood sugar | Zucchero nel sangue |  |
| `glucose_fasting` | Fasting | A digiuno |  |
| `glucose_pp` | After food | Dopo mangiato |  |
| `hide_previews` | Hide this app in the recent-apps preview | Nascondi questa app nell\'anteprima delle app recenti |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Un riquadro pieno indica una voce. Tocchi un giorno per rivederlo o correggerlo. |  |
| `history_title` | Last 21 days | Ultimi 21 giorni |  |
| `insight_descriptive` | description | descrizione |  |
| `insight_early` | early signal | segnale precoce |  |
| `insight_moderate` | moderate signal | segnale moderato |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Queste sono osservazioni sulle Sue voci, non una diagnosi né una raccomandazione di trattamento. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Continui a registrare per una settimana. Le tendenze compaiono quando ci sono almeno cinque giorni con misure. |  |
| `insights_title` | What your own data shows | Cosa mostrano i Suoi dati |  |
| `kcal` | Energy | Energia |  |
| `language` | Language / भाषा | Lingua / भाषा |  |
| `loading` | Loading… | Caricamento… |  |
| `meal_breakfast` | Breakfast | Colazione |  |
| `meal_dinner` | Dinner | Cena |  |
| `meal_lunch` | Lunch | Pranzo |  |
| `meal_snacks` | Snacks & drinks | Snack e bevande |  |
| `meds_changed` | Changed | Modificato |  |
| `meds_empty` | No medicines listed yet. | Nessun farmaco elencato per ora. |  |
| `meds_hint` | Tick what you actually did today. | Segni ciò che ha realmente fatto oggi. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | Nel Suo profilo non sono elencati farmaci. Li aggiunga una volta, poi li segni ogni giorno. |  |
| `meds_skipped` | Skipped | Non assunto |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d farmaci assunti su %2$d |  |
| `meds_taken` | Taken | Assunto |  |
| `meds_title` | Medicines | Farmaci |  |
| `mood` | Mood | Umore |  |
| `no` | No | No |  |
| `no_food_yet` | Nothing added yet | Non è stato ancora aggiunto nulla |  |
| `note` | Anything else? (optional) | Altro? (facoltativo) |  |
| `nothing_logged` | No entry for this day. | Nessuna voce per questo giorno. |  |
| `notif_channel` | Daily reminder | Promemoria giornaliero |  |
| `notif_channel_desc` | One daily reminder to record your day. | Un promemoria al giorno per registrare la giornata. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Due minuti di calma: cosa ha mangiato e cosa ha misurato oggi? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Consenta le notifiche per ricevere il promemoria giornaliero. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + Aggiungi un altro |  |
| `onboard_age` | Age group | Fascia d\'età |  |
| `onboard_age_ph` | Select | Seleziona |  |
| `onboard_code` | Participant code | Codice partecipante |  |
| `onboard_code_ph` | e.g. K01 | es. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Condizioni di salute (selezioni tutte quelle che si applicano) |  |
| `onboard_error_age` | Please choose an age group. | Scelga una fascia d\'età. |  |
| `onboard_error_code` | Please enter your participant code. | Inserisca il Suo codice partecipante. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Confermi il consenso per continuare. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Un registro quotidiano di alimentazione e salute che aiuta Lei e il Suo clinico a vedere cosa succede davvero tra le visite. È uno strumento di monitoraggio, non un consiglio medico. |  |
| `onboard_meds` | Daily medicines (name and dose) | Farmaci quotidiani (nome e dose) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | es. Metformin 500 mg |  |
| `onboard_start` | Start tracking | Inizia il monitoraggio |  |
| `onboard_title` | Welcome to Khai Tracker | Benvenuto in Khai Tracker |  |
| `pending` | Pending sync | Sincronizzazione in attesa |  |
| `per_portion` | per portion | per porzione |  |
| `pick_day` | Pick a day above. | Selezioni un giorno qui sopra. |  |
| `pin_change` | Change PIN | Cambia PIN |  |
| `pin_enter` | Enter your PIN | Inserisca il Suo PIN |  |
| `pin_four` | A PIN must be exactly 4 digits. | Il PIN deve essere esattamente di 4 cifre. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Utile su un telefono di famiglia condiviso. Un PIN a 4 cifre viene richiesto all\'apertura dell\'app e di nuovo dopo un minuto di inattività. |  |
| `pin_lock` | App lock | Blocco dell\'app |  |
| `pin_new` | Choose a 4-digit PIN | Scelga un PIN a 4 cifre |  |
| `pin_remove` | Remove PIN | Rimuovi PIN |  |
| `pin_removed` | PIN removed. | PIN rimosso. |  |
| `pin_saved` | PIN saved. | PIN salvato. |  |
| `pin_set` | Set PIN | Imposta PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN errato. Riprovi. |  |
| `portion_q` | Portion | Porzione |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | Le Sue voci sono crittografate su questo dispositivo con una chiave conservata nel deposito sicuro del telefono. Nulla viene inviato da qualche parte, a meno che non configuri un server di studio. Non ci sono analisi dei dati né pubblicità. |  |
| `privacy_title` | Privacy | Privacy |  |
| `profile` | Profile and medicines | Profilo e farmaci |  |
| `progress_title` | Progress | Avanzamento |  |
| `protein` | Protein | Proteine |  |
| `pulse` | Pulse | Polso |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Le stime sono intervalli perché lo stesso piatto varia da casa a casa. Servono a individuare tendenze, non a contare le calorie. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | La sintesi vocale in hindi non è installata su questo telefono. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Una notifica discreta all\'ora scelta. Nessuna pressione per la serie di giorni interrotta, nessuna pubblicità. |  |
| `reminder_off` | Reminder off | Promemoria disattivato |  |
| `reminder_on` | Reminder on | Promemoria attivo |  |
| `reminder_time` | Reminder time | Orario del promemoria |  |
| `reminders` | Daily reminder | Promemoria giornaliero |  |
| `remove` | Remove | Rimuovi |  |
| `remove_confirm` | Remove this item? | Rimuovere questo elemento? |  |
| `save` | Save | Salva |  |
| `save_failed` | Could not save. Please try again. | Impossibile salvare. Riprovi. |  |
| `save_today` | Save today | Salva oggi |  |
| `saved` | Saved on this device. Encrypted. | Salvato su questo dispositivo. Crittografato. |  |
| `search_food` | Search a dish in English or Hindi | Cerca un piatto in inglese o in hindi |  |
| `settings_title` | Settings | Impostazioni |  |
| `share` | Share | Condividi |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Nessuna app su questo telefono può ricevere il file. Installi un\'app di posta o di gestione file e riprovi. |  |
| `sleep` | Sleep last night (hours) | Sonno della scorsa notte (ore) |  |
| `sodium` | Salt (sodium) | Sale (sodio) |  |
| `streak` | Day streak | Giorni consecutivi |  |
| `sync_bad_url` | That does not look like a valid address. | Questo indirizzo non sembra valido. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Sincronizzazione non riuscita. Le voci sono al sicuro su questo telefono e riproveremo. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | Facoltativo. Il Suo coordinatore Le dà un indirizzo server. Lasci vuoto per tenere tutto solo su questo telefono. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | Usi un indirizzo HTTPS. I dati sanitari non vengono mai inviati senza crittografia. |  |
| `sync_never` | Not synced yet. | Non ancora sincronizzato. |  |
| `sync_now` | Sync now | Sincronizza ora |  |
| `sync_offline` | No internet right now. Entries queued. | Nessuna connessione internet in questo momento. Voci in attesa. |  |
| `sync_ok` | Synced. All entries are on the server. | Sincronizzato. Tutte le voci sono sul server. |  |
| `sync_save` | Save address | Salva indirizzo |  |
| `sync_title` | Study sync | Sincronizzazione dello studio |  |
| `sync_url` | Server address | Indirizzo del server |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Cronologia |  |
| `tab_progress` | Progress | Avanzamento |  |
| `tab_settings` | Settings | Impostazioni |  |
| `tab_today` | Today | Oggi |  |
| `this_week` | This week | Questa settimana |  |
| `todays_total` | Today\'s estimate | Stima di oggi |  |
| `total_carbs` | Carbohydrate | Carboidrati |  |
| `uncertainty` | Range, not a single number | Un intervallo, non un numero singolo |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Compili solo ciò che ha misurato. Un campo vuoto significa che non è stato misurato, il che è comunque un\'informazione utile. |  |
| `vitals_title` | Readings | Misure |  |
| `weight` | Weight (kg) | Peso (kg) |  |
| `wellbeing_title` | How was the day? | Com\'è andata la giornata? |  |
| `yes` | Yes | Sì |  |

## Site strings — Italian

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Informazioni su questa demo |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | Scarica APK |  |
| `action_menu` | Open menu | Apri menu |  |
| `action_theme` | Switch theme | Cambia tema |  |
| `addFood` | Add food | Aggiungi un alimento |  |
| `addMed` | + Add another | + Aggiungi un altro |  |
| `adherence` | medicines taken | farmaci assunti |  |
| `ageLabel` | Age band | Fascia d’età |  |
| `allFoods` | All | Tutti |  |
| `askClinician` | Ask a qualified clinician. | Chiedi a un professionista sanitario qualificato. |  |
| `assistantInputPh` | Ask a question | Fai una domanda |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Risposte tratte solo dal testo di aiuto di questo strumento. Nessuna IA, nessuna diagnosi, nessun consiglio. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Cambiare la lingua di visualizzazione modifica solo le etichette. I valori registrati restano codici stabili, quindi nessun giorno viene riscritto. |  |
| `assistantListen` | Listen | Ascolta |  |
| `assistantNav` | Guide | Guida |  |
| `assistantSend` | Send | Invia |  |
| `assistantTitle` | Khai Guide | Guida Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Non ho una risposta per questo. Rispondo solo alle domande sull'uso di questo strumento. |  |
| `avgBp` | avg BP | pressione media |  |
| `back` | Back | Indietro |  |
| `bmiNote` | Not a diagnosis. | Non è una diagnosi. |  |
| `bpSys` | Systolic | Sistolica |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Da leggere come un progetto, non come un annuncio: non si rivendica alcuna implementazione, pilota, approvazione o partnership ospedaliera. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | La linea onesta: l’app del partecipante e la demo nel browser esistono oggi. Ogni componente ospedaliero qui è una proposta progettuale. |  |
| `codeLabel` | Participant code | Codice partecipante |  |
| `codeShort` | Code | Codice |  |
| `completeDays` | complete days | giorni completi |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Giorni con cibo, stato dei farmaci (se prescritti) e almeno una misurazione, divisi per 21. Contati dalle voci salvate, non dalla memoria. |  |
| `conditionsLabel` | Conditions (select all that apply) | Condizioni di salute (selezioni tutte quelle che si applicano) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Lei decide cosa inserire. In questa demo tutto resta nella memoria locale di questo browser: non c’è alcun server e nulla viene caricato. Nell’app Android, le voci sono crittografate sul telefono. Non vengono raccolti nome, indirizzo, documento governativo o rubrica. Può cancellare tutto in qualsiasi momento. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Ho letto questo e capisco che questa demo nel browser non è per dati clinici reali. |  |
| `consentTitle` | Consent | Consenso |  |
| `dayComplete` | Day complete | Giornata completa |  |
| `demoBadge` | Demo | Demo |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Solo demo · non è un dispositivo medico · non è per dati clinici reali. |  |
| `downloadToast` | {name} downloaded. | {name} scaricato. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Traduzione in bozza — richiede la revisione di un madrelingua prima dell’uso clinico. |  |
| `early` | early signal | segnale precoce |  |
| `eraseBtn` | Erase my data | Cancella i miei dati |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Questo rimuove il profilo, tutti i giorni e tutte le impostazioni da questo browser. Non è possibile annullare. |  |
| `eraseTitle` | Erase everything | Cancella tutto |  |
| `eraseYes` | Erase everything | Cancella tutto |  |
| `errCode` | Please enter your participant code. | Inserisca il Suo codice partecipante. |  |
| `errConsent` | Consent is required to continue. | Il consenso è necessario per continuare. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Le misure alte sono segnalate per una conversazione. L’app non fa mai diagnosi e non modifica mai una prescrizione. |  |
| `escalateNone` | No threshold flags in the recent record. | Nessuna soglia superata nei registri recenti. |  |
| `escalateTitle` | Flags for the clinician | Segnalazioni per il clinico |  |
| `estTotal` | Today’s estimate | Stima di oggi |  |
| `exportBackup` | Complete backup (JSON) | Backup completo (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Cartella sanitaria (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Registro alimentare (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Misure giornaliere (CSV) |  |
| `exportPrint` | Clinician summary (print) | Riepilogo per il clinico (stampa) |  |
| `exportsTitle` | Export & share | Esporta e condividi |  |
| `eyebrow_capability` | Capability map | Mappa delle funzionalità |  |
| `eyebrow_demo` | Browser demo · no install | Demo nel browser · senza installazione |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Implementazione ospedaliera · progetto di riferimento |  |
| `fasting` | Fasting | A digiuno |  |
| `foodItemsOne` | 1 item | 1 alimento |  |
| `foodLogged` | Food | Alimentazione |  |
| `foodPickerTitle` | Choose a dish | Scegli un piatto |  |
| `footerNote` | Nothing leaves this browser. | Nulla lascia questo browser. |  |
| `footer_browser_demo` | Browser demo | Demo nel browser |  |
| `footer_contact` | Contact | Contatti |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Solo demo · non è un dispositivo medico · nessuna affiliazione con Zhongshan Hospital, HIMSS o alcun sistema sanitario citato. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Uno strumento di misurazione per lo spazio tra le visite. Realizzato a Jamshedpur per telefoni condivisi, batterie scariche e cliniche lontane. |  |
| `footer_hospital_design` | Hospital design | Progetto ospedaliero |  |
| `footer_limits` | Limits and answers | Limiti e risposte |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Non è un dispositivo medico. Nessuna affiliazione con Zhongshan Hospital, HIMSS o alcun sistema sanitario citato. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Nulla lascia questo browser. |  |
| `footer_product` | Product | Prodotto |  |
| `footer_transparency` | Transparency | Trasparenza |  |
| `footer_verification` | Verification | Verifica |  |
| `glucose` | Blood sugar | Zucchero nel sangue |  |
| `head_404` | That page is not here. | Questa pagina non è qui. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Un ciclo chiuso, costruito per i luoghi che un ospedale non raggiunge mai. |  |
| `head_functions` | Every function, honestly labelled. | Ogni funzione, descritta con onestà. |  |
| `head_hospital` | The hospital is the unit of change. | L’ospedale è l’unità del cambiamento. |  |
| `head_privacy` | Your record stays yours. | Il Suo registro rimane Suo. |  |
| `head_security` | What is protected, and what is not. | Cosa è protetto e cosa non lo è. |  |
| `historyTitle` | The last 21 days | Gli ultimi 21 giorni |  |
| `hospAudit` | Audit trail | Registro delle attività |  |
| `hospCohort` | Cohort | Coorte |  |
| `hospComplete` | complete | completo |  |
| `hospDisc1` | Prescribed but not dispensed | Prescritto ma non dispensato |  |
| `hospDiscrepancies` | Medication discrepancies | Discrepanze farmacologiche |  |
| `hospOpenHospital` | Open hospital control room | Apri il centro di controllo ospedaliero |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Registri circa una settimana nell’app del partecipante per vedere qui un pacchetto di revisione. |  |
| `hospReviewPack` | Today's review pack | Pacchetto di revisione di oggi |  |
| `hospitalBack` | Back to app | Torna all’app |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Uno schizzo progettuale del livello ospedaliero costruito attorno allo stesso registro. La coorte qui sotto è sintetica — nessun paziente reale, nessun legame con un ospedale, nessuna decisione clinica. |  |
| `hospitalTitle` | Hospital control room | Centro di controllo ospedaliero |  |
| `hospital_layer` | Hospital deployment layer | Livello di implementazione ospedaliera |  |
| `hospital_s1` | Status of this document | Stato di questo documento |  |
| `hospital_s10` | Governance and safety | Governance e sicurezza |  |
| `hospital_s11` | Phased rollout | Implementazione a fasi |  |
| `hospital_s12` | What would make this real | Cosa renderebbe tutto questo reale |  |
| `hospital_s2` | Why the hospital, not just the phone | Perché l’ospedale, non solo il telefono |  |
| `hospital_s3` | Reference topology | Topologia di riferimento |  |
| `hospital_s4` | Roles and access | Ruoli e accessi |  |
| `hospital_s5` | Coordinator console | Console del coordinatore |  |
| `hospital_s6` | Clinician review workflow | Flusso di revisione del clinico |  |
| `hospital_s7` | Closed-loop medication | Farmaci in ciclo chiuso |  |
| `hospital_s8` | Integration contract | Contratto di integrazione |  |
| `hospital_s9` | Identity and data flow | Identità e flusso dei dati |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Tenga un registro per circa una settimana. Servono almeno quattro giorni accoppiati perché compaiano le tendenze. |  |
| `insightsTitle` | What your own numbers say | Cosa dicono i Suoi numeri |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Lingua |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | La stessa struttura di registro, la stessa libreria alimentare e le stesse regole della versione Android, funzionanti interamente in questa pagina. Non per dati clinici reali. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Questo è lo schema completo seguito dal progetto, da uno strumento di misurazione sul telefono a un ciclo chiuso supervisionato da un clinico. Ogni funzione è indicata come Rilasciata, Demo o Roadmap, con una condizione precisata. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Un registro sul telefono chiude un ciclo solo quando una clinica può agire in base ad esso. Questa pagina è un’architettura di riferimento per quel livello ospedaliero. È un progetto concettuale: nulla è implementato e nessun ospedale è indicato come partner. |  |
| `legendComplete` | Complete | Completo |  |
| `legend_read` | How to read this map | Come leggere questa mappa |  |
| `loadSample` | Load 14-day sample | Carica esempio di 14 giorni |  |
| `mealBreakfast` | Breakfast | Colazione |  |
| `medsLabel` | Daily medicines (name and dose) | Farmaci quotidiani (nome e dose) |  |
| `medsTitle` | Medicines | Farmaci |  |
| `nav_blueprint` | Blueprint | Progetto |  |
| `nav_clinician` | For clinicians | Per i clinici |  |
| `nav_demo` | Demo | Demo |  |
| `nav_functions` | Functions | Funzioni |  |
| `nav_hospital` | Hospital | Ospedale |  |
| `nav_loop` | The loop | Il ciclo |  |
| `nav_security` | Security | Sicurezza |  |
| `nav_what` | What it does | Cosa fa |  |
| `noDataToast` | No days recorded yet — add a day first. | Nessun giorno registrato — aggiunga prima un giorno. |  |
| `noMatches` | No dish matches that. | Nessun piatto corrisponde. |  |
| `noMeds` | No medicines recorded in your profile. | Nessun farmaco registrato nel Suo profilo. |  |
| `not_map` | What this map is not | Cosa non è questa mappa |  |
| `note` | Anything else? (optional) | Altro? (facoltativo) |  |
| `nothingLogged` | No record for this day. | Nessun registro per questo giorno. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Conservato solo in questo browser. Nessun account, nessun caricamento. |  |
| `planAccept` | Accept | Accetta |  |
| `planAccepted` | Marked accepted in this demo. | Segnato come accettato in questa demo. |  |
| `planAcceptedState` | accepted | accettato |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | I valori alimentari sono stime di porzioni casalinghe mostrate come intervalli, non misure pesate. Le bozze di tendenza derivano da pochi giorni accoppiati di una sola persona — sono spunti per un clinico, non risultati. |  |
| `planConfidenceTitle` | How sure is this? | Quanto è affidabile? |  |
| `planDecision` | Demo decision | Decisione della demo |  |
| `planDraftLabel` | Draft for review | Bozza da esaminare |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | La modifica avviene con il clinico durante l’incontro di revisione; questa demo registra solo la decisione. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Registri prima circa una settimana di cibo e misure. Una bozza richiede almeno quattro giorni accoppiati. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Una bozza da far esaminare a un dietologo, costruita solo dai Suoi giorni registrati. Illustrazione — non un consiglio. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Bassa affidabilità — solo pochi giorni accoppiati. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Solo a scopo illustrativo. Non è un consiglio né una diagnosi. Non modifichi il cibo o i farmaci a causa di questa bozza — decide un clinico qualificato. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Costruita da {n} giorni con sia cibo sia una misurazione. |  |
| `planTitle` | Weekly plan draft | Bozza di piano settimanale |  |
| `planTypePortion` | Portion | Porzione |  |
| `prevDay` | Previous day | Giorno precedente |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Nella finestra di stampa scelga “Salva come PDF” per un riepilogo di una pagina. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} giorni completi · {logged} giorni registrati |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} giorni completi · {logged} giorno registrato |  |
| `progressTitle` | Progress | Avanzamento |  |
| `recentDays` | Recent days | Giorni recenti |  |
| `removedToast` | Removed. | Rimosso. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Vede il pacchetto di revisione per i partecipanti assegnati, con segnalazioni e voci della bozza collegate ai giorni di origine. |  |
| `roleCoordinator` | Coordinator | Coordinatore |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Vede la completezza della coorte, la coda di revisione e la registrazione delle attività. Non può cambiare una prescrizione. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Vede la coda delle discrepanze farmacologiche e i passaggi prescritto → dispensato → assunto. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | La regola comune a tutte le righe: il software legge per primo, decide una persona. |  |
| `sampleTitle` | Sample data | Dati di esempio |  |
| `saveToday` | Save today’s record | Salva il registro di oggi |  |
| `savedToast` | Saved in this browser. | Salvato in questo browser. |  |
| `settingsTitle` | Settings | Impostazioni |  |
| `skip` | Skip to demo | Vai alla demo |  |
| `skip_content` | Skip to content | Vai al contenuto |  |
| `start` | Start recording | Inizia la registrazione |  |
| `status` | Status | Stato |  |
| `status_demo` | Demo | Demo |  |
| `status_roadmap` | Roadmap | Roadmap |  |
| `status_shipped` | Shipped | Rilasciata |  |
| `stepProfile` | 1 · Who | 1 · Chi |  |
| `tabToday` | Today | Oggi |  |
| `taken` | Taken | Assunto |  |
| `thisWeek` | this week | questa settimana |  |
| `title_404` | Page not found — Khai Tracker | Pagina non trovata — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Progetto di trasformazione digitale — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — demo nel browser |  |
| `title_functions` | Function map — Khai Tracker | Mappa delle funzioni — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Progetto di implementazione ospedaliera — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — la Sua giornata, misurata |  |
| `title_privacy` | Privacy — Khai Tracker | Privacy — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Sicurezza — Khai Tracker |  |
| `vitalsTitle` | Readings | Misure |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Un registro quotidiano di alimentazione e salute, per far vedere a Lei e al Suo clinico cosa accade davvero tra le visite. Fa un registro. Non dà consigli di trattamento. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Benvenuto in Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Com’è andata la giornata? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Italian (it)
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
