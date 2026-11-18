# Vietnamese (vi) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Vietnamese (Tiếng Việt)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/vi.json` (app and site)
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

## App strings — Vietnamese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | Giới thiệu |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nĐược xây dựng bởi Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, Ấn Độ.\n\nThiết kế cho điện thoại dùng chung, mạng không ổn định và các món ăn Ấn Độ đa dạng. Ưu tiên ngoại tuyến. Không phân tích của bên thứ ba. Không quảng cáo. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Người sở hữu sản phẩm: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Thêm món ăn |  |
| `add_medicines` | Add medicines | Thêm thuốc |  |
| `already_saved` | Saved. You can keep editing and save again. | Đã lưu. Bạn có thể tiếp tục chỉnh sửa và lưu lại. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Hãy hỏi một chuyên gia y tế có trình độ. |  |
| `assistant_input_ph` | Ask a question | Đặt một câu hỏi |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Câu trả lời chỉ lấy từ văn bản trợ giúp của chính công cụ này. Không có AI, không chẩn đoán, không tư vấn. |  |
| `assistant_listen` | Listen | Nghe |  |
| `assistant_send` | Send | Gửi |  |
| `assistant_tab` | Guide | Hướng dẫn |  |
| `assistant_title` | Khai Guide | Hướng dẫn Khai |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | Tôi không có câu trả lời cho điều đó. Tôi chỉ trả lời các câu hỏi về cách sử dụng công cụ này. |  |
| `back` | Back | Quay lại |  |
| `bp_dia` | Diastolic (lower) | Huyết áp tâm trương (dưới) |  |
| `bp_sys` | Systolic (upper) | Huyết áp tâm thu (trên) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Theo dõi |  |
| `cancel` | Cancel | Hủy |  |
| `carbs` | Carbohydrate | Carbohydrate |  |
| `close` | Close | Đóng |  |
| `completeness` | 21-day completeness | Mức độ đầy đủ trong 21 ngày |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Số ngày có bữa ăn, thuốc và một chỉ số đo, chia cho 21. Tính từ các mục đã lưu, không phải từ trí nhớ. |  |
| `confirm` | Confirm | Xác nhận |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Bạn tự quyết định những gì ghi lại. Các mục bạn ghi được mã hóa trên điện thoại này và chỉ được gửi đến máy chủ nghiên cứu Khai nếu điều phối viên cung cấp địa chỉ máy chủ. Bạn có thể xóa mọi dữ liệu bất kỳ lúc nào. Không thu thập tên, địa chỉ, số Aadhaar hay danh bạ. Bạn có thể rút lui bằng cách xóa dữ liệu của mình. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Tôi đã đọc hoặc nghe nội dung này và đồng ý tham gia. |  |
| `consent_listen` | Listen in Hindi | Nghe bằng tiếng Hindi |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Phiên bản đồng ý 1.0 · được ghi lại trên thiết bị này kèm dấu thời gian |  |
| `consent_title` | Consent | Đồng ý |  |
| `day_detail` | Day detail | Chi tiết ngày |  |
| `days_logged` | Days logged | Số ngày đã ghi |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker là công cụ theo dõi, không phải lời khuyên y tế. Ứng dụng không chẩn đoán và không thay đổi đơn thuốc. |  |
| `done` | Done | Xong |  |
| `dose_hint` | Dose (optional) | Liều (không bắt buộc) |  |
| `edit_day` | Edit this day | Chỉnh sửa ngày này |  |
| `edit_profile` | Edit profile | Chỉnh sửa hồ sơ |  |
| `energy` | Energy | Năng lượng |  |
| `erase` | Erase my data | Xóa dữ liệu của tôi |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Thao tác này xóa vĩnh viễn mọi mục ghi, hồ sơ và cài đặt nhắc nhở trên điện thoại này. Không thể hoàn tác. |  |
| `erase_yes` | Erase everything | Xóa mọi dữ liệu |  |
| `estimated` | estimated | ước tính |  |
| `export_backup` | Full backup (JSON) | Sao lưu đầy đủ (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Hồ sơ sức khỏe (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Nhật ký ăn uống (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Chỉ chia sẻ với những người bạn chọn. Tệp chỉ rời khỏi điện thoại khi bạn nhấn chia sẻ. |  |
| `export_metrics` | Daily readings (CSV) | Chỉ số hàng ngày (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Bản tóm tắt cho nhân viên y tế (PDF) |  |
| `export_title` | Export and share | Xuất và chia sẻ |  |
| `export_working` | Preparing file… | Đang chuẩn bị tệp… |  |
| `fat` | Fat | Chất béo |  |
| `food_items` | %1$d food items | %1$d món ăn |  |
| `food_library_title` | Food library | Thư viện món ăn |  |
| `glucose` | Blood sugar | Đường trong máu |  |
| `glucose_fasting` | Fasting | Lúc đói |  |
| `glucose_pp` | After food | Sau ăn |  |
| `hide_previews` | Hide this app in the recent-apps preview | Ẩn ứng dụng này trong bản xem trước danh sách ứng dụng gần đây |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Ô vuông đã điền có nghĩa là có mục ghi. Chạm vào bất kỳ ngày nào để xem hoặc chỉnh sửa. |  |
| `history_title` | Last 21 days | 21 ngày qua |  |
| `insight_descriptive` | description | mô tả |  |
| `insight_early` | early signal | tín hiệu sớm |  |
| `insight_moderate` | moderate signal | tín hiệu trung bình |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Đây là những nhận xét về các mục ghi của chính bạn, không phải chẩn đoán cũng như khuyến nghị điều trị. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Tiếp tục ghi chép trong một tuần. Các xu hướng sẽ xuất hiện khi có ít nhất năm ngày có chỉ số đo. |  |
| `insights_title` | What your own data shows | Dữ liệu của chính bạn cho thấy gì |  |
| `kcal` | Energy | Năng lượng |  |
| `language` | Language / भाषा | Ngôn ngữ / भाषा |  |
| `loading` | Loading… | Đang tải… |  |
| `meal_breakfast` | Breakfast | Bữa sáng |  |
| `meal_dinner` | Dinner | Bữa tối |  |
| `meal_lunch` | Lunch | Bữa trưa |  |
| `meal_snacks` | Snacks & drinks | Đồ ăn nhẹ và nước uống |  |
| `meds_changed` | Changed | Đã thay đổi |  |
| `meds_empty` | No medicines listed yet. | Chưa có thuốc nào được liệt kê. |  |
| `meds_hint` | Tick what you actually did today. | Đánh dấu những gì bạn đã thực sự làm hôm nay. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | Chưa có thuốc nào trong hồ sơ của bạn. Thêm một lần, sau đó đánh dấu mỗi ngày. |  |
| `meds_skipped` | Skipped | Bỏ qua |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d trong số %2$d loại thuốc đã uống |  |
| `meds_taken` | Taken | Đã uống |  |
| `meds_title` | Medicines | Thuốc |  |
| `mood` | Mood | Tâm trạng |  |
| `no` | No | Không |  |
| `no_food_yet` | Nothing added yet | Chưa có mục nào |  |
| `note` | Anything else? (optional) | Còn điều gì khác không? (không bắt buộc) |  |
| `nothing_logged` | No entry for this day. | Không có mục ghi cho ngày này. |  |
| `notif_channel` | Daily reminder | Nhắc nhở hàng ngày |  |
| `notif_channel_desc` | One daily reminder to record your day. | Một lời nhắc nhẹ mỗi ngày để ghi lại ngày của bạn. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Hai phút nhẹ nhàng: hôm nay bạn ăn gì và đã đo những gì? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Hãy cho phép thông báo để nhận lời nhắc hàng ngày. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + Thêm thuốc khác |  |
| `onboard_age` | Age group | Nhóm tuổi |  |
| `onboard_age_ph` | Select | Chọn |  |
| `onboard_code` | Participant code | Mã người tham gia |  |
| `onboard_code_ph` | e.g. K01 | Ví dụ: K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Tình trạng sức khỏe (chọn tất cả các mục phù hợp) |  |
| `onboard_error_age` | Please choose an age group. | Vui lòng chọn nhóm tuổi. |  |
| `onboard_error_code` | Please enter your participant code. | Vui lòng nhập mã người tham gia. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Vui lòng xác nhận đồng ý để tiếp tục. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Nhật ký hàng ngày về ăn uống và sức khỏe, giúp bạn và nhân viên y tế thấy rõ điều đang diễn ra giữa các lần khám. Đây là công cụ theo dõi, không phải lời khuyên y tế. |  |
| `onboard_meds` | Daily medicines (name and dose) | Thuốc hàng ngày (tên và liều) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | Ví dụ: Metformin 500 mg |  |
| `onboard_start` | Start tracking | Bắt đầu theo dõi |  |
| `onboard_title` | Welcome to Khai Tracker | Chào mừng đến với Khai Tracker |  |
| `pending` | Pending sync | Đang chờ đồng bộ |  |
| `per_portion` | per portion | mỗi khẩu phần |  |
| `pick_day` | Pick a day above. | Chọn một ngày ở trên. |  |
| `pin_change` | Change PIN | Đổi mã PIN |  |
| `pin_enter` | Enter your PIN | Nhập mã PIN của bạn |  |
| `pin_four` | A PIN must be exactly 4 digits. | Mã PIN phải đúng 4 chữ số. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Hữu ích trên điện thoại dùng chung trong gia đình. Mã PIN 4 chữ số được yêu cầu khi mở ứng dụng và sau một phút không sử dụng. |  |
| `pin_lock` | App lock | Khóa ứng dụng |  |
| `pin_new` | Choose a 4-digit PIN | Chọn mã PIN gồm 4 chữ số |  |
| `pin_remove` | Remove PIN | Xóa mã PIN |  |
| `pin_removed` | PIN removed. | Đã xóa mã PIN. |  |
| `pin_saved` | PIN saved. | Đã lưu mã PIN. |  |
| `pin_set` | Set PIN | Đặt mã PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | Mã PIN sai. Vui lòng thử lại. |  |
| `portion_q` | Portion | Khẩu phần |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | Các mục ghi của bạn được mã hóa trên thiết bị này bằng khóa lưu trong kho khóa an toàn của điện thoại. Không có dữ liệu nào được gửi đi trừ khi bạn thiết lập máy chủ nghiên cứu. Không có phân tích hay quảng cáo. |  |
| `privacy_title` | Privacy | Quyền riêng tư |  |
| `profile` | Profile and medicines | Hồ sơ và thuốc |  |
| `progress_title` | Progress | Tiến độ |  |
| `protein` | Protein | Protein |  |
| `pulse` | Pulse | Mạch |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Các ước tính là khoảng vì cùng một món ăn khác nhau giữa các hộ gia đình. Chúng dùng để nhận biết xu hướng, không phải để đếm calo. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | Giọng nói cho ngôn ngữ này chưa được cài đặt trên điện thoại này. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Một thông báo nhẹ nhàng vào thời gian bạn chọn. Không so sánh chuỗi ngày, không quảng cáo. |  |
| `reminder_off` | Reminder off | Đã tắt nhắc nhở |  |
| `reminder_on` | Reminder on | Đã bật nhắc nhở |  |
| `reminder_time` | Reminder time | Giờ nhắc nhở |  |
| `reminders` | Daily reminder | Nhắc nhở hàng ngày |  |
| `remove` | Remove | Xóa |  |
| `remove_confirm` | Remove this item? | Xóa mục này? |  |
| `save` | Save | Lưu |  |
| `save_failed` | Could not save. Please try again. | Không thể lưu. Vui lòng thử lại. |  |
| `save_today` | Save today | Lưu hôm nay |  |
| `saved` | Saved on this device. Encrypted. | Đã lưu trên thiết bị này. Được mã hóa. |  |
| `search_food` | Search a dish in English or Hindi | Tìm món ăn bằng tiếng Anh hoặc tiếng Hindi |  |
| `settings_title` | Settings | Cài đặt |  |
| `share` | Share | Chia sẻ |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Không có ứng dụng nào trên điện thoại này có thể nhận tệp. Hãy cài đặt ứng dụng email hoặc quản lý tệp rồi thử lại. |  |
| `sleep` | Sleep last night (hours) | Ngủ đêm qua (giờ) |  |
| `sodium` | Salt (sodium) | Muối (sodium) |  |
| `streak` | Day streak | Số ngày liên tiếp |  |
| `sync_bad_url` | That does not look like a valid address. | Địa chỉ này có vẻ không hợp lệ. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Đồng bộ thất bại. Các mục ghi vẫn an toàn trên điện thoại và sẽ thử lại. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | Không bắt buộc. Điều phối viên cung cấp cho bạn địa chỉ máy chủ. Để trống để giữ mọi dữ liệu chỉ trên điện thoại này. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | Hãy dùng địa chỉ HTTPS. Dữ liệu sức khỏe không bao giờ được gửi dưới dạng không mã hóa. |  |
| `sync_never` | Not synced yet. | Chưa từng đồng bộ. |  |
| `sync_now` | Sync now | Đồng bộ ngay |  |
| `sync_offline` | No internet right now. Entries queued. | Hiện không có internet. Các mục ghi đã được xếp hàng chờ. |  |
| `sync_ok` | Synced. All entries are on the server. | Đã đồng bộ. Mọi mục ghi đều có trên máy chủ. |  |
| `sync_save` | Save address | Lưu địa chỉ |  |
| `sync_title` | Study sync | Đồng bộ nghiên cứu |  |
| `sync_url` | Server address | Địa chỉ máy chủ |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Lịch sử |  |
| `tab_progress` | Progress | Tiến độ |  |
| `tab_settings` | Settings | Cài đặt |  |
| `tab_today` | Today | Hôm nay |  |
| `this_week` | This week | Tuần này |  |
| `todays_total` | Today\'s estimate | Ước tính hôm nay |  |
| `total_carbs` | Carbohydrate | Carbohydrate |  |
| `uncertainty` | Range, not a single number | Một khoảng, không phải một con số duy nhất |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Chỉ điền những gì bạn đã đo. Để trống nghĩa là chưa đo, điều đó cũng là thông tin hữu ích. |  |
| `vitals_title` | Readings | Chỉ số đo được |  |
| `weight` | Weight (kg) | Cân nặng (kg) |  |
| `wellbeing_title` | How was the day? | Ngày hôm nay thế nào? |  |
| `yes` | Yes | Có |  |

## Site strings — Vietnamese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Giới thiệu bản demo |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | Tải APK |  |
| `action_menu` | Open menu | Mở menu |  |
| `action_theme` | Switch theme | Đổi giao diện |  |
| `addFood` | Add food | Thêm món ăn |  |
| `addMed` | + Add another | + Thêm thuốc khác |  |
| `adherence` | medicines taken | đã uống thuốc |  |
| `ageLabel` | Age band | Nhóm tuổi |  |
| `allFoods` | All | Tất cả |  |
| `askClinician` | Ask a qualified clinician. | Hãy hỏi một chuyên gia y tế có trình độ. |  |
| `assistantInputPh` | Ask a question | Đặt một câu hỏi |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Câu trả lời chỉ lấy từ văn bản trợ giúp của chính công cụ này. Không có AI, không chẩn đoán, không tư vấn. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Đổi ngôn ngữ hiển thị chỉ thay đổi nhãn. Các giá trị đã ghi vẫn là mã cố định, nên không ngày nào bị ghi lại. |  |
| `assistantListen` | Listen | Nghe |  |
| `assistantNav` | Guide | Hướng dẫn |  |
| `assistantSend` | Send | Gửi |  |
| `assistantTitle` | Khai Guide | Hướng dẫn Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Tôi không có câu trả lời cho điều đó. Tôi chỉ trả lời các câu hỏi về cách sử dụng công cụ này. |  |
| `avgBp` | avg BP | Huyết áp trung bình |  |
| `back` | Back | Quay lại |  |
| `bmiNote` | Not a diagnosis. | Không phải chẩn đoán. |  |
| `bpSys` | Systolic | Huyết áp tâm thu |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Hãy đọc đây như một bản thiết kế, không phải thông báo: không triển khai, thí điểm, xác nhận hay quan hệ đối tác bệnh viện nào được tuyên bố. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | Dòng nói thẳng: ứng dụng người tham gia và bản demo trên trình duyệt hiện đã tồn tại. Mọi thành phần bệnh viện tại đây đều là đề xuất thiết kế. |  |
| `codeLabel` | Participant code | Mã người tham gia |  |
| `codeShort` | Code | Mã |  |
| `completeDays` | complete days | ngày đầy đủ |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Số ngày có đồ ăn, trạng thái dùng thuốc (khi được kê) và ít nhất một chỉ số đo, chia cho 21. Tính từ các bản ghi đã lưu, không phải trí nhớ. |  |
| `conditionsLabel` | Conditions (select all that apply) | Tình trạng sức khỏe (chọn tất cả các mục phù hợp) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Bạn quyết định những gì nhập vào. Trong bản demo này, mọi dữ liệu chỉ lưu trong bộ nhớ cục bộ của trình duyệt — không có máy chủ và không có dữ liệu nào được tải lên. Trong ứng dụng Android, các mục ghi được mã hóa trên điện thoại. Không thu thập tên, địa chỉ, số định danh chính phủ hay danh bạ. Bạn có thể xóa mọi dữ liệu bất kỳ lúc nào. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Tôi đã đọc và hiểu rằng bản demo trên trình duyệt này không dùng cho hồ sơ lâm sàng thực. |  |
| `consentTitle` | Consent | Đồng ý |  |
| `dayComplete` | Day complete | Đã hoàn thành ngày |  |
| `demoBadge` | Demo | Bản demo |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Chỉ là demo · không phải thiết bị y tế · không dùng cho hồ sơ lâm sàng thực. |  |
| `downloadToast` | {name} downloaded. | {name} đã được tải xuống. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Bản dịch nháp — cần người bản ngữ xem lại trước khi dùng trong trường hợp lâm sàng. |  |
| `early` | early signal | tín hiệu sớm |  |
| `eraseBtn` | Erase my data | Xóa dữ liệu của tôi |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Thao tác này xóa hồ sơ, mọi ngày và mọi cài đặt khỏi trình duyệt này. Không thể hoàn tác. |  |
| `eraseTitle` | Erase everything | Xóa mọi dữ liệu |  |
| `eraseYes` | Erase everything | Xóa mọi dữ liệu |  |
| `errCode` | Please enter your participant code. | Vui lòng nhập mã người tham gia. |  |
| `errConsent` | Consent is required to continue. | Cần có sự đồng ý để tiếp tục. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Chỉ số cao được gắn cờ để trao đổi. Ứng dụng không chẩn đoán hay thay đổi đơn thuốc. |  |
| `escalateNone` | No threshold flags in the recent record. | Không có cờ ngưỡng nào trong các bản ghi gần đây. |  |
| `escalateTitle` | Flags for the clinician | Các điểm cần nhân viên y tế lưu ý |  |
| `estTotal` | Today’s estimate | Ước tính hôm nay |  |
| `exportBackup` | Complete backup (JSON) | Sao lưu đầy đủ (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Hồ sơ sức khỏe (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Nhật ký ăn uống (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Chỉ số hàng ngày (CSV) |  |
| `exportPrint` | Clinician summary (print) | Bản tóm tắt cho nhân viên y tế (in) |  |
| `exportsTitle` | Export & share | Xuất & chia sẻ |  |
| `eyebrow_capability` | Capability map | Bản đồ năng lực |  |
| `eyebrow_demo` | Browser demo · no install | Demo trên trình duyệt · không cần cài đặt |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Triển khai tại bệnh viện · thiết kế tham khảo |  |
| `fasting` | Fasting | Lúc đói |  |
| `foodItemsOne` | 1 item | 1 món |  |
| `foodLogged` | Food | Đồ ăn |  |
| `foodPickerTitle` | Choose a dish | Chọn món ăn |  |
| `footerNote` | Nothing leaves this browser. | Không có dữ liệu nào rời khỏi trình duyệt này. |  |
| `footer_browser_demo` | Browser demo | Demo trên trình duyệt |  |
| `footer_contact` | Contact | Liên hệ |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Chỉ là demo · không phải thiết bị y tế · không liên kết với Zhongshan Hospital, HIMSS hay bất kỳ hệ thống y tế nào được nêu tên. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Một công cụ đo lường cho khoảng thời gian giữa các lần khám. Được xây dựng tại Jamshedpur cho những điện thoại dùng chung, pin yếu và phòng khám ở xa. |  |
| `footer_hospital_design` | Hospital design | Thiết kế bệnh viện |  |
| `footer_limits` | Limits and answers | Giới hạn và câu trả lời |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Không phải thiết bị y tế. Không có liên kết với Zhongshan Hospital, HIMSS hay bất kỳ hệ thống y tế nào được nêu tên. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Không có dữ liệu nào rời khỏi trình duyệt này. |  |
| `footer_product` | Product | Sản phẩm |  |
| `footer_transparency` | Transparency | Minh bạch |  |
| `footer_verification` | Verification | Xác minh |  |
| `glucose` | Blood sugar | Đường trong máu |  |
| `head_404` | That page is not here. | Trang này không có ở đây. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Một vòng lặp khép kín, được xây dựng cho những nơi bệnh viện không thể đến. |  |
| `head_functions` | Every function, honestly labelled. | Mọi chức năng, được ghi nhãn trung thực. |  |
| `head_hospital` | The hospital is the unit of change. | Bệnh viện là đơn vị của sự thay đổi. |  |
| `head_privacy` | Your record stays yours. | Bản ghi của bạn vẫn là của bạn. |  |
| `head_security` | What is protected, and what is not. | Điều gì được bảo vệ và điều gì không. |  |
| `historyTitle` | The last 21 days | 21 ngày qua |  |
| `hospAudit` | Audit trail | Nhật ký kiểm toán |  |
| `hospCohort` | Cohort | Nhóm đối tượng |  |
| `hospComplete` | complete | đầy đủ |  |
| `hospDisc1` | Prescribed but not dispensed | Được kê nhưng chưa phát |  |
| `hospDiscrepancies` | Medication discrepancies | Khác biệt về thuốc |  |
| `hospOpenHospital` | Open hospital control room | Mở phòng điều phối bệnh viện |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Hãy ghi chép khoảng một tuần trong ứng dụng để xem gói xem lại tại đây. |  |
| `hospReviewPack` | Today's review pack | Gói xem lại hôm nay |  |
| `hospitalBack` | Back to app | Quay lại ứng dụng |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Bản phác thảo thiết kế về phần dành cho bệnh viện, xây dựng quanh cùng một bản ghi. Nhóm đối tượng bên dưới là dữ liệu tổng hợp — không có bệnh nhân thật, không liên kết bệnh viện, không có quyết định lâm sàng. |  |
| `hospitalTitle` | Hospital control room | Phòng điều phối bệnh viện |  |
| `hospital_layer` | Hospital deployment layer | Lớp triển khai tại bệnh viện |  |
| `hospital_s1` | Status of this document | Trạng thái của tài liệu này |  |
| `hospital_s10` | Governance and safety | Quản trị và an toàn |  |
| `hospital_s11` | Phased rollout | Triển khai theo giai đoạn |  |
| `hospital_s12` | What would make this real | Điều gì sẽ làm điều này thành hiện thực |  |
| `hospital_s2` | Why the hospital, not just the phone | Vì sao là bệnh viện, chứ không chỉ là điện thoại |  |
| `hospital_s3` | Reference topology | Cấu trúc tham khảo |  |
| `hospital_s4` | Roles and access | Vai trò và quyền truy cập |  |
| `hospital_s5` | Coordinator console | Bảng điều phối viên |  |
| `hospital_s6` | Clinician review workflow | Quy trình xem lại của nhân viên y tế |  |
| `hospital_s7` | Closed-loop medication | Thuốc trong vòng lặp khép kín |  |
| `hospital_s8` | Integration contract | Hợp đồng tích hợp |  |
| `hospital_s9` | Identity and data flow | Định danh và luồng dữ liệu |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Hãy ghi chép trong khoảng một tuần. Cần ít nhất bốn ngày có cả đồ ăn và chỉ số đo thì mới hiển thị xu hướng. |  |
| `insightsTitle` | What your own numbers say | Con số của chính bạn cho thấy gì |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Ngôn ngữ |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Cùng cấu trúc bản ghi, cùng thư viện đồ ăn và cùng quy tắc như bản Android, chạy hoàn toàn trong trang này. Không dùng cho hồ sơ lâm sàng thực. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Đây là mô hình đầy đủ mà dự án tuân theo, từ công cụ đo lường trên điện thoại đến vòng lặp khép kín dưới sự giám sát của nhân viên y tế. Mỗi chức năng được ghi là Đã phát hành, Demo hoặc Lộ trình với điều kiện tiên quyết được nêu rõ. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Bản ghi trên điện thoại chỉ khép được vòng lặp khi phòng khám có thể hành động dựa trên đó. Trang này là kiến trúc tham khảo cho phần dành cho bệnh viện. Đây là bản thiết kế: không có gì được triển khai và không bệnh viện nào được nêu là đối tác. |  |
| `legendComplete` | Complete | Đầy đủ |  |
| `legend_read` | How to read this map | Cách đọc bản đồ này |  |
| `loadSample` | Load 14-day sample | Tải mẫu 14 ngày |  |
| `mealBreakfast` | Breakfast | Bữa sáng |  |
| `medsLabel` | Daily medicines (name and dose) | Thuốc hàng ngày (tên và liều) |  |
| `medsTitle` | Medicines | Thuốc |  |
| `nav_blueprint` | Blueprint | Bản thiết kế |  |
| `nav_clinician` | For clinicians | Dành cho nhân viên y tế |  |
| `nav_demo` | Demo | Demo |  |
| `nav_functions` | Functions | Chức năng |  |
| `nav_hospital` | Hospital | Bệnh viện |  |
| `nav_loop` | The loop | Vòng lặp |  |
| `nav_security` | Security | Bảo mật |  |
| `nav_what` | What it does | Ứng dụng làm gì |  |
| `noDataToast` | No days recorded yet — add a day first. | Chưa có ngày nào được ghi — hãy thêm một ngày trước. |  |
| `noMatches` | No dish matches that. | Không có món ăn nào phù hợp. |  |
| `noMeds` | No medicines recorded in your profile. | Chưa có thuốc nào trong hồ sơ của bạn. |  |
| `not_map` | What this map is not | Bản đồ này không phải là gì |  |
| `note` | Anything else? (optional) | Còn điều gì khác không? (không bắt buộc) |  |
| `nothingLogged` | No record for this day. | Không có bản ghi cho ngày này. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Chỉ lưu trong trình duyệt này. Không tài khoản, không tải lên. |  |
| `planAccept` | Accept | Chấp nhận |  |
| `planAccepted` | Marked accepted in this demo. | Đã đánh dấu là chấp nhận trong bản demo này. |  |
| `planAcceptedState` | accepted | đã chấp nhận |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Giá trị đồ ăn là ước tính theo khẩu phần hộ gia đình, được hiển thị dưới dạng khoảng, không phải cân đo chính xác. Bản nháp xu hướng chỉ dựa trên vài ngày có cả hai loại dữ liệu của một người — là gợi ý cho nhân viên y tế, không phải kết luận. |  |
| `planConfidenceTitle` | How sure is this? | Mức độ chắc chắn thế nào? |  |
| `planDecision` | Demo decision | Quyết định trong demo |  |
| `planDraftLabel` | Draft for review | Bản nháp để xem lại |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | Việc chỉnh sửa diễn ra cùng nhân viên y tế trong cuộc họp xem lại; bản demo này chỉ ghi lại quyết định. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Hãy ghi chép khoảng một tuần đồ ăn và chỉ số trước. Cần ít nhất bốn ngày có cả hai. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Bản nháp để chuyên gia dinh dưỡng xem lại, chỉ dựa trên những ngày bạn đã ghi. Chỉ mang tính minh họa — không phải lời khuyên. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Độ tin cậy thấp — chỉ có vài ngày có cả hai loại dữ liệu. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Chỉ mang tính minh họa. Không phải lời khuyên hay chẩn đoán. Đừng thay đổi ăn uống hay thuốc vì bản nháp này — nhân viên y tế có trình độ sẽ quyết định. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Được tạo từ {n} ngày có cả đồ ăn và một chỉ số đo. |  |
| `planTitle` | Weekly plan draft | Bản nháp kế hoạch hàng tuần |  |
| `planTypePortion` | Portion | Khẩu phần |  |
| `prevDay` | Previous day | Ngày trước |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Trong hộp thoại in, chọn “Save as PDF” để có bản tóm tắt một trang. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} ngày đầy đủ · {logged} ngày đã ghi |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} ngày đầy đủ · {logged} ngày đã ghi |  |
| `progressTitle` | Progress | Tiến độ |  |
| `recentDays` | Recent days | Những ngày gần đây |  |
| `removedToast` | Removed. | Đã xóa. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Xem gói xem lại cho những người tham gia được phân công, với các cờ và mục nháp liên kết đến ngày nguồn. |  |
| `roleCoordinator` | Coordinator | Điều phối viên |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Xem mức độ đầy đủ của nhóm, hàng đợi xem lại và nhật ký kiểm toán. Không thể thay đổi đơn thuốc. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Xem hàng đợi khác biệt về thuốc và các mốc kê đơn → phát thuốc → đã uống. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | Quy tắc chung cho mọi dòng: phần mềm đọc trước, con người quyết định. |  |
| `sampleTitle` | Sample data | Dữ liệu mẫu |  |
| `saveToday` | Save today’s record | Lưu bản ghi hôm nay |  |
| `savedToast` | Saved in this browser. | Đã lưu trong trình duyệt này. |  |
| `settingsTitle` | Settings | Cài đặt |  |
| `skip` | Skip to demo | Chuyển đến bản demo |  |
| `skip_content` | Skip to content | Chuyển đến nội dung |  |
| `start` | Start recording | Bắt đầu ghi chép |  |
| `status` | Status | Trạng thái |  |
| `status_demo` | Demo | Demo |  |
| `status_roadmap` | Roadmap | Lộ trình |  |
| `status_shipped` | Shipped | Đã phát hành |  |
| `stepProfile` | 1 · Who | 1 · Ai |  |
| `tabToday` | Today | Hôm nay |  |
| `taken` | Taken | Đã uống |  |
| `thisWeek` | this week | tuần này |  |
| `title_404` | Page not found — Khai Tracker | Không tìm thấy trang — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Bản thiết kế chuyển đổi số — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — demo trên trình duyệt |  |
| `title_functions` | Function map — Khai Tracker | Bản đồ chức năng — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Bản thiết kế triển khai tại bệnh viện — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — ngày của bạn, được đo lường |  |
| `title_privacy` | Privacy — Khai Tracker | Quyền riêng tư — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Bảo mật — Khai Tracker |  |
| `vitalsTitle` | Readings | Chỉ số đo được |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Nhật ký hàng ngày về ăn uống và sức khỏe, để bạn và nhân viên y tế thấy rõ điều thực sự xảy ra giữa các lần khám. Ứng dụng chỉ ghi chép, không đưa ra lời khuyên điều trị. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Chào mừng đến với Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Ngày hôm nay thế nào? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Vietnamese (vi)
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
