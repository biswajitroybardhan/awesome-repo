# Malayalam (ml) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Malayalam (മലയാളം)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/ml.json` (app and site)
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

## App strings — Malayalam

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | വിവരങ്ങൾ |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nKhai Foods Pvt Ltd, Jamshedpur, Jharkhand, India ആണ് നിർമ്മാതാവ്.\n\nപങ്കിടുന്ന ഫോണുകൾ, ഇടയ്ക്കിടെയുള്ള നെറ്റ്‍വർക്ക്, വിവിധ ഇന്ത്യൻ ഭക്ഷണങ്ങൾ എന്നിവയ്ക്കായി രൂപകൽപ്പന ചെയ്തത്. ഓഫ്‍ലൈൻ ആദ്യം. മൂന്നാം കക്ഷി വിശകലനമില്ല. പരസ്യങ്ങളില്ല. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | ഉൽപ്പന്ന ഉടമ: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + ഭക്ഷണം ചേർക്കുക |  |
| `add_medicines` | Add medicines | മരുന്നുകൾ ചേർക്കുക |  |
| `already_saved` | Saved. You can keep editing and save again. | സൂക്ഷിച്ചു. നിങ്ങൾക്ക് എഡിറ്റ് ചെയ്ത് വീണ്ടും സൂക്ഷിക്കാം. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | ഒരു യോഗ്യതയുള്ള ഡോക്ടറോട് ചോദിക്കുക. |  |
| `assistant_input_ph` | Ask a question | ഒരു ചോദ്യം ചോദിക്കുക |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | ഈ ഉപകരണത്തിന്റെ സ്വന്തം സഹായ പാഠത്തിൽ നിന്ന് എടുത്ത ചോദ്യങ്ങളുടെ ഉത്തരങ്ങൾ. AI ഇല്ല, രോഗനിർണയം ഇല്ല, ഉപദേശം ഇല്ല. |  |
| `assistant_listen` | Listen | കേൾക്കുക |  |
| `assistant_send` | Send | അയയ്ക്കുക |  |
| `assistant_tab` | Guide | വഴികാട്ടി |  |
| `assistant_title` | Khai Guide | ഖായ് വഴികാട്ടി |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | ഇതിന് എന്റെ പക്കൽ ഉത്തരമില്ല. ഈ ഉപകരണം ഉപയോഗിക്കുന്നതിനെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾക്ക് മാത്രമേ ഞാൻ ഉത്തരം നൽകുന്നുള്ളൂ. |  |
| `back` | Back | പിന്നിലേക്ക് |  |
| `bp_dia` | Diastolic (lower) | ഡയസ്റ്റോളിക് (താഴെ) |  |
| `bp_sys` | Systolic (upper) | സിസ്റ്റോളിക് (മുകളിൽ) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | ട്രാക്കർ |  |
| `cancel` | Cancel | റദ്ദാക്കുക |  |
| `carbs` | Carbohydrate | കാർബോഹൈഡ്രേറ്റ് |  |
| `close` | Close | അടയ്ക്കുക |  |
| `completeness` | 21-day completeness | 21 ദിവസത്തെ പൂർണ്ണത |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | ഭക്ഷണം, മരുന്നുകൾ, ഒരു റീഡിംഗ് എന്നിവയുള്ള ദിവസങ്ങളെ 21 കൊണ്ട് ഹരിക്കുന്നു. ഓർമ്മയല്ല, സൂക്ഷിച്ച രേഖകളിൽ നിന്നാണ് എണ്ണുന്നത്. |  |
| `confirm` | Confirm | സ്ഥിരീകരിക്കുക |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | എന്ത് രേഖപ്പെടുത്തണമെന്ന് നിങ്ങൾ തീരുമാനിക്കുന്നു. നിങ്ങളുടെ രേഖകൾ ഈ ഫോണിൽ എൻക്രിപ്റ്റ് ചെയ്ത് സൂക്ഷിക്കുന്നു, നിങ്ങളുടെ കോർഡിനേറ്റർ ഒരു സെർവർ വിലാസം നൽകിയാൽ മാത്രമേ അവ Khai പഠന സെർവറിലേക്ക് അയയ്ക്കപ്പെടുകയുള്ളൂ. നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും എല്ലാം മായ്ക്കാം. ഒരു പേരും വിലാസവും Aadhaar നമ്പറും കോൺടാക്റ്റ് ലിസ്റ്റും ശേഖരിക്കപ്പെടുന്നില്ല. നിങ്ങളുടെ ഡാറ്റ മായ്ക്കുന്നതിലൂടെ നിങ്ങൾക്ക് പിൻവലിക്കാം. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | ഞാൻ ഇത് വായിച്ചു അല്ലെങ്കിൽ കേട്ടു, പങ്കെടുക്കാൻ ഞാൻ സമ്മതിക്കുന്നു. |  |
| `consent_listen` | Listen in Hindi | ഹിന്ദിയിൽ കേൾക്കുക |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | സമ്മതം പതിപ്പ് 1.0 · ഈ ഉപകരണത്തിൽ സമയസൂചനയോടൊപ്പം രേഖപ്പെടുത്തി |  |
| `consent_title` | Consent | സമ്മതം |  |
| `day_detail` | Day detail | ദിവസത്തിലെ വിവരങ്ങൾ |  |
| `days_logged` | Days logged | രേഖപ്പെടുത്തിയ ദിവസങ്ങൾ |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker ഒരു ട്രാക്കിംഗ് ഉപകരണമാണ്, വൈദ്യോപദേശമല്ല. ഇത് ഒരിക്കലും രോഗനിർണയം നടത്തുകയോ പ്രിസ്ക്രിപ്ഷൻ മാറ്റുകയോ ചെയ്യുന്നില്ല. |  |
| `done` | Done | പൂർത്തിയായി |  |
| `dose_hint` | Dose (optional) | അളവ് (ഓപ്ഷണൽ) |  |
| `edit_day` | Edit this day | ഈ ദിവസം എഡിറ്റ് ചെയ്യുക |  |
| `edit_profile` | Edit profile | പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക |  |
| `energy` | Energy | ഊർജ്ജം |  |
| `erase` | Erase my data | എന്റെ ഡാറ്റ മായ്ക്കുക |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | ഇത് ഈ ഫോണിലെ ഓരോ രേഖയും നിങ്ങളുടെ പ്രൊഫൈലും റിമൈൻഡർ ക്രമീകരണങ്ങളും ശാശ്വതമായി ഇല്ലാതാക്കുന്നു. ഇത് പഴയപടിയാക്കാൻ കഴിയില്ല. |  |
| `erase_yes` | Erase everything | എല്ലാം മായ്ക്കുക |  |
| `estimated` | estimated | ഏകദേശം |  |
| `export_backup` | Full backup (JSON) | പൂർണ്ണ ബാക്കപ്പ് (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | ആരോഗ്യ രേഖ (FHIR JSON) |  |
| `export_food` | Food log (CSV) | ഭക്ഷണ രേഖ (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | നിങ്ങൾ തിരഞ്ഞെടുക്കുന്ന ആളുകളുമായി മാത്രം പങ്കിടുക. പങ്കിടുക എന്ന് ടാപ്പ് ചെയ്യുമ്പോൾ മാത്രമേ ഫയലുകൾ ഫോണിൽ നിന്ന് പുറത്തേക്ക് പോകുകയുള്ളൂ. |  |
| `export_metrics` | Daily readings (CSV) | ദിവസേനയുള്ള റീഡിംഗുകൾ (CSV) |  |
| `export_summary` | Clinician summary (PDF) | ഡോക്ടറുടെ സംഗ്രഹം (PDF) |  |
| `export_title` | Export and share | കയറ്റുമതി ചെയ്ത് പങ്കിടുക |  |
| `export_working` | Preparing file… | ഫയൽ തയ്യാറാക്കുന്നു… |  |
| `fat` | Fat | കൊഴുപ്പ് |  |
| `food_items` | %1$d food items | %1$d ഭക്ഷണ ഇനങ്ങൾ |  |
| `food_library_title` | Food library | ഭക്ഷണ ലൈബ്രറി |  |
| `glucose` | Blood sugar | രക്തത്തിലെ പഞ്ചസാര |  |
| `glucose_fasting` | Fasting | ഉപവാസം |  |
| `glucose_pp` | After food | ഭക്ഷണത്തിന് ശേഷം |  |
| `hide_previews` | Hide this app in the recent-apps preview | അടുത്തിടെ ഉപയോഗിച്ച ആപ്പുകളുടെ പ്രിവ്യൂവിൽ ഈ ആപ്പ് മറയ്ക്കുക |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | നിറഞ്ഞ ചതുരം എന്നാൽ ഒരു രേഖയുണ്ട്. അവലോകനം ചെയ്യാനോ തിരുത്താനോ ഏതെങ്കിലും ദിവസം ടാപ്പ് ചെയ്യുക. |  |
| `history_title` | Last 21 days | കഴിഞ്ഞ 21 ദിവസങ്ങൾ |  |
| `insight_descriptive` | description | വിവരണം |  |
| `insight_early` | early signal | പ്രാരംഭ സൂചന |  |
| `insight_moderate` | moderate signal | മിതമായ സൂചന |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | ഇവ നിങ്ങളുടെ സ്വന്തം രേഖകളെക്കുറിച്ചുള്ള നിരീക്ഷണങ്ങളാണ്; രോഗനിർണയമോ ചികിത്സാ ശുപാർശയോ അല്ല. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | ഒരു ആഴ്ച രേഖപ്പെടുത്തുന്നത് തുടരുക. കുറഞ്ഞത് അഞ്ച് ദിവസത്തെ റീഡിംഗുകളുണ്ടായാൽ പാറ്റേണുകൾ പ്രത്യക്ഷപ്പെടും. |  |
| `insights_title` | What your own data shows | നിങ്ങളുടെ സ്വന്തം ഡാറ്റ എന്ത് കാണിക്കുന്നു |  |
| `kcal` | Energy | ഊർജ്ജം |  |
| `language` | Language / भाषा | ഭാഷ / भाषा |  |
| `loading` | Loading… | ലോഡ് ചെയ്യുന്നു… |  |
| `meal_breakfast` | Breakfast | പ്രാതൽ |  |
| `meal_dinner` | Dinner | അത്താഴം |  |
| `meal_lunch` | Lunch | ഉച്ചഭക്ഷണം |  |
| `meal_snacks` | Snacks & drinks | ലഘുഭക്ഷണവും പാനീയങ്ങളും |  |
| `meds_changed` | Changed | മാറ്റി |  |
| `meds_empty` | No medicines listed yet. | ഇതുവരെ മരുന്നുകൾ പട്ടികപ്പെടുത്തിയിട്ടില്ല. |  |
| `meds_hint` | Tick what you actually did today. | ഇന്ന് നിങ്ങൾ യഥാർത്ഥത്തിൽ ചെയ്തത് ടിക്ക് ചെയ്യുക. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | നിങ്ങളുടെ പ്രൊഫൈലിൽ മരുന്നുകളൊന്നും പട്ടികപ്പെടുത്തിയിട്ടില്ല. അവ ഒരിക്കൽ ചേർത്ത്, ഓരോ ദിവസവും ടിക്ക് ചെയ്യുക. |  |
| `meds_skipped` | Skipped | ഒഴിവാക്കി |  |
| `meds_summary` | %1$d of %2$d medicines taken | %2$d മരുന്നുകളിൽ %1$d കഴിച്ചു |  |
| `meds_taken` | Taken | കഴിച്ചു |  |
| `meds_title` | Medicines | മരുന്നുകൾ |  |
| `mood` | Mood | മാനസികാവസ്ഥ |  |
| `no` | No | ഇല്ല |  |
| `no_food_yet` | Nothing added yet | ഇതുവരെ ഒന്നും ചേർത്തിട്ടില്ല |  |
| `note` | Anything else? (optional) | മറ്റെന്തെങ്കിലും? (ഓപ്ഷണൽ) |  |
| `nothing_logged` | No entry for this day. | ഈ ദിവസത്തേക്ക് രേഖയില്ല. |  |
| `notif_channel` | Daily reminder | ദിവസേനയുള്ള റിമൈൻഡർ |  |
| `notif_channel_desc` | One daily reminder to record your day. | നിങ്ങളുടെ ദിവസം രേഖപ്പെടുത്താൻ ഒരു ദിവസേനയുള്ള റിമൈൻഡർ. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | രണ്ട് ശാന്തമായ മിനിറ്റുകൾ: ഇന്ന് എന്ത് കഴിച്ചു, എന്ത് അളന്നു? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | ദിവസേനയുള്ള റിമൈൻഡർ എത്താൻ അറിയിപ്പുകൾ അനുവദിക്കുക. |  |
| `ok` | OK | ശരി |  |
| `onboard_add_med` | + Add another | + മറ്റൊന്ന് ചേർക്കുക |  |
| `onboard_age` | Age group | പ്രായ വിഭാഗം |  |
| `onboard_age_ph` | Select | തിരഞ്ഞെടുക്കുക |  |
| `onboard_code` | Participant code | പങ്കെടുക്കുന്നവരുടെ കോഡ് |  |
| `onboard_code_ph` | e.g. K01 | ഉദാ. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | ആരോഗ്യാവസ്ഥകൾ (ബാധകമായ എല്ലാം ടിക്ക് ചെയ്യുക) |  |
| `onboard_error_age` | Please choose an age group. | ദയവായി ഒരു പ്രായ വിഭാഗം തിരഞ്ഞെടുക്കുക. |  |
| `onboard_error_code` | Please enter your participant code. | ദയവായി നിങ്ങളുടെ പങ്കെടുക്കുന്നവരുടെ കോഡ് നൽകുക. |  |
| `onboard_error_consent` | Please confirm consent to continue. | തുടരാൻ ദയവായി സമ്മതം സ്ഥിരീകരിക്കുക. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | ദിവസേനയുള്ള ഭക്ഷണ-ആരോഗ്യ രേഖ, സന്ദർശനങ്ങൾക്കിടയിൽ എന്താണ് സംഭവിക്കുന്നതെന്ന് നിങ്ങൾക്കും നിങ്ങളുടെ ഡോക്ടർക്കും കാണാൻ സഹായിക്കുന്നു. ഇത് ട്രാക്കിംഗ് ഉപകരണമാണ്, വൈദ്യോപദേശമല്ല. |  |
| `onboard_meds` | Daily medicines (name and dose) | ദിവസേനയുള്ള മരുന്നുകൾ (പേരും അളവും) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | ഉദാ. Metformin 500 mg |  |
| `onboard_start` | Start tracking | ട്രാക്കിംഗ് ആരംഭിക്കുക |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker ലേക്ക് സ്വാഗതം |  |
| `pending` | Pending sync | സിൻക് ബാക്കിയുണ്ട് |  |
| `per_portion` | per portion | ഓരോ ഭാഗത്തിനും |  |
| `pick_day` | Pick a day above. | മുകളിൽ നിന്ന് ഒരു ദിവസം തിരഞ്ഞെടുക്കുക. |  |
| `pin_change` | Change PIN | PIN മാറ്റുക |  |
| `pin_enter` | Enter your PIN | നിങ്ങളുടെ PIN നൽകുക |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN-ൽ കൃത്യം 4 അക്കങ്ങൾ ഉണ്ടായിരിക്കണം. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | കുടുംബത്തിൽ പങ്കിടുന്ന ഫോണിൽ ഉപയോഗപ്രദം. ആപ്പ് തുറക്കുമ്പോൾ 4 അക്ക PIN ചോദിക്കും, ഒരു മിനിറ്റ് പിന്നിൽ കഴിഞ്ഞാൽ വീണ്ടും ചോദിക്കും. |  |
| `pin_lock` | App lock | ആപ്പ് ലോക്ക് |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | 4 അക്ക PIN തിരഞ്ഞെടുക്കുക |  |
| `pin_remove` | Remove PIN | PIN നീക്കം ചെയ്യുക |  |
| `pin_removed` | PIN removed. | PIN നീക്കം ചെയ്തു. |  |
| `pin_saved` | PIN saved. | PIN സൂക്ഷിച്ചു. |  |
| `pin_set` | Set PIN | PIN സജ്ജമാക്കുക |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN തെറ്റാണ്. വീണ്ടും ശ്രമിക്കുക. |  |
| `portion_q` | Portion | അളവ് |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | നിങ്ങളുടെ രേഖകൾ ഈ ഫോണിന്റെ സുരക്ഷിത കീ സ്റ്റോറിലുള്ള ഒരു കീ ഉപയോഗിച്ച് ഈ ഉപകരണത്തിൽ എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു. നിങ്ങൾ ഒരു പഠന സെർവർ സജ്ജമാക്കിയില്ലെങ്കിൽ ഒന്നും എവിടേക്കും അയയ്ക്കപ്പെടുന്നില്ല. വിശകലനമില്ല, പരസ്യങ്ങളുമില്ല. |  |
| `privacy_title` | Privacy | സ്വകാര്യത |  |
| `profile` | Profile and medicines | പ്രൊഫൈലും മരുന്നുകളും |  |
| `progress_title` | Progress | പുരോഗതി |  |
| `protein` | Protein | പ്രോട്ടീൻ |  |
| `pulse` | Pulse | പൾസ് |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | ഒരേ വിഭവം വീടിനനുസരിച്ച് മാറുന്നതിനാൽ ഏകദേശങ്ങൾ പരിധികളായി കാണിക്കുന്നു. ഇവ കലോറി എണ്ണാനുള്ളതല്ല, പാറ്റേണുകൾ കണ്ടെത്താനുള്ളതാണ്. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | ഈ ഫോണിൽ ഹിന്ദി സംഭാഷണം ഇൻസ്റ്റാൾ ചെയ്തിട്ടില്ല. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | നിങ്ങൾ തിരഞ്ഞെടുക്കുന്ന സമയത്ത് ശാന്തമായ ഒരു അറിയിപ്പ്. തുടർച്ചയെക്കുറിച്ച് അപമാനിക്കില്ല, പരസ്യങ്ങളില്ല. |  |
| `reminder_off` | Reminder off | റിമൈൻഡർ ഓഫ് |  |
| `reminder_on` | Reminder on | റിമൈൻഡർ ഓൺ |  |
| `reminder_time` | Reminder time | റിമൈൻഡർ സമയം |  |
| `reminders` | Daily reminder | ദിവസേനയുള്ള റിമൈൻഡർ |  |
| `remove` | Remove | നീക്കം ചെയ്യുക |  |
| `remove_confirm` | Remove this item? | ഈ ഇനം നീക്കം ചെയ്യണോ? |  |
| `save` | Save | സൂക്ഷിക്കുക |  |
| `save_failed` | Could not save. Please try again. | സൂക്ഷിക്കാനായില്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക. |  |
| `save_today` | Save today | ഇന്നത്തേത് സൂക്ഷിക്കുക |  |
| `saved` | Saved on this device. Encrypted. | ഈ ഉപകരണത്തിൽ സൂക്ഷിച്ചു. എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു. |  |
| `search_food` | Search a dish in English or Hindi | ഇംഗ്ലീഷിലോ ഹിന്ദിയിലോ ഒരു വിഭവം തിരയുക |  |
| `settings_title` | Settings | ക്രമീകരണങ്ങൾ |  |
| `share` | Share | പങ്കിടുക |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | ഈ ഫോണിൽ ഫയൽ സ്വീകരിക്കാൻ കഴിയുന്ന ആപ്പില്ല. ഒരു മെയ്ൽ അല്ലെങ്കിൽ ഫയൽ ആപ്പ് ഇൻസ്റ്റാൾ ചെയ്ത് വീണ്ടും ശ്രമിക്കുക. |  |
| `sleep` | Sleep last night (hours) | ഇന്നലത്തെ ഉറക്കം (മണിക്കൂറുകൾ) |  |
| `sodium` | Salt (sodium) | ഉപ്പ് (സോഡിയം) |  |
| `streak` | Day streak | ദിവസങ്ങളുടെ തുടർച്ച |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | അത് ഒരു സാധുവായ വിലാസം പോലെ തോന്നുന്നില്ല. |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | സിൻക് പരാജയപ്പെട്ടു. രേഖകൾ ഈ ഫോണിൽ സുരക്ഷിതമാണ്, വീണ്ടും ശ്രമിക്കും. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | ഓപ്ഷണൽ. നിങ്ങളുടെ കോർഡിനേറ്റർ ഒരു സെർവർ വിലാസം നൽകും. എല്ലാം ഈ ഫോണിൽ മാത്രം സൂക്ഷിക്കാൻ ബ്ലാങ്ക് ആക്കി വിടുക. |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | ഒരു HTTPS വിലാസം ഉപയോഗിക്കുക. ആരോഗ്യ ഡാറ്റ ഒരിക്കലും എൻക്രിപ്റ്റ് ചെയ്യാതെ അയയ്ക്കപ്പെടുന്നില്ല. |  |
| `sync_never` | Not synced yet. | ഇതുവരെ സിൻക് ചെയ്തിട്ടില്ല. |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | ഇപ്പോൾ സിൻക് ചെയ്യുക |  |
| `sync_offline` | No internet right now. Entries queued. | ഇപ്പോൾ ഇന്റർനെറ്റില്ല. രേഖകൾ ക്യൂവിൽ നിൽക്കുന്നു. |  |
| `sync_ok` | Synced. All entries are on the server. | സിൻക് ചെയ്തു. എല്ലാ രേഖകളും സെർവറിലുണ്ട്. |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | വിലാസം സൂക്ഷിക്കുക |  |
| `sync_title` | Institution sync | പഠന സിൻക്രൊണൈസേഷൻ |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | സെർവർ വിലാസം |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | ചരിത്രം |  |
| `tab_progress` | Progress | പുരോഗതി |  |
| `tab_settings` | Settings | ക്രമീകരണങ്ങൾ |  |
| `tab_today` | Today | ഇന്ന് |  |
| `this_week` | This week | ഈ ആഴ്ച |  |
| `todays_total` | Today\'s estimate | ഇന്നത്തെ ഏകദേശം |  |
| `total_carbs` | Carbohydrate | കാർബോഹൈഡ്രേറ്റ് |  |
| `uncertainty` | Range, not a single number | ഒരൊറ്റ അക്കമല്ല, ഒരു പരിധി |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | നിങ്ങൾ അളന്നത് മാത്രം നൽകുക. ബ്ലാങ്ക് എന്നാൽ അളക്കാത്തത് എന്നാണർത്ഥം; അതും ഉപയോഗപ്രദമായ വിവരമാണ്. |  |
| `vitals_title` | Readings | റീഡിംഗുകൾ |  |
| `weight` | Weight (kg) | ഭാരം (kg) |  |
| `wellbeing_title` | How was the day? | ദിവസം എങ്ങനെയായിരുന്നു? |  |
| `yes` | Yes | അതെ |  |

## Site strings — Malayalam

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | ഈ ഡെമോയെക്കുറിച്ച് |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK ഡൗൺലോഡ് ചെയ്യുക |  |
| `action_menu` | Open menu | മെനു തുറക്കുക |  |
| `action_theme` | Switch theme | ഥീം മാറ്റുക |  |
| `addFood` | Add food | ഭക്ഷണം ചേർക്കുക |  |
| `addMed` | + Add another | + മറ്റൊന്ന് ചേർക്കുക |  |
| `adherence` | medicines taken | മരുന്നുകൾ കഴിച്ചു |  |
| `ageLabel` | Age band | പ്രായ ഗണം |  |
| `allFoods` | All | എല്ലാം |  |
| `askClinician` | Ask a qualified clinician. | ഒരു യോഗ്യതയുള്ള ഡോക്ടറോട് ചോദിക്കുക. |  |
| `assistantInputPh` | Ask a question | ഒരു ചോദ്യം ചോദിക്കുക |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | ഈ ഉപകരണത്തിന്റെ സ്വന്തം സഹായ പാഠത്തിൽ നിന്ന് എടുത്ത ചോദ്യങ്ങളുടെ ഉത്തരങ്ങൾ. AI ഇല്ല, രോഗനിർണയം ഇല്ല, ഉപദേശം ഇല്ല. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | ഡിസ്പ്ലെ ഭാഷ മാറ്റുമ്പോൾ ലേബലുകൾ മാത്രമേ മാറുന്നുള്ളൂ. രേഖപ്പെടുത്തിയ മൂല്യങ്ങൾ സ്ഥിരമായ കോഡുകളായി തുടരുന്നതിനാൽ ഒരു ദിവസവും വീണ്ടും എഴുതപ്പെടുന്നില്ല. |  |
| `assistantListen` | Listen | കേൾക്കുക |  |
| `assistantNav` | Guide | വഴികാട്ടി |  |
| `assistantSend` | Send | അയയ്ക്കുക |  |
| `assistantTitle` | Khai Guide | ഖായ് വഴികാട്ടി |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | ഇതിന് എന്റെ പക്കൽ ഉത്തരമില്ല. ഈ ഉപകരണം ഉപയോഗിക്കുന്നതിനെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾക്ക് മാത്രമേ ഞാൻ ഉത്തരം നൽകുന്നുള്ളൂ. |  |
| `avgBp` | avg BP | ശരാശരി BP |  |
| `back` | Back | പിന്നിലേക്ക് |  |
| `bmiNote` | Not a diagnosis. | രോഗനിർണയമല്ല. |  |
| `bpSys` | Systolic | സിസ്റ്റോളിക് |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | ഇതൊരു പ്രഖ്യാപനമല്ല, ബ്ലൂപ്രിന്റാണെന്ന് വായിക്കുക: ഒരു ആശുപത്രി വിന്യാസവും പൈലറ്റും അംഗീകാരവും പങ്കാളിത്തവും അവകാശപ്പെടുന്നില്ല. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | സത്യസന്ധമായ വരി: പങ്കാളി ആപ്പും ബ്രൗസർ ഡെമോയും ഇന്ന് നിലവിലുണ്ട്. ഇവിടെയുള്ള ഓരോ ആശുപത്രി ഘടകവും ഒരു രൂപകൽപ്പന നിർദ്ദേശമാണ്. |  |
| `codeLabel` | Participant code | പങ്കെടുക്കുന്നവരുടെ കോഡ് |  |
| `codeShort` | Code | കോഡ് |  |
| `completeDays` | complete days | പൂർണ്ണ ദിവസങ്ങൾ |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | ഭക്ഷണം, മരുന്നിന്റെ സ്ഥിതി (നിർദ്ദേശിച്ചിട്ടുണ്ടെങ്കിൽ), കുറഞ്ഞത് ഒരു അളവെടുപ്പ് എന്നിവയുള്ള ദിവസങ്ങളെ 21 കൊണ്ട് ഹരിക്കുന്നു. ഓർമ്മയല്ല, സൂക്ഷിച്ച രേഖകളിൽ നിന്നാണ് എണ്ണുന്നത്. |  |
| `conditionsLabel` | Conditions (select all that apply) | ആരോഗ്യാവസ്ഥകൾ (ബാധകമായ എല്ലാം തിരഞ്ഞെടുക്കുക) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | എന്ത് നൽകണമെന്ന് നിങ്ങൾ തീരുമാനിക്കുന്നു. ഈ ഡെമോയിൽ എല്ലാം ഈ ബ്രൗസറിന്റെ പ്രാദേശിക സംഭരണിയിലാണ് ഉള്ളത് — ഒരു സെർവർ ഇല്ല, ഒന്നും അപ്‍ലോഡ് ചെയ്യപ്പെടുന്നില്ല. Android ആപ്പിൽ രേഖകൾ ഫോണിൽ എൻക്രിപ്റ്റ് ചെയ്ത് സൂക്ഷിക്കുന്നു. ഒരു പേരും വിലാസവും സർക്കാർ ഐഡിയും കോൺടാക്റ്റ് ലിസ്റ്റും ശേഖരിക്കപ്പെടുന്നില്ല. നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും എല്ലാം മായ്ക്കാം. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | ഞാൻ ഇത് വായിച്ചു, ഈ ബ്രൗസർ ഡെമോ യഥാർത്ഥ ക്ലിനിക്കൽ രേഖകൾക്കുള്ളതല്ലെന്ന് ഞാൻ മനസ്സിലാക്കി. |  |
| `consentTitle` | Consent | സമ്മതം |  |
| `dayComplete` | Day complete | ദിവസം പൂർത്തിയായി |  |
| `demoBadge` | Demo | ഡെമോ |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | ഡെമോ മാത്രം · വൈദ്യ ഉപകരണമല്ല · യഥാർത്ഥ ക്ലിനിക്കൽ രേഖകൾക്കുള്ളതല്ല. |  |
| `downloadToast` | {name} downloaded. | {name} ഡൗൺലോഡ് ചെയ്തു. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | ഡ്രാഫ്റ്റ് വിവർത്തനം — ക്ലിനിക്കൽ ഉപയോഗത്തിന് മുമ്പ് മാതൃഭാഷക്കാരുടെ അവലോകനം ആവശ്യമാണ്. |  |
| `early` | early signal | പ്രാരംഭ സൂചന |  |
| `eraseBtn` | Erase my data | എന്റെ ഡാറ്റ മായ്ക്കുക |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | ഇത് ഈ ബ്രൗസറിൽ നിന്ന് പ്രൊഫൈൽ, ഓരോ ദിവസവും ഓരോ ക്രമീകരണവും നീക്കം ചെയ്യുന്നു. ഇത് പഴയപടിയാക്കാൻ കഴിയില്ല. |  |
| `eraseTitle` | Erase everything | എല്ലാം മായ്ക്കുക |  |
| `eraseYes` | Erase everything | എല്ലാം മായ്ക്കുക |  |
| `errCode` | Please enter your participant code. | ദയവായി നിങ്ങളുടെ പങ്കെടുക്കുന്നവരുടെ കോഡ് നൽകുക. |  |
| `errConsent` | Consent is required to continue. | തുടരാൻ സമ്മതം ആവശ്യമാണ്. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | ഉയർന്ന റീഡിംഗുകൾ സംഭാഷണത്തിനായി അടയാളപ്പെടുത്തുന്നു. ആപ്പ് ഒരിക്കലും രോഗനിർണയം നടത്തുകയോ പ്രിസ്ക്രിപ്ഷൻ മാറ്റുകയോ ചെയ്യുന്നില്ല. |  |
| `escalateNone` | No threshold flags in the recent record. | അടുത്തകാലത്തെ രേഖയിൽ ത്രെഷോൾഡ് സൂചനകളൊന്നുമില്ല. |  |
| `escalateTitle` | Flags for the clinician | ഡോക്ടർ ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ |  |
| `estTotal` | Today’s estimate | ഇന്നത്തെ ഏകദേശം |  |
| `exportBackup` | Complete backup (JSON) | പൂർണ്ണ ബാക്കപ്പ് (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | ആരോഗ്യ രേഖ (FHIR R4) |  |
| `exportFood` | Food log (CSV) | ഭക്ഷണ രേഖ (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | ദിവസേനയുള്ള അളവുകൾ (CSV) |  |
| `exportPrint` | Clinician summary (print) | ഡോക്ടറുടെ സംഗ്രഹം (പ്രിന്റ്) |  |
| `exportsTitle` | Export & share | കയറ്റുമതിയും പങ്കിടലും |  |
| `eyebrow_capability` | Capability map | കഴിവ് ഭൂപടം |  |
| `eyebrow_demo` | Browser demo · no install | ബ്രൗസർ ഡെമോ · ഇൻസ്റ്റാളേഷൻ ആവശ്യമില്ല |  |
| `eyebrow_hospital` | Hospital deployment · reference design | ആശുപത്രി വിന്യാസം · റഫറൻസ് രൂപകൽപ്പന |  |
| `fasting` | Fasting | ഉപവാസം |  |
| `foodItemsOne` | 1 item | 1 ഇനം |  |
| `foodLogged` | Food | ഭക്ഷണം |  |
| `foodPickerTitle` | Choose a dish | ഒരു വിഭവം തിരഞ്ഞെടുക്കുക |  |
| `footerNote` | Nothing leaves this browser. | ഈ ബ്രൗസറിൽ നിന്ന് ഒന്നും പുറത്തേക്ക് പോകുന്നില്ല. |  |
| `footer_browser_demo` | Browser demo | ബ്രൗസർ ഡെമോ |  |
| `footer_contact` | Contact | ബന്ധപ്പെടുക |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | ഡെമോ മാത്രം · വൈദ്യ ഉപകരണമല്ല · Zhongshan Hospital, HIMSS അല്ലെങ്കിൽ പേരെടുത്തപ്പെട്ട ഏതെങ്കിലും ആരോഗ്യ സംവിധാനവുമായി ഒരു ബന്ധവുമില്ല. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | സന്ദർശനങ്ങൾക്കിടയിലെ സമയത്തിനായുള്ള ഒരു അളക്കൽ ഉപകരണം. പങ്കിടുന്ന ഫോണുകൾ, കുറഞ്ഞ ബാറ്ററി, ദൂരെയുള്ള ക്ലിനിക്കുകൾ എന്നിവയ്ക്കായി Jamshedpur ൽ നിർമ്മിച്ചത്. |  |
| `footer_hospital_design` | Hospital design | ആശുപത്രി രൂപകൽപ്പന |  |
| `footer_limits` | Limits and answers | പരിധികളും ഉത്തരങ്ങളും |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | ഇത് ഒരു വൈദ്യ ഉപകരണമല്ല. Zhongshan Hospital, HIMSS അല്ലെങ്കിൽ പേരെടുത്തപ്പെട്ട ഏതെങ്കിലും ആരോഗ്യ സംവിധാനവുമായി ഒരു ബന്ധവുമില്ല. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | ഈ ബ്രൗസറിൽ നിന്ന് ഒന്നും പുറത്തേക്ക് പോകുന്നില്ല. |  |
| `footer_product` | Product | ഉൽപ്പന്നം |  |
| `footer_transparency` | Transparency | സുതാര്യത |  |
| `footer_verification` | Verification | പരിശോധന |  |
| `glucose` | Blood sugar | രക്തത്തിലെ പഞ്ചസാര |  |
| `head_404` | That page is not here. | ആ പേജ് ഇവിടെയില്ല. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | ഒരു അടഞ്ഞ ചക്രം, ആശുപത്രി ഒരിക്കലും എത്താത്ത സ്ഥലങ്ങൾക്കായി നിർമ്മിച്ചത്. |  |
| `head_functions` | Every function, honestly labelled. | ഓരോ പ്രവർത്തനവും, സത്യസന്ധമായി അടയാളപ്പെടുത്തി. |  |
| `head_hospital` | The hospital is the unit of change. | ആശുപത്രിയാണ് മാറ്റത്തിന്റെ യൂണിറ്റ്. |  |
| `head_privacy` | Your record stays yours. | നിങ്ങളുടെ രേഖ നിങ്ങളുടേതായി തുടരുന്നു. |  |
| `head_security` | What is protected, and what is not. | എന്താണ് സംരക്ഷിക്കപ്പെടുന്നത്, എന്തല്ല. |  |
| `historyTitle` | The last 21 days | കഴിഞ്ഞ 21 ദിവസങ്ങൾ |  |
| `hospAudit` | Audit trail | ഓഡിറ്റ് ട്രെയിൽ |  |
| `hospCohort` | Cohort | ഗണം |  |
| `hospComplete` | complete | പൂർണ്ണം |  |
| `hospDisc1` | Prescribed but not dispensed | നിർദ്ദേശിച്ചു എന്നാൽ നൽകിയില്ല |  |
| `hospDiscrepancies` | Medication discrepancies | മരുന്ന് വ്യത്യാസങ്ങൾ |  |
| `hospOpenHospital` | Open hospital control room | ആശുപത്രി നിയന്ത്രണ മുറി തുറക്കുക |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | ഇവിടെ ഒരു അവലോകന പാക്കറ്റ് കാണാൻ പങ്കാളി ആപ്പിൽ ഏകദേശം ഒരു ആഴ്ച രേഖപ്പെടുത്തുക. |  |
| `hospReviewPack` | Today's review pack | ഇന്നത്തെ അവലോകന പാക്കറ്റ് |  |
| `hospitalBack` | Back to app | ആപ്പിലേക്ക് മടങ്ങുക |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | അതേ രേഖയ്ക്ക് ചുറ്റും നിർമ്മിച്ച ആശുപത്രി പാളിയുടെ രൂപകൽപ്പന രേഖാചിത്രം. താഴെയുള്ള ഗണം കൃത്രിമമാണ് — യഥാർത്ഥ രോഗികളില്ല, ആശുപത്രി ബന്ധമില്ല, ക്ലിനിക്കൽ തീരുമാനങ്ങളില്ല. |  |
| `hospitalTitle` | Hospital control room | ആശുപത്രി നിയന്ത്രണ മുറി |  |
| `hospital_layer` | Hospital deployment layer | ആശുപത്രി വിന്യാസ പാളി |  |
| `hospital_s1` | Status of this document | ഈ രേഖയുടെ സ്ഥിതി |  |
| `hospital_s10` | Governance and safety | ഭരണവും സുരക്ഷയും |  |
| `hospital_s11` | Phased rollout | ഘട്ടം ഘട്ടമായ വിന്യാസം |  |
| `hospital_s12` | What would make this real | ഇത് യഥാർത്ഥമാക്കാൻ എന്ത് വേണം |  |
| `hospital_s2` | Why the hospital, not just the phone | ഫോണല്ല, ആശുപത്രി എന്തിന് |  |
| `hospital_s3` | Reference topology | റഫറൻസ് ടോപ്പോളജി |  |
| `hospital_s4` | Roles and access | റോളുകളും പ്രവേശനവും |  |
| `hospital_s5` | Coordinator console | കോർഡിനേറ്റർ കൺസോൾ |  |
| `hospital_s6` | Clinician review workflow | ഡോക്ടറുടെ അവലോകന പ്രവാഹം |  |
| `hospital_s7` | Closed-loop medication | അടഞ്ഞ ചക്ര മരുന്നുകൾ |  |
| `hospital_s8` | Integration contract | സംയോജന കരാർ |  |
| `hospital_s9` | Identity and data flow | ഐഡന്റിറ്റിയും ഡാറ്റാ പ്രവാഹവും |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | ഏകദേശം ഒരു ആഴ്ച രേഖ സൂക്ഷിക്കുക. എന്തെങ്കിലും കാണിക്കാൻ കുറഞ്ഞത് നാല് ജോടി ദിവസങ്ങൾ ആവശ്യമാണ്. |  |
| `insightsTitle` | What your own numbers say | നിങ്ങളുടെ സ്വന്തം സംഖ്യകൾ എന്ത് പറയുന്നു |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | ഭാഷ |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | അതേ രേഖാ രൂപം, അതേ ഭക്ഷണ ലൈബ്രറി, Android നിർമ്മാണത്തിലെന്നപോലെ അതേ നിയമങ്ങൾ, ഈ പേജിൽ മാത്രം പ്രവർത്തിക്കുന്നു. യഥാർത്ഥ ക്ലിനിക്കൽ രേഖകൾക്കുള്ളതല്ല. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | ഫോൺ അടിസ്ഥാനമായ അളക്കൽ ഉപകരണത്തിൽ നിന്ന് ഡോക്ടറുടെ മേൽനോട്ടത്തിലുള്ള അടഞ്ഞ ചക്രം വരെ പദ്ധതി പിന്തുടരുന്ന മുഴുവൻ മാതൃകയാണിത്. ഓരോ പ്രവർത്തനവും Shipped, Demo അല്ലെങ്കിൽ Roadmap ആയി, പേരെടുത്തപ്പെട്ട ഒരു മുൻവ്യവസ്ഥയോടൊപ്പം അടയാളപ്പെടുത്തിയിരിക്കുന്നു. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | ഒരു ക്ലിനിക്കിന് അതിന്മേൽ പ്രവർത്തിക്കാൻ കഴിയുമ്പോൾ മാത്രമേ ഫോൺ രേഖ ചക്രം അടയ്ക്കുകയുള്ളൂ. ഈ പേജ് ആ ആശുപത്രി പാളിക്കുള്ള ഒരു റഫറൻസ് ആർക്കിടെക്ചറാണ്. ഇതൊരു രൂപകൽപ്പന ബ്ലൂപ്രിന്റാണ്: ഇവിടെ ഒന്നും വിന്യസിച്ചിട്ടില്ല, ഒരു ആശുപത്രിയെയും പങ്കാളിയായി പേരെടുത്തിട്ടുമില്ല. |  |
| `legendComplete` | Complete | പൂർണ്ണം |  |
| `legend_read` | How to read this map | ഈ ഭൂപടം എങ്ങനെ വായിക്കാം |  |
| `loadSample` | Load 14-day sample | 14 ദിവസത്തെ സാമ്പിൾ ലോഡ് ചെയ്യുക |  |
| `mealBreakfast` | Breakfast | പ്രാതൽ |  |
| `medsLabel` | Daily medicines (name and dose) | ദിവസേനയുള്ള മരുന്നുകൾ (പേരും അളവും) |  |
| `medsTitle` | Medicines | മരുന്നുകൾ |  |
| `nav_blueprint` | Blueprint | ബ്ലൂപ്രിന്റ് |  |
| `nav_clinician` | For clinicians | ഡോക്ടർമാർക്ക് |  |
| `nav_demo` | Demo | ഡെമോ |  |
| `nav_functions` | Functions | പ്രവർത്തനങ്ങൾ |  |
| `nav_hospital` | Hospital | ആശുപത്രി |  |
| `nav_loop` | The loop | ചക്രം |  |
| `nav_security` | Security | സുരക്ഷ |  |
| `nav_what` | What it does | അത് ചെയ്യുന്നത് |  |
| `noDataToast` | No days recorded yet — add a day first. | ഇതുവരെ ദിവസങ്ങളൊന്നും രേഖപ്പെടുത്തിയിട്ടില്ല — ആദ്യം ഒരു ദിവസം ചേർക്കുക. |  |
| `noMatches` | No dish matches that. | ആ വിഭവം കണ്ടെത്തിയില്ല. |  |
| `noMeds` | No medicines recorded in your profile. | നിങ്ങളുടെ പ്രൊഫൈലിൽ മരുന്നുകളൊന്നും രേഖപ്പെടുത്തിയിട്ടില്ല. |  |
| `not_map` | What this map is not | ഈ ഭൂപടം എന്തല്ല |  |
| `note` | Anything else? (optional) | മറ്റെന്തെങ്കിലും? (ഓപ്ഷണൽ) |  |
| `nothingLogged` | No record for this day. | ഈ ദിവസത്തേക്ക് രേഖയില്ല. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | ഈ ബ്രൗസറിൽ മാത്രം സംഭരിക്കുന്നു. അക്കൗണ്ടില്ല, അപ്‍ലോഡ് ഇല്ല. |  |
| `planAccept` | Accept | അംഗീകരിക്കുക |  |
| `planAccepted` | Marked accepted in this demo. | ഈ ഡെമോയിൽ അംഗീകരിച്ചതായി അടയാളപ്പെടുത്തി. |  |
| `planAcceptedState` | accepted | അംഗീകരിച്ചു |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | ഭക്ഷണ മൂല്യങ്ങൾ വീട്ടിലെ അളവിന്റെ ഏകദേശങ്ങളാണ്, തൂക്കിയളക്കുകയല്ല; അവ പരിധികളായി കാണിക്കുന്നു. പാറ്റേൺ ഡ്രാഫ്റ്റുകൾ ഒരു വ്യക്തിയുടെ കുറച്ച് ജോടി ദിവസങ്ങളിൽ നിന്നാണ് — ഡോക്ടർക്കുള്ള ചോദ്യങ്ങളാണ്, കണ്ടെത്തലുകളല്ല. |  |
| `planConfidenceTitle` | How sure is this? | ഇത് എത്ര ഉറപ്പുള്ളതാണ്? |  |
| `planDecision` | Demo decision | ഡെമോ തീരുമാനം |  |
| `planDraftLabel` | Draft for review | അവലോകനത്തിനുള്ള ഡ്രാഫ്റ്റ് |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | എഡിറ്റിംഗ് അവലോകന യോഗത്തിൽ ഡോക്ടറോടൊപ്പം നടക്കുന്നു; ഈ ഡെമോ തീരുമാനം മാത്രം രേഖപ്പെടുത്തുന്നു. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | ആദ്യം ഏകദേശം ഒരു ആഴ്ച ഭക്ഷണവും അളവുകളും രേഖപ്പെടുത്തുക. ഡ്രാഫ്റ്റിന് കുറഞ്ഞത് നാല് ജോടി ദിവസങ്ങൾ ആവശ്യമാണ്. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | ഒരു ഡയറ്റീഷ്യൻ അവലോകനം ചെയ്യാൻ, നിങ്ങളുടെ സ്വന്തം രേഖപ്പെടുത്തിയ ദിവസങ്ങളിൽ നിന്ന് മാത്രം തയ്യാറാക്കിയ ഡ്രാഫ്റ്റ്. ഉദാഹരണത്തിന് — ഉപദേശമല്ല. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | കുറഞ്ഞ ആത്മവിശ്വാസം — കുറച്ച് ജോടി ദിവസങ്ങൾ മാത്രം. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | ഉദാഹരണത്തിന് മാത്രം. ഉപദേശമല്ല, രോഗനിർണയവുമല്ല. ഈ ഡ്രാഫ്റ്റ് കാരണം ഭക്ഷണമോ മരുന്നുകളോ മാറ്റരുത് — യോഗ്യതയുള്ള ഡോക്ടറാണ് തീരുമാനിക്കുന്നത്. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | {n} ദിവസങ്ങളിൽ നിന്ന് തയ്യാറാക്കി, അവിടെ ഭക്ഷണവും റീഡിംഗും രണ്ടുമുണ്ട്. |  |
| `planTitle` | Weekly plan draft | ആഴ്ചയിലെ പ്ലാനിന്റെ ഡ്രാഫ്റ്റ് |  |
| `planTypePortion` | Portion | അളവ് |  |
| `prevDay` | Previous day | മുമ്പത്തെ ദിവസം |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | പ്രിന്റ് ഡൈലോഗിൽ ഒരു പേജ് സംഗ്രഹത്തിന് “PDF ആയി സൂക്ഷിക്കുക” തിരഞ്ഞെടുക്കുക. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} പൂർണ്ണ ദിവസങ്ങൾ · {logged} ദിവസങ്ങൾ രേഖപ്പെടുത്തി |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} പൂർണ്ണ ദിവസങ്ങൾ · {logged} ദിവസം രേഖപ്പെടുത്തി |  |
| `progressTitle` | Progress | പുരോഗതി |  |
| `recentDays` | Recent days | അടുത്ത ദിവസങ്ങൾ |  |
| `removedToast` | Removed. | നീക്കം ചെയ്തു. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | നിയോഗിക്കപ്പെട്ട പങ്കാളികളുടെ അവലോകന പാക്കറ്റ്, സൂചനകളും ഉറവിട ദിവസങ്ങളുമായി ബന്ധിപ്പിച്ച ഡ്രാഫ്റ്റുകളും കാണുന്നു. |  |
| `roleCoordinator` | Coordinator | കോർഡിനേറ്റർ |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | ഗണത്തിന്റെ പൂർണ്ണത, അവലോകന ക്യൂ, ഓഡിറ്റ് ട്രെയിൽ എന്നിവ കാണുന്നു. പ്രിസ്ക്രിപ്ഷൻ മാറ്റാൻ കഴിയില്ല. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | മരുന്ന് വ്യത്യാസങ്ങളുടെ ക്യൂവും നിർദ്ദേശിച്ച → നൽകിയ → കഴിച്ച ഘട്ടങ്ങളും കാണുന്നു. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | ഓരോ വരിയിലുമുള്ള നിയമം: സോഫ്റ്റ്‍വെയർ ആദ്യം വായിക്കുന്നു, മനുഷ്യൻ തീരുമാനിക്കുന്നു. |  |
| `sampleTitle` | Sample data | സാമ്പിൾ ഡാറ്റ |  |
| `saveToday` | Save today’s record | ഇന്നത്തെ രേഖ സൂക്ഷിക്കുക |  |
| `savedToast` | Saved in this browser. | ഈ ബ്രൗസറിൽ സൂക്ഷിച്ചു. |  |
| `settingsTitle` | Settings | ക്രമീകരണങ്ങൾ |  |
| `skip` | Skip to demo | ഡെമോയിലേക്ക് പോകുക |  |
| `skip_content` | Skip to content | ഉള്ളടക്കത്തിലേക്ക് പോകുക |  |
| `start` | Start recording | രേഖപ്പെടുത്താൻ തുടങ്ങുക |  |
| `status` | Status | സ്ഥിതി |  |
| `status_demo` | Demo | ഡെമോ |  |
| `status_roadmap` | Roadmap | റോഡ്‍മാപ്പ് |  |
| `status_shipped` | Shipped | പുറത്തിറക്കി |  |
| `stepProfile` | 1 · Who | 1 · ആർ |  |
| `tabToday` | Today | ഇന്ന് |  |
| `taken` | Taken | കഴിച്ചു |  |
| `thisWeek` | this week | ഈ ആഴ്ച |  |
| `title_404` | Page not found — Khai Tracker | പേജ് കണ്ടെത്തിയില്ല — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | ഡിജിറ്റൽ പരിവർത്തന ബ്ലൂപ്രിന്റ് — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — ബ്രൗസർ ഡെമോ |  |
| `title_functions` | Function map — Khai Tracker | പ്രവർത്തന ഭൂപടം — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | ആശുപത്രി വിന്യാസ ബ്ലൂപ്രിന്റ് — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — നിങ്ങളുടെ ദിവസം, അളന്നത് |  |
| `title_privacy` | Privacy — Khai Tracker | സ്വകാര്യത — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | സുരക്ഷ — Khai Tracker |  |
| `vitalsTitle` | Readings | റീഡിംഗുകൾ |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | ഭക്ഷണത്തിന്റെയും ആരോഗ്യത്തിന്റെയും ദിവസേനയുള്ള രേഖ, സന്ദർശനങ്ങൾക്കിടയിൽ എന്താണ് സംഭവിക്കുന്നതെന്ന് നിങ്ങൾക്കും നിങ്ങളുടെ ഡോക്ടർക്കും കാണാൻ കഴിയും. ഇത് രേഖ സൂക്ഷിക്കുന്നു; ചികിത്സാ ഉപദേശം നൽകുന്നില്ല. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker ലേക്ക് സ്വാഗതം |  |
| `wellbeingTitle` | How was the day? | ദിവസം എങ്ങനെയായിരുന്നു? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Malayalam (ml)
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
