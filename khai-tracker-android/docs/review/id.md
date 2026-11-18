# Indonesian (id) — translation review packet

> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for consent, clinical guidance or real participant records until a native speaker with the required competence signs the form at the end.

- Language: Indonesian (Bahasa Indonesia)
- Scope: Khai Tracker app strings and the static site's strings
- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`
- Draft files: `tools/i18n/translations/id.json` (app and site)
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

## App strings — Indonesian

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `about` | About | Tentang |  |
| `about_body` | Khai Tracker 1.0.0\nBuilt by Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDesigned for shared phones, patchy networks and mixed Indian plates. Offline first. No third-party analytics. No advertising. | Khai Tracker 1.0.0\nDibuat oleh Khai Foods Pvt Ltd, Jamshedpur, Jharkhand, India.\n\nDirancang untuk ponsel bersama, jaringan yang tidak stabil, dan beragam hidangan India. Mengutamakan mode offline. Tidak ada analitik pihak ketiga. Tidak ada iklan. |  |
| `about_credit` | Product owner: Biswajit Roy Bardhan | Pemilik produk: Biswajit Roy Bardhan |  |
| `add_food` | + Add food | + Tambah makanan |  |
| `add_medicines` | Add medicines | Tambah obat |  |
| `already_saved` | Saved. You can keep editing and save again. | Tersimpan. Anda dapat terus mengedit dan menyimpan lagi. |  |
| `app_name` | Khai Tracker | Khai Tracker |  |
| `ask_clinician` | Ask a qualified clinician. | Tanyakan kepada tenaga kesehatan yang berkualifikasi. |  |
| `assistant_input_ph` | Ask a question | Ajukan pertanyaan |  |
| `assistant_intro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Jawaban hanya diambil dari teks bantuan alat ini sendiri. Tanpa AI, tanpa diagnosis, tanpa saran. |  |
| `assistant_listen` | Listen | Dengarkan |  |
| `assistant_send` | Send | Kirim |  |
| `assistant_tab` | Guide | Panduan |  |
| `assistant_title` | Khai Guide | Panduan Khai |  |
| `assistant_unknown` | I don't have an answer for that. I only answer questions about using this tool. | Saya tidak punya jawaban untuk itu. Saya hanya menjawab pertanyaan tentang penggunaan alat ini. |  |
| `back` | Back | Kembali |  |
| `bp_dia` | Diastolic (lower) | Diastolik (bawah) |  |
| `bp_sys` | Systolic (upper) | Sistolik (atas) |  |
| `brand` | Khai | Khai |  |
| `brand_sub` | Tracker | Pelacak |  |
| `cancel` | Cancel | Batal |  |
| `carbs` | Carbohydrate | Karbohidrat |  |
| `close` | Close | Tutup |  |
| `completeness` | 21-day completeness | Kelengkapan 21 hari |  |
| `completeness_hint` | Days with meals, medicines and a reading, divided by 21. Counted from saved entries, not from memory. | Hari dengan makanan, obat, dan satu pengukuran, dibagi 21. Dihitung dari entri yang tersimpan, bukan dari ingatan. |  |
| `confirm` | Confirm | Konfirmasi |  |
| `consent_body` | You choose what to record. Your entries stay encrypted on this phone, and are sent to the Khai study server only if your coordinator gives you a server address. You can erase everything at any time. No name, address, Aadhaar number or contact list is collected. You may withdraw by erasing your data. | Anda yang memilih apa yang dicatat. Entri Anda tetap terenkripsi di ponsel ini, dan hanya dikirim ke server studi Khai jika koordinator memberi Anda alamat server. Anda dapat menghapus semuanya kapan saja. Tidak ada nama, alamat, nomor Aadhaar, atau daftar kontak yang dikumpulkan. Anda dapat berhenti dengan menghapus data Anda. |  |
| `consent_check` | I have read or heard this, and I agree to take part. | Saya telah membaca atau mendengar ini, dan saya setuju berpartisipasi. |  |
| `consent_listen` | Listen in Hindi | Dengarkan dalam bahasa Hindi |  |
| `consent_meta` | Consent version 1.0 · recorded on this device with a timestamp | Versi persetujuan 1.0 · dicatat di perangkat ini dengan cap waktu |  |
| `consent_title` | Consent | Persetujuan |  |
| `day_detail` | Day detail | Detail hari |  |
| `days_logged` | Days logged | Hari tercatat |  |
| `disclaimer` | Khai Tracker is a tracking tool, not medical advice. It never diagnoses and never changes a prescription. | Khai Tracker adalah alat pencatatan, bukan nasihat medis. Aplikasi ini tidak pernah mendiagnosis dan tidak pernah mengubah resep. |  |
| `done` | Done | Selesai |  |
| `dose_hint` | Dose (optional) | Dosis (opsional) |  |
| `edit_day` | Edit this day | Edit hari ini |  |
| `edit_profile` | Edit profile | Edit profil |  |
| `energy` | Energy | Energi |  |
| `erase` | Erase my data | Hapus data saya |  |
| `erase_confirm` | This permanently deletes every entry, your profile and your reminder settings on this phone. This cannot be undone. | Ini menghapus permanen semua entri, profil, dan pengaturan pengingat di ponsel ini. Tidak dapat dibatalkan. |  |
| `erase_yes` | Erase everything | Hapus semuanya |  |
| `estimated` | estimated | perkiraan |  |
| `export_backup` | Full backup (JSON) | Cadangan lengkap (JSON) |  |
| `export_fhir` | Health record (FHIR JSON) | Rekam kesehatan (FHIR JSON) |  |
| `export_food` | Food log (CSV) | Catatan makanan (CSV) |  |
| `export_hint` | Share only with the people you choose. Files leave the phone only when you tap share. | Bagikan hanya dengan orang yang Anda pilih. File hanya keluar dari ponsel saat Anda mengetuk bagikan. |  |
| `export_metrics` | Daily readings (CSV) | Pengukuran harian (CSV) |  |
| `export_summary` | Clinician summary (PDF) | Ringkasan untuk tenaga kesehatan (PDF) |  |
| `export_title` | Export and share | Ekspor dan bagikan |  |
| `export_working` | Preparing file… | Menyiapkan file… |  |
| `fat` | Fat | Lemak |  |
| `food_items` | %1$d food items | %1$d item makanan |  |
| `food_library_title` | Food library | Pustaka makanan |  |
| `glucose` | Blood sugar | Gula darah |  |
| `glucose_fasting` | Fasting | Puasa |  |
| `glucose_pp` | After food | Sesudah makan |  |
| `hide_previews` | Hide this app in the recent-apps preview | Sembunyikan aplikasi ini dalam pratinjau aplikasi terbaru |  |
| `history_hint` | A filled square has an entry. Tap any day to review or correct it. | Kotak yang terisi berarti ada entri. Ketuk hari mana pun untuk meninjau atau memperbaikinya. |  |
| `history_title` | Last 21 days | 21 hari terakhir |  |
| `insight_descriptive` | description | deskripsi |  |
| `insight_early` | early signal | sinyal awal |  |
| `insight_moderate` | moderate signal | sinyal sedang |  |
| `insights_caveat` | These are observations about your own entries, not a diagnosis and not a treatment recommendation. | Ini adalah pengamatan tentang entri Anda sendiri, bukan diagnosis dan bukan rekomendasi pengobatan. |  |
| `insights_empty` | Keep logging for a week. Patterns appear once there are at least five days with readings. | Teruskan mencatat selama seminggu. Pola muncul setelah ada setidaknya lima hari dengan pengukuran. |  |
| `insights_title` | What your own data shows | Apa yang ditunjukkan data Anda sendiri |  |
| `kcal` | Energy | Energi |  |
| `language` | Language / भाषा | Bahasa / भाषा |  |
| `loading` | Loading… | Memuat… |  |
| `meal_breakfast` | Breakfast | Sarapan |  |
| `meal_dinner` | Dinner | Makan malam |  |
| `meal_lunch` | Lunch | Makan siang |  |
| `meal_snacks` | Snacks & drinks | Camilan & minuman |  |
| `meds_changed` | Changed | Diubah |  |
| `meds_empty` | No medicines listed yet. | Belum ada obat yang tercantum. |  |
| `meds_hint` | Tick what you actually did today. | Centang apa yang benar-benar Anda lakukan hari ini. |  |
| `meds_none` | No medicines are listed in your profile. Add them once, then tick them off each day. | Belum ada obat dalam profil Anda. Tambahkan sekali, lalu centang setiap hari. |  |
| `meds_skipped` | Skipped | Dilewati |  |
| `meds_summary` | %1$d of %2$d medicines taken | %1$d dari %2$d obat telah diminum |  |
| `meds_taken` | Taken | Diminum |  |
| `meds_title` | Medicines | Obat |  |
| `mood` | Mood | Suasana hati |  |
| `no` | No | Tidak |  |
| `no_food_yet` | Nothing added yet | Belum ada yang ditambahkan |  |
| `note` | Anything else? (optional) | Ada lagi? (opsional) |  |
| `nothing_logged` | No entry for this day. | Tidak ada entri untuk hari ini. |  |
| `notif_channel` | Daily reminder | Pengingat harian |  |
| `notif_channel_desc` | One daily reminder to record your day. | Satu pengingat harian untuk mencatat hari Anda. |  |
| `notif_text` | Two quiet minutes: what did you eat, and what did you measure today? | Dua menit yang tenang: apa yang Anda makan, dan apa yang Anda ukur hari ini? |  |
| `notif_title` | Khai Tracker | Khai Tracker |  |
| `notification_permission` | Allow notifications so the daily reminder can reach you. | Izinkan notifikasi agar pengingat harian dapat sampai kepada Anda. |  |
| `ok` | OK | OK |  |
| `onboard_add_med` | + Add another | + Tambah obat lain |  |
| `onboard_age` | Age group | Kelompok usia |  |
| `onboard_age_ph` | Select | Pilih |  |
| `onboard_code` | Participant code | Kode peserta |  |
| `onboard_code_ph` | e.g. K01 | Mis. K01 |  |
| `onboard_conditions` | Conditions (tick all that apply) | Kondisi (centang semua yang sesuai) |  |
| `onboard_error_age` | Please choose an age group. | Pilih kelompok usia. |  |
| `onboard_error_code` | Please enter your participant code. | Masukkan kode peserta Anda. |  |
| `onboard_error_consent` | Please confirm consent to continue. | Konfirmasi persetujuan untuk melanjutkan. |  |
| `onboard_intro` | A daily food-and-health record that helps you and your clinician see what is actually happening between visits. It is a tracking tool, not medical advice. | Catatan harian tentang makanan dan kesehatan yang membantu Anda dan tenaga kesehatan melihat apa yang sebenarnya terjadi di antara kunjungan. Ini adalah alat pencatatan, bukan nasihat medis. |  |
| `onboard_meds` | Daily medicines (name and dose) | Obat harian (nama dan dosis) |  |
| `onboard_meds_ph` | e.g. Metformin 500 mg | Mis. Metformin 500 mg |  |
| `onboard_start` | Start tracking | Mulai mencatat |  |
| `onboard_title` | Welcome to Khai Tracker | Selamat datang di Khai Tracker |  |
| `pending` | Pending sync | Menunggu sinkronisasi |  |
| `per_portion` | per portion | per porsi |  |
| `pick_day` | Pick a day above. | Pilih hari di atas. |  |
| `pin_change` | Change PIN | Ubah PIN |  |
| `pin_enter` | Enter your PIN | Masukkan PIN Anda |  |
| `pin_four` | A PIN must be exactly 4 digits. | PIN harus tepat 4 digit. |  |
| `pin_hint` | Useful on a shared family phone. A 4-digit PIN is asked when the app opens, and again after a minute away. | Berguna di ponsel bersama keluarga. PIN 4 digit diminta saat aplikasi dibuka, dan lagi setelah satu menit tidak digunakan. |  |
| `pin_lock` | App lock | Kunci aplikasi |  |
| `pin_new` | Choose a 4-digit PIN | Pilih PIN 4 digit |  |
| `pin_remove` | Remove PIN | Hapus PIN |  |
| `pin_removed` | PIN removed. | PIN dihapus. |  |
| `pin_saved` | PIN saved. | PIN tersimpan. |  |
| `pin_set` | Set PIN | Atur PIN |  |
| `pin_wrong` | Wrong PIN. Try again. | PIN salah. Coba lagi. |  |
| `portion_q` | Portion | Porsi |  |
| `privacy_body` | Your entries are encrypted on this device with a key held in this phone\'s secure keystore. Nothing is sent anywhere unless you set a study server. There are no analytics and no advertising. | Entri Anda dienkripsi di perangkat ini dengan kunci yang disimpan di penyimpanan kunci aman ponsel ini. Tidak ada yang dikirim ke mana pun kecuali Anda menetapkan server studi. Tidak ada analitik dan tidak ada iklan. |  |
| `privacy_title` | Privacy | Privasi |  |
| `profile` | Profile and medicines | Profil dan obat |  |
| `progress_title` | Progress | Kemajuan |  |
| `protein` | Protein | Protein |  |
| `pulse` | Pulse | Denyut nadi |  |
| `range_note` | Estimates are ranges because the same dish varies by household. They are for pattern-finding, not counting calories. | Perkiraan berupa rentang karena hidangan yang sama berbeda di setiap rumah tangga. Perkiraan ini untuk mencari pola, bukan menghitung kalori. |  |
| `read_aloud_unavailable` | Speech for this language is not installed on this phone. | Ucapan untuk bahasa ini tidak terpasang di ponsel ini. |  |
| `reminder_hint` | A quiet notification at the time you choose. No streak shaming, no ads. | Notifikasi tenang pada waktu yang Anda pilih. Tidak ada tekanan rentetan hari, tidak ada iklan. |  |
| `reminder_off` | Reminder off | Pengingat nonaktif |  |
| `reminder_on` | Reminder on | Pengingat aktif |  |
| `reminder_time` | Reminder time | Waktu pengingat |  |
| `reminders` | Daily reminder | Pengingat harian |  |
| `remove` | Remove | Hapus |  |
| `remove_confirm` | Remove this item? | Hapus item ini? |  |
| `save` | Save | Simpan |  |
| `save_failed` | Could not save. Please try again. | Gagal menyimpan. Silakan coba lagi. |  |
| `save_today` | Save today | Simpan hari ini |  |
| `saved` | Saved on this device. Encrypted. | Tersimpan di perangkat ini. Terenkripsi. |  |
| `search_food` | Search a dish in English or Hindi | Cari hidangan dalam bahasa Inggris atau Hindi |  |
| `settings_title` | Settings | Pengaturan |  |
| `share` | Share | Bagikan |  |
| `share_unavailable` | No app on this phone can receive the file. Install a mail or file app and try again. | Tidak ada aplikasi di ponsel ini yang dapat menerima file. Pasang aplikasi email atau pengelola file lalu coba lagi. |  |
| `sleep` | Sleep last night (hours) | Tidur tadi malam (jam) |  |
| `sodium` | Salt (sodium) | Garam (sodium) |  |
| `streak` | Day streak | Rentetan hari |  |
| `sync_bad_url` | That does not look like a valid address. | Alamat itu tampaknya tidak valid. |  |
| `sync_fail` | Sync failed. Entries are safe on this phone and will retry. | Sinkronisasi gagal. Entri aman di ponsel ini dan akan dicoba lagi. |  |
| `sync_hint` | Optional. Your coordinator gives you a server address. Leave empty to keep everything on this phone only. | Opsional. Koordinator memberi Anda alamat server. Biarkan kosong agar semua tetap hanya di ponsel ini. |  |
| `sync_need_https` | Use an HTTPS address. Health data is never sent unencrypted. | Gunakan alamat HTTPS. Data kesehatan tidak pernah dikirim tanpa enkripsi. |  |
| `sync_never` | Not synced yet. | Belum pernah disinkronkan. |  |
| `sync_now` | Sync now | Sinkronkan sekarang |  |
| `sync_offline` | No internet right now. Entries queued. | Tidak ada internet saat ini. Entri antre. |  |
| `sync_ok` | Synced. All entries are on the server. | Tersinkron. Semua entri ada di server. |  |
| `sync_save` | Save address | Simpan alamat |  |
| `sync_title` | Study sync | Sinkronisasi studi |  |
| `sync_url` | Server address | Alamat server |  |
| `sync_url_ph` | https://your-study.example.org | https://your-study.example.org |  |
| `tab_history` | History | Riwayat |  |
| `tab_progress` | Progress | Kemajuan |  |
| `tab_settings` | Settings | Pengaturan |  |
| `tab_today` | Today | Hari ini |  |
| `this_week` | This week | Minggu ini |  |
| `todays_total` | Today\'s estimate | Perkiraan hari ini |  |
| `total_carbs` | Carbohydrate | Karbohidrat |  |
| `uncertainty` | Range, not a single number | Rentang, bukan satu angka tunggal |  |
| `vitals_hint` | Only fill what you measured. Blank means not measured, which is useful information too. | Isi hanya apa yang Anda ukur. Kosong berarti tidak diukur, dan itu juga informasi yang berguna. |  |
| `vitals_title` | Readings | Pengukuran |  |
| `weight` | Weight (kg) | Berat badan (kg) |  |
| `wellbeing_title` | How was the day? | Bagaimana hari ini? |  |
| `yes` | Yes | Ya |  |

