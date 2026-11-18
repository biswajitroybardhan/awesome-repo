# Korean (ko) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Korean (한국어)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/ko.json` (app and site)
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

## App strings — Korean

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | 앱 정보 |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\n인도 자르칸드 주 잠셰드푸르의 Khai Foods Pvt Ltd가 제작\n\n공용 휴대전화, 불안정한 네트워크, 다양한 인도식 식단을 고려해 설계했습니다. 오프라인 우선. 제3자 분석 없음. 광고 없음. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | 제품 담당자: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + 음식 추가 |  |
| `add_medicines` | Add medicines | 약 추가 |  |
| `already_saved` | Saved. You can keep editing and save again. | 저장되었습니다. 계속 수정하고 다시 저장할 수 있습니다. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | 자격을 갖춘 의료 전문가에게 문의하세요. |  |
| `assistant_input_ph` | Ask a question | 질문을 입력하세요 |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | 이 도구 자체의 도움말에서만 가져온 답변입니다. AI도, 진단도, 조언도 없습니다. |  |
| `assistant_listen` | Listen | 듣기 |  |
| `assistant_send` | Send | 보내기 |  |
| `assistant_tab` | Guide | 안내 |  |
| `assistant_title` | Khai Guide | Khai 안내 |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | 그 질문에 대한 답이 없습니다. 이 도구 사용법에 관한 질문에만 답합니다. |  |
| `back` | Back | 뒤로 |  |
| `bp_dia` | Diastolic (lower) | 이완기(낮은 수치) |  |
| `bp_sys` | Systolic (upper) | 수축기(높은 수치) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | 트래커 |  |
| `cancel` | Cancel | 취소 |  |
| `carbs` | Carbohydrate | 탄수화물 |  |
| `close` | Close | 닫기 |  |
| `completeness` | 21-day completeness | 21일 기록 완성도 |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | 식사, 약, 측정값이 있는 날을 21로 나눈 값입니다. 기억이 아닌 저장된 기록을 기준으로 계산합니다. |  |
| `confirm` | Confirm | 확인 |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | 기록할 내용은 본인이 결정합니다. 입력한 내용은 이 휴대전화에 암호화되어 보관되며, 코디네이터가 서버 주소를 알려준 경우에만 Khai 연구 서버로 전송됩니다. 언제든 모든 내용을 삭제할 수 있습니다. 이름, 주소, Aadhaar 번호 또는 연락처 목록은 수집하지 않습니다. 데이터를 삭제하면 참여를 철회할 수 있습니다. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | 내용을 읽거나 들었으며, 참여에 동의합니다. |  |
| `consent_listen` | Listen in Hindi | 힌디어로 듣기 |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | 동의 버전 1.0 · 이 기기에 타임스탬프와 함께 기록됨 |  |
| `consent_title` | Consent | 동의 |  |
| `day_detail` | Day detail | 해당 날짜 상세 |  |
| `days_logged` | Days logged | 기록한 날 |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker는 추적 도구이며 의학적 조언이 아닙니다. 진단을 내리거나 처방을 변경하지 않습니다. |  |
| `done` | Done | 완료 |  |
| `dose_hint` | Dose (optional) | 용량(선택 사항) |  |
| `edit_day` | Edit this day | 이 날짜 수정 |  |
| `edit_profile` | Edit profile | 프로필 수정 |  |
| `energy` | Energy | 활력 |  |
| `erase` | Erase my data | 내 데이터 삭제 |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | 이 기기의 모든 기록, 프로필, 알림 설정이 영구적으로 삭제됩니다. 되돌릴 수 없습니다. |  |
| `erase_yes` | Erase everything | 모두 삭제 |  |
| `estimated` | estimated | 추정값 |  |
| `export_backup` | Full backup (JSON) | 전체 백업 (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | 건강 기록 (FHIR JSON) |  |
| `export_food` | Food log (CSV) | 음식 기록 (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | 본인이 선택한 사람에게만 공유하세요. 공유를 누를 때만 파일이 기기에서 나갑니다. |  |
| `export_metrics` | Daily readings (CSV) | 일일 측정값 (CSV) |  |
| `export_summary` | Clinician summary (PDF) | 임상 의료진 요약 (PDF) |  |
| `export_title` | Export and share | 내보내기와 공유 |  |
| `export_working` | Preparing file… | 파일을 준비하는 중… |  |
| `fat` | Fat | 지방 |  |
| `food_items` | %1$d food items | 음식 %1$d개 |  |
| `food_library_title` | Food library | 음식 라이브러리 |  |
| `glucose` | Blood sugar | 혈당 |  |
| `glucose_fasting` | Fasting | 공복 |  |
| `glucose_pp` | After food | 식후 |  |
| `hide_previews` | Hide this app in the recent-apps preview | 최근 사용 앱 미리보기에서 이 앱 숨기기 |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | 채워진 칸은 기록이 있는 날입니다. 날짜를 누르면 확인하거나 수정할 수 있습니다. |  |
| `history_title` | Last 21 days | 최근 21일 |  |
| `insight_descriptive` | description | 설명 |  |
| `insight_early` | early signal | 초기 신호 |  |
| `insight_moderate` | moderate signal | 중간 정도 신호 |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | 이는 본인 기록에 대한 관찰이며 진단이나 치료 권고가 아닙니다. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | 일주일간 계속 기록하세요. 측정값이 있는 날이 5일 이상이어야 패턴이 나타납니다. |  |
| `insights_title` | What your own data shows | 내 데이터가 보여 주는 것 |  |
| `kcal` | Energy | 에너지 |  |
| `language` | Language / भाषा | 언어 / भाषा |  |
| `loading` | Loading… | 불러오는 중… |  |
| `meal_breakfast` | Breakfast | 아침 |  |
| `meal_dinner` | Dinner | 저녁 |  |
| `meal_lunch` | Lunch | 점심 |  |
| `meal_snacks` | Snacks & drinks | 간식과 음료 |  |
| `meds_changed` | Changed | 변경됨 |  |
| `meds_empty` | No medicines listed yet. | 등록된 약이 없습니다. |  |
| `meds_hint` | Tick what you actually did today. | 오늘 실제로 한 일을 체크하세요. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | 프로필에 등록된 약이 없습니다. 한 번 등록한 뒤 매일 체크하세요. |  |
| `meds_skipped` | Skipped | 복용하지 않음 |  |
| `meds_summary` | %1$d of %2$d medicines taken | %2$d개 중 %1$d개 복용함 |  |
| `meds_taken` | Taken | 복용함 |  |
| `meds_title` | Medicines | 약 |  |
| `mood` | Mood | 기분 |  |
| `no` | No | 아니요 |  |
| `no_food_yet` | Nothing added yet | 아직 추가된 음식이 없습니다 |  |
| `note` | Anything else? (optional) | 그 밖의 내용(선택 사항) |  |
| `nothing_logged` | No entry for this day. | 이 날짜에는 기록이 없습니다. |  |
| `notif_channel` | Daily reminder | 매일 알림 |  |
| `notif_channel_desc` | One daily reminder to record your day. | 하루 한 번, 그날의 기록을 남기도록 알려줍니다. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | 조용한 2분: 오늘 무엇을 먹고 무엇을 측정했나요? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | 매일 알림을 받을 수 있도록 알림을 허용해 주세요. |  |
| `ok` | OK | 확인 |  |
| `onboard_add_med` | + Add another | + 항목 추가 |  |
| `onboard_age` | Age group | 연령대 |  |
| `onboard_age_ph` | Select | 선택 |  |
| `onboard_code` | Participant code | 참여자 코드 |  |
| `onboard_code_ph` | e.g. K01 | 예: K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | 해당하는 건강 상태를 모두 선택하세요 |  |
| `onboard_error_age` | Please choose an age group. | 연령대를 선택해 주세요. |  |
| `onboard_error_code` | Please enter your participant code. | 참여자 코드를 입력해 주세요. |  |
| `onboard_error_consent` | Please confirm consent to continue. | 계속하려면 동의를 확인해 주세요. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | 매일의 음식과 건강 기록을 통해 본인과 담당 임상 의료진이 방문 사이에 실제로 일어나는 일을 확인할 수 있습니다. 추적 도구이며 의학적 조언이 아닙니다. |  |
| `onboard_meds` | Daily medicines (name and dose) | 매일 복용하는 약(이름과 용량) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | 예: 메트포르민 500 mg |  |
| `onboard_start` | Start tracking | 기록 시작 |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker에 오신 것을 환영합니다 |  |
| `pending` | Pending sync | 동기화 대기 |  |
| `per_portion` | per portion | 1회분당 |  |
| `pick_day` | Pick a day above. | 위에서 날짜를 선택하세요. |  |
| `pin_change` | Change PIN | PIN 변경 |  |
| `pin_enter` | Enter your PIN | PIN을 입력하세요 |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN은 정확히 4자리여야 합니다. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | 가족과 함께 쓰는 휴대전화에 유용합니다. 앱을 열 때와 1분 뒤 다시 열 때 4자리 PIN을 입력합니다. |  |
| `pin_lock` | App lock | 앱 잠금 |  |
| `pin_new` | Choose a 4-digit PIN | 4자리 PIN 선택 |  |
| `pin_remove` | Remove PIN | PIN 삭제 |  |
| `pin_removed` | PIN removed. | PIN이 삭제되었습니다. |  |
| `pin_saved` | PIN saved. | PIN이 저장되었습니다. |  |
| `pin_set` | Set PIN | PIN 설정 |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN이 틀렸습니다. 다시 시도하세요. |  |
| `portion_q` | Portion | 분량 |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | 입력 내용은 이 휴대전화의 보안 키저장소에 보관되는 키로 이 기기에서 암호화됩니다. 연구 서버를 설정하지 않는 한 어디로도 전송되지 않습니다. 분석 도구도 광고도 없습니다. |  |
| `privacy_title` | Privacy | 개인정보 보호 |  |
| `profile` | Profile and medicines | 프로필과 약 |  |
| `progress_title` | Progress | 진행 상황 |  |
| `protein` | Protein | 단백질 |  |
| `pulse` | Pulse | 맥박 |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | 같은 음식도 가정마다 다르므로 추정값은 범위로 표시합니다. 칼로리를 계산하기 위한 것이 아니라 패턴을 찾기 위한 것입니다. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | 이 휴대전화에 힌디어 음성이 설치되어 있지 않습니다. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | 선택한 시간에 조용한 알림이 옵니다. 기록이 끊겼다고 나무라지 않으며 광고도 없습니다. |  |
| `reminder_off` | Reminder off | 알림 꺼짐 |  |
| `reminder_on` | Reminder on | 알림 켜짐 |  |
| `reminder_time` | Reminder time | 알림 시간 |  |
| `reminders` | Daily reminder | 매일 알림 |  |
| `remove` | Remove | 삭제 |  |
| `remove_confirm` | Remove this item? | 이 항목을 삭제하시겠어요? |  |
| `save` | Save | 저장 |  |
| `save_failed` | Could not save. Please try again. | 저장하지 못했습니다. 다시 시도해 주세요. |  |
| `save_today` | Save today | 오늘 기록 저장 |  |
| `saved` | Saved on this device. Encrypted. | 이 기기에 저장되었습니다. 암호화되었습니다. |  |
| `search_food` | Search a dish in English or Hindi | 음식 이름을 영어나 힌디어로 검색 |  |
| `settings_title` | Settings | 설정 |  |
| `share` | Share | 공유 |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | 이 휴대전화에는 파일을 받을 수 있는 앱이 없습니다. 메일이나 파일 앱을 설치한 뒤 다시 시도하세요. |  |
| `sleep` | Sleep last night (hours) | 어젯밤 수면(시간) |  |
| `sodium` | Salt (sodium) | 소금(나트륨) |  |
| `streak` | Day streak | 연속 기록 일수 |  |
| `sync_bad_url` | That does not look like a valid address. | 올바른 주소가 아닌 것 같습니다. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | 동기화에 실패했습니다. 기록은 이 휴대전화에 안전하게 있으며 다시 시도합니다. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | 선택 사항입니다. 코디네이터가 서버 주소를 알려줍니다. 비워 두면 모든 내용이 이 휴대전화에만 보관됩니다. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | HTTPS 주소를 사용하세요. 건강 데이터는 암호화되지 않은 상태로 전송되지 않습니다. |  |
| `sync_never` | Not synced yet. | 아직 동기화하지 않았습니다. |  |
| `sync_now` | Sync now | 지금 동기화 |  |
| `sync_offline` | No internet right now. Entries queued. | 현재 인터넷에 연결되어 있지 않습니다. 기록이 대기 중입니다. |  |
| `sync_ok` | Synced. All entries are on the server. | 동기화되었습니다. 모든 기록이 서버에 있습니다. |  |
| `sync_save` | Save address | 주소 저장 |  |
| `sync_title` | Study sync | 연구 서버 동기화 |  |
| `sync_url` | Server address | 서버 주소 |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | 기록 |  |
| `tab_progress` | Progress | 진행 상황 |  |
| `tab_settings` | Settings | 설정 |  |
| `tab_today` | Today | 오늘 |  |
| `this_week` | This week | 이번 주 |  |
| `todays_total` | Today\'s estimate | 오늘의 추정값 |  |
| `total_carbs` | Carbohydrate | 탄수화물 |  |
| `uncertainty` | Range, not a single number | 단일 숫자가 아닌 범위 |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | 측정한 항목만 입력하세요. 비워 두면 미측정을 뜻하며, 그 자체로도 유용한 정보입니다. |  |
| `vitals_title` | Readings | 측정값 |  |
| `weight` | Weight (kg) | 체중(kg) |  |
| `wellbeing_title` | How was the day? | 오늘 하루는 어땠나요? |  |
| `yes` | Yes | 예 |  |

## Site strings — Korean

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | 이 데모에 대해 |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK 다운로드 |  |
| `action_menu` | Open menu | 메뉴 열기 |  |
| `action_theme` | Switch theme | 테마 전환 |  |
| `addFood` | Add food | 음식 추가 |  |
| `addMed` | + Add another | + 항목 추가 |  |
| `adherence` | medicines taken | 복용한 약 |  |
| `ageLabel` | Age band | 연령 구간 |  |
| `allFoods` | All | 전체 |  |
| `askClinician` | Ask a qualified clinician. | 자격을 갖춘 의료 전문가에게 문의하세요. |  |
| `assistantInputPh` | Ask a question | 질문을 입력하세요 |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | 이 도구 자체의 도움말에서만 가져온 답변입니다. AI도, 진단도, 조언도 없습니다. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | 표시 언어를 바꾸면 레이블만 바뀝니다. 기록된 값은 안정적인 코드로 남아 있어 하루 기록이 다시 작성되지 않습니다. |  |
| `assistantListen` | Listen | 듣기 |  |
| `assistantNav` | Guide | 안내 |  |
| `assistantSend` | Send | 보내기 |  |
| `assistantTitle` | Khai Guide | Khai 안내 |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | 그 질문에 대한 답이 없습니다. 이 도구 사용법에 관한 질문에만 답합니다. |  |
| `avgBp` | avg BP | 평균 혈압 |  |
| `back` | Back | 뒤로 |  |
| `bmiNote` | Not a diagnosis. | 진단이 아닙니다. |  |
| `bpSys` | Systolic | 수축기 |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | 발표가 아닌 설계도로 읽어 주세요. 병원 도입, 시범 운영, 추천, 제휴를 주장하지 않습니다. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | 솔직히 말하면, 지금 있는 것은 참여자 앱과 브라우저 데모뿐입니다. 여기의 병원 구성 요소는 모두 설계 제안입니다. |  |
| `codeLabel` | Participant code | 참여자 코드 |  |
| `codeShort` | Code | 코드 |  |
| `completeDays` | complete days | 기록 완료일 |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | 음식, 복약 상태(처방이 있는 경우), 측정값이 하나 이상 있는 날을 21로 나눈 값입니다. 기억이 아닌 저장된 기록을 기준으로 계산합니다. |  |
| `conditionsLabel` | Conditions (select all that apply) | 해당하는 건강 상태를 모두 선택하세요 |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | 입력할 내용은 본인이 결정합니다. 이 데모에서는 모든 내용이 이 브라우저의 로컬 저장소에 남으며, 서버가 없고 업로드되는 것도 없습니다. Android 앱에서는 기록이 휴대전화에 암호화되어 저장됩니다. 이름, 주소, 정부 발급 신원 확인 번호 또는 연락처 목록은 수집하지 않습니다. 언제든 모든 내용을 삭제할 수 있습니다. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | 내용을 읽었으며, 이 브라우저 데모가 실제 임상 기록용이 아님을 이해했습니다. |  |
| `consentTitle` | Consent | 동의 |  |
| `dayComplete` | Day complete | 해당 날짜 기록 완료 |  |
| `demoBadge` | Demo | 데모 |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | 데모 전용 · 의료기기가 아님 · 실제 임상 기록용이 아닙니다. |  |
| `downloadToast` | {name} downloaded. | {name} 다운로드됨. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | 번역 초안 — 임상 사용 전에 원어민 검토가 필요합니다. |  |
| `early` | early signal | 초기 신호 |  |
| `eraseBtn` | Erase my data | 내 데이터 삭제 |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | 이 브라우저에서 프로필, 모든 날짜의 기록, 모든 설정을 삭제합니다. 되돌릴 수 없습니다. |  |
| `eraseTitle` | Erase everything | 모두 삭제 |  |
| `eraseYes` | Erase everything | 모두 삭제 |  |
| `errCode` | Please enter your participant code. | 참여자 코드를 입력해 주세요. |  |
| `errConsent` | Consent is required to continue. | 계속하려면 동의가 필요합니다. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | 높은 측정값은 대화가 필요하다는 표시가 붙습니다. 이 앱은 진단을 내리거나 처방을 변경하지 않습니다. |  |
| `escalateNone` | No threshold flags in the recent record. | 최근 기록에 기준값 초과 표시가 없습니다. |  |
| `escalateTitle` | Flags for the clinician | 임상 의료진에게 알릴 항목 |  |
| `estTotal` | Today’s estimate | 오늘의 추정값 |  |
| `exportBackup` | Complete backup (JSON) | 전체 백업 (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | 건강 기록 (FHIR R4) |  |
| `exportFood` | Food log (CSV) | 음식 기록 (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | 일일 지표 (CSV) |  |
| `exportPrint` | Clinician summary (print) | 임상 의료진 요약(인쇄) |  |
| `exportsTitle` | Export & share | 내보내기와 공유 |  |
| `eyebrow_capability` | Capability map | 기능 지도 |  |
| `eyebrow_demo` | Browser demo · no install | 브라우저 데모 · 설치 불필요 |  |
| `eyebrow_hospital` | Hospital deployment · reference design | 병원 도입 · 참고 설계 |  |
| `fasting` | Fasting | 공복 |  |
| `foodItemsOne` | 1 item | 음식 1개 |  |
| `foodLogged` | Food | 음식 |  |
| `foodPickerTitle` | Choose a dish | 음식 선택 |  |
| `footerNote` | Nothing leaves this browser. | 이 브라우저 밖으로 나가는 내용은 없습니다. |  |
| `footer_browser_demo` | Browser demo | 브라우저 데모 |  |
| `footer_contact` | Contact | 문의 |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | 데모 전용 · 의료기기가 아님 · Zhongshan Hospital, HIMSS 또는 이름이 명시된 그 어떤 의료 시스템과도 관련이 없습니다. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | 방문 사이의 시간을 기록하는 측정 도구입니다. 공용 휴대전화, 부족한 배터리, 멀리 있는 진료소를 위해 잠셰드푸르에서 만들었습니다. |  |
| `footer_hospital_design` | Hospital design | 병원 설계 |  |
| `footer_limits` | Limits and answers | 한계와 답변 |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | 의료기기가 아닙니다. Zhongshan Hospital, HIMSS 또는 이름이 명시된 그 어떤 의료 시스템과도 관련이 없습니다. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | 이 브라우저 밖으로 나가는 내용은 없습니다. |  |
| `footer_product` | Product | 제품 |  |
| `footer_transparency` | Transparency | 투명성 |  |
| `footer_verification` | Verification | 검증 |  |
| `glucose` | Blood sugar | 혈당 |  |
| `head_404` | That page is not here. | 그 페이지는 여기에 없습니다. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | 병원이 닿지 않는 곳을 위해 만든 닫힌 순환. |  |
| `head_functions` | Every function, honestly labelled. | 모든 기능을 정직하게 표시합니다. |  |
| `head_hospital` | The hospital is the unit of change. | 변화의 단위는 병원입니다. |  |
| `head_privacy` | Your record stays yours. | 기록은 언제나 본인의 것입니다. |  |
| `head_security` | What is protected, and what is not. | 보호되는 것과 보호되지 않는 것. |  |
| `historyTitle` | The last 21 days | 최근 21일 |  |
| `hospAudit` | Audit trail | 감사 기록 |  |
| `hospCohort` | Cohort | 코호트 |  |
| `hospComplete` | complete | 완료 |  |
| `hospDisc1` | Prescribed but not dispensed | 처방되었지만 조제되지 않음 |  |
| `hospDiscrepancies` | Medication discrepancies | 약 조제 불일치 |  |
| `hospOpenHospital` | Open hospital control room | 병원 관제실 열기 |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | 여기서 검토 자료를 보려면 참여자 앱에서 먼저 약 일주일간 기록하세요. |  |
| `hospReviewPack` | Today's review pack | 오늘의 검토 자료 |  |
| `hospitalBack` | Back to app | 앱으로 돌아가기 |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | 같은 기록을 중심으로 설계한 병원 계층의 설계 스케치입니다. 아래 코호트는 가상의 데이터이며, 실제 환자, 병원과의 연결, 임상적 결정은 없습니다. |  |
| `hospitalTitle` | Hospital control room | 병원 관제실 |  |
| `hospital_layer` | Hospital deployment layer | 병원 도입 계층 |  |
| `hospital_s1` | Status of this document | 이 문서의 상태 |  |
| `hospital_s10` | Governance and safety | 거버넌스와 안전 |  |
| `hospital_s11` | Phased rollout | 단계별 도입 |  |
| `hospital_s12` | What would make this real | 이것을 실제로 만들려면 |  |
| `hospital_s2` | Why the hospital, not just the phone | 휴대전화만이 아니라 병원이 필요한 이유 |  |
| `hospital_s3` | Reference topology | 참고 토폴로지 |  |
| `hospital_s4` | Roles and access | 역할과 권한 |  |
| `hospital_s5` | Coordinator console | 코디네이터 콘솔 |  |
| `hospital_s6` | Clinician review workflow | 임상 의료진 검토 흐름 |  |
| `hospital_s7` | Closed-loop medication | 닫힌 순환의 약 관리 |  |
| `hospital_s8` | Integration contract | 연동 계약 |  |
| `hospital_s9` | Identity and data flow | 신원과 데이터 흐름 |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | 약 일주일간 기록하세요. 패턴을 표시하려면 음식과 측정값이 모두 있는 날이 4일 이상 필요합니다. |  |
| `insightsTitle` | What your own numbers say | 내 수치가 말하는 것 |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | 언어 |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Android 버전과 같은 기록 구조, 같은 음식 라이브러리, 같은 규칙이 이 페이지 안에서만 동작합니다. 실제 임상 기록용이 아닙니다. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | 휴대전화 기반 측정 도구부터 임상 의료진이 감독하는 닫힌 순환까지, 프로젝트가 따르는 전체 구조입니다. 각 기능은 '출시됨', '데모', '로드맵' 중 하나로 표시되며 명시된 전제 조건이 함께 적혀 있습니다. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | 휴대전화 기록은 진료소가 그 기록을 바탕으로 행동할 때 비로소 순환을 이룹니다. 이 페이지는 그 병원 계층을 위한 참고 아키텍처입니다. 설계도이며, 여기의 어떤 것도 도입되지 않았고 파트너로 이름 오른 병원도 없습니다. |  |
| `legendComplete` | Complete | 기록 완료 |  |
| `legend_read` | How to read this map | 이 지도의 읽는 법 |  |
| `loadSample` | Load 14-day sample | 14일 샘플 불러오기 |  |
| `mealBreakfast` | Breakfast | 아침 |  |
| `medsLabel` | Daily medicines (name and dose) | 매일 복용하는 약(이름과 용량) |  |
| `medsTitle` | Medicines | 약 |  |
| `nav_blueprint` | Blueprint | 설계도 |  |
| `nav_clinician` | For clinicians | 임상 의료진을 위해 |  |
| `nav_demo` | Demo | 데모 |  |
| `nav_functions` | Functions | 기능 |  |
| `nav_hospital` | Hospital | 병원 |  |
| `nav_loop` | The loop | 순환 구조 |  |
| `nav_security` | Security | 보안 |  |
| `nav_what` | What it does | 기능 소개 |  |
| `noDataToast` | No days recorded yet — add a day first. | 아직 기록된 날이 없습니다. 먼저 하루를 추가하세요. |  |
| `noMatches` | No dish matches that. | 일치하는 음식이 없습니다. |  |
| `noMeds` | No medicines recorded in your profile. | 프로필에 기록된 약이 없습니다. |  |
| `not_map` | What this map is not | 이 지도가 아닌 것 |  |
| `note` | Anything else? (optional) | 그 밖의 내용(선택 사항) |  |
| `nothingLogged` | No record for this day. | 이 날짜에는 기록이 없습니다. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | 이 브라우저에만 저장됩니다. 계정 없음, 업로드 없음. |  |
| `planAccept` | Accept | 수락 |  |
| `planAccepted` | Marked accepted in this demo. | 이 데모에서 수락으로 표시했습니다. |  |
| `planAcceptedState` | accepted | 수락됨 |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | 음식 수치는 가정에서 쓰는 분량을 기준으로 한 추정 범위이며 저울로 잰 측정값이 아닙니다. 패턴 초안은 한 사람의 몇 안 되는 짝이 되는 날에서 나옵니다. 임상 의료진을 위한 단서이며 의학적 소견이 아닙니다. |  |
| `planConfidenceTitle` | How sure is this? | 이 초안을 얼마나 믿을 수 있나요? |  |
| `planDecision` | Demo decision | 데모 결정 |  |
| `planDraftLabel` | Draft for review | 검토용 초안 |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | 수정은 임상 의료진과의 검토 회의에서 이루어집니다. 이 데모는 결정만 기록합니다. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | 먼저 약 일주일간 음식과 측정값을 기록하세요. 초안에는 음식과 측정값이 모두 있는 날이 4일 이상 필요합니다. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | 본인이 기록한 날만을 바탕으로 영양사가 검토할 초안입니다. 예시일 뿐 조언이 아닙니다. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | 신뢰도가 낮음 —— 짝이 되는 날이 몇 일뿐입니다. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | 예시일 뿐입니다. 조언도 진단도 아닙니다. 이 초안 때문에 음식이나 약을 바꾸지 마세요. 판단은 자격을 갖춘 임상 의료진이 합니다. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | 음식과 측정값이 모두 있는 {n}일을 바탕으로 작성했습니다. |  |
| `planTitle` | Weekly plan draft | 주간 계획 초안 |  |
| `planTypePortion` | Portion | 분량 |  |
| `prevDay` | Previous day | 이전 날 |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | 인쇄 대화상자에서 'PDF로 저장'을 선택하면 한 페이지 요약이 됩니다. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total}일 기록 완료 · {logged}일 기록함 |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total}일 기록 완료 · {logged}일 기록함 |  |
| `progressTitle` | Progress | 진행 상황 |  |
| `recentDays` | Recent days | 최근 날짜 |  |
| `removedToast` | Removed. | 삭제되었습니다. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | 담당 참여자의 검토 자료를 볼 수 있으며, 표시 항목과 초안은 원래 날짜의 기록에 연결되어 있습니다. |  |
| `roleCoordinator` | Coordinator | 코디네이터 |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | 코호트 기록 완성도, 검토 대기열, 감사 기록을 볼 수 있습니다. 처방은 변경할 수 없습니다. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | 약 조제 불일치 대기열과 처방 → 조제 → 복용 확인 지점을 볼 수 있습니다. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | 모든 행에 공통인 원칙: 소프트웨어가 먼저 읽고, 사람이 결정합니다. |  |
| `sampleTitle` | Sample data | 샘플 데이터 |  |
| `saveToday` | Save today’s record | 오늘 기록 저장 |  |
| `savedToast` | Saved in this browser. | 이 브라우저에 저장되었습니다. |  |
| `settingsTitle` | Settings | 설정 |  |
| `skip` | Skip to demo | 데모로 건너뛰기 |  |
| `skip_content` | Skip to content | 본문으로 건너뛰기 |  |
| `start` | Start recording | 기록 시작 |  |
| `status` | Status | 상태 |  |
| `status_demo` | Demo | 데모 |  |
| `status_roadmap` | Roadmap | 로드맵 |  |
| `status_shipped` | Shipped | 출시됨 |  |
| `stepProfile` | 1 · Who | 1 · 본인 정보 |  |
| `tabToday` | Today | 오늘 |  |
| `taken` | Taken | 복용함 |  |
| `thisWeek` | this week | 이번 주 |  |
| `title_404` | Page not found — Khai Tracker | 페이지를 찾을 수 없음 — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | 디지털 전환 설계도 — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — 브라우저 데모 |  |
| `title_functions` | Function map — Khai Tracker | 기능 지도 — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | 병원 도입 설계도 — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — 하루를 측정하다 |  |
| `title_privacy` | Privacy — Khai Tracker | 개인정보 보호 — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | 보안 — Khai Tracker |  |
| `vitalsTitle` | Readings | 측정값 |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | 음식과 건강을 매일 기록하여 본인과 담당 임상 의료진이 방문 사이에 실제로 일어나는 일을 확인할 수 있습니다. 기록만 할 뿐 치료 조언은 하지 않습니다. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker에 오신 것을 환영합니다 |  |
| `wellbeingTitle` | How was the day? | 오늘 하루는 어땠나요? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Korean (ko)
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
