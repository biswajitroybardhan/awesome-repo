# Khai Backend — multi-participant sync + coordinator dashboard

> **Legacy PWA server only. Do not point the native Android app at this server.** It does not
> implement `khai-sync-v2`, per-device bearer tokens or `accepted_dates`, so Android days will never
> be marked synced. The v2 reference server is in [`../khai-sync-server`](../khai-sync-server/README.md).

Serves the **Khai Tracker PWA** and the **study database** from one process
(Python + Flask + SQLite). One URL = app + sync + coordinator exports.

## Run locally
```
cd khai-backend
pip install -r requirements.txt    # or: pip install flask
python app.py
```
Open http://127.0.0.1:5000 — the app loads; log a day; then check sync:
open the app's **Settings → Sync** (URL empty = this server) and press **Sync now**,
or just wait 8 s after a save (auto-sync).

Coordinator board: http://127.0.0.1:5000/admin?token=khai-demo-token
(change the token before deploying: env var `KHAI_COORD_TOKEN`.)
Per-participant expert review (share with a doctor for Track D):
http://127.0.0.1:5000/clinician/K01?token=khai-demo-token — printable summary.

## What the server provides
| Route | Purpose |
|---|---|
| `POST /api/sync` | device upserts its day records `{code, device_id, days:{date:{...}}}` |
| `GET /api/health` | uptime/heartbeat |
| `GET /api/admin-data?token=` | participant summary (JSON) |
| `GET /admin?token=` | coordinator board (HTML, per-participant **Review** links) |
| `GET /clinician/<code>?token=` | printed clinician review: adherence %, streak, weekly buckets, food frequency, recent readings — print/PDF, for expert review (Track D) |
| `GET /export/food.csv?token=` | all food logs (long format) |
| `GET /export/metrics.csv?token=` | day-level metrics (fasting, energy, mood, sleep, note) |
| `GET /privacy` | store-linkable privacy policy (serves `../khai-store/PRIVACY.md`) |

Data lives in `khai-backend/data/khai.db` (SQLite, WAL). Back it up by copying that file.
Sync is **last-write-wins per (participant, date)** — one device per participant is the
pilot model; exports merge fine across devices on later dates.

## Deploy to Render (free tier) — one service
1. Put this repo (both `khai-backend/` and `khai-app/` folders) on GitHub.
2. Render → New → Web Service → connect the repo.
3. Settings:
   - Root directory: leave at repo root
   - Build command: `pip install -r khai-backend/requirements.txt`
   - Start command: `gunicorn --chdir khai-backend app:app`
   - Env var: `KHAI_COORD_TOKEN=<long random string>`
4. Deploy. Everyone opens the Render URL; the PWA installs to home screens;
   coordinator opens `<url>/admin?token=<token>` for the live board and CSV exports.

## Security notes (pilot-appropriate, not enterprise)
- Participant sync is anonymous-by-design (code + device id only, no PII fields).
- Export/admin require a shared coordinator token (constant-time compared).
- HTTPS everywhere on Render; set `KHAI_COORD_TOKEN` — never use the demo token in production.
- No rate limiting yet — fine for a 10-participant pilot; revisit before scaling.

## Files
```
khai-backend/
  app.py             Flask app (API + exports + admin + static serving)
  requirements.txt
  data/              (created at runtime) khai.db
```