# Khai Tracker website

A small, self-contained static site for Khai Tracker. No framework, no build step, no server-side
code, no analytics and no network calls. Open `index.html` directly or serve the folder with any
static file host.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing page: the product, the closed loop, clinician sheet, download, FAQ |
| `demo.html` | Interactive browser demo — **clearly marked as a demo**, not for real clinical records |
| `blueprint.html` | The digital-transformation blueprint: what v1.0 does, what needs a server, roadmap |
| `security.html` | Encryption, PIN, sync, build notes, APK verification and known gaps |
| `privacy.html` | Participant-first privacy notice, with a separate warning about the demo |
| `404.html` | Not-found page |
| `styles/site.css`, `styles/demo.css` | Design systems for the marketing pages and the demo |
| `scripts/site.js` | Theme, mobile menu, copy buttons, footer year — no network |
| `scripts/demo/*.js` | The demo's data model, rules, screens and event handling |
| `scripts/foods.js` | Generated 83-dish food library (`window.KHAI_FOODS`) |
| `assets/` | Mark, icon, social image |
| `files/` | Signed demo APK plus its `.sha256` checksum |

## Running locally

```sh
cd khai-site
py -m http.server 8788 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8788/`. The demo also works from `file://` in most browsers, but a local
server is recommended so downloads and `localStorage` behave consistently.

## Hosting

Any static host works (GitHub Pages, Netlify, S3, nginx). Requirements:

- Serve `index.html` for `/` and map unknown paths to `404.html` if the host supports it.
- Serve `.html`, `.css`, `.js`, `.svg`, `.png` and `.apk` with their normal MIME types. For the APK,
  `application/vnd.android.package-archive` is ideal; `application/octet-stream` also works.
- No redirects are needed. Canonical URLs assume `https://khaifoods.in/`.
- HTTPS is recommended so the copy-to-clipboard button can use the modern Clipboard API. There is a
  `document.execCommand` fallback for other contexts.

## The demo promise

The browser demo mirrors the Kotlin `DayEntry` model and rules: offline storage in `localStorage`
under `khai.demo.v1`, 21-day completeness, ranged food estimates, medicine status, BP/pulse/glucose/
weight, EN/HI, CSV, JSON, FHIR R4 and a printable clinician sheet.

It deliberately has **no encryption, Android Keystore, PIN, sync, reminders, analytics or upload**.
Nothing leaves the browser. Do not enter real clinical records into it. The APK on this site is a
**development-signed technical preview**, not a Play Store release; verify its SHA-256 as described
on `security.html`.

## Attribution and claims

Built by Khai Foods Pvt Ltd, Jamshedpur. Product owner: Biswajit Roy Bardhan. No affiliation with
Zhongshan Hospital, HIMSS or any named health system is claimed. The app and site make no diagnosis,
treatment or outcome claims and are not a medical device.
