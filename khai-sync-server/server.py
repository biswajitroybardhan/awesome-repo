#!/usr/bin/env python3
"""Reference institution sync server for Khai Tracker.

This is a self-contained implementation of docs/SECURE_SYNC.md. It is not a hosted
service and has not been deployed. Records are encrypted at rest with a key supplied
through KHAI_SYNC_DATA_KEY; device tokens are stored only as SHA-256 digests.

Run behind a reverse proxy with a public CA certificate in production. The built-in
TLS mode is useful for local contract tests and a single-institution pilot.
"""

import argparse
import base64
import hashlib
import hmac
import ipaddress
import json
import os
import re
import secrets
import sqlite3
import ssl
import sys
from datetime import datetime, timedelta, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit

from cryptography import x509
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.x509 import (
    NameAttribute,
    NameOID,
    load_pem_x509_certificate,
)

SCHEMA = "khai-sync-v2"
MAX_BODY = 1_048_576
MAX_DAYS = 100
MAX_NOTE = 4_000
CODE_RE = re.compile(r"^[A-Z0-9]{3,16}$")
DEVICE_RE = re.compile(r"^[A-Za-z0-9][A-Za-z0-9_-]{7,63}$")
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def now_iso():
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def sha256_hex(value):
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def digest_code(code):
    return hashlib.sha256(code.encode("utf-8")).hexdigest()[:16]


