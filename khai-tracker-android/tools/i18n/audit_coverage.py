#!/usr/bin/env python3
"""Audit which demo keys reached en-web.json and which are used at runtime."""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[3]
SITE = ROOT / "khai-site"
TOOLS = ROOT / "khai-tracker-android" / "tools" / "i18n"

core = (SITE / "scripts" / "demo" / "core.js").read_text(encoding="utf-8")
block = core.split("var EN = {", 1)[1].split("\n  };", 1)[0]
defined = set(re.findall(r"(?:^|[,{])\s*([A-Za-z_][A-Za-z0-9_]*)\s*:", block))
used = set()
for f in (SITE / "scripts").rglob("*.js"):
    used.update(re.findall(r"K\.t\('([A-Za-z_][A-Za-z0-9_]*)'", f.read_text(encoding="utf-8")))
web = json.loads((TOOLS / "en-web.json").read_text(encoding="utf-8"))
missing_defined = sorted(k for k in defined if k not in web)
missing_used = sorted(k for k in used if k not in web)
print("core EN defined: %d, used at runtime: %d, in en-web.json: %d" %
      (len(defined), len(used), len(web)))
print("defined but not extracted: %d" % len(missing_defined))
print("used at runtime but not extracted: %d" % len(missing_used))
print("used-but-missing: %s" % ", ".join(missing_used))
