"""Khai Tracker backend - Flask + SQLite.

Serves:
  - the PWA (static, same-origin so offline cache + sync work together)
  - POST /api/sync        participant device upserts its day records
  - GET  /api/health
  - GET  /api/admin-data  coordinator summary (requires ?token=)
  - GET  /admin           coordinator board html
   - GET  /privacy          store-linkable privacy policy (serves khai-store/PRIVACY.md)
  - GET  /export/food.csv|/export/metrics.csv   coordinator exports

Run locally:   python app.py   (http://127.0.0.1:5000)
Deploy:        gunicorn app:app  (Render/Railway free tier; set KHAI_COORD_TOKEN)
"""
import csv
import hmac
import io
import json
import os
import re
import sqlite3
import time
from collections import Counter, defaultdict
from datetime import date, datetime, timedelta, timezone

from flask import Flask, Response, jsonify, request

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
APP_DIR = os.path.join(os.path.dirname(BASE_DIR), "khai-app")
DB_PATH = os.path.join(DATA_DIR, "khai.db")
COORDINATOR_TOKEN = os.environ.get("KHAI_COORD_TOKEN", "khai-demo-token")
MEALS = ["breakfast", "lunch", "dinner", "snacks"]

os.makedirs(DATA_DIR, exist_ok=True)

app = Flask(__name__, static_folder=APP_DIR, static_url_path="")


@app.route("/")
def index():
    return app.send_static_file("index.html")


