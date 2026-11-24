# Urdu (ur) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Urdu (اردو)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/ur.json` (app and site)
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

## App strings — Urdu

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | تعارف |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nKhai Foods Pvt Ltd, Jamshedpur, Jharkhand, India کی طرف سے بنایا گیا۔\n\nمشترک فونوں، رکے ہوئے نیٹ ورکس اور مختلف ہندوستانی کھانوں کے لیے ڈیزائن کیا گیا۔ پہلے آف لائن۔ کوئی تیسرے فریق کا تجزیہ نہیں۔ کوئی اشتہار نہیں۔ |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | پروڈکٹ مالک: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + کھانا شامل کریں |  |
| `add_medicines` | Add medicines | دوائیں شامل کریں |  |
| `already_saved` | Saved. You can keep editing and save again. | محفوظ ہو گیا۔ آپ ترمیم کر کے دوبارہ محفوظ کر سکتے ہیں۔ |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | کسی قابل ڈاکٹر سے پوچھیں۔ |  |
| `assistant_input_ph` | Ask a question | ایک سوال پوچھیں |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | اس ٹول کی اپنی مدد کے متن سے لیے گئے سوالات کے جوابات۔ نہ کوئی AI، نہ تشخیص، نہ مشورہ۔ |  |
| `assistant_listen` | Listen | سنیں |  |
| `assistant_send` | Send | بھیجیں |  |
| `assistant_tab` | Guide | رہنما |  |
| `assistant_title` | Khai Guide | خائی رہنما |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | میرے پاس اس کا جواب نہیں ہے۔ میں صرف اس ٹول کے استعمال کے بارے میں سوالات کا جواب دیتا ہوں۔ |  |
| `back` | Back | واپس |  |
| `bp_dia` | Diastolic (lower) | ڈایاسٹولک (نچلی) |  |
| `bp_sys` | Systolic (upper) | سسٹولک (اوپری) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | ٹریکر |  |
| `cancel` | Cancel | منسوخ کریں |  |
| `carbs` | Carbohydrate | کاربوہائیڈریٹ |  |
| `close` | Close | بند کریں |  |
| `completeness` | 21-day completeness | 21 دن کی مکملی |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | کھانا، دوائیں اور ایک ریڈنگ والے دنوں کو 21 سے تقسیم کیا جاتا ہے۔ یہ یادداشت سے نہیں، محفوظ اندراجات سے گنا جاتا ہے۔ |  |
| `confirm` | Confirm | تصدیق کریں |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | آپ فیصلہ کرتے ہیں کہ کیا درج کرنا ہے۔ آپ کی اندراجات اس فون پر خفیہ ہو کر محفوظ رہتی ہیں، اور صرف اُس وقت Khai مطالعہ کے سرور پر بھیجی جاتی ہیں جب آپ کے رابطہ کار آپ کو سرور کا پتہ دیں۔ آپ کسی بھی وقت سب کچھ مٹا سکتے ہیں۔ کوئی نام، پتہ، Aadhaar نمبر یا رابطہ فہرست حاصل نہیں کی جاتی۔ آپ اپنا ڈیٹا مٹا کر دستبردار ہو سکتے ہیں۔ |  |
| `consent_check` | I have read or heard this, and I agree to take part. | میں نے یہ پڑھا یا سنا ہے، اور حصہ لینے پر راضی ہوں۔ |  |
| `consent_listen` | Listen in Hindi | ہندی میں سنیں |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | رضامندی ورژن 1.0 · اس آلے پر وقت کے نشان کے ساتھ درج کی گئی |  |
| `consent_title` | Consent | رضامندی |  |
| `day_detail` | Day detail | دن کی تفصیل |  |
| `days_logged` | Days logged | درج کردہ دن |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker ایک ٹریکنگ ٹول ہے، طبی مشورہ نہیں۔ یہ کبھی تشخیص نہیں کرتا اور کبھی نسخہ نہیں بدلتا۔ |  |
| `done` | Done | مکمل |  |
| `dose_hint` | Dose (optional) | خوراک (اختیاری) |  |
| `edit_day` | Edit this day | یہ دن ترمیم کریں |  |
| `edit_profile` | Edit profile | پروفائل ترمیم کریں |  |
| `energy` | Energy | توانائی |  |
| `erase` | Erase my data | میرا ڈیٹا مٹائیں |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | یہ اس فون پر ہر اندراج، آپ کی پروفائل اور آپ کی یاد دہانی کی ترتیبات کو مستقل طور پر مٹا دیتا ہے۔ اسے واپس نہیں لایا جا سکتا۔ |  |
| `erase_yes` | Erase everything | سب کچھ مٹائیں |  |
| `estimated` | estimated | تخمینہ |  |
| `export_backup` | Full backup (JSON) | مکمل بیک اپ (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | صحت کا ریکارڈ (FHIR JSON) |  |
| `export_food` | Food log (CSV) | کھانے کی لاگ (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | صرف اُن لوگوں کے ساتھ شیئر کریں جنہیں آپ منتخب کریں۔ فائلیں فون سے صرف اُس وقت جاتی ہیں جب آپ شیئر کو دبائیں۔ |  |
| `export_metrics` | Daily readings (CSV) | روزانہ ریڈنگز (CSV) |  |
| `export_summary` | Clinician summary (PDF) | ڈاکٹر کا خلاصہ (PDF) |  |
| `export_title` | Export and share | برآمد اور اشتراک |  |
| `export_working` | Preparing file… | فائل تیار کی جا رہی ہے… |  |
| `fat` | Fat | چربی |  |
| `food_items` | %1$d food items | %1$d کھانے کی اشیا |  |
| `food_library_title` | Food library | کھانوں کی لائبریری |  |
| `glucose` | Blood sugar | خون میں شکر |  |
| `glucose_fasting` | Fasting | روزہ |  |
| `glucose_pp` | After food | کھانے کے بعد |  |
| `hide_previews` | Hide this app in the recent-apps preview | حالیہ ایپس کی پیش منظر میں اس ایپ کو چھپائیں |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | بھرا ہوا مربع مطلب وہاں ایک اندراج ہے۔ دیکھنے یا درست کرنے کے لیے کسی بھی دن کو دبائیں۔ |  |
| `history_title` | Last 21 days | پچھلے 21 دن |  |
| `insight_descriptive` | description | تفصیل |  |
| `insight_early` | early signal | ابتدائی اشارہ |  |
| `insight_moderate` | moderate signal | درمیانہ اشارہ |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | یہ آپ کے اپنے اندراجات کے بارے میں مشاہدے ہیں، نہ تشخیص اور نہ ہی علاج کی سفارش۔ |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | ایک ہفتے تک درج کرتے رہیں۔ کم از کم پانچ دن کی ریڈنگز ہونے پر پیٹرن نمودار ہوتے ہیں۔ |  |
| `insights_title` | What your own data shows | آپ کے اپنے ڈیٹا سے کیا پتہ چلتا ہے |  |
| `kcal` | Energy | توانائی |  |
| `language` | Language / भाषा | Language / زبان |  |
| `loading` | Loading… | لوڈ ہو رہا ہے… |  |
| `meal_breakfast` | Breakfast | ناشتہ |  |
| `meal_dinner` | Dinner | رات کا کھانا |  |
| `meal_lunch` | Lunch | دوپہر کا کھانا |  |
| `meal_snacks` | Snacks & drinks | نمکینات اور مشروبات |  |
| `meds_changed` | Changed | بدل دی گئی |  |
| `meds_empty` | No medicines listed yet. | ابھی تک کوئی دوا درج نہیں ہے۔ |  |
| `meds_hint` | Tick what you actually did today. | آج آپ نے دراصل کیا کیا، نشان زد کریں۔ |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | آپ کی پروفائل میں کوئی دوا درج نہیں ہے۔ ایک بار انہیں شامل کریں، پھر ہر دن نشان زد کریں۔ |  |
| `meds_skipped` | Skipped | چھوڑ دی گئی |  |
| `meds_summary` | %1$d of %2$d medicines taken | %2$d دوائیوں میں سے %1$d لی گئیں |  |
| `meds_taken` | Taken | لی گئی |  |
| `meds_title` | Medicines | دوائیں |  |
| `mood` | Mood | موڈ |  |
| `no` | No | نہیں |  |
| `no_food_yet` | Nothing added yet | ابھی کچھ شامل نہیں کیا گیا |  |
| `note` | Anything else? (optional) | اور کچھ؟ (اختیاری) |  |
| `nothing_logged` | No entry for this day. | اس دن کے لیے کوئی اندراج نہیں ہے۔ |  |
| `notif_channel` | Daily reminder | روزانہ یاد دہانی |  |
| `notif_channel_desc` | One daily reminder to record your day. | آپ کا دن درج کرنے کے لیے ایک روزانہ یاد دہانی۔ |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | دو پرسکون منٹ: آج آپ نے کیا کھایا، اور کیا ناپا؟ |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | روزانہ یاد دہانی تک پہنچنے کے لیے اطلاعات کی اجازت دیں۔ |  |
| `ok` | OK | ٹھیک ہے |  |
| `onboard_add_med` | + Add another | + ایک اور شامل کریں |  |
| `onboard_age` | Age group | عمر کا گروپ |  |
| `onboard_age_ph` | Select | منتخب کریں |  |
| `onboard_code` | Participant code | شرکت کرنے والے کا کوڈ |  |
| `onboard_code_ph` | e.g. K01 | مثال کے طور پر K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | صحت کے حالات (جو لاگو ہوں سب نشان زد کریں) |  |
| `onboard_error_age` | Please choose an age group. | براہِ کرم عمر کا گروپ منتخب کریں۔ |  |
| `onboard_error_code` | Please enter your participant code. | براہِ کرم اپنا شرکتی کوڈ درج کریں۔ |  |
| `onboard_error_consent` | Please confirm consent to continue. | جاری رکھنے کے لیے براہِ کرم رضامندی کی تصدیق کریں۔ |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | روزانہ کھانے اور صحت کا ریکارڈ جو آپ کو اور آپ کے ڈاکٹر کو ملاقاتوں کے درمیان حقیقتاً کیا ہو رہا ہے، دیکھنے میں مدد دیتا ہے۔ یہ ایک ٹریکنگ ٹول ہے، طبی مشورہ نہیں۔ |  |
| `onboard_meds` | Daily medicines (name and dose) | روزانہ دوائیں (نام اور خوراک) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | مثال کے طور پر Metformin 500 mg |  |
| `onboard_start` | Start tracking | ٹریکنگ شروع کریں |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker میں خوش آمدید |  |
| `pending` | Pending sync | ہم آہنگی باقی ہے |  |
| `per_portion` | per portion | فی حصہ |  |
| `pick_day` | Pick a day above. | اوپر سے ایک دن منتخب کریں۔ |  |
| `pin_change` | Change PIN | PIN تبدیل کریں |  |
| `pin_enter` | Enter your PIN | اپنا PIN درج کریں |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN میں بالکل 4 ہندسے ہونے چاہیئں۔ |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | خاندان کے ساتھ مشترک فون پر مفید۔ ایپ کھولنے پر 4 ہندسوں کا PIN مانگا جاتا ہے، اور ایک منٹ دور رہنے کے بعد دوبارہ مانگا جاتا ہے۔ |  |
| `pin_lock` | App lock | ایپ لاک |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | 4 ہندسوں کا PIN منتخب کریں |  |
| `pin_remove` | Remove PIN | PIN ہٹائیں |  |
| `pin_removed` | PIN removed. | PIN ہٹا دیا گیا۔ |  |
| `pin_saved` | PIN saved. | PIN محفوظ ہو گیا۔ |  |
| `pin_set` | Set PIN | PIN مقرر کریں |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN غلط ہے۔ دوبارہ کوشش کریں۔ |  |
| `portion_q` | Portion | مقدار |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | آپ کی اندراجات اس ڈیوائس پر اس فون کے محفوظ کی اسٹور میں رکھی چابی سے خفیہ کی گئی ہیں۔ جب تک آپ مطالعہ کا سرور مقرر نہ کریں، کچھ بھی کہیں نہیں بھیجا جاتا۔ کوئی تجزیہ نہیں، کوئی اشتہار نہیں۔ |  |
| `privacy_title` | Privacy | رازداری |  |
| `profile` | Profile and medicines | پروفائل اور دوائیں |  |
| `progress_title` | Progress | پیش رفت |  |
| `protein` | Protein | پروٹین |  |
| `pulse` | Pulse | نبض |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | تخمینے حدود کی صورت میں ہیں کیونکہ ایک ہی پکوان گھر گھر بدلتا ہے۔ یہ کیلوری گننے کے لیے نہیں، پیٹرن تلاش کرنے کے لیے ہیں۔ |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | اس فون پر ہندی آواز انسٹال نہیں ہے۔ |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | آپ کے منتخب کردہ وقت پر ایک پرسکون اطلاع۔ لگاتار دن ٹوٹنے پر شرمسار نہیں کیا جاتا، کوئی اشتہار نہیں۔ |  |
| `reminder_off` | Reminder off | یاد دہانی آف |  |
| `reminder_on` | Reminder on | یاد دہانی آن |  |
| `reminder_time` | Reminder time | یاد دہانی کا وقت |  |
| `reminders` | Daily reminder | روزانہ یاد دہانی |  |
| `remove` | Remove | ہٹائیں |  |
| `remove_confirm` | Remove this item? | یہ چیز ہٹائیں؟ |  |
| `save` | Save | محفوظ کریں |  |
| `save_failed` | Could not save. Please try again. | محفوظ نہیں ہو سکا۔ براہِ کرم دوبارہ کوشش کریں۔ |  |
| `save_today` | Save today | آج کا محفوظ کریں |  |
| `saved` | Saved on this device. Encrypted. | اس آلے پر محفوظ کیا گیا۔ خفیہ شدہ۔ |  |
| `search_food` | Search a dish in English or Hindi | انگریزی یا ہندی میں پکوان تلاش کریں |  |
| `settings_title` | Settings | ترتیبات |  |
| `share` | Share | شیئر کریں |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | اس فون پر کوئی ایپ فائل وصول نہیں کر سکتی۔ میل یا فائل ایپ انسٹال کر کے دوبارہ کوشش کریں۔ |  |
| `sleep` | Sleep last night (hours) | گذشتہ رات کی نیند (گھنٹے) |  |
| `sodium` | Salt (sodium) | نمک (سوڈیم) |  |
| `streak` | Day streak | دنوں کی لگاتاریت |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | یہ درست پتہ نہیں لگتا۔ |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | ہم آہنگی ناکام ہوئی۔ اندراجات اس فون پر محفوظ ہیں اور دوبارہ کوشش کی جائے گی۔ |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | اختیاری۔ آپ کے رابطہ کار سرور کا پتہ دیتے ہیں۔ سب کچھ صرف اسی فون پر رکھنے کے لیے خالی چھوڑ دیں۔ |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | HTTPS پتہ استعمال کریں۔ صحت کا ڈیٹا کبھی بھی بغیر خفیہ کاری کے نہیں بھیجا جاتا۔ |  |
| `sync_never` | Not synced yet. | ابھی تک ہم آہنگ نہیں ہوا۔ |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | ابھی ہم آہنگ کریں |  |
| `sync_offline` | No internet right now. Entries queued. | ابھی انٹرنیٹ نہیں ہے۔ اندراجات قطار میں ہیں۔ |  |
| `sync_ok` | Synced. All entries are on the server. | ہم آہنگ ہو گیا۔ تمام اندراجات سرور پر ہیں۔ |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | پتہ محفوظ کریں |  |
| `sync_title` | Institution sync | مطالعہ کی ہم آہنگی |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | سرور کا پتہ |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | تاریخ |  |
| `tab_progress` | Progress | پیش رفت |  |
| `tab_settings` | Settings | ترتیبات |  |
| `tab_today` | Today | آج |  |
| `this_week` | This week | اس ہفتے |  |
| `todays_total` | Today\'s estimate | آج کا تخمینہ |  |
| `total_carbs` | Carbohydrate | کاربوہائیڈریٹ |  |
| `uncertainty` | Range, not a single number | ایک ہی عدد نہیں، ایک حد |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | صرف وہی درج کریں جو آپ نے ناپا ہو۔ خالی چھوڑنے کا مطلب ہے کہ نہیں ناپا گیا، اور یہ بھی مفید معلومات ہے۔ |  |
| `vitals_title` | Readings | ریڈنگز |  |
| `weight` | Weight (kg) | وزن (kg) |  |
| `wellbeing_title` | How was the day? | دن کیسا رہا؟ |  |
| `yes` | Yes | ہاں |  |

## Site strings — Urdu

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | اس ڈیمو کے بارے میں |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK ڈاؤن لوڈ کریں |  |
| `action_menu` | Open menu | مینو کھولیں |  |
| `action_theme` | Switch theme | تھیم تبدیل کریں |  |
| `addFood` | Add food | کھانا شامل کریں |  |
| `addMed` | + Add another | + ایک اور شامل کریں |  |
| `adherence` | medicines taken | دوائیں لی گئیں |  |
| `ageLabel` | Age band | عمر کا زمرہ |  |
| `allFoods` | All | سب |  |
| `askClinician` | Ask a qualified clinician. | کسی قابل ڈاکٹر سے پوچھیں۔ |  |
| `assistantInputPh` | Ask a question | ایک سوال پوچھیں |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | اس ٹول کی اپنی مدد کے متن سے لیے گئے سوالات کے جوابات۔ نہ کوئی AI، نہ تشخیص، نہ مشورہ۔ |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | ڈسپلے کی زبان بدلنے سے صرف لیبل بدلتے ہیں۔ ریکارڈ کیے گئے اقدام مستحکم کوڈز رہتے ہیں، اس لیے کسی دن کا ریکارڈ کبھی دوبارہ نہیں لکھا جاتا۔ |  |
| `assistantListen` | Listen | سنیں |  |
| `assistantNav` | Guide | رہنما |  |
| `assistantSend` | Send | بھیجیں |  |
| `assistantTitle` | Khai Guide | خائی رہنما |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | میرے پاس اس کا جواب نہیں ہے۔ میں صرف اس ٹول کے استعمال کے بارے میں سوالات کا جواب دیتا ہوں۔ |  |
| `avgBp` | avg BP | اوسط BP |  |
| `back` | Back | واپس |  |
| `bmiNote` | Not a diagnosis. | تشخیص نہیں۔ |  |
| `bpSys` | Systolic | سسٹولک |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | اسے اعلان نہیں، بلیو پرنٹ سمجھ کر پڑھیں: کسی ہسپتال تیناتی، پائلٹ، توثیق یا شراکت کا دعویٰ نہیں کیا گیا۔ |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | سچی بات: شرکتی ایپ اور براؤزر ڈیمو آج موجود ہیں۔ یہاں موجود ہر ہسپتال جزو صرف ایک ڈیزائن تجویز ہے۔ |  |
| `codeLabel` | Participant code | شرکت کرنے والے کا کوڈ |  |
| `codeShort` | Code | کوڈ |  |
| `completeDays` | complete days | مکمل دن |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | کھانا، دوا کی حالت (جب تجویز کی گئی ہو) اور کم از کم ایک پیمائش والے دنوں کو 21 سے تقسیم کیا جاتا ہے۔ یہ یادداشت سے نہیں، محفوظ اندراجات سے گنا جاتا ہے۔ |  |
| `conditionsLabel` | Conditions (select all that apply) | صحت کے حالات (جو لاگو ہوں سب منتخب کریں) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | آپ فیصلہ کرتے ہیں کہ کیا درج کرنا ہے۔ اس ڈیمو میں سب کچھ اِس براؤزر کی مقامی اسٹوریج میں رہتا ہے — کوئی سرور نہیں اور کچھ بھی اپلوڈ نہیں ہوتا۔ Android ایپ میں اندراجات فون پر خفیہ کی جاتی ہیں۔ کوئی نام، پتہ، سرکاری شناختی نمبر یا رابطہ فہرست حاصل نہیں کی جاتی۔ آپ کسی بھی وقت سب کچھ مٹا سکتے ہیں۔ |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | میں نے یہ پڑھا ہے اور سمجھتا ہوں کہ یہ براؤزر ڈیمو اصل طبی ریکارڈوں کے لیے نہیں ہے۔ |  |
| `consentTitle` | Consent | رضامندی |  |
| `dayComplete` | Day complete | دن مکمل |  |
| `demoBadge` | Demo | ڈیمو |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | صرف ڈیمو · کوئی طبی آلہ نہیں · اصل طبی ریکارڈوں کے لیے نہیں۔ |  |
| `downloadToast` | {name} downloaded. | {name} ڈاؤن لوڈ ہو گیا۔ |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | مسودۂ ترجمہ — طبی استعمال سے پہلے مقامی بولنے والے کی جانب سے جائزہ ضروری ہے۔ |  |
| `early` | early signal | ابتدائی اشارہ |  |
| `eraseBtn` | Erase my data | میرا ڈیٹا مٹائیں |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | یہ اِس براؤزر سے پروفائل، ہر دن اور ہر ترتیب کو ہٹا دیتا ہے۔ اسے واپس نہیں لایا جا سکتا۔ |  |
| `eraseTitle` | Erase everything | سب کچھ مٹائیں |  |
| `eraseYes` | Erase everything | سب کچھ مٹائیں |  |
| `errCode` | Please enter your participant code. | براہِ کرم اپنا شرکتی کوڈ درج کریں۔ |  |
| `errConsent` | Consent is required to continue. | جاری رکھنے کے لیے رضامندی ضروری ہے۔ |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | بلغ ریڈنگز گفتگو کے لیے نشان زد کی جاتی ہیں۔ ایپ کبھی تشخیص نہیں کرتی اور نہ ہی نسخہ بدلتی ہے۔ |  |
| `escalateNone` | No threshold flags in the recent record. | حالیہ ریکارڈ میں کوئی حد اشارہ نہیں ہے۔ |  |
| `escalateTitle` | Flags for the clinician | ڈاکٹر کے لیے نوٹس لینے والی باتیں |  |
| `estTotal` | Today’s estimate | آج کا تخمینہ |  |
| `exportBackup` | Complete backup (JSON) | مکمل بیک اپ (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | صحت کا ریکارڈ (FHIR R4) |  |
| `exportFood` | Food log (CSV) | کھانے کی لاگ (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | روزانہ پیمائش (CSV) |  |
| `exportPrint` | Clinician summary (print) | ڈاکٹر کا خلاصہ (پرنٹ) |  |
| `exportsTitle` | Export & share | برآمد اور اشتراک |  |
| `eyebrow_capability` | Capability map | صلاحیت کا نقشہ |  |
| `eyebrow_demo` | Browser demo · no install | براؤزر ڈیمو · انسٹال کی ضرورت نہیں |  |
| `eyebrow_hospital` | Hospital deployment · reference design | ہسپتال کی تیناتی · حوالہ ڈیزائن |  |
| `fasting` | Fasting | روزہ |  |
| `foodItemsOne` | 1 item | 1 چیز |  |
| `foodLogged` | Food | کھانا |  |
| `foodPickerTitle` | Choose a dish | پکوان منتخب کریں |  |
| `footerNote` | Nothing leaves this browser. | اِس براؤزر سے کچھ بھی باہر نہیں جاتا۔ |  |
| `footer_browser_demo` | Browser demo | براؤزر ڈیمو |  |
| `footer_contact` | Contact | رابطہ |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | صرف ڈیمو · کوئی طبی آلہ نہیں · Zhongshan Hospital، HIMSS یا کسی بھی نامزد صحت نظام سے کوئی وابستگی نہیں ہے۔ |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | ملاقاتوں کے درمیان وقت کے لیے ایک پیمائشی آلہ۔ مشترک فونوں، کم بیٹری اور دور دراز کلینکوں کے لیے Jamshedpur میں بنایا گیا۔ |  |
| `footer_hospital_design` | Hospital design | ہسپتال ڈیزائن |  |
| `footer_limits` | Limits and answers | حدود اور جوابات |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | یہ کوئی طبی آلہ نہیں ہے۔ Zhongshan Hospital، HIMSS یا کسی بھی نامزد صحت نظام سے کوئی وابستگی نہیں ہے۔ |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | اِس براؤزر سے کچھ بھی باہر نہیں جاتا۔ |  |
| `footer_product` | Product | پروڈکٹ |  |
| `footer_transparency` | Transparency | شفافیت |  |
| `footer_verification` | Verification | تصدیق |  |
| `glucose` | Blood sugar | خون میں شکر |  |
| `head_404` | That page is not here. | وہ صفحہ یہاں نہیں ہے۔ |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | ایک بند چکر، اُن جگہوں کے لیے بنایا گیا جہاں ہسپتال کبھی نہیں پہنچتا۔ |  |
| `head_functions` | Every function, honestly labelled. | ہر فعل، ایمانداری سے نشان زد۔ |  |
| `head_hospital` | The hospital is the unit of change. | ہسپتال ہی تبدیلی کی اکائی ہے۔ |  |
| `head_privacy` | Your record stays yours. | آپ کا ریکارڈ آپ کا ہی رہتا ہے۔ |  |
| `head_security` | What is protected, and what is not. | کیا محفوظ ہے، کیا نہیں۔ |  |
| `historyTitle` | The last 21 days | پچھلے 21 دن |  |
| `hospAudit` | Audit trail | آڈٹ ٹریل |  |
| `hospCohort` | Cohort | گروہ |  |
| `hospComplete` | complete | مکمل |  |
| `hospDisc1` | Prescribed but not dispensed | تجویز کی گئی مگر فراہم نہیں کی گئی |  |
| `hospDiscrepancies` | Medication discrepancies | دوائیوں میں اختلاف |  |
| `hospOpenHospital` | Open hospital control room | ہسپتال کنٹرول روم کھولیں |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | یہاں جائزہ پیکٹ دیکھنے کے لیے شرکتی ایپ میں تقریباً ایک ہفتہ درج کریں۔ |  |
| `hospReviewPack` | Today's review pack | آج کا جائزہ پیکٹ |  |
| `hospitalBack` | Back to app | ایپ پر واپس |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | اسی ریکارڈ کے گرد بنائی گئی ہسپتال تہہ کا ڈیزائن خاکہ۔ نیچے دیا گیا گروہ مصنوعی ہے — کوئی اصل مریض نہیں، کوئی ہسپتال تعلق نہیں، کوئی طبی فیصلہ نہیں۔ |  |
| `hospitalTitle` | Hospital control room | ہسپتال کنٹرول روم |  |
| `hospital_layer` | Hospital deployment layer | ہسپتال تیناتی تہہ |  |
| `hospital_s1` | Status of this document | اس دستاویز کی حیثیت |  |
| `hospital_s10` | Governance and safety | حکمرانی اور حفاظت |  |
| `hospital_s11` | Phased rollout | مرحلہ وار تیناتی |  |
| `hospital_s12` | What would make this real | اسے حقیقی بنانے کے لیے کیا چاہیے |  |
| `hospital_s2` | Why the hospital, not just the phone | صرف فون نہیں، ہسپتال کیوں |  |
| `hospital_s3` | Reference topology | حوالہ جاتی ڈھانچہ |  |
| `hospital_s4` | Roles and access | کردار اور رسائی |  |
| `hospital_s5` | Coordinator console | رابطہ کار کنسول |  |
| `hospital_s6` | Clinician review workflow | ڈاکٹر کا جائزہ عمل |  |
| `hospital_s7` | Closed-loop medication | بند چکر دوائی |  |
| `hospital_s8` | Integration contract | انضمام معاہدہ |  |
| `hospital_s9` | Identity and data flow | شناخت اور ڈیٹا کا بہاؤ |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | تقریباً ایک ہفتہ ریکارڈ رکھیں۔ کچھ دکھانے سے پہلے کم از کم چار جوڑی دن درکار ہیں۔ |  |
| `insightsTitle` | What your own numbers say | آپ کے اپنے اعداد کیا کہتے ہیں |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | اردو |  |
| `language` | Language | زبان |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | وہی ریکارڈ ڈھانچہ، وہی کھانوں کی لائبریری اور Android ورژن جیسے اصول، مکمل طور پر اِس صفحے پر چلتے ہیں۔ اصل طبی ریکارڈوں کے لیے نہیں۔ |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | فون پر مبنی پیمائشی آلے سے لے کر ڈاکٹر کی نگرانی میں بند چکر تک، منصوبے کا طریقہ کار یہ مکمل نمونہ ہے۔ ہر فعل کو Shipped، Demo یا Roadmap کے طور پر، نامزد شرط کے ساتھ نشان زد کیا گیا ہے۔ |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | فون ریکارڈ تب ہی چکر مکمل کرتا ہے جب کلینک اس پر عمل کر سکے۔ یہ صفحہ اُس ہسپتال تہہ کے لیے ایک حوالہ ڈھانچہ ہے۔ یہ ڈیزائن بلیو پرنٹ ہے: یہاں کچھ بھی تینات نہیں کیا گیا اور کسی ہسپتال کو شریک نہیں کہا گیا۔ |  |
| `legendComplete` | Complete | مکمل |  |
| `legend_read` | How to read this map | یہ نقشہ کیسے پڑھیں |  |
| `loadSample` | Load 14-day sample | 14 دن کا نمونہ لوڈ کریں |  |
| `mealBreakfast` | Breakfast | ناشتہ |  |
| `medsLabel` | Daily medicines (name and dose) | روزانہ دوائیں (نام اور خوراک) |  |
| `medsTitle` | Medicines | دوائیں |  |
| `nav_blueprint` | Blueprint | بلیو پرنٹ |  |
| `nav_clinician` | For clinicians | ڈاکٹروں کے لیے |  |
| `nav_demo` | Demo | ڈیمو |  |
| `nav_functions` | Functions | فعالیات |  |
| `nav_hospital` | Hospital | ہسپتال |  |
| `nav_loop` | The loop | چکر |  |
| `nav_security` | Security | حفاظت |  |
| `nav_what` | What it does | یہ کیا کرتا ہے |  |
| `noDataToast` | No days recorded yet — add a day first. | ابھی کوئی دن درج نہیں ہے — پہلے ایک دن شامل کریں۔ |  |
| `noMatches` | No dish matches that. | اُس پکوان سے کوئی مماثلت نہیں ملی۔ |  |
| `noMeds` | No medicines recorded in your profile. | آپ کی پروفائل میں کوئی دوا درج نہیں ہے۔ |  |
| `not_map` | What this map is not | یہ نقشہ کیا نہیں ہے |  |
| `note` | Anything else? (optional) | اور کچھ؟ (اختیاری) |  |
| `nothingLogged` | No record for this day. | اس دن کے لیے کوئی ریکارڈ نہیں ہے۔ |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | صرف اِس براؤزر میں محفوظ۔ کوئی اکاؤنٹ نہیں، کوئی اپلوڈ نہیں۔ |  |
| `planAccept` | Accept | قبول کریں |  |
| `planAccepted` | Marked accepted in this demo. | اس ڈیمو میں قبول شدہ نشان زد کیا گیا۔ |  |
| `planAcceptedState` | accepted | قبول شدہ |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | کھانے کی اقدار گھریلو مقدار کے تخمینے ہیں، تولی ہوئی پیمائش نہیں؛ انہیں حدود کے طور پر دکھایا گیا ہے۔ پیٹرن مسودے ایک ہی شخص کے چند جوڑی دنوں سے آتے ہیں — یہ ڈاکٹر کے لیے اشارے ہیں، نتائج نہیں۔ |  |
| `planConfidenceTitle` | How sure is this? | یہ کتنا یقینی ہے؟ |  |
| `planDecision` | Demo decision | ڈیمو فیصلہ |  |
| `planDraftLabel` | Draft for review | جائزے کے لیے مسودہ |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | ترمیم جائزے کی میٹنگ میں ڈاکٹر کے ساتھ ہوتی ہے؛ یہ ڈیمو صرف فیصلہ درج کرتا ہے۔ |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | پہلے تقریباً ایک ہفتے کا کھانا اور پیمائش درج کریں۔ مسودے کے لیے کم از کم چار جوڑی دن درکار ہیں۔ |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | ایک غذائی ماہر کے جائزے کے لیے مسودہ، صرف آپ کے اپنے درج کیے گئے دنوں سے بنایا گیا۔ صرف نمونے کے طور پر — مشورہ نہیں۔ |  |
| `planLowConfidence` | Low confidence — only a few paired days. | کم اعتماد — صرف چند جوڑی دن ہیں۔ |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | صرف نمونے کے لیے۔ نہ مشورہ، نہ تشخیص۔ اس مسودے کی وجہ سے اپنا کھانا یا دوائیں نہ بدلیں — اہل ڈاکٹر فیصلہ کرتا ہے۔ |  |
| `planPaired` | Built from {n} days that have both food and a reading. | {n} دنوں سے بنایا گیا، جن میں کھانا اور پڑھائی دونوں شامل ہیں۔ |  |
| `planTitle` | Weekly plan draft | ہفتہ وار منصوبے کا مسودہ |  |
| `planTypePortion` | Portion | مقدار |  |
| `prevDay` | Previous day | پچھلا دن |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | پرنٹ ڈائیلاگ میں ایک صفحے کے خلاصے کے لیے “PDF کے طور پر محفوظ کریں” منتخب کریں۔ |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} مکمل دن · {logged} دن درج کیے گئے |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} مکمل دن · {logged} دن درج کیا گیا |  |
| `progressTitle` | Progress | پیش رفت |  |
| `recentDays` | Recent days | حالیہ دن |  |
| `removedToast` | Removed. | ہٹا دیا گیا۔ |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | تفویض شدہ شرکاء کا جائزہ پیکٹ، نشان اور ماخذ دنوں سے منسلک مسودوں کے ساتھ دیکھتا ہے۔ |  |
| `roleCoordinator` | Coordinator | رابطہ کار |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | گروہ کی مکملی، جائزہ قطار اور آڈٹ ٹریل دیکھتا ہے۔ نسخہ تبدیل نہیں کر سکتا۔ |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | دوا میں مماثلت نہ ہونے کی قطار اور تجویز → فراہم → لی گئی مراحل دیکھتا ہے۔ |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | ہر سطر کا اصول: سافٹ ویئر پہلے پڑھتا ہے، انسان فیصلہ کرتا ہے۔ |  |
| `sampleTitle` | Sample data | نمونہ ڈیٹا |  |
| `saveToday` | Save today’s record | آج کا ریکارڈ محفوظ کریں |  |
| `savedToast` | Saved in this browser. | اِس براؤزر میں محفوظ کیا گیا۔ |  |
| `settingsTitle` | Settings | ترتیبات |  |
| `skip` | Skip to demo | ڈیمو پر جائیں |  |
| `skip_content` | Skip to content | مواد پر جائیں |  |
| `start` | Start recording | ریکارڈ کرنا شروع کریں |  |
| `status` | Status | حالت |  |
| `status_demo` | Demo | ڈیمو |  |
| `status_roadmap` | Roadmap | روڈ میپ |  |
| `status_shipped` | Shipped | جاری کیا گیا |  |
| `stepProfile` | 1 · Who | 1 · کون |  |
| `tabToday` | Today | آج |  |
| `taken` | Taken | لی گئی |  |
| `thisWeek` | this week | اس ہفتے |  |
| `title_404` | Page not found — Khai Tracker | صفحہ نہیں ملا — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | ڈیجیٹل تبدیلی کا بلیو پرنٹ — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — براؤزر ڈیمو |  |
| `title_functions` | Function map — Khai Tracker | فعالی نقشہ — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | ہسپتال تیناتی بلیو پرنٹ — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — آپ کا دن، ناپا گیا |  |
| `title_privacy` | Privacy — Khai Tracker | رازداری — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | حفاظت — Khai Tracker |  |
| `vitalsTitle` | Readings | ریڈنگز |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | کھانے اور صحت کا روزانہ ریکارڈ، تاکہ آپ اور آپ کے ڈاکٹر ملاقاتوں کے درمیان حقیقتاً کیا ہو رہا ہے دیکھ سکیں۔ یہ ریکارڈ رکھتا ہے؛ علاج کا مشورہ نہیں دیتا۔ |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker میں خوش آمدید |  |
| `wellbeingTitle` | How was the day? | دن کیسا رہا؟ |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Urdu (ur)
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
