# Changelog — Khai Tracker (Android)

All notable changes to the native Android app. Versions follow `versionName`; every Play upload
increments `versionCode`.

## 1.0.0 — versionCode 1

First native Android release of the Khai Tracker, replacing the web app for participants who need a
record that works on a shared, mid-range phone with no reliable connection.

### Added

**Capture**
- One-screen daily entry: breakfast, lunch, dinner, snacks and drinks.
- Food library with 83 regional dishes, bilingual names, meal-slot tagging, and **ranged** energy and
  macronutrient estimates. Ranges are shown as ranges; nothing is presented as a measured value.
- Per-medicine daily status: taken, skipped, changed — recorded against the medicines in the
  participant's profile.
- Readings: systolic/diastolic, pulse, blood glucose with fasting/after-food context, weight.
- Wellbeing: energy, mood, sleep hours, free-text note.
- Completeness rule that does not punish participants with no prescribed medicines: a day counts as
  complete with food, a reading, and either medicines recorded or no medicines prescribed.

**Record**
- 21-day history grid with per-day detail and editing of past days.
- Progress view: 21-day completeness, current streak, last-7-days count, and descriptive personal
  insights that appear only after enough paired days exist (minimum-pairing rules, no extrapolation).

**Exports**
- Food log CSV, daily readings CSV, one-page clinician summary PDF, full JSON backup.
- FHIR R4 collection bundle: `Patient`, `Observation` for blood pressure, glucose and weight with
  LOINC codes and UCUM units, `Consent`, `Provenance`. Timestamps use the day the participant
  recorded, not a fabricated clock time. Fasting glucose is coded 1558-6 rather than being labelled
  with an interpretation code. Diet estimates are deliberately excluded from the clinical bundle.
- Files are written to app-private cache and handed to the system share sheet; the app never uploads
  them itself.

**Privacy and security**
- AES-256-GCM record encryption with a non-exportable Android Keystore key; AAD binds each
  ciphertext to `participant code | date`.
- SQLite stores ciphertext only; no plaintext column exists.
- `allowBackup=false` plus extraction rules, so the record is excluded from cloud backup and
  device transfer.
- Optional 4-digit app lock, salted PBKDF2-HMAC-SHA1 (120 000 iterations), constant-time compare,
  automatic re-lock 60 seconds after backgrounding.
- "Hide in recent apps" option, applying `FLAG_SECURE`.
- In-app erase that deletes records, profile, settings, PIN and the Keystore key.

**Connectivity**
- Optional study sync to a coordinator-supplied HTTPS endpoint: `POST /api/sync` with
  `{code, device_id, days}`, matching the existing `khai-backend` contract. Full idempotent upsert.
- Cleartext traffic disabled in the manifest and the network security config; non-HTTPS addresses
  are rejected before any request.
- Offline behaviour: entries are always saved locally first and marked pending; a failed sync never
  loses data.

**Experience**
- English and Hindi, selected inside the app and independent of the phone language.
- Consent screen with a timestamp, and read-aloud Hindi consent through the system TTS engine,
  with a clear message when Hindi speech is not installed.
- One opt-in daily reminder (inexact alarm, no exact-alarm permission) that survives reboot, with
  notifications requested only when the reminder is switched on.
- Portrait-locked, single-activity shell; no AndroidX, no third-party libraries, no analytics, no ad
  SDK. Download under 1 MB, minSdk 24.
- Back handling covers predictive back on Android 13+ through `OnBackInvokedDispatcher`, with the
  legacy `onBackPressed` path retained for older releases.

### Changed from the web app

- Storage moved from browser local storage / IndexedDB to encrypted SQLite under the Android
  Keystore.
- Profile values are stored as stable codes (`50_59`, `diabetes_t2`, …) rather than display labels,
  so switching language never rewrites the record. Legacy label-based profiles are migrated on read.
- Dish names resolve through the food library at display time, so a language switch after logging
  shows the current language; the clinician PDF and food CSV always use the English canonical name.
- Typed values are persisted on render, on pause and on explicit save, rather than per keystroke.

### Known issues and limits

- **This build has not been run on a physical Android device.** The build environment has no
  hypervisor and no attached phone. It compiles, passes static checks, is signed and validates with
  `bundletool`, but runtime behaviour is unverified. See `docs/TESTING.md`.
- Screenshots in the store kit must be real device captures; none are included yet.
- The included keystore is a generated development key. Replace it and enrol in Play App Signing
  before a public release.
- Sync has no per-device authentication token and no certificate pinning. It relies on HTTPS and
  strict server-side authorisation on the participant code.
- No medication reconciliation, no appointment workflow, no clinician console, no BLE device
  ingestion, and no AI in the clinical path. Those are the roadmap, documented in
  `docs/DIGITAL_TRANSFORMATION.md`.
- Hindi copy has not yet been reviewed by a native clinical reviewer; consent wording must be
  reviewed before scale.
- Export cache files are not expired automatically.

### Verification

- `tools/check.py`: pass — string parity EN/HI, placeholder agreement, `R.*` references, icon
  densities, food-library schema, manifest, versions.
- `tools/verify.py`: pass, 30 checks — both signature schemes, 4096-bit RSA, certificate
  fingerprint, badging package/version/SDK/permissions/label, launchable activity, food library,
  Hindi resources, AAB validity, universal APK freshness and signature.
- Signed APK: v2 + v3 true (v1 false, minSdk 24), 4096-bit RSA, CN=Khai Foods Pvt Ltd,
  SHA-256 `cb450196111230aeaf105896e3e6bdf8b34b178484a2df64636b538fe963f126`.
- AAB: `bundletool validate` clean; universal APK built from the same bundle and same key.
- Every record now carries a schema version (`v: 1`), so a later reader can migrate rather than
  guess.

---

## Unreleased

- Device verification pass and real screenshots.
- Native-speaker review of Hindi consent and clinical strings.
- Server authentication for sync; per-device credentials.
- Export cache expiry.
- Coordinator console and FHIR facade (v1.1 — see the blueprint).