def connect(db_path):
    conn = sqlite3.connect(db_path, timeout=10, isolation_level=None)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA synchronous=FULL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db(conn):
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS devices (
            token_digest   TEXT PRIMARY KEY,
            token_id       TEXT NOT NULL UNIQUE,
            code           TEXT NOT NULL,
            device_id      TEXT NOT NULL,
            label          TEXT NOT NULL,
            consent_version TEXT NOT NULL,
            consent_at     TEXT NOT NULL,
            consent_record TEXT NOT NULL,
            active         INTEGER NOT NULL DEFAULT 1,
            created_at     TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS devices_code ON devices(code);

        CREATE TABLE IF NOT EXISTS days (
            code       TEXT NOT NULL,
            date       TEXT NOT NULL,
            device_id  TEXT NOT NULL,
            payload    BLOB NOT NULL,
            updated_at TEXT NOT NULL,
            PRIMARY KEY (code, date)
        );
        CREATE INDEX IF NOT EXISTS days_updated ON days(updated_at);

        CREATE TABLE IF NOT EXISTS audit (
            id        INTEGER PRIMARY KEY AUTOINCREMENT,
            at        TEXT NOT NULL,
            event     TEXT NOT NULL,
            token_id  TEXT,
            code      TEXT,
            detail    TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS audit_at ON audit(at);
        """
    )


def fernet_from_env():
    raw = os.environ.get("KHAI_SYNC_DATA_KEY", "").strip()
    if not raw:
        raise SystemExit("KHAI_SYNC_DATA_KEY is required (Fernet key, base64 urlsafe 32-byte key)")
    try:
        return Fernet(raw.encode("ascii"))
    except Exception as exc:
        raise SystemExit("KHAI_SYNC_DATA_KEY is not a valid Fernet key: %s" % exc)


def audit(conn, event, token_id=None, code=None, detail=None):
    conn.execute(
        "INSERT INTO audit (at, event, token_id, code, detail) VALUES (?, ?, ?, ?, ?)",
        (now_iso(), event, token_id, code, json.dumps(detail or {}, separators=(",", ":"))),
    )


def validate_identity(code, device_id):
    if not isinstance(code, str) or not CODE_RE.fullmatch(code):
        raise ValueError("code must be 3-16 uppercase letters or digits")
    if not isinstance(device_id, str) or not DEVICE_RE.fullmatch(device_id):
        raise ValueError("device_id is not a valid random device identifier")


def validate_date(value):
    if not isinstance(value, str) or not DATE_RE.fullmatch(value):
        return False
    try:
        datetime.strptime(value, "%Y-%m-%d")
        return True
    except ValueError:
        return False


def reject_json_constant(_value):
    raise ValueError("non-finite JSON number is not allowed")


class SyncHandler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "KhaiSync/1.0"
    sys_version = ""

    def __init__(self, request, client_address, server, db=None, fernet=None):
        self.db = db
        self.fernet = fernet
        super().__init__(request, client_address, server)

    def log_message(self, _format, *_args):
        # Request lines and bodies are never written to the general log. Only the
        # explicit, minimal audit table records accepted sync activity.
        return

    def _headers(self, status, extra=None):
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        self.send_header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
        self.send_header("Connection", "close")
        for key, value in (extra or {}).items():
            self.send_header(key, value)
        self.close_connection = True

    def send_json(self, status, obj, extra=None):
        body = json.dumps(obj, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
        self._headers(status, extra)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def error(self, status, code, message, extra=None):
        self.send_json(status, {"error": code, "message": message}, extra)

    def _request_path(self):
        parts = urlsplit(self.path)
        if parts.query or parts.fragment:
            self.error(400, "bad_request", "query strings and fragments are not accepted")
            return None
        return parts.path

    def do_GET(self):
        path = self._request_path()
        if path is None:
            return
        if path == "/healthz":
            self.send_json(200, {"status": "ok", "schema": SCHEMA})
        elif path == "/api/sync":
            self.error(405, "method_not_allowed", "use POST", {"Allow": "POST"})
        else:
            self.error(404, "not_found", "unknown endpoint")

    def do_POST(self):
        path = self._request_path()
        if path is None:
            return
        if path != "/api/sync":
            self.error(404, "not_found", "unknown endpoint")
            return
        self.handle_sync()

    def _read_body(self):
        raw_length = self.headers.get("Content-Length")
        if raw_length is None or self.headers.get("Transfer-Encoding"):
            self.error(400, "bad_request", "Content-Length is required and chunking is not accepted")
            return None
        try:
            length = int(raw_length)
        except (TypeError, ValueError):
            self.error(400, "bad_request", "invalid Content-Length")
            return None
        if length <= 0 or length > MAX_BODY:
            self.error(413, "payload_too_large", "body must be 1-1048576 bytes")
            return None
        body = self.rfile.read(length)
        if len(body) != length:
            self.error(400, "bad_request", "incomplete body")
            return None
        return body

    def _authenticate(self):
        header = self.headers.get("Authorization", "")
        if not header.startswith("Bearer "):
            self.error(401, "unauthorized", "bearer token required", {"WWW-Authenticate": "Bearer"})
            return None
        token = header[7:].strip()
        if len(token) < 20 or len(token) > 200:
            self.error(401, "unauthorized", "invalid token", {"WWW-Authenticate": "Bearer"})
            return None
        digest = sha256_hex(token)
        row = self.db.execute(
            "SELECT token_id, code, device_id, consent_version, consent_at, consent_record, active "
            "FROM devices WHERE token_digest = ?",
            (digest,),
        ).fetchone()
        if row is None or not row["active"]:
            # Compare against a dummy digest so revocation and unknown tokens take
            # the same code path even when the lookup misses.
            hmac.compare_digest(digest, "0" * 64)
            self.error(401, "unauthorized", "invalid or revoked token", {"WWW-Authenticate": "Bearer"})
            return None
        if not row["consent_version"] or not row["consent_at"] or not row["consent_record"]:
            self.error(403, "consent_not_recorded", "token has no recorded consent")
            return None
        return row

    def _validate_payload(self, body, device):
        if self.headers.get("Content-Type", "").split(";")[0].strip().lower() != "application/json":
            self.error(415, "unsupported_media_type", "application/json is required")
            return None
        accept = self.headers.get("Accept", "")
        if "application/json" not in accept and "*/*" not in accept:
            self.error(406, "not_acceptable", "application/json is required")
            return None
        try:
            payload = json.loads(body.decode("utf-8"), parse_constant=reject_json_constant)
        except (UnicodeDecodeError, ValueError):
            self.error(400, "invalid_json", "malformed JSON body")
            return None
        if not isinstance(payload, dict):
            self.error(400, "invalid_payload", "JSON object required")
            return None
        if payload.get("schema") != SCHEMA:
            self.error(400, "unknown_schema", "supported schema: %s" % SCHEMA)
            return None

        code = payload.get("code")
        device_id = payload.get("device_id")
        try:
            validate_identity(code, device_id)
        except ValueError as exc:
            self.error(400, "invalid_identity", str(exc))
            return None
        if code != device["code"]:
            self.error(403, "cross_participant_denied", "token may only write its own code")
            return None
        if device_id != device["device_id"]:
            self.error(403, "device_mismatch", "token is bound to one device")
            return None

        days = payload.get("days")
        if not isinstance(days, dict) or not days or len(days) > MAX_DAYS:
            self.error(400, "invalid_days", "days must contain 1-%d date keys" % MAX_DAYS)
            return None
        accepted = []
        for date, record in days.items():
            if not validate_date(date):
                self.error(400, "invalid_date", "dates must be real YYYY-MM-DD values")
                return None
            if not isinstance(record, dict):
                self.error(400, "invalid_day", "each day must be a JSON object")
                return None
            # The current app leaves day.code blank and makes the envelope code
            # authoritative; accept blank, missing or matching values only.
            day_code = record.get("code", code)
            if day_code not in ("", None, code):
                self.error(403, "cross_participant_denied", "day code does not match envelope")
                return None
            if record.get("date", date) != date:
                self.error(400, "invalid_day", "day.date must match its key")
                return None
            note = record.get("note", "")
            if not isinstance(note, str) or len(note) > MAX_NOTE:
                self.error(400, "invalid_day", "note must be text of at most %d characters" % MAX_NOTE)
                return None
            accepted.append(date)
        return code, device_id, days, sorted(accepted)

    def handle_sync(self):
        self.connection.settimeout(30)
        body = self._read_body()
        if body is None:
            return
        device = self._authenticate()
        if device is None:
            return
        validated = self._validate_payload(body, device)
        if validated is None:
            return
        code, device_id, days, accepted = validated

        stored = []
        try:
            self.db.execute("BEGIN IMMEDIATE")
            for date in accepted:
                plain = json.dumps(days[date], separators=(",", ":"), ensure_ascii=False).encode("utf-8")
                encrypted = self.fernet.encrypt(plain)
                self.db.execute(
                    "INSERT INTO days (code, date, device_id, payload, updated_at) "
                    "VALUES (?, ?, ?, ?, ?) "
                    "ON CONFLICT(code, date) DO UPDATE SET "
                    "device_id = excluded.device_id, payload = excluded.payload, "
                    "updated_at = excluded.updated_at",
                    (code, date, device_id, encrypted, now_iso()),
                )
                stored.append(date)
            audit(
                self.db,
                "sync_accepted",
                token_id=device["token_id"],
                code=code,
                detail={"dates": stored, "count": len(stored)},
            )
            self.db.execute("COMMIT")
        except Exception:
            self.db.execute("ROLLBACK")
            self.error(500, "storage_failed", "record was not persisted")
            return

        # Only after COMMIT does the server acknowledge a date. The client keeps
        # any unacknowledged day dirty and retries it.
        self.send_json(200, {"accepted_dates": stored})


class SyncServer(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True

    def __init__(self, address, db_path, fernet):
        self.db_path = db_path
        self.fernet = fernet
        super().__init__(address, SyncHandler)

    def finish_request(self, request, client_address):
        db = connect(self.db_path)
        try:
            self.RequestHandlerClass(request, client_address, self, db=db, fernet=self.fernet)
        finally:
            db.close()


def cmd_init(args):
    conn = connect(args.db)
    try:
        init_db(conn)
    finally:
        conn.close()
    print("initialised %s" % args.db)


def cmd_run(args):
    if bool(args.cert) != bool(args.key):
        raise SystemExit("--cert and --key must be supplied together")
    if not args.cert and not args.allow_http:
        raise SystemExit("refusing plaintext HTTP; supply --cert/--key or --allow-http for localhost tests")
    if args.allow_http and args.host not in ("127.0.0.1", "localhost", "::1"):
        raise SystemExit("--allow-http is only permitted on loopback")

    fernet = fernet_from_env()
    conn = connect(args.db)
    try:
        init_db(conn)
    finally:
        conn.close()

    httpd = SyncServer((args.host, args.port), args.db, fernet)
    if args.cert:
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        context.minimum_version = ssl.TLSVersion.TLSv1_2
        context.load_cert_chain(args.cert, args.key)
        httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
        print("listening on https://%s:%d" % (args.host, args.port))
    else:
        print("WARNING: plaintext HTTP on loopback only; never expose this to devices")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()


def cmd_issue_token(args):
    try:
        validate_identity(args.code, args.device_id)
    except ValueError as exc:
        raise SystemExit(str(exc))
    if not args.consent_version.strip() or not args.consent_record.strip():
        raise SystemExit("--consent-version and --consent-record are required")
    token = secrets.token_urlsafe(32)
    token_id = "dev_" + secrets.token_hex(8)
    conn = connect(args.db)
    try:
        init_db(conn)
        conn.execute(
            "INSERT INTO devices (token_digest, token_id, code, device_id, label, "
            "consent_version, consent_at, consent_record, active, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)",
            (
                sha256_hex(token),
                token_id,
                args.code,
                args.device_id,
                args.label,
                args.consent_version.strip(),
                args.consent_at or now_iso(),
                args.consent_record.strip(),
                now_iso(),
            ),
        )
        audit(conn, "token_issued", token_id=token_id, code=args.code,
              detail={"consent_version": args.consent_version.strip()})
    finally:
        conn.close()
    print("token_id: %s" % token_id)
    print("code: %s" % args.code)
    print("token (show once): %s" % token)


def cmd_revoke_token(args):
    conn = connect(args.db)
    try:
        init_db(conn)
        row = conn.execute("SELECT code FROM devices WHERE token_id = ?", (args.token_id,)).fetchone()
        if row is None:
            raise SystemExit("unknown token_id")
        conn.execute("UPDATE devices SET active = 0 WHERE token_id = ?", (args.token_id,))
        audit(conn, "token_revoked", token_id=args.token_id, code=row["code"], detail={})
    finally:
        conn.close()
    print("revoked %s" % args.token_id)


def cmd_list_tokens(args):
    conn = connect(args.db)
    try:
        init_db(conn)
        rows = conn.execute(
            "SELECT token_id, code, device_id, label, consent_version, active, created_at "
            "FROM devices ORDER BY created_at, token_id"
        ).fetchall()
    finally:
        conn.close()
    for row in rows:
        print("%s\t%s\t%s\t%s\t%s\t%s\t%s" % (
            row["token_id"], row["code"], row["device_id"], row["label"],
            row["consent_version"], "active" if row["active"] else "revoked", row["created_at"],
        ))


def cmd_erase(args):
    if not args.confirm:
        raise SystemExit("refusing to erase without --confirm")
    conn = connect(args.db)
    try:
        init_db(conn)
        days_removed = conn.execute("DELETE FROM days WHERE code = ?", (args.code,)).rowcount
        tokens_revoked = conn.execute(
            "UPDATE devices SET active = 0 WHERE code = ? AND active = 1", (args.code,)
        ).rowcount
        conn.execute("DELETE FROM audit WHERE code = ?", (args.code,))
        audit(conn, "erasure_completed", detail={
            "code_digest": digest_code(args.code),
            "days_removed": days_removed,
            "tokens_revoked": tokens_revoked,
        })
    finally:
        conn.close()
    print("erased %s: %d day(s), %d token(s) revoked" % (args.code, days_removed, tokens_revoked))


def cmd_prune(args):
    if not args.confirm:
        raise SystemExit("refusing to prune without --confirm")
    cutoff = (datetime.now(timezone.utc) - timedelta(days=args.days)).replace(microsecond=0)
    cutoff_iso = cutoff.isoformat().replace("+00:00", "Z")
    conn = connect(args.db)
    try:
        init_db(conn)
        removed = conn.execute("DELETE FROM days WHERE updated_at < ?", (cutoff_iso,)).rowcount
        audit(conn, "retention_prune", detail={
            "cutoff": cutoff_iso, "days_removed": removed,
        })
    finally:
        conn.close()
    print("pruned %d record(s) older than %s" % (removed, cutoff_iso))


def cmd_spki_pin(args):
    with open(args.cert, "rb") as handle:
        cert = load_pem_x509_certificate(handle.read())
    der = cert.public_key().public_bytes(
        encoding=serialization.Encoding.DER,
        format=serialization.PublicFormat.SubjectPublicKeyInfo,
    )
    print(base64.b64encode(hashlib.sha256(der).digest()).decode("ascii"))


def cmd_self_signed_cert(args):
    """Create a local-only test certificate; never use this for real participants."""
    key = ec.generate_private_key(ec.SECP256R1())
    name = x509.Name([NameAttribute(NameOID.COMMON_NAME, args.host)])
    try:
        san = x509.IPAddress(ipaddress.ip_address(args.host))
    except ValueError:
        san = x509.DNSName(args.host)
    cert = (
        x509.CertificateBuilder()
        .subject_name(name)
        .issuer_name(name)
        .public_key(key.public_key())
        .serial_number(x509.random_serial_number())
        .not_valid_before(datetime.now(timezone.utc) - timedelta(days=1))
        .not_valid_after(datetime.now(timezone.utc) + timedelta(days=args.days))
        .add_extension(x509.SubjectAlternativeName([san]), critical=False)
        .sign(key, hashes.SHA256())
    )
    with open(args.key, "wb") as handle:
        handle.write(key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.TraditionalOpenSSL,
            encryption_algorithm=serialization.NoEncryption(),
        ))
    with open(args.cert, "wb") as handle:
        handle.write(cert.public_bytes(serialization.Encoding.PEM))
    print("wrote local-only certificate %s and key %s" % (args.cert, args.key))
    print("spki_pin: %s" % base64.b64encode(hashlib.sha256(
        cert.public_key().public_bytes(
            encoding=serialization.Encoding.DER,
            format=serialization.PublicFormat.SubjectPublicKeyInfo,
        )
    ).digest()).decode("ascii"))


def build_parser():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    sub = parser.add_subparsers(dest="command", required=True)

    p = sub.add_parser("init", help="create the SQLite schema")
    p.add_argument("--db", required=True)
    p.set_defaults(func=cmd_init)

    p = sub.add_parser("run", help="run the sync service")
    p.add_argument("--db", required=True)
    p.add_argument("--host", default="127.0.0.1")
    p.add_argument("--port", type=int, default=8443)
    p.add_argument("--cert")
    p.add_argument("--key")
    p.add_argument("--allow-http", action="store_true")
    p.set_defaults(func=cmd_run)

    p = sub.add_parser("issue-token", help="issue one revocable device token")
    p.add_argument("--db", required=True)
    p.add_argument("--code", required=True)
    p.add_argument("--device-id", required=True)
    p.add_argument("--label", default="unlabelled device")
    p.add_argument("--consent-version", required=True)
    p.add_argument("--consent-record", required=True, help="opaque consent receipt id, not a name")
    p.add_argument("--consent-at")
    p.set_defaults(func=cmd_issue_token)

    p = sub.add_parser("revoke-token", help="revoke a device token immediately")
    p.add_argument("--db", required=True)
    p.add_argument("--token-id", required=True)
    p.set_defaults(func=cmd_revoke_token)

    p = sub.add_parser("list-tokens", help="list token metadata without secrets")
    p.add_argument("--db", required=True)
    p.set_defaults(func=cmd_list_tokens)

    p = sub.add_parser("erase", help="delete a participant's records and revoke tokens")
    p.add_argument("--db", required=True)
    p.add_argument("--code", required=True)
    p.add_argument("--confirm", action="store_true")
    p.set_defaults(func=cmd_erase)

    p = sub.add_parser("prune", help="delete records older than a retention window")
    p.add_argument("--db", required=True)
    p.add_argument("--days", type=int, required=True)
    p.add_argument("--confirm", action="store_true")
    p.set_defaults(func=cmd_prune)

    p = sub.add_parser("spki-pin", help="print the base64 SHA-256 SPKI pin for a certificate")
    p.add_argument("--cert", required=True)
    p.set_defaults(func=cmd_spki_pin)

    p = sub.add_parser("self-signed-cert", help="create a local-only test certificate")
    p.add_argument("--cert", required=True)
    p.add_argument("--key", required=True)
    p.add_argument("--host", default="localhost")
    p.add_argument("--days", type=int, default=30)
    p.set_defaults(func=cmd_self_signed_cert)

    return parser


def main(argv=None):
    args = build_parser().parse_args(argv)
    args.func(args)


if __name__ == "__main__":
    main()
