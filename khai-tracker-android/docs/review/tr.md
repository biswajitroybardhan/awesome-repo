# Turkish (tr) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Turkish (Türkçe)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/tr.json` (app and site)
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

## App strings — Turkish

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | Hakkında |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nKhai Foods Pvt Ltd, Jamshedpur, Jharkhand, Hindistan tarafından üretildi.\n\nPaylaşılan telefonlar, kesintili ağlar ve çeşitli Hint sofraları için tasarlandı. Önce çevrimdışı. Üçüncü taraf analiz yok. Reklam yok. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Ürün sahibi: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Yemek ekle |  |
| `add_medicines` | Add medicines | İlaç ekle |  |
| `already_saved` | Saved. You can keep editing and save again. | Kaydedildi. Düzenlemeye ve yeniden kaydetmeye devam edebilirsiniz. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Nitelikli bir sağlık uzmanına danışın. |  |
| `assistant_input_ph` | Ask a question | Bir soru sorun |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Yanıtlar yalnızca bu aracın kendi yardım metninden alınır. Yapay zekâ yok, tanı yok, tavsiye yok. |  |
| `assistant_listen` | Listen | Dinle |  |
| `assistant_send` | Send | Gönder |  |
| `assistant_tab` | Guide | Kılavuz |  |
| `assistant_title` | Khai Guide | Khai Kılavuzu |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | Bunun için bir yanıtım yok. Yalnızca bu aracın kullanımıyla ilgili soruları yanıtlarım. |  |
| `back` | Back | Geri |  |
| `bp_dia` | Diastolic (lower) | Diyastolik (alt) |  |
| `bp_sys` | Systolic (upper) | Sistolik (üst) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Takip |  |
| `cancel` | Cancel | İptal |  |
| `carbs` | Carbohydrate | Karbonhidrat |  |
| `close` | Close | Kapat |  |
| `completeness` | 21-day completeness | 21 günlük kayıt eksiksizliği |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Yemek, ilaç ve ölçüm olan günlerin 21'e bölünmesi. Hatırlamaya değil, kaydedilmiş kayıtlara göre hesaplanır. |  |
| `confirm` | Confirm | Onayla |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Ne kaydedeceğinizi siz seçersiniz. Kayıtlarınız bu telefonda şifreli tutulur ve yalnızca koordinatörünüz bir sunucu adresi verirse Khai çalışma sunucusuna gönderilir. Her şeyi istediğiniz zaman silebilirsiniz. Ad, adres, Aadhaar numarası veya kişi listesi toplanmaz. Verilerinizi silerek çalışmadan çekilebilirsiniz. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Bunu okudum veya dinledim ve katılmayı kabul ediyorum. |  |
| `consent_listen` | Listen in Hindi | Hintçe dinle |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Onam sürümü 1.0 · bu cihazda zaman damgasıyla kaydedildi |  |
| `consent_title` | Consent | Onam |  |
| `day_detail` | Day detail | Gün ayrıntısı |  |
| `days_logged` | Days logged | Kayıtlı gün |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker bir takip aracıdır, tıbbi tavsiye değildir. Asla tanı koymaz ve asla reçeteyi değiştirmez. |  |
| `done` | Done | Bitti |  |
| `dose_hint` | Dose (optional) | Doz (isteğe bağlı) |  |
| `edit_day` | Edit this day | Bu günü düzenle |  |
| `edit_profile` | Edit profile | Profili düzenle |  |
| `energy` | Energy | Enerji |  |
| `erase` | Erase my data | Verilerimi sil |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Bu, bu telefondaki tüm kayıtları, profilinizi ve hatırlatıcı ayarlarınızı kalıcı olarak siler. Geri alınamaz. |  |
| `erase_yes` | Erase everything | Her şeyi sil |  |
| `estimated` | estimated | tahmini |  |
| `export_backup` | Full backup (JSON) | Tam yedek (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Sağlık kaydı (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Yemek kaydı (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Yalnızca seçtiğiniz kişilerle paylaşın. Dosyalar yalnızca paylaşmaya dokunduğunuzda telefondan çıkar. |  |
| `export_metrics` | Daily readings (CSV) | Günlük ölçümler (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Uzman özeti (PDF) |  |
| `export_title` | Export and share | Dışa aktarma ve paylaşma |  |
| `export_working` | Preparing file… | Dosya hazırlanıyor… |  |
| `fat` | Fat | Yağ |  |
| `food_items` | %1$d food items | %1$d yemek öğesi |  |
| `food_library_title` | Food library | Yemek kütüphanesi |  |
| `glucose` | Blood sugar | Kan şekeri |  |
| `glucose_fasting` | Fasting | Açlık |  |
| `glucose_pp` | After food | Yemekten sonra |  |
| `hide_previews` | Hide this app in the recent-apps preview | Bu uygulamayı son uygulamalar önizlemesinde gizle |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Dolu kare, o gün bir kayıt olduğunu gösterir. Gözden geçirmek veya düzeltmek için bir güne dokunun. |  |
| `history_title` | Last 21 days | Son 21 gün |  |
| `insight_descriptive` | description | açıklama |  |
| `insight_early` | early signal | erken sinyal |  |
| `insight_moderate` | moderate signal | orta düzey sinyal |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Bunlar kendi kayıtlarınıza ilişkin gözlemlerdir; tanı değildir, tedavi önerisi de değildir. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Bir hafta boyunca kayıt tutun. Ölçüm olan en az beş gün olduğunda örüntüler ortaya çıkar. |  |
| `insights_title` | What your own data shows | Kendi verilerinizin gösterdiği şeyler |  |
| `kcal` | Energy | Enerji |  |
| `language` | Language / भाषा | Dil / भाषा |  |
| `loading` | Loading… | Yükleniyor… |  |
| `meal_breakfast` | Breakfast | Kahvaltı |  |
| `meal_dinner` | Dinner | Akşam yemeği |  |
| `meal_lunch` | Lunch | Öğle yemeği |  |
| `meal_snacks` | Snacks & drinks | Atıştırmalık ve içecekler |  |
| `meds_changed` | Changed | Değiştirildi |  |
| `meds_empty` | No medicines listed yet. | Henüz ilaç eklenmedi. |  |
| `meds_hint` | Tick what you actually did today. | Bugün gerçekten yaptıklarınızı işaretleyin. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | Profilinizde ilaç yok. Bir kez ekleyin, sonra her gün işaretleyin. |  |
| `meds_skipped` | Skipped | Atlandı |  |
| `meds_summary` | %1$d of %2$d medicines taken | %2$d ilacın %1$d tanesi alındı |  |
| `meds_taken` | Taken | Alındı |  |
| `meds_title` | Medicines | İlaçlar |  |
| `mood` | Mood | Ruh hali |  |
| `no` | No | Hayır |  |
| `no_food_yet` | Nothing added yet | Henüz bir şey eklenmedi |  |
| `note` | Anything else? (optional) | Başka bir şey var mı? (isteğe bağlı) |  |
| `nothing_logged` | No entry for this day. | Bu gün için kayıt yok. |  |
| `notif_channel` | Daily reminder | Günlük hatırlatıcı |  |
| `notif_channel_desc` | One daily reminder to record your day. | Gününüzü kaydetmek için günde bir hatırlatıcı. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Sessiz iki dakika: Bugün ne yediniz, ne ölçtünüz? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Günlük hatırlatıcının size ulaşabilmesi için bildirimlere izin verin. |  |
| `ok` | OK | Tamam |  |
| `onboard_add_med` | + Add another | + Bir tane daha ekle |  |
| `onboard_age` | Age group | Yaş grubu |  |
| `onboard_age_ph` | Select | Seçin |  |
| `onboard_code` | Participant code | Katılımcı kodu |  |
| `onboard_code_ph` | e.g. K01 | örn. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Durumlar (uygun olanların tümünü işaretleyin) |  |
| `onboard_error_age` | Please choose an age group. | Lütfen bir yaş grubu seçin. |  |
| `onboard_error_code` | Please enter your participant code. | Lütfen katılımcı kodunuzu girin. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Devam etmek için lütfen onay verdiğinizi doğrulayın. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Günlük yemek ve sağlık kaydı, sizin ve sağlık uzmanınızın ziyaretler arasında gerçekten olanları görmenize yardımcı olur. Bu bir takip aracıdır, tıbbi tavsiye değildir. |  |
| `onboard_meds` | Daily medicines (name and dose) | Günlük ilaçlar (ad ve doz) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | örn. Metformin 500 mg |  |
| `onboard_start` | Start tracking | Takibe başla |  |
| `onboard_title` | Welcome to Khai Tracker | Khai Tracker'a hoş geldiniz |  |
| `pending` | Pending sync | Senkronizasyon bekliyor |  |
| `per_portion` | per portion | porsiyon başına |  |
| `pick_day` | Pick a day above. | Yukarıdan bir gün seçin. |  |
| `pin_change` | Change PIN | PIN değiştir |  |
| `pin_enter` | Enter your PIN | PIN'inizi girin |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN tam olarak 4 haneli olmalıdır. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Aileyle paylaşılan telefonlarda kullanışlıdır. Uygulama açıldığında ve bir dakika uzak kaldıktan sonra 4 haneli PIN istenir. |  |
| `pin_lock` | App lock | Uygulama kilidi |  |
| `pin_new` | Choose a 4-digit PIN | 4 haneli bir PIN seçin |  |
| `pin_remove` | Remove PIN | PIN kaldır |  |
| `pin_removed` | PIN removed. | PIN kaldırıldı. |  |
| `pin_saved` | PIN saved. | PIN kaydedildi. |  |
| `pin_set` | Set PIN | PIN belirle |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN yanlış. Tekrar deneyin. |  |
| `portion_q` | Portion | Porsiyon |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | Kayıtlarınız, bu telefonun güvenli anahtar deposunda tutulan bir anahtarla bu cihazda şifrelenir. Bir çalışma sunucusu ayarlamadığınız sürece hiçbir yere gönderilmez. Analiz hizmeti yoktur, reklam yoktur. |  |
| `privacy_title` | Privacy | Gizlilik |  |
| `profile` | Profile and medicines | Profil ve ilaçlar |  |
| `progress_title` | Progress | İlerleme |  |
| `protein` | Protein | Protein |  |
| `pulse` | Pulse | Nabız |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Aynı yemek evden eve değiştiği için tahminler aralık olarak verilir. Örüntü bulmak içindir, kalori saymak için değil. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | Bu telefonda Hintçe ses yüklü değil. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Seçtiğiniz saatte sessiz bir bildirim. Kayıt kesildiğinde azarlama yok, reklam yok. |  |
| `reminder_off` | Reminder off | Hatırlatıcı kapalı |  |
| `reminder_on` | Reminder on | Hatırlatıcı açık |  |
| `reminder_time` | Reminder time | Hatırlatma saati |  |
| `reminders` | Daily reminder | Günlük hatırlatıcı |  |
| `remove` | Remove | Kaldır |  |
| `remove_confirm` | Remove this item? | Bu öğe kaldırılsın mı? |  |
| `save` | Save | Kaydet |  |
| `save_failed` | Could not save. Please try again. | Kaydedilemedi. Lütfen tekrar deneyin. |  |
| `save_today` | Save today | Bugünü kaydet |  |
| `saved` | Saved on this device. Encrypted. | Bu cihaza kaydedildi. Şifreli. |  |
| `search_food` | Search a dish in English or Hindi | Bir yemeği İngilizce veya Hintçe ara |  |
| `settings_title` | Settings | Ayarlar |  |
| `share` | Share | Paylaş |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Bu telefonda dosyayı alabilecek bir uygulama yok. Bir e-posta veya dosya uygulaması kurup tekrar deneyin. |  |
| `sleep` | Sleep last night (hours) | Dün geceki uyku (saat) |  |
| `sodium` | Salt (sodium) | Tuz (sodyum) |  |
| `streak` | Day streak | Üst üste kayıt günü |  |
| `sync_bad_url` | That does not look like a valid address. | Bu geçerli bir adres gibi görünmüyor. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Senkronizasyon başarısız. Kayıtlar bu telefonda güvende ve yeniden denenecek. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | İsteğe bağlı. Koordinatörünüz size bir sunucu adresi verir. Boş bırakırsanız her şey yalnızca bu telefonda kalır. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | Bir HTTPS adresi kullanın. Sağlık verileri hiçbir zaman şifrelenmeden gönderilmez. |  |
| `sync_never` | Not synced yet. | Henüz senkronize edilmedi. |  |
| `sync_now` | Sync now | Şimdi senkronize et |  |
| `sync_offline` | No internet right now. Entries queued. | Şu anda internet yok. Kayıtlar kuyruğa alındı. |  |
| `sync_ok` | Synced. All entries are on the server. | Senkronize edildi. Tüm kayıtlar sunucuda. |  |
| `sync_save` | Save address | Adresi kaydet |  |
| `sync_title` | Study sync | Çalışma senkronizasyonu |  |
| `sync_url` | Server address | Sunucu adresi |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Geçmiş |  |
| `tab_progress` | Progress | İlerleme |  |
| `tab_settings` | Settings | Ayarlar |  |
| `tab_today` | Today | Bugün |  |
| `this_week` | This week | Bu hafta |  |
| `todays_total` | Today\'s estimate | Bugünün tahmini |  |
| `total_carbs` | Carbohydrate | Karbonhidrat |  |
| `uncertainty` | Range, not a single number | Tek bir sayı değil, bir aralık |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Yalnızca ölçtüklerinizi yazın. Boş bırakmak ölçülmediği anlamına gelir; bu da yararlı bir bilgidir. |  |
| `vitals_title` | Readings | Ölçümler |  |
| `weight` | Weight (kg) | Kilo (kg) |  |
| `wellbeing_title` | How was the day? | Gün nasıldı? |  |
| `yes` | Yes | Evet |  |

## Site strings — Turkish

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Bu demo hakkında |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | APK indir |  |
| `action_menu` | Open menu | Menüyü aç |  |
| `action_theme` | Switch theme | Temayı değiştir |  |
| `addFood` | Add food | Yemek ekle |  |
| `addMed` | + Add another | + Bir tane daha ekle |  |
| `adherence` | medicines taken | alınan ilaçlar |  |
| `ageLabel` | Age band | Yaş aralığı |  |
| `allFoods` | All | Tümü |  |
| `askClinician` | Ask a qualified clinician. | Nitelikli bir sağlık uzmanına danışın. |  |
| `assistantInputPh` | Ask a question | Bir soru sorun |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Yanıtlar yalnızca bu aracın kendi yardım metninden alınır. Yapay zekâ yok, tanı yok, tavsiye yok. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Görüntüleme dilini değiştirmek yalnızca etiketleri değiştirir. Kaydedilen değerler sabit kodlar olarak kalır, böylece hiçbir gün yeniden yazılmaz. |  |
| `assistantListen` | Listen | Dinle |  |
| `assistantNav` | Guide | Kılavuz |  |
| `assistantSend` | Send | Gönder |  |
| `assistantTitle` | Khai Guide | Khai Kılavuzu |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Bunun için bir yanıtım yok. Yalnızca bu aracın kullanımıyla ilgili soruları yanıtlarım. |  |
| `avgBp` | avg BP | ort. kan basıncı |  |
| `back` | Back | Geri |  |
| `bmiNote` | Not a diagnosis. | Tanı değildir. |  |
| `bpSys` | Systolic | Sistolik |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Bunu bir duyuru değil, bir plan olarak okuyun: Herhangi bir hastane dağıtımı, pilot uygulama, onay veya ortaklık iddia edilmemektedir. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | Dürüst çizgi: Katılımcı uygulaması ve tarayıcı demosu bugün mevcut. Buradaki her hastane bileşeni bir tasarım önerisidir. |  |
| `codeLabel` | Participant code | Katılımcı kodu |  |
| `codeShort` | Code | Kod |  |
| `completeDays` | complete days | tamamlanan gün |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Yemek, ilaç durumu (reçete edilmişse) ve en az bir ölçüm olan günlerin 21'e bölünmesi. Hatırlamaya değil, kaydedilmiş kayıtlara göre hesaplanır. |  |
| `conditionsLabel` | Conditions (select all that apply) | Durumlar (uygun olanların tümünü seçin) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Ne gireceğine siz karar verirsiniz. Bu demoda her şey bu tarayıcının yerel depolamasında kalır — sunucu yoktur, hiçbir şey yüklenmez. Android uygulamasında kayıtlar telefonda şifrelenir. Ad, adres, devlet kimlik numarası veya kişi listesi toplanmaz. Her şeyi istediğiniz zaman silebilirsiniz. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Bunu okudum ve bu tarayıcı demosunun gerçek klinik kayıtlar için olmadığını anladım. |  |
| `consentTitle` | Consent | Onam |  |
| `dayComplete` | Day complete | Gün tamamlandı |  |
| `demoBadge` | Demo | Demo |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Yalnızca demo · tıbbi cihaz değildir · gerçek klinik kayıtlar için değildir. |  |
| `downloadToast` | {name} downloaded. | {name} indirildi. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Taslak çeviri — klinik kullanımdan önce ana dil konuşan biri tarafından incelenmelidir. |  |
| `early` | early signal | erken sinyal |  |
| `eraseBtn` | Erase my data | Verilerimi sil |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Bu, profili, her günü ve her ayarı bu tarayıcıdan kaldırır. Geri alınamaz. |  |
| `eraseTitle` | Erase everything | Her şeyi sil |  |
| `eraseYes` | Erase everything | Her şeyi sil |  |
| `errCode` | Please enter your participant code. | Lütfen katılımcı kodunuzu girin. |  |
| `errConsent` | Consent is required to continue. | Devam etmek için onam gereklidir. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Yüksek ölçümler, üzerinde konuşulması için işaretlenir. Uygulama asla tanı koymaz veya reçeteyi değiştirmez. |  |
| `escalateNone` | No threshold flags in the recent record. | Son kayıtta eşik işareti yok. |  |
| `escalateTitle` | Flags for the clinician | Uzmana iletilacak işaretler |  |
| `estTotal` | Today’s estimate | Bugünün tahmini |  |
| `exportBackup` | Complete backup (JSON) | Tam yedek (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Sağlık kaydı (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Yemek kaydı (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Günlük ölçümler (CSV) |  |
| `exportPrint` | Clinician summary (print) | Uzman özeti (yazdırma) |  |
| `exportsTitle` | Export & share | Dışa aktarma ve paylaşma |  |
| `eyebrow_capability` | Capability map | Yetkinlik haritası |  |
| `eyebrow_demo` | Browser demo · no install | Tarayıcı demosu · kurulum gerekmez |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Hastaneye dağıtım · referans tasarım |  |
| `fasting` | Fasting | Açlık |  |
| `foodItemsOne` | 1 item | 1 öğe |  |
| `foodLogged` | Food | Yemek |  |
| `foodPickerTitle` | Choose a dish | Bir yemek seçin |  |
| `footerNote` | Nothing leaves this browser. | Bu tarayıcıdan hiçbir şey çıkmaz. |  |
| `footer_browser_demo` | Browser demo | Tarayıcı demosu |  |
| `footer_contact` | Contact | İletişim |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Yalnızca demo · tıbbi cihaz değildir · Zhongshan Hospital, HIMSS veya adı geçen herhangi bir sağlık sistemiyle ilişkisi yoktur. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Ziyaretler arasındaki alan için bir ölçüm aracı. Paylaşılan telefonlar, düşük bataryalar ve uzaktaki klinikler için Jamshedpur'da üretildi. |  |
| `footer_hospital_design` | Hospital design | Hastane tasarımı |  |
| `footer_limits` | Limits and answers | Sınırlar ve yanıtlar |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Tıbbi cihaz değildir. Zhongshan Hospital, HIMSS veya adı geçen herhangi bir sağlık sistemiyle ilişkisi yoktur. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Bu tarayıcıdan hiçbir şey çıkmaz. |  |
| `footer_product` | Product | Ürün |  |
| `footer_transparency` | Transparency | Şeffaflık |  |
| `footer_verification` | Verification | Doğrulama |  |
| `glucose` | Blood sugar | Kan şekeri |  |
| `head_404` | That page is not here. | O sayfa burada değil. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Bir hastanenin hiç ulaşmadığı yerler için kurulmuş kapalı bir döngü. |  |
| `head_functions` | Every function, honestly labelled. | Her işlev, dürüstçe etiketlenmiş. |  |
| `head_hospital` | The hospital is the unit of change. | Değişimin birimi hastanedir. |  |
| `head_privacy` | Your record stays yours. | Kaydınız sizde kalır. |  |
| `head_security` | What is protected, and what is not. | Neler korunur, neler korunmaz. |  |
| `historyTitle` | The last 21 days | Son 21 gün |  |
| `hospAudit` | Audit trail | Denetim izi |  |
| `hospCohort` | Cohort | Grup |  |
| `hospComplete` | complete | tamamlandı |  |
| `hospDisc1` | Prescribed but not dispensed | Reçete edilmiş ama dağıtılmamış |  |
| `hospDiscrepancies` | Medication discrepancies | İlaç tutarsızlıkları |  |
| `hospOpenHospital` | Open hospital control room | Hastane kontrol odasını aç |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Burada bir inceleme paketi görmek için katılımcı uygulamasında yaklaşık bir hafta kayıt tutun. |  |
| `hospReviewPack` | Today's review pack | Bugünün inceleme paketi |  |
| `hospitalBack` | Back to app | Uygulamaya dön |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Aynı kaydın çevresine kurulmuş hastane katmanının tasarım taslağı. Aşağıdaki grup yapaydır — gerçek hasta yok, hastane bağlantısı yok, klinik karar yok. |  |
| `hospitalTitle` | Hospital control room | Hastane kontrol odası |  |
| `hospital_layer` | Hospital deployment layer | Hastaneye dağıtım katmanı |  |
| `hospital_s1` | Status of this document | Bu belgenin durumu |  |
| `hospital_s10` | Governance and safety | Yönetişim ve güvenlik |  |
| `hospital_s11` | Phased rollout | Aşamalı dağıtım |  |
| `hospital_s12` | What would make this real | Bunu gerçek kılan şey ne olurdu |  |
| `hospital_s2` | Why the hospital, not just the phone | Neden yalnızca telefon değil de hastane |  |
| `hospital_s3` | Reference topology | Referans topoloji |  |
| `hospital_s4` | Roles and access | Roller ve erişim |  |
| `hospital_s5` | Coordinator console | Koordinatör konsolu |  |
| `hospital_s6` | Clinician review workflow | Uzman inceleme akışı |  |
| `hospital_s7` | Closed-loop medication | Kapalı döngü ilaç yönetimi |  |
| `hospital_s8` | Integration contract | Entegrasyon sözleşmesi |  |
| `hospital_s9` | Identity and data flow | Kimlik ve veri akışı |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Yaklaşık bir hafta kayıt tutun. Örüntülerin görünmesi için en az dört eşleşmiş gün gerekir. |  |
| `insightsTitle` | What your own numbers say | Kendi sayılarınızın anlattığı şeyler |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Dil |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Android sürümüyle aynı kayıt biçimi, aynı yemek kütüphanesi ve aynı kurallar; tamamı bu sayfada çalışır. Gerçek klinik kayıtlar için değildir. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Bu, projenin izlediği tüm örüntüdür: telefonda çalışan bir ölçüm aracından, sağlık uzmanı gözetimindeki kapalı döngüye. Her işlev; Yayında, Demo veya Yol Haritası olarak işaretlenmiş ve adı belirtilmiş bir ön koşulla verilmiştir. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Bir telefon kaydı ancak bir klinik onun üzerine harekete geçtiğinde döngüyü kapatır. Bu sayfa, o hastane katmanı için bir referans mimarisidir. Bir tasarım planıdır: buradaki hiçbir şey dağıtılmamıştır ve hiçbir hastane ortak olarak adlandırılmamıştır. |  |
| `legendComplete` | Complete | Tamamlandı |  |
| `legend_read` | How to read this map | Bu harita nasıl okunur |  |
| `loadSample` | Load 14-day sample | 14 günlük örneği yükle |  |
| `mealBreakfast` | Breakfast | Kahvaltı |  |
| `medsLabel` | Daily medicines (name and dose) | Günlük ilaçlar (ad ve doz) |  |
| `medsTitle` | Medicines | İlaçlar |  |
| `nav_blueprint` | Blueprint | Plan |  |
| `nav_clinician` | For clinicians | Sağlık uzmanları için |  |
| `nav_demo` | Demo | Demo |  |
| `nav_functions` | Functions | İşlevler |  |
| `nav_hospital` | Hospital | Hastane |  |
| `nav_loop` | The loop | Döngü |  |
| `nav_security` | Security | Güvenlik |  |
| `nav_what` | What it does | Ne yapar |  |
| `noDataToast` | No days recorded yet — add a day first. | Henüz gün kaydedilmedi — önce bir gün ekleyin. |  |
| `noMatches` | No dish matches that. | Eşleşen yemek yok. |  |
| `noMeds` | No medicines recorded in your profile. | Profilinizde kayıtlı ilaç yok. |  |
| `not_map` | What this map is not | Bu harita ne değildir |  |
| `note` | Anything else? (optional) | Başka bir şey var mı? (isteğe bağlı) |  |
| `nothingLogged` | No record for this day. | Bu gün için kayıt yok. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Yalnızca bu tarayıcıda saklanır. Hesap yok, yükleme yok. |  |
| `planAccept` | Accept | Kabul et |  |
| `planAccepted` | Marked accepted in this demo. | Bu demoda kabul edildi olarak işaretlendi. |  |
| `planAcceptedState` | accepted | kabul edildi |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Yemek değerleri, tartılmış ölçümler değil, ev porsiyonu tahminlerinin aralıklar olarak gösterimidir. Örüntü taslakları, tek bir kişinin birkaç eşleşmiş gününden gelir — bunlar uzman için hatırlatmalardır, bulgular değildir. |  |
| `planConfidenceTitle` | How sure is this? | Bu ne kadar kesin? |  |
| `planDecision` | Demo decision | Demo kararı |  |
| `planDraftLabel` | Draft for review | İnceleme için taslak |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | Düzenleme, inceleme toplantısında uzmanla birlikte yapılır; bu demo yalnızca kararı kaydeder. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Önce yaklaşık bir haftalık yemek ve ölçüm kaydedin. Taslak için en az dört eşleşmiş gün gerekir. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Yalnızca kendi kaydettiğiniz günlerden oluşturulan, bir diyetisyenin incelemesi için taslak. Örnek amaçlıdır — tavsiye değildir. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Düşük güven — yalnızca birkaç eşleşmiş gün var. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Yalnızca örnek amaçlıdır. Tavsiye değildir, tanı değildir. Bu taslak yüzünden yemeğinizi veya ilaçlarınızı değiştirmeyin — kararı nitelikli bir sağlık uzmanı verir. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Hem yemek hem ölçüm olan {n} günden oluşturuldu. |  |
| `planTitle` | Weekly plan draft | Haftalık plan taslağı |  |
| `planTypePortion` | Portion | Porsiyon |  |
| `prevDay` | Previous day | Önceki gün |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Yazdırma penceresinde tek sayfalık özet için “PDF olarak kaydet” seçeneğini seçin. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} tamamlanan gün · {logged} gün kayıtlı |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} tamamlanan gün · {logged} gün kayıtlı |  |
| `progressTitle` | Progress | İlerleme |  |
| `recentDays` | Recent days | Son günler |  |
| `removedToast` | Removed. | Kaldırıldı. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Kendisine atanan katılımcıların inceleme paketini görür; işaretler ve taslak öğeler kaynak günlere bağlıdır. |  |
| `roleCoordinator` | Coordinator | Koordinatör |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Grup eksiksizliğini, inceleme kuyruğunu ve denetim izini görür. Reçeteyi değiştiremez. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | İlaç tutarsızlığı kuyruğunu ve reçete → dağıtım → alma kontrol noktalarını görür. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | Her satırda geçen kural: Yazılım önce okur, insan karar verir. |  |
| `sampleTitle` | Sample data | Örnek veri |  |
| `saveToday` | Save today’s record | Bugünün kaydını sakla |  |
| `savedToast` | Saved in this browser. | Bu tarayıcıya kaydedildi. |  |
| `settingsTitle` | Settings | Ayarlar |  |
| `skip` | Skip to demo | Demoya geç |  |
| `skip_content` | Skip to content | İçeriğe geç |  |
| `start` | Start recording | Kayıt başlat |  |
| `status` | Status | Durum |  |
| `status_demo` | Demo | Demo |  |
| `status_roadmap` | Roadmap | Yol Haritası |  |
| `status_shipped` | Shipped | Yayında |  |
| `stepProfile` | 1 · Who | 1 · Kim |  |
| `tabToday` | Today | Bugün |  |
| `taken` | Taken | Alındı |  |
| `thisWeek` | this week | bu hafta |  |
| `title_404` | Page not found — Khai Tracker | Sayfa bulunamadı — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Dijital dönüşüm planı — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — tarayıcı demosu |  |
| `title_functions` | Function map — Khai Tracker | İşlev haritası — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Hastaneye dağıtım planı — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — gününüz, ölçülmüş |  |
| `title_privacy` | Privacy — Khai Tracker | Gizlilik — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Güvenlik — Khai Tracker |  |
| `vitalsTitle` | Readings | Ölçümler |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Yemek ve sağlığın günlük kaydı; sizin ve sağlık uzmanınızın ziyaretler arasında gerçekten olanları görmenizi sağlar. Yalnızca kayıt tutar, tedavi tavsiyesi vermez. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Khai Tracker'a hoş geldiniz |  |
| `wellbeingTitle` | How was the day? | Gün nasıldı? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Turkish (tr)
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
