# Arabic (ar) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Arabic (العربية)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/ar.json` (app and site)
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

## App strings — Arabic

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | حول |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nمن إنتاج Khai Foods Pvt Ltd، جامشيدبور، جاركهاند، الهند.\n\nمصمّم للهواتف المشتركة والشبكات المتقطعة والوجبات الهندية المتنوّعة. يعمل دون اتصال أولًا. لا تحليلات من طرف ثالث. لا إعلانات. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | مالك المنتج: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + إضافة طعام |  |
| `add_medicines` | Add medicines | إضافة أدوية |  |
| `already_saved` | Saved. You can keep editing and save again. | تم الحفظ. يمكنك الاستمرار في التعديل والحفظ مرة أخرى. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | اسأل أخصائياً مؤهلاً. |  |
| `assistant_input_ph` | Ask a question | اطرح سؤالاً |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | إجابات مأخوذة فقط من نص المساعدة الخاص بهذه الأداة. لا ذكاء اصطناعي، ولا تشخيص، ولا نصيحة. |  |
| `assistant_listen` | Listen | استمع |  |
| `assistant_send` | Send | إرسال |  |
| `assistant_tab` | Guide | دليل |  |
| `assistant_title` | Khai Guide | دليل خاي |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | لا أملك إجابة عن هذا. أجيب فقط عن الأسئلة الخاصة باستخدام هذه الأداة. |  |
| `back` | Back | رجوع |  |
| `bp_dia` | Diastolic (lower) | الانبساطي (الأدنى) |  |
| `bp_sys` | Systolic (upper) | الانقباضي (الأعلى) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | تتبّع |  |
| `cancel` | Cancel | إلغاء |  |
| `carbs` | Carbohydrate | الكربوهيدرات |  |
| `close` | Close | إغلاق |  |
| `completeness` | 21-day completeness | اكتمال تسجيل 21 يومًا |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | الأيام التي فيها وجبات وأدوية وقياس واحد، مقسومة على 21. تُحسب من الإدخالات المحفوظة، لا من الذاكرة. |  |
| `confirm` | Confirm | تأكيد |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | أنت تختار ما تسجّله. تبقى إدخالاتك مشفّرة على هذا الهاتف، ولا تُرسل إلى خادم دراسة Khai إلا إذا زوّدك المنسّق بعنوان خادم. يمكنك محو كل شيء في أي وقت. لا يتم جمع أي اسم أو عنوان أو رقم Aadhaar أو قائمة جهات اتصال. يمكنك الانسحاب بمحو بياناتك. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | قرأتُ هذا أو سمعته، وأوافق على المشاركة. |  |
| `consent_listen` | Listen in Hindi | استمع بالهندية |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | إصدار الموافقة 1.0 · مسجّل على هذا الجهاز مع طابع زمني |  |
| `consent_title` | Consent | الموافقة |  |
| `day_detail` | Day detail | تفاصيل اليوم |  |
| `days_logged` | Days logged | الأيام المسجّلة |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker أداة تتبّع، وليس مشورة طبية. لا يقدّم تشخيصًا ولا يغيّر أي وصفة طبية. |  |
| `done` | Done | تم |  |
| `dose_hint` | Dose (optional) | الجرعة (اختياري) |  |
| `edit_day` | Edit this day | تعديل هذا اليوم |  |
| `edit_profile` | Edit profile | تعديل الملف الشخصي |  |
| `energy` | Energy | الطاقة |  |
| `erase` | Erase my data | امحُ بياناتي |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | يحذف هذا نهائيًا كل إدخال وملفك الشخصي وإعدادات التذكير على هذا الهاتف. لا يمكن التراجع عن ذلك. |  |
| `erase_yes` | Erase everything | امحُ كل شيء |  |
| `estimated` | estimated | تقديري |  |
| `export_backup` | Full backup (JSON) | نسخة احتياطية كاملة (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | السجل الصحي (FHIR JSON) |  |
| `export_food` | Food log (CSV) | سجل الطعام (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | شارك فقط مع من تختار. لا تغادر الملفات الهاتف إلا عند الضغط على مشاركة. |  |
| `export_metrics` | Daily readings (CSV) | القياسات اليومية (CSV) |  |
| `export_summary` | Clinician summary (PDF) | ملخص للمختص (PDF) |  |
| `export_title` | Export and share | التصدير والمشاركة |  |
| `export_working` | Preparing file… | جارٍ تحضير الملف… |  |
| `fat` | Fat | الدهون |  |
| `food_items` | %1$d food items | %1$d من أصناف الطعام |  |
| `food_library_title` | Food library | مكتبة الطعام |  |
| `glucose` | Blood sugar | سكر الدم |  |
| `glucose_fasting` | Fasting | صيام |  |
| `glucose_pp` | After food | بعد الطعام |  |
| `hide_previews` | Hide this app in the recent-apps preview | إخفاء هذا التطبيق من معاينة التطبيقات الأخيرة |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | المربع الممتلئ يعني أن هناك إدخالًا. اضغط أي يوم لمراجعته أو تصحيحه. |  |
| `history_title` | Last 21 days | آخر 21 يومًا |  |
| `insight_descriptive` | description | وصف |  |
| `insight_early` | early signal | إشارة مبكرة |  |
| `insight_moderate` | moderate signal | إشارة متوسطة |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | هذه ملاحظات عن إدخالاتك أنت، وليست تشخيصًا ولا توصية علاجية. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | واصل التسجيل لمدة أسبوع. تظهر الأنماط بعد وجود خمسة أيام على الأقل فيها قياسات. |  |
| `insights_title` | What your own data shows | ما تُظهره بياناتك وحدك |  |
| `kcal` | Energy | الطاقة |  |
| `language` | Language / भाषा | اللغة / भाषा |  |
| `loading` | Loading… | جارٍ التحميل… |  |
| `meal_breakfast` | Breakfast | الفطور |  |
| `meal_dinner` | Dinner | العشاء |  |
| `meal_lunch` | Lunch | الغداء |  |
| `meal_snacks` | Snacks & drinks | الوجبات الخفيفة والمشروبات |  |
| `meds_changed` | Changed | تم التغيير |  |
| `meds_empty` | No medicines listed yet. | لا توجد أدوية مضافة بعد. |  |
| `meds_hint` | Tick what you actually did today. | علّم ما فعلته فعلًا اليوم. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | لا توجد أدوية في ملفك الشخصي. أضفها مرة واحدة، ثم علّمها كل يوم. |  |
| `meds_skipped` | Skipped | تم التخطي |  |
| `meds_summary` | %1$d of %2$d medicines taken | تم تناول %1$d من أصل %2$d من الأدوية |  |
| `meds_taken` | Taken | تم التناول |  |
| `meds_title` | Medicines | الأدوية |  |
| `mood` | Mood | المزاج |  |
| `no` | No | لا |  |
| `no_food_yet` | Nothing added yet | لم تُضف أي شيء بعد |  |
| `note` | Anything else? (optional) | أي شيء آخر؟ (اختياري) |  |
| `nothing_logged` | No entry for this day. | لا يوجد إدخال لهذا اليوم. |  |
| `notif_channel` | Daily reminder | تذكير يومي |  |
| `notif_channel_desc` | One daily reminder to record your day. | تذكير واحد يوميًا لتسجيل يومك. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | دقيقتان هادئتان: ماذا أكلت، وماذا قِست اليوم؟ |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | اسمح بالإشعارات ليصل إليك التذكير اليومي. |  |
| `ok` | OK | حسنًا |  |
| `onboard_add_med` | + Add another | + إضافة المزيد |  |
| `onboard_age` | Age group | الفئة العمرية |  |
| `onboard_age_ph` | Select | اختر |  |
| `onboard_code` | Participant code | رمز المشارك |  |
| `onboard_code_ph` | e.g. K01 | مثال: K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | الحالات الصحية (اختر كل ما ينطبق) |  |
| `onboard_error_age` | Please choose an age group. | يرجى اختيار فئة عمرية. |  |
| `onboard_error_code` | Please enter your participant code. | يرجى إدخال رمز المشارك. |  |
| `onboard_error_consent` | Please confirm consent to continue. | يرجى تأكيد الموافقة للمتابعة. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | سجل يومي للطعام والصحة يساعدك ويساعد مختصك على رؤية ما يحدث فعليًا بين الزيارات. إنه أداة تتبّع، وليس مشورة طبية. |  |
| `onboard_meds` | Daily medicines (name and dose) | الأدوية اليومية (الاسم والجرعة) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | مثال: ميتفورمين 500 mg |  |
| `onboard_start` | Start tracking | ابدأ التتبّع |  |
| `onboard_title` | Welcome to Khai Tracker | مرحبًا بك في Khai Tracker |  |
| `pending` | Pending sync | بانتظار المزامنة |  |
| `per_portion` | per portion | لكل حصة |  |
| `pick_day` | Pick a day above. | اختر يومًا من الأعلى. |  |
| `pin_change` | Change PIN | تغيير PIN |  |
| `pin_enter` | Enter your PIN | أدخل رقم PIN |  |
| `pin_four` | A PIN must be exactly 4 digits. | يجب أن يتكوّن PIN من 4 خانات بالضبط. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | مفيد على هاتف مشترك مع العائلة. يُطلب رقم PIN من 4 خانات عند فتح التطبيق، ومرة أخرى بعد دقيقة من الغياب. |  |
| `pin_lock` | App lock | قفل التطبيق |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | اختر رقم PIN من 4 خانات |  |
| `pin_remove` | Remove PIN | إزالة PIN |  |
| `pin_removed` | PIN removed. | تمت إزالة PIN. |  |
| `pin_saved` | PIN saved. | تم حفظ PIN. |  |
| `pin_set` | Set PIN | تعيين PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN غير صحيح. حاول مرة أخرى. |  |
| `portion_q` | Portion | الحصة |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | إدخالاتك مشفّرة على هذا الجهاز بمفتاح محفوظ في مخزن المفاتيح الآمن في هذا الهاتف. لا يُرسل أي شيء إلى أي مكان ما لم تضع عنوان خادم دراسة. لا يوجد تحليلات ولا إعلانات. |  |
| `privacy_title` | Privacy | الخصوصية |  |
| `profile` | Profile and medicines | الملف الشخصي والأدوية |  |
| `progress_title` | Progress | التقدّم |  |
| `protein` | Protein | البروتين |  |
| `pulse` | Pulse | النبض |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | التقديرات نطاقات لأن الطبق نفسه يختلف من بيت لآخر. هي لاكتشاف الأنماط، لا لحساب السعرات. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | النطق الهندي غير مثبّت على هذا الهاتف. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | إشعار هادئ في الوقت الذي تختاره. لا توبٍّخ على انقطاع التسجيل، ولا إعلانات. |  |
| `reminder_off` | Reminder off | التذكير متوقف |  |
| `reminder_on` | Reminder on | التذكير مفعّل |  |
| `reminder_time` | Reminder time | وقت التذكير |  |
| `reminders` | Daily reminder | تذكير يومي |  |
| `remove` | Remove | إزالة |  |
| `remove_confirm` | Remove this item? | إزالة هذا العنصر؟ |  |
| `save` | Save | حفظ |  |
| `save_failed` | Could not save. Please try again. | تعذّر الحفظ. يرجى المحاولة مرة أخرى. |  |
| `save_today` | Save today | احفظ اليوم |  |
| `saved` | Saved on this device. Encrypted. | تم الحفظ على هذا الجهاز. مشفّر. |  |
| `search_food` | Search a dish in English or Hindi | ابحث عن طبق بالإنجليزية أو الهندية |  |
| `settings_title` | Settings | الإعدادات |  |
| `share` | Share | مشاركة |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | لا يوجد تطبيق على هذا الهاتف يمكنه استقبال الملف. ثبّت تطبيق بريد أو ملفات وأعد المحاولة. |  |
| `sleep` | Sleep last night (hours) | نوم الليلة الماضية (ساعات) |  |
| `sodium` | Salt (sodium) | الملح (الصوديوم) |  |
| `streak` | Day streak | أيام متتالية |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | لا يبدو هذا عنوانًا صالحًا. |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | فشلت المزامنة. الإدخالات آمنة على هذا الهاتف وستُعاد المحاولة. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | اختياري. يزوّدك المنسّق بعنوان الخادم. اتركه فارغًا لإبقاء كل شيء على هذا الهاتف فقط. |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | استخدم عنوان HTTPS. لا تُرسل البيانات الصحية غير مشفّرة أبدًا. |  |
| `sync_never` | Not synced yet. | لم تتم المزامنة بعد. |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | زامن الآن |  |
| `sync_offline` | No internet right now. Entries queued. | لا يوجد اتصال بالإنترنت الآن. الإدخالات في الانتظار. |  |
| `sync_ok` | Synced. All entries are on the server. | تمت المزامنة. جميع الإدخالات على الخادم. |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | حفظ العنوان |  |
| `sync_title` | Institution sync | مزامنة الدراسة |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | عنوان الخادم |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | السجل |  |
| `tab_progress` | Progress | التقدّم |  |
| `tab_settings` | Settings | الإعدادات |  |
| `tab_today` | Today | اليوم |  |
| `this_week` | This week | هذا الأسبوع |  |
| `todays_total` | Today\'s estimate | تقدير اليوم |  |
| `total_carbs` | Carbohydrate | الكربوهيدرات |  |
| `uncertainty` | Range, not a single number | نطاق، وليس رقمًا واحدًا |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | املأ ما قسته فقط. الفراغ يعني أنه لم يُقَس، وهذا معلومة مفيدة أيضًا. |  |
| `vitals_title` | Readings | القياسات |  |
| `weight` | Weight (kg) | الوزن (kg) |  |
| `wellbeing_title` | How was the day? | كيف كان يومك؟ |  |
| `yes` | Yes | نعم |  |

## Site strings — Arabic

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | حول هذا العرض التجريبي |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | تنزيل APK |  |
| `action_menu` | Open menu | فتح القائمة |  |
| `action_theme` | Switch theme | تبديل المظهر |  |
| `addFood` | Add food | إضافة طعام |  |
| `addMed` | + Add another | + إضافة المزيد |  |
| `adherence` | medicines taken | الأدوية التي تم تناولها |  |
| `ageLabel` | Age band | الفئة العمرية |  |
| `allFoods` | All | الكل |  |
| `askClinician` | Ask a qualified clinician. | اسأل أخصائياً مؤهلاً. |  |
| `assistantInputPh` | Ask a question | اطرح سؤالاً |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | إجابات مأخوذة فقط من نص المساعدة الخاص بهذه الأداة. لا ذكاء اصطناعي، ولا تشخيص، ولا نصيحة. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | تغيير لغة العرض يغيّر التسميات فقط. تبقى القيم المسجلة رموزاً ثابتة، لذلك لا يُعاد كتابة أي يوم. |  |
| `assistantListen` | Listen | استمع |  |
| `assistantNav` | Guide | دليل |  |
| `assistantSend` | Send | إرسال |  |
| `assistantTitle` | Khai Guide | دليل خاي |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | لا أملك إجابة عن هذا. أجيب فقط عن الأسئلة الخاصة باستخدام هذه الأداة. |  |
| `avgBp` | avg BP | متوسط ضغط الدم |  |
| `back` | Back | رجوع |  |
| `bmiNote` | Not a diagnosis. | ليس تشخيصًا. |  |
| `bpSys` | Systolic | الانقباضي |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | اقرأ هذا كمخطط لا كإعلان: لا يُدعى أي نشر مستشفوي أو تجربة أو تأييد أو شراكة. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | القول الصادق: تطبيق المشارك وعرض المتصفح التجريبي موجودان اليوم. كل مكوّن للمستشفى هنا مجرد مقترح تصميمي. |  |
| `codeLabel` | Participant code | رمز المشارك |  |
| `codeShort` | Code | الرمز |  |
| `completeDays` | complete days | أيام مكتملة |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | الأيام التي فيها طعام وحالة أدوية (عند وصفها) وقياس واحد على الأقل، مقسومة على 21. تُحسب من الإدخالات المحفوظة، لا من الذاكرة. |  |
| `conditionsLabel` | Conditions (select all that apply) | الحالات الصحية (اختر كل ما ينطبق) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | أنت تقرر ما تُدخله. في هذا العرض التجريبي، كل شيء يبقى في التخزين المحلي لهذا المتصفح — لا يوجد خادم ولا يُرفع أي شيء. في تطبيق Android، تكون الإدخالات مشفّرة على الهاتف. لا يتم جمع أي اسم أو عنوان أو رقم حكومي للهوية أو قائمة جهات اتصال. يمكنك محو كل شيء في أي وقت. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | قرأتُ هذا وأتفهم أن هذا العرض التجريبي ليس للسجلات السريرية الحقيقية. |  |
| `consentTitle` | Consent | الموافقة |  |
| `dayComplete` | Day complete | اكتمل يوم |  |
| `demoBadge` | Demo | عرض تجريبي |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | عرض تجريبي فقط · ليس جهازًا طبيًا · ليس للسجلات السريرية الحقيقية. |  |
| `downloadToast` | {name} downloaded. | تم تنزيل {name}. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | ترجمة مسودة — تحتاج مراجعة من متحدث أصلي قبل الاستخدام السريري. |  |
| `early` | early signal | إشارة مبكرة |  |
| `eraseBtn` | Erase my data | امحُ بياناتي |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | يحذف هذا الملف الشخصي وكل يوم وكل إعداد من هذا المتصفح. لا يمكن التراجع عن ذلك. |  |
| `eraseTitle` | Erase everything | امحُ كل شيء |  |
| `eraseYes` | Erase everything | امحُ كل شيء |  |
| `errCode` | Please enter your participant code. | يرجى إدخال رمز المشارك. |  |
| `errConsent` | Consent is required to continue. | الموافقة مطلوبة للمتابعة. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | تُشار القياسات المرتفعة للنقاش. لا يقدّم التطبيق تشخيصًا ولا يغيّر وصفة طبية. |  |
| `escalateNone` | No threshold flags in the recent record. | لا توجد إشارات تجاوز حد في السجل الأخير. |  |
| `escalateTitle` | Flags for the clinician | إشارات للمختص |  |
| `estTotal` | Today’s estimate | تقدير اليوم |  |
| `exportBackup` | Complete backup (JSON) | نسخة احتياطية كاملة (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | السجل الصحي (FHIR R4) |  |
| `exportFood` | Food log (CSV) | سجل الطعام (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | القياسات اليومية (CSV) |  |
| `exportPrint` | Clinician summary (print) | ملخص للمختص (طباعة) |  |
| `exportsTitle` | Export & share | التصدير والمشاركة |  |
| `eyebrow_capability` | Capability map | خريطة القدرات |  |
| `eyebrow_demo` | Browser demo · no install | عرض المتصفح التجريبي · بدون تثبيت |  |
| `eyebrow_hospital` | Hospital deployment · reference design | نشر المستشفى · تصميم مرجعي |  |
| `fasting` | Fasting | صيام |  |
| `foodItemsOne` | 1 item | صنف واحد |  |
| `foodLogged` | Food | الطعام |  |
| `foodPickerTitle` | Choose a dish | اختر طبقًا |  |
| `footerNote` | Nothing leaves this browser. | لا شيء يخرج من هذا المتصفح. |  |
| `footer_browser_demo` | Browser demo | عرض المتصفح التجريبي |  |
| `footer_contact` | Contact | اتصل بنا |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | عرض تجريبي فقط · ليس جهازًا طبيًا · لا توجد أي صلة بين هذا المنتج و Zhongshan Hospital أو HIMSS أو أي نظام صحي مذكور بالاسم. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | أداة قياس لما بين الزيارات. صُنعت في جامشيدبور للهواتف المشتركة والبطاريات المنخفضة والعيادات البعيدة. |  |
| `footer_hospital_design` | Hospital design | تصميم المستشفى |  |
| `footer_limits` | Limits and answers | الحدود والإجابات |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | ليس جهازًا طبيًا. لا توجد أي صلة بين هذا المنتج و Zhongshan Hospital أو HIMSS أو أي نظام صحي مذكور بالاسم. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | لا شيء يخرج من هذا المتصفح. |  |
| `footer_product` | Product | المنتج |  |
| `footer_transparency` | Transparency | الشفافية |  |
| `footer_verification` | Verification | التحقق |  |
| `glucose` | Blood sugar | سكر الدم |  |
| `head_404` | That page is not here. | تلك الصفحة غير موجودة هنا. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | حلقة مغلقة، صُممت للأماكن التي لا يصل إليها المستشفى. |  |
| `head_functions` | Every function, honestly labelled. | كل وظيفة، بوصف صادق. |  |
| `head_hospital` | The hospital is the unit of change. | المستشفى هو وحدة التغيير. |  |
| `head_privacy` | Your record stays yours. | سجلك يبقى لك. |  |
| `head_security` | What is protected, and what is not. | ما الذي يُحمى، وما الذي لا يُحمى. |  |
| `historyTitle` | The last 21 days | آخر 21 يومًا |  |
| `hospAudit` | Audit trail | سجل التدقيق |  |
| `hospCohort` | Cohort | المجموعة |  |
| `hospComplete` | complete | مكتمل |  |
| `hospDisc1` | Prescribed but not dispensed | موصوف لكن غير مُصرف |  |
| `hospDiscrepancies` | Medication discrepancies | تعارضات الأدوية |  |
| `hospOpenHospital` | Open hospital control room | افتح غرفة تحكم المستشفى |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | سجّل نحو أسبوع في تطبيق المشارك لتظهر حزمة المراجعة هنا. |  |
| `hospReviewPack` | Today's review pack | حزمة مراجعة اليوم |  |
| `hospitalBack` | Back to app | العودة إلى التطبيق |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | رسم تصميمي لطبقة المستشفى المبنية حول السجل نفسه. المجموعة أدناه مصطنعة — لا مرضى حقيقيين، ولا صلة بمستشفى، ولا قرارات سريرية. |  |
| `hospitalTitle` | Hospital control room | غرفة تحكم المستشفى |  |
| `hospital_layer` | Hospital deployment layer | طبقة نشر المستشفى |  |
| `hospital_s1` | Status of this document | حالة هذه الوثيقة |  |
| `hospital_s10` | Governance and safety | الحوكمة والسلامة |  |
| `hospital_s11` | Phased rollout | الطرح على مراحل |  |
| `hospital_s12` | What would make this real | ما الذي يجعل هذا حقيقيًا |  |
| `hospital_s2` | Why the hospital, not just the phone | لماذا المستشفى، وليس الهاتف فقط |  |
| `hospital_s3` | Reference topology | البنية المرجعية |  |
| `hospital_s4` | Roles and access | الأدوار والصلاحيات |  |
| `hospital_s5` | Coordinator console | وحدة تحكم المنسّق |  |
| `hospital_s6` | Clinician review workflow | سير عمل مراجعة المختص |  |
| `hospital_s7` | Closed-loop medication | إدارة الأدوية في حلقة مغلقة |  |
| `hospital_s8` | Integration contract | اتفاقية التكامل |  |
| `hospital_s9` | Identity and data flow | الهوية وتدفق البيانات |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | واصل التسجيل نحو أسبوع. تحتاج الأنماط إلى أربعة أيام متزاوجة على الأقل قبل أن تظهر. |  |
| `insightsTitle` | What your own numbers say | ما تقوله أرقامك وحدك |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | اللغة |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | الشكل نفسه للسجل، ومكتبة الطعام نفسها، والقواعد نفسها كما في نسخة Android، كلها تعمل داخل هذه الصفحة فقط. ليست للسجلات السريرية الحقيقية. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | هذه هي الصورة الكاملة التي يتبعها المشروع، من أداة قياس تعمل على الهاتف إلى حلقة مغلقة تحت إشراف مختص. كل وظيفة موسومة بـ«مُتاح» أو «عرض تجريبي» أو «خطة مستقبلية»، مع شرط مسبق مذكور بالاسم. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | لا تكتمل الحلقة لسجل الهاتف إلا إذا استطاعت عيادة أن تتصرف بناءً عليه. هذه الصفحة معمارية مرجعية لطبقة المستشفى. إنها مخطط تصميم: لا شيء هنا مُنفَّذ، ولا يُذكر أي مستشفى كشريك. |  |
| `legendComplete` | Complete | مكتمل |  |
| `legend_read` | How to read this map | كيف تقرأ هذه الخريطة |  |
| `loadSample` | Load 14-day sample | تحميل نموذج 14 يومًا |  |
| `mealBreakfast` | Breakfast | الفطور |  |
| `medsLabel` | Daily medicines (name and dose) | الأدوية اليومية (الاسم والجرعة) |  |
| `medsTitle` | Medicines | الأدوية |  |
| `nav_blueprint` | Blueprint | المخطط |  |
| `nav_clinician` | For clinicians | للمختصين |  |
| `nav_demo` | Demo | العرض التجريبي |  |
| `nav_functions` | Functions | الوظائف |  |
| `nav_hospital` | Hospital | المستشفى |  |
| `nav_loop` | The loop | الحلقة المغلقة |  |
| `nav_security` | Security | الأمان |  |
| `nav_what` | What it does | ماذا يفعل |  |
| `noDataToast` | No days recorded yet — add a day first. | لا توجد أيام مسجّلة بعد — أضف يومًا أولًا. |  |
| `noMatches` | No dish matches that. | لا يوجد طبق يطابق ذلك. |  |
| `noMeds` | No medicines recorded in your profile. | لا توجد أدوية مسجّلة في ملفك الشخصي. |  |
| `not_map` | What this map is not | ما ليست هذه الخريطة |  |
| `note` | Anything else? (optional) | أي شيء آخر؟ (اختياري) |  |
| `nothingLogged` | No record for this day. | لا يوجد سجل لهذا اليوم. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | مخزَّن في هذا المتصفح فقط. لا حساب، ولا رفع. |  |
| `planAccept` | Accept | قبول |  |
| `planAccepted` | Marked accepted in this demo. | تم تمييزها كمقبولة في هذا العرض التجريبي. |  |
| `planAcceptedState` | accepted | مقبول |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | قيم الطعام تقديرات لحصص منزلية معروضة كنطاقات، لا قياسات موزونة. مسودات الأنماط تأتي من أيام متزاوجة قليلة لشخص واحد — هي محفّزات للمختص، لا نتائج سريرية. |  |
| `planConfidenceTitle` | How sure is this? | ما مدى اليقين من هذا؟ |  |
| `planDecision` | Demo decision | قرار العرض التجريبي |  |
| `planDraftLabel` | Draft for review | مسودة للمراجعة |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | يتم التعديل مع المختص أثناء اجتماع المراجعة؛ هذا العرض يسجّل القرار فقط. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | سجّل نحو أسبوع من الطعام والقياسات أولًا. تحتاج المسودة إلى أربعة أيام متزاوجة على الأقل. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | مسودة ليراجعها أخصائي تغذية، مبنية فقط على الأيام التي سجّلتها. توضيحية — ليست مشورة. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | ثقة منخفضة — أيام متزاوجة قليلة فقط. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | للتوضيح فقط. ليست مشورة ولا تشخيص. لا تغيّر طعامك أو أدويتك بسبب هذه المسودة — يقرّر ذلك مختص مؤهل. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | مبنية على {n} يومًا فيه طعام وقياس معًا. |  |
| `planTitle` | Weekly plan draft | مسودة خطة أسبوعية |  |
| `planTypePortion` | Portion | الحصة |  |
| `prevDay` | Previous day | اليوم السابق |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | في نافذة الطباعة اختر «حفظ كـ PDF» للحصول على ملخص من صفحة واحدة. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} يوم مكتمل · {logged} يوم مسجّل |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} يوم مكتمل · {logged} يوم مسجّل |  |
| `progressTitle` | Progress | التقدّم |  |
| `recentDays` | Recent days | الأيام الأخيرة |  |
| `removedToast` | Removed. | تمت الإزالة. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | يرى حزمة المراجعة للمشاركين المُسندين إليه، مع إشارات وعناصر مسودة مرتبطة بالأيام المصدر. |  |
| `roleCoordinator` | Coordinator | المنسّق |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | يرى اكتمال تسجيل المجموعة وطابعة المراجعة وسجل التدقيق. لا يمكنه تغيير الوصفة الطبية. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | يرى طابعة تعارضات الأدوية ونقاط التحقق: موصوف → مُصرف → متناول. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | القاعدة في كل صف: البرنامج يقرأ أولًا، والإنسان يقرّر. |  |
| `sampleTitle` | Sample data | بيانات نموذجية |  |
| `saveToday` | Save today’s record | احفظ سجل اليوم |  |
| `savedToast` | Saved in this browser. | تم الحفظ في هذا المتصفح. |  |
| `settingsTitle` | Settings | الإعدادات |  |
| `skip` | Skip to demo | تخطَّ إلى العرض التجريبي |  |
| `skip_content` | Skip to content | تخطَّ إلى المحتوى |  |
| `start` | Start recording | ابدأ التسجيل |  |
| `status` | Status | الحالة |  |
| `status_demo` | Demo | عرض تجريبي |  |
| `status_roadmap` | Roadmap | خطة مستقبلية |  |
| `status_shipped` | Shipped | مُتاح |  |
| `stepProfile` | 1 · Who | 1 · من أنت |  |
| `tabToday` | Today | اليوم |  |
| `taken` | Taken | تم التناول |  |
| `thisWeek` | this week | هذا الأسبوع |  |
| `title_404` | Page not found — Khai Tracker | الصفحة غير موجودة — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | مخطط التحول الرقمي — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — عرض المتصفح التجريبي |  |
| `title_functions` | Function map — Khai Tracker | خريطة الوظائف — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | مخطط نشر المستشفى — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — يومك، بقياس |  |
| `title_privacy` | Privacy — Khai Tracker | الخصوصية — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | الأمان — Khai Tracker |  |
| `vitalsTitle` | Readings | القياسات |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | سجل يومي للطعام والصحة، لترى أنت والمختص ما يحدث فعليًا بين الزيارات. إنه يحفظ السجلات فقط، ولا يقدّم مشورة علاجية. |  |
| `welcomeTitle` | Welcome to Khai Tracker | مرحبًا بك في Khai Tracker |  |
| `wellbeingTitle` | How was the day? | كيف كان يومك؟ |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Arabic (ar)
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
