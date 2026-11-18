# Russian (ru) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Russian (Русский)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/ru.json` (app and site)
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

## App strings — Russian

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | О приложении |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nСоздано Khai Foods Pvt Ltd, Джамшедпур, Джаркханд, Индия.\n\nРазработано для общих телефонов, нестабильных сетей и самых разных индийских блюд. Сначала офлайн. Никакой аналитики сторонних органов. Никакой рекламы. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Владелец продукта: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Добавить продукт |  |
| `add_medicines` | Add medicines | Добавить лекарства |  |
| `already_saved` | Saved. You can keep editing and save again. | Сохранено. Вы можете продолжить редактирование и сохранить снова. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Обратитесь к квалифицированному специалисту. |  |
| `assistant_input_ph` | Ask a question | Задайте вопрос |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Ответы берутся только из встроенной справки этого инструмента. Никакого ИИ, никакого диагноза, никаких рекомендаций. |  |
| `assistant_listen` | Listen | Слушать |  |
| `assistant_send` | Send | Отправить |  |
| `assistant_tab` | Guide | Справка |  |
| `assistant_title` | Khai Guide | Справка Khai |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | У меня нет ответа на это. Я отвечаю только на вопросы об использовании этого инструмента. |  |
| `back` | Back | Назад |  |
| `bp_dia` | Diastolic (lower) | Диастолическое (нижнее) |  |
| `bp_sys` | Systolic (upper) | Систолическое (верхнее) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Tracker |  |
| `cancel` | Cancel | Отмена |  |
| `carbs` | Carbohydrate | Углеводы |  |
| `close` | Close | Закрыть |  |
| `completeness` | 21-day completeness | Заполненность за 21 день |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Дни с приёмами пищи, лекарствами и одним измерением, делённые на 21. Подсчёт по сохранённым записям, а не по памяти. |  |
| `confirm` | Confirm | Подтвердить |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Вы решаете, что записывать. Ваши записи остаются зашифрованными на этом телефоне и отправляются на сервер исследования Khai только в том случае, если координатор сообщит вам адрес сервера. Вы можете удалить всё в любой момент. Имя, адрес, номер Aadhaar и список контактов не собираются. Вы можете отказаться от участия, удалив свои данные. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Я прочитал(а) или прослушал(а) это и даю согласие на участие. |  |
| `consent_listen` | Listen in Hindi | Прослушать на хинди |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Версия согласия 1.0 · записано на этом устройстве с указанием времени |  |
| `consent_title` | Consent | Согласие |  |
| `day_detail` | Day detail | Подробности дня |  |
| `days_logged` | Days logged | Дней с записями |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker — инструмент отслеживания, а не медицинская консультация. Он никогда не ставит диагноз и никогда не меняет назначения. |  |
| `done` | Done | Готово |  |
| `dose_hint` | Dose (optional) | Доза (необязательно) |  |
| `edit_day` | Edit this day | Изменить этот день |  |
| `edit_profile` | Edit profile | Изменить профиль |  |
| `energy` | Energy | Энергия |  |
| `erase` | Erase my data | Удалить мои данные |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Это безвозвратно удалит все записи, ваш профиль и настройки напоминаний на этом телефоне. Отменить это нельзя. |  |
| `erase_yes` | Erase everything | Удалить всё |  |
| `estimated` | estimated | приблизительно |  |
| `export_backup` | Full backup (JSON) | Полная резервная копия (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Запись о здоровье (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Журнал питания (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Делитесь только с теми людьми, которых вы выбрали. Файлы покидают телефон только когда вы нажимаете «Поделиться». |  |
| `export_metrics` | Daily readings (CSV) | Ежедневные показатели (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Сводка для лечащего врача (PDF) |  |
| `export_title` | Export and share | Экспорт и обмен |  |
| `export_working` | Preparing file… | Подготовка файла… |  |
| `fat` | Fat | Жиры |  |
| `food_items` | %1$d food items | Продуктов: %1$d |  |
| `food_library_title` | Food library | Библиотека продуктов |  |
| `glucose` | Blood sugar | Сахар в крови |  |
| `glucose_fasting` | Fasting | Натощак |  |
| `glucose_pp` | After food | После еды |  |
| `hide_previews` | Hide this app in the recent-apps preview | Скрыть это приложение в списке недавних приложений |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Заполненный квадрат означает запись. Нажмите на любой день, чтобы посмотреть или исправить её. |  |
| `history_title` | Last 21 days | История за 21 день |  |
| `insight_descriptive` | description | описание |  |
| `insight_early` | early signal | ранний сигнал |  |
| `insight_moderate` | moderate signal | умеренный сигнал |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Это наблюдения за вашими собственными записями, а не диагноз и не рекомендация лечения. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Продолжайте вести записи неделю. Закономерности появятся, когда будет не менее пяти дней с измерениями. |  |
| `insights_title` | What your own data shows | Что показывают ваши собственные данные |  |
| `kcal` | Energy | Энергия |  |
| `language` | Language / भाषा | Язык / भाषा |  |
| `loading` | Loading… | Загрузка… |  |
| `meal_breakfast` | Breakfast | Завтрак |  |
| `meal_dinner` | Dinner | Ужин |  |
| `meal_lunch` | Lunch | Обед |  |
| `meal_snacks` | Snacks & drinks | Перекусы и напитки |  |
| `meds_changed` | Changed | Изменено |  |
| `meds_empty` | No medicines listed yet. | Лекарства пока не указаны. |  |
| `meds_hint` | Tick what you actually did today. | Отметьте, что вы действительно сделали сегодня. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | В вашем профиле нет лекарств. Добавьте их один раз, затем отмечайте каждый день. |  |
| `meds_skipped` | Skipped | Пропущено |  |
| `meds_summary` | %1$d of %2$d medicines taken | Принято %1$d из %2$d лекарств |  |
| `meds_taken` | Taken | Принято |  |
| `meds_title` | Medicines | Лекарства |  |
| `mood` | Mood | Настроение |  |
| `no` | No | Нет |  |
| `no_food_yet` | Nothing added yet | Пока ничего не добавлено |  |
| `note` | Anything else? (optional) | Ещё что-нибудь? (необязательно) |  |
| `nothing_logged` | No entry for this day. | На этот день записей нет. |  |
| `notif_channel` | Daily reminder | Ежедневное напоминание |  |
| `notif_channel_desc` | One daily reminder to record your day. | Одно напоминание в день, чтобы записать свой день. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Две спокойные минуты: что вы ели и что измеряли сегодня? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Разрешите уведомления, чтобы получать ежедневное напоминание. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + Добавить ещё |  |
| `onboard_age` | Age group | Возрастная группа |  |
| `onboard_age_ph` | Select | Выберите |  |
| `onboard_code` | Participant code | Код участника |  |
| `onboard_code_ph` | e.g. K01 | напр., K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Состояния здоровья (отметьте все подходящие) |  |
| `onboard_error_age` | Please choose an age group. | Выберите возрастную группу. |  |
| `onboard_error_code` | Please enter your participant code. | Введите код участника. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Подтвердите согласие, чтобы продолжить. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Ежедневная запись о питании и здоровье, которая помогает вам и вашему лечащему врачу видеть, что на самом деле происходит между визитами. Это инструмент отслеживания, а не медицинская консультация. |  |
| `onboard_meds` | Daily medicines (name and dose) | Ежедневные лекарства (название и доза) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | напр., Metformin 500 mg |  |
| `onboard_start` | Start tracking | Начать отслеживание |  |
| `onboard_title` | Welcome to Khai Tracker | Добро пожаловать в Khai Tracker |  |
| `pending` | Pending sync | Ожидает синхронизации |  |
| `per_portion` | per portion | на порцию |  |
| `pick_day` | Pick a day above. | Выберите день выше. |  |
| `pin_change` | Change PIN | Изменить PIN |  |
| `pin_enter` | Enter your PIN | Введите ваш PIN |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN должен содержать ровно 4 цифры. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Полезно на общем семейном телефоне. При открытии приложения и снова после минуты бездействия запрашивается PIN из 4 цифр. |  |
| `pin_lock` | App lock | Блокировка приложения |  |
| `pin_new` | Choose a 4-digit PIN | Выберите PIN из 4 цифр |  |
| `pin_remove` | Remove PIN | Удалить PIN |  |
| `pin_removed` | PIN removed. | PIN удалён. |  |
| `pin_saved` | PIN saved. | PIN сохранён. |  |
| `pin_set` | Set PIN | Установить PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | Неверный PIN. Попробуйте ещё раз. |  |
| `portion_q` | Portion | Порция |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | Ваши записи зашифрованы на этом устройстве с помощью ключа, хранящегося в защищённом хранилище телефона. Ничего никуда не отправляется, если вы не настроите сервер исследования. Никакой аналитики и рекламы. |  |
| `privacy_title` | Privacy | Конфиденциальность |  |
| `profile` | Profile and medicines | Профиль и лекарства |  |
| `progress_title` | Progress | Прогресс |  |
| `protein` | Protein | Белок |  |
| `pulse` | Pulse | Пульс |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Оценки указаны диапазонами, потому что одно и то же блюдо готовят по-разному в разных семьях. Они помогают находить закономерности, а не считать калории. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | Озвучивание на хинди не установлено на этом телефоне. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Тихое уведомление в выбранное вами время. Без давления из-за прерванной серии, без рекламы. |  |
| `reminder_off` | Reminder off | Напоминание выключено |  |
| `reminder_on` | Reminder on | Напоминание включено |  |
| `reminder_time` | Reminder time | Время напоминания |  |
| `reminders` | Daily reminder | Ежедневное напоминание |  |
| `remove` | Remove | Удалить |  |
| `remove_confirm` | Remove this item? | Удалить этот элемент? |  |
| `save` | Save | Сохранить |  |
| `save_failed` | Could not save. Please try again. | Не удалось сохранить. Попробуйте ещё раз. |  |
| `save_today` | Save today | Сохранить сегодня |  |
| `saved` | Saved on this device. Encrypted. | Сохранено на этом устройстве. Зашифровано. |  |
| `search_food` | Search a dish in English or Hindi | Поиск блюда на английском или хинди |  |
| `settings_title` | Settings | Настройки |  |
| `share` | Share | Поделиться |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | На этом телефоне нет приложения, которое могло бы получить файл. Установите приложение для почты или работы с файлами и попробуйте снова. |  |
| `sleep` | Sleep last night (hours) | Сон прошлой ночью (часы) |  |
| `sodium` | Salt (sodium) | Соль (натрий) |  |
| `streak` | Day streak | Серия дней |  |
| `sync_bad_url` | That does not look like a valid address. | Это не похоже на правильный адрес. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Синхронизация не удалась. Записи в безопасности на этом телефоне, повторная попытка будет выполнена позже. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | Необязательно. Координатор сообщит вам адрес сервера. Оставьте поле пустым, чтобы хранить всё только на этом телефоне. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | Используйте адрес HTTPS. Данные о здоровье никогда не передаются без шифрования. |  |
| `sync_never` | Not synced yet. | Синхронизация ещё не выполнялась. |  |
| `sync_now` | Sync now | Синхронизировать сейчас |  |
| `sync_offline` | No internet right now. Entries queued. | Сейчас нет интернета. Записи поставлены в очередь. |  |
| `sync_ok` | Synced. All entries are on the server. | Синхронизировано. Все записи находятся на сервере. |  |
| `sync_save` | Save address | Сохранить адрес |  |
| `sync_title` | Study sync | Синхронизация с исследованием |  |
| `sync_url` | Server address | Адрес сервера |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | История |  |
| `tab_progress` | Progress | Прогресс |  |
| `tab_settings` | Settings | Настройки |  |
| `tab_today` | Today | Сегодня |  |
| `this_week` | This week | Эта неделя |  |
| `todays_total` | Today\'s estimate | Оценка за сегодня |  |
| `total_carbs` | Carbohydrate | Углеводы |  |
| `uncertainty` | Range, not a single number | Диапазон, а не одно число |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Заполняйте только то, что вы измерили. Пустое поле означает «не измерялось» — это тоже полезная информация. |  |
| `vitals_title` | Readings | Показатели |  |
| `weight` | Weight (kg) | Вес (кг) |  |
| `wellbeing_title` | How was the day? | Как прошёл день? |  |
| `yes` | Yes | Да |  |

## Site strings — Russian

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Об этой демоверсии |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | Скачать APK |  |
| `action_menu` | Open menu | Открыть меню |  |
| `action_theme` | Switch theme | Сменить тему |  |
| `addFood` | Add food | Добавить продукт |  |
| `addMed` | + Add another | + Добавить ещё |  |
| `adherence` | medicines taken | лекарства приняты |  |
| `ageLabel` | Age band | Возрастная группа |  |
| `allFoods` | All | Все |  |
| `askClinician` | Ask a qualified clinician. | Обратитесь к квалифицированному специалисту. |  |
| `assistantInputPh` | Ask a question | Задайте вопрос |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Ответы берутся только из встроенной справки этого инструмента. Никакого ИИ, никакого диагноза, никаких рекомендаций. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Смена языка отображения изменяет только подписи. Записанные значения остаются стабильными кодами, поэтому ни один день не перезаписывается. |  |
| `assistantListen` | Listen | Слушать |  |
| `assistantNav` | Guide | Справка |  |
| `assistantSend` | Send | Отправить |  |
| `assistantTitle` | Khai Guide | Справка Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | У меня нет ответа на это. Я отвечаю только на вопросы об использовании этого инструмента. |  |
| `avgBp` | avg BP | среднее давление |  |
| `back` | Back | Назад |  |
| `bmiNote` | Not a diagnosis. | Не диагноз. |  |
| `bpSys` | Systolic | Систолическое |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Читайте как проект, а не как объявление: не заявляется ни о внедрении в больнице, ни о пилоте, ни об одобрении, ни о партнёрстве. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | Честная линия: приложение участника и демо в браузере существуют сегодня. Каждый больничный компонент здесь — это проектное предложение. |  |
| `codeLabel` | Participant code | Код участника |  |
| `codeShort` | Code | Код |  |
| `completeDays` | complete days | заполненных дней |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Дни с едой, статусом лекарств (если назначены) и хотя бы одним измерением, делённые на 21. Подсчёт по сохранённым записям, а не по памяти. |  |
| `conditionsLabel` | Conditions (select all that apply) | Состояния здоровья (выберите все подходящие) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Вы решаете, что вносить. В этой демоверсии всё остаётся в локальном хранилище этого браузера — сервера нет, и ничего не загружается. В приложении Android записи зашифрованы на телефоне. Имя, адрес, государственное удостоверение и список контактов не собираются. Вы можете удалить всё в любой момент. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Я прочитал(а) это и понимаю, что демоверсия в браузере не предназначена для реальных медицинских записей. |  |
| `consentTitle` | Consent | Согласие |  |
| `dayComplete` | Day complete | День заполнен |  |
| `demoBadge` | Demo | Демо |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Только демо · не медицинское изделие · не для реальных медицинских записей. |  |
| `downloadToast` | {name} downloaded. | Загружено: {name}. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Черновик перевода — перед клиническим использованием требуется проверка носителем языка. |  |
| `early` | early signal | ранний сигнал |  |
| `eraseBtn` | Erase my data | Удалить мои данные |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Это удалит из браузера профиль, все дни и все настройки. Отменить нельзя. |  |
| `eraseTitle` | Erase everything | Удалить всё |  |
| `eraseYes` | Erase everything | Удалить всё |  |
| `errCode` | Please enter your participant code. | Введите код участника. |  |
| `errConsent` | Consent is required to continue. | Для продолжения требуется согласие. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Повышенные показатели отмечаются для обсуждения. Приложение никогда не ставит диагноз и не меняет назначения. |  |
| `escalateNone` | No threshold flags in the recent record. | В последних записях нет превышений порогов. |  |
| `escalateTitle` | Flags for the clinician | Сигналы для врача |  |
| `estTotal` | Today’s estimate | Оценка за сегодня |  |
| `exportBackup` | Complete backup (JSON) | Полная резервная копия (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Запись о здоровье (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Журнал питания (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Ежедневные показатели (CSV) |  |
| `exportPrint` | Clinician summary (print) | Сводка для лечащего врача (печать) |  |
| `exportsTitle` | Export & share | Экспорт и обмен |  |
| `eyebrow_capability` | Capability map | Карта возможностей |  |
| `eyebrow_demo` | Browser demo · no install | Демо в браузере · без установки |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Внедрение в больнице · справочный проект |  |
| `fasting` | Fasting | Натощак |  |
| `foodItemsOne` | 1 item | 1 продукт |  |
| `foodLogged` | Food | Питание |  |
| `foodPickerTitle` | Choose a dish | Выберите блюдо |  |
| `footerNote` | Nothing leaves this browser. | Ничего не выходит из этого браузера. |  |
| `footer_browser_demo` | Browser demo | Демо в браузере |  |
| `footer_contact` | Contact | Контакты |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Только демо · не медицинское изделие · никакой связи с Zhongshan Hospital, HIMSS или любыми названными системами здравоохранения. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Инструмент измерения для времени между визитами. Создан в Джамшедпуре для общих телефонов, слабых батарей и далёких клиник. |  |
| `footer_hospital_design` | Hospital design | Проект больницы |  |
| `footer_limits` | Limits and answers | Ограничения и ответы |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Не медицинское изделие. Никакой связи с Zhongshan Hospital, HIMSS или любыми названными системами здравоохранения. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Ничего не выходит из этого браузера. |  |
| `footer_product` | Product | Продукт |  |
| `footer_transparency` | Transparency | Прозрачность |  |
| `footer_verification` | Verification | Проверка |  |
| `glucose` | Blood sugar | Сахар в крови |  |
| `head_404` | That page is not here. | Этой страницы здесь нет. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Замкнутый цикл, созданный для мест, куда больница никогда не дотягивается. |  |
| `head_functions` | Every function, honestly labelled. | Каждая функция названа честно. |  |
| `head_hospital` | The hospital is the unit of change. | Больница — единица изменений. |  |
| `head_privacy` | Your record stays yours. | Ваша запись остаётся вашей. |  |
| `head_security` | What is protected, and what is not. | Что защищено, а что нет. |  |
| `historyTitle` | The last 21 days | Записи за 21 день |  |
| `hospAudit` | Audit trail | Журнал действий |  |
| `hospCohort` | Cohort | Когорта |  |
| `hospComplete` | complete | заполнено |  |
| `hospDisc1` | Prescribed but not dispensed | Назначено, но не выдано |  |
| `hospDiscrepancies` | Medication discrepancies | Расхождения по лекарствам |  |
| `hospOpenHospital` | Open hospital control room | Открыть центр управления больницей |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Запишите около недели в приложении участника, чтобы увидеть здесь пакет проверки. |  |
| `hospReviewPack` | Today's review pack | Пакет проверки за сегодня |  |
| `hospitalBack` | Back to app | Вернуться в приложение |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Эскиз проекта больничного уровня, построенного вокруг той же записи. Когорта ниже синтетическая — реальных пациентов нет, связи с больницей нет, клинических решений нет. |  |
| `hospitalTitle` | Hospital control room | Центр управления больницей |  |
| `hospital_layer` | Hospital deployment layer | Уровень внедрения в больнице |  |
| `hospital_s1` | Status of this document | Статус этого документа |  |
| `hospital_s10` | Governance and safety | Управление и безопасность |  |
| `hospital_s11` | Phased rollout | Внедрение по этапам |  |
| `hospital_s12` | What would make this real | Что сделало бы это реальным |  |
| `hospital_s2` | Why the hospital, not just the phone | Почему больница, а не только телефон |  |
| `hospital_s3` | Reference topology | Справочная топология |  |
| `hospital_s4` | Roles and access | Роли и доступ |  |
| `hospital_s5` | Coordinator console | Консоль координатора |  |
| `hospital_s6` | Clinician review workflow | Порядок проверки врачом |  |
| `hospital_s7` | Closed-loop medication | Замкнутый цикл по лекарствам |  |
| `hospital_s8` | Integration contract | Договор интеграции |  |
| `hospital_s9` | Identity and data flow | Идентификация и поток данных |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Ведите запись около недели. Для закономерностей нужно не менее четырёх парных дней. |  |
| `insightsTitle` | What your own numbers say | Что говорят ваши собственные числа |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Язык |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Та же структура записи, та же библиотека продуктов и те же правила, что и в версии для Android, полностью работающие на этой странице. Не для реальных медицинских записей. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Это полная схема проекта — от инструмента измерения на телефоне до контролируемого врачом замкнутого цикла. Каждая функция помечена как Выпущено, Демо или План с указанным предварительным условием. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Запись на телефоне замыкает цикл только тогда, когда клиника может на неё реагировать. Эта страница — справочная архитектура для больничного уровня. Это проект концепции: ничего не внедрено, и ни одна больница не названа партнёром. |  |
| `legendComplete` | Complete | Заполнено |  |
| `legend_read` | How to read this map | Как читать эту карту |  |
| `loadSample` | Load 14-day sample | Загрузить пример за 14 дней |  |
| `mealBreakfast` | Breakfast | Завтрак |  |
| `medsLabel` | Daily medicines (name and dose) | Ежедневные лекарства (название и доза) |  |
| `medsTitle` | Medicines | Лекарства |  |
| `nav_blueprint` | Blueprint | Проект |  |
| `nav_clinician` | For clinicians | Для врачей |  |
| `nav_demo` | Demo | Демо |  |
| `nav_functions` | Functions | Функции |  |
| `nav_hospital` | Hospital | Больница |  |
| `nav_loop` | The loop | Цикл |  |
| `nav_security` | Security | Безопасность |  |
| `nav_what` | What it does | Что делает |  |
| `noDataToast` | No days recorded yet — add a day first. | Дни пока не записаны — сначала добавьте день. |  |
| `noMatches` | No dish matches that. | Ни одно блюдо не подходит. |  |
| `noMeds` | No medicines recorded in your profile. | В вашем профиле нет записанных лекарств. |  |
| `not_map` | What this map is not | Чем эта карта не является |  |
| `note` | Anything else? (optional) | Ещё что-нибудь? (необязательно) |  |
| `nothingLogged` | No record for this day. | На этот день записей нет. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Хранится только в этом браузере. Без учётной записи, без загрузки. |  |
| `planAccept` | Accept | Принять |  |
| `planAccepted` | Marked accepted in this demo. | Отмечено как принятое в этой демоверсии. |  |
| `planAcceptedState` | accepted | принято |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Значения питания — это оценки домашних порций, показанные как диапазоны, а не взвешенные измерения. Черновики закономерностей основаны на нескольких парных днях одного человека — это поводы для обсуждения с врачом, а не выводы. |  |
| `planConfidenceTitle` | How sure is this? | Насколько это надёжно? |  |
| `planDecision` | Demo decision | Решение в демоверсии |  |
| `planDraftLabel` | Draft for review | Черновик для проверки |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | Изменения вносятся вместе с врачом на встрече по проверке; демоверсия фиксирует только решение. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Сначала запишите около недели питания и измерений. Для черновика нужно не менее четырёх парных дней. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Черновик для проверки диетологом, составленный только на основе ваших записанных дней. Иллюстрация — не рекомендация. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Низкая уверенность — всего несколько парных дней. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Только для иллюстрации. Не рекомендация и не диагноз. Не меняйте питание или лекарства из-за этого черновика — решение принимает квалифицированный врач. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Составлено по {n} дням, в которых есть и еда, и измерение. |  |
| `planTitle` | Weekly plan draft | Черновик недельного плана |  |
| `planTypePortion` | Portion | Порция |  |
| `prevDay` | Previous day | Предыдущий день |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | В окне печати выберите «Сохранить как PDF», чтобы получить сводку на одну страницу. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} заполненных дней · {logged} дней с записями |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} заполненных дней · {logged} день с записью |  |
| `progressTitle` | Progress | Прогресс |  |
| `recentDays` | Recent days | Последние дни |  |
| `removedToast` | Removed. | Удалено. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Видит пакет проверки для закреплённых участников с сигналами и пунктами черновика, связанными с исходными днями. |  |
| `roleCoordinator` | Coordinator | Координатор |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Видит заполненность когорты, очередь проверки и журнал действий. Не может менять назначения. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Видит очередь расхождений по лекарствам и контрольные точки: назначено → выдано → принято. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | Правило для всех строк: сначала читает программа, решение принимает человек. |  |
| `sampleTitle` | Sample data | Пример данных |  |
| `saveToday` | Save today’s record | Сохранить запись за сегодня |  |
| `savedToast` | Saved in this browser. | Сохранено в этом браузере. |  |
| `settingsTitle` | Settings | Настройки |  |
| `skip` | Skip to demo | Перейти к демо |  |
| `skip_content` | Skip to content | Перейти к содержимому |  |
| `start` | Start recording | Начать вести запись |  |
| `status` | Status | Статус |  |
| `status_demo` | Demo | Демо |  |
| `status_roadmap` | Roadmap | План |  |
| `status_shipped` | Shipped | Выпущено |  |
| `stepProfile` | 1 · Who | 1 · Кто |  |
| `tabToday` | Today | Сегодня |  |
| `taken` | Taken | Принято |  |
| `thisWeek` | this week | эта неделя |  |
| `title_404` | Page not found — Khai Tracker | Страница не найдена — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Проект цифровой трансформации — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — демо в браузере |  |
| `title_functions` | Function map — Khai Tracker | Карта функций — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Проект внедрения в больнице — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — ваш день, измеренный |  |
| `title_privacy` | Privacy — Khai Tracker | Конфиденциальность — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Безопасность — Khai Tracker |  |
| `vitalsTitle` | Readings | Показатели |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Ежедневная запись о питании и здоровье, чтобы вы и ваш лечащий врач видели, что на самом деле происходит между визитами. Она ведёт запись. Она не даёт рекомендаций по лечению. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Добро пожаловать в Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Как прошёл день? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Russian (ru)
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
