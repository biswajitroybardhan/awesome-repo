#!/usr/bin/env python3
"""HTTP, TLS and storage contract tests for the Khai v2 sync server.

Run with:
    py khai-sync-server/test_sync.py

The tests start a throwaway HTTPS server with a locally generated certificate,
issue real device tokens through the CLI, and verify only that the documented
contract holds. No clinical data or real participant identifiers are used.
"""

import base64
import contextlib
import hashlib
import ipaddress
import io
import json
import os
import socket
import sqlite3
import ssl
import subprocess
import sys
import tempfile
import threading
import unittest
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone
from unittest import mock

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import server  # noqa: E402

from cryptography import x509  # noqa: E402
from cryptography.fernet import Fernet  # noqa: E402
from cryptography.hazmat.primitives import hashes, serialization  # noqa: E402
from cryptography.hazmat.primitives.asymmetric import ec  # noqa: E402
from cryptography.x509.oid import NameOID  # noqa: E402


def make_certificate(cert_path, key_path, hostname="127.0.0.1"):
    key = ec.generate_private_key(ec.SECP256R1())
    subject = issuer = x509.Name([x509.NameAttribute(NameOID.COMMON_NAME, hostname)])
    try:
        san = x509.IPAddress(ipaddress.ip_address(hostname))
    except ValueError:
        san = x509.DNSName(hostname)
    cert = (
        x509.CertificateBuilder()
        .subject_name(subject)
        .issuer_name(issuer)
        .public_key(key.public_key())
        .serial_number(x509.random_serial_number())
        .not_valid_before(datetime.now(timezone.utc) - timedelta(days=1))
        .not_valid_after(datetime.now(timezone.utc) + timedelta(days=2))
        .add_extension(x509.SubjectAlternativeName([san]), critical=False)
        .sign(key, hashes.SHA256())
    )
    with open(key_path, "wb") as handle:
        handle.write(key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.TraditionalOpenSSL,
            encryption_algorithm=serialization.NoEncryption(),
        ))
    with open(cert_path, "wb") as handle:
        handle.write(cert.public_bytes(serialization.Encoding.PEM))
    return cert


def spki_pin(cert):
    der = cert.public_key().public_bytes(
        encoding=serialization.Encoding.DER,
        format=serialization.PublicFormat.SubjectPublicKeyInfo,
    )
    return base64.b64encode(hashlib.sha256(der).digest()).decode("ascii")


class SyncContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.TemporaryDirectory()
        root = cls.tmp.name
        cls.db = os.path.join(root, "sync.db")
        cls.cert_file = os.path.join(root, "server.crt")
        cls.key_file = os.path.join(root, "server.key")
        cls.script = os.path.join(os.path.dirname(os.path.abspath(__file__)), "server.py")
        cls.host = "127.0.0.1"

        cls.cert = make_certificate(cls.cert_file, cls.key_file, cls.host)
        cls.expected_pin = spki_pin(cls.cert)
        cls.data_key = Fernet.generate_key().decode("ascii")
        cls.old_key = os.environ.get("KHAI_SYNC_DATA_KEY")
        os.environ["KHAI_SYNC_DATA_KEY"] = cls.data_key

        conn = server.connect(cls.db)
        try:
            server.init_db(conn)
        finally:
            conn.close()

        cls.httpd = server.SyncServer(("127.0.0.1", 0), cls.db, Fernet(cls.data_key.encode("ascii")))
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        context.minimum_version = ssl.TLSVersion.TLSv1_2
        context.load_cert_chain(cls.cert_file, cls.key_file)
        cls.httpd.socket = context.wrap_socket(cls.httpd.socket, server_side=True)
        cls.port = cls.httpd.server_address[1]
        cls.thread = threading.Thread(target=cls.httpd.serve_forever, daemon=True)
        cls.thread.start()

        cls.client_context = ssl.create_default_context(cafile=cls.cert_file)
        cls.client_context.minimum_version = ssl.TLSVersion.TLSv1_2

    @classmethod
    def tearDownClass(cls):
        cls.httpd.shutdown()
        cls.httpd.server_close()
        cls.thread.join(timeout=5)
        if cls.old_key is None:
            os.environ.pop("KHAI_SYNC_DATA_KEY", None)
        else:
            os.environ["KHAI_SYNC_DATA_KEY"] = cls.old_key
        cls.tmp.cleanup()

    # ---------- helpers ----------

    def cli(self, *args):
        result = subprocess.run(
            [sys.executable, self.script, *args, "--db", self.db],
            capture_output=True, text=True, check=True,
        )
        return result.stdout

    def issue(self, code="ABC123", device_id="device-0001", label="test device",
              consent_version="v1", consent_record="consent-receipt-1"):
        out = self.cli(
            "issue-token", "--code", code, "--device-id", device_id,
            "--label", label, "--consent-version", consent_version,
            "--consent-record", consent_record,
        )
        token_id = next(line.split(":", 1)[1].strip() for line in out.splitlines()
                        if line.startswith("token_id:"))
        token = next(line.split(":", 1)[1].strip() for line in out.splitlines()
                     if line.startswith("token (show once):"))
        return token_id, token

    def payload(self, code="ABC123", device_id="device-0001", dates=None, note="routine note"):
        dates = dates or ["2026-11-20", "2026-11-21"]
        days = {}
        for date in dates:
            days[date] = {
                "v": 3,
                "code": "",  # the current Android client leaves this blank
                "date": date,
                "meals": {"breakfast": [{"id": "rice", "kcal": 240}]},
                "meds": [{"name": "Medicine A", "dose": "1 tablet", "status": "taken"}],
                "sys": 120,
                "dia": 80,
                "pulse": 72,
                "glucose": 96.5,
                "glucoseType": "fasting",
                "weight": 60.2,
                "energy": 4,
                "mood": 3,
                "sleep": 7.0,
                "note": note,
                "updatedAt": 1763606400000,
            }
        return {"schema": "khai-sync-v2", "code": code, "device_id": device_id, "days": days}

    def request(self, method, path, data=None, token=None, headers=None):
        url = "https://%s:%d%s" % (self.host, self.port, path)
        req = urllib.request.Request(url, data=data, method=method)
        req.add_header("Accept", "application/json")
        if data is not None:
            req.add_header("Content-Type", "application/json")
        if token is not None:
            req.add_header("Authorization", "Bearer " + token)
        for key, value in (headers or {}).items():
            req.add_header(key, value)
        try:
            with urllib.request.urlopen(req, context=self.client_context, timeout=10) as response:
                return response.status, dict(response.headers.items()), response.read()
        except urllib.error.HTTPError as exc:
            return exc.code, dict(exc.headers.items()), exc.read()

    def post_json(self, payload, token=None, path="/api/sync", headers=None):
        raw = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        return self.request("POST", path, data=raw, token=token, headers=headers)

    def body_json(self, response):
        return json.loads(response[2].decode("utf-8"))

    def db_rows(self, sql, params=()):
        conn = sqlite3.connect(self.db)
        conn.row_factory = sqlite3.Row
        try:
            return [dict(row) for row in conn.execute(sql, params).fetchall()]
        finally:
            conn.close()

    # ---------- tests ----------

    def test_01_health_endpoint_and_security_headers(self):
        status, headers, _ = self.request("GET", "/healthz")
        self.assertEqual(status, 200)
        self.assertIn("max-age=31536000", headers.get("Strict-Transport-Security", ""))
        self.assertEqual(headers.get("X-Content-Type-Options"), "nosniff")
        self.assertEqual(headers.get("Referrer-Policy"), "no-referrer")
        self.assertEqual(headers.get("Cache-Control"), "no-store")

        status, headers, body = self.request("GET", "/api/sync")
        self.assertEqual(status, 405)
        self.assertEqual(headers.get("Allow"), "POST")
        self.assertEqual(self.body_json((status, headers, body))["error"], "method_not_allowed")

    def test_02_spki_pin_matches_served_certificate(self):
        out = io.StringIO()
        with contextlib.redirect_stdout(out):
            server.cmd_spki_pin(type("Args", (), {"cert": self.cert_file})())
        self.assertEqual(out.getvalue().strip(), self.expected_pin)
        self.assertEqual(len(base64.b64decode(self.expected_pin)), 32)

        with socket.create_connection((self.host, self.port), timeout=10) as raw:
            with self.client_context.wrap_socket(raw, server_hostname=self.host) as tls:
                self.assertIn(tls.version(), ("TLSv1.2", "TLSv1.3"))
                der = tls.getpeercert(binary_form=True)
        served_spki = spki_pin(x509.load_der_x509_certificate(der))
        self.assertEqual(served_spki, self.expected_pin)

    def test_03_requires_bearer_token(self):
        payload = self.payload()
        status, headers, body = self.post_json(payload)
        self.assertEqual(status, 401)
        self.assertEqual(headers.get("WWW-Authenticate"), "Bearer")
        self.assertEqual(self.body_json((status, headers, body))["error"], "unauthorized")

        status, _, body = self.post_json(payload, token="x" * 40)
        self.assertEqual(status, 401)
        self.assertEqual(self.body_json((status, _, body))["error"], "unauthorized")

    def test_04_revocation_and_participant_isolation(self):
        token_id_a, token_a = self.issue("ABC123", "device-0001")
        token_id_b, token_b = self.issue("XYZ789", "device-0002")

        status, _, body = self.post_json(self.payload("ABC123", "device-0001"), token_a)
        self.assertEqual(status, 200)
        self.assertEqual(sorted(self.body_json((status, _, body))["accepted_dates"]),
                         ["2026-11-20", "2026-11-21"])

        status, _, body = self.post_json(self.payload("XYZ789", "device-0002"), token_a)
        self.assertEqual(status, 403)
        self.assertEqual(self.body_json((status, _, body))["error"], "cross_participant_denied")

        status, _, body = self.post_json(self.payload("ABC123", "device-0001"), token_b)
        self.assertEqual(status, 403)
        self.assertEqual(self.body_json((status, _, body))["error"], "cross_participant_denied")

        status, _, body = self.post_json(
            self.payload("ABC123", "wrong-device-99"), token_a)
        self.assertEqual(status, 403)
        self.assertEqual(self.body_json((status, _, body))["error"], "device_mismatch")

        self.cli("revoke-token", "--token-id", token_id_a)
        status, _, body = self.post_json(self.payload("ABC123", "device-0001"), token_a)
        self.assertEqual(status, 401)
        self.assertEqual(self.body_json((status, _, body))["error"], "unauthorized")
        self.assertTrue(token_id_b)

    def test_05_full_ack_is_idempotent_and_payload_is_encrypted(self):
        _, token = self.issue("DEF456", "device-0003")
        secret_note = "sensitive free text 9f2c1b"
        payload = self.payload("DEF456", "device-0003", note=secret_note)

        status, _, body = self.post_json(payload, token)
        self.assertEqual(status, 200)
        self.assertEqual(self.body_json((status, _, body))["accepted_dates"],
                         ["2026-11-20", "2026-11-21"])

        status, _, body = self.post_json(payload, token)
        self.assertEqual(status, 200)
        self.assertEqual(self.body_json((status, _, body))["accepted_dates"],
                         ["2026-11-20", "2026-11-21"])

        rows = self.db_rows("SELECT code, date, payload FROM days WHERE code = 'DEF456' ORDER BY date")
        self.assertEqual(len(rows), 2)
        self.assertTrue(all(isinstance(row["payload"], bytes) for row in rows))

        for filename in os.listdir(os.path.dirname(self.db)):
            if not filename.startswith("sync.db"):
                continue
            with open(os.path.join(os.path.dirname(self.db), filename), "rb") as handle:
                self.assertNotIn(secret_note.encode("utf-8"), handle.read())

        audit = self.db_rows(
            "SELECT detail FROM audit WHERE event = 'sync_accepted' AND code = 'DEF456'"
        )
        self.assertTrue(audit)
        joined = " ".join(row["detail"] for row in audit)
        self.assertIn("2026-11-20", joined)
        self.assertNotIn(secret_note, joined)
        self.assertNotIn(token, joined)

    def test_06_invalid_batches_are_atomic_and_never_partially_acknowledged(self):
        _, token = self.issue("GHI789", "device-0004")
        payload = self.payload("GHI789", "device-0004", ["2026-11-22"])
        payload["days"]["2026-11-30"] = dict(payload["days"]["2026-11-22"])
        payload["days"]["2026-11-30"]["date"] = "2026-11-22"

        status, _, body = self.post_json(payload, token)
        self.assertEqual(status, 400)
        self.assertEqual(self.body_json((status, _, body))["error"], "invalid_day")
        self.assertEqual(self.db_rows("SELECT date FROM days WHERE code = 'GHI789'"), [])

        payload = self.payload("GHI789", "device-0004", ["2026-02-30"])
        status, _, body = self.post_json(payload, token)
        self.assertEqual(status, 400)
        self.assertEqual(self.body_json((status, _, body))["error"], "invalid_date")
        self.assertEqual(self.db_rows("SELECT date FROM days WHERE code = 'GHI789'"), [])

    def test_07_schema_identity_media_and_transport_validation(self):
        _, token = self.issue("JKL012", "device-0005")
        base = self.payload("JKL012", "device-0005")

        cases = []
        bad = json.loads(json.dumps(base)); bad["schema"] = "khai-sync-v1"
        cases.append((bad, 400, "unknown_schema"))
        bad = json.loads(json.dumps(base)); bad["code"] = "bad code!"
        cases.append((bad, 400, "invalid_identity"))
        bad = json.loads(json.dumps(base)); bad["days"] = {}
        cases.append((bad, 400, "invalid_days"))
        for payload, expected_status, expected_error in cases:
            status, _, body = self.post_json(payload, token)
            self.assertEqual(status, expected_status)
            self.assertEqual(self.body_json((status, _, body))["error"], expected_error)

        raw = b'{"schema": "khai-sync-v2", "code":'
        status, _, body = self.request(
            "POST", "/api/sync", data=raw, token=token,
            headers={"Content-Type": "application/json"},
        )
        self.assertEqual(status, 400)
        self.assertEqual(self.body_json((status, _, body))["error"], "invalid_json")

        status, _, body = self.post_json(base, token, headers={"Content-Type": "text/plain"})
        self.assertEqual(status, 415)
        self.assertEqual(self.body_json((status, _, body))["error"], "unsupported_media_type")

        status, _, body = self.post_json(base, token, headers={"Accept": "text/html"})
        self.assertEqual(status, 406)
        self.assertEqual(self.body_json((status, _, body))["error"], "not_acceptable")

        with mock.patch.object(server, "MAX_BODY", 512):
            status, _, body = self.post_json(base, token)
        self.assertEqual(status, 413)
        self.assertEqual(self.body_json((status, _, body))["error"], "payload_too_large")

    def test_08_no_redirects_and_query_strings_rejected(self):
        _, token = self.issue("MNO345", "device-0006")
        payload = self.payload("MNO345", "device-0006")

        status, headers, body = self.post_json(payload, token, path="/api/sync/")
        self.assertEqual(status, 404)
        self.assertNotIn("Location", headers)
        self.assertEqual(self.body_json((status, headers, body))["error"], "not_found")

        status, headers, body = self.post_json(payload, token, path="/api/sync?next=1")
        self.assertEqual(status, 400)
        self.assertNotIn("Location", headers)
        self.assertEqual(self.body_json((status, headers, body))["error"], "bad_request")

    def test_09_consent_must_be_recorded_on_token(self):
        conn = server.connect(self.db)
        try:
            conn.execute(
                "INSERT INTO devices (token_digest, token_id, code, device_id, label, "
                "consent_version, consent_at, consent_record, active, created_at) "
                "VALUES (?, ?, ?, ?, ?, '', '', '', 1, ?)",
                (hashlib.sha256(b"no-consent-token-0000000000000000").hexdigest(),
                 "dev_noconsent", "PQR678", "device-0007", "no consent", server.now_iso()),
            )
        finally:
            conn.close()
        status, _, body = self.post_json(
            self.payload("PQR678", "device-0007"),
            token="no-consent-token-0000000000000000",
        )
        self.assertEqual(status, 403)
        self.assertEqual(self.body_json((status, _, body))["error"], "consent_not_recorded")

    def test_10_erasure_and_retention(self):
        token_id, token = self.issue("STU901", "device-0008")
        status, _, _ = self.post_json(self.payload("STU901", "device-0008"), token)
        self.assertEqual(status, 200)

        self.cli("erase", "--code", "STU901", "--confirm")
        self.assertEqual(self.db_rows("SELECT date FROM days WHERE code = 'STU901'"), [])
        revoked = self.db_rows("SELECT active FROM devices WHERE token_id = ?", (token_id,))
        self.assertEqual(revoked[0]["active"], 0)
        erasure = self.db_rows("SELECT code, detail FROM audit WHERE event = 'erasure_completed'")
        self.assertEqual(len(erasure), 1)
        self.assertIsNone(erasure[0]["code"])
        self.assertNotIn("STU901", erasure[0]["detail"])
        self.assertIn("days_removed", erasure[0]["detail"])

        status, _, _ = self.post_json(self.payload("STU901", "device-0008"), token)
        self.assertEqual(status, 401)

        conn = server.connect(self.db)
        try:
            old = (datetime.now(timezone.utc) - timedelta(days=30)).isoformat().replace("+00:00", "Z")
            conn.execute(
                "INSERT INTO days (code, date, device_id, payload, updated_at) VALUES (?, ?, ?, ?, ?)",
                ("OLD001", "2020-01-01", "device-old",
                 Fernet(self.data_key.encode("ascii")).encrypt(b"{}"), old),
            )
        finally:
            conn.close()
        self.cli("prune", "--days", "7", "--confirm")
        self.assertEqual(self.db_rows("SELECT date FROM days WHERE code = 'OLD001'"), [])
        prune = self.db_rows("SELECT detail FROM audit WHERE event = 'retention_prune'")
        self.assertTrue(prune)
        self.assertIn("days_removed", prune[-1]["detail"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
