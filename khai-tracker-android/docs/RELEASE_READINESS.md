# Release readiness — Khai Tracker 1.0.0

**Decision: NO-GO.** The build is structurally verifiable; it is not released.
This file records what could be prepared without a device, a Play Console account,
a live domain, working mailboxes or native-speaker reviewers. Preparing a runbook
is not the same as completing it, and nothing below should be read as a pass.

| Blocker | Status today | What was prepared | What still requires a human or external access |
| --- | --- | --- | --- |
| Physical-device testing | **Not executed** | `tools/device_smoke.ps1` installs the signed APK on an attached device, records model/version/signature, captures logcat errors and prompts for real screenshots. It refuses to run with no device. | Connect an Android 7–9 phone and an Android 13+ phone, run the script, then complete every row of `TESTING.md` and sign §11. |
| Production keystore / Play App Signing | **Partially prepared** | `tools/release_key.ps1` generated a dedicated 4096-bit RSA **upload** key outside the repo at `%LOCALAPPDATA%\KhaiTracker\release`, with a random password in a user-only file. A test build signed with it passed all 30 verify checks. | Enrol the app in Play App Signing in Play Console; back up the upload key in a team password manager; upload the AAB to Internal testing and install through Play. Google holds the app signing key. |
| Real screenshots | **Not captured** | The device script captures five real screens (`01-onboarding` … `05-guide`) into `build/device-check/` when a tester navigates and presses Enter. | Run it on a real device, review the PNGs, produce Play Store listing assets from them. No screenshots were fabricated here. |
| Live privacy URL | **Not live** | `khai-site/DEPLOY.md`, `robots.txt`, `sitemap.xml` and `.well-known/security.txt` are ready. `https://khaifoods.in/privacy.html` did not resolve from this machine. | Publish the static folder to HTTPS and verify all eleven URLs in `DEPLOY.md` §2 return 200. |
| Monitored privacy/security mailboxes | **Not established** | `khai-site/MAILBOXES.md` has provisioning, monitoring, escalation and acknowledgement templates. The site already says the process is to be established, not live. | Create and monitor both addresses, assign two named owners each, run a delivery and escalation drill. Only then remove the placeholder wording from `privacy.html` and `security.html`. |
| Native-speaker review of 24 drafts | **Not reviewed** | `tools/i18n/review_packets.py` generated 24 side-by-side packets in `docs/review/` with automated token checks and a sign-off form. All 24 report zero machine-check problems; that is not human approval. | Native speakers with clinical/consent competence review and sign each packet; record approval in the release ticket and regenerate the locale resources. |

## What is actually verifiable offline

- `py tools/check.py` — static source consistency, 0 warnings.
- `py tools/i18n/validate.py` — 48 files, 0 problems, 0 pending.
- `py tools/build.py` — signed APK, AAB and universal APK; byte-identical on repeat builds.
- `py tools/verify.py --sha256 cb450196111230aeaf105896e3e6bdf8b34b178484a2df64636b538fe963f126` — 30/30 checks for the development-signed site APK.
- Site APK pinned at `dde6cd319873f732e94488052277484da2dc3491162713c543838d2174f563c2`.

None of these proves that a screen renders, a keystroke is saved, a notification
fires, a PDF fits, a URL resolves, a mailbox is read, or a translation is safe.
The release remains NO-GO until every row above is genuinely closed.
