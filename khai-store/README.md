# Khai Tracker — App Store publishing kit

Getting Khai Tracker **downloadable from Google Play and the Apple App Store**.
Read this entire file first — the two platforms are not equal from this Windows machine.

## Hard facts (verified constraints)
| Platform | Can be built from this PC? | Developer account | Typical timeline |
|---|---|---|---|
| **Google Play** | **Yes** (via TWA wrapper hosted online — no Android Studio needed) | Play Console, **$25 one-time** | 1–3 days after a public URL exists |
| **Apple App Store** | **No.** iOS builds require macOS + Xcode, then App Store review. The Windows box cannot produce or upload an iOS build. | Apple Developer, **$99/year** | usually ~1–2 weeks after the app exists (plus review) |

Prerequisite for BOTH: a **public HTTPS URL** serving the app + backend. That means deploying
`khai-backend` first (Render free tier — see `khai-backend/README.md`). Stores do not accept `127.0.0.1`.

**Recommended order:**
1. Deploy the backend to Render → confirm `<url>` serves the app, `/admin`, `/clinician`, sync.
2. **Google Play first** (no Apple dependency) — pilot + validation can start with real installs.
3. **iOS second** — on a Mac (yours or borrowed): free options include rebuilding the same PWA
   as a small native wrapper (Flutter/Capacitor) or web-based shells; submit with TestFlight → review.

---

## PIPELINE A — Google Play (TWA / PWABuilder)
1. Deploy to Render (HTTPS). Make sure `manifest.json` icons/scope/start_url are correct at the hosted root.
2. Go to **https://www.pwabuilder.com** → enter the hosted URL.
3. Generate an **Android package (TWA + Bubblewrap)** — PWABuilder produces a signed **AAB** online (no Android Studio needed).
4. Also generate the **iOS package** for future use (see pipeline B note).
5. Sign up at **https://play.google.com/console** → **Create app** → upload the AAB under "App bundle explorer".
6. Fill the listing using `store-listing.md`; upload assets from `assets/`; answer the data-safety form (mapped below).
7. Set up **internal testing** (opt-in list) → review with the track → choose "Production" when ready.
8. Track in Play Console; typical review 1–3 days; app store link like `play.google.com/store/apps/details?id=`.

### If you later want a true native Android build (optional)
- Install Android Studio + Flutter on any Windows PC, wrap `khai-app/` as a Capacitor or Flutter project; sign with a **keystore you own**; upload the AAB. Keep the keystore safe (losing it = can't update the app).

## PIPELINE B — Apple App Store (requires a Mac)
1. Any Mac (macOS recent) → first run **Xcode** once (accepts licenses), then `flutter`/Capacitor wrapper, or use PWABuilder's generated iOS wrapper material as a starting point.
2. Enroll in the **Apple Developer Program ($99/year)** → create the App ID, Bundle ID (e.g., `in.khai.tracker`).
3. Build with **Xcode** → **Archive** → **App Store Connect**: upload via Xcode/Transporter.
4. App Store Connect → App → configure listing (use `store-listing.md`; App screenshots must be from **real iPhone/iPad** captures; placeholders in `assets/` are layout-only).
5. Sign the **privacy** declarations, set export compliance, then **Submit for Review**.
6. First approval typically ships via **TestFlight** first; production release after.

---
## Assets already generated (`khai-store/assets/`)
| File | Purpose | Store requirement |
|---|---|---|
| `play-icon-512.png` | Play primary icon | 512×512, opaque, no alpha ✓ |
| `apple-icon-1024.png` | App Store icon | 1024×1024, no alpha ✓ |
| `play-feature-graphic-1024x500.png` | Play feature graphic | 1024×500 (can add logo/tagline later) ✓ |
| `shot-1/2/3-*.png` | **Layout placeholders only** | replacement by real device screenshots required |
| `../khai-app/icons/icon-*.png` | PWA icons (also fine) | — |
| Privacy policy | served live at `<url>/privacy` (from `PRIVACY.md`) | link this in both consoles |

## Data-safety / privacy answers (copy into the forms)
### Google Play data safety (all questions)
- **Data shared/collected:** none beyond what the participant enters (food items, supplements, self-ratings, optional fasting sugar, notes, participant code).
- **Category:** health/fitness **observational user input** — declared "user-provided, collected for research study, not sold, encrypted in transit".
- **Collected but NOT shared with third parties:** device identifier (locally generated, sync key only).
- **Permitted uses:** analytics/study research only. **Not sold, not used for ads.**
- **Deletion:** user can erase all local data in-app; server rows removable by coordinator.

### Apple data-collection declarations
- "User Data Not Collected" is **not** claimable — tick: Health & Fitness (user input), Contact Info (only participant-entered), Identifiers (device id). Declare encryption in transit (TLS), app tracking transparency = N/A (no tracking).

## The one liners
- Tagline: *Simple food + health tracking for the Khai study.*
- Long deskription basis (EN): 4–6 lines: what it does, bilingual (EN/हिन्दी), offline-first, study tool not medical advice, data stays private, consent-based research use.

See `store-listing.md` for the full fill-in copy and `PRIVACY.md` for the policy text to link.