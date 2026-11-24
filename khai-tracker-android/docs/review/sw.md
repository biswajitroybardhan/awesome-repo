# Swahili (sw) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Swahili (Kiswahili)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/sw.json` (app and site)
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

## App strings — Swahili

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | Kuhusu |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nImeundwa na Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nImeundwa kwa ajili ya simu zinazoshirikiwa, mitandao yenye viraka na sahani mchanganyiko za Kihindi. Nje ya mtandao kwanza. Hakuna uchanganuzi wa wahusika wengine. Hakuna matangazo. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Mmiliki wa bidhaa: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Ongeza chakula |  |
| `add_medicines` | Add medicines | Ongeza dawa |  |
| `already_saved` | Saved. You can keep editing and save again. | Imehifadhiwa. Unaweza kuendelea kuhariri na kuhifadhi tena. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Uliza mtaalamu wa afya aliyehitimu. |  |
| `assistant_input_ph` | Ask a question | Uliza swali |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | Majibu yanatokana tu na maandishi ya msaada ya chombo hiki. Hakuna AI, hakuna utambuzi, hakuna ushauri. |  |
| `assistant_listen` | Listen | Sikiliza |  |
| `assistant_send` | Send | Tuma |  |
| `assistant_tab` | Guide | Mwongozo |  |
| `assistant_title` | Khai Guide | Mwongozo wa Khai |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | Sina jibu la hilo. Najibu tu maswali kuhusu matumizi ya chombo hiki. |  |
| `back` | Back | Nyuma |  |
| `bp_dia` | Diastolic (lower) | Diastoli (chini) |  |
| `bp_sys` | Systolic (upper) | Systolic (juu) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | Ghairi |  |
| `carbs` | Carbohydrate | Wanga |  |
| `close` | Close | Funga |  |
| `completeness` | 21-day completeness | Ukamilifu wa siku 21 |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Siku zilizo na chakula, dawa na kusoma, zimegawanywa na 21. Imehesabiwa kutoka kwa maingizo yaliyohifadhiwa, sio kutoka kwa kumbukumbu. |  |
| `confirm` | Confirm | Thibitisha |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Unachagua cha kurekodi. Maingizo yako husalia kwa njia fiche kwenye simu hii, na yanatumwa kwa seva ya utafiti ya Khai ikiwa tu mratibu wako atakupa anwani ya seva. Unaweza kufuta kila kitu wakati wowote. Hakuna jina, anwani, nambari ya Aadhaar au orodha ya anwani inayokusanywa. Unaweza kujiondoa kwa kufuta data yako. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Nimesoma au kusikia haya, na ninakubali kushiriki. |  |
| `consent_listen` | Listen in Hindi | Sikiliza kwa Kihindi |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Toleo la idhini 1.0 · iliyorekodiwa kwenye kifaa hiki kwa muhuri wa muda |  |
| `consent_title` | Consent | Idhini |  |
| `day_detail` | Day detail | Maelezo ya siku |  |
| `days_logged` | Days logged | Siku zimeingia |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker ni chombo cha kufuatilia, si ushauri wa matibabu. Haifanyi uchunguzi wa ugonjwa wala haibadilishi maagizo ya dawa. |  |
| `done` | Done | Imekamilika |  |
| `dose_hint` | Dose (optional) | Kipimo (si lazima) |  |
| `edit_day` | Edit this day | Hariri siku hii |  |
| `edit_profile` | Edit profile | Hariri wasifu |  |
| `energy` | Energy | Nishati |  |
| `erase` | Erase my data | Futa data yangu |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Hii itafuta kabisa kila ingizo, wasifu wako na mipangilio yako ya vikumbusho kwenye simu hii. Hili haliwezi kutenduliwa. |  |
| `erase_yes` | Erase everything | Futa kila kitu |  |
| `estimated` | estimated | inakadiriwa |  |
| `export_backup` | Full backup (JSON) | Hifadhi nakala kamili (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Rekodi ya afya (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Daftari ya chakula (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Shiriki na watu unaowachagua pekee. Faili huondoka kwenye simu tu unapogonga shiriki. |  |
| `export_metrics` | Daily readings (CSV) | Usomaji wa kila siku (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Muhtasari wa daktari (PDF) |  |
| `export_title` | Export and share | Hamisha na ushiriki |  |
| `export_working` | Preparing file… | Inatayarisha faili... |  |
| `fat` | Fat | Mafuta |  |
| `food_items` | %1$d food items | Chakula cha %1$d |  |
| `food_library_title` | Food library | Maktaba ya chakula |  |
| `glucose` | Blood sugar | Sukari ya damu |  |
| `glucose_fasting` | Fasting | Kufunga |  |
| `glucose_pp` | After food | Baada ya chakula |  |
| `hide_previews` | Hide this app in the recent-apps preview | Ficha programu hii katika onyesho la kukagua programu za hivi majuzi |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Mraba uliojaa una kiingilio. Gusa siku yoyote ili uikague au uisahihishe. |  |
| `history_title` | Last 21 days | Siku 21 zilizopita |  |
| `insight_descriptive` | description | maelezo |  |
| `insight_early` | early signal | ishara ya mapema |  |
| `insight_moderate` | moderate signal | ishara ya wastani |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Haya ni uchunguzi kuhusu maingizo yako mwenyewe, si utambuzi na wala si mapendekezo ya matibabu. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Endelea kuweka magogo kwa wiki. Sampuli huonekana mara moja kuna angalau siku tano na usomaji. |  |
| `insights_title` | What your own data shows | Data yako mwenyewe inaonyesha nini |  |
| `kcal` | Energy | Nishati |  |
| `language` | Language / भाषा | Lugha / भाषा |  |
| `loading` | Loading… | Inapakia... |  |
| `meal_breakfast` | Breakfast | Kifungua kinywa |  |
| `meal_dinner` | Dinner | Chakula cha jioni |  |
| `meal_lunch` | Lunch | Chakula cha mchana |  |
| `meal_snacks` | Snacks & drinks | Vitafunio na vinywaji |  |
| `meds_changed` | Changed | Imebadilishwa |  |
| `meds_empty` | No medicines listed yet. | Hakuna dawa zilizoorodheshwa bado. |  |
| `meds_hint` | Tick what you actually did today. | Weka alama kwenye kile ulichofanya kweli leo. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | Hakuna dawa zilizoorodheshwa kwenye wasifu wako. Ziongeze mara moja, kisha ziweke alama kila siku. |  |
| `meds_skipped` | Skipped | Imerukwa |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d kati ya %2$d dawa zilizotumika |  |
| `meds_taken` | Taken | Imechukuliwa |  |
| `meds_title` | Medicines | Dawa |  |
| `mood` | Mood | Mood |  |
| `no` | No | Hapana |  |
| `no_food_yet` | Nothing added yet | Bado hakuna kilichoongezwa |  |
| `note` | Anything else? (optional) | Kitu kingine chochote? (si lazima) |  |
| `nothing_logged` | No entry for this day. | Hakuna kiingilio kwa siku hii. |  |
| `notif_channel` | Daily reminder | Kikumbusho cha kila siku |  |
| `notif_channel_desc` | One daily reminder to record your day. | Kikumbusho kimoja cha kila siku cha kurekodi siku yako. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Dakika mbili za utulivu: ulikula nini, na umepima nini leo? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Ruhusu arifa ili kikumbusho cha kila siku kiweze kukufikia. |  |
| `ok` | OK | Sawa |  |
| `onboard_add_med` | + Add another | + Ongeza nyingine |  |
| `onboard_age` | Age group | Kikundi cha umri |  |
| `onboard_age_ph` | Select | Chagua |  |
| `onboard_code` | Participant code | Msimbo wa mshiriki |  |
| `onboard_code_ph` | e.g. K01 | k.m. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Masharti (weka tiki yote yanayotumika) |  |
| `onboard_error_age` | Please choose an age group. | Tafadhali chagua kikundi cha umri. |  |
| `onboard_error_code` | Please enter your participant code. | Tafadhali weka msimbo wako wa mshiriki. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Tafadhali thibitisha idhini ili kuendelea. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Rekodi ya kila siku ya chakula na afya ambayo hukusaidia wewe na daktari wako kuona kile kinachotokea kati ya ziara. Ni chombo cha kufuatilia, si ushauri wa matibabu. |  |
| `onboard_meds` | Daily medicines (name and dose) | Dawa za kila siku (jina na kipimo) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | k.m. Metformin 500 mg |  |
| `onboard_start` | Start tracking | Anza kufuatilia |  |
| `onboard_title` | Welcome to Khai Tracker | Karibu na Khai Tracker |  |
| `pending` | Pending sync | Inasubiri kusawazisha |  |
| `per_portion` | per portion | kwa sehemu |  |
| `pick_day` | Pick a day above. | Chagua siku hapo juu. |  |
| `pin_change` | Change PIN | Kubadilisha PIN |  |
| `pin_enter` | Enter your PIN | Ingiza PIN yako |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN lazima iwe na tarakimu 4 haswa. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Inafaa kwenye simu ya familia iliyoshirikiwa. PIN yenye tarakimu 4 inaulizwa wakati programu inafungua, na tena baada ya dakika moja. |  |
| `pin_lock` | App lock | Kufunga programu |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | Chagua PIN yenye tarakimu 4 |  |
| `pin_remove` | Remove PIN | Ondoa PIN |  |
| `pin_removed` | PIN removed. | PIN imeondolewa. |  |
| `pin_saved` | PIN saved. | PIN imehifadhiwa. |  |
| `pin_set` | Set PIN | Weka PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN si sahihi. Jaribu tena. |  |
| `portion_q` | Portion | Sehemu |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | Maingizo yako yamesimbwa kwa njia fiche kwenye kifaa hiki kwa ufunguo ulioshikiliwa katika hifadhi salama ya simu hii. Hakuna kitu kinachotumwa popote isipokuwa uweke seva ya kusoma. Hakuna uchanganuzi na hakuna matangazo. |  |
| `privacy_title` | Privacy | Faragha |  |
| `profile` | Profile and medicines | Profaili na dawa |  |
| `progress_title` | Progress | Maendeleo |  |
| `protein` | Protein | Protini |  |
| `pulse` | Pulse | Mapigo ya moyo |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Makadirio ni masafa kwa sababu sahani sawa hutofautiana kulingana na kaya. Ni za kutafuta muundo, sio kuhesabu kalori. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | Usemi wa Kihindi haujawekwa kwenye simu hii. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Arifa tulivu kwa wakati unaochagua. Hakuna aibu mfululizo, hakuna matangazo. |  |
| `reminder_off` | Reminder off | Kikumbusho kimezimwa |  |
| `reminder_on` | Reminder on | Kikumbusho kimewashwa |  |
| `reminder_time` | Reminder time | Muda wa ukumbusho |  |
| `reminders` | Daily reminder | Kikumbusho cha kila siku |  |
| `remove` | Remove | Ondoa |  |
| `remove_confirm` | Remove this item? | Ungependa kuondoa kipengee hiki? |  |
| `save` | Save | Hifadhi |  |
| `save_failed` | Could not save. Please try again. | Haikuweza kuhifadhi. Tafadhali jaribu tena. |  |
| `save_today` | Save today | Hifadhi leo |  |
| `saved` | Saved on this device. Encrypted. | Imehifadhiwa kwenye kifaa hiki. Imesimbwa kwa njia fiche. |  |
| `search_food` | Search a dish in English or Hindi | Tafuta mlo kwa Kiingereza au Kihindi |  |
| `settings_title` | Settings | Mipangilio |  |
| `share` | Share | Shiriki |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Hakuna programu kwenye simu hii inayoweza kupokea faili. Sakinisha programu ya barua pepe au faili na ujaribu tena. |  |
| `sleep` | Sleep last night (hours) | Lala jana usiku (saa) |  |
| `sodium` | Salt (sodium) | Chumvi (sodiamu) |  |
| `streak` | Day streak | Mfululizo wa siku |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | Hiyo haionekani kama anwani halali. |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Usawazishaji haukufaulu. Maingizo ni salama kwenye simu hii na tutajaribu tena. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | Hiari. Mratibu wako anakupa anwani ya seva. Acha tupu ili kuweka kila kitu kwenye simu hii pekee. |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | Tumia anwani ya HTTPS. Data ya afya haitumwi bila kufichwa. |  |
| `sync_never` | Not synced yet. | Bado haijasawazishwa. |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | Sawazisha sasa |  |
| `sync_offline` | No internet right now. Entries queued. | Hakuna mtandao kwa sasa. Maingizo yamewekwa kwenye foleni. |  |
| `sync_ok` | Synced. All entries are on the server. | Imesawazishwa. Maingizo yote yapo kwenye seva. |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | Hifadhi anwani |  |
| `sync_title` | Institution sync | Usawazishaji wa masomo |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | Anwani ya seva |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Historia |  |
| `tab_progress` | Progress | Maendeleo |  |
| `tab_settings` | Settings | Mipangilio |  |
| `tab_today` | Today | Leo |  |
| `this_week` | This week | Wiki hii |  |
| `todays_total` | Today\'s estimate | Makadirio ya leo |  |
| `total_carbs` | Carbohydrate | Wanga |  |
| `uncertainty` | Range, not a single number | Masafa, sio nambari moja |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Jaza tu kile ulichopima. Maana tupu haijapimwa, ambayo ni habari muhimu pia. |  |
| `vitals_title` | Readings | Masomo |  |
| `weight` | Weight (kg) | Uzito (kg) |  |
| `wellbeing_title` | How was the day? | Siku ilikuwaje? |  |
| `yes` | Yes | Ndiyo |  |

## Site strings — Swahili

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Kuhusu onyesho hili |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | Pakua APK |  |
| `action_menu` | Open menu | Fungua menyu |  |
| `action_theme` | Switch theme | Badilisha mandhari |  |
| `addFood` | Add food | Ongeza chakula |  |
| `addMed` | + Add another | + Ongeza nyingine |  |
| `adherence` | medicines taken | dawa zilizochukuliwa |  |
| `ageLabel` | Age band | Bendi ya umri |  |
| `allFoods` | All | Wote |  |
| `askClinician` | Ask a qualified clinician. | Uliza mtaalamu wa afya aliyehitimu. |  |
| `assistantInputPh` | Ask a question | Uliza swali |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Majibu yanatokana tu na maandishi ya msaada ya chombo hiki. Hakuna AI, hakuna utambuzi, hakuna ushauri. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Kubadilisha lugha ya kuonyesha hubadilisha tu lebo. Thamani zilizohifadhiwa zinabaki kama misimbo thabiti, kwa hiyo siku yoyote haiandikwi upya. |  |
| `assistantListen` | Listen | Sikiliza |  |
| `assistantNav` | Guide | Mwongozo |  |
| `assistantSend` | Send | Tuma |  |
| `assistantTitle` | Khai Guide | Mwongozo wa Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Sina jibu la hilo. Najibu tu maswali kuhusu matumizi ya chombo hiki. |  |
| `avgBp` | avg BP | BP wastani |  |
| `back` | Back | Nyuma |  |
| `bmiNote` | Not a diagnosis. | Sio utambuzi. |  |
| `bpSys` | Systolic | Systolic |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Soma hii kama mwongozo, si tangazo: hakuna kupelekwa hospitalini, majaribio, idhini au ushirikiano unaodaiwa. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | Mstari wa uaminifu: programu ya mshiriki na onyesho la kivinjari zipo leo. Kila sehemu ya hospitali hapa ni pendekezo la kubuni. |  |
| `codeLabel` | Participant code | Msimbo wa mshiriki |  |
| `codeShort` | Code | Kanuni |  |
| `completeDays` | complete days | siku kamili |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Siku na chakula, hali ya dawa (wakati imeagizwa) na angalau kipimo kimoja, imegawanywa na 21. Imehesabiwa kutoka kwa maingizo yaliyohifadhiwa, si kumbukumbu. |  |
| `conditionsLabel` | Conditions (select all that apply) | Masharti (chagua yote yanayotumika) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Unaamua nini cha kuingia. Katika onyesho hili kila kitu husalia kwenye hifadhi ya ndani ya kivinjari hiki - hakuna seva na hakuna kinachopakiwa. Katika programu ya Android, maingizo yanasimbwa kwa njia fiche kwenye simu. Hakuna jina, anwani, kitambulisho cha serikali au orodha ya anwani inayokusanywa. Unaweza kufuta kila kitu wakati wowote. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Nimesoma hii na kuelewa onyesho hili la kivinjari sio la rekodi halisi za kliniki. |  |
| `consentTitle` | Consent | Idhini |  |
| `dayComplete` | Day complete | Siku imekamilika |  |
| `demoBadge` | Demo | Onyesho |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Onyesho pekee · si kifaa cha matibabu · si kwa rekodi halisi za kimatibabu. |  |
| `downloadToast` | {name} downloaded. | {name} imepakuliwa. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Tafsiri ya rasimu - inahitaji ukaguzi wa mzungumzaji asilia kabla ya matumizi ya kimatibabu. |  |
| `early` | early signal | ishara ya mapema |  |
| `eraseBtn` | Erase my data | Futa data yangu |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Hii huondoa wasifu, kila siku na kila mpangilio kutoka kwa kivinjari hiki. Haiwezi kutenduliwa. |  |
| `eraseTitle` | Erase everything | Futa kila kitu |  |
| `eraseYes` | Erase everything | Futa kila kitu |  |
| `errCode` | Please enter your participant code. | Tafadhali weka msimbo wako wa mshiriki. |  |
| `errConsent` | Consent is required to continue. | Idhini inahitajika ili kuendelea. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Usomaji ulioinuliwa hualamishwa kwa mazungumzo. Programu haichunguzi wala kubadilisha agizo la daktari. |  |
| `escalateNone` | No threshold flags in the recent record. | Hakuna alama za kiwango cha juu katika rekodi ya hivi majuzi. |  |
| `escalateTitle` | Flags for the clinician | Bendera kwa daktari |  |
| `estTotal` | Today’s estimate | Makadirio ya leo |  |
| `exportBackup` | Complete backup (JSON) | Hifadhi nakala kamili (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Rekodi ya afya (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Daftari ya chakula (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Vipimo vya kila siku (CSV) |  |
| `exportPrint` | Clinician summary (print) | Muhtasari wa kliniki (chapisha) |  |
| `exportsTitle` | Export & share | Hamisha na ushiriki |  |
| `eyebrow_capability` | Capability map | Ramani ya uwezo |  |
| `eyebrow_demo` | Browser demo · no install | Onyesho la kivinjari · hakuna kusakinisha |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Usambazaji hospitalini · muundo wa marejeleo |  |
| `fasting` | Fasting | Kufunga |  |
| `foodItemsOne` | 1 item | kipengee 1 |  |
| `foodLogged` | Food | Chakula |  |
| `foodPickerTitle` | Choose a dish | Chagua sahani |  |
| `footerNote` | Nothing leaves this browser. | Hakuna kinachoacha kivinjari hiki. |  |
| `footer_browser_demo` | Browser demo | Onyesho la kivinjari |  |
| `footer_contact` | Contact | Wasiliana |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Onyesho pekee · si kifaa cha matibabu · hakuna uhusiano na Zhongshan Hospital, HIMSS au mfumo wowote wa afya uliopewa jina. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Chombo cha kupima nafasi kati ya ziara. Imeundwa Jamshedpur kwa simu zinazotumiwa pamoja, betri ambazo ni chache na kliniki zilizo mbali. |  |
| `footer_hospital_design` | Hospital design | Muundo wa hospitali |  |
| `footer_limits` | Limits and answers | Mipaka na majibu |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Sio kifaa cha matibabu. Hakuna uhusiano na Zhongshan Hospital, HIMSS au mfumo wowote wa afya uliopewa jina. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Hakuna kinachoacha kivinjari hiki. |  |
| `footer_product` | Product | Bidhaa |  |
| `footer_transparency` | Transparency | Uwazi |  |
| `footer_verification` | Verification | Uthibitishaji |  |
| `glucose` | Blood sugar | Sukari ya damu |  |
| `head_404` | That page is not here. | Ukurasa huo haupo. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Kitanzi kilichofungwa, kilichojengwa kwa maeneo ambayo hospitali haifikii kamwe. |  |
| `head_functions` | Every function, honestly labelled. | Kila kipengele, kilicho na lebo kwa uaminifu. |  |
| `head_hospital` | The hospital is the unit of change. | Hospitali ni kitengo cha mabadiliko. |  |
| `head_privacy` | Your record stays yours. | Rekodi yako itabaki kuwa yako. |  |
| `head_security` | What is protected, and what is not. | Ni nini kinacholindwa, na kisicholindwa. |  |
| `historyTitle` | The last 21 days | Siku 21 zilizopita |  |
| `hospAudit` | Audit trail | Njia ya ukaguzi |  |
| `hospCohort` | Cohort | Kundi |  |
| `hospComplete` | complete | kamili |  |
| `hospDisc1` | Prescribed but not dispensed | Imeagizwa lakini haijatolewa |  |
| `hospDiscrepancies` | Medication discrepancies | Tofauti za dawa |  |
| `hospOpenHospital` | Open hospital control room | Fungua chumba cha kudhibiti hospitali |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Ingia kwa takriban wiki moja katika programu ya mshiriki ili kuona kifurushi cha ukaguzi hapa. |  |
| `hospReviewPack` | Today's review pack | Kifurushi cha maoni cha leo |  |
| `hospitalBack` | Back to app | Rudi kwa programu |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Mchoro wa muundo wa safu ya hospitali iliyojengwa karibu na rekodi sawa. Kundi lililo hapa chini ni la kutengeneza - hakuna wagonjwa halisi, hakuna muunganisho wa hospitali, hakuna maamuzi ya kimatibabu. |  |
| `hospitalTitle` | Hospital control room | Chumba cha udhibiti wa hospitali |  |
| `hospital_layer` | Hospital deployment layer | Safu ya kupelekwa hospitali |  |
| `hospital_s1` | Status of this document | Hali ya hati hii |  |
| `hospital_s10` | Governance and safety | Utawala na usalama |  |
| `hospital_s11` | Phased rollout | Utoaji wa hatua kwa hatua |  |
| `hospital_s12` | What would make this real | Ni nini kitafanya hii kuwa kweli |  |
| `hospital_s2` | Why the hospital, not just the phone | Kwa nini hospitali, sio simu tu |  |
| `hospital_s3` | Reference topology | Topolojia ya kumbukumbu |  |
| `hospital_s4` | Roles and access | Majukumu na ufikiaji |  |
| `hospital_s5` | Coordinator console | Console ya mratibu |  |
| `hospital_s6` | Clinician review workflow | Mtiririko wa kazi wa kliniki |  |
| `hospital_s7` | Closed-loop medication | Dawa ya kitanzi kilichofungwa |  |
| `hospital_s8` | Integration contract | Mkataba wa ujumuishaji |  |
| `hospital_s9` | Identity and data flow | Utambulisho na mtiririko wa data |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Weka rekodi kwa takriban wiki moja. Sampuli zinahitaji angalau siku nne zilizooanishwa kabla ya chochote kuonyeshwa. |  |
| `insightsTitle` | What your own numbers say | Nambari zako mwenyewe zinasema nini |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Lugha |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Umbo la rekodi sawa, maktaba sawa ya chakula na sheria sawa na muundo wa Android, unaotumika kabisa katika ukurasa huu. Sio kwa rekodi halisi za kliniki. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Huu ndio muundo kamili ambao mradi unafuata, kutoka kwa kifaa cha kupima kulingana na simu hadi kitanzi kilichofungwa kinachosimamiwa na daktari. Kila chaguo la kukokotoa limetiwa alama kama Lililosafirishwa, Onyesho au Ramani ya Barabara yenye sharti la awali lililopewa jina. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Rekodi ya simu hufunga tu kitanzi wakati kliniki inaweza kuishughulikia. Ukurasa huu ni usanifu wa marejeleo kwa safu hiyo ya hospitali. Ni mpango wa kubuni: hakuna chochote hapa kinachotumwa na hakuna hospitali iliyotajwa kama mshirika. |  |
| `legendComplete` | Complete | Kamilisha |  |
| `legend_read` | How to read this map | Jinsi ya kusoma ramani hii |  |
| `loadSample` | Load 14-day sample | Pakia sampuli ya siku 14 |  |
| `mealBreakfast` | Breakfast | Kifungua kinywa |  |
| `medsLabel` | Daily medicines (name and dose) | Dawa za kila siku (jina na kipimo) |  |
| `medsTitle` | Medicines | Dawa |  |
| `nav_blueprint` | Blueprint | Mchoro |  |
| `nav_clinician` | For clinicians | Kwa waganga |  |
| `nav_demo` | Demo | Onyesho |  |
| `nav_functions` | Functions | Kazi |  |
| `nav_hospital` | Hospital | Hospitali |  |
| `nav_loop` | The loop | Kitanzi |  |
| `nav_security` | Security | Usalama |  |
| `nav_what` | What it does | Inafanya nini |  |
| `noDataToast` | No days recorded yet — add a day first. | Bado hakuna siku zilizorekodiwa - ongeza siku kwanza. |  |
| `noMatches` | No dish matches that. | Hakuna sahani inayolingana na hiyo. |  |
| `noMeds` | No medicines recorded in your profile. | Hakuna dawa zilizorekodiwa katika wasifu wako. |  |
| `not_map` | What this map is not | Nini ramani hii si |  |
| `note` | Anything else? (optional) | Kitu kingine chochote? (si lazima) |  |
| `nothingLogged` | No record for this day. | Hakuna rekodi kwa siku hii. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Imehifadhiwa kwenye kivinjari hiki pekee. Hakuna akaunti, hakuna upakiaji. |  |
| `planAccept` | Accept | Kubali |  |
| `planAccepted` | Marked accepted in this demo. | Imetiwa alama kuwa imekubaliwa katika onyesho hili. |  |
| `planAcceptedState` | accepted | kukubaliwa |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Thamani za vyakula ni makadirio ya sehemu ya kaya yanayoonyeshwa kama masafa, si vipimo vilivyopimwa. Rasimu za muundo hutoka kwa siku chache zilizooanishwa kwa mtu mmoja - ni vidokezo kwa daktari, sio matokeo. |  |
| `planConfidenceTitle` | How sure is this? | Je, hii ina uhakika gani? |  |
| `planDecision` | Demo decision | Uamuzi wa onyesho |  |
| `planDraftLabel` | Draft for review | Rasimu ya kukaguliwa |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | Uhariri hufanyika na daktari katika mkutano wa ukaguzi; demo hii inarekodi uamuzi pekee. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Ingia karibu wiki ya chakula na usomaji kwanza. Rasimu inahitaji angalau siku nne zilizooanishwa. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Rasimu ya mtaalamu wa lishe kukagua, iliyojengwa kutoka kwa siku zako mwenyewe ulizotumia. Kielelezo - sio ushauri. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Kujiamini kwa chini - siku chache tu zilizooanishwa. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Vielelezo pekee. Sio ushauri, sio utambuzi. Usibadili chakula chako au dawa kwa sababu ya rasimu hii - daktari aliyehitimu ataamua. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Imejengwa kutoka siku za {n} ambazo zina chakula na usomaji. |  |
| `planTitle` | Weekly plan draft | Rasimu ya mpango wa kila wiki |  |
| `planTypePortion` | Portion | Sehemu |  |
| `prevDay` | Previous day | Siku iliyotangulia |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Katika kidirisha cha kuchapisha chagua "Hifadhi kama PDF" kwa muhtasari wa ukurasa mmoja. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} siku kamili · siku {logged} zilizorekodiwa |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} siku kamili · siku {logged} iliyorekodiwa |  |
| `progressTitle` | Progress | Maendeleo |  |
| `recentDays` | Recent days | Siku za hivi karibuni |  |
| `removedToast` | Removed. | Imeondolewa. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Huona kifurushi cha ukaguzi kwa washiriki waliokabidhiwa, pamoja na bendera na vipengee vya rasimu vilivyounganishwa na siku za chanzo. |  |
| `roleCoordinator` | Coordinator | Mratibu |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Huona ukamilifu wa kundi, foleni ya ukaguzi na njia ya ukaguzi. Haiwezi kubadilisha agizo. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Huona foleni ya utofauti wa dawa na maagizo → yaliyotolewa → vituo vya ukaguzi vilivyochukuliwa. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | Sheria katika kila safu: programu inasoma kwanza, mwanadamu anaamua. |  |
| `sampleTitle` | Sample data | Data ya sampuli |  |
| `saveToday` | Save today’s record | Hifadhi rekodi ya leo |  |
| `savedToast` | Saved in this browser. | Imehifadhiwa katika kivinjari hiki. |  |
| `settingsTitle` | Settings | Mipangilio |  |
| `skip` | Skip to demo | Ruka hadi kwenye onyesho |  |
| `skip_content` | Skip to content | Ruka hadi yaliyomo |  |
| `start` | Start recording | Anza kurekodi |  |
| `status` | Status | Hali |  |
| `status_demo` | Demo | Onyesho |  |
| `status_roadmap` | Roadmap | Ramani ya barabara |  |
| `status_shipped` | Shipped | Imesafirishwa |  |
| `stepProfile` | 1 · Who | 1 · Nani |  |
| `tabToday` | Today | Leo |  |
| `taken` | Taken | Imechukuliwa |  |
| `thisWeek` | this week | wiki hii |  |
| `title_404` | Page not found — Khai Tracker | Ukurasa haujapatikana - Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Mchoro wa mabadiliko ya kidijitali - Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker - onyesho la kivinjari |  |
| `title_functions` | Function map — Khai Tracker | Ramani ya kazi - Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Mchoro wa kupeleka hospitali - Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker - siku yako, iliyopimwa |  |
| `title_privacy` | Privacy — Khai Tracker | Faragha - Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Usalama - Khai Tracker |  |
| `vitalsTitle` | Readings | Masomo |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Rekodi ya kila siku ya chakula na afya, ili wewe na daktari wako muweze kuona kile kinachotokea kati ya ziara. Inaweka rekodi. Haitoi ushauri wa matibabu. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Karibu na Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Siku ilikuwaje? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Swahili (sw)
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
