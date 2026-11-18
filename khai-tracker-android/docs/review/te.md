# Telugu (te) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Telugu (తెలుగు)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/te.json` (app and site)
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

## App strings — Telugu

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | గురించి |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nKhai Foods Pvt Ltd, Jamshedpur, Jharkhand, India చే నిర్మించబడింది.\n\nపంచుకునే ఫోన్లు, అస్థిర నెట్ వర్కులు మరియు వివిధ రకాల భారతీయ ఆహారాల కోసం రూపొందించబడింది. ముందుగా ఆఫ్ లైన్. మూడో పక్ష విశ్లేషణలు లేవు. ప్రకటనలు లేవు. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | ఉత్పత్తి యజమాని: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + ఆహారం జోడించు |  |
| `add_medicines` | Add medicines | మందులు జోడించు |  |
| `already_saved` | Saved. You can keep editing and save again. | భద్రపరచబడింది. మీరు మార్పులు చేసి మళ్లీ భద్రపరచవచ్చు. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | అర్హత కలిగిన వైద్యుడిని అడగండి. |  |
| `assistant_input_ph` | Ask a question | ఒక ప్రశ్న అడగండి |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | ఈ టూల్ స్వంత సహాయక పాఠ్యం నుంచి తీసిన ప్రశ్నలకు సమాధానాలు. AI లేదు, రోగనిర్ధారణ లేదు, సలహా లేదు. |  |
| `assistant_listen` | Listen | వినండి |  |
| `assistant_send` | Send | పంపు |  |
| `assistant_tab` | Guide | గైడ్ |  |
| `assistant_title` | Khai Guide | ఖాయ్ గైడ్ |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | దీనికి నా వద్ద సమాధానం లేదు. ఈ టూల్ వాడకం గురించిన ప్రశ్నలకు మాత్రమే నేను సమాధానం ఇస్తాను. |  |
| `back` | Back | వెనుదిరుగు |  |
| `bp_dia` | Diastolic (lower) | డయాస్టాలిక్ (కింది) |  |
| `bp_sys` | Systolic (upper) | సిస్టాలిక్ (పై) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | రద్దు చేయు |  |
| `carbs` | Carbohydrate | కార్బోహైడ్రేట్ |  |
| `close` | Close | మూసివేయు |  |
| `completeness` | 21-day completeness | 21 రోజుల పూర్తిదనం |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | భోజనం, మందులు మరియు ఒక కొలత ఉన్న రోజులను 21 తో భాగించడం. ఇది భద్రపరచిన నమోదుల నుంచి లెక్కించబడుతుంది, గుర్తింపు నుంచి కాదు. |  |
| `confirm` | Confirm | ధృవీకరించు |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | మీరు ఏమి రికార్డు చేయాలో మీరే నిర్ణయించుకుంటారు. మీ నమోదులు ఈ ఫోన్ లోనే ఎన్ క్రిప్ట్ చేసి ఉంచబడతాయి మరియు మీ కోఆర్డినేటర్ సర్వర్ చిరునామా ఇచ్చినప్పుడు మాత్రమే Khai అధ్యయన సర్వర్ కి పంపబడతాయి. మీరు ఎప్పుడైనా అన్నింటినీ తొలగించవచ్చు. పేరు, చిరునామా, Aadhaar సంఖ్య లేదా పరిచయాల జాబితా ఏదీ సేకరించబడదు. మీ డేటాను తొలగించడం ద్వారా మీరు భాగస్వామ్యం నుంచి వైదొలగవచ్చు. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | నేను దీన్ని చదివాను లేదా విన్నాను మరియు పాల్గొనడానికి అంగీకరిస్తున్నాను. |  |
| `consent_listen` | Listen in Hindi | హిందీలో వినండి |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | సమ్మతి వెర్షన్ 1.0 · ఈ పరికరంలో సమయంతో రికార్డ్ చేయబడింది |  |
| `consent_title` | Consent | సమ్మతి |  |
| `day_detail` | Day detail | రోజు వివరాలు |  |
| `days_logged` | Days logged | నమోదు చేసిన రోజులు |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker ఒక ట్రాకింగ్ సాధనం, వైద్య సలహా కాదు. ఇది ఎప్పుడూ రోగ నిర్ధారణ చేయదు మరియు ఎప్పుడూ ప్రిస్క్రిప్షన్ మార్చదు. |  |
| `done` | Done | పూర్తయింది |  |
| `dose_hint` | Dose (optional) | మోతాదు (ఐచ్ఛికం) |  |
| `edit_day` | Edit this day | ఈ రోజు మార్చు |  |
| `edit_profile` | Edit profile | ప్రొఫైల్ మార్చు |  |
| `energy` | Energy | శక్తి |  |
| `erase` | Erase my data | నా డేటా తొలగించు |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | ఇది ఈ ఫోన్ లోని ప్రతి నమోదు, మీ ప్రొఫైల్ మరియు రిమైండర్ సెట్టింగులను శాశ్వతంగా తొలగిస్తుంది. దీన్ని వెనక్కి తీసుకోలేము. |  |
| `erase_yes` | Erase everything | అన్నీ తొలగించు |  |
| `estimated` | estimated | అంచనా |  |
| `export_backup` | Full backup (JSON) | పూర్తి బ్యాకప్ (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | ఆరోగ్య రికార్డు (FHIR JSON) |  |
| `export_food` | Food log (CSV) | ఆహార రికార్డు (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | మీరు ఎంచుకున్న వారితో మాత్రమే భాగస్వామ్యం చేయండి. షేర్ నొక్కినప్పుడు మాత్రమే ఫైళ్లు ఫోన్ నుంచి బయటికి వెళ్తాయి. |  |
| `export_metrics` | Daily readings (CSV) | రోజువారీ కొలతలు (CSV) |  |
| `export_summary` | Clinician summary (PDF) | వైద్యుడి సారాంశం (PDF) |  |
| `export_title` | Export and share | ఎగుమతి మరియు భాగస్వామ్యం |  |
| `export_working` | Preparing file… | ఫైల్ సిద్ధమవుతోంది… |  |
| `fat` | Fat | కొవ్వు |  |
| `food_items` | %1$d food items | %1$d ఆహార అంశాలు |  |
| `food_library_title` | Food library | ఆహార లైబ్రరీ |  |
| `glucose` | Blood sugar | రక్తం లో చక్కెర |  |
| `glucose_fasting` | Fasting | ఉపవాసంలో |  |
| `glucose_pp` | After food | భోజనం తర్వాత |  |
| `hide_previews` | Hide this app in the recent-apps preview | ఇటీవలి యాప్స్ ప్రివ్యూలో ఈ యాప్ ను దాచు |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | నిండిన చతురస్రం అంటే ఆ రోజు నమోదు ఉంది. సమీక్షించడానికి లేదా సరిచేయడానికి ఏదైనా రోజుపై నొక్కండి. |  |
| `history_title` | Last 21 days | గత 21 రోజులు |  |
| `insight_descriptive` | description | వివరణ |  |
| `insight_early` | early signal | ముందస్తు సంకేతం |  |
| `insight_moderate` | moderate signal | మధ్యస్త సంకేతం |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | ఇవి మీ సొంత నమోదులపై పరిశీలనలు; రోగ నిర్ధారణ కాదు, చికిత్స సిఫార్సూ కాదు. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | ఒక వారం రికార్డు ఉంచండి. కనీసం ఐదు రోజుల కొలతలుంటేనే ధోరణులు కనిపిస్తాయి. |  |
| `insights_title` | What your own data shows | మీ సొంత డేటా ఏమి చూపిస్తుంది |  |
| `kcal` | Energy | శక్తి |  |
| `language` | Language / भाषा | భాష / भाषा |  |
| `loading` | Loading… | లోడ్ అవుతోంది… |  |
| `meal_breakfast` | Breakfast | అల్పాహారం |  |
| `meal_dinner` | Dinner | రాత్రి భోజనం |  |
| `meal_lunch` | Lunch | మధ్యాహ్న భోజనం |  |
| `meal_snacks` | Snacks & drinks | స్నాక్స్ మరియు పానీయాలు |  |
| `meds_changed` | Changed | మార్చారు |  |
| `meds_empty` | No medicines listed yet. | ఇంకా మందులు జాబితా చేయబడలేదు. |  |
| `meds_hint` | Tick what you actually did today. | ఈ రోజు మీరు వాస్తవంగా ఏమి చేశారో టిక్ పెట్టండి. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | మీ ప్రొఫైల్ లో మందులు జాబితా చేయబడలేదు. ఒకసారి జోడించి, ప్రతిరోజూ టిక్ పెట్టుకోండి. |  |
| `meds_skipped` | Skipped | వదిలేశారు |  |
| `meds_summary` | %1$d of %2$d medicines taken | %2$d లో %1$d మందులు తీసుకున్నారు |  |
| `meds_taken` | Taken | తీసుకున్నారు |  |
| `meds_title` | Medicines | మందులు |  |
| `mood` | Mood | మానసిక స్థితి |  |
| `no` | No | కాదు |  |
| `no_food_yet` | Nothing added yet | ఇంకా ఏమీ జోడించలేదు |  |
| `note` | Anything else? (optional) | ఇంకేదైనా? (ఐచ్ఛికం) |  |
| `nothing_logged` | No entry for this day. | ఈ రోజుకు నమోదు లేదు. |  |
| `notif_channel` | Daily reminder | రోజువారీ రిమైండర్ |  |
| `notif_channel_desc` | One daily reminder to record your day. | మీ రోజు రికార్డు చేయడానికి ఒక రోజువారీ రిమైండర్. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | రెండు నిశ్శబ్ద నిమిషాలు: ఈ రోజు మీరు ఏమి తిన్నారు, ఏమి కొలిచారు? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | రోజువారీ రిమైండర్ మీకు చేరాలంటే సూచనలను అనుమతించండి. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + మరొకటి జోడించు |  |
| `onboard_age` | Age group | వయస్సు గ్రూపు |  |
| `onboard_age_ph` | Select | ఎంచుకోండి |  |
| `onboard_code` | Participant code | పాల్గొనేవారి కోడ్ |  |
| `onboard_code_ph` | e.g. K01 | ఉదా. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | ఆరోగ్య పరిస్థితులు (వర్తించే వాటన్నింటినీ ఎంచుకోండి) |  |
| `onboard_error_age` | Please choose an age group. | దయచేసి వయస్సు గ్రూపు ఎంచుకోండి. |  |
| `onboard_error_code` | Please enter your participant code. | దయచేసి మీ పాల్గొనేవారి కోడ్ నమోదు చేయండి. |  |
| `onboard_error_consent` | Please confirm consent to continue. | కొనసాగడానికి దయచేసి సమ్మతిని ధృవీకరించండి. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | రోజువారీ ఆహారం మరియు ఆరోగ్య రికార్డు. ఇది మీకూ, మీ వైద్యుడికీ సందర్శనల మధ్య నిజంగా ఏం జరుగుతుందో చూడటానికి సహాయపడుతుంది. ఇది ఒక ట్రాకింగ్ సాధనం, వైద్య సలహా కాదు. |  |
| `onboard_meds` | Daily medicines (name and dose) | రోజువారీ మందులు (పేరు మరియు మోతాదు) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | ఉదా. Metformin 500 mg |  |
| `onboard_start` | Start tracking | ట్రాకింగ్ ప్రారంభించు |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker కి స్వాగతం |  |
| `pending` | Pending sync | సింక్ పెండింగ్ లో ఉంది |  |
| `per_portion` | per portion | ఒక భాగానికి |  |
| `pick_day` | Pick a day above. | పైన ఒక రోజు ఎంచుకోండి. |  |
| `pin_change` | Change PIN | PIN మార్చు |  |
| `pin_enter` | Enter your PIN | మీ PIN నమోదు చేయండి |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN ఖచ్చితంగా 4 అంకెలుండాలి. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | కుటుంబంతో పంచుకునే ఫోన్ లో ఇది ఉపయోగకరం. యాప్ తెరిచినప్పుడు 4 అంకెల PIN అడిగి, ఒక నిమిషం దూరంగా ఉన్న తర్వాత మళ్లీ అడుగుతుంది. |  |
| `pin_lock` | App lock | యాప్ లాక్ |  |
| `pin_new` | Choose a 4-digit PIN | 4 అంకెల PIN ఎంచుకోండి |  |
| `pin_remove` | Remove PIN | PIN తొలగించు |  |
| `pin_removed` | PIN removed. | PIN తొలగించబడింది. |  |
| `pin_saved` | PIN saved. | PIN భద్రపరచబడింది. |  |
| `pin_set` | Set PIN | PIN సెట్ చేయు |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN తప్పు. మళ్లీ ప్రయత్నించండి. |  |
| `portion_q` | Portion | భాగం |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | మీ నమోదులు ఈ పరికరంలో, ఈ ఫోన్ యొక్క సురక్షిత కీస్టోర్ లో ఉన్న కీతో ఎన్ క్రిప్ట్ చేయబడ్డాయి. మీరు అధ్యయన సర్వర్ సెట్ చేసే వరకు ఏదీ ఎక్కడికీ పంపబడదు. విశ్లేషణలు లేవు, ప్రకటనలు లేవు. |  |
| `privacy_title` | Privacy | గోప్యత |  |
| `profile` | Profile and medicines | ప్రొఫైల్ మరియు మందులు |  |
| `progress_title` | Progress | పురోగతి |  |
| `protein` | Protein | ప్రోటీన్ |  |
| `pulse` | Pulse | నాడి |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | ఒకే వంటకం ఇంటింటా మారుతుంది కాబట్టి అంచనాలు పరిధులుగా చూపబడతాయి. ఇవి ధోరణులు గుర్తించడానికి, కేలరీలు లెక్కించడానికి కాదు. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | ఈ ఫోన్ లో హిందీ వాక్ సౌకర్యం ఇన్ స్టాల్ చేయబడలేదు. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | మీరు ఎంచుకున్న సమయంలో ఒక నిశ్శబ్ద సూచన. వరుస రోజుల గురించి సిగ్గుపడేలా చేయదు, ప్రకటనలూ లేవు. |  |
| `reminder_off` | Reminder off | రిమైండర్ ఆఫ్ లో ఉంది |  |
| `reminder_on` | Reminder on | రిమైండర్ ఆన్ లో ఉంది |  |
| `reminder_time` | Reminder time | రిమైండర్ సమయం |  |
| `reminders` | Daily reminder | రోజువారీ రిమైండర్ |  |
| `remove` | Remove | తొలగించు |  |
| `remove_confirm` | Remove this item? | ఈ అంశాన్ని తొలగించాలా? |  |
| `save` | Save | భద్రపరచు |  |
| `save_failed` | Could not save. Please try again. | భద్రపరచలేకపోయాం. దయచేసి మళ్లీ ప్రయత్నించండి. |  |
| `save_today` | Save today | ఈ రోజు భద్రపరచు |  |
| `saved` | Saved on this device. Encrypted. | ఈ పరికరంలో భద్రపరచబడింది. ఎన్ క్రిప్ట్ చేయబడింది. |  |
| `search_food` | Search a dish in English or Hindi | ఇంగ్లీష్ లేదా హిందీలో వంటకం పేరు వెతకండి |  |
| `settings_title` | Settings | సెట్టింగులు |  |
| `share` | Share | భాగస్వామ్యం |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | ఈ ఫోన్ లో ఫైల్ ను స్వీకరించే యాప్ లేదు. మెయిల్ లేదా ఫైల్ యాప్ ఇన్ స్టాల్ చేసి మళ్లీ ప్రయత్నించండి. |  |
| `sleep` | Sleep last night (hours) | నిన్న రాత్రి నిద్ర (గంటలు) |  |
| `sodium` | Salt (sodium) | ఉప్పు (సోడియం) |  |
| `streak` | Day streak | వరుస రోజులు |  |
| `sync_bad_url` | That does not look like a valid address. | అది చెల్లుబాటయ్యే చిరునామాలా లేదు. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | సింక్ విఫలమైంది. నమోదులు ఈ ఫోన్ లో సురక్షితంగా ఉన్నాయి, మళ్లీ ప్రయత్నిస్తాం. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | ఐచ్ఛికం. మీ కోఆర్డినేటర్ సర్వర్ చిరునామా ఇస్తారు. అన్నీ ఈ ఫోన్ లోనే ఉంచాలంటే దీన్ని ఖాళీగా వదిలేయండి. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | HTTPS చిరునామా వాడండి. ఆరోగ్య డేటా ఎప్పుడూ ఎన్ క్రిప్ట్ కాకుండా పంపబడదు. |  |
| `sync_never` | Not synced yet. | ఇంకా సింక్ చేయలేదు. |  |
| `sync_now` | Sync now | ఇప్పుడు సింక్ చేయు |  |
| `sync_offline` | No internet right now. Entries queued. | ప్రస్తుతం ఇంటర్నెట్ లేదు. నమోదులు వరుసలో ఉన్నాయి. |  |
| `sync_ok` | Synced. All entries are on the server. | సింక్ అయింది. అన్ని నమోదులు సర్వర్ లో ఉన్నాయి. |  |
| `sync_save` | Save address | చిరునామా భద్రపరచు |  |
| `sync_title` | Study sync | అధ్యయన సింక్ |  |
| `sync_url` | Server address | సర్వర్ చిరునామా |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | చరిత్ర |  |
| `tab_progress` | Progress | పురోగతి |  |
| `tab_settings` | Settings | సెట్టింగులు |  |
| `tab_today` | Today | నేడు |  |
| `this_week` | This week | ఈ వారం |  |
| `todays_total` | Today\'s estimate | నేటి అంచనా |  |
| `total_carbs` | Carbohydrate | కార్బోహైడ్రేట్ |  |
| `uncertainty` | Range, not a single number | ఒక అంకె కాదు, ఒక పరిధి |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | మీరు కొలిచినది మాత్రమే నమోదు చేయండి. ఖాళీగా ఉంటే కొలవలేదని అర్థం, అది కూడా ఉపయోగకరమైన సమాచారమే. |  |
| `vitals_title` | Readings | కొలతలు |  |
| `weight` | Weight (kg) | బరువు (kg) |  |
| `wellbeing_title` | How was the day? | ఆ రోజు ఎలా గడిచింది? |  |
| `yes` | Yes | అవును |  |

## Site strings — Telugu

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | ఈ డెమో గురించి |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK డౌన్ లోడ్ చేయు |  |
| `action_menu` | Open menu | మెను తెరుచు |  |
| `action_theme` | Switch theme | థీమ్ మార్చు |  |
| `addFood` | Add food | ఆహారం జోడించు |  |
| `addMed` | + Add another | + మరొకటి జోడించు |  |
| `adherence` | medicines taken | మందులు తీసుకున్నారు |  |
| `ageLabel` | Age band | వయస్సు విభాగం |  |
| `allFoods` | All | అన్నీ |  |
| `askClinician` | Ask a qualified clinician. | అర్హత కలిగిన వైద్యుడిని అడగండి. |  |
| `assistantInputPh` | Ask a question | ఒక ప్రశ్న అడగండి |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | ఈ టూల్ స్వంత సహాయక పాఠ్యం నుంచి తీసిన ప్రశ్నలకు సమాధానాలు. AI లేదు, రోగనిర్ధారణ లేదు, సలహా లేదు. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | డిస్ప్లే భాష మార్చినప్పుడు లేబుళ్లు మాత్రమే మారతాయి. రికార్డ్ చేసిన విలువలు స్థిరమైన కోడ్‌లుగా ఉంటాయి కాబట్టి ఏ రోజూ తిరిగి రాయబడదు. |  |
| `assistantListen` | Listen | వినండి |  |
| `assistantNav` | Guide | గైడ్ |  |
| `assistantSend` | Send | పంపు |  |
| `assistantTitle` | Khai Guide | ఖాయ్ గైడ్ |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | దీనికి నా వద్ద సమాధానం లేదు. ఈ టూల్ వాడకం గురించిన ప్రశ్నలకు మాత్రమే నేను సమాధానం ఇస్తాను. |  |
| `avgBp` | avg BP | సగటు BP |  |
| `back` | Back | వెనుదిరుగు |  |
| `bmiNote` | Not a diagnosis. | రోగ నిర్ధారణ కాదు. |  |
| `bpSys` | Systolic | సిస్టాలిక్ |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | దీన్ని ప్రకటనగా కాక, బ్లూప్రింట్ గా చదవండి: ఎలాంటి ఆసుపత్రి విస్తరణ, పైలట్, ఆమోదం లేదా భాగస్వామ్యం ప్రకటించబడలేదు. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | నిజమైన మాట: పాల్గొనేవారి యాప్ మరియు బ్రౌజర్ డెమో నేడు ఉన్నాయి. ఇక్కడి ప్రతి ఆసుపత్రి భాగం ఒక డిజైన్ ప్రతిపాదన. |  |
| `codeLabel` | Participant code | పాల్గొనేవారి కోడ్ |  |
| `codeShort` | Code | కోడ్ |  |
| `completeDays` | complete days | పూర్తయిన రోజులు |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | ఆహారం, మందుల స్థితి (సూచించినప్పుడు) మరియు కనీసం ఒక కొలత ఉన్న రోజులను 21 తో భాగించడం. భద్రపరచిన నమోదుల నుంచి లెక్కించబడుతుంది, గుర్తింపు నుంచి కాదు. |  |
| `conditionsLabel` | Conditions (select all that apply) | పరిస్థితులు (వర్తించే వాటన్నింటినీ ఎంచుకోండి) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | మీరు ఏమి నమోదు చేయాలో మీరే నిర్ణయించుకుంటారు. ఈ డెమో లో అన్నీ ఈ బ్రౌజర్ యొక్క స్థానిక నిల్వలోనే ఉంటాయి — ఎలాంటి సర్వర్ లేదు, ఏదీ అప్ లోడ్ చేయబడదు. Android యాప్ లో నమోదులు ఫోన్ లో ఎన్ క్రిప్ట్ చేయబడతాయి. పేరు, చిరునామా, ప్రభుత్వ గుర్తింపు కార్డు లేదా పరిచయాల జాబితా ఏదీ సేకరించబడదు. మీరు ఎప్పుడైనా అన్నింటినీ తొలగించవచ్చు. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | నేను ఇది చదివాను మరియు ఈ బ్రౌజర్ డెమో నిజమైన క్లినికల్ రికార్డుల కోసం కాదని అర్థం చేసుకున్నాను. |  |
| `consentTitle` | Consent | సమ్మతి |  |
| `dayComplete` | Day complete | రోజు పూర్తయింది |  |
| `demoBadge` | Demo | డెమో |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | డెమో మాత్రమే · వైద్య పరికరం కాదు · నిజమైన క్లినికల్ రికార్డుల కోసం కాదు. |  |
| `downloadToast` | {name} downloaded. | {name} డౌన్ లోడ్ అయింది. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | ముసాయిదా అనువాదం — క్లినికల్ ఉపయోగానికి ముందు స్థానిక భాష మాట్లాడే వారి సమీక్ష అవసరం. |  |
| `early` | early signal | ముందస్తు సంకేతం |  |
| `eraseBtn` | Erase my data | నా డేటా తొలగించు |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | ఇది ఈ బ్రౌజర్ నుంచి ప్రొఫైల్, ప్రతి రోజు మరియు ప్రతి సెట్టింగును తొలగిస్తుంది. దీన్ని వెనక్కి తీసుకోలేము. |  |
| `eraseTitle` | Erase everything | అన్నీ తొలగించు |  |
| `eraseYes` | Erase everything | అన్నీ తొలగించు |  |
| `errCode` | Please enter your participant code. | దయచేసి మీ పాల్గొనేవారి కోడ్ నమోదు చేయండి. |  |
| `errConsent` | Consent is required to continue. | కొనసాగడానికి సమ్మతి అవసరం. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | పెరిగిన కొలతలు ఒక చర్చ కోసం గుర్తించబడతాయి. యాప్ ఎప్పుడూ రోగ నిర్ధారణ చేయదు లేదా ప్రిస్క్రిప్షన్ మార్చదు. |  |
| `escalateNone` | No threshold flags in the recent record. | ఇటీవలి రికార్డులో థ్రెషోల్డ్ గుర్తులు లేవు. |  |
| `escalateTitle` | Flags for the clinician | క్లినిషియన్ కోసం గుర్తులు |  |
| `estTotal` | Today’s estimate | నేటి అంచనా |  |
| `exportBackup` | Complete backup (JSON) | పూర్తి బ్యాకప్ (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | ఆరోగ్య రికార్డు (FHIR R4) |  |
| `exportFood` | Food log (CSV) | ఆహార రికార్డు (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | రోజువారీ కొలతలు (CSV) |  |
| `exportPrint` | Clinician summary (print) | వైద్యుడి సారాంశం (ప్రింట్) |  |
| `exportsTitle` | Export & share | ఎగుమతి మరియు భాగస్వామ్యం |  |
| `eyebrow_capability` | Capability map | సామర్థ్య పటం |  |
| `eyebrow_demo` | Browser demo · no install | బ్రౌజర్ డెమో · ఇన్ స్టాల్ అవసరం లేదు |  |
| `eyebrow_hospital` | Hospital deployment · reference design | ఆసుపత్రి విస్తరణ · సూచన డిజైన్ |  |
| `fasting` | Fasting | ఉపవాసంలో |  |
| `foodItemsOne` | 1 item | 1 అంశం |  |
| `foodLogged` | Food | ఆహారం |  |
| `foodPickerTitle` | Choose a dish | వంటకం ఎంచుకోండి |  |
| `footerNote` | Nothing leaves this browser. | ఈ బ్రౌజర్ నుంచి ఏదీ బయటికి వెళ్లదు. |  |
| `footer_browser_demo` | Browser demo | బ్రౌజర్ డెమో |  |
| `footer_contact` | Contact | సంప్రదించండి |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | డెమో మాత్రమే · వైద్య పరికరం కాదు · Zhongshan Hospital, HIMSS లేదా ఏదైనా పేరున్న ఆరోగ్య వ్యవస్థతో ఎలాంటి అనుబంధం లేదు. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | సందర్శనల మధ్య సమయానికి ఒక కొలిచే సాధనం. పంచుకునే ఫోన్లు, తక్కువ బ్యాటరీ మరియు దూరంగా ఉన్న చికిత్సా కేంద్రాల కోసం Jamshedpur లో నిర్మించబడింది. |  |
| `footer_hospital_design` | Hospital design | ఆసుపత్రి డిజైన్ |  |
| `footer_limits` | Limits and answers | పరిమితులు మరియు సమాధానాలు |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | ఇది వైద్య పరికరం కాదు. Zhongshan Hospital, HIMSS లేదా ఏదైనా పేరున్న ఆరోగ్య వ్యవస్థతో ఎలాంటి అనుబంధం లేదు. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | ఈ బ్రౌజర్ నుంచి ఏదీ బయటికి వెళ్లదు. |  |
| `footer_product` | Product | ఉత్పత్తి |  |
| `footer_transparency` | Transparency | పారదర్శకత |  |
| `footer_verification` | Verification | ధృవీకరణ |  |
| `glucose` | Blood sugar | రక్తంలో చక్కెర |  |
| `head_404` | That page is not here. | ఆ పేజీ ఇక్కడ లేదు. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | ఆసుపత్రి ఎప్పుడూ చేరని ప్రాంతాల కోసం నిర్మించిన మూసిన చక్రం. |  |
| `head_functions` | Every function, honestly labelled. | ప్రతి విధికీ నిజాయితీగా లేబుల్ పెట్టబడింది. |  |
| `head_hospital` | The hospital is the unit of change. | ఆసుపత్రియే మార్పుకు యూనిట్. |  |
| `head_privacy` | Your record stays yours. | మీ రికార్డు మీదే ఉంటుంది. |  |
| `head_security` | What is protected, and what is not. | ఏది రక్షించబడుతుంది, ఏది కాదు. |  |
| `historyTitle` | The last 21 days | గత 21 రోజులు |  |
| `hospAudit` | Audit trail | ఆడిట్ ట్రెయిల్ |  |
| `hospCohort` | Cohort | గుంపు |  |
| `hospComplete` | complete | పూర్తయింది |  |
| `hospDisc1` | Prescribed but not dispensed | సూచించబడ్డాయి కానీ పంపిణీ చేయబడలేదు |  |
| `hospDiscrepancies` | Medication discrepancies | మందుల వ్యత్యాసాలు |  |
| `hospOpenHospital` | Open hospital control room | ఆసుపత్రి కంట్రోల్ రూమ్ తెరుచు |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | ఇక్కడ సమీక్షా ప్యాకెట్ చూడటానికి పాల్గొనే వారి యాప్ లో సుమారు ఒక వారం రికార్డు చేయండి. |  |
| `hospReviewPack` | Today's review pack | నేటి సమీక్షా ప్యాకెట్ |  |
| `hospitalBack` | Back to app | యాప్ కు తిరిగి వెళ్లు |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | అదే రికార్డు చుట్టూ రూపొందిన ఆసుపత్రి స్థాయి డిజైన్ స్కెచ్. కింది గుంపు కృత్రిమమైనది — నిజమైన రోగులు లేరు, ఆసుపత్రి అనుసంధానం లేదు, క్లినికల్ నిర్ణయాలు లేవు. |  |
| `hospitalTitle` | Hospital control room | ఆసుపత్రి కంట్రోల్ రూమ్ |  |
| `hospital_layer` | Hospital deployment layer | ఆసుపత్రి విస్తరణ స్థాయి |  |
| `hospital_s1` | Status of this document | ఈ పత్రం స్థితి |  |
| `hospital_s10` | Governance and safety | పాలన మరియు భద్రత |  |
| `hospital_s11` | Phased rollout | దశల వారీ విస్తరణ |  |
| `hospital_s12` | What would make this real | దీన్ని నిజం చేయడానికి ఏమి కావాలి |  |
| `hospital_s2` | Why the hospital, not just the phone | ఫోన్ కాక ఆసుపత్రి ఎందుకు |  |
| `hospital_s3` | Reference topology | సూచన టోపోలజీ |  |
| `hospital_s4` | Roles and access | పాత్రలు మరియు ప్రవేశం |  |
| `hospital_s5` | Coordinator console | కోఆర్డినేటర్ కన్సోల్ |  |
| `hospital_s6` | Clinician review workflow | క్లినిషియన్ సమీక్షా పనిప్రవాహం |  |
| `hospital_s7` | Closed-loop medication | మూసిన చక్ర మందుల విధానం |  |
| `hospital_s8` | Integration contract | ఇంటిగ్రేషన్ ఒప్పందం |  |
| `hospital_s9` | Identity and data flow | గుర్తింపు మరియు డేటా ప్రవాహం |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | సుమారు ఒక వారం రికార్డు ఉంచండి. ఏదైనా చూపడానికి కనీసం నాలుగు జత రోజులు అవసరం. |  |
| `insightsTitle` | What your own numbers say | మీ సొంత సంఖ్యలు ఏమి చెబుతాయి |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | భాష |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | అదే రికార్డు రూపం, అదే ఆహార లైబ్రరీ, Android బిల్డ్ యొక్క అదే నియమాలు — అన్నీ ఈ పేజీలోనే నడుస్తాయి. నిజమైన క్లినికల్ రికార్డుల కోసం కాదు. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | ఇది ఫోన్ ఆధారిత కొలిచే సాధనం నుంచి వైద్యుడి పర్యవేక్షణలోని మూసిన చక్రం వరకు ప్రాజెక్ట్ యొక్క పూర్తి నమూనా. ప్రతి విధికీ ఒక నిర్దిష్ట ముందస్తు పరిస్థితితో విడుదలైంది, డెమో లేదా రోడ్ మ్యాప్ గా గుర్తించబడింది. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | ఒక ఆసుపత్రికి దాని ఆధారంగా పనిచేయగలిగితేనే ఫోన్ రికార్డు ఒక చక్రాన్ని మూస్తుంది. ఈ పేజీ ఆ ఆసుపత్రి స్థాయికి ఒక సూచన ఆర్కిటెక్చర్. ఇది ఒక డిజైన్ బ్లూప్రింట్: ఇక్కడ ఏదీ అమలు చేయలేదు మరియు ఏ ఆసుపత్రినీ భాగస్వామిగా పేర్కొనలేదు. |  |
| `legendComplete` | Complete | పూర్తయింది |  |
| `legend_read` | How to read this map | ఈ పటాన్ని ఎలా చదవాలి |  |
| `loadSample` | Load 14-day sample | 14 రోజుల నమూనా లోడ్ చేయు |  |
| `mealBreakfast` | Breakfast | అల్పాహారం |  |
| `medsLabel` | Daily medicines (name and dose) | రోజువారీ మందులు (పేరు మరియు మోతాదు) |  |
| `medsTitle` | Medicines | మందులు |  |
| `nav_blueprint` | Blueprint | బ్లూప్రింట్ |  |
| `nav_clinician` | For clinicians | క్లినిషియన్ ల కోసం |  |
| `nav_demo` | Demo | డెమో |  |
| `nav_functions` | Functions | విధులు |  |
| `nav_hospital` | Hospital | ఆసుపత్రి |  |
| `nav_loop` | The loop | చక్రం |  |
| `nav_security` | Security | భద్రత |  |
| `nav_what` | What it does | ఇది ఏమి చేస్తుంది |  |
| `noDataToast` | No days recorded yet — add a day first. | ఇంకా ఏ రోజూ నమోదు చేయలేదు — ముందు ఒక రోజు జోడించండి. |  |
| `noMatches` | No dish matches that. | ఆ వంటకం లేదు. |  |
| `noMeds` | No medicines recorded in your profile. | మీ ప్రొఫైల్ లో మందులు నమోదు చేయబడలేదు. |  |
| `not_map` | What this map is not | ఈ పటం కాదు ఏమిటి |  |
| `note` | Anything else? (optional) | ఇంకేదైనా? (ఐచ్ఛికం) |  |
| `nothingLogged` | No record for this day. | ఈ రోజుకు రికార్డు లేదు. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | కేవలం ఈ బ్రౌజర్ లోనే భద్రపరచబడుతుంది. ఖాతా లేదు, అప్ లోడ్ లేదు. |  |
| `planAccept` | Accept | అంగీకరించు |  |
| `planAccepted` | Marked accepted in this demo. | ఈ డెమో లో అంగీకరించినట్టు గుర్తించబడింది. |  |
| `planAcceptedState` | accepted | అంగీకరించబడింది |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | ఆహార విలువలు ఇంటి భాగాల అంచనాలు, ఒక అంకె కాదు పరిధులుగా చూపబడతాయి. ధోరణి ముసాయిదాలు ఒక వ్యక్తి కొన్ని జత రోజుల నుంచి వస్తాయి — ఇవి క్లినిషియన్ కోసం సంకేతాలు, ఫలితాలు కాదు. |  |
| `planConfidenceTitle` | How sure is this? | ఇది ఎంత నమ్మకమైనది? |  |
| `planDecision` | Demo decision | డెమో నిర్ణయం |  |
| `planDraftLabel` | Draft for review | సమీక్ష కోసం ముసాయిదా |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | మార్పులు సమీక్షా సమావేశంలో క్లినిషియన్ తో జరుగుతాయి; ఈ డెమో కేవలం నిర్ణయాన్ని నమోదు చేస్తుంది. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | ముందు సుమారు ఒక వారం ఆహారం మరియు కొలతలు నమోదు చేయండి. ముసాయిదాకు కనీసం నాలుగు జత రోజులు అవసరం. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | ఆహార నిపుణుడు సమీక్షించడానికి ఒక ముసాయిదా, మీ సొంత నమోదు రోజుల నుంచి మాత్రమే రూపొందించబడింది. ఉదాహరణ మాత్రమే — సలహా కాదు. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | తక్కువ విశ్వాసం — కొన్ని జత రోజులు మాత్రమే. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | కేవలం ఉదాహరణ మాత్రమే. సలహా కాదు, రోగ నిర్ధారణ కాదు. ఈ ముసాయిదా వల్ల మీ ఆహారం లేదా మందులు మార్చకండి — నిర్ణయం అర్హత కలిగిన క్లినిషియన్ తీసుకుంటారు. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | {n} రోజుల నుంచి రూపొందించబడింది, ఆ రోజుల్లో ఆహారం మరియు ఒక కొలత రెండూ ఉన్నాయి. |  |
| `planTitle` | Weekly plan draft | వారపు ప్రణాళిక ముసాయిదా |  |
| `planTypePortion` | Portion | భాగం |  |
| `prevDay` | Previous day | మునుపటి రోజు |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | ఒక పేజీ సారాంశం కోసం ప్రింట్ డైలాగ్ లో “Save as PDF” ఎంచుకోండి. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} పూర్తయిన రోజులు · {logged} రోజులు నమోదు |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} పూర్తయిన రోజులు · {logged} రోజు నమోదు |  |
| `progressTitle` | Progress | పురోగతి |  |
| `recentDays` | Recent days | ఇటీవలి రోజులు |  |
| `removedToast` | Removed. | తొలగించబడింది. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | కేటాయించిన పాల్గొనేవారి కోసం సమీక్షా ప్యాకెట్ చూస్తారు, వాటిలో గుర్తులు మరియు మూల రోజులకు అనుసంధానించిన ముసాయిదా అంశాలు ఉంటాయి. |  |
| `roleCoordinator` | Coordinator | కోఆర్డినేటర్ |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | గుంపు పూర్తిదనం, సమీక్షా వరుస మరియు ఆడిట్ ట్రెయిల్ చూస్తారు. ప్రిస్క్రిప్షన్ మార్చలేరు. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | మందుల వ్యత్యాస వరుస మరియు సూచించిన → పంపిణీ → తీసుకున్న తనిఖీ దశలు చూస్తారు. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | ప్రతి వరుసలో ఒకే నియమం: ముందు సాఫ్ట్ వేర్ చదువుతుంది, నిర్ణయం మనిషి తీసుకుంటాడు. |  |
| `sampleTitle` | Sample data | నమూనా డేటా |  |
| `saveToday` | Save today’s record | నేటి రికార్డు భద్రపరచు |  |
| `savedToast` | Saved in this browser. | ఈ బ్రౌజర్ లో భద్రపరచబడింది. |  |
| `settingsTitle` | Settings | సెట్టింగులు |  |
| `skip` | Skip to demo | డెమోకు వెళ్లు |  |
| `skip_content` | Skip to content | కంటెంట్ కు వెళ్లు |  |
| `start` | Start recording | రికార్డింగ్ ప్రారంభించు |  |
| `status` | Status | స్థితి |  |
| `status_demo` | Demo | డెమో |  |
| `status_roadmap` | Roadmap | రోడ్ మ్యాప్ |  |
| `status_shipped` | Shipped | విడుదలైంది |  |
| `stepProfile` | 1 · Who | 1 · ఎవరు |  |
| `tabToday` | Today | నేడు |  |
| `taken` | Taken | తీసుకున్నారు |  |
| `thisWeek` | this week | ఈ వారం |  |
| `title_404` | Page not found — Khai Tracker | పేజీ కనుక్కోలేము — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | డిజిటల్-ట్రాన్స్ ఫార్మేషన్ బ్లూప్రింట్ — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — బ్రౌజర్ డెమో |  |
| `title_functions` | Function map — Khai Tracker | ఫంక్షన్ పటం — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | ఆసుపత్రి విస్తరణ బ్లూప్రింట్ — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — మీ రోజు, కొలవబడింది |  |
| `title_privacy` | Privacy — Khai Tracker | గోప్యత — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | భద్రత — Khai Tracker |  |
| `vitalsTitle` | Readings | కొలతలు |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | ఆహారం మరియు ఆరోగ్యం యొక్క రోజువారీ రికార్డు, తద్వారా మీకూ మీ వైద్యుడికీ సందర్శనల మధ్య నిజంగా ఏం జరుగుతుందో తెలుసుకోవచ్చు. ఇది రికార్డు ఉంచుతుంది. ఇది చికిత్స సలహా ఇవ్వదు. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker కి స్వాగతం |  |
| `wellbeingTitle` | How was the day? | ఆ రోజు ఎలా గడిచింది? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Telugu (te)
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
