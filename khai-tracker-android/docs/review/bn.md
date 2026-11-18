# Bengali (bn) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Bengali (বাংলা)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/bn.json` (app and site)
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

## App strings — Bengali

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | সম্পর্কে |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nKhai Foods Pvt Ltd, Jamshedpur, Jharkhand, India দ্বারা তৈরি।\n\nভাগাভাগি করা ফোন, অনিয়মিত নেটওয়ার্ক এবং মিশ্র ভারতীয় খাবারের জন্য ডিজাইন করা। অফলাইন প্রথম। কোনো তৃতীয় পক্ষের analytics নেই। কোনো বিজ্ঞাপন নেই। |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | পণ্য মালিক: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + খাবার যোগ করুন |  |
| `add_medicines` | Add medicines | ওষুধ যোগ করুন |  |
| `already_saved` | Saved. You can keep editing and save again. | সংরক্ষিত। আপনি সম্পাদনা চালিয়ে আবার সংরক্ষণ করতে পারেন। |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | একজন যোগ্য চিকিৎসকের সাথে পরামর্শ করুন। |  |
| `assistant_input_ph` | Ask a question | একটি প্রশ্ন জিজ্ঞাসা করুন |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | এই টুলের নিজস্ব সহায়তা পাঠ থেকে নেওয়া প্রশ্নের উত্তর। কোনো AI নেই, কোনো রোগনির্ণয় নেই, কোনো পরামর্শ নেই। |  |
| `assistant_listen` | Listen | শুনুন |  |
| `assistant_send` | Send | পাঠান |  |
| `assistant_tab` | Guide | গাইড |  |
| `assistant_title` | Khai Guide | খাই গাইড |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | এর উত্তর আমার কাছে নেই। আমি শুধু এই টুল ব্যবহার সম্পর্কে প্রশ্নের উত্তর দিতে পারি। |  |
| `back` | Back | ফিরে যান |  |
| `bp_dia` | Diastolic (lower) | ডায়াস্টলিক (নিচের) |  |
| `bp_sys` | Systolic (upper) | সিস্টলিক (উপরের) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | বাতিল |  |
| `carbs` | Carbohydrate | কার্বোহাইড্রেট |  |
| `close` | Close | বন্ধ |  |
| `completeness` | 21-day completeness | 21 দিনের সম্পূর্ণতা |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | যেসব দিনে খাবার, ওষুধ এবং একটি মাপের ফলাফল আছে, তা 21 দিয়ে ভাগ করা হয়। এটি সংরক্ষিত এন্ট্রি থেকে গণনা করা হয়, স্মৃতি থেকে নয়। |  |
| `confirm` | Confirm | নিশ্চিত করুন |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | আপনি নিজে ঠিক করেন কী রেকর্ড করবেন। আপনার এন্ট্রিগুলো এই ফোনেই এনক্রিপ্ট করে রাখা হয় এবং শুধুমাত্র তখনই Khai গবেষণা সার্ভারে পাঠানো হয় যখন আপনার সমন্বয়কারী আপনাকে একটি সার্ভার ঠিকানা দেন। আপনি যেকোনো সময় সবকিছু মুছে ফেলতে পারেন। কোনো নাম, ঠিকানা, Aadhaar নম্বর বা যোগাযোগ তালিকা সংগৃহীত হয় না। আপনি নিজের ডেটা মুছে ফেলে অংশগ্রহণ থেকে সরে আসতে পারেন। |  |
| `consent_check` | I have read or heard this, and I agree to take part. | আমি এটি পড়েছি বা শুনেছি এবং অংশ নিতে সম্মতি দিচ্ছি। |  |
| `consent_listen` | Listen in Hindi | হিন্দিতে শুনুন |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | সম্মতি সংস্করণ 1.0 · এই ডিভাইসে সময়সহ রেকর্ড করা |  |
| `consent_title` | Consent | সম্মতি |  |
| `day_detail` | Day detail | দিনের বিবরণ |  |
| `days_logged` | Days logged | রেকর্ড করা দিন |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker একটি ট্র্যাকিং টুল, চিকিৎসা পরামর্শ নয়। এটি কখনো রোগ নির্ণয় করে না এবং কখনো প্রেসক্রিপশন বদলায় না। |  |
| `done` | Done | সম্পন্ন |  |
| `dose_hint` | Dose (optional) | ডোজ (ঐচ্ছিক) |  |
| `edit_day` | Edit this day | এই দিনটি সম্পাদনা করুন |  |
| `edit_profile` | Edit profile | প্রোফাইল সম্পাদনা |  |
| `energy` | Energy | শক্তি |  |
| `erase` | Erase my data | আমার ডেটা মুছে ফেলুন |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | এটি এই ফোনে আপনার প্রতিটি এন্ট্রি, প্রোফাইল এবং রিমাইন্ডার সেটিংস স্থায়ীভাবে মুছে ফেলে। এটি ফিরিয়ে আনা যাবে না। |  |
| `erase_yes` | Erase everything | সবকিছু মুছে ফেলুন |  |
| `estimated` | estimated | অনুমানিত |  |
| `export_backup` | Full backup (JSON) | সম্পূর্ণ ব্যাকআপ (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | স্বাস্থ্য রেকর্ড (FHIR JSON) |  |
| `export_food` | Food log (CSV) | খাবারের রেকর্ড (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | শুধু আপনার বেছে নেওয়া লোকেদের সাথে শেয়ার করুন। ফাইলগুলো শুধু তখনই ফোন থেকে বের হয় যখন আপনি শেয়ারে ট্যাপ করেন। |  |
| `export_metrics` | Daily readings (CSV) | দৈনিক মাপ (CSV) |  |
| `export_summary` | Clinician summary (PDF) | ক্লিনিশিয়ান সারাংশ (PDF) |  |
| `export_title` | Export and share | রপ্তানি ও শেয়ার |  |
| `export_working` | Preparing file… | ফাইল তৈরি করা হচ্ছে… |  |
| `fat` | Fat | চর্বি |  |
| `food_items` | %1$d food items | %1$d টি খাবার আইটেম |  |
| `food_library_title` | Food library | খাবারের তালিকা |  |
| `glucose` | Blood sugar | রক্তের চিনি |  |
| `glucose_fasting` | Fasting | খালি পেটে |  |
| `glucose_pp` | After food | খাবারের পর |  |
| `hide_previews` | Hide this app in the recent-apps preview | সাম্প্রতিক অ্যাপের প্রিভিউতে এই অ্যাপটি লুকান |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | ভর্তি বর্গ মানে ওই দিনের এন্ট্রি আছে। দেখতে বা সংশোধন করতে যেকোনো দিনে ট্যাপ করুন। |  |
| `history_title` | Last 21 days | গত 21 দিন |  |
| `insight_descriptive` | description | বর্ণনা |  |
| `insight_early` | early signal | প্রাথমিক ইঙ্গিত |  |
| `insight_moderate` | moderate signal | মাঝারি ইঙ্গিত |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | এগুলো আপনার নিজের এন্ট্রি সম্পর্কে পর্যবেক্ষণ, রোগ নির্ণয় নয় এবং চিকিৎসা সুপারিশও নয়। |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | এক সপ্তাহ রেকর্ড রাখুন। কমপক্ষে পাঁচ দিনের মাপের ফলাফল হলে প্যাটার্ন দেখা যাবে। |  |
| `insights_title` | What your own data shows | আপনার নিজের ডেটা কী দেখায় |  |
| `kcal` | Energy | শক্তি |  |
| `language` | Language / भाषा | ভাষা / भाषা |  |
| `loading` | Loading… | লোড হচ্ছে… |  |
| `meal_breakfast` | Breakfast | প্রাতঃরাশ |  |
| `meal_dinner` | Dinner | রাতের খাবার |  |
| `meal_lunch` | Lunch | দুপুরের খাবার |  |
| `meal_snacks` | Snacks & drinks | জলখাবার ও পানীয় |  |
| `meds_changed` | Changed | বদলিয়েছেন |  |
| `meds_empty` | No medicines listed yet. | এখনো কোনো ওষুধ তালিকাভুক্ত নেই। |  |
| `meds_hint` | Tick what you actually did today. | আজ আপনি আসলে কী করেছেন তা টিক দিন। |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | আপনার প্রোফাইলে কোনো ওষুধ তালিকাভুক্ত নেই। একবার যোগ করে দিন, তারপর প্রতিদিন টিক দিন। |  |
| `meds_skipped` | Skipped | এড়িয়ে গেছেন |  |
| `meds_summary` | %1$d of %2$d medicines taken | %2$d টির মধ্যে %1$d টি ওষুধ খেয়েছেন |  |
| `meds_taken` | Taken | খেয়েছেন |  |
| `meds_title` | Medicines | ওষুধ |  |
| `mood` | Mood | মনোভাব |  |
| `no` | No | না |  |
| `no_food_yet` | Nothing added yet | এখনো কিছু যোগ করা হয়নি |  |
| `note` | Anything else? (optional) | আর কিছু? (ঐচ্ছিক) |  |
| `nothing_logged` | No entry for this day. | এই দিনের কোনো এন্ট্রি নেই। |  |
| `notif_channel` | Daily reminder | দৈনিক রিমাইন্ডার |  |
| `notif_channel_desc` | One daily reminder to record your day. | দিনের রেকর্ড রাখতে একটি দৈনিক রিমাইন্ডার। |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | দুই মিনিট শান্তভাবে: আজ কী খেয়েছেন এবং কী মেপেছেন? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | দৈনিক রিমাইন্ডার পেতে বিজ্ঞপ্তির অনুমতি দিন। |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + আরও যোগ করুন |  |
| `onboard_age` | Age group | বয়স গোষ্ঠী |  |
| `onboard_age_ph` | Select | নির্বাচন করুন |  |
| `onboard_code` | Participant code | অংশগ্রহণকারী কোড |  |
| `onboard_code_ph` | e.g. K01 | যেমন K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | স্বাস্থ্য অবস্থা (প্রযোজ্য সবগুলোতে টিক দিন) |  |
| `onboard_error_age` | Please choose an age group. | অনুগ্রহ করে একটি বয়স গোষ্ঠী বেছে নিন। |  |
| `onboard_error_code` | Please enter your participant code. | অনুগ্রহ করে আপনার অংশগ্রহণকারী কোড লিখুন। |  |
| `onboard_error_consent` | Please confirm consent to continue. | এগিয়ে যেতে অনুগ্রহ করে সম্মতি নিশ্চিত করুন। |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | দৈনিক খাদ্য ও স্বাস্থ্য রেকর্ড, যা আপনার এবং আপনার ক্লিনিশিয়ানকে ভিজিটের মাঝে আসলেই কী হচ্ছে তা দেখতে সাহায্য করে। এটি একটি ট্র্যাকিং টুল, চিকিৎসা পরামর্শ নয়। |  |
| `onboard_meds` | Daily medicines (name and dose) | দৈনিক ওষুধ (নাম ও ডোজ) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | যেমন Metformin 500 mg |  |
| `onboard_start` | Start tracking | ট্র্যাকিং শুরু করুন |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker-এ স্বাগতম |  |
| `pending` | Pending sync | সিঙ্ক বাকি আছে |  |
| `per_portion` | per portion | প্রতি অংশে |  |
| `pick_day` | Pick a day above. | উপর থেকে একটি দিন বেছে নিন। |  |
| `pin_change` | Change PIN | PIN বদলান |  |
| `pin_enter` | Enter your PIN | আপনার PIN লিখুন |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN ঠিক 4 ডিজিটের হতে হবে। |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | ভাগাভাগি করা পারিবারিক ফোনে কাজে লাগে। অ্যাপ খোলার সময় 4 ডিজিটের PIN চাওয়া হয় এবং এক মিনিট অন্যমনস্ক থাকার পর আবার চাওয়া হয়। |  |
| `pin_lock` | App lock | অ্যাপ লক |  |
| `pin_new` | Choose a 4-digit PIN | 4 ডিজিটের PIN বেছে নিন |  |
| `pin_remove` | Remove PIN | PIN সরান |  |
| `pin_removed` | PIN removed. | PIN সরানো হয়েছে। |  |
| `pin_saved` | PIN saved. | PIN সংরক্ষিত। |  |
| `pin_set` | Set PIN | PIN সেট করুন |  |
| `pin_wrong` | Wrong PIN. Try again. | ভুল PIN। আবার চেষ্টা করুন। |  |
| `portion_q` | Portion | পরিমাণ |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | আপনার এন্ট্রিগুলো এই ডিভাইসে এনক্রিপ্ট করে রাখা হয়, যার চাবি এই ফোনের নিরাপদ কীস্টোরে রাখা আছে। আপনি একটি গবেষণা সার্ভার সেট না করা পর্যন্ত কিছুই কোথাও পাঠানো হয় না। কোনো analytics নেই, কোনো বিজ্ঞাপন নেই। |  |
| `privacy_title` | Privacy | গোপনীয়তা |  |
| `profile` | Profile and medicines | প্রোফাইল ও ওষুধ |  |
| `progress_title` | Progress | অগ্রগতি |  |
| `protein` | Protein | প্রোটিন |  |
| `pulse` | Pulse | নাড়ি |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | অনুমানগুলো পরিসীমা আকারে দেখানো হয় কারণ একই খাবার বাড়িভেদে আলাদা হয়। এগুলো প্যাটার্ন খোঁজার জন্য, ক্যালোরি গণনার জন্য নয়। |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | এই ফোনে হিন্দি কণ্ঠস্বর ইনস্টল করা নেই। |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | আপনার বেছে নেওয়া সময়ে একটি শান্ত বিজ্ঞপ্তি। স্ট্রিক নিয়ে লজ্জাজনক চাপ নেই, বিজ্ঞাপনও নেই। |  |
| `reminder_off` | Reminder off | রিমাইন্ডার বন্ধ |  |
| `reminder_on` | Reminder on | রিমাইন্ডার চালু |  |
| `reminder_time` | Reminder time | রিমাইন্ডারের সময় |  |
| `reminders` | Daily reminder | দৈনিক রিমাইন্ডার |  |
| `remove` | Remove | সরান |  |
| `remove_confirm` | Remove this item? | এই আইটেমটি সরাবেন? |  |
| `save` | Save | সংরক্ষণ |  |
| `save_failed` | Could not save. Please try again. | সংরক্ষণ করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন। |  |
| `save_today` | Save today | আজকের রেকর্ড সংরক্ষণ |  |
| `saved` | Saved on this device. Encrypted. | এই ডিভাইসে সংরক্ষিত। এনক্রিপ্ট করা। |  |
| `search_food` | Search a dish in English or Hindi | ইংরেজি বা হিন্দিতে খাবারের নাম খুঁজুন |  |
| `settings_title` | Settings | সেটিংস |  |
| `share` | Share | শেয়ার |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | এই ফোনে কোনো অ্যাপ ফাইলটি গ্রহণ করতে পারবে না। একটি মেইল বা ফাইল অ্যাপ ইনস্টল করে আবার চেষ্টা করুন। |  |
| `sleep` | Sleep last night (hours) | গত রাতের ঘুম (ঘণ্টা) |  |
| `sodium` | Salt (sodium) | লবণ (সোডিয়াম) |  |
| `streak` | Day streak | টানা দিন |  |
| `sync_bad_url` | That does not look like a valid address. | এটি বৈধ ঠিকানা মনে হচ্ছে না। |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | সিঙ্ক ব্যর্থ। এন্ট্রিগুলো এই ফোনে নিরাপদ আছে এবং আবার চেষ্টা করা হবে। |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | ঐচ্ছিক। আপনার সমন্বয়কারী আপনাকে সার্ভার ঠিকানা দেন। শুধু এই ফোনেই সব রাখতে এটি ফাঁকা রাখুন। |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | HTTPS ঠিকানা ব্যবহার করুন। স্বাস্থ্য ডেটা কখনো এনক্রিপ্ট না করে পাঠানো হয় না। |  |
| `sync_never` | Not synced yet. | এখনো সিঙ্ক করা হয়নি। |  |
| `sync_now` | Sync now | এখন সিঙ্ক করুন |  |
| `sync_offline` | No internet right now. Entries queued. | এখন ইন্টারনেট নেই। এন্ট্রিগুলো সারিতে রাখা হয়েছে। |  |
| `sync_ok` | Synced. All entries are on the server. | সিঙ্ক হয়েছে। সব এন্ট্রি সার্ভারে আছে। |  |
| `sync_save` | Save address | ঠিকানা সংরক্ষণ |  |
| `sync_title` | Study sync | গবেষণা সিঙ্ক |  |
| `sync_url` | Server address | সার্ভার ঠিকানা |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | ইতিহাস |  |
| `tab_progress` | Progress | অগ্রগতি |  |
| `tab_settings` | Settings | সেটিংস |  |
| `tab_today` | Today | আজ |  |
| `this_week` | This week | এই সপ্তাহ |  |
| `todays_total` | Today\'s estimate | আজকের অনুমান |  |
| `total_carbs` | Carbohydrate | কার্বোহাইড্রেট |  |
| `uncertainty` | Range, not a single number | একটি সংখ্যা নয়, একটি পরিসীমা |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | শুধু যা মাপেন তা পূরণ করুন। ফাঁকা রাখা মানে মাপেননি — এও এক ধরনের দরকারি তথ্য। |  |
| `vitals_title` | Readings | মাপের ফলাফল |  |
| `weight` | Weight (kg) | ওজন (kg) |  |
| `wellbeing_title` | How was the day? | দিনটি কেমন ছিল? |  |
| `yes` | Yes | হ্যাঁ |  |

## Site strings — Bengali

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | এই ডেমো সম্পর্কে |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK ডাউনলোড করুন |  |
| `action_menu` | Open menu | মেনু খুলুন |  |
| `action_theme` | Switch theme | থিম বদলান |  |
| `addFood` | Add food | খাবার যোগ করুন |  |
| `addMed` | + Add another | + আরও যোগ করুন |  |
| `adherence` | medicines taken | ওষুধ খাওয়া |  |
| `ageLabel` | Age band | বয়সের শ্রেণি |  |
| `allFoods` | All | সব |  |
| `askClinician` | Ask a qualified clinician. | একজন যোগ্য চিকিৎসকের সাথে পরামর্শ করুন। |  |
| `assistantInputPh` | Ask a question | একটি প্রশ্ন জিজ্ঞাসা করুন |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | এই টুলের নিজস্ব সহায়তা পাঠ থেকে নেওয়া প্রশ্নের উত্তর। কোনো AI নেই, কোনো রোগনির্ণয় নেই, কোনো পরামর্শ নেই। |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | ডিসপ্লে ভাষা বদলালে শুধু লেবেল বদলায়। রেকর্ড করা মান স্থিতিশীল কোড হিসেবে থাকে, তাই কোনো দিনের রেকর্ড কখনো বদলায় না। |  |
| `assistantListen` | Listen | শুনুন |  |
| `assistantNav` | Guide | গাইড |  |
| `assistantSend` | Send | পাঠান |  |
| `assistantTitle` | Khai Guide | খাই গাইড |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | এর উত্তর আমার কাছে নেই। আমি শুধু এই টুল ব্যবহার সম্পর্কে প্রশ্নের উত্তর দিতে পারি। |  |
| `avgBp` | avg BP | গড় BP |  |
| `back` | Back | ফিরে যান |  |
| `bmiNote` | Not a diagnosis. | রোগ নির্ণয় নয়। |  |
| `bpSys` | Systolic | সিস্টলিক |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | এটি একটি ঘোষণা নয়, ব্লুপ্রিন্ট হিসেবে পড়ুন: কোনো হাসপাতাল মোতায়েন, পাইলট, অনুমোদন বা অংশীদারিত্ব দাবি করা হয় না। |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | সত্যি কথা: অংশগ্রহণকারী অ্যাপ এবং ব্রাউজার ডেমো আজই আছে। এখানকার প্রতিটি হাসপাতাল উপাদান একটি ডিজাইন প্রস্তাব। |  |
| `codeLabel` | Participant code | অংশগ্রহণকারী কোড |  |
| `codeShort` | Code | কোড |  |
| `completeDays` | complete days | সম্পূর্ণ দিন |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | যেসব দিনে খাবার, ওষুধের অবস্থা (যেখানে নির্ধারিত) এবং কমপক্ষে একটি মাপ আছে, তা 21 দিয়ে ভাগ করা হয়। সংরক্ষিত এন্ট্রি থেকে গণনা করা হয়, স্মৃতি থেকে নয়। |  |
| `conditionsLabel` | Conditions (select all that apply) | অবস্থা (প্রযোজ্য সবগুলো নির্বাচন করুন) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | আপনি নিজে ঠিক করেন কী লিখবেন। এই ডেমোতে সবকিছু এই ব্রাউজারের স্থানীয় সঞ্চয়স্থানে থাকে — কোনো সার্ভার নেই এবং কিছু আপলোড হয় না। Android অ্যাপে এন্ট্রিগুলো ফোনে এনক্রিপ্ট করা থাকে। কোনো নাম, ঠিকানা, সরকারি পরিচয়পত্র বা যোগাযোগ তালিকা সংগৃহীত হয় না। আপনি যেকোনো সময় সবকিছু মুছে ফেলতে পারেন। |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | আমি এটি পড়েছি এবং বুঝেছি যে এই ব্রাউজার ডেমোটি আসল ক্লিনিকাল রেকর্ডের জন্য নয়। |  |
| `consentTitle` | Consent | সম্মতি |  |
| `dayComplete` | Day complete | দিন সম্পূর্ণ |  |
| `demoBadge` | Demo | ডেমো |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | শুধু ডেমো · চিকিৎসা ডিভাইস নয় · আসল ক্লিনিকাল রেকর্ডের জন্য নয়। |  |
| `downloadToast` | {name} downloaded. | {name} ডাউনলোড হয়েছে। |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | খসড়া অনুবাদ — ক্লিনিকাল ব্যবহারের আগে মাতৃভাষী পর্যালোচনা প্রয়োজন। |  |
| `early` | early signal | প্রাথমিক ইঙ্গিত |  |
| `eraseBtn` | Erase my data | আমার ডেটা মুছে ফেলুন |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | এটি এই ব্রাউজার থেকে প্রোফাইল, প্রতিটি দিন এবং প্রতিটি সেটিংস মুছে ফেলে। এটি ফিরিয়ে আনা যাবে না। |  |
| `eraseTitle` | Erase everything | সবকিছু মুছে ফেলুন |  |
| `eraseYes` | Erase everything | সবকিছু মুছে ফেলুন |  |
| `errCode` | Please enter your participant code. | অনুগ্রহ করে আপনার অংশগ্রহণকারী কোড লিখুন। |  |
| `errConsent` | Consent is required to continue. | এগিয়ে যেতে সম্মতি আবশ্যক। |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | বেড়ে যাওয়া মাপগুলো একটি কথোপকথনের জন্য চিহ্নিত করা হয়। অ্যাপ কখনো রোগ নির্ণয় করে না বা প্রেসক্রিপশন বদলায় না। |  |
| `escalateNone` | No threshold flags in the recent record. | সাম্প্রতিক রেকর্ডে কোনো সীমা পতাকা নেই। |  |
| `escalateTitle` | Flags for the clinician | ক্লিনিশিয়ানের জন্য পতাকা |  |
| `estTotal` | Today’s estimate | আজকের অনুমান |  |
| `exportBackup` | Complete backup (JSON) | সম্পূর্ণ ব্যাকআপ (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | স্বাস্থ্য রেকর্ড (FHIR R4) |  |
| `exportFood` | Food log (CSV) | খাবারের রেকর্ড (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | দৈনিক মাপ (CSV) |  |
| `exportPrint` | Clinician summary (print) | ক্লিনিশিয়ান সারাংশ (প্রিন্ট) |  |
| `exportsTitle` | Export & share | রপ্তানি ও শেয়ার |  |
| `eyebrow_capability` | Capability map | ক্ষমতা মানচিত্র |  |
| `eyebrow_demo` | Browser demo · no install | ব্রাউজার ডেমো · ইনস্টলের প্রয়োজন নেই |  |
| `eyebrow_hospital` | Hospital deployment · reference design | হাসপাতাল মোতায়েন · রেফারেন্স ডিজাইন |  |
| `fasting` | Fasting | খালি পেটে |  |
| `foodItemsOne` | 1 item | 1 টি আইটেম |  |
| `foodLogged` | Food | খাবার |  |
| `foodPickerTitle` | Choose a dish | একটি খাবার বেছে নিন |  |
| `footerNote` | Nothing leaves this browser. | এই ব্রাউজার থেকে কিছুই বের হয় না। |  |
| `footer_browser_demo` | Browser demo | ব্রাউজার ডেমো |  |
| `footer_contact` | Contact | যোগাযোগ |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | শুধু ডেমো · চিকিৎসা ডিভাইস নয় · Zhongshan Hospital, HIMSS বা কোনো নামকরা স্বাস্থ্য ব্যবস্থার সাথে কোনো সংস্রব নেই। |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | ভিজিটের মাঝের সময়ের জন্য একটি পরিমাপ যন্ত্র। ভাগাভাগি করা ফোন, কম চার্জের ব্যাটারি এবং দূরের ক্লিনিকের জন্য Jamshedpur-এ তৈরি। |  |
| `footer_hospital_design` | Hospital design | হাসপাতাল ডিজাইন |  |
| `footer_limits` | Limits and answers | সীমা ও উত্তর |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | এটি চিকিৎসা ডিভাইস নয়। Zhongshan Hospital, HIMSS বা কোনো নামকরা স্বাস্থ্য ব্যবস্থার সাথে কোনো সংস্রব নেই। |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | এই ব্রাউজার থেকে কিছুই বের হয় না। |  |
| `footer_product` | Product | পণ্য |  |
| `footer_transparency` | Transparency | স্বচ্ছতা |  |
| `footer_verification` | Verification | যাচাই |  |
| `glucose` | Blood sugar | রক্তের চিনি |  |
| `head_404` | That page is not here. | এই পৃষ্ঠাটি এখানে নেই। |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | একটি বদ্ধ চক্র, যেসব জায়গায় হাসপাতাল পৌঁছায় না তার জন্য তৈরি। |  |
| `head_functions` | Every function, honestly labelled. | প্রতিটি ফাংশন সৎভাবে লেবেল করা। |  |
| `head_hospital` | The hospital is the unit of change. | হাসপাতালই পরিবর্তনের একক। |  |
| `head_privacy` | Your record stays yours. | আপনার রেকর্ড আপনারই থাকে। |  |
| `head_security` | What is protected, and what is not. | কী রক্ষা করা হয়, কী নয়। |  |
| `historyTitle` | The last 21 days | গত 21 দিন |  |
| `hospAudit` | Audit trail | অডিট ট্রেল |  |
| `hospCohort` | Cohort | গোষ্ঠী |  |
| `hospComplete` | complete | সম্পূর্ণ |  |
| `hospDisc1` | Prescribed but not dispensed | নির্ধারিত কিন্তু বিতরণ করা হয়নি |  |
| `hospDiscrepancies` | Medication discrepancies | ওষুধের অমিল |  |
| `hospOpenHospital` | Open hospital control room | হাসপাতাল কন্ট্রোল রুম খুলুন |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | এখানে পর্যালোচনা প্যাকেট দেখতে অংশগ্রহণকারী অ্যাপে প্রায় এক সপ্তাহ রেকর্ড করুন। |  |
| `hospReviewPack` | Today's review pack | আজকের পর্যালোচনা প্যাকেট |  |
| `hospitalBack` | Back to app | অ্যাপে ফিরে যান |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | একই রেকর্ডের চারপাশে তৈরি হাসপাতাল স্তরের একটি ডিজাইন স্কেচ। নিচের গোষ্ঠীটি কৃত্রিম — কোনো আসল রোগী নেই, কোনো হাসপাতাল সংযোগ নেই, কোনো ক্লিনিকাল সিদ্ধান্ত নেই। |  |
| `hospitalTitle` | Hospital control room | হাসপাতাল কন্ট্রোল রুম |  |
| `hospital_layer` | Hospital deployment layer | হাসপাতাল মোতায়েন স্তর |  |
| `hospital_s1` | Status of this document | এই নথির অবস্থা |  |
| `hospital_s10` | Governance and safety | শাসন ও নিরাপত্তা |  |
| `hospital_s11` | Phased rollout | ধাপে ধাপে চালু |  |
| `hospital_s12` | What would make this real | এটি বাস্তব হতে কী লাগবে |  |
| `hospital_s2` | Why the hospital, not just the phone | শুধু ফোন নয়, হাসপাতাল কেন |  |
| `hospital_s3` | Reference topology | রেফারেন্স টোপোলজি |  |
| `hospital_s4` | Roles and access | ভূমিকা ও প্রবেশাধিকার |  |
| `hospital_s5` | Coordinator console | সমন্বয়কারী কনসোল |  |
| `hospital_s6` | Clinician review workflow | ক্লিনিশিয়ান পর্যালোচনা কর্মপ্রবাহ |  |
| `hospital_s7` | Closed-loop medication | বদ্ধ-চক্র ওষুধ ব্যবস্থা |  |
| `hospital_s8` | Integration contract | ইন্টিগ্রেশন চুক্তি |  |
| `hospital_s9` | Identity and data flow | পরিচয় ও ডেটা প্রবাহ |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | প্রায় এক সপ্তাহ রেকর্ড রাখুন। কিছু দেখানোর আগে কমপক্ষে চারটি জোড়া দিন দরকার। |  |
| `insightsTitle` | What your own numbers say | আপনার নিজের সংখ্যা কী বলে |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | ভাষা |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | একই রেকর্ডের গঠন, একই খাবারের তালিকা এবং Android বিল্ডের মতো নিয়ম, সম্পূর্ণরূপে এই পৃষ্ঠায় চলে। আসল ক্লিনিকাল রেকর্ডের জন্য নয়। |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | এটি প্রকল্পের সম্পূর্ণ ধরণ: ফোন-ভিত্তিক পরিমাপ যন্ত্র থেকে শুরু করে ক্লিনিশিয়ান-তত্ত্বাবধানে বদ্ধ চক্র পর্যন্ত। প্রতিটি ফাংশন শিপড, ডেমো বা রোডম্যাপ হিসেবে চিহ্নিত, সাথে একটি নির্দিষ্ট শর্ত। |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | ফোনের রেকর্ড তখনই চক্র বদ্ধ করে যখন ক্লিনিক সেটি ব্যবহার করতে পারে। এই পৃষ্ঠাটি সেই হাসপাতাল স্তরের জন্য একটি রেফারেন্স আর্কিটেকচার। এটি একটি ডিজাইন ব্লুপ্রিন্ট: এখানে কিছুই মোতায়েন করা হয়নি এবং কোনো হাসপাতালকে অংশীদার হিসেবে নাম দেওয়া হয়নি। |  |
| `legendComplete` | Complete | সম্পূর্ণ |  |
| `legend_read` | How to read this map | এই মানচিত্র কীভাবে পড়বেন |  |
| `loadSample` | Load 14-day sample | 14-দিনের নমুনা লোড করুন |  |
| `mealBreakfast` | Breakfast | প্রাতঃরাশ |  |
| `medsLabel` | Daily medicines (name and dose) | দৈনিক ওষুধ (নাম ও ডোজ) |  |
| `medsTitle` | Medicines | ওষুধ |  |
| `nav_blueprint` | Blueprint | ব্লুপ্রিন্ট |  |
| `nav_clinician` | For clinicians | ক্লিনিশিয়ানদের জন্য |  |
| `nav_demo` | Demo | ডেমো |  |
| `nav_functions` | Functions | ফাংশন |  |
| `nav_hospital` | Hospital | হাসপাতাল |  |
| `nav_loop` | The loop | চক্রটি |  |
| `nav_security` | Security | নিরাপত্তা |  |
| `nav_what` | What it does | এটি কী করে |  |
| `noDataToast` | No days recorded yet — add a day first. | এখনো কোনো দিন রেকর্ড হয়নি — প্রথমে একটি দিন যোগ করুন। |  |
| `noMatches` | No dish matches that. | এমন কোনো খাবার নেই। |  |
| `noMeds` | No medicines recorded in your profile. | আপনার প্রোফাইলে কোনো ওষুধ রেকর্ড নেই। |  |
| `not_map` | What this map is not | এই মানচিত্রটি যা নয় |  |
| `note` | Anything else? (optional) | আর কিছু? (ঐচ্ছিক) |  |
| `nothingLogged` | No record for this day. | এই দিনের কোনো রেকর্ড নেই। |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | শুধু এই ব্রাউজারে সংরক্ষিত। কোনো অ্যাকাউন্ট নেই, কোনো আপলোড নেই। |  |
| `planAccept` | Accept | গ্রহণ করুন |  |
| `planAccepted` | Marked accepted in this demo. | এই ডেমোতে গৃহীত হিসেবে চিহ্নিত। |  |
| `planAcceptedState` | accepted | গৃহীত |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | খাবারের মানগুলো ঘরোয়া অংশের অনুমান, যা একটি সংখ্যা নয়, পরিসীমা হিসেবে দেখানো হয়। প্যাটার্নের খসড়া একজন মানুষের কয়েকটি জোড়া দিন থেকে আসে — এগুলো ক্লিনিশিয়ানের জন্য ইঙ্গিত, ফলাফল নয়। |  |
| `planConfidenceTitle` | How sure is this? | এটি কতটা নির্ভরযোগ্য? |  |
| `planDecision` | Demo decision | ডেমো সিদ্ধান্ত |  |
| `planDraftLabel` | Draft for review | পর্যালোচনার জন্য খসড়া |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | সম্পাদনা পর্যালোচনা সভায় ক্লিনিশিয়ানের সাথে হয়; এই ডেমো শুধু সিদ্ধান্তটি রেকর্ড করে। |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | প্রথমে প্রায় এক সপ্তাহের খাবার ও মাপ রেকর্ড করুন। খসড়ার জন্য কমপক্ষে চারটি জোড়া দিন দরকার। |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | একজন ডাইটিশিয়ানের পর্যালোচনার জন্য খসড়া, শুধু আপনার নিজের রেকর্ড করা দিন থেকে তৈরি। উদাহরণমূলক — পরামর্শ নয়। |  |
| `planLowConfidence` | Low confidence — only a few paired days. | কম নিশ্চিততা — শুধু কয়েকটি জোড়া দিন। |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | শুধু উদাহরণমূলক। পরামর্শ নয়, রোগ নির্ণয় নয়। এই খসড়ার কারণে আপনার খাবার বা ওষুধ বদলাবেন না — সিদ্ধান্ত নেন একজন যোগ্য ক্লিনিশিয়ান। |  |
| `planPaired` | Built from {n} days that have both food and a reading. | {n} দিন থেকে তৈরি, যেদিনে খাবার ও একটি মাপ দুটোই আছে। |  |
| `planTitle` | Weekly plan draft | সাপ্তাহিক পরিকল্পনার খসড়া |  |
| `planTypePortion` | Portion | অংশ |  |
| `prevDay` | Previous day | আগের দিন |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | এক-পৃষ্ঠার সারাংশের জন্য প্রিন্ট ডায়ালগে “Save as PDF” বেছে নিন। |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} সম্পূর্ণ দিন · {logged} দিন রেকর্ড |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} সম্পূর্ণ দিন · {logged} দিন রেকর্ড |  |
| `progressTitle` | Progress | অগ্রগতি |  |
| `recentDays` | Recent days | সাম্প্রতিক দিনগুলো |  |
| `removedToast` | Removed. | সরানো হয়েছে। |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | নির্ধারিত অংশগ্রহণকারীদের জন্য পর্যালোচনা প্যাকেট দেখেন, যাতে পতাকা ও খসড়া আইটেম উৎস দিনের সাথে যুক্ত থাকে। |  |
| `roleCoordinator` | Coordinator | সমন্বয়কারী |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | গোষ্ঠীর সম্পূর্ণতা, পর্যালোচনা সারি এবং অডিট ট্রেল দেখেন। প্রেসক্রিপশন বদলাতে পারেন না। |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | ওষুধের অমিল সারি এবং নির্ধারিত → বিতরণ → গৃহীত পর্যায়গুলো দেখেন। |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | প্রতিটি সারিতে একই নিয়ম: প্রথমে সফটওয়্যার পড়ে, সিদ্ধান্ত নেয় মানুষ। |  |
| `sampleTitle` | Sample data | নমুনা ডেটা |  |
| `saveToday` | Save today’s record | আজকের রেকর্ড সংরক্ষণ করুন |  |
| `savedToast` | Saved in this browser. | এই ব্রাউজারে সংরক্ষিত। |  |
| `settingsTitle` | Settings | সেটিংস |  |
| `skip` | Skip to demo | ডেমোতে যান |  |
| `skip_content` | Skip to content | বিষ্যবস্তুতে যান |  |
| `start` | Start recording | রেকর্ডিং শুরু করুন |  |
| `status` | Status | অবস্থা |  |
| `status_demo` | Demo | ডেমো |  |
| `status_roadmap` | Roadmap | রোডম্যাপ |  |
| `status_shipped` | Shipped | শিপড |  |
| `stepProfile` | 1 · Who | 1 · কে |  |
| `tabToday` | Today | আজ |  |
| `taken` | Taken | খেয়েছেন |  |
| `thisWeek` | this week | এই সপ্তাহ |  |
| `title_404` | Page not found — Khai Tracker | পৃষ্ঠা পাওয়া যায়নি — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | ডিজিটাল-ট্রান্সফরমেশন ব্লুপ্রিন্ট — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — ব্রাউজার ডেমো |  |
| `title_functions` | Function map — Khai Tracker | ফাংশন মানচিত্র — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | হাসপাতাল মোতায়েন ব্লুপ্রিন্ট — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — আপনার দিন, পরিমাপ করা |  |
| `title_privacy` | Privacy — Khai Tracker | গোপনীয়তা — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | নিরাপত্তা — Khai Tracker |  |
| `vitalsTitle` | Readings | মাপের ফলাফল |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | খাবার ও স্বাস্থ্যের দৈনিক রেকর্ড, যাতে আপনি এবং আপনার ক্লিনিশিয়ান ভিজিটের মাঝে আসলে কী হয় তা দেখতে পারেন। এটি রেকর্ড রাখে। এটি চিকিৎসা পরামর্শ দেয় না। |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker-এ স্বাগতম |  |
| `wellbeingTitle` | How was the day? | দিনটি কেমন ছিল? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Bengali (bn)
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
