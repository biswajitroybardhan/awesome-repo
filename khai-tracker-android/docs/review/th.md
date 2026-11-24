# Thai (th) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Thai (ไทย)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/th.json` (app and site)
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

## App strings — Thai

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | เกี่ยวกับ |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics SDK. No advertising. | Khai Tracker 1.0.0\nสร้างโดย Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nออกแบบมาสำหรับโทรศัพท์ที่ใช้ร่วมกัน เครือข่ายที่ไม่เสถียร และอาหารอินเดียที่หลากหลาย ทำงานแบบออฟไลน์ก่อน ไม่มีการวิเคราะห์จากบริษัทภายนอก ไม่มีโฆษณา |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | เจ้าของผลิตภัณฑ์: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + เพิ่มอาหาร |  |
| `add_medicines` | Add medicines | เพิ่มยา |  |
| `already_saved` | Saved. You can keep editing and save again. | บันทึกแล้ว คุณสามารถแก้ไขต่อและบันทึกอีกครั้งได้ |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | ถามแพทย์หรือผู้เชี่ยวชาญที่ผ่านการรับรอง |  |
| `assistant_input_ph` | Ask a question | ถามคำถาม |  |
| `assistant_intro` | Questions answered from this tool\'s own help text. No AI, no diagnosis, no advice. | คำตอบมาจากข้อความช่วยเหลือของเครื่องมือนี้เท่านั้น ไม่มี AI ไม่มีการวินิจฉัย ไม่มีคำแนะนำ |  |
| `assistant_listen` | Listen | ฟัง |  |
| `assistant_send` | Send | ส่ง |  |
| `assistant_tab` | Guide | คู่มือ |  |
| `assistant_title` | Khai Guide | คู่มือ Khai |  |
| `assistant_unknown` | I don\'t have an answer for that. I only answer questions about using this tool. | ฉันไม่มีคำตอบสำหรับเรื่องนั้น ฉันตอบเฉพาะคำถามเกี่ยวกับการใช้เครื่องมือนี้ |  |
| `back` | Back | ย้อนกลับ |  |
| `bp_dia` | Diastolic (lower) | ไดแอสโตลิก (ตัวล่าง) |  |
| `bp_sys` | Systolic (upper) | ซิสโตลิก (ตัวบน) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | การติดตาม |  |
| `cancel` | Cancel | ยกเลิก |  |
| `carbs` | Carbohydrate | คาร์โบไฮเดรต |  |
| `close` | Close | ปิด |  |
| `completeness` | 21-day completeness | ความครบถ้วนใน 21 วัน |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | วันที่มีอาหาร ยา และค่าที่วัดอย่างน้อยหนึ่งค่า หารด้วย 21 นับจากรายการที่บันทึก ไม่ใช่จากความจำ |  |
| `confirm` | Confirm | ยืนยัน |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | คุณเป็นคนเลือกว่าจะบันทึกอะไร ข้อมูลที่คุณบันทึกจะถูกเข้ารหัสไว้บนโทรศัพท์เครื่องนี้ และจะส่งไปยังเซิร์ฟเวอร์การศึกษา Khai ก็ต่อเมื่อผู้ประสานงานให้ที่อยู่เซิร์ฟเวอร์แก่คุณเท่านั้น คุณสามารถลบข้อมูลทั้งหมดได้ทุกเมื่อ ไม่มีการเก็บชื่อ ที่อยู่ หมายเลข Aadhaar หรือรายชื่อผู้ติดต่อ คุณสามารถถอนตัวได้โดยลบข้อมูลของคุณ |  |
| `consent_check` | I have read or heard this, and I agree to take part. | ข้าพเจ้าได้อ่านหรือฟังข้อมูลนี้แล้ว และยินยอมเข้าร่วม |  |
| `consent_listen` | Listen in Hindi | ฟังเป็นภาษาฮินดี |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | เวอร์ชันความยินยอม 1.0 · บันทึกบนอุปกรณ์นี้พร้อมเวลา |  |
| `consent_title` | Consent | ความยินยอม |  |
| `day_detail` | Day detail | รายละเอียดของวัน |  |
| `days_logged` | Days logged | จำนวนวันที่บันทึก |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker เป็นเครื่องมือติดตาม ไม่ใช่คำแนะนำทางการแพทย์ แอปนี้ไม่เคยวินิจฉัยโรคและไม่เคยเปลี่ยนแปลงใบสั่งยา |  |
| `done` | Done | เสร็จ |  |
| `dose_hint` | Dose (optional) | ขนาดยา (ไม่บังคับ) |  |
| `edit_day` | Edit this day | แก้ไขวันนี้ |  |
| `edit_profile` | Edit profile | แก้ไขโปรไฟล์ |  |
| `energy` | Energy | พลังงาน |  |
| `erase` | Erase my data | ลบข้อมูลของฉัน |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | การนี้จะลบรายการ โปรไฟล์ และการตั้งค่าการแจ้งเตือนทั้งหมดบนโทรศัพท์เครื่องนี้อย่างถาวร ไม่สามารถย้อนกลับได้ |  |
| `erase_yes` | Erase everything | ลบข้อมูลทั้งหมด |  |
| `estimated` | estimated | โดยประมาณ |  |
| `export_backup` | Full backup (JSON) | สำรองข้อมูลทั้งหมด (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | บันทึกสุขภาพ (FHIR JSON) |  |
| `export_food` | Food log (CSV) | บันทึกอาหาร (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | แชร์กับคนที่คุณเลือกเท่านั้น ไฟล์จะออกจากโทรศัพท์ก็ต่อเมื่อคุณแตะแชร์เท่านั้น |  |
| `export_metrics` | Daily readings (CSV) | ค่าที่วัดรายวัน (CSV) |  |
| `export_summary` | Clinician summary (PDF) | สรุปสำหรับบุคลากรทางการแพทย์ (PDF) |  |
| `export_title` | Export and share | ส่งออกและแชร์ |  |
| `export_working` | Preparing file… | กำลังเตรียมไฟล์… |  |
| `fat` | Fat | ไขมัน |  |
| `food_items` | %1$d food items | %1$d รายการอาหาร |  |
| `food_library_title` | Food library | คลังอาหาร |  |
| `glucose` | Blood sugar | น้ำตาลในเลือด |  |
| `glucose_fasting` | Fasting | ตอนท้องว่าง |  |
| `glucose_pp` | After food | หลังรับประทานอาหาร |  |
| `hide_previews` | Hide this app in the recent-apps preview | ซ่อนแอปนี้ในภาพตัวอย่างรายการแอปที่เปิดล่าสุด |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | ช่องสี่เหลี่ยมที่เติมสีหมายถึงมีรายการ แตะวันใดวันหนึ่งเพื่อดูหรือแก้ไข |  |
| `history_title` | Last 21 days | 21 วันล่าสุด |  |
| `insight_descriptive` | description | คำอธิบาย |  |
| `insight_early` | early signal | สัญญาณเริ่มต้น |  |
| `insight_moderate` | moderate signal | สัญญาณปานกลาง |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | นี่เป็นข้อสังเกตจากรายการของคุณเอง ไม่ใช่การวินิจฉัยโรคและไม่ใช่คำแนะนำการรักษา |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | บันทึกต่อไปอีกสัปดาห์ รูปแบบจะปรากฏเมื่อมีอย่างน้อยห้าวันที่มีค่าการวัด |  |
| `insights_title` | What your own data shows | ข้อมูลของคุณเองบอกอะไร |  |
| `kcal` | Energy | พลังงาน |  |
| `language` | Language / भाषा | ภาษา / भाषा |  |
| `loading` | Loading… | กำลังโหลด… |  |
| `meal_breakfast` | Breakfast | อาหารเช้า |  |
| `meal_dinner` | Dinner | อาหารเย็น |  |
| `meal_lunch` | Lunch | อาหารกลางวัน |  |
| `meal_snacks` | Snacks & drinks | ของว่างและเครื่องดื่ม |  |
| `meds_changed` | Changed | เปลี่ยนแปลง |  |
| `meds_empty` | No medicines listed yet. | ยังไม่มีรายการยา |  |
| `meds_hint` | Tick what you actually did today. | ทำเครื่องหมายในสิ่งที่คุณทำจริงวันนี้ |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | ยังไม่มียาในโปรไฟล์ของคุณ เพิ่มครั้งเดียว แล้วทำเครื่องหมายทุกวัน |  |
| `meds_skipped` | Skipped | ข้าม |  |
| `meds_summary` | %1$d of %2$d medicines taken | รับประทานยาแล้ว %1$d จาก %2$d ชนิด |  |
| `meds_taken` | Taken | รับประทานแล้ว |  |
| `meds_title` | Medicines | ยา |  |
| `mood` | Mood | อารมณ์ |  |
| `no` | No | ไม่ |  |
| `no_food_yet` | Nothing added yet | ยังไม่มีรายการที่เพิ่ม |  |
| `note` | Anything else? (optional) | มีอะไรอีกไหม? (ไม่บังคับ) |  |
| `nothing_logged` | No entry for this day. | ไม่มีรายการสำหรับวันนี้ |  |
| `notif_channel` | Daily reminder | การแจ้งเตือนรายวัน |  |
| `notif_channel_desc` | One daily reminder to record your day. | การแจ้งเตือนวันละครั้งเพื่อบันทึกวันของคุณ |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | สองนาทีเงียบๆ วันนี้คุณกินอะไร และคุณวัดอะไรบ้าง? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | อนุญาตการแจ้งเตือน เพื่อให้การแจ้งเตือนรายวันส่งถึงคุณได้ |  |
| `ok` | OK | ตกลง |  |
| `onboard_add_med` | + Add another | + เพิ่มรายการอื่น |  |
| `onboard_age` | Age group | ช่วงอายุ |  |
| `onboard_age_ph` | Select | เลือก |  |
| `onboard_code` | Participant code | รหัสผู้เข้าร่วม |  |
| `onboard_code_ph` | e.g. K01 | เช่น K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | ภาวะสุขภาพ (เลือกทุกข้อที่ตรง) |  |
| `onboard_error_age` | Please choose an age group. | กรุณาเลือกช่วงอายุ |  |
| `onboard_error_code` | Please enter your participant code. | กรุณาป้อนรหัสผู้เข้าร่วม |  |
| `onboard_error_consent` | Please confirm consent to continue. | กรุณายืนยันความยินยอมเพื่อดำเนินการต่อ |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | บันทึกประจำวันเกี่ยวกับอาหารและสุขภาพ ที่ช่วยให้คุณและบุคลากรทางการแพทย์เห็นว่าเกิดอะไรขึ้นจริงระหว่างการไปพบแพทย์ นี่คือเครื่องมือติดตาม ไม่ใช่คำแนะนำทางการแพทย์ |  |
| `onboard_meds` | Daily medicines (name and dose) | ยาที่ใช้ประจำวัน (ชื่อและขนาดยา) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | เช่น Metformin 500 mg |  |
| `onboard_start` | Start tracking | เริ่มติดตาม |  |
| `onboard_title` | Welcome to Khai Tracker | ยินดีต้อนรับสู่ Khai Tracker |  |
| `pending` | Pending sync | กำลังรอการซิงก์ |  |
| `per_portion` | per portion | ต่อหนึ่งหน่วยบริโภค |  |
| `pick_day` | Pick a day above. | เลือกวันด้านบน |  |
| `pin_change` | Change PIN | เปลี่ยน PIN |  |
| `pin_enter` | Enter your PIN | ป้อน PIN ของคุณ |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN ต้องมี 4 ตัวเท่านั้น |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | มีประโยชน์บนโทรศัพท์ที่ใช้ร่วมกันในครอบครัว จะขอ PIN 4 ตัวเมื่อเปิดแอป และอีกครั้งหลังจากออกจากแอปไปหนึ่งนาที |  |
| `pin_lock` | App lock | ล็อกแอป |  |
| `pin_locked` | Too many attempts. Try again in %1$d s. | Too many attempts. Try again in %1$d s. |  |
| `pin_new` | Choose a 4-digit PIN | เลือก PIN 4 ตัว |  |
| `pin_remove` | Remove PIN | ลบ PIN |  |
| `pin_removed` | PIN removed. | ลบ PIN แล้ว |  |
| `pin_saved` | PIN saved. | บันทึก PIN แล้ว |  |
| `pin_set` | Set PIN | ตั้ง PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN ไม่ถูกต้อง กรุณาลองอีกครั้ง |  |
| `portion_q` | Portion | ขนาดรับประทาน |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent unless your institution configures sync and you give consent. No third-party analytics SDK and no advertising. | รายการของคุณถูกเข้ารหัสบนอุปกรณ์นี้ด้วยกุญแจที่เก็บไว้ในที่เก็บกุญแจที่ปลอดภัยของโทรศัพท์เครื่องนี้ ไม่มีการส่งข้อมูลไปที่ใดเว้นแต่คุณกำหนดเซิร์ฟเวอร์การศึกษา ไม่มีการวิเคราะห์ข้อมูลและไม่มีโฆษณา |  |
| `privacy_title` | Privacy | ความเป็นส่วนตัว |  |
| `profile` | Profile and medicines | โปรไฟล์และยา |  |
| `progress_title` | Progress | ความก้าวหน้า |  |
| `protein` | Protein | โปรตีน |  |
| `pulse` | Pulse | ชีพจร |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | ค่าประมาณเป็นช่วง เพราะอาหารจานเดียวกันต่างกันไปตามแต่ละครัวเรือน ใช้สำหรับหาความสัมพันธ์ ไม่ใช่นับแคลอรี |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | ไม่มีเสียงสำหรับภาษานี้ติดตั้งอยู่บนโทรศัพท์เครื่องนี้ |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | การแจ้งเตือนแบบเงียบในเวลาที่คุณเลือก ไม่มีการกดดันเรื่องวันต่อเนื่อง ไม่มีโฆษณา |  |
| `reminder_off` | Reminder off | ปิดการแจ้งเตือนแล้ว |  |
| `reminder_on` | Reminder on | เปิดการแจ้งเตือนแล้ว |  |
| `reminder_time` | Reminder time | เวลาแจ้งเตือน |  |
| `reminders` | Daily reminder | การแจ้งเตือนรายวัน |  |
| `remove` | Remove | ลบ |  |
| `remove_confirm` | Remove this item? | ลบรายการนี้หรือไม่? |  |
| `save` | Save | บันทึก |  |
| `save_failed` | Could not save. Please try again. | บันทึกไม่ได้ กรุณาลองอีกครั้ง |  |
| `save_today` | Save today | บันทึกวันนี้ |  |
| `saved` | Saved on this device. Encrypted. | บันทึกบนอุปกรณ์นี้แล้ว เข้ารหัสแล้ว |  |
| `search_food` | Search a dish in English or Hindi | ค้นหาอาหารเป็นภาษาอังกฤษหรือภาษาฮินดี |  |
| `settings_title` | Settings | การตั้งค่า |  |
| `share` | Share | แชร์ |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | ไม่มีแอปบนโทรศัพท์เครื่องนี้ที่รับไฟล์ได้ กรุณาติดตั้งแอปอีเมลหรือแอปจัดการไฟล์แล้วลองอีกครั้ง |  |
| `sleep` | Sleep last night (hours) | นอนเมื่อคืน (ชั่วโมง) |  |
| `sodium` | Salt (sodium) | เกลือ (โซเดียม) |  |
| `streak` | Day streak | จำนวนวันต่อเนื่อง |  |
| `sync_ack_fail` | The server did not confirm which records it saved. Nothing was marked synced. | The server did not confirm which records it saved. Nothing was marked synced. |  |
| `sync_auth_missing` | Enter the access token issued by your coordinator. | Enter the access token issued by your coordinator. |  |
| `sync_bad_pin` | The server key pin must be a 32-byte SHA-256 value in base64. | The server key pin must be a 32-byte SHA-256 value in base64. |  |
| `sync_bad_url` | That does not look like a valid address. | ที่อยู่นี้ดูเหมือนจะไม่ถูกต้อง |  |
| `sync_consent` | I agree that syncing sends my records to this server for authorised review and trend analysis. | I agree that syncing sends my records to this server for authorised review and trend analysis. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | ซิงก์ไม่สำเร็จ รายการยังปลอดภัยบนโทรศัพท์เครื่องนี้และจะลองใหม่ |  |
| `sync_hint` | Optional. Your coordinator gives you a server address and device token, and you confirm consent. Leave empty to keep everything on this phone only. | ไม่บังคับ ผู้ประสานงานจะให้ที่อยู่เซิร์ฟเวอร์แก่คุณ ปล่อยว่างไว้หากต้องการเก็บข้อมูลไว้บนโทรศัพท์เครื่องนี้เท่านั้น |  |
| `sync_need_https` | Use an HTTPS address with a token and your consent. Health data is never sent unencrypted. | ใช้ที่อยู่ HTTPS ข้อมูลสุขภาพจะไม่ถูกส่งโดยไม่เข้ารหัส |  |
| `sync_never` | Not synced yet. | ยังไม่เคยซิงก์ |  |
| `sync_no_consent` | Confirm consent before syncing. | Confirm consent before syncing. |  |
| `sync_now` | Sync now | ซิงก์ตอนนี้ |  |
| `sync_offline` | No internet right now. Entries queued. | ขณะนี้ไม่มีอินเทอร์เน็ต รายการอยู่ในคิวแล้ว |  |
| `sync_ok` | Synced. All entries are on the server. | ซิงก์แล้ว รายการทั้งหมดอยู่บนเซิร์ฟเวอร์ |  |
| `sync_pin` | Server key pin (optional) | Server key pin (optional) |  |
| `sync_pin_ph` | Base64 SHA-256 of the server public key | Base64 SHA-256 of the server public key |  |
| `sync_save` | Save address | บันทึกที่อยู่ |  |
| `sync_title` | Institution sync | การซิงก์การศึกษา |  |
| `sync_token` | Access token | Access token |  |
| `sync_token_ph` | Issued by your coordinator | Issued by your coordinator |  |
| `sync_url` | Server address | ที่อยู่เซิร์ฟเวอร์ |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | ประวัติ |  |
| `tab_progress` | Progress | ความก้าวหน้า |  |
| `tab_settings` | Settings | การตั้งค่า |  |
| `tab_today` | Today | วันนี้ |  |
| `this_week` | This week | สัปดาห์นี้ |  |
| `todays_total` | Today\'s estimate | ค่าประมาณของวันนี้ |  |
| `total_carbs` | Carbohydrate | คาร์โบไฮเดรต |  |
| `uncertainty` | Range, not a single number | เป็นช่วง ไม่ใช่ตัวเลขเดียว |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | กรอกเฉพาะสิ่งที่คุณวัด ช่องว่างหมายความว่าไม่ได้วัด ซึ่งก็เป็นข้อมูลที่มีประโยชน์เช่นกัน |  |
| `vitals_title` | Readings | ค่าที่วัดได้ |  |
| `weight` | Weight (kg) | น้ำหนัก (กก.) |  |
| `wellbeing_title` | How was the day? | วันนี้เป็นอย่างไรบ้าง? |  |
| `yes` | Yes | ใช่ |  |

## Site strings — Thai

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | เกี่ยวกับเดโมนี้ |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | ดาวน์โหลด APK |  |
| `action_menu` | Open menu | เปิดเมนู |  |
| `action_theme` | Switch theme | เปลี่ยนรูปแบบ |  |
| `addFood` | Add food | เพิ่มอาหาร |  |
| `addMed` | + Add another | + เพิ่มรายการอื่น |  |
| `adherence` | medicines taken | รับประทานยาแล้ว |  |
| `ageLabel` | Age band | ช่วงอายุ |  |
| `allFoods` | All | ทั้งหมด |  |
| `askClinician` | Ask a qualified clinician. | ถามแพทย์หรือผู้เชี่ยวชาญที่ผ่านการรับรอง |  |
| `assistantInputPh` | Ask a question | ถามคำถาม |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | คำตอบมาจากข้อความช่วยเหลือของเครื่องมือนี้เท่านั้น ไม่มี AI ไม่มีการวินิจฉัย ไม่มีคำแนะนำ |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | การเปลี่ยนภาษาที่แสดงจะเปลี่ยนเฉพาะป้ายชื่อ ค่าที่บันทึกยังคงเป็นรหัสที่คงที่ ดังนั้นข้อมูลของวันใดจะไม่ถูกเขียนทับ |  |
| `assistantListen` | Listen | ฟัง |  |
| `assistantNav` | Guide | คู่มือ |  |
| `assistantSend` | Send | ส่ง |  |
| `assistantTitle` | Khai Guide | คู่มือ Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | ฉันไม่มีคำตอบสำหรับเรื่องนั้น ฉันตอบเฉพาะคำถามเกี่ยวกับการใช้เครื่องมือนี้ |  |
| `avgBp` | avg BP | ความดันเฉลี่ย |  |
| `back` | Back | ย้อนกลับ |  |
| `bmiNote` | Not a diagnosis. | ไม่ใช่การวินิจฉัยโรค |  |
| `bpSys` | Systolic | ซิสโตลิก |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | โปรดอ่านสิ่งนี้เป็นแบบแปลน ไม่ใช่ประกาศ: ไม่มีการใช้งานในโรงพยาบาล การทดลอง การรับรอง หรือหุ้นส่วนใดๆ ที่อ้างว่าเกิดขึ้น |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | ความจริงคือ: แอปผู้เข้าร่วมและเดโมบนเบราว์เซอร์มีอยู่แล้วในปัจจุบัน ทุกส่วนของโรงพยาบาลที่นี่เป็นข้อเสนอการออกแบบ |  |
| `codeLabel` | Participant code | รหัสผู้เข้าร่วม |  |
| `codeShort` | Code | รหัส |  |
| `completeDays` | complete days | วันที่ครบถ้วน |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | วันที่มีอาหาร สถานะการใช้ยา (เมื่อมีใบสั่งยา) และค่าการวัดอย่างน้อยหนึ่งค่า หารด้วย 21 นับจากรายการที่บันทึก ไม่ใช่ความจำ |  |
| `conditionsLabel` | Conditions (select all that apply) | ภาวะสุขภาพ (เลือกทุกข้อที่ตรง) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | คุณเป็นคนตัดสินใจว่าจะป้อนอะไร ในเดโมนี้ทุกอย่างจะอยู่ในที่เก็บข้อมูลภายในของเบราว์เซอร์นี้เท่านั้น — ไม่มีเซิร์ฟเวอร์และไม่มีการอัปโหลดใดๆ ในแอป Android รายการจะถูกเข้ารหัสบนโทรศัพท์ ไม่มีการเก็บชื่อ ที่อยู่ หมายเลขบัตรประจำตัวของรัฐบาล หรือรายชื่อผู้ติดต่อ คุณสามารถลบข้อมูลทั้งหมดได้ทุกเมื่อ |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | ข้าพเจ้าได้อ่านและเข้าใจว่าเดโมบนเบราว์เซอร์นี้ไม่ใช่สำหรับบันทึกทางคลินิกจริง |  |
| `consentTitle` | Consent | ความยินยอม |  |
| `dayComplete` | Day complete | วันที่ครบถ้วน |  |
| `demoBadge` | Demo | เดโม |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | เฉพาะเดโม · ไม่ใช่อุปกรณ์การแพทย์ · ไม่ใช้สำหรับบันทึกทางคลินิกจริง |  |
| `downloadToast` | {name} downloaded. | ดาวน์โหลด {name} แล้ว |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | คำแปลร่าง — ต้องได้รับการตรวจสอบโดยเจ้าของภาษาก่อนใช้งานทางคลินิก |  |
| `early` | early signal | สัญญาณเริ่มต้น |  |
| `eraseBtn` | Erase my data | ลบข้อมูลของฉัน |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | การนี้จะลบโปรไฟล์ ทุกวัน และการตั้งค่าทั้งหมดออกจากเบราว์เซอร์นี้ ไม่สามารถย้อนกลับได้ |  |
| `eraseTitle` | Erase everything | ลบข้อมูลทั้งหมด |  |
| `eraseYes` | Erase everything | ลบข้อมูลทั้งหมด |  |
| `errCode` | Please enter your participant code. | กรุณาป้อนรหัสผู้เข้าร่วม |  |
| `errConsent` | Consent is required to continue. | ต้องมีความยินยอมจึงจะดำเนินการต่อได้ |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | ค่าที่สูงจะถูกทำเครื่องหมายเพื่อนำไปพูดคุย แอปไม่เคยวินิจฉัยโรคหรือเปลี่ยนแปลงใบสั่งยา |  |
| `escalateNone` | No threshold flags in the recent record. | ไม่มีเครื่องหมายค่าเกณฑ์ในข้อมูลล่าสุด |  |
| `escalateTitle` | Flags for the clinician | ประเด็นสำหรับบุคลากรทางการแพทย์ |  |
| `estTotal` | Today’s estimate | ค่าประมาณของวันนี้ |  |
| `exportBackup` | Complete backup (JSON) | สำรองข้อมูลทั้งหมด (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | บันทึกสุขภาพ (FHIR R4) |  |
| `exportFood` | Food log (CSV) | บันทึกอาหาร (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | ค่ารายวัน (CSV) |  |
| `exportPrint` | Clinician summary (print) | สรุปสำหรับบุคลากรทางการแพทย์ (พิมพ์) |  |
| `exportsTitle` | Export & share | ส่งออกและแชร์ |  |
| `eyebrow_capability` | Capability map | แผนที่ความสามารถ |  |
| `eyebrow_demo` | Browser demo · no install | เดโมบนเบราว์เซอร์ · ไม่ต้องติดตั้ง |  |
| `eyebrow_hospital` | Hospital deployment · reference design | การใช้งานในโรงพยาบาล · แบบจำลองอ้างอิง |  |
| `fasting` | Fasting | ตอนท้องว่าง |  |
| `foodItemsOne` | 1 item | 1 รายการ |  |
| `foodLogged` | Food | อาหาร |  |
| `foodPickerTitle` | Choose a dish | เลือกอาหาร |  |
| `footerNote` | Nothing leaves this browser. | ไม่มีข้อมูลใดออกจากเบราว์เซอร์นี้ |  |
| `footer_browser_demo` | Browser demo | เดโมบนเบราว์เซอร์ |  |
| `footer_contact` | Contact | ติดต่อ |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | เฉพาะเดโม · ไม่ใช่อุปกรณ์การแพทย์ · ไม่มีความเกี่ยวข้องกับ Zhongshan Hospital, HIMSS หรือระบบสุขภาพใดๆ ที่ระบุชื่อ |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | เครื่องมือวัดสำหรับช่วงเวลาระหว่างการไปพบแพทย์ สร้างขึ้นที่ Jamshedpur สำหรับโทรศัพท์ที่ใช้ร่วมกัน แบตเตอรี่ที่ต่ำ และคลินิกที่อยู่ไกล |  |
| `footer_hospital_design` | Hospital design | การออกแบบโรงพยาบาล |  |
| `footer_limits` | Limits and answers | ข้อจำกัดและคำตอบ |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | ไม่ใช่อุปกรณ์การแพทย์ ไม่มีความเกี่ยวข้องกับ Zhongshan Hospital, HIMSS หรือระบบสุขภาพใดๆ ที่ระบุชื่อ |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | ไม่มีข้อมูลใดออกจากเบราว์เซอร์นี้ |  |
| `footer_product` | Product | ผลิตภัณฑ์ |  |
| `footer_transparency` | Transparency | ความโปร่งใส |  |
| `footer_verification` | Verification | การตรวจสอบ |  |
| `glucose` | Blood sugar | น้ำตาลในเลือด |  |
| `head_404` | That page is not here. | หน้านี้ไม่มีอยู่ที่นี่ |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | วงจรปิดที่สร้างขึ้นสำหรับสถานที่ที่โรงพยาบาลไม่เคยเข้าถึง |  |
| `head_functions` | Every function, honestly labelled. | ทุกฟังก์ชัน มีการระบุชื่ออย่างตรงไปตรงมา |  |
| `head_hospital` | The hospital is the unit of change. | โรงพยาบาลคือหน่วยของการเปลี่ยนแปลง |  |
| `head_privacy` | Your record stays yours. | ข้อมูลของคุณยังคงเป็นของคุณ |  |
| `head_security` | What is protected, and what is not. | สิ่งที่ได้รับการปกป้อง และสิ่งที่ไม่ได้รับการปกป้อง |  |
| `historyTitle` | The last 21 days | 21 วันล่าสุด |  |
| `hospAudit` | Audit trail | บันทึกการตรวจสอบ |  |
| `hospCohort` | Cohort | กลุ่มตัวอย่าง |  |
| `hospComplete` | complete | ครบถ้วน |  |
| `hospDisc1` | Prescribed but not dispensed | สั่งยาแล้วแต่ยังไม่ได้จ่าย |  |
| `hospDiscrepancies` | Medication discrepancies | ความคลาดเคลื่อนของยา |  |
| `hospOpenHospital` | Open hospital control room | เปิดห้องควบคุมของโรงพยาบาล |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | บันทึกข้อมูลประมาณหนึ่งสัปดาห์ในแอปผู้เข้าร่วม เพื่อดูชุดตรวจสอบที่นี่ |  |
| `hospReviewPack` | Today's review pack | ชุดตรวจสอบวันนี้ |  |
| `hospitalBack` | Back to app | กลับไปที่แอป |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | ภาพร่างการออกแบบของส่วนโรงพยาบาล ที่สร้างจากข้อมูลเดียวกัน กลุ่มตัวอย่างด้านล่างเป็นข้อมูลสังเคราะห์ — ไม่มีผู้ป่วยจริง ไม่มีความเกี่ยวข้องกับโรงพยาบาล และไม่มีการตัดสินใจทางคลินิก |  |
| `hospitalTitle` | Hospital control room | ห้องควบคุมของโรงพยาบาล |  |
| `hospital_layer` | Hospital deployment layer | ชั้นการใช้งานในโรงพยาบาล |  |
| `hospital_s1` | Status of this document | สถานะของเอกสารนี้ |  |
| `hospital_s10` | Governance and safety | การกำกับดูแลและความปลอดภัย |  |
| `hospital_s11` | Phased rollout | การใช้งานเป็นระยะ |  |
| `hospital_s12` | What would make this real | อะไรที่จะทำให้สิ่งนี้เป็นจริง |  |
| `hospital_s2` | Why the hospital, not just the phone | เหตุผลที่เป็นโรงพยาบาล ไม่ใช่แค่โทรศัพท์ |  |
| `hospital_s3` | Reference topology | โครงสร้างอ้างอิง |  |
| `hospital_s4` | Roles and access | บทบาทและการเข้าถึง |  |
| `hospital_s5` | Coordinator console | คอนโซลผู้ประสานงาน |  |
| `hospital_s6` | Clinician review workflow | ขั้นตอนตรวจสอบทางคลินิก |  |
| `hospital_s7` | Closed-loop medication | ยาในวงจรปิด |  |
| `hospital_s8` | Integration contract | สัญญาการเชื่อมต่อ |  |
| `hospital_s9` | Identity and data flow | ตัวตนและการไหลของข้อมูล |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | บันทึกข้อมูลประมาณหนึ่งสัปดาห์ รูปแบบต้องมีอย่างน้อยสี่วันที่จับคู่กันจึงจะแสดง |  |
| `insightsTitle` | What your own numbers say | ตัวเลขของคุณเองบอกอะไร |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | ภาษา |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | โครงสร้างข้อมูลเดียวกัน คลังอาหารเดียวกัน และกฎเดียวกันกับเวอร์ชัน Android ทำงานอยู่ในหน้านี้ทั้งหมด ไม่ใช้สำหรับบันทึกทางคลินิกจริง |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | นี่คือรูปแบบทั้งหมดที่โครงการใช้อ้างอิง ตั้งแต่เครื่องมือวัดบนโทรศัพท์ไปจนถึงวงจรปิดภายใต้การดูแลของบุคลากรทางการแพทย์ ฟังก์ชันแต่ละอย่างระบุว่า จัดส่งแล้ว, เดโม หรือ แผน พร้อมเงื่อนไขที่ระบุชื่อ |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | ข้อมูลบนโทรศัพท์จะปิดวงจรได้ก็ต่อเมื่อคลินิกสามารถดำเนินการตามข้อมูลนั้นได้ หน้านี้เป็นสถาปัตยกรรมอ้างอิงสำหรับส่วนโรงพยาบาล เป็นแบบแปลนการออกแบบ: ไม่มีสิ่งใดถูกติดตั้ง และไม่มีโรงพยาบาลใดถูกระบุว่าเป็นหุ้นส่วน |  |
| `legendComplete` | Complete | ครบถ้วน |  |
| `legend_read` | How to read this map | วิธีอ่านแผนที่นี้ |  |
| `loadSample` | Load 14-day sample | โหลดตัวอย่าง 14 วัน |  |
| `mealBreakfast` | Breakfast | อาหารเช้า |  |
| `medsLabel` | Daily medicines (name and dose) | ยาที่ใช้ประจำวัน (ชื่อและขนาดยา) |  |
| `medsTitle` | Medicines | ยา |  |
| `nav_blueprint` | Blueprint | แบบร่าง |  |
| `nav_clinician` | For clinicians | สำหรับบุคลากรทางการแพทย์ |  |
| `nav_demo` | Demo | เดโม |  |
| `nav_functions` | Functions | ฟังก์ชัน |  |
| `nav_hospital` | Hospital | โรงพยาบาล |  |
| `nav_loop` | The loop | วงจร |  |
| `nav_security` | Security | ความปลอดภัย |  |
| `nav_what` | What it does | สิ่งที่ทำ |  |
| `noDataToast` | No days recorded yet — add a day first. | ยังไม่มีวันที่บันทึก — กรุณาเพิ่มวันก่อน |  |
| `noMatches` | No dish matches that. | ไม่มีอาหารที่ตรงกับคำค้นหา |  |
| `noMeds` | No medicines recorded in your profile. | ไม่มียาที่บันทึกไว้ในโปรไฟล์ของคุณ |  |
| `not_map` | What this map is not | แผนที่นี้ไม่ใช่สิ่งใด |  |
| `note` | Anything else? (optional) | มีอะไรอีกไหม? (ไม่บังคับ) |  |
| `nothingLogged` | No record for this day. | ไม่มีข้อมูลสำหรับวันนี้ |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | เก็บไว้ในเบราว์เซอร์นี้เท่านั้น ไม่มีบัญชี ไม่มีการอัปโหลด |  |
| `planAccept` | Accept | ยอมรับ |  |
| `planAccepted` | Marked accepted in this demo. | ทำเครื่องหมายว่ายอมรับในเดโมนี้แล้ว |  |
| `planAcceptedState` | accepted | ยอมรับแล้ว |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | ค่าอาหารเป็นการประมาณขนาดรับประทานในครัวเรือน ที่แสดงเป็นช่วง ไม่ใช่การชั่งตวงที่แม่นยำ ร่างรูปแบบมาจากไม่กี่วันที่จับคู่กันในคนหนึ่งคน — เป็นคำเตือนสำหรับบุคลากรทางการแพทย์ ไม่ใช่ข้อสรุป |  |
| `planConfidenceTitle` | How sure is this? | แน่ใจแค่ไหน? |  |
| `planDecision` | Demo decision | การตัดสินใจในเดโม |  |
| `planDraftLabel` | Draft for review | ร่างสำหรับตรวจสอบ |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | การแก้ไขเกิดขึ้นร่วมกับบุคลากรทางการแพทย์ในประชุมตรวจสอบ เดโมนี้บันทึกเฉพาะการตัดสินใจ |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | บันทึกอาหารและค่าการวัดประมาณหนึ่งสัปดาห์ก่อน ร่างต้องมีอย่างน้อยสี่วันที่จับคู่กัน |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | ร่างสำหรับให้นักโภชนาการตรวจสอบ สร้างจากวันที่คุณบันทึกเองเท่านั้น เป็นเพียงตัวอย่าง — ไม่ใช่คำแนะนำ |  |
| `planLowConfidence` | Low confidence — only a few paired days. | ความเชื่อมั่นต่ำ — มีเพียงไม่กี่วันที่จับคู่กัน |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | เป็นเพียงตัวอย่าง ไม่ใช่คำแนะนำ ไม่ใช่การวินิจฉัยโรค อย่าเปลี่ยนอาหารหรือยาเพราะร่างนี้ — บุคลากรทางการแพทย์ที่มีคุณสมบัติเป็นผู้ตัดสินใจ |  |
| `planPaired` | Built from {n} days that have both food and a reading. | สร้างจาก {n} วันที่มีทั้งอาหารและค่าการวัด |  |
| `planTitle` | Weekly plan draft | ร่างแผนรายสัปดาห์ |  |
| `planTypePortion` | Portion | ขนาดรับประทาน |  |
| `prevDay` | Previous day | วันก่อนหน้า |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | ในหน้าต่างพิมพ์ ให้เลือก “Save as PDF” เพื่อได้สรุปหนึ่งหน้า |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} วันที่ครบถ้วน · {logged} วันที่บันทึก |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} วันที่ครบถ้วน · {logged} วันที่บันทึก |  |
| `progressTitle` | Progress | ความก้าวหน้า |  |
| `recentDays` | Recent days | วันที่ผ่านมา |  |
| `removedToast` | Removed. | ลบแล้ว |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | เห็นชุดตรวจสอบสำหรับผู้เข้าร่วมที่ได้รับมอบหมาย พร้อมเครื่องหมายและรายการร่างที่เชื่อมโยงกับวันต้นทาง |  |
| `roleCoordinator` | Coordinator | ผู้ประสานงาน |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | เห็นความครบถ้วนของกลุ่ม คิวตรวจสอบ และบันทึกการตรวจสอบ ไม่สามารถเปลี่ยนแปลงใบสั่งยา |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | เห็นคิวความคลาดเคลื่อนของยา และจุดตรวจ สั่งยา → จ่ายยา → รับประทานแล้ว |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | กฎในทุกแถว: ซอฟต์แวร์อ่านก่อน มนุษย์เป็นผู้ตัดสินใจ |  |
| `sampleTitle` | Sample data | ข้อมูลตัวอย่าง |  |
| `saveToday` | Save today’s record | บันทึกข้อมูลวันนี้ |  |
| `savedToast` | Saved in this browser. | บันทึกในเบราว์เซอร์นี้แล้ว |  |
| `settingsTitle` | Settings | การตั้งค่า |  |
| `skip` | Skip to demo | ข้ามไปที่เดโม |  |
| `skip_content` | Skip to content | ข้ามไปที่เนื้อหา |  |
| `start` | Start recording | เริ่มบันทึก |  |
| `status` | Status | สถานะ |  |
| `status_demo` | Demo | เดโม |  |
| `status_roadmap` | Roadmap | แผน |  |
| `status_shipped` | Shipped | จัดส่งแล้ว |  |
| `stepProfile` | 1 · Who | 1 · ใคร |  |
| `tabToday` | Today | วันนี้ |  |
| `taken` | Taken | รับประทานแล้ว |  |
| `thisWeek` | this week | สัปดาห์นี้ |  |
| `title_404` | Page not found — Khai Tracker | ไม่พบหน้านี้ — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | แบบแปลนการเปลี่ยนแปลงดิจิทัล — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — เดโมบนเบราว์เซอร์ |  |
| `title_functions` | Function map — Khai Tracker | แผนที่ฟังก์ชัน — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | แบบแปลนการใช้งานในโรงพยาบาล — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — วันของคุณ ที่วัดได้ |  |
| `title_privacy` | Privacy — Khai Tracker | ความเป็นส่วนตัว — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | ความปลอดภัย — Khai Tracker |  |
| `vitalsTitle` | Readings | ค่าที่วัดได้ |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | บันทึกประจำวันเกี่ยวกับอาหารและสุขภาพ เพื่อให้คุณและบุคลากรทางการแพทย์เห็นว่าเกิดอะไรขึ้นจริงระหว่างการไปพบแพทย์ เป็นเพียงการบันทึก ไม่ได้ให้คำแนะนำการรักษา |  |
| `welcomeTitle` | Welcome to Khai Tracker | ยินดีต้อนรับสู่ Khai Tracker |  |
| `wellbeingTitle` | How was the day? | วันนี้เป็นอย่างไรบ้าง? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Thai (th)
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
