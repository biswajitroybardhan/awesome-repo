# Khai v2 institution sync server

**Status: reference implementation, running only in local tests. Not deployed. No real data has been
sent to it.** It implements the contract in
[`khai-tracker-android/docs/SECURE_SYNC.md`](../khai-tracker-android/docs/SECURE_SYNC.md).

The older [`khai-backend`](../khai-backend/README.md) is a legacy PWA server. It does **not** implement
`khai-sync-v2`, bearer tokens or `accepted_dates`, and must not be used with the native Android app.

## What this server does

- Accepts `POST /api/sync` only over HTTPS with a per-device bearer token.
- Rejects unknown schemas, malformed JSON, wrong participant codes, wrong device IDs, oversized
  bodies, invalid dates and mismatched day dates.
- Encrypts each day record with `cryptography.fernet` before it reaches SQLite. The key is supplied
  through `KHAI_SYNC_DATA_KEY` and is never written to the repository.
- Stores token digests only, not token values. Tokens are issued, listed, revoked and erased through
  local CLI commands; there is no unauthenticated admin HTTP endpoint.
- Writes all days in one transaction and returns `{"accepted_dates": [...]}` only **after** commit.
- Emits HSTS, `nosniff`, `no-referrer` and `no-store` headers; never follows or issues redirects.
- Logs only timestamp, event, token ID, participant code and accepted dates to the audit table.
  Clinical values, notes and bearer tokens are never written to the audit log.

It deliberately does **not** provide trend analysis, a staff web UI, backups, public-CA certificate
provisioning, DNS, hosted email, Play Console publishing or multi-tenant staff roles. Those remain
institution responsibilities before real data is allowed.

## Install and run the contract tests

Python 3.10+ is required. Install the one pinned dependency:

```powershell
py -m pip install -r khai-sync-server/requirements.txt
```

Run the local HTTPS contract suite:

```powershell
py khai-sync-server/test_sync.py
```

The suite generates a throwaway certificate, starts the real server on loopback, issues real tokens
through the CLI and checks authentication, authorisation, TLS, SPKI pin output, atomic writes,
idempotent retries, encryption at rest, audit redaction, revocation, erasure and retention.
Expected result: **10 tests, OK**.

## Local manual smoke run

Keep databases, certificates and keys in the ignored `khai-sync-server/local/` directory.

```powershell
New-Item -ItemType Directory khai-sync-server\local -Force | Out-Null

$env:KHAI_SYNC_DATA_KEY = py -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())"

py khai-sync-server/server.py self-signed-cert `
  --cert khai-sync-server\local\server.crt `
  --key khai-sync-server\local\server.key `
  --host localhost

py khai-sync-server/server.py init --db khai-sync-server\local\sync.db

py khai-sync-server/server.py issue-token `
  --db khai-sync-server\local\sync.db `
  --code DEMO123 `
  --device-id device-local-001 `
  --label "local test device" `
  --consent-version v1 `
  --consent-record local-demo-receipt-1

py khai-sync-server/server.py run `
  --db khai-sync-server\local\sync.db `
  --cert khai-sync-server\local\server.crt `
  --key khai-sync-server\local\server.key `
  --host 127.0.0.1 --port 8443
```

The `issue-token` command prints the bearer token **once**. Copy it into the app's Settings along
with the base URL `https://localhost:8443` and explicit consent. For an Android device on the same
network, use the machine's LAN address in the base URL; a self-signed certificate will not be
trusted by Android unless its CA is installed on that device. Real deployments must use a public CA.

`--allow-http` exists only for loopback diagnostics and refuses any non-loopback host. Never expose
it to a phone.

## SPKI pin

Print the pin for a certificate:

```powershell
py khai-sync-server/server.py spki-pin --cert khai-sync-server\local\server.crt
```

Paste the base64 SHA-256 digest into the app's optional pin field. Rotation requires issuing the new
certificate first, then changing the pin on each device; it is a coordinated change, not automatic.

## Token lifecycle, erasure and retention

```powershell
# List metadata only; token values cannot be recovered.
py khai-sync-server/server.py list-tokens --db khai-sync-server\local\sync.db

# Revoke one device immediately.
py khai-sync-server/server.py revoke-token --db khai-sync-server\local\sync.db --token-id dev_xxxxxxxx

# Delete one participant's records and revoke their tokens. Requires explicit confirmation.
py khai-sync-server/server.py erase --db khai-sync-server\local\sync.db --code DEMO123 --confirm

# Delete records older than the study retention window.
py khai-sync-server/server.py prune --db khai-sync-server\local\sync.db --days 365 --confirm
```

Erasure removes that participant's audit rows and writes a count-only erasure event with a hashed
code marker. Retention pruning writes only the cutoff and count. Neither operation retains clinical
values.

## Before real participant data

None of these are satisfied in this workspace:

| Requirement | Current state |
| --- | --- |
| `khaifoods.in` DNS and hosting | Domain does not resolve here; no host account or zone access |
| Public CA certificate and TLS termination | Only local self-signed test certificates |
| Secret manager for `KHAI_SYNC_DATA_KEY` | Operator must supply the environment variable |
| DPIA, data-processing agreement, clinic licence | Not signed |
| Retention period and backup deletion test | CLI exists; study period and backups not configured |
| Named staff roles and incident owner | Not assigned |
| Monitored `privacy@` / `security@` mailboxes | Not provisioned |
| Android 7–9 and 13+ device testing | Not executed; no device or emulator available |
| Release readiness | Still **NO-GO** in `docs/RELEASE_READINESS.md` |

Do not flip the release status until the server is hosted, the full deployment checklist in
`SECURE_SYNC.md` is ticked, and the Android device matrix has been signed off.
