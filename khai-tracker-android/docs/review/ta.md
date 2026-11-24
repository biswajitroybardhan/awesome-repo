# Tamil (ta) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Tamil (தமிழ்)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/ta.json` (app and site)
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

## App strings — Tamil

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | பற்றி |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nKhai Foods Pvt Ltd, Jamshedpur, Jharkhand, India ஆல் உருவாக்கப்பட்டது.\n\nபகிரப்பட்ட ஃபோன்கள், தடைபடும் வலையமைப்புகள் மற்றும் கலந்த இந்திய உணவுகளுக்காக வடிவமைக்கப்பட்டது. முதலில் ஆஃப்லைன். மூன்றாம் தரப்பு பகுப்பாய்வு இல்லை. விளம்பரம் இல்லை. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | தயாரிப்பு உரிமையாளர்: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + உணவு சேர்க்க |  |
| `add_medicines` | Add medicines | மருந்துகளைச் சேர்க்க |  |
| `already_saved` | Saved. You can keep editing and save again. | சேமிக்கப்பட்டது. நீங்கள் தொடர்ந்து திருத்தி மீண்டும் சேமிக்கலாம். |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | ஒரு தகுதியான மருத்துவரிடம் கேளுங்கள். |  |
| `assistant_input_ph` | Ask a question | ஒரு கேள்வி கேளுங்கள் |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | இந்தக் கருவியின் சொந்த உதவி உரையிலிருந்து எடுக்கப்பட்ட பதில்கள். AI இல்லை, நோயறிதி இல்லை, ஆலோசனை இல்லை. |  |
| `assistant_listen` | Listen | கேளுங்கள் |  |
| `assistant_send` | Send | அனுப்பு |  |
| `assistant_tab` | Guide | வழிகாட்டி |  |
| `assistant_title` | Khai Guide | கை வழிகாட்டி |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | இதற்கு என்னிடம் பதில் இல்லை. இந்தக் கருவியைப் பயன்படுத்துவது பற்றிய கேள்விகளுக்கு மட்டுமே நான் பதிலளிக்கிறேன். |  |
| `back` | Back | பின் செல் |  |
| `bp_dia` | Diastolic (lower) | டயாஸ்டோலிக் (கீழ்) |  |
| `bp_sys` | Systolic (upper) | சிஸ்டோலிக் (மேல்) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | ரத்து செய் |  |
| `carbs` | Carbohydrate | கார்போஹைட்ரேட்டு |  |
| `close` | Close | மூடு |  |
| `completeness` | 21-day completeness | 21 நாள் முழுமை |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | உணவு, மருந்துகள் மற்றும் ஒரு அளவீடு உள்ள நாட்கள் 21 ஆல் வகுக்கப்படுகின்றன. இது சேமிக்கப்பட்ட பதிவுகளிலிருந்து கணக்கிடப்படுகிறது, நினைவிலிருந்து அல்ல. |  |
| `confirm` | Confirm | உறுதிப்படுத்து |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | என்ன பதிவு செய்ய வேண்டும் என்பதை நீங்களே தீர்மானிக்கிறீர்கள். உங்கள் பதிவுகள் இந்த ஃபோனிலேயே மறைகுறியாக்கப்பட்டு வைக்கப்படுகின்றன; உங்கள் ஒருங்கிணைப்பாளர் ஒரு சேவையக முகவரி கொடுத்தால் மட்டுமே அவை Khai ஆய்வு சேவையகத்திற்கு அனுப்பப்படும். நீங்கள் எந்த நேரத்தில் வேண்டுமானாலும் அனைத்தையும் அழிக்கலாம். பெயர், முகவரி, Aadhaar எண் அல்லது தொடர்பு பட்டியல் எதுவும் சேகரிக்கப்படுவதில்லை. உங்கள் தரவை அழிப்பதன் மூலம் நீங்கள் பங்கேற்பிலிருந்து விலகலாம். |  |
| `consent_check` | I have read or heard this, and I agree to take part. | நான் இதைப் படித்துள்ளேன் அல்லது கேட்டுள்ளேன், மேலும் பங்கேற்க ஒப்புக்கொள்கிறேன். |  |
| `consent_listen` | Listen in Hindi | இந்தியில் கேட்கவும் |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | ஒப்புதல் பதிப்பு 1.0 · இந்த சாதனத்தில் நேரத்துடன் பதிவு செய்யப்பட்டது |  |
| `consent_title` | Consent | ஒப்புதல் |  |
| `day_detail` | Day detail | நாள் விவரம் |  |
| `days_logged` | Days logged | பதிவு செய்யப்பட்ட நாட்கள் |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker ஒரு பதிவு கருவி, மருத்துவ ஆலோசனை அல்ல. இது ஒருபோதும் நோய் கண்டறியாது, மருந்துச் சீட்டையும் ஒருபோதும் மாற்றாது. |  |
| `done` | Done | முடிந்தது |  |
| `dose_hint` | Dose (optional) | அளவு (விரும்பினால்) |  |
| `edit_day` | Edit this day | இந்த நாளைத் திருத்த |  |
| `edit_profile` | Edit profile | சுயவிவரத்தைத் திருத்த |  |
| `energy` | Energy | ஆற்றல் |  |
| `erase` | Erase my data | என் தரவை அழி |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | இது இந்த ஃபோனில் உள்ள ஒவ்வொரு பதிவையும், உங்கள் சுயவிவரத்தையும், நினைவூட்டல் அமைப்புகளையும் நிரந்தரமாக அழிக்கும். இதனை மீண்டும் கொண்டு வர முடியாது. |  |
| `erase_yes` | Erase everything | அனைத்தையும் அழி |  |
| `estimated` | estimated | மதிப்பிடப்பட்ட |  |
| `export_backup` | Full backup (JSON) | முழு காப்புப் பிரதி (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | சுகாதாரப் பதிவு (FHIR JSON) |  |
| `export_food` | Food log (CSV) | உணவுப் பதிவு (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | நீங்கள் தேர்ந்தெடுக்கும் நபர்களுடனே பகிரவும். பகிர் என்பதைத் தொட்டப்போதுதான் கோப்புகள் ஃபோனிலிருந்து வெளியேறும். |  |
| `export_metrics` | Daily readings (CSV) | தினசரி அளவீடுகள் (CSV) |  |
| `export_summary` | Clinician summary (PDF) | மருத்துவர் சுருக்கம் (PDF) |  |
| `export_title` | Export and share | ஏற்றுமதி மற்றும் பகிர்வு |  |
| `export_working` | Preparing file… | கோப்பு தயாராகிறது… |  |
| `fat` | Fat | கொழுப்பு |  |
| `food_items` | %1$d food items | %1$d உணவு உருப்படிகள் |  |
| `food_library_title` | Food library | உணவு நூலகம் |  |
| `glucose` | Blood sugar | இரத்த சர்க்கரை |  |
| `glucose_fasting` | Fasting | உபவாச நிலையில் |  |
| `glucose_pp` | After food | உணவிற்குப் பிறகு |  |
| `hide_previews` | Hide this app in the recent-apps preview | அண்மைய பயன்பாடுகள் முன்னோட்டத்தில் இந்தப் பயன்பாட்டை மறை |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | நிரப்பப்பட்ட கட்டம் என்றால் அந்த நாளில் பதிவு உள்ளது. பார்க்க அல்லது திருத்த ஏதேனும் ஒரு நாளைத் தொடவும். |  |
| `history_title` | Last 21 days | கடந்த 21 நாட்கள் |  |
| `insight_descriptive` | description | விளக்கம் |  |
| `insight_early` | early signal | முதல் அறிகுறி |  |
| `insight_moderate` | moderate signal | மிதமான அறிகுறி |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | இவை உங்கள் சொந்தப் பதிவுகளைப் பற்றிய கவனிப்புகள்; நோய் கண்டறிப்பதும் அல்ல, சிகிச்சை பரிந்துரையும் அல்ல. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | ஒரு வாரம் பதிவு செய்யுங்கள். குறைந்தது ஐந்து நாட்களுக்கு அளவீடுகள் இருந்தால் முறைமைகள் தோன்றும். |  |
| `insights_title` | What your own data shows | உங்கள் சொந்தத் தகவல் கூறுவது |  |
| `kcal` | Energy | ஆற்றல் |  |
| `language` | Language / भाषा | மொழி / भाषा |  |
| `loading` | Loading… | ஏற்றப்படுகிறது… |  |
| `meal_breakfast` | Breakfast | காலை உணவு |  |
| `meal_dinner` | Dinner | இரவு உணவு |  |
| `meal_lunch` | Lunch | மதிய உணவு |  |
| `meal_snacks` | Snacks & drinks | தீனி மற்றும் பானங்கள் |  |
| `meds_changed` | Changed | மாற்றியது |  |
| `meds_empty` | No medicines listed yet. | இதுவரை மருந்துகள் பட்டியலிடப்படவில்லை. |  |
| `meds_hint` | Tick what you actually did today. | இன்று நீங்கள் உண்மையில் என்ன செய்தீர்கள் என்பதைக் குறிக்கவும். |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | உங்கள் சுயவிவரத்தில் மருந்துகள் பட்டியலிடப்படவில்லை. ஒருமுறை சேர்த்துவிட்டு, ஒவ்வொரு நாளும் குறித்துக் கொள்ளுங்கள். |  |
| `meds_skipped` | Skipped | தவிர்த்தது |  |
| `meds_summary` | %1$d of %2$d medicines taken | %2$d மருந்துகளில் %1$d எடுக்கப்பட்டது |  |
| `meds_taken` | Taken | எடுத்தது |  |
| `meds_title` | Medicines | மருந்துகள் |  |
| `mood` | Mood | மன நிலை |  |
| `no` | No | இல்லை |  |
| `no_food_yet` | Nothing added yet | இதுவரை எதுவும் சேர்க்கப்படவில்லை |  |
| `note` | Anything else? (optional) | வேறு ஏதும்? (விரும்பினால்) |  |
| `nothing_logged` | No entry for this day. | இந்த நாளில் பதிவு இல்லை. |  |
| `notif_channel` | Daily reminder | தினசரி நினைவூட்டல் |  |
| `notif_channel_desc` | One daily reminder to record your day. | உங்கள் நாளைப் பதிவு செய்ய ஒரு தினசரி நினைவூட்டல். |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | இரண்டு அமைதியான நிமிடங்கள்: இன்று நீங்கள் என்ன சாப்பிட்டீர்கள், என்ன அளந்தீர்கள்? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | தினசரி நினைவூட்டல் உங்களைச் சென்றடைய அறிவிப்புகளை அனுமதிக்கவும். |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + மேலும் ஒன்றைச் சேர்க்க |  |
| `onboard_age` | Age group | வயது குழு |  |
| `onboard_age_ph` | Select | தேர்ந்தெடுக்கவும் |  |
| `onboard_code` | Participant code | பங்கேற்பாளர் குறியீடு |  |
| `onboard_code_ph` | e.g. K01 | எ.கா. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | உடல் நிலைகள் (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்) |  |
| `onboard_error_age` | Please choose an age group. | வயது குழுவைத் தேர்ந்தெடுக்கவும். |  |
| `onboard_error_code` | Please enter your participant code. | உங்கள் பங்கேற்பாளர் குறியீட்டை உள்ளிடவும். |  |
| `onboard_error_consent` | Please confirm consent to continue. | தொடர ஒப்புதலை உறுதிப்படுத்தவும். |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | தினசரி உணவு மற்றும் சுகாதாரப் பதிவு. இது உங்களுக்கும் உங்கள் மருத்துவருக்கும் சந்திப்புகளுக்கு இடையில் உண்மையில் என்ன நடக்கிறது என்று காண உதவுகிறது. இது ஒரு பதிவு கருவி, மருத்துவ ஆலோசனை அல்ல. |  |
| `onboard_meds` | Daily medicines (name and dose) | தினசரி மருந்துகள் (பெயர் மற்றும் அளவு) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | எ.கா. Metformin 500 mg |  |
| `onboard_start` | Start tracking | பதிவு செய்யத் தொடங்குங்கள் |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker-க்கு வரவேற்பு |  |
| `pending` | Pending sync | ஒத்திசைவு நிலுவையில் |  |
| `per_portion` | per portion | ஒரு பங்கிற்கு |  |
| `pick_day` | Pick a day above. | மேலே ஒரு நாளைத் தேர்ந்தெடுக்கவும். |  |
| `pin_change` | Change PIN | PIN மாற்ற |  |
| `pin_enter` | Enter your PIN | உங்கள் PIN ஐ உள்ளிடவும் |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN சரியாக 4 இலக்கங்களைக் கொண்டிருக்க வேண்டும். |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | குடும்பத்தினர் பகிரும் ஃபோனில் பயனுள்ளதாக இருக்கும். பயன்பாடு திறக்கப்படும்போது 4 இலக்க PIN கேட்கப்படும், ஒரு நிமிடம் விலகியிருந்த பிறகும் மீண்டும் கேட்கப்படும். |  |
| `pin_lock` | App lock | பயன்பாட்டுப் பூட்டு |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | 4 இலக்க PIN தேர்ந்தெடுக்கவும் |  |
| `pin_remove` | Remove PIN | PIN அகற்ற |  |
| `pin_removed` | PIN removed. | PIN அகற்றப்பட்டது. |  |
| `pin_saved` | PIN saved. | PIN சேமிக்கப்பட்டது. |  |
| `pin_set` | Set PIN | PIN அமை |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN தவறு. மீண்டும் முயற்சிக்கவும். |  |
| `portion_q` | Portion | அளவு |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | உங்கள் பதிவுகள் இந்தச் சாதனத்தில், இந்த ஃபோனின் பாதுகாப்பான முக்கிய சேமிப்பகத்தில் வைக்கப்பட்டுள்ள ஒரு சாவியால் மறைகுறியாக்கப்பட்டுள்ளன. நீங்கள் ஒரு ஆய்வு சேவையகத்தை அமைக்கும் வரை எதுவும் எங்கும் அனுப்பப்படுவதில்லை. பகுப்பாய்வு இல்லை, விளம்பரம் இல்லை. |  |
| `privacy_title` | Privacy | தனியுரிமை |  |
| `profile` | Profile and medicines | சுயவிவரம் மற்றும் மருந்துகள் |  |
| `progress_title` | Progress | முன்னேற்றம் |  |
| `protein` | Protein | புரதம் |  |
| `pulse` | Pulse | நாடித் துடிப்பு |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | ஒரே உணவு வீட்டுக்கு வீடு மாறுபடுவதால் மதிப்பீடுகள் வரம்புகளாகக் காட்டப்படுகின்றன. இவை முறைமைகளைக் கண்டறிவதற்கே தவிர, கலோரிகளை எண்ணுவதற்கல்ல. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | இந்த ஃபோனில் இந்திப் பேச்சு நிறுவப்படவில்லை. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | நீங்கள் தேர்ந்தெடுத்த நேரத்தில் ஒரு அமைதியான அறிவிப்பு. தொடர் நாட்கள் குறித்து அவமானப்படுத்தல் இல்லை, விளம்பரங்கள் இல்லை. |  |
| `reminder_off` | Reminder off | நினைவூட்டல் நிறுத்தப்பட்டது |  |
| `reminder_on` | Reminder on | நினைவூட்டல் இயக்கத்தில் |  |
| `reminder_time` | Reminder time | நினைவூட்டல் நேரம் |  |
| `reminders` | Daily reminder | தினசரி நினைவூட்டல் |  |
| `remove` | Remove | அகற்ற |  |
| `remove_confirm` | Remove this item? | இந்த உருப்படியை அகற்றவா? |  |
| `save` | Save | சேமி |  |
| `save_failed` | Could not save. Please try again. | சேமிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும். |  |
| `save_today` | Save today | இன்றையதைச் சேமி |  |
| `saved` | Saved on this device. Encrypted. | இந்த சாதனத்தில் சேமிக்கப்பட்டது. மறைகுறியாக்கப்பட்டது. |  |
| `search_food` | Search a dish in English or Hindi | ஆங்கிலம் அல்லது இந்தியில் உணவின் பெயரைத் தேடுங்கள் |  |
| `settings_title` | Settings | அமைப்புகள் |  |
| `share` | Share | பகிர் |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | இந்த ஃபோனில் கோப்பைப் பெறக்கூடிய பயன்பாடு இல்லை. மின்னஞ்சல் அல்லது கோப்பு பயன்பாட்டை நிறுவி மீண்டும் முயற்சிக்கவும். |  |
| `sleep` | Sleep last night (hours) | நேற்று இரவு தூக்கம் (மணிகள்) |  |
| `sodium` | Salt (sodium) | உப்பு (சோடியம்) |  |
| `streak` | Day streak | தொடர் நாட்கள் |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | அது செல்லுபடியாகும் முகவரி போல் தோன்றவில்லை. |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | ஒத்திசைவு தோல்வியடைந்தது. பதிவுகள் இந்த ஃபோனில் பாதுகாப்பாக உள்ளன, மீண்டும் முயற்சிக்கப்படும். |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | விரும்பினால் மட்டும். உங்கள் ஒருங்கிணைப்பாளர் ஒரு சேவையக முகவரி தருவார். அனைத்தையும் இந்த ஃபோனிலேயே வைக்க வெறுமையாக விட்டுவிடவும். |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | HTTPS முகவரியைப் பயன்படுத்தவும். சுகாதாரத் தகவல்கள் ஒருபோதும் மறைகுறியாக்கப்படாமல் அனுப்பப்படுவதில்லை. |  |
| `sync_never` | Not synced yet. | இதுவரை ஒத்திசைக்கப்படவில்லை. |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | இப்போது ஒத்திசை |  |
| `sync_offline` | No internet right now. Entries queued. | தற்போது இணையம் இல்லை. பதிவுகள் வரிசையில் வைக்கப்பட்டுள்ளன. |  |
| `sync_ok` | Synced. All entries are on the server. | ஒத்திசைக்கப்பட்டது. அனைத்து பதிவுகளும் சேவையகத்தில் உள்ளன. |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | முகவரியைச் சேமி |  |
| `sync_title` | Institution sync | ஆய்வு ஒத்திசைவு |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | சேவையக முகவரி |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | வரலாறு |  |
| `tab_progress` | Progress | முன்னேற்றம் |  |
| `tab_settings` | Settings | அமைப்புகள் |  |
| `tab_today` | Today | இன்று |  |
| `this_week` | This week | இந்த வாரம் |  |
| `todays_total` | Today\'s estimate | இன்றைய மதிப்பீடு |  |
| `total_carbs` | Carbohydrate | கார்போஹைட்ரேட்டு |  |
| `uncertainty` | Range, not a single number | ஒரு எண் அல்ல, ஒரு வரம்பு |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | நீங்கள் அளந்ததை மட்டும் நிரப்பவும். வெறுமையாக இருப்பது அளக்கவில்லை என்று பொருள்; அதுவும் பயனுள்ள தகவல்தான். |  |
| `vitals_title` | Readings | அளவீடுகள் |  |
| `weight` | Weight (kg) | எடை (kg) |  |
| `wellbeing_title` | How was the day? | நாள் எப்படி இருந்தது? |  |
| `yes` | Yes | ஆம் |  |

## Site strings — Tamil

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | இந்த டெமோ பற்றி |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK பதிவிறக்கு |  |
| `action_menu` | Open menu | மெனுவைத் திற |  |
| `action_theme` | Switch theme | தீம் மாற்று |  |
| `addFood` | Add food | உணவு சேர்க்க |  |
| `addMed` | + Add another | + மேலும் ஒன்றைச் சேர்க்க |  |
| `adherence` | medicines taken | மருந்துகள் எடுக்கப்பட்டன |  |
| `ageLabel` | Age band | வயது வகை |  |
| `allFoods` | All | அனைத்தும் |  |
| `askClinician` | Ask a qualified clinician. | ஒரு தகுதியான மருத்துவரிடம் கேளுங்கள். |  |
| `assistantInputPh` | Ask a question | ஒரு கேள்வி கேளுங்கள் |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | இந்தக் கருவியின் சொந்த உதவி உரையிலிருந்து எடுக்கப்பட்ட பதில்கள். AI இல்லை, நோயறிதி இல்லை, ஆலோசனை இல்லை. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | காட்சி மொழியை மாற்றினால் லேபிள்கள் மட்டுமே மாறும். பதிவு செய்யப்பட்ட மதிப்புகள் நிலையான குறியீடுகளாக இருப்பதால் ஒரு நாளும் மீண்டும் எழுதப்படவில்லை. |  |
| `assistantListen` | Listen | கேளுங்கள் |  |
| `assistantNav` | Guide | வழிகாட்டி |  |
| `assistantSend` | Send | அனுப்பு |  |
| `assistantTitle` | Khai Guide | கை வழிகாட்டி |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | இதற்கு என்னிடம் பதில் இல்லை. இந்தக் கருவியைப் பயன்படுத்துவது பற்றிய கேள்விகளுக்கு மட்டுமே நான் பதிலளிக்கிறேன். |  |
| `avgBp` | avg BP | சராசரி BP |  |
| `back` | Back | பின் செல் |  |
| `bmiNote` | Not a diagnosis. | நோய் கண்டறிதல் அல்ல. |  |
| `bpSys` | Systolic | சிஸ்டோலிக் |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | இதை ஒரு அறிவிப்பாக அல்ல, வரைபடமாகப் படிக்கவும்: எந்த மருத்துவமனை பயன்பாடு, பைலட், ஆதரவு அல்லது கூட்டாண்மையும் கூறப்படவில்லை. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | நேர்மையான வரி: பங்கேற்பாளர் பயன்பாடும் உலாவி டெமோவும் இன்றே உள்ளன. இங்குள்ள ஒவ்வொரு மருத்துவமனைக் கூறும் ஒரு வடிவமைப்பு முன்மொழிவு. |  |
| `codeLabel` | Participant code | பங்கேற்பாளர் குறியீடு |  |
| `codeShort` | Code | குறியீடு |  |
| `completeDays` | complete days | முழுமையான நாட்கள் |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | உணவு, மருந்து நிலை (பரிந்துரைக்கப்பட்டபோது) மற்றும் குறைந்தது ஒரு அளவீடு உள்ள நாட்கள் 21 ஆல் வகுக்கப்படுகின்றன. சேமிக்கப்பட்ட பதிவுகளிலிருந்து கணக்கிடப்படுகிறது, நினைவிலிருந்து அல்ல. |  |
| `conditionsLabel` | Conditions (select all that apply) | உடல் நிலைகள் (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | என்ன உள்ளிட வேண்டும் என்பதை நீங்களே முடிவு செய்கிறீர்கள். இந்த டெமோவில் அனைத்தும் இந்த உலாவியின் உள்ளூர் சேமிப்பகத்திலேயே உள்ளது — எந்த சேவையகமும் இல்லை, எதுவும் பதிவேற்றப்படுவதுமில்லை. Android பயன்பாட்டில் பதிவுகள் ஃபோனில் மறைகுறியாக்கப்பட்டுள்ளன. பெயர், முகவரி, அரசு அடையாள அட்டை அல்லது தொடர்பு பட்டியல் எதுவும் சேகரிக்கப்படுவதில்லை. நீங்கள் எந்த நேரத்திலும் அனைத்தையும் அழிக்கலாம். |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | இதை நான் படித்துள்ளேன், இந்த உலாவி டெமோ உண்மையான மருத்துவப் பதிவுகளுக்கானது அல்ல என்பதைப் புரிந்துகொண்டுள்ளேன். |  |
| `consentTitle` | Consent | ஒப்புதல் |  |
| `dayComplete` | Day complete | நாள் முடிவடைந்தது |  |
| `demoBadge` | Demo | டெமோ |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | டெமோ மட்டும் · மருத்துவ சாதனம் அல்ல · உண்மையான மருத்துவப் பதிவுகளுக்கல்ல. |  |
| `downloadToast` | {name} downloaded. | {name} பதிவிறக்கப்பட்டது. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | வரைவு மொழிபெயர்ப்பு — மருத்துவப் பயன்பாட்டிற்கு முன் தாய்மொழிப் பேச்சாளர் பரிசீலனை தேவை. |  |
| `early` | early signal | முதல் அறிகுறி |  |
| `eraseBtn` | Erase my data | என் தரவை அழி |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | இது இந்த உலாவியிலிருந்து சுயவிவரம், ஒவ்வொரு நாள் மற்றும் ஒவ்வொரு அமைப்பையும் அகற்றும். இதனை மீண்டும் கொண்டு வர முடியாது. |  |
| `eraseTitle` | Erase everything | அனைத்தையும் அழி |  |
| `eraseYes` | Erase everything | அனைத்தையும் அழி |  |
| `errCode` | Please enter your participant code. | உங்கள் பங்கேற்பாளர் குறியீட்டை உள்ளிடவும். |  |
| `errConsent` | Consent is required to continue. | தொடர ஒப்புதல் தேவை. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | அதிகரித்த அளவீடுகள் ஒரு உரையாடலுக்காகக் குறிக்கப்படுகின்றன. பயன்பாடு ஒருபோதும் நோய் கண்டறியாது அல்லது மருந்துச் சீட்டை மாற்றாது. |  |
| `escalateNone` | No threshold flags in the recent record. | அண்மைய பதிவில் வரம்புக் குறித்தல்கள் இல்லை. |  |
| `escalateTitle` | Flags for the clinician | மருத்துவருக்கான குறித்தல்கள் |  |
| `estTotal` | Today’s estimate | இன்றைய மதிப்பீடு |  |
| `exportBackup` | Complete backup (JSON) | முழு காப்புப் பிரதி (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | சுகாதாரப் பதிவு (FHIR R4) |  |
| `exportFood` | Food log (CSV) | உணவுப் பதிவு (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | தினசரி அளவீடுகள் (CSV) |  |
| `exportPrint` | Clinician summary (print) | மருத்துவர் சுருக்கம் (அச்சு) |  |
| `exportsTitle` | Export & share | ஏற்றுமதி மற்றும் பகிர்வு |  |
| `eyebrow_capability` | Capability map | திறன் வரைபடம் |  |
| `eyebrow_demo` | Browser demo · no install | உலாவி டெமோ · நிறுவல் தேவையில்லை |  |
| `eyebrow_hospital` | Hospital deployment · reference design | மருத்துவமனை பயன்பாடு · குறிப்பு வடிவமைப்பு |  |
| `fasting` | Fasting | உபவாச நிலையில் |  |
| `foodItemsOne` | 1 item | 1 உருப்படி |  |
| `foodLogged` | Food | உணவு |  |
| `foodPickerTitle` | Choose a dish | உணவைத் தேர்ந்தெடுக்கவும் |  |
| `footerNote` | Nothing leaves this browser. | இந்த உலாவியிலிருந்து எதுவும் வெளியேறுவதில்லை. |  |
| `footer_browser_demo` | Browser demo | உலாவி டெமோ |  |
| `footer_contact` | Contact | தொடர்பு |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | டெமோ மட்டும் · மருத்துவ சாதனம் அல்ல · Zhongshan Hospital, HIMSS அல்லது எந்தவொரு குறிப்பிடப்பட்ட சுகாதார அமைப்புடனும் எந்தத் தொடர்பும் இல்லை. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | சந்திப்புகளுக்கு இடையிலான இடத்திற்கான ஒரு அளவீட்டு கருவி. பகிரப்பட்ட ஃபோன்கள், குறைந்த மின்சாரம் மற்றும் தொலைதூர சிகிச்சை மையங்களுக்காக Jamshedpur-இல் உருவாக்கப்பட்டது. |  |
| `footer_hospital_design` | Hospital design | மருத்துவமனை வடிவமைப்பு |  |
| `footer_limits` | Limits and answers | வரம்புகள் மற்றும் பதில்கள் |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | மருத்துவ சாதனம் அல்ல. Zhongshan Hospital, HIMSS அல்லது எந்தவொரு குறிப்பிடப்பட்ட சுகாதார அமைப்புடனும் எந்தத் தொடர்பும் இல்லை. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | இந்த உலாவியிலிருந்து எதுவும் வெளியேறுவதில்லை. |  |
| `footer_product` | Product | தயாரிப்பு |  |
| `footer_transparency` | Transparency | வெளிப்படைத்தன்மை |  |
| `footer_verification` | Verification | சரிபார்ப்பு |  |
| `glucose` | Blood sugar | இரத்த சர்க்கரை |  |
| `head_404` | That page is not here. | அந்தப் பக்கம் இங்கு இல்லை. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | மருத்துவமனை ஒருபோதும் செல்லாத இடங்களுக்காக உருவாக்கப்பட்ட மூடிய சுழற்சி. |  |
| `head_functions` | Every function, honestly labelled. | ஒவ்வொரு செயல்பாடும் நேர்மையாகக் குறிக்கப்பட்டுள்ளது. |  |
| `head_hospital` | The hospital is the unit of change. | மருத்துவமனையே மாற்றத்தின் அலகு. |  |
| `head_privacy` | Your record stays yours. | உங்கள் பதிவு உங்களுடையதே. |  |
| `head_security` | What is protected, and what is not. | எது பாதுகாக்கப்படுகிறது, எது அல்ல. |  |
| `historyTitle` | The last 21 days | கடந்த 21 நாட்கள் |  |
| `hospAudit` | Audit trail | தணிக்கைப் பாதை |  |
| `hospCohort` | Cohort | குழு |  |
| `hospComplete` | complete | முழுமையானது |  |
| `hospDisc1` | Prescribed but not dispensed | பரிந்துரைக்கப்பட்டது ஆனால் வழங்கப்படவில்லை |  |
| `hospDiscrepancies` | Medication discrepancies | மருந்து முரண்பாடுகள் |  |
| `hospOpenHospital` | Open hospital control room | மருத்துவமனை கட்டுப்பாட்டு அறையைத் திற |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | இங்கு பரிசீலனைத் தொகுப்பைக் காண பங்கேற்பாளர் பயன்பாட்டில் சுமார் ஒரு வாரம் பதிவு செய்யவும். |  |
| `hospReviewPack` | Today's review pack | இன்றைய பரிசீலனைத் தொகுப்பு |  |
| `hospitalBack` | Back to app | பயன்பாட்டிற்குத் திரும்பு |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | இதே பதிவைச் சுற்றி உருவாக்கப்பட்ட மருத்துவமனை அடுக்கின் வடிவமைப்பு ஓவியம். கீழுள்ள குழு செயற்கையானது — உண்மையான நோயாளிகள் இல்லை, மருத்துவமனை இணைப்பு இல்லை, மருத்துவ முடிவுகள் இல்லை. |  |
| `hospitalTitle` | Hospital control room | மருத்துவமனை கட்டுப்பாட்டு அறை |  |
| `hospital_layer` | Hospital deployment layer | மருத்துவமனை பயன்பாட்டு அடுக்கு |  |
| `hospital_s1` | Status of this document | இந்த ஆவணத்தின் நிலை |  |
| `hospital_s10` | Governance and safety | நிர்வாகம் மற்றும் பாதுகாப்பு |  |
| `hospital_s11` | Phased rollout | கட்டமாகப் பயன்படுத்துதல் |  |
| `hospital_s12` | What would make this real | இது உண்மையாக என்ன ஆகும் |  |
| `hospital_s2` | Why the hospital, not just the phone | ஃபோன் மட்டுமல்ல, மருத்துவமனை ஏன் |  |
| `hospital_s3` | Reference topology | குறிப்பு அமைப்பு |  |
| `hospital_s4` | Roles and access | பாத்திரங்கள் மற்றும் அணுகல் |  |
| `hospital_s5` | Coordinator console | ஒருங்கிணைப்பாளர் கன்சோல் |  |
| `hospital_s6` | Clinician review workflow | மருத்துவர் பரிசீலனைப் பணிப்பாய்வு |  |
| `hospital_s7` | Closed-loop medication | மூடிய சுழற்சி மருந்து மேலாண்மை |  |
| `hospital_s8` | Integration contract | ஒருங்கிணைப்பு ஒப்பந்தம் |  |
| `hospital_s9` | Identity and data flow | அடையாளம் மற்றும் தரவு ஓட்டம் |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | சுமார் ஒரு வாரம் பதிவு வைக்கவும். ஏதும் காட்ட குறைந்தது நான்கு இணை நாட்கள் தேவை. |  |
| `insightsTitle` | What your own numbers say | உங்கள் சொந்த எண்கள் கூறுவது |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | மொழி |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | அதே பதிவு அமைப்பு, அதே உணவுப் பட்டியல், Android பதிப்பின் அதே விதிகள் — அனைத்தும் இந்தப் பக்கத்திலேயே இயங்குகிறது. உண்மையான மருத்துவப் பதிவுகளுக்கல்ல. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | இது ஃபோன் அடிப்படையிலான அளவீட்டு கருவியிலிருந்து மருத்துவர் மேற்பார்வையிலான மூடிய சுழற்சி வரையிலான திட்டத்தின் முழு மாதிரி. ஒவ்வொரு செயல்பாடும் ஒரு குறிப்பிட்ட முன்நிபந்தனையுடன் வெளியிடப்பட்டது, டெமோ அல்லது திட்டமிடப்பட்டது எனக் குறிக்கப்பட்டுள்ளது. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | ஒரு மருத்துவமனைக்கு அதன் அடிப்படையில் செயல்பட முடிந்தால் மட்டுமே ஃபோன் பதிவு ஒரு சுழற்சியை மூடுகிறது. இந்தப் பக்கம் அந்த மருத்துவமனை அடுக்கிற்கான ஒரு குறிப்பு கட்டமைப்பு. இது ஒரு வடிவமைப்பு வரைபடம்: இங்கு எதுவும் பயன்பாட்டில் இல்லை, எந்த மருத்துவமனையும் கூட்டாளராகப் பெயரிடப்படவில்லை. |  |
| `legendComplete` | Complete | முழுமையானது |  |
| `legend_read` | How to read this map | இந்த வரைபடத்தைப் படிப்பது எப்படி |  |
| `loadSample` | Load 14-day sample | 14 நாள் மாதிரியை ஏற்று |  |
| `mealBreakfast` | Breakfast | காலை உணவு |  |
| `medsLabel` | Daily medicines (name and dose) | தினசரி மருந்துகள் (பெயர் மற்றும் அளவு) |  |
| `medsTitle` | Medicines | மருந்துகள் |  |
| `nav_blueprint` | Blueprint | வரைபடம் |  |
| `nav_clinician` | For clinicians | மருத்துவர்களுக்கு |  |
| `nav_demo` | Demo | டெமோ |  |
| `nav_functions` | Functions | செயல்பாடுகள் |  |
| `nav_hospital` | Hospital | மருத்துவமனை |  |
| `nav_loop` | The loop | சுழற்சி |  |
| `nav_security` | Security | பாதுகாப்பு |  |
| `nav_what` | What it does | இது என்ன செய்கிறது |  |
| `noDataToast` | No days recorded yet — add a day first. | இதுவரை எந்த நாளும் பதிவு செய்யப்படவில்லை — முதலில் ஒரு நாளைச் சேர்க்கவும். |  |
| `noMatches` | No dish matches that. | அந்த உணவு இல்லை. |  |
| `noMeds` | No medicines recorded in your profile. | உங்கள் சுயவிவரத்தில் மருந்துகள் பதிவு செய்யப்படவில்லை. |  |
| `not_map` | What this map is not | இந்த வரைபடம் அல்லாதது |  |
| `note` | Anything else? (optional) | வேறு ஏதும்? (விரும்பினால்) |  |
| `nothingLogged` | No record for this day. | இந்த நாளில் பதிவு இல்லை. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | இந்த உலாவியிலேயே சேமிக்கப்படுகிறது. கணக்கு இல்லை, பதிவேற்றம் இல்லை. |  |
| `planAccept` | Accept | ஏற்றுக்கொள் |  |
| `planAccepted` | Marked accepted in this demo. | இந்த டெமோவில் ஏற்றுக்கொள்ளப்பட்டதாகக் குறிக்கப்பட்டது. |  |
| `planAcceptedState` | accepted | ஏற்றுக்கொள்ளப்பட்டது |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | உணவு மதிப்புகள் வீட்டு அளவு மதிப்பீடுகள்; அவை ஒரு எண் அல்ல, வரம்புகளாகக் காட்டப்படுகின்றன. முறைமை வரைவுகள் ஒரு நபரின் சில இணை நாட்களிலிருந்து வருகின்றன — இவை மருத்துவருக்கான ஊக்கங்கள், கண்டுபிடிப்புகள் அல்ல. |  |
| `planConfidenceTitle` | How sure is this? | இது எவ்வளவு உறுதியானது? |  |
| `planDecision` | Demo decision | டெமோ முடிவு |  |
| `planDraftLabel` | Draft for review | பரிசீலனைக்கான வரைவு |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | திருத்தம் பரிசீலனைக் கூட்டத்தில் மருத்துவருடன் நடக்கிறது; இந்த டெமோ முடிவையே பதிவு செய்கிறது. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | முதலில் சுமார் ஒரு வாரத்திற்கு உணவு மற்றும் அளவீடுகளைப் பதிவு செய்யவும். வரைவிற்கு குறைந்தது நான்கு இணை நாட்கள் தேவை. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | உணவியல் நிபுணர் பரிசீலிக்க ஒரு வரைவு, உங்கள் சொந்தப் பதிவு செய்யப்பட்ட நாட்களிலிருந்தே உருவாக்கப்பட்டது. எடுத்துக்காட்டு மட்டும் — ஆலோசனை அல்ல. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | குறைந்த நம்பகத்தன்மை — சில இணை நாட்கள் மட்டுமே. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | எடுத்துக்காட்டு மட்டும். ஆலோசனை அல்ல, நோய் கண்டறிதல் அல்ல. இந்த வரைவின் காரணமாக உங்கள் உணவையோ மருந்துகளையோ மாற்ற வேண்டாம் — முடிவைத் தகுதியுள்ள மருத்துவர் எடுப்பார். |  |
| `planPaired` | Built from {n} days that have both food and a reading. | {n} நாட்களிலிருந்து உருவாக்கப்பட்டது, அந்த நாட்களில் உணவும் ஒரு அளவீடும் உள்ளன. |  |
| `planTitle` | Weekly plan draft | வாராந்திரத் திட்ட வரைவு |  |
| `planTypePortion` | Portion | அளவு |  |
| `prevDay` | Previous day | முந்தைய நாள் |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | ஒரு பக்கச் சுருக்கத்திற்கு அச்சு உரையாடலில் “Save as PDF” ஐத் தேர்ந்தெடுக்கவும். |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} முழுமையான நாட்கள் · {logged} நாட்கள் பதிவு |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} முழுமையான நாட்கள் · {logged} நாள் பதிவு |  |
| `progressTitle` | Progress | முன்னேற்றம் |  |
| `recentDays` | Recent days | அண்மைய நாட்கள் |  |
| `removedToast` | Removed. | அகற்றப்பட்டது. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | ஒதுக்கப்பட்ட பங்கேற்பாளர்களுக்கான பரிசீலனைத் தொகுப்பைக் காண்கிறார், அதில் குறித்தல்களும் மூல நாட்களுடன் இணைக்கப்பட்ட வரைவு உருப்படிகளும் உள்ளன. |  |
| `roleCoordinator` | Coordinator | ஒருங்கிணைப்பாளர் |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | குழு முழுமை, பரிசீலனை வரிசை மற்றும் தணிக்கைப் பாதையைக் காண்கிறார். மருந்துச் சீட்டை மாற்ற முடியாது. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | மருந்து முரண்பாட்டு வரிசையையும் பரிந்துரைத்தல் → வழங்குதல் → எடுத்தல் சோதனை நிலைகளையும் காண்கிறார். |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | ஒவ்வொரு வரிசையிலும் ஒரே விதி: முதலில் மென்பொருள் படிக்கிறது, முடிவை மனிதர் எடுக்கிறார். |  |
| `sampleTitle` | Sample data | மாதிரித் தரவு |  |
| `saveToday` | Save today’s record | இன்றைய பதிவைச் சேமி |  |
| `savedToast` | Saved in this browser. | இந்த உலாவியில் சேமிக்கப்பட்டது. |  |
| `settingsTitle` | Settings | அமைப்புகள் |  |
| `skip` | Skip to demo | டெமோவுக்குச் செல் |  |
| `skip_content` | Skip to content | உள்ளடக்கத்திற்குச் செல் |  |
| `start` | Start recording | பதிவு செய்யத் தொடங்குங்கள் |  |
| `status` | Status | நிலை |  |
| `status_demo` | Demo | டெமோ |  |
| `status_roadmap` | Roadmap | திட்டமிடப்பட்டது |  |
| `status_shipped` | Shipped | வெளியிடப்பட்டது |  |
| `stepProfile` | 1 · Who | 1 · யார் |  |
| `tabToday` | Today | இன்று |  |
| `taken` | Taken | எடுத்தது |  |
| `thisWeek` | this week | இந்த வாரம் |  |
| `title_404` | Page not found — Khai Tracker | பக்கம் காணப்படவில்லை — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | டிஜிட்டல்-மாற்ற வரைபடம் — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — உலாவி டெமோ |  |
| `title_functions` | Function map — Khai Tracker | செயல்பாட்டு வரைபடம் — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | மருத்துவமனை பயன்பாட்டு வரைபடம் — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — உங்கள் நாள், அளவிடப்பட்டது |  |
| `title_privacy` | Privacy — Khai Tracker | தனியுரிமை — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | பாதுகாப்பு — Khai Tracker |  |
| `vitalsTitle` | Readings | அளவீடுகள் |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | உணவு மற்றும் சுகாதாரத்தின் தினசரி பதிவு, இதன் மூலம் உங்களுக்கும் உங்கள் மருத்துவருக்கும் சந்திப்புகளுக்கு இடையில் உண்மையில் என்ன நடக்கிறது என்று தெரியும். இது பதிவு வைக்கிறது. இது சிகிச்சை ஆலோசனை தருவதில்லை. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker-க்கு வரவேற்பு |  |
| `wellbeingTitle` | How was the day? | நாள் எப்படி இருந்தது? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Tamil (ta)
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
