# Khai Tracker — native Android

A production-shaped, offline-first chronic-care measurement app for the Khai Foods pilot in
Jamshedpur, and the first node of the wider Khai digital-transformation model described in
[`docs/DIGITAL_TRANSFORMATION.md`](docs/DIGITAL_TRANSFORMATION.md).

It is a **tracking instrument**, not a medical device. It records what a participant ate, took and
measured, keeps that record encrypted on the phone, and hands a clinician a one-page summary and a
FHIR R4 file on request. It never diagnoses, never doses and never changes a prescription.

- Package: `in.khaifoods.tracker`
- Version: 1.0.0 (versionCode 1)
- minSdk 24 (Android 7.0) · targetSdk 35 (Android 15)
- English and हिन्दी, chosen in-app and independent of the phone language
- No AndroidX, no third-party libraries, no third-party analytics SDK, no ad SDK

## Status — read this before shipping

| Item | State |
| --- | --- |
| Kotlin compiles, APK and AAB build | Yes, clean |
| Static release checks (`tools/check.py`) | Pass |
| Artefact checks (`tools/verify.py`) | Pass, 31 checks — signature, badging, permissions, AAB, locales, universal APK |
| APK signed (v2 + v3) | Yes, 4096-bit RSA, CN=Khai Foods Pvt Ltd |
| AAB validates with bundletool | Yes, with SHA-256-pinned bundletool |
| Institution sync backend | **Reference server built, not deployed** — see `../khai-sync-server/README.md` and `docs/SECURE_SYNC.md` |
| Run on a physical Android device | **Not yet** — this build environment has no hypervisor and no attached phone |
| Play screenshots | **Not yet** — must be real device captures, not renders |

The binary is real and installable, but it has not been executed on hardware. Treat every item in
[`docs/TESTING.md`](docs/TESTING.md) as unverified until someone runs it on a phone and signs the
checklist.

## Build

Requirements, all outside the repository:

- JDK 17
- Android SDK platform 35 and build-tools 35.0.0 (`ANDROID_HOME` or `%LOCALAPPDATA%\Android\Sdk`)
- Kotlin compiler 2.0.21 (`KOTLINC`, or `%LOCALAPPDATA%\Android\Sdk\kotlinc`)
- `tools/bundletool.jar`

No Gradle, no Android Studio project. `tools/build.py` drives `aapt2 → kotlinc → javac → d8 →
zipalign → apksigner → bundletool` directly.

```powershell
py tools\check.py          # source gate: strings, resources, icons, foods, manifest
py tools\build.py          # APK + AAB + universal APK
py tools\build.py --apk    # APK only, faster loop
py tools\verify.py         # artefact gate: signature, badging, permissions, AAB, locales
```

`verify.py --sha256 <hex>` pins the expected certificate, so a build signed by the wrong key
fails instead of shipping. Outputs in `build/`:

- `khai-tracker-1.0.0.apk` — version-specific APK, upload/test artefact
- `khai-tracker-1.0.0.aab` — upload to Play Console
- `apks-out/universal.apk` — one signed APK built from the AAB, install on any test phone

Builds now use the dedicated **upload key** held outside the repo at
`%LOCALAPPDATA%\KhaiTracker\release\khai-upload.jks` (alias `khai-upload`). Set
`KHAI_KEYSTORE`, `KHAI_KEYSTORE_PASS_FILE` and `KHAI_KEY_ALIAS`; the build never reads a password
from source or takes one on a command line. A development keystore can still be generated on first
build, but it is not used for published artefacts. Enrol in Play App Signing before release.

Certificate SHA-256 for this build:
`20531590f7adf747957e69b87f5a82a3e318252f038ba91c01d7fb07bb95105b`

## What is in the app

- **Today** — four meal slots with an 83-dish regional food library (ranges, not single numbers),
  medicine status (taken / skipped / changed) against the profile, BP, pulse, glucose with
  fasting/post-food context, weight, energy, mood, sleep, note. One screen, under two minutes.
- **History** — 21-day grid plus the ten most recent days at a glance.
- **Progress** — completeness, streak, descriptive personal insights (minimum-pairing rules),
  exports, and the participant's own erase control.
- **Settings** — profile, language, one daily reminder, 4-digit app lock, optional study sync,
  about and disclaimer.
- **Onboarding** — participant code, age band, conditions, medicines, explicit timestamped consent,
  consent read aloud in Hindi via the system TTS engine.

All labels are bilingual. Stored values are stable codes (`50_59`, `diabetes_t2`), so a language
change never rewrites the record.

## Data and security

- One record per participant per day, serialised to JSON, encrypted with **AES-256-GCM** using a
  non-exportable keystore key, then written to SQLite. The database alone reveals nothing.
- AAD is `code|date`, so ciphertext cannot be moved between participants or days.
- `allowBackup=false` and extraction rules exclude databases, prefs and files from cloud backup and
  device transfer.
- PIN is stored as a salted PBKDF2-HMAC-SHA1 hash (120 000 iterations). It is a UI gate, not a
  second encryption layer — see [`SECURITY.md`](SECURITY.md) for the honest threat model.
- Sync is opt-in, HTTPS-only, and sends only dirty days to `POST /api/sync` with schema
  `khai-sync-v2`, a per-device bearer token and recorded consent. It clears a day only after the
  server acknowledges that exact date. See [`docs/SECURE_SYNC.md`](docs/SECURE_SYNC.md) and the
  reference server in [`../khai-sync-server`](../khai-sync-server/README.md).
- Exports: food CSV, metrics CSV, clinician PDF, full JSON backup, FHIR R4 collection bundle
  (vitals and weight only; diet estimates stay out of clinical records).

## Repository layout

```
app/AndroidManifest.xml
app/assets/foods.json              # 83 regional dishes, ranges and meal slots
app/res/values|values-hi           # 184 strings each, arrays of stable codes
app/res/mipmap-*                   # launcher icons incl. adaptive
app/src/in/khaifoods/tracker/      # 23 Kotlin files, framework widgets only
tools/build.py                     # aapt2/kotlinc/d8/apksigner/bundletool pipeline
tools/check.py                     # pre-upload static gate (source)
tools/verify.py                    # pre-upload artefact gate (APK/AAB)
tools/make_icons.py                # icon generator (Pillow)
docs/DIGITAL_TRANSFORMATION.md     # Zhongshan-informed global blueprint
docs/TESTING.md                    # device checklist, currently unexecuted
PLAY_STORE.md                      # listing copy, data safety, declarations
PRIVACY.md                         # policy for the native app
SECURITY.md                        # threat model and crypto notes
```

## Documentation

- [Data model](docs/DATA_MODEL.md) — what is stored, in what shape, and what leaves the phone.
- [Digital transformation blueprint](docs/DIGITAL_TRANSFORMATION.md) — what v1.0 already does, what
  comes next, and how the Zhongshan pattern becomes a global, offline-first operating model.
- [Device test checklist](docs/TESTING.md)
- [Play Store kit](PLAY_STORE.md)
- [Privacy](PRIVACY.md) · [Security](SECURITY.md) · [Changelog](CHANGELOG.md)

## Ownership

Product owner: **Biswajit Roy Bardhan**. Built for **Khai Foods Pvt Ltd, Jamshedpur, Jharkhand,
India**. The app incorporates patterns that are public knowledge in digital health — closed-loop
medication safety, longitudinal records, internet-hospital follow-up, clinician-in-the-loop
assistance, FHIR interoperability — and attributes none of its design to any other organisation.
