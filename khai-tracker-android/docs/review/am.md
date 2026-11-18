# Amharic (am) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Amharic (አማርኛ)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/am.json` (app and site)
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

## App strings — Amharic

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | ስለ |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nየተገነባው በKhai Foods Pvt Ltd, Jamshedpur, Jharkhand, India።\n\nለሚጋሩ ስልኮች፣ ለተለዋዋጭ አውታረ መረቦችና ለተለያዩ የሕንድ ምግቦች የተነደፈ። መጀመሪያ ከመስመር ውጭ። ምንም የሶስተኛ ወገን ትንታኔ የለም። ምንም ማስታወቂያ የለም። |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | የምርት ባለቤት፡ Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + ምግብ ይጨምሩ |  |
| `add_medicines` | Add medicines | መድሃኒቶችን ይጨምሩ |  |
| `already_saved` | Saved. You can keep editing and save again. | ተቀምጧል። ማርትዕ መቀጠል እና እንደገና ማስቀመጥ ትችላለህ። |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | ብቁ ከሆነ የጤና ባለሙያ ጠይቅ። |  |
| `assistant_input_ph` | Ask a question | ጥያቄ ጠይቅ |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | መልሶች የሚገኙት ከዚህ መሳሪያ የራሱ የእርዳታ ጽሑፍ ብቻ ነው። AI የለም፣ ምርመራ የለም፣ ምክር የለም። |  |
| `assistant_listen` | Listen | ያዳምጡ |  |
| `assistant_send` | Send | ላክ |  |
| `assistant_tab` | Guide | መመሪያ |  |
| `assistant_title` | Khai Guide | የካይ መመሪያ |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | ለዚህ መልስ የለኝም። ስለዚህ መሳሪያ አጠቃቀም ብቻ ነው የምመልሰው። |  |
| `back` | Back | ተመለስ |  |
| `bp_dia` | Diastolic (lower) | ዲያስቶሊክ (ዝቅተኛ) |  |
| `bp_sys` | Systolic (upper) | ሲስቶሊክ (ከላይ) |  |
| `brand` | Khai | ካሂ |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | ሰርዝ |  |
| `carbs` | Carbohydrate | ካርቦሃይድሬት |  |
| `close` | Close | ገጠመ |  |
| `completeness` | 21-day completeness | የ 21 ቀን ሙሉነት |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | ቀናት ከምግብ ፣መድሀኒት እና ንባብ ጋር ፣በ21 የተከፈለ።ከተቀመጡት ግቤቶች የተቆጠሩ እንጂ ከማስታወስ አይደለም። |  |
| `confirm` | Confirm | አረጋግጥ |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | የምትቀዳውን ትመርጣለህ። የእርስዎ ግቤቶች በዚህ ስልክ ላይ እንደተመሰጠሩ ይቆያሉ፣ እና አስተባባሪዎ የአገልጋይ አድራሻ ከሰጠዎት ብቻ ወደ Khai የጥናት አገልጋይ ይላካሉ። በማንኛውም ጊዜ ሁሉንም ነገር ማጥፋት ይችላሉ. ምንም ስም፣ አድራሻ፣ Aadhaar ቁጥር ወይም የእውቂያ ዝርዝር አልተሰበሰበም። ውሂብዎን በማጥፋት ማውጣት ይችላሉ። |  |
| `consent_check` | I have read or heard this, and I agree to take part. | ይህን አንብቤ ወይም ሰምቻለሁ፣ እናም ለመሳተፍ ተስማምቻለሁ። |  |
| `consent_listen` | Listen in Hindi | በህንድኛ ያዳምጡ |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | የፍቃድ ሥሪት 1.0 · በዚህ መሣሪያ ላይ በጊዜ ማህተም ተመዝግቧል |  |
| `consent_title` | Consent | ፍቃድ |  |
| `day_detail` | Day detail | የቀን ዝርዝር |  |
| `days_logged` | Days logged | የተመዘገቡ ቀናት |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker የመከታተያ መሣሪያ ነው፣ የሕክምና ምክር አይደለም። በፍጹም ምርመራ አያደርግም፣ የመድኃኒት ማዘዣንም አይቀይርም። |  |
| `done` | Done | ተከናውኗል |  |
| `dose_hint` | Dose (optional) | መጠን (አማራጭ) |  |
| `edit_day` | Edit this day | ይህን ቀን አስተካክል። |  |
| `edit_profile` | Edit profile | መገለጫ አርትዕ |  |
| `energy` | Energy | ጉልበት |  |
| `erase` | Erase my data | ውሂቤን አጥፋ |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | ይህ በዚህ ስልክ ላይ ያለውን እያንዳንዱን ግቤት፣ መገለጫዎን እና የአስታዋሽ ቅንብሮችን በቋሚነት ይሰርዛል። ይህ ሊቀለበስ አይችልም። |  |
| `erase_yes` | Erase everything | ሁሉንም ነገር አጥፋ |  |
| `estimated` | estimated | ግምት |  |
| `export_backup` | Full backup (JSON) | ሙሉ ምትኬ (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | የጤና መዝገብ (FHIR JSON) |  |
| `export_food` | Food log (CSV) | የምግብ መዝገብ (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | ከምትመርጧቸው ሰዎች ጋር ብቻ አጋራ። ማጋራትን ሲነኩ ፋይሎች ስልኩን የሚለቁት። |  |
| `export_metrics` | Daily readings (CSV) | ዕለታዊ ንባቦች (CSV) |  |
| `export_summary` | Clinician summary (PDF) | የክሊኒካዊ ማጠቃለያ (PDF) |  |
| `export_title` | Export and share | ወደ ውጪ ላክ እና አጋራ |  |
| `export_working` | Preparing file… | ፋይል በማዘጋጀት ላይ… |  |
| `fat` | Fat | ስብ |  |
| `food_items` | %1$d food items | %1$d የምግብ እቃዎች |  |
| `food_library_title` | Food library | የምግብ ቤተ-መጽሐፍት |  |
| `glucose` | Blood sugar | የደም ስኳር |  |
| `glucose_fasting` | Fasting | መጾም |  |
| `glucose_pp` | After food | ከምግብ በኋላ |  |
| `hide_previews` | Hide this app in the recent-apps preview | ይህን መተግበሪያ በቅርብ ጊዜ-መተግበሪያዎች ቅድመ-እይታ ውስጥ ደብቅ |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | የተሞላ ካሬ መግቢያ አለው። እሱን ለመገምገም ወይም ለማስተካከል በማንኛውም ቀን ይንኩ። |  |
| `history_title` | Last 21 days | ያለፉት 21 ቀናት |  |
| `insight_descriptive` | description | መግለጫ |  |
| `insight_early` | early signal | ቀደምት ምልክት |  |
| `insight_moderate` | moderate signal | መጠነኛ ምልክት |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | እነዚህ ስለራስዎ ግቤቶች ምልከታዎች እንጂ የምርመራ እና የሕክምና ምክሮች አይደሉም። |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | ለአንድ ሳምንት ያህል መዝገቡን ይቀጥሉ። ቢያንስ አምስት ቀናት ከንባብ ጋር አንድ ጊዜ አብነቶች ይታያሉ። |  |
| `insights_title` | What your own data shows | የእራስዎ መረጃ የሚያሳየው |  |
| `kcal` | Energy | ጉልበት |  |
| `language` | Language / भाषा | ቋንቋ / भाषा |  |
| `loading` | Loading… | በመጫን ላይ… |  |
| `meal_breakfast` | Breakfast | ቁርስ |  |
| `meal_dinner` | Dinner | እራት |  |
| `meal_lunch` | Lunch | ምሳ |  |
| `meal_snacks` | Snacks & drinks | መክሰስ እና መጠጦች |  |
| `meds_changed` | Changed | ተለውጧል |  |
| `meds_empty` | No medicines listed yet. | እስካሁን የተዘረዘሩ መድኃኒቶች የሉም። |  |
| `meds_hint` | Tick what you actually did today. | በትክክል ዛሬ ያደረጉትን ምልክት ያድርጉ። |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | በመገለጫዎ ውስጥ ምንም መድሃኒቶች አልተዘረዘሩም። አንድ ጊዜ ያክሏቸው እና ከዚያ በየቀኑ ምልክት ያድርጉባቸው። |  |
| `meds_skipped` | Skipped | ተዘለለ |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d ከ%2$d መድኃኒቶች የተወሰዱ |  |
| `meds_taken` | Taken | የተወሰደ |  |
| `meds_title` | Medicines | መድሃኒቶች |  |
| `mood` | Mood | ስሜት |  |
| `no` | No | አይ |  |
| `no_food_yet` | Nothing added yet | እስካሁን ምንም አልተጨመረም። |  |
| `note` | Anything else? (optional) | ሌላ ነገር አለ? (አማራጭ) |  |
| `nothing_logged` | No entry for this day. | ለዚህ ቀን ምንም መግቢያ የለም። |  |
| `notif_channel` | Daily reminder | ዕለታዊ አስታዋሽ |  |
| `notif_channel_desc` | One daily reminder to record your day. | ቀንዎን ለመመዝገብ አንድ ዕለታዊ ማስታወሻ። |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | ሁለት ጸጥ ያሉ ደቂቃዎች: ምን በልተሃል, እና ዛሬ ምን ለካህ? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | ዕለታዊ አስታዋሽ እርስዎን ማግኘት እንዲችል ማሳወቂያዎችን ይፍቀዱ። |  |
| `ok` | OK | እሺ |  |
| `onboard_add_med` | + Add another | + ሌላ ጨምር |  |
| `onboard_age` | Age group | የዕድሜ ቡድን |  |
| `onboard_age_ph` | Select | ይምረጡ |  |
| `onboard_code` | Participant code | የተሳታፊ ኮድ |  |
| `onboard_code_ph` | e.g. K01 | ለምሳሌ. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | ሁኔታዎች (የሚመለከተውን ሁሉ ላይ ምልክት ያድርጉ) |  |
| `onboard_error_age` | Please choose an age group. | እባክዎ የዕድሜ ቡድን ይምረጡ። |  |
| `onboard_error_code` | Please enter your participant code. | እባክዎ የተሳታፊ ኮድዎን ያስገቡ። |  |
| `onboard_error_consent` | Please confirm consent to continue. | እባክዎ ለመቀጠል ፈቃድ ያረጋግጡ። |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | እርስዎ እና የህክምና ባለሙያዎ በጉብኝቶች መካከል ምን እየተከሰተ እንዳለ እንዲመለከቱ የሚያግዝ ዕለታዊ የምግብ እና የጤና መዝገብ። መከታተያ መሳሪያ እንጂ የህክምና ምክር አይደለም። |  |
| `onboard_meds` | Daily medicines (name and dose) | ዕለታዊ መድሃኒቶች (ስም እና መጠን) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | ለምሳሌ. Metformin 500 mg |  |
| `onboard_start` | Start tracking | መከታተል ጀምር |  |
| `onboard_title` | Welcome to Khai Tracker | ወደ Khai Tracker እንኳን በደህና መጡ |  |
| `pending` | Pending sync | ማመሳሰልን በመጠባበቅ ላይ |  |
| `per_portion` | per portion | በክፍል |  |
| `pick_day` | Pick a day above. | አንድ ቀን ከላይ ይምረጡ። |  |
| `pin_change` | Change PIN | PIN ቀይር |  |
| `pin_enter` | Enter your PIN | የእርስዎን PIN ያስገቡ |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN በትክክል 4 አሃዞች መሆን አለበት። |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | በጋራ የቤተሰብ ስልክ ላይ ጠቃሚ። ባለ 4 አሃዝ PIN መተግበሪያው ሲከፈት እና ከአንድ ደቂቃ በኋላ እንደገና ይጠየቃል። |  |
| `pin_lock` | App lock | የመተግበሪያ መቆለፊያ |  |
| `pin_new` | Choose a 4-digit PIN | ባለ 4 አሃዝ PIN ይምረጡ |  |
| `pin_remove` | Remove PIN | PINን ያስወግዱ |  |
| `pin_removed` | PIN removed. | PIN ተወግዷል። |  |
| `pin_saved` | PIN saved. | PIN ተቀምጧል። |  |
| `pin_set` | Set PIN | PIN አዘጋጅ |  |
| `pin_wrong` | Wrong PIN. Try again. | የተሳሳተ PIN እንደገና ይሞክሩ። |  |
| `portion_q` | Portion | ክፍል |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | የእርስዎ ግቤቶች በዚህ ስልክ ደህንነቱ በተጠበቀ ቁልፍ ማከማቻ ውስጥ በተያዘ ቁልፍ በዚህ መሳሪያ ላይ የተመሰጠሩ ናቸው። የጥናት አገልጋይ እስካላዘጋጁ ድረስ ምንም ነገር ወደ የትኛውም ቦታ አይላክም። ምንም ትንታኔዎች እና ማስታወቂያ የለም. |  |
| `privacy_title` | Privacy | ግላዊነት |  |
| `profile` | Profile and medicines | መገለጫ እና መድሃኒቶች |  |
| `progress_title` | Progress | እድገት |  |
| `protein` | Protein | ፕሮቲን |  |
| `pulse` | Pulse | የልብ ምት |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | ተመሳሳይ ምግብ በቤተሰብ ስለሚለያይ ግምቶች ክልሎች ናቸው። እነሱ ለስርዓተ-ጥለት ፍለጋ ናቸው, ካሎሪዎችን አይቆጠሩም. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | የሂንዲ ንግግር በዚህ ስልክ ላይ አልተጫነም። |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | በመረጡት ጊዜ ጸጥ ያለ ማሳወቂያ። ምንም ተከታታይ ውርደት የለም፣ ምንም ማስታወቂያ የለም። |  |
| `reminder_off` | Reminder off | አስታዋሽ ጠፍቷል |  |
| `reminder_on` | Reminder on | አስታዋሽ በርቷል። |  |
| `reminder_time` | Reminder time | የማስታወሻ ጊዜ |  |
| `reminders` | Daily reminder | ዕለታዊ አስታዋሽ |  |
| `remove` | Remove | አስወግድ |  |
| `remove_confirm` | Remove this item? | ይህ ንጥል ይወገድ? |  |
| `save` | Save | አስቀምጥ |  |
| `save_failed` | Could not save. Please try again. | ማስቀመጥ አልተቻለም። እባክዎ እንደገና ይሞክሩ። |  |
| `save_today` | Save today | ዛሬ አስቀምጥ |  |
| `saved` | Saved on this device. Encrypted. | በዚህ መሣሪያ ላይ ተቀምጧል። የተመሰጠረ |  |
| `search_food` | Search a dish in English or Hindi | በእንግሊዝኛ ወይም በሂንዲ ምግብ ይፈልጉ |  |
| `settings_title` | Settings | ቅንብሮች |  |
| `share` | Share | አጋራ |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | በዚህ ስልክ ላይ ምንም መተግበሪያ ፋይሉን ሊቀበል አይችልም። ደብዳቤ ወይም ፋይል መተግበሪያ ጫን እና እንደገና ሞክር። |  |
| `sleep` | Sleep last night (hours) | ትናንት ማታ (ሰዓታት) ተኛ |  |
| `sodium` | Salt (sodium) | ጨው (ሶዲየም) |  |
| `streak` | Day streak | የቀን ትርኢት |  |
| `sync_bad_url` | That does not look like a valid address. | ያ ትክክለኛ አድራሻ አይመስልም። |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | ማመሳሰል አልተሳካም። በዚህ ስልክ ላይ መግባቶች ደህና ናቸው እና እንደገና ይሞክራሉ። |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | አማራጭ። አስተባባሪዎ የአገልጋይ አድራሻ ይሰጥዎታል። በዚህ ስልክ ላይ ብቻ ሁሉንም ነገር ለማስቀመጥ ባዶ ይተውት። |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | HTTPS አድራሻ ተጠቀም። የጤና መረጃ መቼም ሳይመሰጠር አይላክም። |  |
| `sync_never` | Not synced yet. | እስካሁን አልተሰመረም። |  |
| `sync_now` | Sync now | አሁን አስምር |  |
| `sync_offline` | No internet right now. Entries queued. | አሁን ምንም ኢንተርኔት የለም። ግቤቶች ተሰልፈዋል። |  |
| `sync_ok` | Synced. All entries are on the server. | ተመሳስሏል ሁሉም ግቤቶች በአገልጋዩ ላይ ናቸው። |  |
| `sync_save` | Save address | አድራሻ አስቀምጥ |  |
| `sync_title` | Study sync | የጥናት ማመሳሰል |  |
| `sync_url` | Server address | የአገልጋይ አድራሻ |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | ታሪክ |  |
| `tab_progress` | Progress | እድገት |  |
| `tab_settings` | Settings | ቅንብሮች |  |
| `tab_today` | Today | ዛሬ |  |
| `this_week` | This week | በዚህ ሳምንት |  |
| `todays_total` | Today\'s estimate | የዛሬ ግምት |  |
| `total_carbs` | Carbohydrate | ካርቦሃይድሬት |  |
| `uncertainty` | Range, not a single number | ክልል፣ አንድ ቁጥር አይደለም። |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | የለካከውን ብቻ ሙላ። ባዶ ማለት አልተለካም ማለት ነው ይህ ጠቃሚ መረጃም ነው። |  |
| `vitals_title` | Readings | ንባብ |  |
| `weight` | Weight (kg) | ክብደት (kg) |  |
| `wellbeing_title` | How was the day? | ቀኑ እንዴት ነበር? |  |
| `yes` | Yes | አዎ |  |

## Site strings — Amharic

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | ስለዚህ ማሳያ |  |
| `action_apk` | APK | ኤፒኬ |  |
| `action_download` | Download APK | APK አውርድ |  |
| `action_menu` | Open menu | ምናሌን ክፈት |  |
| `action_theme` | Switch theme | ገጽታ ቀይር |  |
| `addFood` | Add food | ምግብ ይጨምሩ |  |
| `addMed` | + Add another | + ሌላ ጨምር |  |
| `adherence` | medicines taken | የሚወሰዱ መድኃኒቶች |  |
| `ageLabel` | Age band | የዕድሜ ባንድ |  |
| `allFoods` | All | ሁሉም |  |
| `askClinician` | Ask a qualified clinician. | ብቁ ከሆነ የጤና ባለሙያ ጠይቅ። |  |
| `assistantInputPh` | Ask a question | ጥያቄ ጠይቅ |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | መልሶች የሚገኙት ከዚህ መሳሪያ የራሱ የእርዳታ ጽሑፍ ብቻ ነው። AI የለም፣ ምርመራ የለም፣ ምክር የለም። |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | የማሳያ ቋንቋ መቀየር መለያዎችን ብቻ ነው የሚቀይረው። የተመዘገቡ እሴቶች የተረጋጉ ኮዶች ሆነው ይቀራሉ፣ ስለዚህ ምንም ቀን እንደገና አይጻፍም። |  |
| `assistantListen` | Listen | ያዳምጡ |  |
| `assistantNav` | Guide | መመሪያ |  |
| `assistantSend` | Send | ላክ |  |
| `assistantTitle` | Khai Guide | የካይ መመሪያ |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | ለዚህ መልስ የለኝም። ስለዚህ መሳሪያ አጠቃቀም ብቻ ነው የምመልሰው። |  |
| `avgBp` | avg BP | አማካይ BP |  |
| `back` | Back | ተመለስ |  |
| `bmiNote` | Not a diagnosis. | ምርመራ አይደለም. |  |
| `bpSys` | Systolic | ሲስቶሊክ |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | ይህንን እንደ ማስታወቂያ ሳይሆን እንደ ሰማያዊ ንድፍ ያንብቡ፡ የሆስፒታል ማሰማራት፣ ፓይለት፣ ድጋፍ ወይም አጋርነት የይገባኛል ጥያቄ የለም። |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | እውነተኛው መስመር፡ የተሳታፊው መተግበሪያ እና የአሳሽ ማሳያው ዛሬ አሉ። እዚህ ያለው እያንዳንዱ የሆስፒታል አካል የንድፍ ፕሮፖዛል ነው። |  |
| `codeLabel` | Participant code | የተሳታፊ ኮድ |  |
| `codeShort` | Code | ኮድ |  |
| `completeDays` | complete days | ሙሉ ቀናት |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | ቀናት ምግብ፣ የመድሃኒት ሁኔታ (ሲታዘዙ) እና ቢያንስ አንድ ልኬት፣ በ21 ሲካፈል። ከተቀመጡ ምዝግቦች የተቆጠሩ እንጂ የማስታወስ ችሎታ አይደለም። |  |
| `conditionsLabel` | Conditions (select all that apply) | ሁኔታዎች (የሚመለከተውን ሁሉ ይምረጡ) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | እርስዎ ምን እንደሚገቡ ይወስናሉ። በዚህ ማሳያ ውስጥ ሁሉም ነገር በዚህ አሳሽ ውስጥ ባለው የአካባቢ ማከማቻ ውስጥ ይቆያል — ምንም አገልጋይ የለም፣ ምንም አይሰቀልም። በAndroid መተግበሪያ ውስጥ ግቤቶች በስልኩ ላይ የተመሰጠሩ ናቸው። ምንም ስም፣ አድራሻ፣ የመንግሥት መታወቂያ ወይም የእውቂያ ዝርዝር አይሰበሰብም። ሁሉንም ነገር በማንኛውም ጊዜ ማጥፋት ይችላሉ። |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | ይህንን አንብቤያለሁ እና ይህ አሳሽ ማሳያ ለትክክለኛ ክሊኒካዊ መዛግብት እንዳልሆነ ተረድቻለሁ። |  |
| `consentTitle` | Consent | ፍቃድ |  |
| `dayComplete` | Day complete | ቀን ተጠናቀቀ |  |
| `demoBadge` | Demo | ማሳያ |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | ማሳያ ብቻ · የሕክምና መሣሪያ አይደለም · ለትክክለኛ ክሊኒካዊ መዝገቦች አይደለም. |  |
| `downloadToast` | {name} downloaded. | {name} ወርዷል። |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | ረቂቅ ትርጉም - ክሊኒካዊ ጥቅም ላይ ከመዋሉ በፊት የአፍ መፍቻ ቋንቋ ግምገማ ያስፈልገዋል። |  |
| `early` | early signal | ቀደምት ምልክት |  |
| `eraseBtn` | Erase my data | ውሂቤን አጥፋ |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | ይሄ መገለጫውን፣ በየቀኑ እና እያንዳንዱን ቅንብር ከዚህ አሳሽ ያስወግዳል። ሊቀለበስ አይችልም። |  |
| `eraseTitle` | Erase everything | ሁሉንም ነገር አጥፋ |  |
| `eraseYes` | Erase everything | ሁሉንም ነገር አጥፋ |  |
| `errCode` | Please enter your participant code. | እባክዎ የተሳታፊ ኮድዎን ያስገቡ። |  |
| `errConsent` | Consent is required to continue. | ለመቀጠል ፈቃድ ያስፈልጋል። |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | ከፍ ያሉ መለኪያዎች ለውይይት ምልክት ይደረግባቸዋል። መተግበሪያው በፍጹም ምርመራ አያደርግም፣ የመድኃኒት ማዘዣንም አይቀይርም። |  |
| `escalateNone` | No threshold flags in the recent record. | በቅርብ መዝገብ ውስጥ ምንም ገደብ ባንዲራዎች የሉም። |  |
| `escalateTitle` | Flags for the clinician | ለህክምና ባለሙያው ባንዲራዎች |  |
| `estTotal` | Today’s estimate | የዛሬ ግምት |  |
| `exportBackup` | Complete backup (JSON) | የተሟላ ምትኬ (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | የጤና መዝገብ (FHIR R4) |  |
| `exportFood` | Food log (CSV) | የምግብ መዝገብ (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | ዕለታዊ መለኪያዎች (CSV) |  |
| `exportPrint` | Clinician summary (print) | ክሊኒካዊ ማጠቃለያ (ማተም) |  |
| `exportsTitle` | Export & share | ወደ ውጪ ላክ እና አጋራ |  |
| `eyebrow_capability` | Capability map | የችሎታ ካርታ |  |
| `eyebrow_demo` | Browser demo · no install | የአሳሽ ማሳያ · ምንም መጫን የለም። |  |
| `eyebrow_hospital` | Hospital deployment · reference design | የሆስፒታል ማሰማራት · የማጣቀሻ ንድፍ |  |
| `fasting` | Fasting | መጾም |  |
| `foodItemsOne` | 1 item | 1 ንጥል |  |
| `foodLogged` | Food | ምግብ |  |
| `foodPickerTitle` | Choose a dish | ምግብ ይምረጡ |  |
| `footerNote` | Nothing leaves this browser. | ከዚህ አሳሽ ምንም አይወጣም። |  |
| `footer_browser_demo` | Browser demo | የአሳሽ ማሳያ |  |
| `footer_contact` | Contact | ተገናኝ |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | ማሳያ ብቻ · የሕክምና መሣሪያ አይደለም · ከZhongshan Hospital፣ HIMSS ወይም ከተሰየመ የጤና ሥርዓት ጋር ምንም ግንኙነት የለም። |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | በጉብኝቶች መካከል ላለው ቦታ የመለኪያ መሣሪያ። በJamshedpur ውስጥ ለተጋሩ ስልኮች፣ አነስተኛ ባትሪዎች እና ሩቅ ላሉ ክሊኒኮች የተሰራ። |  |
| `footer_hospital_design` | Hospital design | የሆስፒታል ዲዛይን |  |
| `footer_limits` | Limits and answers | ገደቦች እና መልሶች |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | የሕክምና መሣሪያ አይደለም. ከZhongshan Hospital፣ HIMSS ወይም ከተሰየመ የጤና ስርዓት ጋር ምንም ግንኙነት የለም። |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | ከዚህ አሳሽ ምንም አይወጣም። |  |
| `footer_product` | Product | ምርት |  |
| `footer_transparency` | Transparency | ግልጽነት |  |
| `footer_verification` | Verification | ማረጋገጥ |  |
| `glucose` | Blood sugar | የደም ስኳር |  |
| `head_404` | That page is not here. | ያ ገጽ እዚህ የለም። |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | ሆስፒታል ላልደረሰባቸው ቦታዎች የተሰራ የተዘጋ ዑደት። |  |
| `head_functions` | Every function, honestly labelled. | እያንዳንዱ ተግባር፣ በሐቀኝነት የተሰየመ። |  |
| `head_hospital` | The hospital is the unit of change. | ሆስፒታሉ የለውጥ ክፍል ነው። |  |
| `head_privacy` | Your record stays yours. | መዝገብህ ያንተ ነው። |  |
| `head_security` | What is protected, and what is not. | የተጠበቀው, እና ያልሆነው. |  |
| `historyTitle` | The last 21 days | ያለፉት 21 ቀናት |  |
| `hospAudit` | Audit trail | የኦዲት ዱካ |  |
| `hospCohort` | Cohort | ስብስብ |  |
| `hospComplete` | complete | ተጠናቀቀ |  |
| `hospDisc1` | Prescribed but not dispensed | የታዘዘ ግን አልተከፋፈለም። |  |
| `hospDiscrepancies` | Medication discrepancies | የመድሃኒት ልዩነቶች |  |
| `hospOpenHospital` | Open hospital control room | የሆስፒታል መቆጣጠሪያ ክፍልን ይክፈቱ |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | የግምገማ ጥቅል ለማየት ለአንድ ሳምንት ያህል በተሳታፊ መተግበሪያ ውስጥ ይግቡ። |  |
| `hospReviewPack` | Today's review pack | የዛሬው የግምገማ ጥቅል |  |
| `hospitalBack` | Back to app | ወደ መተግበሪያ ተመለስ |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | በተመሳሳይ መዝገብ ዙሪያ የተገነባው የሆስፒታሉ ንብርብር ንድፍ ንድፍ. ከዚህ በታች ያለው ስብስብ ሰው ሰራሽ ነው - ምንም እውነተኛ ታካሚዎች የሉም ፣ ምንም የሆስፒታል ግንኙነት የለም ፣ ምንም ክሊኒካዊ ውሳኔዎች የሉም። |  |
| `hospitalTitle` | Hospital control room | የሆስፒታል መቆጣጠሪያ ክፍል |  |
| `hospital_layer` | Hospital deployment layer | የሆስፒታል ማሰማሪያ ንብርብር |  |
| `hospital_s1` | Status of this document | የዚህ ሰነድ ሁኔታ |  |
| `hospital_s10` | Governance and safety | አስተዳደር እና ደህንነት |  |
| `hospital_s11` | Phased rollout | የታቀደ ልቀት |  |
| `hospital_s12` | What would make this real | ይህንን እውን የሚያደርገው ምንድን ነው? |  |
| `hospital_s2` | Why the hospital, not just the phone | ለምን ሆስፒታሉ, ስልክ ብቻ አይደለም |  |
| `hospital_s3` | Reference topology | የማጣቀሻ ቶፖሎጂ |  |
| `hospital_s4` | Roles and access | ሚናዎች እና መዳረሻ |  |
| `hospital_s5` | Coordinator console | አስተባባሪ ኮንሶል |  |
| `hospital_s6` | Clinician review workflow | ክሊኒካዊ የስራ ሂደት ግምገማ |  |
| `hospital_s7` | Closed-loop medication | ዝግ መድሀኒት |  |
| `hospital_s8` | Integration contract | የውህደት ውል |  |
| `hospital_s9` | Identity and data flow | ማንነት እና የውሂብ ፍሰት |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | ለአንድ ሳምንት ያህል መዝገብ ይያዙ. ምንም ነገር ከመታየቱ በፊት ቅጦች ቢያንስ አራት የተጣመሩ ቀናት ያስፈልጋቸዋል። |  |
| `insightsTitle` | What your own numbers say | የእራስዎ ቁጥሮች ምን ይላሉ |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | ቋንቋ |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | ተመሳሳዩ የመዝገብ ቅርፅ፣ ተመሳሳይ የምግብ ቤተ-መጽሐፍት እና እንደ አንድሮይድ ግንባታ ተመሳሳይ ህጎች፣ በዚህ ገጽ ላይ ሙሉ በሙሉ ይሰራል። ለትክክለኛ ክሊኒካዊ መዝገቦች አይደለም. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | ይህ ፕሮጀክቱ የሚከተለው ሙሉ ንድፍ ነው፣ ከስልክ ላይ ከተመሠረተ የመለኪያ መሣሪያ እስከ ክሊኒካዊ ክትትል የሚደረግበት ዝግ ዑደት። እያንዳንዱ ተግባር እንደ ተልኳል ፣ ማሳያ ወይም የመንገድ ካርታ በተሰየመ ቅድመ ሁኔታ ምልክት ተደርጎበታል። |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | የስልክ መዝገብ አንድ ክሊኒክ እርምጃ መውሰድ ሲችል ብቻ ነው ምልክቱን የሚዘጋው። ይህ ገጽ የዚያ የሆስፒታል ንብርብር ዋቢ አርክቴክቸር ነው። የንድፍ ንድፍ ነው፡ እዚህ ምንም አልተዘረጋም እና የትኛውም ሆስፒታል አጋር ተብሎ አልተሰየመም። |  |
| `legendComplete` | Complete | ተጠናቀቀ |  |
| `legend_read` | How to read this map | ይህን ካርታ እንዴት ማንበብ እንደሚቻል |  |
| `loadSample` | Load 14-day sample | የ 14 ቀን ናሙና ጫን |  |
| `mealBreakfast` | Breakfast | ቁርስ |  |
| `medsLabel` | Daily medicines (name and dose) | ዕለታዊ መድሃኒቶች (ስም እና መጠን) |  |
| `medsTitle` | Medicines | መድሃኒቶች |  |
| `nav_blueprint` | Blueprint | ንድፍ |  |
| `nav_clinician` | For clinicians | ለህክምና ባለሙያዎች |  |
| `nav_demo` | Demo | ማሳያ |  |
| `nav_functions` | Functions | ተግባራት |  |
| `nav_hospital` | Hospital | ሆስፒታል |  |
| `nav_loop` | The loop | ሉፕ |  |
| `nav_security` | Security | ደህንነት |  |
| `nav_what` | What it does | ምን ያደርጋል |  |
| `noDataToast` | No days recorded yet — add a day first. | ገና ምንም ቀናት አልተመዘገቡም - መጀመሪያ አንድ ቀን ይጨምሩ። |  |
| `noMatches` | No dish matches that. | ምንም ምግብ አይዛመድም። |  |
| `noMeds` | No medicines recorded in your profile. | በመገለጫዎ ውስጥ ምንም መድሃኒቶች አልተመዘገቡም። |  |
| `not_map` | What this map is not | ይህ ካርታ ምን አይደለም |  |
| `note` | Anything else? (optional) | ሌላ ነገር አለ? (አማራጭ) |  |
| `nothingLogged` | No record for this day. | ለዚህ ቀን ምንም መዝገብ የለም። |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | በዚህ አሳሽ ውስጥ ብቻ ተከማችቷል። መለያ የለም፣ ምንም ሰቀላ የለም። |  |
| `planAccept` | Accept | ተቀበል |  |
| `planAccepted` | Marked accepted in this demo. | በዚህ ማሳያ ተቀባይነት ያለው ምልክት ተደርጎበታል። |  |
| `planAcceptedState` | accepted | ተቀብሏል |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | የምግብ ዋጋዎች እንደ ክልል የሚታዩ የቤተሰብ-ክፍል ግምቶች እንጂ የተመዘኑ መለኪያዎች አይደሉም። የስርዓተ-ጥለት ረቂቆች በአንድ ሰው ውስጥ ከተጣመሩ ቀናት የሚመጡ ናቸው - እነሱ ለህክምና ባለሙያ ማበረታቻዎች እንጂ ግኝቶች አይደሉም። |  |
| `planConfidenceTitle` | How sure is this? | ይህ ምን ያህል እርግጠኛ ነው? |  |
| `planDecision` | Demo decision | የማሳያ ውሳኔ |  |
| `planDraftLabel` | Draft for review | ለግምገማ ረቂቅ |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | በግምገማ ስብሰባ ውስጥ ከህክምና ባለሙያው ጋር ማረም ይከሰታል; ይህ ማሳያ ውሳኔውን ብቻ ይመዘግባል. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | በመጀመሪያ ለአንድ ሳምንት ያህል ምግብ እና ንባብ ይመዝግቡ። ረቂቅ ቢያንስ አራት የተጣመሩ ቀናት ያስፈልገዋል። |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | ከራስዎ ከተመዘገቡ ቀናት ብቻ የተሰራ የምግብ ባለሙያ የሚገመግም ረቂቅ። ገላጭ - ምክር አይደለም. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | ዝቅተኛ በራስ መተማመን - ጥቂት የተጣመሩ ቀናት ብቻ። |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | ገላጭ ብቻ። ምክር አይደለም, ምርመራ አይደለም. በዚህ ረቂቅ ምክንያት ምግብዎን ወይም መድሃኒቶችዎን አይቀይሩ - ብቃት ያለው ሐኪም ይወስናል. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | ምግብም መለኪያም ካላቸው {n} ቀናት የተሰራ። |  |
| `planTitle` | Weekly plan draft | ሳምንታዊ ዕቅድ ረቂቅ |  |
| `planTypePortion` | Portion | ክፍል |  |
| `prevDay` | Previous day | ያለፈው ቀን |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | በህትመት መገናኛው ውስጥ ለአንድ ገጽ ማጠቃለያ "አስቀምጥ እንደ PDF" ን ይምረጡ። |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete}/{total} ሙሉ ቀናት · {logged} ቀናት ገብተዋል። |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete}/{total} ሙሉ ቀናት · {logged} ቀን ገብቷል። |  |
| `progressTitle` | Progress | እድገት |  |
| `recentDays` | Recent days | የቅርብ ቀናት |  |
| `removedToast` | Removed. | ተወግዷል። |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | ከተመደቡ ተሳታፊዎች ጋር የግምገማ ጥቅልን ከባንዲራዎች እና ረቂቅ እቃዎች ጋር ከምንጭ ቀናት ጋር የተገናኙትን ይመለከታል። |  |
| `roleCoordinator` | Coordinator | አስተባባሪ |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | የቡድን ሙላትን፣ የግምገማ ወረፋውን እና የኦዲት ዱካውን ይመለከታል። ማዘዣ መቀየር አይቻልም። |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | የመድሀኒት አለመጣጣም ወረፋ እና የታዘዘውን → የተሰጠ → የተወሰዱ የፍተሻ ነጥቦችን ይመለከታል። |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | በእያንዳንዱ ረድፍ ላይ ያለው ህግ፡ ሶፍትዌር መጀመሪያ ይነበባል፣ ሰው ይወስናል። |  |
| `sampleTitle` | Sample data | የናሙና ውሂብ |  |
| `saveToday` | Save today’s record | የዛሬውን መዝገብ አስቀምጥ |  |
| `savedToast` | Saved in this browser. | በዚህ አሳሽ ውስጥ ተቀምጧል። |  |
| `settingsTitle` | Settings | ቅንብሮች |  |
| `skip` | Skip to demo | ወደ ማሳያ ዝለል |  |
| `skip_content` | Skip to content | ወደ ይዘት ዝለል |  |
| `start` | Start recording | መቅዳት ጀምር |  |
| `status` | Status | ሁኔታ |  |
| `status_demo` | Demo | ማሳያ |  |
| `status_roadmap` | Roadmap | የመንገድ ካርታ |  |
| `status_shipped` | Shipped | ተልኳል። |  |
| `stepProfile` | 1 · Who | 1 · ማን |  |
| `tabToday` | Today | ዛሬ |  |
| `taken` | Taken | የተወሰደ |  |
| `thisWeek` | this week | በዚህ ሳምንት |  |
| `title_404` | Page not found — Khai Tracker | ገጽ አልተገኘም - Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | የዲጂታል-ትራንስፎርሜሽን ንድፍ - Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker - የአሳሽ ማሳያ |  |
| `title_functions` | Function map — Khai Tracker | የተግባር ካርታ - Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | የሆስፒታል ማሰማራት ንድፍ - Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — የእርስዎ ቀን፣ ተለካ |  |
| `title_privacy` | Privacy — Khai Tracker | ግላዊነት - Khai Tracker |  |
| `title_security` | Security — Khai Tracker | ደህንነት - Khai Tracker |  |
| `vitalsTitle` | Readings | ንባብ |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | እርስዎ እና የህክምና ባለሙያዎ በጉብኝቶች መካከል ምን እንደሚፈጠር ለማየት እንዲችሉ ዕለታዊ የምግብ እና የጤና መዝገብ። ሪከርድ ያስቀምጣል። የሕክምና ምክር አይሰጥም. |  |
| `welcomeTitle` | Welcome to Khai Tracker | ወደ Khai Tracker እንኳን በደህና መጡ |  |
| `wellbeingTitle` | How was the day? | ቀኑ እንዴት ነበር? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Amharic (am)
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
