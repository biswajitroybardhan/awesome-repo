# Release readiness — Khai Tracker 1.0.0

**Decision: NO-GO.** The build is structurally verifiable; it is not released.
This file records what could be prepared without a device, a Play Console account,
a live domain, working mailboxes or native-speaker reviewers. Preparing a runbook
is not the same as completing it, and nothing below should be read as a pass.

| Blocker | Status today | What was prepared | What still requires a human or external access |
| --- | --- | --- | --- |
| Physical-device testing | **Not executed** | `tools/device_smoke.ps1` installs the signed APK on an attached device, records model/version/signature, captures logcat errors and prompts for real screenshots. It refuses to run with no device. | Connect an Android 7–9 phone and an Android 13+ phone, run the script, then complete every row of `TESTING.md` and sign §11. |
| Upload signing / Play App Signing | **Partially prepared** | `tools/release_key.ps1` generated a dedicated 4096-bit RSA **upload** key outside the repo at `%LOCALAPPDATA%\KhaiTracker\release`, with a random password in a user-only file. The current APK, universal APK and AAB are signed with it; signing secrets no longer appear in source or on build command lines. | Enrol the app in Play App Signing in Play Console; back up the upload key in a team password manager; upload the AAB to Internal testing and install through Play. Google holds the app signing key. |
| Real screenshots | **Not captured** | The device script captures five real screens (`01-onboarding` … `05-guide`) into `build/device-check/` when a tester navigates and presses Enter. | Run it on a real device, review the PNGs, produce Play Store listing assets from them. No screenshots were fabricated here. |
| Live privacy URL | **Not live** | `khai-site/DEPLOY.md`, `robots.txt`, `sitemap.xml` and `.well-known/security.txt` are ready. `https://KHAI.com/privacy.html` did not resolve from this machine. | Publish the static folder to HTTPS and verify all eleven URLs in `DEPLOY.md` §2 return 200. |
| Monitored privacy/security mailboxes | **Not established** | `khai-site/MAILBOXES.md` has provisioning, monitoring, escalation and acknowledgement templates. The site already says the process is to be established, not live. | Create and monitor both addresses, assign two named owners each, run a delivery and escalation drill. Only then remove the placeholder wording from `privacy.html` and `security.html`. |
| Native-speaker review of 24 drafts | **Not reviewed** | `tools/i18n/review_packets.py` generated 24 side-by-side packets in `docs/review/` with automated token checks and a sign-off form. All 24 report zero machine-check problems; that is not human approval. Draft locales are no longer selectable in the app picker. | Native speakers with clinical/consent competence review and sign each packet; record approval in the release ticket and regenerate the locale resources. |
| Institution sync backend | **Reference server built; not deployed** | `khai-sync-server/` implements `khai-sync-v2` with revocable per-device tokens, consent binding, TLS 1.2+, HSTS, no redirects, encrypted-at-rest records, token-hash storage, minimal audit logs, atomic `accepted_dates`, erasure and retention CLI. `py ../khai-sync-server/test_sync.py` passes 10 contract tests. `docs/SECURE_SYNC.md` defines the contract. | Provision DNS, hosting and a public-CA certificate; supply the data key through a secret manager; issue/rotate tokens on named devices; record the SPKI pin; configure the study retention period and encrypted backups; assign named staff/incident owners; complete a DPIA and penetration test. Nothing is live. |
| Clinic/institution licence and revenue | **Not concluded** | The chosen direction is institutional licensing plus both Play and direct-APK distribution, without ads or third-party analytics SDKs. | Lawyer-reviewed licence and data-processing terms, pricing, named pilot institution, Play Console account and a live payment/contract path. No money has been collected and no listing is live. |

## What is actually verifiable offline

- `py tools/check.py` — static source consistency and the security assertions added after the audit, 0 warnings.
- `py tools/i18n/validate.py` — 48 files, 0 problems, 0 pending.
- `py ../khai-sync-server/test_sync.py` — 10 local HTTPS contract tests covering bearer auth, revocation, two-code isolation, schema/date validation, atomic writes, idempotent retries, encryption at rest, audit redaction, erasure, retention and SPKI pin output.
- `py tools/build.py` — APK, AAB and universal APK signed with the dedicated upload key; signing secrets come from a user-only file or environment, never from source or argv.
- `py tools/verify.py --sha256 20531590f7adf747957e69b87f5a82a3e318252f038ba91c01d7fb07bb95105b` — 31/31 checks for the upload-key-signed artefacts.
- Site APK pinned at `40803ec96f6068ffe4dc863f7a429e496db33fa42c7424e9110e377d1c693b4f` (1,284,457 bytes).
- The audit fixes in this pass cover signing-secret exposure, CSV formula injection, export-cache residue, provider path validation, profile encryption, PIN backoff, draft-language gating, bundletool pinning and release-gate assertions. The reference sync server is implemented and tested locally, but it is **not hosted, configured or connected to any device**.

None of these proves that a screen renders, a keystroke is saved, a notification
fires, a PDF fits, a URL resolves, a mailbox is read, or a translation is safe.
The release remains NO-GO until every row above is genuinely closed.
