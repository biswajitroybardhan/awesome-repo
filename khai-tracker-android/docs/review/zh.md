# Chinese (zh) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Chinese (中文)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/zh.json` (app and site)
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

## App strings — Chinese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | 关于 |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\n由 Khai Foods Pvt Ltd 构建，位于印度贾坎德邦贾姆谢德布尔。\n\n专为共用手机、信号不稳定的网络和多样化的印度餐食而设计。离线优先。无第三方分析。无广告。 |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | 产品负责人：Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + 添加食物 |  |
| `add_medicines` | Add medicines | 添加药物 |  |
| `already_saved` | Saved. You can keep editing and save again. | 已保存。您可以继续编辑并再次保存。 |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | 请咨询合格的医务人员。 |  |
| `assistant_input_ph` | Ask a question | 请输入问题 |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | 答案仅取自本工具自带的帮助文本。没有人工智能，没有诊断，没有建议。 |  |
| `assistant_listen` | Listen | 朗读 |  |
| `assistant_send` | Send | 发送 |  |
| `assistant_tab` | Guide | 指南 |  |
| `assistant_title` | Khai Guide | Khai 指南 |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | 我无法回答这个问题。我只能回答有关如何使用本工具的问题。 |  |
| `back` | Back | 返回 |  |
| `bp_dia` | Diastolic (lower) | 舒张压（低压） |  |
| `bp_sys` | Systolic (upper) | 收缩压（高压） |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | 追踪 |  |
| `cancel` | Cancel | 取消 |  |
| `carbs` | Carbohydrate | 碳水化合物 |  |
| `close` | Close | 关闭 |  |
| `completeness` | 21-day completeness | 21 天记录完整度 |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | 有饮食、药物和测量值的天数除以 21。根据已保存的记录计算，而非凭记忆。 |  |
| `confirm` | Confirm | 确认 |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | 由您决定记录哪些内容。您的记录在这部手机上保持加密，只有当您的协调员提供服务器地址时，才会发送到 Khai 研究服务器。您可以随时删除所有内容。我们不会收集姓名、地址、Aadhaar 号码或联系人列表。您可以通过删除数据退出。 |  |
| `consent_check` | I have read or heard this, and I agree to take part. | 我已阅读或听到以上内容，并同意参与。 |  |
| `consent_listen` | Listen in Hindi | 听印地语朗读 |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | 同意书版本 1.0 · 在本设备上记录并带有时间戳 |  |
| `consent_title` | Consent | 同意 |  |
| `day_detail` | Day detail | 当日详情 |  |
| `days_logged` | Days logged | 已记录天数 |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker 是追踪工具，并非医疗建议。它不会做出诊断，也不会更改处方。 |  |
| `done` | Done | 完成 |  |
| `dose_hint` | Dose (optional) | 剂量（选填） |  |
| `edit_day` | Edit this day | 编辑这一天的记录 |  |
| `edit_profile` | Edit profile | 编辑个人资料 |  |
| `energy` | Energy | 精力 |  |
| `erase` | Erase my data | 删除我的数据 |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | 这将永久删除这部手机上的所有记录、您的个人资料和提醒设置。此操作无法撤销。 |  |
| `erase_yes` | Erase everything | 删除全部内容 |  |
| `estimated` | estimated | 估计 |  |
| `export_backup` | Full backup (JSON) | 完整备份 (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | 健康记录 (FHIR JSON) |  |
| `export_food` | Food log (CSV) | 饮食记录 (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | 只与您选择的人分享。只有当您点击分享时，文件才会离开手机。 |  |
| `export_metrics` | Daily readings (CSV) | 每日测量值 (CSV) |  |
| `export_summary` | Clinician summary (PDF) | 临床医生摘要 (PDF) |  |
| `export_title` | Export and share | 导出与分享 |  |
| `export_working` | Preparing file… | 正在准备文件… |  |
| `fat` | Fat | 脂肪 |  |
| `food_items` | %1$d food items | %1$d 项食物 |  |
| `food_library_title` | Food library | 食物库 |  |
| `glucose` | Blood sugar | 血糖 |  |
| `glucose_fasting` | Fasting | 空腹 |  |
| `glucose_pp` | After food | 餐后 |  |
| `hide_previews` | Hide this app in the recent-apps preview | 在最近使用的应用预览中隐藏此应用 |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | 实心方块表示当天有记录。点击任意一天即可查看或修改。 |  |
| `history_title` | Last 21 days | 过去 21 天 |  |
| `insight_descriptive` | description | 描述 |  |
| `insight_early` | early signal | 早期信号 |  |
| `insight_moderate` | moderate signal | 中等信号 |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | 这些只是对您自己记录的观察，不是诊断，也不是治疗建议。 |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | 持续记录一周。至少有五天有测量值后，才会显示规律。 |  |
| `insights_title` | What your own data shows | 您自己的数据显示了什么 |  |
| `kcal` | Energy | 能量 |  |
| `language` | Language / भाषा | 语言 / भाषा |  |
| `loading` | Loading… | 正在加载… |  |
| `meal_breakfast` | Breakfast | 早餐 |  |
| `meal_dinner` | Dinner | 晚餐 |  |
| `meal_lunch` | Lunch | 午餐 |  |
| `meal_snacks` | Snacks & drinks | 零食和饮料 |  |
| `meds_changed` | Changed | 有变化 |  |
| `meds_empty` | No medicines listed yet. | 尚未列出药物。 |  |
| `meds_hint` | Tick what you actually did today. | 勾选您今天实际完成的情况。 |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | 您的个人资料中未列出药物。先添加一次，之后每天勾选即可。 |  |
| `meds_skipped` | Skipped | 未服用 |  |
| `meds_summary` | %1$d of %2$d medicines taken | 已服用 %1$d / %2$d 种药物 |  |
| `meds_taken` | Taken | 已服用 |  |
| `meds_title` | Medicines | 药物 |  |
| `mood` | Mood | 心情 |  |
| `no` | No | 否 |  |
| `no_food_yet` | Nothing added yet | 尚未添加内容 |  |
| `note` | Anything else? (optional) | 还有其他想记录的吗？（选填） |  |
| `nothing_logged` | No entry for this day. | 这一天没有记录。 |  |
| `notif_channel` | Daily reminder | 每日提醒 |  |
| `notif_channel_desc` | One daily reminder to record your day. | 每天一次提醒您记录当天的情况。 |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | 安静的两分钟：今天吃了什么，测量了什么？ |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | 允许通知，以便每日提醒能够送达。 |  |
| `ok` | OK | 确定 |  |
| `onboard_add_med` | + Add another | + 再添加一项 |  |
| `onboard_age` | Age group | 年龄组 |  |
| `onboard_age_ph` | Select | 选择 |  |
| `onboard_code` | Participant code | 参与者编号 |  |
| `onboard_code_ph` | e.g. K01 | 例如 K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | 健康状况（勾选所有适用项） |  |
| `onboard_error_age` | Please choose an age group. | 请选择年龄组。 |  |
| `onboard_error_code` | Please enter your participant code. | 请输入您的参与者编号。 |  |
| `onboard_error_consent` | Please confirm consent to continue. | 请确认同意后才能继续。 |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | 每日饮食与健康记录，帮助您和您的临床医生了解两次就诊之间实际发生的情况。这是一款追踪工具，并非医疗建议。 |  |
| `onboard_meds` | Daily medicines (name and dose) | 每日药物（名称和剂量） |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | 例如 二甲双胍 500 mg |  |
| `onboard_start` | Start tracking | 开始追踪 |  |
| `onboard_title` | Welcome to Khai Tracker | 欢迎使用 Khai Tracker |  |
| `pending` | Pending sync | 等待同步 |  |
| `per_portion` | per portion | 每份 |  |
| `pick_day` | Pick a day above. | 请在上方选择一天。 |  |
| `pin_change` | Change PIN | 修改 PIN |  |
| `pin_enter` | Enter your PIN | 请输入 PIN |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN 必须恰好为 4 位数字。 |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | 适合家庭共用手机。打开应用时会要求输入 4 位 PIN，离开一分钟后再次打开也会要求输入。 |  |
| `pin_lock` | App lock | 应用锁定 |  |
| `pin_new` | Choose a 4-digit PIN | 设置 4 位 PIN |  |
| `pin_remove` | Remove PIN | 移除 PIN |  |
| `pin_removed` | PIN removed. | PIN 已移除。 |  |
| `pin_saved` | PIN saved. | PIN 已保存。 |  |
| `pin_set` | Set PIN | 设置 PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN 错误，请重试。 |  |
| `portion_q` | Portion | 份量 |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | 您的记录在本设备上加密，密钥保存在此手机的安全密钥库中。除非您设置研究服务器，否则不会向任何地方发送任何内容。没有分析统计，也没有广告。 |  |
| `privacy_title` | Privacy | 隐私 |  |
| `profile` | Profile and medicines | 个人资料与药物 |  |
| `progress_title` | Progress | 进展 |  |
| `protein` | Protein | 蛋白质 |  |
| `pulse` | Pulse | 脉搏 |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | 估计值以范围表示，因为同一道菜在不同家庭会有所不同。这些数值用于发现规律，而非计算卡路里。 |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | 这部手机上未安装印地语语音。 |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | 在您选择的时间发送一条安静的通知。不会因中断记录而责备您，也没有广告。 |  |
| `reminder_off` | Reminder off | 提醒已关闭 |  |
| `reminder_on` | Reminder on | 提醒已开启 |  |
| `reminder_time` | Reminder time | 提醒时间 |  |
| `reminders` | Daily reminder | 每日提醒 |  |
| `remove` | Remove | 移除 |  |
| `remove_confirm` | Remove this item? | 移除此项？ |  |
| `save` | Save | 保存 |  |
| `save_failed` | Could not save. Please try again. | 无法保存，请重试。 |  |
| `save_today` | Save today | 保存今天的记录 |  |
| `saved` | Saved on this device. Encrypted. | 已保存在本设备上，并已加密。 |  |
| `search_food` | Search a dish in English or Hindi | 用英语或印地语搜索菜品 |  |
| `settings_title` | Settings | 设置 |  |
| `share` | Share | 分享 |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | 这部手机上没有可以接收该文件的应用。请安装邮件或文件应用后重试。 |  |
| `sleep` | Sleep last night (hours) | 昨晚睡眠（小时） |  |
| `sodium` | Salt (sodium) | 盐（钠） |  |
| `streak` | Day streak | 连续记录天数 |  |
| `sync_bad_url` | That does not look like a valid address. | 这看起来不是有效的地址。 |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | 同步失败。记录安全保存在这部手机上，稍后会重试。 |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | 可选。您的协调员会提供服务器地址。留空表示所有内容仅保存在这部手机上。 |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | 请使用 HTTPS 地址。健康数据绝不会以未加密方式发送。 |  |
| `sync_never` | Not synced yet. | 尚未同步。 |  |
| `sync_now` | Sync now | 立即同步 |  |
| `sync_offline` | No internet right now. Entries queued. | 当前没有网络。记录已排队等待同步。 |  |
| `sync_ok` | Synced. All entries are on the server. | 已同步。所有记录都在服务器上。 |  |
| `sync_save` | Save address | 保存地址 |  |
| `sync_title` | Study sync | 研究同步 |  |
| `sync_url` | Server address | 服务器地址 |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | 历史 |  |
| `tab_progress` | Progress | 进展 |  |
| `tab_settings` | Settings | 设置 |  |
| `tab_today` | Today | 今天 |  |
| `this_week` | This week | 本周 |  |
| `todays_total` | Today\'s estimate | 今日估计值 |  |
| `total_carbs` | Carbohydrate | 碳水化合物 |  |
| `uncertainty` | Range, not a single number | 是一个范围，而非单一数值 |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | 只填写您测量过的内容。留空表示未测量，这也是有用的信息。 |  |
| `vitals_title` | Readings | 测量值 |  |
| `weight` | Weight (kg) | 体重（kg） |  |
| `wellbeing_title` | How was the day? | 今天过得怎么样？ |  |
| `yes` | Yes | 是 |  |

## Site strings — Chinese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | 关于此演示 |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | 下载 APK |  |
| `action_menu` | Open menu | 打开菜单 |  |
| `action_theme` | Switch theme | 切换主题 |  |
| `addFood` | Add food | 添加食物 |  |
| `addMed` | + Add another | + 再添加一项 |  |
| `adherence` | medicines taken | 已服用药物 |  |
| `ageLabel` | Age band | 年龄段 |  |
| `allFoods` | All | 全部 |  |
| `askClinician` | Ask a qualified clinician. | 请咨询合格的医务人员。 |  |
| `assistantInputPh` | Ask a question | 请输入问题 |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | 答案仅取自本工具自带的帮助文本。没有人工智能，没有诊断，没有建议。 |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | 切换显示语言只会更改标签。记录的值保持为稳定代码，因此任何一天的记录都不会被重写。 |  |
| `assistantListen` | Listen | 朗读 |  |
| `assistantNav` | Guide | 指南 |  |
| `assistantSend` | Send | 发送 |  |
| `assistantTitle` | Khai Guide | Khai 指南 |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | 我无法回答这个问题。我只能回答有关如何使用本工具的问题。 |  |
| `avgBp` | avg BP | 平均血压 |  |
| `back` | Back | 返回 |  |
| `bmiNote` | Not a diagnosis. | 不是诊断。 |  |
| `bpSys` | Systolic | 收缩压 |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | 请将此内容视为蓝图，而非公告：我们不声称有任何医院部署、试点、背书或合作关系。 |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | 实话实说：目前只有参与者应用和浏览器演示存在。此处每个医院相关组件都只是设计提案。 |  |
| `codeLabel` | Participant code | 参与者编号 |  |
| `codeShort` | Code | 编号 |  |
| `completeDays` | complete days | 个完整记录日 |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | 有饮食记录、药物状态（如有处方）和至少一项测量值的天数除以 21。根据已保存的记录计算，而非凭记忆。 |  |
| `conditionsLabel` | Conditions (select all that apply) | 健康状况（选择所有适用项） |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | 由您决定输入哪些内容。在此演示中，所有内容都保存在此浏览器的本地存储中 —— 没有服务器，也不会上传任何内容。在 Android 应用中，记录会在手机上加密。我们不会收集姓名、地址、政府身份证件号码或联系人列表。您可以随时删除所有内容。 |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | 我已阅读以上内容，并了解此浏览器演示不用于真实的临床记录。 |  |
| `consentTitle` | Consent | 同意 |  |
| `dayComplete` | Day complete | 当日记录完整 |  |
| `demoBadge` | Demo | 演示 |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | 仅供演示 · 并非医疗器械 · 不用于真实的临床记录。 |  |
| `downloadToast` | {name} downloaded. | {name} 已下载。 |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | 翻译草稿 —— 在临床使用前需要母语人士审核。 |  |
| `early` | early signal | 早期信号 |  |
| `eraseBtn` | Erase my data | 删除我的数据 |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | 这将从此浏览器中删除个人资料、所有日期的记录和所有设置。此操作无法撤销。 |  |
| `eraseTitle` | Erase everything | 删除全部内容 |  |
| `eraseYes` | Erase everything | 删除全部内容 |  |
| `errCode` | Please enter your participant code. | 请输入您的参与者编号。 |  |
| `errConsent` | Consent is required to continue. | 需要同意后才能继续。 |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | 偏高的测量值会被标记，供后续沟通。此应用不会做出诊断，也不会更改处方。 |  |
| `escalateNone` | No threshold flags in the recent record. | 最近的记录中没有阈值提示。 |  |
| `escalateTitle` | Flags for the clinician | 给临床医生的提示 |  |
| `estTotal` | Today’s estimate | 今日估计值 |  |
| `exportBackup` | Complete backup (JSON) | 完整备份 (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | 健康记录 (FHIR R4) |  |
| `exportFood` | Food log (CSV) | 饮食记录 (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | 每日指标 (CSV) |  |
| `exportPrint` | Clinician summary (print) | 临床医生摘要（打印） |  |
| `exportsTitle` | Export & share | 导出与分享 |  |
| `eyebrow_capability` | Capability map | 能力地图 |  |
| `eyebrow_demo` | Browser demo · no install | 浏览器演示 · 无需安装 |  |
| `eyebrow_hospital` | Hospital deployment · reference design | 医院部署 · 参考设计 |  |
| `fasting` | Fasting | 空腹 |  |
| `foodItemsOne` | 1 item | 1 项 |  |
| `foodLogged` | Food | 饮食 |  |
| `foodPickerTitle` | Choose a dish | 选择菜品 |  |
| `footerNote` | Nothing leaves this browser. | 没有任何内容会离开此浏览器。 |  |
| `footer_browser_demo` | Browser demo | 浏览器演示 |  |
| `footer_contact` | Contact | 联系我们 |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | 仅供演示 · 并非医疗器械 · 与 Zhongshan Hospital、HIMSS 或任何具名的医疗系统均无关联。 |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | 一款用于记录两次就诊之间情况的测量工具。在贾姆谢德布尔打造，适用于共用手机、电量不足和诊所距离较远的场景。 |  |
| `footer_hospital_design` | Hospital design | 医院设计 |  |
| `footer_limits` | Limits and answers | 限制与常见问题 |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | 并非医疗器械。与 Zhongshan Hospital、HIMSS 或任何具名的医疗系统均无关联。 |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | 没有任何内容会离开此浏览器。 |  |
| `footer_product` | Product | 产品 |  |
| `footer_transparency` | Transparency | 透明度 |  |
| `footer_verification` | Verification | 验证 |  |
| `glucose` | Blood sugar | 血糖 |  |
| `head_404` | That page is not here. | 该页面不存在。 |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | 一个闭环，为医院始终无法触及的地方而设计。 |  |
| `head_functions` | Every function, honestly labelled. | 每项功能都如实标注。 |  |
| `head_hospital` | The hospital is the unit of change. | 医院是变革的基本单元。 |  |
| `head_privacy` | Your record stays yours. | 您的记录始终属于您。 |  |
| `head_security` | What is protected, and what is not. | 哪些内容受到保护，哪些没有。 |  |
| `historyTitle` | The last 21 days | 过去 21 天 |  |
| `hospAudit` | Audit trail | 审计记录 |  |
| `hospCohort` | Cohort | 人群 |  |
| `hospComplete` | complete | 完整 |  |
| `hospDisc1` | Prescribed but not dispensed | 已开具处方但未发药 |  |
| `hospDiscrepancies` | Medication discrepancies | 药物差异 |  |
| `hospOpenHospital` | Open hospital control room | 打开医院控制室 |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | 先在参与者应用中记录大约一周，才能在此查看审阅资料包。 |  |
| `hospReviewPack` | Today's review pack | 今天的审阅资料包 |  |
| `hospitalBack` | Back to app | 返回应用 |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | 围绕同一记录构建的医院层级设计草图。下方的人群数据是合成的 —— 没有真实患者、没有医院关联、不涉及临床决策。 |  |
| `hospitalTitle` | Hospital control room | 医院控制室 |  |
| `hospital_layer` | Hospital deployment layer | 医院部署层级 |  |
| `hospital_s1` | Status of this document | 本文档的状态 |  |
| `hospital_s10` | Governance and safety | 治理与安全 |  |
| `hospital_s11` | Phased rollout | 分阶段推出 |  |
| `hospital_s12` | What would make this real | 怎样才能真正落地 |  |
| `hospital_s2` | Why the hospital, not just the phone | 为什么需要医院层级，而不只是手机 |  |
| `hospital_s3` | Reference topology | 参考拓扑结构 |  |
| `hospital_s4` | Roles and access | 角色与权限 |  |
| `hospital_s5` | Coordinator console | 协调员控制台 |  |
| `hospital_s6` | Clinician review workflow | 临床医生审阅流程 |  |
| `hospital_s7` | Closed-loop medication | 闭环药物管理 |  |
| `hospital_s8` | Integration contract | 集成约定 |  |
| `hospital_s9` | Identity and data flow | 身份与数据流 |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | 持续记录大约一周。至少需要四天同时有饮食和测量值的记录，才会显示规律。 |  |
| `insightsTitle` | What your own numbers say | 您自己的数字说明了什么 |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | 语言 |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | 与 Android 版本相同的记录结构、相同的食物库和相同的规则，完全在此页面中运行。不用于真实的临床记录。 |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | 这是项目遵循的完整模式：从基于手机的测量工具，到由临床医生监督的闭环。每项功能都标注为“已发布”“演示”或“规划中”，并注明相应的前提条件。 |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | 只有当诊所能够依据手机记录采取行动时，记录才能真正形成闭环。本页是该医院层级的参考架构。它是一份设计蓝图：其中没有任何内容已部署，也没有任何医院被列为合作伙伴。 |  |
| `legendComplete` | Complete | 完整 |  |
| `legend_read` | How to read this map | 如何阅读此地图 |  |
| `loadSample` | Load 14-day sample | 加载 14 天示例 |  |
| `mealBreakfast` | Breakfast | 早餐 |  |
| `medsLabel` | Daily medicines (name and dose) | 每日药物（名称和剂量） |  |
| `medsTitle` | Medicines | 药物 |  |
| `nav_blueprint` | Blueprint | 蓝图 |  |
| `nav_clinician` | For clinicians | 面向临床医生 |  |
| `nav_demo` | Demo | 演示 |  |
| `nav_functions` | Functions | 功能 |  |
| `nav_hospital` | Hospital | 医院 |  |
| `nav_loop` | The loop | 闭环流程 |  |
| `nav_security` | Security | 安全 |  |
| `nav_what` | What it does | 功能介绍 |  |
| `noDataToast` | No days recorded yet — add a day first. | 还没有记录任何一天 —— 请先添加一天的记录。 |  |
| `noMatches` | No dish matches that. | 没有匹配的菜品。 |  |
| `noMeds` | No medicines recorded in your profile. | 您的个人资料中没有记录药物。 |  |
| `not_map` | What this map is not | 此地图不是什么 |  |
| `note` | Anything else? (optional) | 还有其他想记录的吗？（选填） |  |
| `nothingLogged` | No record for this day. | 这一天没有记录。 |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | 仅存储在此浏览器中。无需账户，不会上传。 |  |
| `planAccept` | Accept | 接受 |  |
| `planAccepted` | Marked accepted in this demo. | 在此演示中已标记为接受。 |  |
| `planAcceptedState` | accepted | 已接受 |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | 食物数值是按家庭份量估算的范围，并非称重测量结果。规律草稿来自一个人少数几天同时有饮食和测量值的记录 —— 它们是给临床医生的提示，并非结论。 |  |
| `planConfidenceTitle` | How sure is this? | 这份草稿有多可靠？ |  |
| `planDecision` | Demo decision | 演示决定 |  |
| `planDraftLabel` | Draft for review | 待审阅草稿 |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | 编辑在与临床医生的审阅会议中进行；此演示只记录决定。 |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | 请先记录大约一周的饮食和测量值。草稿至少需要四天同时有饮食和测量值的记录。 |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | 仅供营养师审阅的草稿，仅根据您自己记录的日期生成。仅供参考 —— 并非建议。 |  |
| `planLowConfidence` | Low confidence — only a few paired days. | 可信度低 —— 同时有饮食和测量值的天数较少。 |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | 仅供参考。不是建议，也不是诊断。请勿因这份草稿而更改饮食或药物 —— 应由合格的临床医生决定。 |  |
| `planPaired` | Built from {n} days that have both food and a reading. | 根据 {n} 天同时有饮食和测量值的记录生成。 |  |
| `planTitle` | Weekly plan draft | 每周计划草稿 |  |
| `planTypePortion` | Portion | 份量 |  |
| `prevDay` | Previous day | 前一天 |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | 在打印对话框中选择“另存为 PDF”，即可获得单页摘要。 |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} 个完整记录日 · 已记录 {logged} 天 |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} 个完整记录日 · 已记录 {logged} 天 |  |
| `progressTitle` | Progress | 进展 |  |
| `recentDays` | Recent days | 最近几天 |  |
| `removedToast` | Removed. | 已移除。 |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | 可查看指定参与者的审阅资料包，其中的提示和草稿条目均关联到原始日期的记录。 |  |
| `roleCoordinator` | Coordinator | 协调员 |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | 可查看人群记录完整度、审阅队列和审计记录。不能更改处方。 |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | 可查看药物差异队列，以及处方 → 发药 → 服用各个检查点。 |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | 贯穿每一行的原则：软件先读取，由人来做决定。 |  |
| `sampleTitle` | Sample data | 示例数据 |  |
| `saveToday` | Save today’s record | 保存今天的记录 |  |
| `savedToast` | Saved in this browser. | 已保存在此浏览器中。 |  |
| `settingsTitle` | Settings | 设置 |  |
| `skip` | Skip to demo | 跳至演示 |  |
| `skip_content` | Skip to content | 跳至正文 |  |
| `start` | Start recording | 开始记录 |  |
| `status` | Status | 状态 |  |
| `status_demo` | Demo | 演示 |  |
| `status_roadmap` | Roadmap | 规划中 |  |
| `status_shipped` | Shipped | 已发布 |  |
| `stepProfile` | 1 · Who | 1 · 关于您 |  |
| `tabToday` | Today | 今天 |  |
| `taken` | Taken | 已服用 |  |
| `thisWeek` | this week | 本周 |  |
| `title_404` | Page not found — Khai Tracker | 页面未找到 —— Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | 数字化转型蓝图 —— Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker —— 浏览器演示 |  |
| `title_functions` | Function map — Khai Tracker | 功能地图 —— Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | 医院部署蓝图 —— Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker —— 记录您的一天 |  |
| `title_privacy` | Privacy — Khai Tracker | 隐私 —— Khai Tracker |  |
| `title_security` | Security — Khai Tracker | 安全 —— Khai Tracker |  |
| `vitalsTitle` | Readings | 测量值 |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | 每日记录饮食与健康情况，让您和您的临床医生了解两次就诊之间实际发生的情况。它只做记录，不提供治疗建议。 |  |
| `welcomeTitle` | Welcome to Khai Tracker | 欢迎使用 Khai Tracker |  |
| `wellbeingTitle` | How was the day? | 今天过得怎么样？ |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Chinese (zh)
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