def db():
    conn = sqlite3.connect(DB_PATH, timeout=15, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    return conn


def init_db():
    conn = db()
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS participants (
            code TEXT PRIMARY KEY,
            device_id TEXT NOT NULL,
            created_at TEXT NOT NULL,
            last_sync_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS days (
            participant TEXT NOT NULL REFERENCES participants(code) ON DELETE CASCADE,
            date TEXT NOT NULL,
            data TEXT NOT NULL,
            device_id TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            PRIMARY KEY (participant, date)
        );
        """
    )
    conn.commit()
    conn.close()


def _ok(payload, status=200):
    return jsonify(payload), status


def _now():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def _valid_code(code):
    return bool(code) and bool(re.fullmatch(r"[A-Za-z0-9_-]{1,24}", code))


@app.route("/api/health")
def health():
    conn = db()
    n = conn.execute("SELECT COUNT(*) AS c FROM participants").fetchone()["c"]
    conn.close()
    return _ok({"ok": True, "participants": n})


@app.route("/api/sync", methods=["POST"])
def sync():
    if not request.is_json:
        return _ok({"ok": False, "error": "expected JSON body"}, 415)
    body = request.get_json(silent=True) or {}
    code = (body.get("code") or "").strip().upper()
    device_id = (body.get("device_id") or "").strip()
    days = body.get("days")

    if not _valid_code(code):
        return _ok({"ok": False, "error": "invalid participant code"}, 400)
    if not isinstance(days, dict):
        return _ok({"ok": False, "error": "invalid days payload"}, 400)

    DAY_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
    filtered = {k: v for k, v in days.items() if DAY_RE.match(k) and isinstance(v, dict)}
    if len(filtered) > 2000:
        return _ok({"ok": False, "error": "too many days"}, 400)

    now = _now()
    conn = db()
    try:
        conn.execute(
            """INSERT INTO participants (code, device_id, created_at, last_sync_at)
               VALUES (?, ?, ?, ?) ON CONFLICT(code) DO UPDATE SET
               device_id = excluded.device_id, last_sync_at = excluded.last_sync_at""",
            (code, device_id, now, now),
        )
        for date, data in filtered.items():
            conn.execute(
                """INSERT INTO days (participant, date, data, device_id, updated_at)
                   VALUES (?, ?, ?, ?, ?) ON CONFLICT(participant, date) DO UPDATE SET
                   data = excluded.data, device_id = excluded.device_id,
                   updated_at = excluded.updated_at""",
                (code, date, json.dumps(data, ensure_ascii=False), device_id, now),
            )
        conn.commit()
    finally:
        conn.close()
    return _ok({"ok": True, "stored": len(filtered), "server_time": now})


def _authorized():
    token = request.args.get("token", "")
    return hmac.compare_digest(token, COORDINATOR_TOKEN)


@app.route("/api/admin-data")
def admin_data():
    if not _authorized():
        return _ok({"error": "unauthorized"}, 401)
    conn = db()
    rows = conn.execute(
        "SELECT code, device_id, created_at, last_sync_at FROM participants ORDER BY code"
    ).fetchall()
    out = []
    for p in rows:
        dd = conn.execute(
            "SELECT date, data FROM days WHERE participant = ? ORDER BY date", (p["code"],)
        ).fetchall()
        logged = 0
        for d in dd:
            if _day_has_data(json.loads(d["data"])):
                logged += 1
        adh = round(100 * logged / len(dd), 1) if dd else 0.0
        out.append(
            {
                "code": p["code"],
                "device_id": p["device_id"],
                "created_at": p["created_at"],
                "last_sync_at": p["last_sync_at"],
                "days": len(dd),
                "days_logged": logged,
                "adherence": adh,
                "first_date": dd[0]["date"] if dd else None,
                "last_date": dd[-1]["date"] if dd else None,
            }
        )
    conn.close()
    return _ok({"participants": out})


def _rows(code=None):
    conn = db()
    if code and _valid_code(code):
        rows = conn.execute(
            "SELECT p.code AS code, d.date AS date, d.data AS data FROM days d "
            "JOIN participants p ON p.code = d.participant WHERE p.code = ? ORDER BY d.date",
            (code.upper(),),
        ).fetchall()
    else:
        rows = conn.execute(
            "SELECT p.code AS code, d.date AS date, d.data AS data FROM days d "
            "JOIN participants p ON p.code = d.participant ORDER BY d.date"
        ).fetchall()
    conn.close()
    return rows


def _csv_response(lines, filename):
    body = "\r\n".join(lines)
    return Response(
        body,
        mimetype="text/csv; charset=utf-8",
        headers={"Content-Disposition": 'attachment; filename="%s"' % filename},
    )


@app.route("/export/food.csv")
def export_food():
    if not _authorized():
        return _ok({"error": "unauthorized"}, 401)
    rows = _rows(request.args.get("code"))
    lines = ["participant,date,meal,food"]

    def esc(v):
        v = str(v if v is not None else "")
        return '"' + v.replace('"', '""') + '"' if any(c in v for c in '",\n') else v

    for r in rows:
        data = json.loads(r["data"])
        for m in MEALS:
            for item in data.get("meals", {}).get(m, []) or []:
                lines.append(",".join(esc(x) for x in (r["code"], r["date"], m, item)))
    return _csv_response(lines, "khai-food-log.csv")


@app.route("/export/metrics.csv")
def export_metrics():
    if not _authorized():
        return _ok({"error": "unauthorized"}, 401)
    rows = _rows(request.args.get("code"))
    lines = ["participant,date,fasting_mgdl,energy_1to5,mood_1to5,sleep_hours,note"]

    def esc(v):
        v = str(v if v is not None else "")
        return '"' + v.replace('"', '""') + '"' if any(c in v for c in '",\n') else v

    for r in rows:
        rd = json.loads(r["data"]).get("readings", {})
        lines.append(
            ",".join(
                esc(x)
                for x in (
                    r["code"],
                    r["date"],
                    rd.get("fasting"),
                    rd.get("energy"),
                    rd.get("mood"),
                    rd.get("sleep"),
                    rd.get("note", ""),
                )
            )
        )
    return _csv_response(lines, "khai-daily-metrics.csv")


@app.route("/privacy")
def privacy():
    policy = os.path.join(BASE_DIR, "..", "khai-store", "PRIVACY.md")
    try:
        with open(policy, "r", encoding="utf-8") as fh:
            text = fh.read()
    except OSError:
        text = "Privacy policy pending. Contact the study coordinator."
    esc = str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    body = (
        "<!doctype html><html lang='en'><head><meta charset='utf-8'>"
        "<meta name='viewport' content='width=device-width, initial-scale=1'>"
        "<title>Khai Tracker — Privacy Policy</title>"
        "<style>body{font-family:Segoe UI,system-ui,sans-serif;background:#f4f1ea;"
        "color:#24322b;max-width:760px;margin:24px auto;padding:0 16px;line-height:1.6}"
        "h1,h2{color:#1f5c3a}</style></head><body><h1>Privacy Policy</h1>"
        "<pre style='white-space:pre-wrap;font-family:inherit'>%s</pre>"
        "</body></html>" % esc
    )
    return Response(body, mimetype="text/html; charset=utf-8")


def _day_has_data(data):
    has = False
    for m in MEALS:
        if isinstance(data.get("meals", {}).get(m), list) and data["meals"][m]:
            has = True
    if isinstance(data.get("supplements"), list) and data["supplements"]:
        has = True
    r = data.get("readings", {})
    if any(r.get(k) is not None for k in ("fasting", "energy", "mood", "sleep")) or r.get("note"):
        has = True
    return has


@app.route("/clinician/<path:code>")
def clinician(code):
    if not _authorized():
        return "<p>Protected. Open with <code>?token=YOUR_TOKEN</code>.</p>", 401
    code = code.upper()
    conn = db()
    p = conn.execute(
        "SELECT code, device_id, created_at, last_sync_at FROM participants WHERE code = ?",
        (code,),
    ).fetchone()
    if not p:
        conn.close()
        return "<p>Participant not found.</p>", 404
    dd = conn.execute(
        "SELECT date, data FROM days WHERE participant = ? ORDER BY date", (code,)
    ).fetchall()
    conn.close()

    days = [(d["date"], json.loads(d["data"])) for d in dd]
    logged = [(iso, data) for iso, data in days if _day_has_data(data)]
    total_days = len(days)
    logged_days = len(logged)
    adherence = round(100 * logged_days / total_days, 1) if total_days else 0.0
    first_date = days[0][0] if days else "-"
    last_date = days[-1][0] if days else "-"

    streak = 0
    if logged:
        cursor = date.fromisoformat(logged[-1][0])
        seen = set(iso for iso, _ in logged)
        while True:
            if cursor.isoformat() in seen:
                streak += 1
                cursor -= timedelta(days=1)
            elif cursor.isoformat() == date.today().isoformat():
                cursor -= timedelta(days=1)
                continue
            else:
                break

    window28 = logged[-28:]
    roll28_logged = len(window28)

    # weekly buckets from the first stored day
    weekly = []
    if days:
        start = date.fromisoformat(first_date)
        end = date.fromisoformat(last_date)
        week = (end - start).days // 7
        for w in range(0, week + 1):
            w0 = start + timedelta(days=w * 7)
            w1 = w0 + timedelta(days=6)
            seen_week = {iso for iso, _ in logged if w0.isoformat() <= iso <= w1.isoformat()}
            weekly.append({"label": f"W{w + 1}: {w0.isoformat()}–{w1.isoformat()}", "logged": len(seen_week)})

    freq = Counter()
    for iso, data in logged:
        for m in MEALS:
            for item in data.get("meals", {}).get(m, []) or []:
                freq[item.strip().lower()] += 1
    top_foods = freq.most_common(12)

    readings_html = []
    for iso, data in logged[-14:]:
        r = data.get("readings", {})
        bits = []
        if r.get("fasting") is not None:
            bits.append("Fasting %s" % r["fasting"])
        if r.get("energy") is not None:
            bits.append("Energy %s/5" % r["energy"])
        if r.get("mood") is not None:
            bits.append("Mood %s/5" % r["mood"])
        if r.get("sleep") is not None:
            bits.append("Sleep %sh" % r["sleep"])
        notes = r.get("note") or ""
        readings_html.append(
            "<tr><td>%s</td><td>%s</td><td>%s</td>"
            % (iso, " · ".join(bits) or "—", "<i>%s</i>" % notes if notes else "—")
        )
    readings_rows = "".join(readings_html) or "<tr><td colspan='3'>no readings yet</td></tr>"

    foods_html = "".join(
        "<tr><td>%s</td><td>%s</td></tr>" % (item, n) for item, n in top_foods
    ) or "<tr><td colspan='2'>no food logged yet</td></tr>"

    weeks_html = "".join(
        "<tr><td>%s</td><td>%s</td></tr>" % (w["label"], w["logged"]) for w in weekly
    ) or "<tr><td colspan='2'>—</td></tr>"

    html = """
<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Khai clinician review — {code}</title>
<style>
body{{font-family:Segoe UI,system-ui,sans-serif;background:#f4f1ea;margin:0;padding:24px;color:#24322b}}
.wrap{{max-width:860px;margin:0 auto}}
h1{{color:#1f5c3a;margin:0 0 4px}}
.meta{{color:#6b7a70;font-size:13px;margin-bottom:16px}}
.grid{{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px}}
.stat{{flex:1;min-width:120px;background:#fff;border:1px solid #e2ddd2;border-radius:10px;padding:12px}}
.stat b{{display:block;font-size:22px;color:#1f5c3a}} .stat span{{font-size:12px;color:#6b7a70}}
h2{{font-size:16px;color:#1f5c3a;margin:18px 0 8px}}
table{{border-collapse:collapse;width:100%;background:#fff;border-radius:10px;overflow:hidden;font-size:14px}}
th,td{{border:1px solid #e2ddd2;padding:6px 10px;text-align:left}}
th{{background:#1f5c3a;color:#fff}}
.actions{{margin-top:16px}} .btn{{display:inline-block;padding:8px 14px;border:1px solid #2e7d4f;border-radius:8px;color:#1f5c3a;text-decoration:none;background:#fff;margin-right:8px}}
.note{{font-size:12px;color:#6b7a70;margin-top:14px;line-height:1.5}}
@media print{{body{{background:#fff;padding:0}} .no-print{{display:none}}}}
</style></head><body><div class="wrap">
<div class="no-print" style="margin-bottom:8px"><button class="btn" onclick="window.print()">Print / Save PDF</button>
<a class="btn" href="/admin?token={tok}">Back to board</a></div>
<h1>Khai clinician review — {code}</h1>
<div class="meta">Device {dev} · Joined {created} · Last sync {lastsync}</div>
<div class="grid">
<div class="stat"><b>{total}</b><span>days stored</span></div>
<div class="stat"><b>{logged}</b><span>days logged</span></div>
<div class="stat"><b>{adh}%</b><span>overall adherence</span></div>
<div class="stat"><b>{streak}</b><span>current streak</span></div>
<div class="stat"><b>{roll}</b><span>logged in last 28d</span></div>
</div>
<h2>Weeks (7-day buckets)</h2>
<table><tr><th>Week</th><th>Days logged</th></tr>{weeks}</table>
<h2>Food frequency (top 12)</h2>
<table><tr><th>Item</th><th>Times</th></tr>{foods}</table>
<h2>Recent readings (last 14 logged days)</h2>
<table><tr><th>Date</th><th>Values</th><th>Note</th></tr>{readings}</table>
<div class="note">Adherence = days-logged ÷ days-stored. This is a review of self-reported, participant-generated
tracking data (Phase-0 observational). It is not a clinical assessment and carries no diagnostic value.</div>
</div></body></html>
""".format(
        code=code,
        tok=COORDINATOR_TOKEN,
        dev=p["device_id"],
        created=(p["created_at"] or "")[:16],
        lastsync=(p["last_sync_at"] or "")[:16],
        total=total_days,
        logged=logged_days,
        adh=adherence,
        streak=streak,
        roll=roll28_logged,
        weeks=weeks_html,
        foods=foods_html,
        readings=readings_rows,
    )
    return Response(html, mimetype="text/html")


@app.route("/admin")
def admin():
    if not _authorized():
        return (
            "<h2>Khai coordinator board</h2><p>Protected. Open with <code>/admin?token=YOUR_TOKEN</code>.</p>",
            401,
        )
    html = """
<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Khai coordinator board</title>
<style>
body{font-family:Segoe UI,system-ui,sans-serif;background:#f4f1ea;margin:0;padding:20px;color:#24322b}
.wrap{max-width:960px;margin:0 auto}
h1{color:#1f5c3a}
table{border-collapse:collapse;width:100%;background:#fff;border-radius:10px;overflow:hidden}
th,td{border:1px solid #e2ddd2;padding:8px 10px;text-align:left;font-size:14px}
th{background:#1f5c3a;color:#fff}
tr:nth-child(even){background:#faf8f3}
a{color:#2e7d4f}
.btns{margin:8px 0}
.btn{display:inline-block;padding:8px 14px;border:1px solid #2e7d4f;border-radius:8px;color:#1f5c3a;text-decoration:none;margin-right:6px;background:#fff}
code{background:#eee;padding:2px 6px;border-radius:4px}
</style></head><body><div class="wrap">
<h1>Khai coordinator board</h1>
<p class="btns">
<a class="btn" href="/export/food.csv?token=__TOK__">Export all food log (CSV)</a>
<a class="btn" href="/export/metrics.csv?token=__TOK__">Export all daily metrics (CSV)</a>
</p>
<table id="t"><thead><tr><th>Participant</th><th>Device</th><th>Created</th><th>Last sync</th><th>Days stored</th><th>Days logged</th><th>Adh.</th><th>Range</th><th>Review</th></tr></thead>
<tbody></tbody></table>
<div style="margin-top:18px;font-size:13px;color:#6b7a70">Refresh to reload. Participant rows update as devices sync.</div>
<script>
fetch('/api/admin-data?token=' + encodeURIComponent('__TOK__'))
 .then(r => r.json()).then(d => {{
   var tb = document.querySelector('#t tbody');
   (d.participants||[]).forEach(p => {{
     var tr = document.createElement('tr');
     var cells = [p.code, p.device_id, (p.created_at||'').slice(0,16), (p.last_sync_at||'').slice(0,16),
                  p.days, p.days_logged, (p.adherence||0) + '%', (p.first_date||'') + ' → ' + (p.last_date||'')];
     cells.forEach(c => {{ var td = document.createElement('td'); td.textContent = c; tr.appendChild(td); }});
     var a = document.createElement('a');
     a.href = '/clinician/' + encodeURIComponent(p.code) + '?token=' + encodeURIComponent('__TOK__');
     a.textContent = 'Review';
     var td = document.createElement('td'); td.appendChild(a); tr.appendChild(td);
     tb.appendChild(tr);
   }});
 }}).catch(e => {{ var tb = document.querySelector('#t tbody');
   var tr = document.createElement('tr'); var td = document.createElement('td');
   td.colSpan = 9; td.textContent = 'Failed to load: ' + e; tr.appendChild(td); tb.appendChild(tr); }});
</script>
</div></body></html>
""".replace("__TOK__", COORDINATOR_TOKEN)
    return Response(html, mimetype="text/html")


init_db()
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)