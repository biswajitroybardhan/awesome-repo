# French (fr) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: French (Français)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/fr.json` (app and site)
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

## App strings — French

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | À propos |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nConçu par Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, Inde.\n\nPensé pour les téléphones partagés, les réseaux intermittents et les plats indiens variés. D\'abord hors ligne. Aucune analyse de données par des tiers. Aucune publicité. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Responsable produit : Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Ajouter un aliment |  |
| `add_medicines` | Add medicines | Ajouter des médicaments |  |
| `already_saved` | Saved. You can keep editing and save again. | Enregistré. Vous pouvez continuer à modifier et enregistrer à nouveau. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Consultez un professionnel de santé qualifié. |  |
| `assistant_input_ph` | Ask a question | Posez une question |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | Des réponses tirées uniquement de l'aide intégrée à cet outil. Pas d'IA, pas de diagnostic, pas de conseil. |  |
| `assistant_listen` | Listen | Écouter |  |
| `assistant_send` | Send | Envoyer |  |
| `assistant_tab` | Guide | Guide |  |
| `assistant_title` | Khai Guide | Guide Khai |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | Je n'ai pas de réponse à cela. Je réponds uniquement aux questions sur l'utilisation de cet outil. |  |
| `back` | Back | Retour |  |
| `bp_dia` | Diastolic (lower) | Diastolique (basse) |  |
| `bp_sys` | Systolic (upper) | Systolique (haute) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | Annuler |  |
| `carbs` | Carbohydrate | Glucides |  |
| `close` | Close | Fermer |  |
| `completeness` | 21-day completeness | Complétude sur 21 jours |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Jours avec repas, médicaments et une mesure, divisés par 21. Comptés à partir des saisies enregistrées, et non de la mémoire. |  |
| `confirm` | Confirm | Confirmer |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Vous choisissez ce que vous consignez. Vos saisies restent chiffrées sur ce téléphone et ne sont envoyées au serveur de l\'étude Khai que si votre coordinateur vous fournit une adresse de serveur. Vous pouvez tout effacer à tout moment. Aucun nom, aucune adresse, aucun numéro Aadhaar ni aucune liste de contacts n\'est collecté. Vous pouvez vous retirer en effaçant vos données. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | J\'ai lu ou entendu ceci, et j\'accepte de participer. |  |
| `consent_listen` | Listen in Hindi | Écouter en hindi |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Version du consentement 1.0 · enregistrée sur cet appareil avec un horodatage |  |
| `consent_title` | Consent | Consentement |  |
| `day_detail` | Day detail | Détail de la journée |  |
| `days_logged` | Days logged | Jours enregistrés |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker est un outil de suivi, pas un avis médical. Il ne pose jamais de diagnostic et ne modifie jamais d\'ordonnance. |  |
| `done` | Done | Terminé |  |
| `dose_hint` | Dose (optional) | Dose (facultatif) |  |
| `edit_day` | Edit this day | Modifier cette journée |  |
| `edit_profile` | Edit profile | Modifier le profil |  |
| `energy` | Energy | Énergie |  |
| `erase` | Erase my data | Effacer mes données |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Cette action supprime définitivement toutes les saisies, votre profil et vos paramètres de rappel sur ce téléphone. Elle ne peut pas être annulée. |  |
| `erase_yes` | Erase everything | Tout effacer |  |
| `estimated` | estimated | estimé |  |
| `export_backup` | Full backup (JSON) | Sauvegarde complète (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Dossier de santé (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Journal alimentaire (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Partagez uniquement avec les personnes de votre choix. Les fichiers ne quittent le téléphone que lorsque vous touchez Partager. |  |
| `export_metrics` | Daily readings (CSV) | Mesures quotidiennes (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Résumé pour le clinicien (PDF) |  |
| `export_title` | Export and share | Exporter et partager |  |
| `export_working` | Preparing file… | Préparation du fichier… |  |
| `fat` | Fat | Lipides |  |
| `food_items` | %1$d food items | %1$d aliments |  |
| `food_library_title` | Food library | Bibliothèque alimentaire |  |
| `glucose` | Blood sugar | Glycémie |  |
| `glucose_fasting` | Fasting | À jeun |  |
| `glucose_pp` | After food | Après le repas |  |
| `hide_previews` | Hide this app in the recent-apps preview | Masquer cette application dans l\'aperçu des applications récentes |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Une case remplie indique une saisie. Touchez un jour pour le consulter ou le corriger. |  |
| `history_title` | Last 21 days | Les 21 derniers jours |  |
| `insight_descriptive` | description | description |  |
| `insight_early` | early signal | signal précoce |  |
| `insight_moderate` | moderate signal | signal modéré |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Ce sont des observations sur vos propres saisies, ni un diagnostic ni une recommandation de traitement. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Continuez à enregistrer pendant une semaine. Des tendances apparaissent à partir d\'au moins cinq jours avec des mesures. |  |
| `insights_title` | What your own data shows | Ce que montrent vos propres données |  |
| `kcal` | Energy | Énergie |  |
| `language` | Language / भाषा | Langue / भाषा |  |
| `loading` | Loading… | Chargement… |  |
| `meal_breakfast` | Breakfast | Petit-déjeuner |  |
| `meal_dinner` | Dinner | Dîner |  |
| `meal_lunch` | Lunch | Déjeuner |  |
| `meal_snacks` | Snacks & drinks | Collations et boissons |  |
| `meds_changed` | Changed | Modifié |  |
| `meds_empty` | No medicines listed yet. | Aucun médicament listé pour le moment. |  |
| `meds_hint` | Tick what you actually did today. | Cochez ce que vous avez réellement fait aujourd\'hui. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | Aucun médicament n\'est indiqué dans votre profil. Ajoutez-les une fois, puis cochez-les chaque jour. |  |
| `meds_skipped` | Skipped | Non pris |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d médicaments pris sur %2$d |  |
| `meds_taken` | Taken | Pris |  |
| `meds_title` | Medicines | Médicaments |  |
| `mood` | Mood | Humeur |  |
| `no` | No | Non |  |
| `no_food_yet` | Nothing added yet | Rien n\'a encore été ajouté |  |
| `note` | Anything else? (optional) | Autre chose ? (facultatif) |  |
| `nothing_logged` | No entry for this day. | Aucune saisie pour ce jour. |  |
| `notif_channel` | Daily reminder | Rappel quotidien |  |
| `notif_channel_desc` | One daily reminder to record your day. | Un seul rappel par jour pour enregistrer votre journée. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Deux minutes tranquilles : qu\'avez-vous mangé, et qu\'avez-vous mesuré aujourd\'hui ? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Autorisez les notifications pour recevoir le rappel quotidien. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + Ajouter un autre |  |
| `onboard_age` | Age group | Tranche d\'âge |  |
| `onboard_age_ph` | Select | Sélectionner |  |
| `onboard_code` | Participant code | Code de participant |  |
| `onboard_code_ph` | e.g. K01 | ex. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Problèmes de santé (cochez tout ce qui s\'applique) |  |
| `onboard_error_age` | Please choose an age group. | Veuillez choisir une tranche d\'âge. |  |
| `onboard_error_code` | Please enter your participant code. | Veuillez saisir votre code de participant. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Veuillez confirmer votre consentement pour continuer. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Un journal quotidien d\'alimentation et de santé qui vous aide, vous et votre clinicien, à voir ce qui se passe réellement entre les consultations. C\'est un outil de suivi, pas un avis médical. |  |
| `onboard_meds` | Daily medicines (name and dose) | Médicaments quotidiens (nom et dose) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | ex. Metformin 500 mg |  |
| `onboard_start` | Start tracking | Commencer le suivi |  |
| `onboard_title` | Welcome to Khai Tracker | Bienvenue dans Khai Tracker |  |
| `pending` | Pending sync | En attente de synchronisation |  |
| `per_portion` | per portion | par portion |  |
| `pick_day` | Pick a day above. | Choisissez un jour ci-dessus. |  |
| `pin_change` | Change PIN | Modifier le code PIN |  |
| `pin_enter` | Enter your PIN | Saisissez votre code PIN |  |
| `pin_four` | A PIN must be exactly 4 digits. | Un code PIN doit comporter exactement 4 chiffres. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Utile sur un téléphone familial partagé. Un code PIN à 4 chiffres est demandé à l\'ouverture de l\'application, et de nouveau après une minute d\'inactivité. |  |
| `pin_lock` | App lock | Verrouillage de l\'application |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | Choisissez un code PIN à 4 chiffres |  |
| `pin_remove` | Remove PIN | Supprimer le code PIN |  |
| `pin_removed` | PIN removed. | Code PIN supprimé. |  |
| `pin_saved` | PIN saved. | Code PIN enregistré. |  |
| `pin_set` | Set PIN | Définir le code PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | Code PIN incorrect. Réessayez. |  |
| `portion_q` | Portion | Portion |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | Vos saisies sont chiffrées sur cet appareil avec une clé conservée dans le coffre-fort sécurisé de ce téléphone. Rien n\'est envoyé ailleurs, sauf si vous configurez un serveur d\'étude. Aucune analyse de données et aucune publicité. |  |
| `privacy_title` | Privacy | Confidentialité |  |
| `profile` | Profile and medicines | Profil et médicaments |  |
| `progress_title` | Progress | Progrès |  |
| `protein` | Protein | Protéines |  |
| `pulse` | Pulse | Pouls |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Les estimations sont des plages, car un même plat varie selon les foyers. Elles servent à repérer des tendances, non à compter les calories. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | La synthèse vocale en hindi n\'est pas installée sur ce téléphone. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Une notification discrète à l\'heure de votre choix. Pas de culpabilisation liée à la série de jours, pas de publicité. |  |
| `reminder_off` | Reminder off | Rappel désactivé |  |
| `reminder_on` | Reminder on | Rappel activé |  |
| `reminder_time` | Reminder time | Heure du rappel |  |
| `reminders` | Daily reminder | Rappel quotidien |  |
| `remove` | Remove | Supprimer |  |
| `remove_confirm` | Remove this item? | Supprimer cet élément ? |  |
| `save` | Save | Enregistrer |  |
| `save_failed` | Could not save. Please try again. | Impossible d\'enregistrer. Veuillez réessayer. |  |
| `save_today` | Save today | Enregistrer la journée |  |
| `saved` | Saved on this device. Encrypted. | Enregistré sur cet appareil. Chiffré. |  |
| `search_food` | Search a dish in English or Hindi | Rechercher un plat en anglais ou en hindi |  |
| `settings_title` | Settings | Paramètres |  |
| `share` | Share | Partager |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Aucune application sur ce téléphone ne peut recevoir le fichier. Installez une application de messagerie ou de gestion de fichiers, puis réessayez. |  |
| `sleep` | Sleep last night (hours) | Sommeil de la nuit dernière (heures) |  |
| `sodium` | Salt (sodium) | Sel (sodium) |  |
| `streak` | Day streak | Série de jours |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | Cette adresse ne semble pas valide. |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Échec de la synchronisation. Les saisies restent en sécurité sur ce téléphone et une nouvelle tentative sera effectuée. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | Facultatif. Votre coordinateur vous donne une adresse de serveur. Laissez vide pour conserver tout sur ce téléphone uniquement. |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | Utilisez une adresse HTTPS. Les données de santé ne sont jamais envoyées sans chiffrement. |  |
| `sync_never` | Not synced yet. | Pas encore synchronisé. |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | Synchroniser maintenant |  |
| `sync_offline` | No internet right now. Entries queued. | Pas d\'internet pour le moment. Saisies mises en attente. |  |
| `sync_ok` | Synced. All entries are on the server. | Synchronisé. Toutes les saisies sont sur le serveur. |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | Enregistrer l\'adresse |  |
| `sync_title` | Institution sync | Synchronisation de l\'étude |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | Adresse du serveur |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Historique |  |
| `tab_progress` | Progress | Progrès |  |
| `tab_settings` | Settings | Paramètres |  |
| `tab_today` | Today | Aujourd\'hui |  |
| `this_week` | This week | Cette semaine |  |
| `todays_total` | Today\'s estimate | Estimation d\'aujourd\'hui |  |
| `total_carbs` | Carbohydrate | Glucides |  |
| `uncertainty` | Range, not a single number | Une plage, pas un chiffre unique |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Ne remplissez que ce que vous avez mesuré. Une case vide signifie que vous n\'avez pas mesuré, ce qui est aussi une information utile. |  |
| `vitals_title` | Readings | Mesures |  |
| `weight` | Weight (kg) | Poids (kg) |  |
| `wellbeing_title` | How was the day? | Comment s\'est passée la journée ? |  |
| `yes` | Yes | Oui |  |

## Site strings — French

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | À propos de cette démo |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | Télécharger l’APK |  |
| `action_menu` | Open menu | Ouvrir le menu |  |
| `action_theme` | Switch theme | Changer de thème |  |
| `addFood` | Add food | Ajouter un aliment |  |
| `addMed` | + Add another | + Ajouter un autre |  |
| `adherence` | medicines taken | médicaments pris |  |
| `ageLabel` | Age band | Tranche d’âge |  |
| `allFoods` | All | Tous |  |
| `askClinician` | Ask a qualified clinician. | Consultez un professionnel de santé qualifié. |  |
| `assistantInputPh` | Ask a question | Posez une question |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Des réponses tirées uniquement de l'aide intégrée à cet outil. Pas d'IA, pas de diagnostic, pas de conseil. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Changer la langue d'affichage ne modifie que les libellés. Les valeurs enregistrées restent des codes stables : aucun jour n'est jamais réécrit. |  |
| `assistantListen` | Listen | Écouter |  |
| `assistantNav` | Guide | Guide |  |
| `assistantSend` | Send | Envoyer |  |
| `assistantTitle` | Khai Guide | Guide Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Je n'ai pas de réponse à cela. Je réponds uniquement aux questions sur l'utilisation de cet outil. |  |
| `avgBp` | avg BP | tension moyenne |  |
| `back` | Back | Retour |  |
| `bmiNote` | Not a diagnosis. | Pas un diagnostic. |  |
| `bpSys` | Systolic | Systolique |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | À lire comme un schéma, pas comme une annonce : aucun déploiement, pilote, approbation ou partenariat hospitalier n’est revendiqué. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | La ligne honnête : l’application participante et la démo dans le navigateur existent aujourd’hui. Chaque composant hospitalier ici est une proposition de conception. |  |
| `codeLabel` | Participant code | Code de participant |  |
| `codeShort` | Code | Code |  |
| `completeDays` | complete days | jours complets |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Jours avec de la nourriture, un statut des médicaments (si prescrits) et au moins une mesure, divisés par 21. Comptés à partir des saisies enregistrées, et non de la mémoire. |  |
| `conditionsLabel` | Conditions (select all that apply) | Problèmes de santé (sélectionnez toutes les réponses qui s’appliquent) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Vous décidez de ce que vous saisissez. Dans cette démo, tout reste dans le stockage local de ce navigateur : il n’y a aucun serveur et rien n’est envoyé. Dans l’application Android, les saisies sont chiffrées sur le téléphone. Aucun nom, aucune adresse, aucun identifiant officiel ni aucune liste de contacts n’est collecté. Vous pouvez tout effacer à tout moment. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | J’ai lu ceci et je comprends que cette démo de navigateur n’est pas destinée à de vrais dossiers cliniques. |  |
| `consentTitle` | Consent | Consentement |  |
| `dayComplete` | Day complete | Journée complète |  |
| `demoBadge` | Demo | Démo |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Démo uniquement · pas un dispositif médical · pas de vrais dossiers cliniques. |  |
| `downloadToast` | {name} downloaded. | {name} téléchargé. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Traduction provisoire — nécessite une relecture par un locuteur natif avant tout usage clinique. |  |
| `early` | early signal | signal précoce |  |
| `eraseBtn` | Erase my data | Effacer mes données |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Cette action supprime le profil, toutes les journées et tous les paramètres de ce navigateur. Elle ne peut pas être annulée. |  |
| `eraseTitle` | Erase everything | Tout effacer |  |
| `eraseYes` | Erase everything | Tout effacer |  |
| `errCode` | Please enter your participant code. | Veuillez saisir votre code de participant. |  |
| `errConsent` | Consent is required to continue. | Le consentement est nécessaire pour continuer. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Les mesures élevées sont signalées pour en parler. L’application ne pose jamais de diagnostic et ne modifie jamais d’ordonnance. |  |
| `escalateNone` | No threshold flags in the recent record. | Aucun seuil dépassé dans les enregistrements récents. |  |
| `escalateTitle` | Flags for the clinician | Points à signaler au clinicien |  |
| `estTotal` | Today’s estimate | Estimation d’aujourd’hui |  |
| `exportBackup` | Complete backup (JSON) | Sauvegarde complète (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Dossier de santé (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Journal alimentaire (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Mesures quotidiennes (CSV) |  |
| `exportPrint` | Clinician summary (print) | Résumé pour le clinicien (impression) |  |
| `exportsTitle` | Export & share | Exporter et partager |  |
| `eyebrow_capability` | Capability map | Carte des capacités |  |
| `eyebrow_demo` | Browser demo · no install | Démo navigateur · sans installation |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Déploiement hospitalier · schéma de référence |  |
| `fasting` | Fasting | À jeun |  |
| `foodItemsOne` | 1 item | 1 aliment |  |
| `foodLogged` | Food | Alimentation |  |
| `foodPickerTitle` | Choose a dish | Choisir un plat |  |
| `footerNote` | Nothing leaves this browser. | Rien ne quitte ce navigateur. |  |
| `footer_browser_demo` | Browser demo | Démo dans le navigateur |  |
| `footer_contact` | Contact | Contact |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Démo uniquement · pas un dispositif médical · aucune affiliation avec Zhongshan Hospital, HIMSS ou tout système de santé nommé. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Un instrument de mesure pour la période entre les consultations. Conçu à Jamshedpur pour des téléphones partagés, des batteries faibles et des cliniques éloignées. |  |
| `footer_hospital_design` | Hospital design | Conception hospitalière |  |
| `footer_limits` | Limits and answers | Limites et réponses |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Pas un dispositif médical. Aucune affiliation avec Zhongshan Hospital, HIMSS ou tout système de santé nommé. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Rien ne quitte ce navigateur. |  |
| `footer_product` | Product | Produit |  |
| `footer_transparency` | Transparency | Transparence |  |
| `footer_verification` | Verification | Vérification |  |
| `glucose` | Blood sugar | Glycémie |  |
| `head_404` | That page is not here. | Cette page n’est pas ici. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Une boucle fermée, conçue pour les endroits que l’hôpital n’atteint jamais. |  |
| `head_functions` | Every function, honestly labelled. | Chaque fonction, décrite honnêtement. |  |
| `head_hospital` | The hospital is the unit of change. | L’hôpital est l’unité de changement. |  |
| `head_privacy` | Your record stays yours. | Votre enregistrement vous appartient. |  |
| `head_security` | What is protected, and what is not. | Ce qui est protégé, et ce qui ne l’est pas. |  |
| `historyTitle` | The last 21 days | Les 21 derniers jours |  |
| `hospAudit` | Audit trail | Piste d’audit |  |
| `hospCohort` | Cohort | Cohorte |  |
| `hospComplete` | complete | complet |  |
| `hospDisc1` | Prescribed but not dispensed | Prescrit mais non délivré |  |
| `hospDiscrepancies` | Medication discrepancies | Écarts de médication |  |
| `hospOpenHospital` | Open hospital control room | Ouvrir le centre de contrôle hospitalier |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Enregistrez environ une semaine dans l’application participante pour voir un dossier d’examen ici. |  |
| `hospReviewPack` | Today's review pack | Dossier d’examen du jour |  |
| `hospitalBack` | Back to app | Retour à l’application |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Une esquisse de conception de la couche hospitalière construite autour du même enregistrement. La cohorte ci-dessous est synthétique : aucun patient réel, aucun lien avec un hôpital, aucune décision clinique. |  |
| `hospitalTitle` | Hospital control room | Centre de contrôle hospitalier |  |
| `hospital_layer` | Hospital deployment layer | Couche de déploiement hospitalier |  |
| `hospital_s1` | Status of this document | Statut de ce document |  |
| `hospital_s10` | Governance and safety | Gouvernance et sécurité |  |
| `hospital_s11` | Phased rollout | Déploiement par étapes |  |
| `hospital_s12` | What would make this real | Ce qui rendrait cela réel |  |
| `hospital_s2` | Why the hospital, not just the phone | Pourquoi l’hôpital, et pas seulement le téléphone |  |
| `hospital_s3` | Reference topology | Topologie de référence |  |
| `hospital_s4` | Roles and access | Rôles et accès |  |
| `hospital_s5` | Coordinator console | Console du coordinateur |  |
| `hospital_s6` | Clinician review workflow | Flux d’examen du clinicien |  |
| `hospital_s7` | Closed-loop medication | Médication en boucle fermée |  |
| `hospital_s8` | Integration contract | Contrat d’intégration |  |
| `hospital_s9` | Identity and data flow | Identité et flux de données |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Tenez un enregistrement pendant environ une semaine. Il faut au moins quatre jours appariés pour afficher des tendances. |  |
| `insightsTitle` | What your own numbers say | Ce que disent vos propres chiffres |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Langue |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | La même structure d’enregistrement, la même bibliothèque alimentaire et les mêmes règles que la version Android, fonctionnant entièrement dans cette page. Pas destiné à de vrais dossiers cliniques. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Voici le modèle complet suivi par le projet, depuis un instrument de mesure sur téléphone jusqu’à une boucle fermée supervisée par un clinicien. Chaque fonction est marquée comme Livrée, Démo ou Feuille de route, avec une condition préalable précisée. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Un enregistrement sur téléphone ne ferme une boucle que lorsqu’un cabinet peut agir à partir de celui-ci. Cette page est une architecture de référence pour cette couche hospitalière. C’est un schéma de conception : rien n’est déployé et aucun hôpital n’est cité comme partenaire. |  |
| `legendComplete` | Complete | Complet |  |
| `legend_read` | How to read this map | Comment lire cette carte |  |
| `loadSample` | Load 14-day sample | Charger un exemple de 14 jours |  |
| `mealBreakfast` | Breakfast | Petit-déjeuner |  |
| `medsLabel` | Daily medicines (name and dose) | Médicaments quotidiens (nom et dose) |  |
| `medsTitle` | Medicines | Médicaments |  |
| `nav_blueprint` | Blueprint | Schéma directeur |  |
| `nav_clinician` | For clinicians | Pour les cliniciens |  |
| `nav_demo` | Demo | Démo |  |
| `nav_functions` | Functions | Fonctions |  |
| `nav_hospital` | Hospital | Hôpital |  |
| `nav_loop` | The loop | La boucle |  |
| `nav_security` | Security | Sécurité |  |
| `nav_what` | What it does | Ce que fait l’outil |  |
| `noDataToast` | No days recorded yet — add a day first. | Aucune journée enregistrée — ajoutez d’abord une journée. |  |
| `noMatches` | No dish matches that. | Aucun plat ne correspond. |  |
| `noMeds` | No medicines recorded in your profile. | Aucun médicament enregistré dans votre profil. |  |
| `not_map` | What this map is not | Ce que cette carte n’est pas |  |
| `note` | Anything else? (optional) | Autre chose ? (facultatif) |  |
| `nothingLogged` | No record for this day. | Aucun enregistrement pour ce jour. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Conservé uniquement dans ce navigateur. Aucun compte, aucun envoi. |  |
| `planAccept` | Accept | Accepter |  |
| `planAccepted` | Marked accepted in this demo. | Marqué comme accepté dans cette démo. |  |
| `planAcceptedState` | accepted | accepté |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Les valeurs alimentaires sont des estimations de portions domestiques présentées sous forme de plages, et non des mesures pesées. Les brouillons de tendances proviennent de quelques jours appariés chez une seule personne — ce sont des points de discussion pour un clinicien, pas des conclusions. |  |
| `planConfidenceTitle` | How sure is this? | Quelle est la fiabilité ? |  |
| `planDecision` | Demo decision | Décision de la démo |  |
| `planDraftLabel` | Draft for review | Brouillon à examiner |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | La modification se fait avec le clinicien lors de la consultation ; cette démo enregistre uniquement la décision. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Enregistrez d’abord environ une semaine d’alimentation et de mesures. Un brouillon nécessite au moins quatre jours appariés. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Un brouillon à faire examiner par un diététicien, élaboré uniquement à partir de vos journées enregistrées. Illustratif — pas un conseil. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Fiabilité faible — seulement quelques jours appariés. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | À titre illustratif uniquement. Ni conseil, ni diagnostic. Ne modifiez pas votre alimentation ni vos médicaments à cause de ce brouillon — c’est à un clinicien qualifié de décider. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Élaboré à partir de {n} jours contenant à la fois de l’alimentation et une mesure. |  |
| `planTitle` | Weekly plan draft | Brouillon de plan hebdomadaire |  |
| `planTypePortion` | Portion | Portion |  |
| `prevDay` | Previous day | Jour précédent |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Dans la boîte d’impression, choisissez « Enregistrer au format PDF » pour un résumé d’une page. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} jours complets · {logged} jours enregistrés |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} jours complets · {logged} jour enregistré |  |
| `progressTitle` | Progress | Progrès |  |
| `recentDays` | Recent days | Jours récents |  |
| `removedToast` | Removed. | Supprimé. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Voit le dossier d’examen des participants qui lui sont confiés, avec les signaux et les éléments de brouillon liés aux jours sources. |  |
| `roleCoordinator` | Coordinator | Coordinateur |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Voit la complétude de la cohorte, la file d’examen et la piste d’audit. Ne peut pas modifier d’ordonnance. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Voit la file des écarts de médication et les étapes prescrit → délivré → pris. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | La règle commune à toutes les lignes : le logiciel lit en premier, un humain décide. |  |
| `sampleTitle` | Sample data | Données d’exemple |  |
| `saveToday` | Save today’s record | Enregistrer la journée |  |
| `savedToast` | Saved in this browser. | Enregistré dans ce navigateur. |  |
| `settingsTitle` | Settings | Paramètres |  |
| `skip` | Skip to demo | Aller à la démo |  |
| `skip_content` | Skip to content | Aller au contenu |  |
| `start` | Start recording | Commencer l’enregistrement |  |
| `status` | Status | Statut |  |
| `status_demo` | Demo | Démo |  |
| `status_roadmap` | Roadmap | Feuille de route |  |
| `status_shipped` | Shipped | Livrée |  |
| `stepProfile` | 1 · Who | 1 · Qui |  |
| `tabToday` | Today | Aujourd’hui |  |
| `taken` | Taken | Pris |  |
| `thisWeek` | this week | cette semaine |  |
| `title_404` | Page not found — Khai Tracker | Page introuvable — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Schéma de transformation numérique — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — démo navigateur |  |
| `title_functions` | Function map — Khai Tracker | Carte des fonctions — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Schéma de déploiement hospitalier — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — votre journée, mesurée |  |
| `title_privacy` | Privacy — Khai Tracker | Confidentialité — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Sécurité — Khai Tracker |  |
| `vitalsTitle` | Readings | Mesures |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Un enregistrement quotidien de l’alimentation et de la santé, pour que vous et votre clinicien voyiez ce qui se passe réellement entre les consultations. Il conserve des données. Il ne donne pas de conseils de traitement. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Bienvenue dans Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Comment s’est passée la journée ? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: French (fr)
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
