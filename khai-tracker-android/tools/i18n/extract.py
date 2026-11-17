#!/usr/bin/env python3
"""Extract canonical English sources for the localisation workflow.

Outputs:
  tools/i18n/en-app.json    the 164 Android string resources (key -> English)
  tools/i18n/en-site.json   the browser demo's EN dictionary (key -> English)

The site dictionary lives inside an IIFE in scripts/demo/core.js. It is a flat
object of quoted keys and quoted values, so a small tokenizer is enough; no
JavaScript runtime is needed and the site itself stays build-free.
"""
import json
import os
import re
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
ANDROID = os.path.join(ROOT, "khai-tracker-android")
SITE = os.path.join(ROOT, "khai-site")
OUT = os.path.join(ANDROID, "tools", "i18n")
os.makedirs(OUT, exist_ok=True)

# --- app strings ----------------------------------------------------------
app_root = ET.parse(os.path.join(ANDROID, "app", "res", "values", "strings.xml")).getroot()
app = {}
for node in app_root:
    if node.tag == "string":
        app[node.get("name")] = "".join(node.itertext())
with open(os.path.join(OUT, "en-app.json"), "w", encoding="utf-8", newline="\n") as f:
    json.dump(app, f, ensure_ascii=False, indent=2)
    f.write("\n")

# --- demo strings ---------------------------------------------------------
src = open(os.path.join(SITE, "scripts", "demo", "core.js"), encoding="utf-8").read()
block = src.split("var EN = {", 1)[1].split("\n  };", 1)[0]
# The demo dictionary puts several keys on one line, so the key must be matched
# after a line start OR a comma, not only after four spaces at a line start.
pattern = re.compile(r"(?:^|[,{])\s*([A-Za-z_][A-Za-z0-9_]*)\s*:\s*('(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\")", re.M | re.S)


def decode(lit):
    raw = lit[1:-1]
    return (raw.replace("\\'", "'").replace('\\"', '"')
               .replace("\\n", "\n").replace("\\t", "\t").replace("\\\\", "\\"))


site = {m.group(1): decode(m.group(2)) for m in pattern.finditer(block)}
with open(os.path.join(OUT, "en-site.json"), "w", encoding="utf-8", newline="\n") as f:
    json.dump(site, f, ensure_ascii=False, indent=2)
    f.write("\n")

print("app strings: %d" % len(app))
print("site strings: %d" % len(site))
