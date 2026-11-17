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
| `functions.html` | Full capability map: every pattern function labelled Shipped, Demo or Roadmap with its honest limit |
| `hospital.html` | Hospital deployment blueprint: roles, coordinator console, review, medication, FHIR/HL7 integration and governance — a design, not a deployment |
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

The Progress tab also illustrates a **weekly plan draft** (deep link `demo.html#plan`). With at least
four days that have both food and a reading, it builds review points with the reasoning shown beside
each one, fixed-threshold escalation flags, a confidence note, and Accept / Edit / Reject decisions
stored locally under `khai.demo.v1` → `plan.decisions`. It is illustrative only: no advice, no
diagnosis, no prescription change, and no equivalent autonomous function in the Android app.
`functions.html` maps the same pattern to Shipped / Demo / Roadmap so a roadmap item is never mistaken
for a live feature.

The Progress tab also links to a **hospital control-room illustration** (deep link `demo.html#hospital`).
It is a role-switchable view — coordinator, clinician, pharmacist — with a synthetic cohort, a review
queue, a medication-discrepancy queue and an audit trail. Decisions are stored as local demo objects
under `khai.demo.v1` → `hospital.decisions`, with a rolling `hospital.audit` trail. It is explicitly a
design illustration: no real patients, no hospital connection, and nothing deployed. `hospital.html`
publishes the full reference architecture — roles, coordinator console, clinician review, closed-loop
medication, a FHIR R4 / HL7 v2 integration contract, identity mapping and governance — with each item
marked Shipped, Demo or Roadmap. The intended first context is an aspirational public-hospital setting
in India; no hospital is named as a partner or pilot, and no deployment is claimed. A real integration
scaffold is deliberately deferred until a partner provides a concrete target-system specification.

## Attribution and claims

Built by Khai Foods Pvt Ltd, Jamshedpur. Product owner: Biswajit Roy Bardhan. No affiliation with
Zhongshan Hospital, HIMSS or any named health system is claimed. The app and site make no diagnosis,
treatment or outcome claims and are not a medical device.
