#!/usr/bin/env python3
"""Generate Android locale resources from the translation JSON files.

Sources (all under tools/i18n):
  languages.json      the marketable language registry
  en-app.json         canonical 164-key Android string source
  translations/<code>.json    drafted app strings
  overrides.json      corrective values for source-specific strings
  extras.json         drafted string-array labels not covered by the string keys

Outputs:
  app/res/values-<code>/strings.xml
  app/res/values-<code>/arrays.xml

English and Hindi are hand-maintained and are never overwritten. Every generated
file is validated: exact key set, preserved placeholders, and correct array
lengths. A failed validation stops generation instead of shipping a broken locale.

Usage: py tools/i18n/generate.py
"""
import collections
import json
import os
import re
import sys
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(HERE)))
ANDROID = os.path.join(ROOT, "khai-tracker-android")
RES = os.path.join(ANDROID, "app", "res")
SITE = os.path.join(ROOT, "khai-site")
APP_TRANSLATIONS = os.path.join(HERE, "translations")
WEB_TRANSLATIONS = os.path.join(SITE, "tools", "i18n", "translations")

PLACEHOLDER_RE = re.compile(r"%1\$d|%2\$d|%s|\{\w+\}|</?b>", re.UNICODE)


def load(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)


def placeholders(text):
    return collections.Counter(PLACEHOLDER_RE.findall(text))


def xml_escape(text):
    """Escape a value for an Android <string> element."""
    s = str(text)
    s = s.replace("\\", "\\\\")
    s = s.replace("'", "\\'")
    s = s.replace('"', '\\"')
    s = s.replace("&", "&amp;")
    s = s.replace("<", "&lt;")
    s = s.replace(">", "&gt;")
    s = s.replace("\r", "")
    s = s.replace("\n", "\\n").replace("\t", "\\t")
    return s


def strings_xml(values):
    lines = ['<?xml version="1.0" encoding="utf-8"?>', '<resources>',
             '    <!-- Draft translation · requires native-speaker review before clinical use. -->',
             '']
    for key, value in values.items():
        lines.append('    <string name="%s">%s</string>' % (key, xml_escape(value)))
    lines.append('</resources>')
    return "\n".join(lines) + "\n"


def parse_array(path, name):
    root = ET.parse(path).getroot()
    node = root.find("./string-array[@name='%s']" % name)
    if node is None:
        raise ValueError("missing string-array %s in %s" % (name, path))
    return [("".join(item.itertext())) for item in node.findall("item")]


def arrays_xml(base_arrays, labels):
    out = ['<?xml version="1.0" encoding="utf-8"?>', '<resources>',
           '    <!-- Draft translation · requires native-speaker review before clinical use. -->',
           '    <!-- Labels and codes are parallel arrays: index i of one names index i of the other. -->',
           '']
    for name in ("age_band_keys", "age_bands", "condition_keys", "condition_options", "meal_slots"):
        items = labels.get(name, base_arrays[name])
        out.append('    <string-array name="%s">' % name)
        for item in items:
            out.append("        <item>%s</item>" % xml_escape(item))
        out.append("    </string-array>")
        out.append("")
    out.append("</resources>")
    return "\n".join(out) + "\n"


def fail(msg):
    print("ERROR: " + msg, file=sys.stderr)
    sys.exit(1)


def main():
    languages = [x for x in load(os.path.join(HERE, "languages.json"))["languages"]
                 if x["status"] == "draft"]
    base = load(os.path.join(HERE, "en-app.json"))
    overrides = load(os.path.join(HERE, "overrides.json"))
    extras = load(os.path.join(HERE, "extras.json"))
    base_arrays_path = os.path.join(RES, "values", "arrays.xml")
    base_arrays = {name: parse_array(base_arrays_path, name) for name in
                   ("age_band_keys", "age_bands", "condition_keys", "condition_options", "meal_slots")}
    hi_arrays_path = os.path.join(RES, "values-hi", "arrays.xml")
    hi_arrays = {name: parse_array(hi_arrays_path, name) for name in
                 ("age_band_keys", "age_bands", "condition_keys", "condition_options", "meal_slots")}

    generated = []
    for lang in languages:
        code = lang["code"]
        app_path = os.path.join(APP_TRANSLATIONS, code + ".json")
        if not os.path.exists(app_path):
            fail("missing app translation: %s" % app_path)
        data = load(app_path)

        # Corrective overrides (language-neutral consent wording, etc.).
        for key, by_code in overrides.items():
            if not key.startswith("_") and code in by_code and key in data:
                data[key] = by_code[code]

        # These notes were added after some translation batches were drafted.
        # draft_notice is shared with the site; language_hint falls back to the
        # curated copy in extras.json for locales drafted before it existed.
        web_path = os.path.join(WEB_TRANSLATIONS, code + ".json")
        web = load(web_path) if os.path.exists(web_path) else {}
        if "draft_notice" in base and web.get("draft_notice"):
            data["draft_notice"] = web["draft_notice"]
        if "language_hint" in base and "language_hint" not in data:
            data["language_hint"] = extras.get("language_hint", {}).get(code, base["language_hint"])
        if "read_aloud_unavailable" in base and extras.get("speech_unavailable", {}).get(code):
            data["read_aloud_unavailable"] = extras["speech_unavailable"][code]

        # Exact key set.
        missing = sorted(set(base) - set(data))
        extra = sorted(set(data) - set(base))
        if missing or extra:
            fail("%s app keys mismatch: missing=%s extra=%s" % (code, missing[:8], extra[:8]))

        # Placeholders must survive translation exactly.
        for key, en in base.items():
            if placeholders(en) != placeholders(data[key]):
                fail("%s placeholder mismatch for %s: en=%s tr=%s" %
                     (code, key, dict(placeholders(en)), dict(placeholders(data[key]))))

        write(os.path.join(RES, "values-" + code, "strings.xml"), strings_xml(data))

        labels = dict(hi_arrays) if code == "hi" else {
            "age_bands": extras["age_bands"].get(code, []),
            "condition_options": extras["condition_options"].get(code, [])
        }
        for key, expected in (("age_bands", base_arrays["age_bands"]),
                              ("condition_options", base_arrays["condition_options"])):
            if len(labels[key]) != len(expected):
                fail("%s %s has %d labels, expected %d" % (code, key, len(labels[key]), len(expected)))
        write(os.path.join(RES, "values-" + code, "arrays.xml"), arrays_xml(base_arrays, labels))
        generated.append(code)

    print("generated Android resources for %d locales: %s" % (len(generated), ", ".join(generated)))


if __name__ == "__main__":
    main()