## Site strings — Indonesian

| Key | English source | Draft translation | Reviewer note |
| --- | --- | --- | --- |
| `aboutTitle` | About this demo | Tentang demo ini |  |
| `action_apk` | APK | APK |  |
| `action_download` | Download APK | Unduh APK |  |
| `action_menu` | Open menu | Buka menu |  |
| `action_theme` | Switch theme | Ganti tema |  |
| `addFood` | Add food | Tambah makanan |  |
| `addMed` | + Add another | + Tambah obat lain |  |
| `adherence` | medicines taken | obat diminum |  |
| `ageLabel` | Age band | Kelompok usia |  |
| `allFoods` | All | Semua |  |
| `askClinician` | Ask a qualified clinician. | Tanyakan kepada tenaga kesehatan yang berkualifikasi. |  |
| `assistantInputPh` | Ask a question | Ajukan pertanyaan |  |
| `assistantIntro` | Questions answered from this tool's own help text. No AI, no diagnosis, no advice. | Jawaban hanya diambil dari teks bantuan alat ini sendiri. Tanpa AI, tanpa diagnosis, tanpa saran. |  |
| `assistantLanguageAnswer` | Switching the display language changes labels only. Recorded values stay as stable codes, so a day is never rewritten. | Mengubah bahasa tampilan hanya mengubah label. Nilai yang tersimpan tetap berupa kode stabil, sehingga tidak ada hari yang ditulis ulang. |  |
| `assistantListen` | Listen | Dengarkan |  |
| `assistantNav` | Guide | Panduan |  |
| `assistantSend` | Send | Kirim |  |
| `assistantTitle` | Khai Guide | Panduan Khai |  |
| `assistantUnknown` | I don't have an answer for that. I only answer questions about using this tool. | Saya tidak punya jawaban untuk itu. Saya hanya menjawab pertanyaan tentang penggunaan alat ini. |  |
| `avgBp` | avg BP | Tekanan darah rata-rata |  |
| `back` | Back | Kembali |  |
| `bmiNote` | Not a diagnosis. | Bukan diagnosis. |  |
| `bpSys` | Systolic | Sistolik |  |
| `callout_blueprint` | Read this as a blueprint, not an announcement: no hospital deployment, pilot, endorsement or partnership is claimed. | Bacalah ini sebagai rancangan, bukan pengumuman: tidak ada penerapan, uji coba, dukungan, atau kemitraan rumah sakit yang diklaim. |  |
| `callout_honest` | The honest line: the participant app and the browser demo exist today. Every hospital component here is a design proposal. | Garis jujurnya: aplikasi peserta dan demo browser sudah ada saat ini. Setiap komponen rumah sakit di sini adalah usulan desain. |  |
| `codeLabel` | Participant code | Kode peserta |  |
| `codeShort` | Code | Kode |  |
| `completeDays` | complete days | hari lengkap |  |
| `completenessHint` | Days with food, medicine status (when prescribed) and at least one measurement, divided by 21. Counted from saved entries, not memory. | Hari dengan makanan, status obat (bila diresepkan), dan setidaknya satu pengukuran, dibagi 21. Dihitung dari entri yang tersimpan, bukan ingatan. |  |
| `conditionsLabel` | Conditions (select all that apply) | Kondisi (pilih semua yang sesuai) |  |
| `consentBody` | You decide what to enter. In this demo everything stays in this browser’s local storage — there is no server and nothing is uploaded. In the Android app, entries are encrypted on the phone. No name, address, government ID or contact list is collected. You can erase everything at any time. | Anda yang memutuskan apa yang dimasukkan. Dalam demo ini, semuanya tetap tersimpan di penyimpanan lokal browser ini — tidak ada server dan tidak ada yang diunggah. Di aplikasi Android, entri dienkripsi di ponsel. Tidak ada nama, alamat, nomor identitas pemerintah, atau daftar kontak yang dikumpulkan. Anda dapat menghapus semuanya kapan saja. |  |
| `consentCheck` | I have read this and understand this browser demo is not for real clinical records. | Saya telah membaca dan memahami bahwa demo browser ini bukan untuk rekam klinik sungguhan. |  |
| `consentTitle` | Consent | Persetujuan |  |
| `dayComplete` | Day complete | Hari lengkap |  |
| `demoBadge` | Demo | Demo |  |
| `demoOnly` | Demo only · not a medical device · not for real clinical records. | Hanya demo · bukan alat medis · bukan untuk rekam klinik sungguhan. |  |
| `downloadToast` | {name} downloaded. | {name} telah diunduh. |  |
| `draft_notice` | Draft translation — requires native-speaker review before clinical use. | Terjemahan draf — memerlukan tinjauan penutur asli sebelum penggunaan klinis. |  |
| `early` | early signal | sinyal awal |  |
| `eraseBtn` | Erase my data | Hapus data saya |  |
| `eraseConfirmBody` | This removes the profile, every day and every setting from this browser. It cannot be undone. | Ini menghapus profil, setiap hari, dan setiap pengaturan dari browser ini. Tidak dapat dibatalkan. |  |
| `eraseTitle` | Erase everything | Hapus semuanya |  |
| `eraseYes` | Erase everything | Hapus semuanya |  |
| `errCode` | Please enter your participant code. | Masukkan kode peserta Anda. |  |
| `errConsent` | Consent is required to continue. | Persetujuan diperlukan untuk melanjutkan. |  |
| `escalateBody` | Raised readings are flagged for a conversation. The app never diagnoses or changes a prescription. | Pengukuran tinggi ditandai untuk didiskusikan. Aplikasi tidak pernah mendiagnosis atau mengubah resep. |  |
| `escalateNone` | No threshold flags in the recent record. | Tidak ada penanda ambang dalam catatan terakhir. |  |
| `escalateTitle` | Flags for the clinician | Tanda untuk tenaga kesehatan |  |
| `estTotal` | Today’s estimate | Perkiraan hari ini |  |
| `exportBackup` | Complete backup (JSON) | Cadangan lengkap (JSON) |  |
| `exportFhir` | Health record (FHIR R4) | Rekam kesehatan (FHIR R4) |  |
| `exportFood` | Food log (CSV) | Catatan makanan (CSV) |  |
| `exportMetrics` | Daily metrics (CSV) | Metrik harian (CSV) |  |
| `exportPrint` | Clinician summary (print) | Ringkasan untuk tenaga kesehatan (cetak) |  |
| `exportsTitle` | Export & share | Ekspor & bagikan |  |
| `eyebrow_capability` | Capability map | Peta kemampuan |  |
| `eyebrow_demo` | Browser demo · no install | Demo browser · tanpa pemasangan |  |
| `eyebrow_hospital` | Hospital deployment · reference design | Penerapan di rumah sakit · desain referensi |  |
| `fasting` | Fasting | Puasa |  |
| `foodItemsOne` | 1 item | 1 item |  |
| `foodLogged` | Food | Makanan |  |
| `foodPickerTitle` | Choose a dish | Pilih hidangan |  |
| `footerNote` | Nothing leaves this browser. | Tidak ada yang keluar dari browser ini. |  |
| `footer_browser_demo` | Browser demo | Demo browser |  |
| `footer_contact` | Contact | Kontak |  |
| `footer_demo_not_medical` | Demo only · not a medical device · no affiliation with Zhongshan Hospital, HIMSS or any named health system. | Hanya demo · bukan alat medis · tidak ada afiliasi dengan Zhongshan Hospital, HIMSS, atau sistem kesehatan mana pun yang disebutkan. |  |
| `footer_desc` | A measurement instrument for the space between visits. Built in Jamshedpur for phones that are shared, batteries that are low, and clinics that are far away. | Alat ukur untuk ruang di antara kunjungan. Dibuat di Jamshedpur untuk ponsel yang dipakai bersama, baterai yang rendah, dan klinik yang jauh. |  |
| `footer_hospital_design` | Hospital design | Desain rumah sakit |  |
| `footer_limits` | Limits and answers | Batas dan jawaban |  |
| `footer_not_medical` | Not a medical device. No affiliation with Zhongshan Hospital, HIMSS or any named health system. | Bukan alat medis. Tidak ada afiliasi dengan Zhongshan Hospital, HIMSS, atau sistem kesehatan mana pun yang disebutkan. |  |
| `footer_nothing_leaves` | Nothing leaves this browser. | Tidak ada yang keluar dari browser ini. |  |
| `footer_product` | Product | Produk |  |
| `footer_transparency` | Transparency | Transparansi |  |
| `footer_verification` | Verification | Verifikasi |  |
| `glucose` | Blood sugar | Gula darah |  |
| `head_404` | That page is not here. | Halaman itu tidak ada di sini. |  |
| `head_blueprint` | A closed loop, built for the places a hospital never reaches. | Satu alur tertutup, dibangun untuk tempat yang tidak pernah dijangkau rumah sakit. |  |
| `head_functions` | Every function, honestly labelled. | Setiap fungsi, diberi label jujur. |  |
| `head_hospital` | The hospital is the unit of change. | Rumah sakit adalah satuan perubahan. |  |
| `head_privacy` | Your record stays yours. | Catatan Anda tetap menjadi milik Anda. |  |
| `head_security` | What is protected, and what is not. | Apa yang dilindungi, dan apa yang tidak. |  |
| `historyTitle` | The last 21 days | 21 hari terakhir |  |
| `hospAudit` | Audit trail | Jejak audit |  |
| `hospCohort` | Cohort | Kelompok |  |
| `hospComplete` | complete | lengkap |  |
| `hospDisc1` | Prescribed but not dispensed | Diresepkan tetapi tidak disediakan |  |
| `hospDiscrepancies` | Medication discrepancies | Ketidaksesuaian obat |  |
| `hospOpenHospital` | Open hospital control room | Buka ruang kendali rumah sakit |  |
| `hospPackEmpty` | Log about a week in the participant app to see a review pack here. | Catat sekitar seminggu di aplikasi peserta untuk melihat paket tinjauan di sini. |  |
| `hospReviewPack` | Today's review pack | Paket tinjauan hari ini |  |
| `hospitalBack` | Back to app | Kembali ke aplikasi |  |
| `hospitalIntro` | A design sketch of the hospital layer built around the same record. The cohort below is synthetic — no real patients, no hospital connection, no clinical decisions. | Sketsa desain lapisan rumah sakit yang dibangun di sekitar catatan yang sama. Kelompok di bawah ini bersifat sintetis — tidak ada pasien sungguhan, tidak ada hubungan dengan rumah sakit, tidak ada keputusan klinis. |  |
| `hospitalTitle` | Hospital control room | Ruang kendali rumah sakit |  |
| `hospital_layer` | Hospital deployment layer | Lapisan penerapan di rumah sakit |  |
| `hospital_s1` | Status of this document | Status dokumen ini |  |
| `hospital_s10` | Governance and safety | Tata kelola dan keselamatan |  |
| `hospital_s11` | Phased rollout | Penerapan bertahap |  |
| `hospital_s12` | What would make this real | Apa yang akan membuat ini nyata |  |
| `hospital_s2` | Why the hospital, not just the phone | Mengapa rumah sakit, bukan hanya ponsel |  |
| `hospital_s3` | Reference topology | Topologi referensi |  |
| `hospital_s4` | Roles and access | Peran dan akses |  |
| `hospital_s5` | Coordinator console | Konsol koordinator |  |
| `hospital_s6` | Clinician review workflow | Alur kerja tinjauan klinis |  |
| `hospital_s7` | Closed-loop medication | Obat dalam alur tertutup |  |
| `hospital_s8` | Integration contract | Kontrak integrasi |  |
| `hospital_s9` | Identity and data flow | Identitas dan alur data |  |
| `insightsEmpty` | Keep a record for about a week. Patterns need at least four paired days before anything is shown. | Catat selama sekitar seminggu. Pola memerlukan setidaknya empat hari berpasangan sebelum ditampilkan. |  |
| `insightsTitle` | What your own numbers say | Apa yang dikatakan angka Anda sendiri |  |
| `kcal` | kcal | kcal |  |
| `langName` | हिंदी | हिंदी |  |
| `language` | Language | Bahasa |  |
| `lead_demo` | The same record shape, the same food library and the same rules as the Android build, running entirely in this page. Not for real clinical records. | Bentuk catatan yang sama, pustaka makanan yang sama, dan aturan yang sama dengan versi Android, seluruhnya berjalan di halaman ini. Bukan untuk rekam klinik sungguhan. |  |
| `lead_functions` | This is the full pattern the project follows, from a phone-based measurement instrument to a clinician-supervised closed loop. Each function is marked as Shipped, Demo or Roadmap with a named precondition. | Ini adalah pola lengkap yang diikuti proyek, dari alat ukur berbasis ponsel hingga alur tertutup yang diawasi tenaga kesehatan. Setiap fungsi ditandai sebagai Dirilis, Demo, atau Rencana dengan prasyarat yang disebutkan. |  |
| `lead_hospital` | A phone record only closes a loop when a clinic can act on it. This page is a reference architecture for that hospital layer. It is a design blueprint: nothing here is deployed and no hospital is named as a partner. | Catatan di ponsel hanya menutup alur jika klinik dapat bertindak berdasarkan catatan itu. Halaman ini adalah arsitektur referensi untuk lapisan rumah sakit tersebut. Ini adalah rancangan desain: tidak ada yang diterapkan dan tidak ada rumah sakit yang disebut sebagai mitra. |  |
| `legendComplete` | Complete | Lengkap |  |
| `legend_read` | How to read this map | Cara membaca peta ini |  |
| `loadSample` | Load 14-day sample | Muat contoh 14 hari |  |
| `mealBreakfast` | Breakfast | Sarapan |  |
| `medsLabel` | Daily medicines (name and dose) | Obat harian (nama dan dosis) |  |
| `medsTitle` | Medicines | Obat |  |
| `nav_blueprint` | Blueprint | Rancangan |  |
| `nav_clinician` | For clinicians | Untuk tenaga kesehatan |  |
| `nav_demo` | Demo | Demo |  |
| `nav_functions` | Functions | Fungsi |  |
| `nav_hospital` | Hospital | Rumah sakit |  |
| `nav_loop` | The loop | Alur |  |
| `nav_security` | Security | Keamanan |  |
| `nav_what` | What it does | Apa yang dilakukannya |  |
| `noDataToast` | No days recorded yet — add a day first. | Belum ada hari yang tercatat — tambahkan hari terlebih dahulu. |  |
| `noMatches` | No dish matches that. | Tidak ada hidangan yang cocok. |  |
| `noMeds` | No medicines recorded in your profile. | Belum ada obat yang tercatat dalam profil Anda. |  |
| `not_map` | What this map is not | Apa yang bukan merupakan peta ini |  |
| `note` | Anything else? (optional) | Ada lagi? (opsional) |  |
| `nothingLogged` | No record for this day. | Tidak ada catatan untuk hari ini. |  |
| `onboardStorage` | Stored only in this browser. No account, no upload. | Hanya tersimpan di browser ini. Tanpa akun, tanpa unggahan. |  |
| `planAccept` | Accept | Terima |  |
| `planAccepted` | Marked accepted in this demo. | Ditandai diterima dalam demo ini. |  |
| `planAcceptedState` | accepted | diterima |  |
| `planConfidenceBody` | Food values are household-portion estimates shown as ranges, not weighed measurements. Pattern drafts come from a few paired days in one person — they are prompts for a clinician, not findings. | Nilai makanan adalah perkiraan porsi rumah tangga yang ditampilkan sebagai rentang, bukan pengukuran dengan timbangan. Draf pola berasal dari beberapa hari berpasangan pada satu orang — merupakan pengingat untuk tenaga kesehatan, bukan temuan. |  |
| `planConfidenceTitle` | How sure is this? | Seberapa yakin ini? |  |
| `planDecision` | Demo decision | Keputusan demo |  |
| `planDraftLabel` | Draft for review | Draf untuk ditinjau |  |
| `planEditHint` | Editing happens with the clinician in the review meeting; this demo records the decision only. | Pengeditan dilakukan bersama tenaga kesehatan dalam pertemuan tinjauan; demo ini hanya mencatat keputusannya. |  |
| `planEmpty` | Log about a week of food and readings first. A draft needs at least four paired days. | Catat makanan dan pengukuran selama sekitar seminggu terlebih dahulu. Draf memerlukan setidaknya empat hari berpasangan. |  |
| `planIntro` | A draft for a dietitian to review, built only from your own logged days. Illustrative — not advice. | Draf untuk ditinjau oleh ahli gizi, dibuat hanya dari hari-hari yang Anda catat sendiri. Hanya ilustrasi — bukan nasihat. |  |
| `planLowConfidence` | Low confidence — only a few paired days. | Keyakinan rendah — hanya beberapa hari berpasangan. |  |
| `planNotAdvice` | Illustrative only. Not advice, not a diagnosis. Do not change your food or medicines because of this draft — a qualified clinician decides. | Hanya ilustrasi. Bukan nasihat, bukan diagnosis. Jangan mengubah makanan atau obat karena draf ini — tenaga kesehatan yang berkualifikasi yang memutuskan. |  |
| `planPaired` | Built from {n} days that have both food and a reading. | Dibuat dari {n} hari yang memiliki makanan dan pengukuran. |  |
| `planTitle` | Weekly plan draft | Draf rencana mingguan |  |
| `planTypePortion` | Portion | Porsi |  |
| `prevDay` | Previous day | Hari sebelumnya |  |
| `printHint` | In the print dialog choose “Save as PDF” for a one-page summary. | Dalam dialog cetak, pilih “Save as PDF” untuk ringkasan satu halaman. |  |
| `progressFmt` | {complete} / {total} complete days · {logged} days logged | {complete} / {total} hari lengkap · {logged} hari tercatat |  |
| `progressFmtOne` | {complete} / {total} complete days · {logged} day logged | {complete} / {total} hari lengkap · {logged} hari tercatat |  |
| `progressTitle` | Progress | Kemajuan |  |
| `recentDays` | Recent days | Hari-hari terakhir |  |
| `removedToast` | Removed. | Dihapus. |  |
| `roleClinicianDesc` | Sees the review pack for assigned participants, with flags and draft items linked to source days. | Melihat paket tinjauan untuk peserta yang ditugaskan, dengan penanda dan item draf yang tertaut ke hari sumbernya. |  |
| `roleCoordinator` | Coordinator | Koordinator |  |
| `roleCoordinatorDesc` | Sees cohort completeness, the review queue and the audit trail. Cannot change a prescription. | Melihat kelengkapan kelompok, antrean tinjauan, dan jejak audit. Tidak dapat mengubah resep. |  |
| `rolePharmacistDesc` | Sees the medication discrepancy queue and the prescribed → dispensed → taken checkpoints. | Melihat antrean ketidaksesuaian obat dan titik pemeriksaan diresepkan → disediakan → diminum. |  |
| `rule_human` | The rule across every row: software reads first, a human decides. | Aturan di setiap baris: perangkat lunak membaca lebih dulu, manusia yang memutuskan. |  |
| `sampleTitle` | Sample data | Data contoh |  |
| `saveToday` | Save today’s record | Simpan catatan hari ini |  |
| `savedToast` | Saved in this browser. | Tersimpan di browser ini. |  |
| `settingsTitle` | Settings | Pengaturan |  |
| `skip` | Skip to demo | Lewati ke demo |  |
| `skip_content` | Skip to content | Lewati ke konten |  |
| `start` | Start recording | Mulai mencatat |  |
| `status` | Status | Status |  |
| `status_demo` | Demo | Demo |  |
| `status_roadmap` | Roadmap | Rencana |  |
| `status_shipped` | Shipped | Dirilis |  |
| `stepProfile` | 1 · Who | 1 · Siapa |  |
| `tabToday` | Today | Hari ini |  |
| `taken` | Taken | Diminum |  |
| `thisWeek` | this week | minggu ini |  |
| `title_404` | Page not found — Khai Tracker | Halaman tidak ditemukan — Khai Tracker |  |
| `title_blueprint` | Digital-transformation blueprint — Khai Tracker | Rancangan transformasi digital — Khai Tracker |  |
| `title_demo` | Khai Tracker — browser demo | Khai Tracker — demo browser |  |
| `title_functions` | Function map — Khai Tracker | Peta fungsi — Khai Tracker |  |
| `title_hospital` | Hospital deployment blueprint — Khai Tracker | Rancangan penerapan di rumah sakit — Khai Tracker |  |
| `title_index` | Khai Tracker — your day, measured | Khai Tracker — hari Anda, diukur |  |
| `title_privacy` | Privacy — Khai Tracker | Privasi — Khai Tracker |  |
| `title_security` | Security — Khai Tracker | Keamanan — Khai Tracker |  |
| `vitalsTitle` | Readings | Pengukuran |  |
| `welcomeBody` | A daily record of food and health, so you and your clinician can see what actually happens between visits. It keeps a record. It does not give treatment advice. | Catatan harian tentang makanan dan kesehatan, agar Anda dan tenaga kesehatan dapat melihat apa yang benar-benar terjadi di antara kunjungan. Ini hanya menyimpan catatan, bukan memberi nasihat pengobatan. |  |
| `welcomeTitle` | Welcome to Khai Tracker | Selamat datang di Khai Tracker |  |
| `wellbeingTitle` | How was the day? | Bagaimana hari ini? |  |

## Sign-off — leave blank until actually reviewed

```text
Reviewer name: ______________________________
Language reviewed: Indonesian (id)
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
