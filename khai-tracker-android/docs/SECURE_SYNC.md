# Secure institution sync and analysis

This document is the contract for the only network path in Khai Tracker. It is written for an
institution that wants to license the tool and analyse programme trends. A reference implementation
and its contract tests live in [`../../khai-sync-server`](../../khai-sync-server/README.md). It is
not hosted, no institution endpoint is configured, and no real data has been collected by this
project. The client will not send anything until all of the conditions below are met.

## 1. What the app sends

- Only days whose local `dirty` flag is set, never the full history on every retry.
- Participant code, app-generated device ID, and the encrypted-at-rest day record once decrypted
  for transport: food, BP, pulse, glucose, weight, mood, sleep, medicine status and free-text note.
- `POST {base}/api/sync` with `Content-Type: application/json`, `Accept: application/json` and
  `Authorization: Bearer <device-token>`.

Payload:

```json
{
  "schema": "khai-sync-v2",
  "code": "ABC123",
  "device_id": "uuid",
  "days": { "2026-11-24": { "...": "day record" } }
}
```

The client enforces an absolute `https://` URL with a host, rejects embedded credentials, query
strings and fragments, and does not follow redirects. `ACCESS_NETWORK_STATE` is used only to avoid
hopeless attempts. The browser demo has no sync at all.

## 2. What the app requires before sending

1. **Address** entered in Settings by the coordinator.
2. **Per-device bearer token** entered in Settings. It must be unique to the device, revocable, and
   never a participant password or a shared clinic account.
3. **Explicit consent** checkbox in Settings. Clearing the address clears the token, pin and
   consent state.
4. **Optional SPKI pin**: base64 SHA-256 of the server leaf certificate's Subject Public Key Info.
   When present, the app keeps system trust anchors but also refuses a certificate whose SPKI digest
   differs. Rotation is a coordinated change of pin and server key, with overlap where possible.

A successful HTTP 2xx response is **not** enough. The app only clears a day's `dirty` flag when the
JSON response names it:

```json
{ "accepted_dates": ["2026-11-24"] }
```

Anything else leaves the record queued. A 4xx stops the retry loop; a transport failure retries
once. A partial acknowledgement marks only the named dates synced and leaves the rest queued for
the next manual, save or resume push; the current client does not retry the remainder inside the
same call. The reference server is all-or-nothing, so partial acknowledgements should not occur in
normal operation.

## 3. Server obligations

| Area | Required control |
| --- | --- |
| Transport | TLS 1.2+ with system hostname verification, HSTS, no cleartext, no redirect from `/api/sync`, certificate from a public CA with a documented SPKI pin. |
| Authentication | Validate the bearer token on every request. Issue one token per device; support immediate revocation and rotation. Do not accept a participant code as authentication. |
| Authorisation | The token may write only its own `code`. Cross-participant reads or writes are denied. Staff access is role-based and named. |
| Persistence | Write atomically, then return `accepted_dates`. Never acknowledge a date that was not stored. Reject unknown schema versions. |
| Input limits | Cap body size and date count. Validate `code`, `device_id` and date format. Reject malformed JSON. |
| Storage | Encrypt records at rest with a separately managed key. Backups inherit the same protection and exclusion rules. |
| Audit | Log timestamp, token ID, participant code and accepted dates. Never log note text, readings or token values. |
| Retention | Document the study period, deletion after it, and a tested seven-day erasure path for access requests. |
| Analysis | Trend analysis happens on the server or in an approved analytics environment, under the consent recorded in the app. No ads, advertising IDs, third-party analytics SDKs, sale or secondary marketing use. No automated care decisions. |
| Separation | This service must not be shared with unrelated products. "No trespassing in data" means least privilege, tenant separation and no use beyond the institution agreement. |
| Incident response | Monitored security mailbox, breach notification process, and a named owner for revoking all device tokens. |

## 4. Deployment checklist before real data

The local reference server passes its HTTP/TLS/storage contract tests. That is not the same as a
deployed, configured service and does not close any item below.

- [ ] Institution endpoint and TLS certificate are provided; SPKI pin calculated and recorded.
- [ ] Token issuance, rotation and revocation tested on a named device.
- [ ] Acknowledgement tested for full, partial and rejected responses.
- [ ] Server authorisation tested with two participant codes and two device tokens.
- [ ] Retention, erasure and backup deletion tested.
- [ ] DPIA, data-processing agreement and clinic licence signed.
- [ ] Privacy/security mailboxes are live and monitored.
- [ ] Device test matrix in `TESTING.md` completed on real phones.
- [ ] Release readiness in `RELEASE_READINESS.md` changed from NO-GO only after every blocker is closed.

Until those boxes are ticked, the app remains a technical preview and the build remains NO-GO.
