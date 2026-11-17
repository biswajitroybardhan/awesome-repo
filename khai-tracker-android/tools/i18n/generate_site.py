#!/usr/bin/env python3
"""Generate the static site's embedded translation bundle.

The website has no build step and never fetches a file at runtime, so all
translations are emitted as one plain JavaScript data file. English is the
canonical source; Hindi is the shipped second language; the remaining 25
languages are drafts that require native-speaker clinical review.

Outputs:
  khai-site/scripts/translations.js

Usage: py tools/i18n/generate_site.py
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
SITE = os.path.join(ROOT, "khai-site")
WEB_TRANSLATIONS = os.path.join(SITE, "tools", "i18n", "translations")

TOKEN_RE = re.compile(r"\{\w+\}|</?b>")
RTL = {"ar", "ur"}


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


def tokens(value):
    return collections.Counter(TOKEN_RE.findall(str(value)))


def extract_js_dict(source, var_name):
    """Read the flat quoted-key object declared as `var NAME = { ... };`. """
    marker = "var %s = {" % var_name
    if marker not in source:
        raise ValueError("missing %s in demo core" % var_name)
    block = source.split(marker, 1)[1].split("\n  };", 1)[0]
    pattern = re.compile(r"(?:^|[,{])\s*([A-Za-z_][A-Za-z0-9_]*)\s*:\s*('(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\")", re.M | re.S)

    def decode(lit):
        raw = lit[1:-1]
        return (raw.replace("\\'", "'").replace('\\"', '"')
                   .replace("\\n", "\n").replace("\\t", "\t").replace("\\\\", "\\"))

    return {m.group(1): decode(m.group(2)) for m in pattern.finditer(block)}


def parse_array(path, name):
    root = ET.parse(path).getroot()
    node = root.find("./string-array[@name='%s']" % name)
    if node is None:
        raise ValueError("missing string-array %s" % name)
    return ["".join(item.itertext()) for item in node.findall("item")]


def fail(msg):
    print("ERROR: " + msg, file=sys.stderr)
    sys.exit(1)


def main():
    registry = load(os.path.join(HERE, "languages.json"))["languages"]
    base = load(os.path.join(HERE, "en-web.json"))
    hi_page = load(os.path.join(HERE, "hi-page.json"))
    extras = load(os.path.join(HERE, "extras.json"))
    overrides = load(os.path.join(HERE, "overrides.json"))
    core = read(os.path.join(SITE, "scripts", "demo", "core.js"))

    hi = dict(base)
    hi.update(extract_js_dict(core, "HI"))       # shipped demo strings
    hi.update(hi_page)                            # shipped page strings
    missing = sorted(set(base) - set(hi))
    if missing:
        fail("hi web keys missing: %s" % missing[:12])

    arrays = {}
    hi_arrays_path = os.path.join(ANDROID, "app", "res", "values-hi", "arrays.xml")
    arrays["hi"] = {
        "age": parse_array(hi_arrays_path, "age_bands"),
        "conditions": parse_array(hi_arrays_path, "condition_options")
    }
    for code in extras["age_bands"]:
        arrays[code] = {
            "age": extras["age_bands"][code],
            "conditions": extras["condition_options"][code]
        }

    english_core = extract_js_dict(core, "EN")
    arrays["en"] = {
        "age": ["Under 40", "40–49", "50–59", "60–69", "70 and above"],
        "conditions": ["Diabetes (type 2)", "Pre-diabetes", "High blood pressure",
                       "High cholesterol", "Weight management", "None of these"]
    }
    # Fall back to the canonical demo values if the source wording changes.
    arrays["en"]["age"] = [english_core.get("age" + k, v) for k, v in zip(
        ["Under40", "40_49", "50_59", "60_69", "Ge70"], arrays["en"]["age"])]
    arrays["en"]["conditions"] = list(arrays["en"]["conditions"])

    age_keys = ["lt40", "40_49", "50_59", "60_69", "ge70"]
    condition_keys = ["diabetes_t2", "prediabetes", "hypertension", "cholesterol", "weight", "none"]

    def with_labels(code, data):
        out = dict(data)
        label_set = arrays.get(code, arrays["en"])
        for key, value in zip(age_keys, label_set["age"]):
            out["age_" + key] = value
        for key, value in zip(condition_keys, label_set["conditions"]):
            out["condition_" + key] = value
        return out

    strings = {"en": with_labels("en", base), "hi": with_labels("hi", hi)}
    generated = []
    for lang in registry:
        code = lang["code"]
        if code in ("en", "hi"):
            continue
        path = os.path.join(WEB_TRANSLATIONS, code + ".json")
        if not os.path.exists(path):
            fail("missing web translation: %s" % path)
        data = load(path)
        missing = sorted(set(base) - set(data))
        extra = sorted(set(data) - set(base))
        if missing or extra:
            fail("%s web keys mismatch: missing=%s extra=%s" % (code, missing[:8], extra[:8]))
        for key, by_code in overrides.items():
            if not key.startswith("_") and code in by_code and key in data:
                data[key] = by_code[code]
        for key, en in base.items():
            if tokens(en) != tokens(data[key]):
                fail("%s web placeholder mismatch for %s: en=%s tr=%s" %
                     (code, key, dict(tokens(en)), dict(tokens(data[key]))))
        strings[code] = with_labels(code, data)
        generated.append(code)

    languages = []
    for lang in registry:
        item = dict(lang)
        item["rtl"] = lang["code"] in RTL
        languages.append(item)

    bundle = {"languages": languages, "strings": strings}
    js = ("/* Generated from tools/i18n — do not hand-edit. */\n"
          "window.KHAI_I18N_DATA = " +
          json.dumps(bundle, ensure_ascii=False, separators=(",", ":")) + ";\n")
    write(os.path.join(SITE, "scripts", "translations.js"), js.replace("</", "<\\/"))
    print("generated site bundle: %d languages (%d drafts), %d English keys" %
          (len(languages), len(generated), len(base)))


if __name__ == "__main__":
    main()
