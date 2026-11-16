# Khai Tracker — repo layout

Two clients, one study backend.

- `khai-tracker-android/` — **native Android app** (Kotlin, no AndroidX or third-party
  libraries). The shipping client: encrypted offline-first record, EN/हिन्दी, CSV / PDF /
  JSON / FHIR R4 export, optional sync, signed APK + AAB. See its
  [`README.md`](khai-tracker-android/README.md) and the
  [digital-transformation blueprint](khai-tracker-android/docs/DIGITAL_TRANSFORMATION.md).
- `khai-app/` — the PWA (offline-first, bilingual EN/हिन्दी). No build step. Kept as the
  zero-install option for desktop and for phones that cannot install the APK.
- `khai-backend/` — Flask + SQLite server: serves the PWA, `/api/sync`,
  `/admin` coordinator board, `/clinician/<code>` review pages, CSV exports,
  `/privacy`.
- `khai-store/` — Google Play / Apple App Store publishing kit for the web client (icons,
  listing copy, privacy policy). Privacy policy is served live at `/<url>/privacy`.

Run/deploy: see `khai-backend/README.md`.
Android build and release: see `khai-tracker-android/README.md` and
`khai-tracker-android/PLAY_STORE.md`.
Store: see `khai-store/README.md`.

> Strategy, applications, incorporation and relocation documents are kept
> outside this public repository by design.
