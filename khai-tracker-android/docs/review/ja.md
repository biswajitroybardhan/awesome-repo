# Japanese (ja) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Japanese (日本語)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/ja.json` (app and site)
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

## App strings — Japanese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | このアプリについて |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nKhai Foods Pvt Ltd（インド、ジャールカンド州ジャムシェドプル）が制作\n\n共有端末、不安定なネットワーク、インドのさまざまな食事に合わせて設計。オフライン優先。サードパーティの解析なし。広告なし。 |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | 製品責任者: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + 食品を追加 |  |
| `add_medicines` | Add medicines | 薬を追加 |  |
| `already_saved` | Saved. You can keep editing and save again. | 保存済みです。編集して再度保存できます。 |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | 資格のある医療専門家にご相談ください。 |  |
| `assistant_input_ph` | Ask a question | 質問を入力 |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | このツール固有のヘルプテキストからのみ回答します。AIは使わず、診断も助言もしません。 |  |
| `assistant_listen` | Listen | 読み上げ |  |
| `assistant_send` | Send | 送信 |  |
| `assistant_tab` | Guide | ガイド |  |
| `assistant_title` | Khai Guide | Khai ガイド |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | その質問には答えられません。このツールの使い方に関する質問にのみ答えます。 |  |
| `back` | Back | 戻る |  |
| `bp_dia` | Diastolic (lower) | 拡張期（下） |  |
| `bp_sys` | Systolic (upper) | 収縮期（上） |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | トラッカー |  |
| `cancel` | Cancel | キャンセル |  |
| `carbs` | Carbohydrate | 炭水化物 |  |
| `close` | Close | 閉じる |  |
| `completeness` | 21-day completeness | 21 日間の記録達成率 |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | 食事、薬、測定値がある日を 21 で割った割合。記憶ではなく、保存された記録から算出します。 |  |
| `confirm` | Confirm | 確認 |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | 記録する内容はあなたが決めます。入力した内容はこの端末内で暗号化され、コーディネーターがサーバーアドレスを指定した場合にのみ、Khai 研究サーバーに送信されます。いつでもすべて削除できます。氏名、住所、Aadhaar 番号、連絡先リストは収集しません。データを削除すれば、研究から撤退できます。 |  |
| `consent_check` | I have read or heard this, and I agree to take part. | 内容を読み、または聞き、参加に同意します。 |  |
| `consent_listen` | Listen in Hindi | ヒンディー語で聞く |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | 同意バージョン 1.0 · この端末にタイムスタンプ付きで記録 |  |
| `consent_title` | Consent | 同意 |  |
| `day_detail` | Day detail | その日の詳細 |  |
| `days_logged` | Days logged | 記録した日数 |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker は追跡ツールであり、医療上の助言ではありません。診断を行うことも、処方を変更することもありません。 |  |
| `done` | Done | 完了 |  |
| `dose_hint` | Dose (optional) | 用量（任意） |  |
| `edit_day` | Edit this day | この日の記録を編集 |  |
| `edit_profile` | Edit profile | プロフィールを編集 |  |
| `energy` | Energy | 元気 |  |
| `erase` | Erase my data | データを削除 |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | この端末のすべての記録、プロフィール、リマインダー設定が完全に削除されます。元に戻せません。 |  |
| `erase_yes` | Erase everything | すべて削除 |  |
| `estimated` | estimated | 推定 |  |
| `export_backup` | Full backup (JSON) | 完全バックアップ (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | 健康記録 (FHIR JSON) |  |
| `export_food` | Food log (CSV) | 食事記録 (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | 共有する相手は自分で選んでください。ファイルが端末から出るのは、共有をタップしたときだけです。 |  |
| `export_metrics` | Daily readings (CSV) | 毎日の測定値 (CSV) |  |
| `export_summary` | Clinician summary (PDF) | 医療者向け要約 (PDF) |  |
| `export_title` | Export and share | 書き出しと共有 |  |
| `export_working` | Preparing file… | ファイルを準備中… |  |
| `fat` | Fat | 脂質 |  |
| `food_items` | %1$d food items | %1$d 品の食品 |  |
| `food_library_title` | Food library | 食品ライブラリ |  |
| `glucose` | Blood sugar | 血糖値 |  |
| `glucose_fasting` | Fasting | 空腹時 |  |
| `glucose_pp` | After food | 食後 |  |
| `hide_previews` | Hide this app in the recent-apps preview | 最近使ったアプリの一覧にこのアプリを表示しない |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | 塗りつぶしたマスは記録があります。日付をタップすると確認・修正できます。 |  |
| `history_title` | Last 21 days | 過去 21 日間 |  |
| `insight_descriptive` | description | 説明 |  |
| `insight_early` | early signal | 初期のシグナル |  |
| `insight_moderate` | moderate signal | 中程度のシグナル |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | これらは自分の記録に対する観察であり、診断でも治療の推奨でもありません。 |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | 1 週間記録を続けてください。測定値のある日が 5 日以上たまると、傾向が表示されます。 |  |
| `insights_title` | What your own data shows | 自分のデータから見えること |  |
| `kcal` | Energy | エネルギー |  |
| `language` | Language / भाषा | 言語 / भाषा |  |
| `loading` | Loading… | 読み込み中… |  |
| `meal_breakfast` | Breakfast | 朝食 |  |
| `meal_dinner` | Dinner | 夕食 |  |
| `meal_lunch` | Lunch | 昼食 |  |
| `meal_snacks` | Snacks & drinks | おやつと飲み物 |  |
| `meds_changed` | Changed | 変更あり |  |
| `meds_empty` | No medicines listed yet. | 薬がまだ登録されていません。 |  |
| `meds_hint` | Tick what you actually did today. | 今日実際に行ったことをチェックしてください。 |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | プロフィールに薬が登録されていません。一度登録すれば、毎日チェックできます。 |  |
| `meds_skipped` | Skipped | 服用せず |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d / %2$d 種類の薬を服用 |  |
| `meds_taken` | Taken | 服用済み |  |
| `meds_title` | Medicines | 薬 |  |
| `mood` | Mood | 気分 |  |
| `no` | No | いいえ |  |
| `no_food_yet` | Nothing added yet | まだ追加されていません |  |
| `note` | Anything else? (optional) | その他（任意） |  |
| `nothing_logged` | No entry for this day. | この日の記録はありません。 |  |
| `notif_channel` | Daily reminder | 毎日のリマインダー |  |
| `notif_channel_desc` | One daily reminder to record your day. | その日を記録するための 1 日 1 回のリマインダー。 |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | 静かな 2 分間：今日は何を食べ、何を測定しましたか？ |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | 毎日のリマインダーを受け取れるよう、通知を許可してください。 |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + さらに追加 |  |
| `onboard_age` | Age group | 年齢層 |  |
| `onboard_age_ph` | Select | 選択 |  |
| `onboard_code` | Participant code | 参加者コード |  |
| `onboard_code_ph` | e.g. K01 | 例: K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | 健康状態（該当するものをすべて選択） |  |
| `onboard_error_age` | Please choose an age group. | 年齢層を選択してください。 |  |
| `onboard_error_code` | Please enter your participant code. | 参加者コードを入力してください。 |  |
| `onboard_error_consent` | Please confirm consent to continue. | 続行するには同意を確認してください。 |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | 毎日の食事と健康の記録で、あなたと担当の医療者が受診間の実際の様子を確認できます。これは追跡ツールであり、医療上の助言ではありません。 |  |
| `onboard_meds` | Daily medicines (name and dose) | 毎日の薬（名前と用量） |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | 例: メトホルミン 500 mg |  |
| `onboard_start` | Start tracking | 記録を始める |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker へようこそ |  |
| `pending` | Pending sync | 同期待ち |  |
| `per_portion` | per portion | 一人分あたり |  |
| `pick_day` | Pick a day above. | 上から日付を選択してください。 |  |
| `pin_change` | Change PIN | PIN を変更 |  |
| `pin_enter` | Enter your PIN | PIN を入力してください |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN はちょうど 4 桁で入力してください。 |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | 家族と共有する端末に便利です。アプリを開くときと、離れて 1 分後に戻ったときに 4 桁の PIN を入力します。 |  |
| `pin_lock` | App lock | アプリロック |  |
| `pin_new` | Choose a 4-digit PIN | 4 桁の PIN を選んでください |  |
| `pin_remove` | Remove PIN | PIN を削除 |  |
| `pin_removed` | PIN removed. | PIN を削除しました。 |  |
| `pin_saved` | PIN saved. | PIN を保存しました。 |  |
| `pin_set` | Set PIN | PIN を設定 |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN が違います。もう一度お試しください。 |  |
| `portion_q` | Portion | 分量 |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | 入力内容は、この端末のセキュアキーストアに保管される鍵で端末上で暗号化されます。研究サーバーを設定しない限り、どこにも送信されません。解析ツールも広告もありません。 |  |
| `privacy_title` | Privacy | プライバシー |  |
| `profile` | Profile and medicines | プロフィールと薬 |  |
| `progress_title` | Progress | 進捗 |  |
| `protein` | Protein | たんぱく質 |  |
| `pulse` | Pulse | 脈拍 |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | 同じ料理でも家庭によって異なるため、推定値は幅で示しています。傾向をつかむためのもので、カロリー計算のためのものではありません。 |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | この端末にはヒンディー語の音声がインストールされていません。 |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | 指定した時刻に静かな通知が届きます。記録が途切れても責めたり、広告を出したりしません。 |  |
| `reminder_off` | Reminder off | リマインダー OFF |  |
| `reminder_on` | Reminder on | リマインダー ON |  |
| `reminder_time` | Reminder time | リマインダーの時刻 |  |
| `reminders` | Daily reminder | 毎日のリマインダー |  |
| `remove` | Remove | 削除 |  |
| `remove_confirm` | Remove this item? | この項目を削除しますか？ |  |
| `save` | Save | 保存 |  |
| `save_failed` | Could not save. Please try again. | 保存できませんでした。もう一度お試しください。 |  |
| `save_today` | Save today | 今日の記録を保存 |  |
| `saved` | Saved on this device. Encrypted. | この端末に保存されました。暗号化されています。 |  |
| `search_food` | Search a dish in English or Hindi | 料理を英語またはヒンディー語で検索 |  |
| `settings_title` | Settings | 設定 |  |
| `share` | Share | 共有 |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | この端末にはファイルを受け取れるアプリがありません。メールアプリまたはファイルアプリをインストールして、もう一度お試しください。 |  |
| `sleep` | Sleep last night (hours) | 昨夜の睡眠（時間） |  |
| `sodium` | Salt (sodium) | 塩分（ナトリウム） |  |
| `streak` | Day streak | 連続記録日数 |  |
| `sync_bad_url` | That does not look like a valid address. | 有効なアドレスではないようです。 |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | 同期に失敗しました。記録はこの端末に安全に保存されており、再試行されます。 |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | 任意です。コーディネーターがサーバーアドレスを指定します。空欄にすると、すべてこの端末内に保存されます。 |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | HTTPS アドレスを使用してください。健康データが暗号化されずに送信されることはありません。 |  |
| `sync_never` | Not synced yet. | まだ同期していません。 |  |
| `sync_now` | Sync now | 今すぐ同期 |  |
| `sync_offline` | No internet right now. Entries queued. | 現在インターネットに接続されていません。記録は送信待ちです。 |  |
| `sync_ok` | Synced. All entries are on the server. | 同期しました。すべての記録がサーバーにあります。 |  |
| `sync_save` | Save address | アドレスを保存 |  |
| `sync_title` | Study sync | 研究サーバーとの同期 |  |
| `sync_url` | Server address | サーバーアドレス |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | 履歴 |  |
| `tab_progress` | Progress | 進捗 |  |
| `tab_settings` | Settings | 設定 |  |
| `tab_today` | Today | 今日 |  |
| `this_week` | This week | 今週 |  |
| `todays_total` | Today\'s estimate | 今日の推定値 |  |
| `total_carbs` | Carbohydrate | 炭水化物 |  |
| `uncertainty` | Range, not a single number | 単一の数値ではなく幅で表示 |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | 測定した項目だけ入力してください。空欄は未測定を意味し、それも有用な情報です。 |  |
| `vitals_title` | Readings | 測定値 |  |
| `weight` | Weight (kg) | 体重（kg） |  |
| `wellbeing_title` | How was the day? | 今日はどんな一日でしたか？ |  |
| `yes` | Yes | はい |  |

## Site strings — Japanese

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | このデモについて |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK をダウンロード |  |
| `action_menu` | Open menu | メニューを開く |  |
| `action_theme` | Switch theme | テーマを切り替え |  |
| `addFood` | Add food | 食品を追加 |  |
| `addMed` | + Add another | + さらに追加 |  |
| `adherence` | medicines taken | 服用した薬 |  |
| `ageLabel` | Age band | 年齢区分 |  |
| `allFoods` | All | すべて |  |
| `askClinician` | Ask a qualified clinician. | 資格のある医療専門家にご相談ください。 |  |
| `assistantInputPh` | Ask a question | 質問を入力 |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | このツール固有のヘルプテキストからのみ回答します。AIは使わず、診断も助言もしません。 |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | 表示言語を切り替えてもラベルが変わるだけです。記録した値は安定したコードのままなので、日々の記録が書き換わることはありません。 |  |
| `assistantListen` | Listen | 読み上げ |  |
| `assistantNav` | Guide | ガイド |  |
| `assistantSend` | Send | 送信 |  |
| `assistantTitle` | Khai Guide | Khai ガイド |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | その質問には答えられません。このツールの使い方に関する質問にのみ答えます。 |  |
| `avgBp` | avg BP | 平均血圧 |  |
| `back` | Back | 戻る |  |
| `bmiNote` | Not a diagnosis. | 診断ではありません。 |  |
| `bpSys` | Systolic | 収縮期 |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | これは発表ではなく設計図として読んでください。病院への導入、パイロット、推奨、提携は一切主張していません。 |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | 正直なところ：現在あるのは参加者アプリとブラウザーデモだけです。ここにある病院向けコンポーネントはすべて設計提案です。 |  |
| `codeLabel` | Participant code | 参加者コード |  |
| `codeShort` | Code | コード |  |
| `completeDays` | complete days | 記録完了の日 |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | 食事、服薬状況（処方がある場合）、少なくとも 1 つの測定値がある日を 21 で割った割合。記憶ではなく、保存された記録から算出します。 |  |
| `conditionsLabel` | Conditions (select all that apply) | 健康状態（該当するものをすべて選択） |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | 入力する内容はあなたが決めます。このデモでは、すべてこのブラウザーのローカルストレージに保存され、サーバーはなく、アップロードもされません。Android アプリでは、記録は端末内で暗号化されます。氏名、住所、政府発行の身分証番号、連絡先リストは収集しません。いつでもすべて削除できます。 |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | 内容を読み、このブラウザーデモが実際の臨床記録用ではないことを理解しました。 |  |
| `consentTitle` | Consent | 同意 |  |
| `dayComplete` | Day complete | その日の記録完了 |  |
| `demoBadge` | Demo | デモ |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | デモのみ · 医療機器ではありません · 実際の臨床記録には使用できません。 |  |
| `downloadToast` | {name} downloaded. | {name} をダウンロードしました。 |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | 翻訳ドラフト — 臨床使用前に母語話者の確認が必要です。 |  |
| `early` | early signal | 初期のシグナル |  |
| `eraseBtn` | Erase my data | データを削除 |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | このブラウザーからプロフィール、すべての日付の記録、すべての設定を削除します。元に戻せません。 |  |
| `eraseTitle` | Erase everything | すべて削除 |  |
| `eraseYes` | Erase everything | すべて削除 |  |
| `errCode` | Please enter your participant code. | 参加者コードを入力してください。 |  |
| `errConsent` | Consent is required to continue. | 続行するには同意が必要です。 |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | 高い測定値は、話し合うためのフラグが付けられます。このアプリが診断を行ったり、処方を変更したりすることはありません。 |  |
| `escalateNone` | No threshold flags in the recent record. | 最近の記録に閾値フラグはありません。 |  |
| `escalateTitle` | Flags for the clinician | 医療者へのフラグ |  |
| `estTotal` | Today’s estimate | 今日の推定値 |  |
| `exportBackup` | Complete backup (JSON) | 完全バックアップ (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | 健康記録 (FHIR R4) |  |
| `exportFood` | Food log (CSV) | 食事記録 (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | 毎日の指標 (CSV) |  |
| `exportPrint` | Clinician summary (print) | 医療者向け要約（印刷） |  |
| `exportsTitle` | Export & share | 書き出しと共有 |  |
| `eyebrow_capability` | Capability map | 機能マップ |  |
| `eyebrow_demo` | Browser demo · no install | ブラウザーデモ · インストール不要 |  |
| `eyebrow_hospital` | Hospital deployment · reference design | 病院への展開 · 参考設計 |  |
| `fasting` | Fasting | 空腹時 |  |
| `foodItemsOne` | 1 item | 1 品 |  |
| `foodLogged` | Food | 食事 |  |
| `foodPickerTitle` | Choose a dish | 料理を選ぶ |  |
| `footerNote` | Nothing leaves this browser. | このブラウザーの外に出るものはありません。 |  |
| `footer_browser_demo` | Browser demo | ブラウザーデモ |  |
| `footer_contact` | Contact | お問い合わせ |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | デモのみ · 医療機器ではありません · Zhongshan Hospital、HIMSS、または名指しされた医療システムとの関連はありません。 |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | 受診と受診の間を記録する測定ツール。共用の端末、不足しがちな電池、遠く離れた診療所のために、ジャムシェドプルで作られました。 |  |
| `footer_hospital_design` | Hospital design | 病院向け設計 |  |
| `footer_limits` | Limits and answers | 限界とよくある質問 |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | 医療機器ではありません。Zhongshan Hospital、HIMSS、または名指しされた医療システムとの関連はありません。 |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | このブラウザーの外に出るものはありません。 |  |
| `footer_product` | Product | 製品 |  |
| `footer_transparency` | Transparency | 透明性 |  |
| `footer_verification` | Verification | 検証 |  |
| `glucose` | Blood sugar | 血糖値 |  |
| `head_404` | That page is not here. | そのページはここにありません。 |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | 病院が届かない場所のために作られた、閉じた循環。 |  |
| `head_functions` | Every function, honestly labelled. | すべての機能を、ありのままに表示。 |  |
| `head_hospital` | The hospital is the unit of change. | 変化の単位は病院です。 |  |
| `head_privacy` | Your record stays yours. | 記録はあなたのもの。 |  |
| `head_security` | What is protected, and what is not. | 守られているものと、守られていないもの。 |  |
| `historyTitle` | The last 21 days | 過去 21 日間 |  |
| `hospAudit` | Audit trail | 監査記録 |  |
| `hospCohort` | Cohort | コホート |  |
| `hospComplete` | complete | 完了 |  |
| `hospDisc1` | Prescribed but not dispensed | 処方されているが調剤されていない |  |
| `hospDiscrepancies` | Medication discrepancies | 薬剤の差異 |  |
| `hospOpenHospital` | Open hospital control room | 病院コントロールルームを開く |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | ここで確認資料を見るには、まず参加者アプリで約 1 週間記録してください。 |  |
| `hospReviewPack` | Today's review pack | 今日の確認資料 |  |
| `hospitalBack` | Back to app | アプリに戻る |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | 同じ記録を中心に構築した病院向けレイヤーの設計スケッチです。下のコホートは架空のもので、実在の患者、病院とのつながり、臨床判断は一切ありません。 |  |
| `hospitalTitle` | Hospital control room | 病院コントロールルーム |  |
| `hospital_layer` | Hospital deployment layer | 病院展開レイヤー |  |
| `hospital_s1` | Status of this document | この文書の状態 |  |
| `hospital_s10` | Governance and safety | ガバナンスと安全性 |  |
| `hospital_s11` | Phased rollout | 段階的な展開 |  |
| `hospital_s12` | What would make this real | これを実現するために必要なこと |  |
| `hospital_s2` | Why the hospital, not just the phone | 病院が必要な理由、端末だけではない理由 |  |
| `hospital_s3` | Reference topology | 参照トポロジー |  |
| `hospital_s4` | Roles and access | 役割とアクセス権 |  |
| `hospital_s5` | Coordinator console | コーディネーターコンソール |  |
| `hospital_s6` | Clinician review workflow | 医療者の確認フロー |  |
| `hospital_s7` | Closed-loop medication | 閉じた循環の薬剤管理 |  |
| `hospital_s8` | Integration contract | 連携契約 |  |
| `hospital_s9` | Identity and data flow | 本人確認とデータの流れ |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | 約 1 週間記録を続けてください。少なくとも 4 日分の食事と測定値のペアがないと、傾向は表示されません。 |  |
| `insightsTitle` | What your own numbers say | 自分の数値から見えること |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | 言語 |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Android 版と同じ記録の形、同じ食品ライブラリ、同じルールが、すべてこのページの中で動作します。実際の臨床記録には使用できません。 |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | これはプロジェクトが従う全体像です。端末での測定ツールから、医療者が監督する閉じた循環まで。各機能には「提供済み」「デモ」「ロードマップ」のいずれかと、明示された前提条件が示されています。 |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | 端末の記録は、診療所がそれに基づいて行動できて初めて循環します。このページはその病院向けレイヤーの参照アーキテクチャです。設計図であり、ここに書かれたものは何も導入されておらず、パートナーとして名指しされた病院もありません。 |  |
| `legendComplete` | Complete | 記録完了 |  |
| `legend_read` | How to read this map | このマップの読み方 |  |
| `loadSample` | Load 14-day sample | 14 日分のサンプルを読み込む |  |
| `mealBreakfast` | Breakfast | 朝食 |  |
| `medsLabel` | Daily medicines (name and dose) | 毎日の薬（名前と用量） |  |
| `medsTitle` | Medicines | 薬 |  |
| `nav_blueprint` | Blueprint | 設計図 |  |
| `nav_clinician` | For clinicians | 医療者向け |  |
| `nav_demo` | Demo | デモ |  |
| `nav_functions` | Functions | 機能 |  |
| `nav_hospital` | Hospital | 病院 |  |
| `nav_loop` | The loop | 循環の仕組み |  |
| `nav_security` | Security | セキュリティ |  |
| `nav_what` | What it does | できること |  |
| `noDataToast` | No days recorded yet — add a day first. | まだ記録がありません。まず 1 日分を追加してください。 |  |
| `noMatches` | No dish matches that. | 一致する料理がありません。 |  |
| `noMeds` | No medicines recorded in your profile. | プロフィールに記録された薬はありません。 |  |
| `not_map` | What this map is not | このマップではないもの |  |
| `note` | Anything else? (optional) | その他（任意） |  |
| `nothingLogged` | No record for this day. | この日の記録はありません。 |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | このブラウザー内にのみ保存。アカウントなし、アップロードなし。 |  |
| `planAccept` | Accept | 承認 |  |
| `planAccepted` | Marked accepted in this demo. | このデモで承認済みとして記録しました。 |  |
| `planAcceptedState` | accepted | 承認済み |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | 食品の数値は家庭での分量をもとにした推定値を幅で示したもので、計量した測定値ではありません。傾向の草案は、一人の少数のペア日から作成されます。医療者への手がかりであり、所見ではありません。 |  |
| `planConfidenceTitle` | How sure is this? | どの程度信頼できますか？ |  |
| `planDecision` | Demo decision | デモでの決定 |  |
| `planDraftLabel` | Draft for review | 確認用草案 |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | 編集は医療者との確認会議で行われます。このデモでは決定を記録するだけです。 |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | まず約 1 週間の食事と測定値を記録してください。草案には少なくとも 4 日分のペアが必要です。 |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | 自分で記録した日だけをもとに、栄養士が確認するための草案です。参考例であり、助言ではありません。 |  |
| `planLowConfidence` | Low confidence — only a few paired days. | 信頼度が低い —— ペアとなる日がわずかです。 |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | 参考例のみです。助言でも診断でもありません。この草案のために食事や薬を変更しないでください。判断するのは資格を持つ医療者です。 |  |
| `planPaired` | Built from {n} days that have both food and a reading. | 食事と測定値の両方がある {n} 日分から作成しました。 |  |
| `planTitle` | Weekly plan draft | 週間プランの草案 |  |
| `planTypePortion` | Portion | 分量 |  |
| `prevDay` | Previous day | 前の日 |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | 印刷ダイアログで「PDF に保存」を選ぶと、1 ページの要約になります。 |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} 日記録完了 · {logged} 日記録あり |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} 日記録完了 · {logged} 日記録あり |  |
| `progressTitle` | Progress | 進捗 |  |
| `recentDays` | Recent days | 最近の日 |  |
| `removedToast` | Removed. | 削除しました。 |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | 担当する参加者の確認資料を確認できます。フラグや草案項目は元の日付の記録にリンクしています。 |  |
| `roleCoordinator` | Coordinator | コーディネーター |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | コホートの記録達成率、確認待ちキュー、監査記録を確認できます。処方は変更できません。 |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | 薬剤の差異キューと、処方 → 調剤 → 服用の各確認点を確認できます。 |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | すべての行に共通する原則：まずソフトウェアが読み取り、人が判断します。 |  |
| `sampleTitle` | Sample data | サンプルデータ |  |
| `saveToday` | Save today’s record | 今日の記録を保存 |  |
| `savedToast` | Saved in this browser. | このブラウザーに保存しました。 |  |
| `settingsTitle` | Settings | 設定 |  |
| `skip` | Skip to demo | デモへスキップ |  |
| `skip_content` | Skip to content | 本文へスキップ |  |
| `start` | Start recording | 記録を開始 |  |
| `status` | Status | 状態 |  |
| `status_demo` | Demo | デモ |  |
| `status_roadmap` | Roadmap | ロードマップ |  |
| `status_shipped` | Shipped | 提供済み |  |
| `stepProfile` | 1 · Who | 1 · あなたについて |  |
| `tabToday` | Today | 今日 |  |
| `taken` | Taken | 服用済み |  |
| `thisWeek` | this week | 今週 |  |
| `title_404` | Page not found — Khai Tracker | ページが見つかりません — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | デジタル変革の設計図 — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — ブラウザーデモ |  |
| `title_functions` | Function map — Khai Tracker | 機能マップ — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | 病院展開の設計図 — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — あなたの一日を記録する |  |
| `title_privacy` | Privacy — Khai Tracker | プライバシー — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | セキュリティ — Khai Tracker |  |
| `vitalsTitle` | Readings | 測定値 |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | 食事と健康の毎日の記録で、あなたと担当医療者が受診間の実際の様子を確認できます。記録するだけのツールで、治療の助言は行いません。 |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker へようこそ |  |
| `wellbeingTitle` | How was the day? | 今日はどんな一日でしたか？ |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Japanese (ja)
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
