# Khai Tracker — Phase-0 pilot app (MVP v2: PWA + backend sync)

Offline-first **PWA** + **multi-participant backend** (Python/Flask/SQLite).
Zero front-end dependencies; the backend is one small file.

## Run it
- **Full mode (sync works):** `cd khai-backend && python app.py` then open **http://127.0.0.1:5000**.
- **Offline demo:** double-click `index.html` — works, but sync is disabled (the app tells you why).
- **Mobile app:** open the server URL on a phone → Chrome/Android shows an *Install* banner;
  iOS: Share → Add to Home Screen. Runs standalone, offline via the service worker.
- **Language:** English / हिन्दी toggle in Settings (persists per device).

## Sync model
- Every save marks the device dirty; an 8-second debounced **auto-sync** pushes all days to
  `POST /api/sync`; also syncs when you come back online.
- `Settings → Sync`: change server URL (empty = this site), **Sync now**, status line.
- Server is last-write-wins per (participant, date). Device id is generated once and kept locally.

## Coordinator
- Live board: `/admin?token=<token>` on the server.
- Excel-ready exports: `/export/food.csv` and `/export/metrics.csv`.
- Full instructions + Render free deploy: see `../khai-backend/README.md`.

## v1 → v2 changes
- Added `manifest.json`, `sw.js`, generated icons (Pillow), install banner.
- Added sync settings UI, auto-sync, offline queue (idempotent full-push), online listener.
- Backend support with same-origin static serving so offline cache + sync run from one URL.

## v2 → v3 changes
- **Language:** English / हिन्दी runtime toggle (`lang.js` + `data-i18n`), persisted per device.
- **Clinician review:** per-participant printable summaries at `/clinician/<code>?token=` (Track D).
- **Store publishing kit:** see `../khai-store/` — Play-compatible icons, listing copy, privacy policy,
  and the Google Play (PWABuilder TWA) vs Apple (needs a Mac) pipelines.

## What it does
- **Onboarding:** participant code, age group, conditions, daily medicines (name + dose).
- **Today tab:** quick add foods per meal (breakfast/lunch/dinner/snacks), supplements, and daily readings — fasting sugar (optional), energy 1-5, mood 1-5, sleep hours, note.
- **History:** 14-day calendar, logged days highlighted; tap a day for details.
- **Progress:** day streak (today can still be pending), this-week completion %, total days logged.
- **Export:** food log CSV, daily-metrics CSV, full JSON backup. Each CSV is coordinator-ready (long format, one row per food/meal and one row per day).
- **Privacy:** everything on-device; "Erase my data" wipes it.

## Pilot data flow → Track B
1. Participant completes onboarding; logs daily for 4 weeks.
2. Day records auto-sync to the server DB (or coordinator pulls CSVs per check-in).
3. Coordinator watches the live board at `/admin`; weekly adherence = days-logged/7 per participant.
4. Phase-0 default: vectoring on food patterns + adherence curve + readings (glucose optional where the participant self-checks); NOT a clinical endpoint.

## Guardrails baked in
- Product is a **tracking tool, not medical advice** (footer + onboarding copy).
- No participant PII beyond a code the coordinator assigns; observable fields only.
- Fasting-sugar is optional and self-reported — labelled, never interpreted in-app.

## v4 roadmap
- Reminders/notifications; delta sync (only changed dates) and per-day last-write conflict visible to coordinator.
- Real-world study mode: consent hash field + coordinator-approved participant codes.