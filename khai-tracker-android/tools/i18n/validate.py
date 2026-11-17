#!/usr/bin/env python3
"""Validate every drafted translation file without needing all 25 to be present.

Checks key sets, placeholders, empty values, and the protected terms that must
survive translation unchanged (brand names, units, and the no-affiliation
sentence's proper nouns). Used while batches are still arriving; generate.py and
check.py perform the authoritative full-file validation at build time.

Usage: py tools/i18n/validate.py
"""
import collections
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(HERE)))
SITE = os.path.join(ROOT, "khai-site")
APP_TRANSLATIONS = os.path.join(HERE, "translations")
WEB_TRANSLATIONS = os.path.join(SITE, "tools", "i18n", "translations")

APP_TOKENS = re.compile(r"%1\$d|%2\$d|%s|\{\w+\}|</?b>|\\n", re.UNICODE)
WEB_TOKENS = re.compile(r"\{\w+\}|</?b>|<br\s*/?>", re.UNICODE)
PROTECTED = (
    "Khai", "Khai Tracker", "Aadhaar", "FHIR", "HL7", "CSV", "JSON", "PDF",
    "PIN", "katori", "kcal", "mg/dL", "mmHg", "LOINC", "UCUM",
    "Zhongshan Hospital", "HIMSS",
)
INJECTED_APP_KEYS = {"language_hint", "draft_notice"}


def load(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def counter(pattern, text):
    return collections.Counter(pattern.findall(str(text)))


def validate(label, base, data, pattern, protected_keys, allowed_extra=()):
    problems = []
    missing = sorted(set(base) - set(data))
    extra = sorted(set(data) - set(base) - set(allowed_extra))
    if missing:
        problems.append("missing keys: %s" % missing[:10])
    if extra:
        problems.append("extra keys: %s" % extra[:10])
    for key, en in base.items():
        if key not in data:
            continue
        value = data[key]
        if not isinstance(value, str) or not value.strip():
            problems.append("%s: empty or non-string value" % key)
            continue
        if counter(pattern, en) != counter(pattern, value):
            problems.append("%s: token mismatch %s -> %s" %
                            (key, dict(counter(pattern, en)), dict(counter(pattern, value))))
        if key in protected_keys:
            for term in PROTECTED:
                if term in en and term not in value:
                    problems.append("%s: lost protected term %r" % (key, term))
    return problems


def main():
    app_base = load(os.path.join(HERE, "en-app.json"))
    app_base = {k: v for k, v in app_base.items() if k not in INJECTED_APP_KEYS}
    web_base = load(os.path.join(HERE, "en-web.json"))
    codes = [x["code"] for x in load(os.path.join(HERE, "languages.json"))["languages"]]
    codes = [c for c in codes if c not in ("en", "hi")]
    protected_app = {"about_body", "privacy_body", "footer_not_medical",
                     "footer_demo_not_medical", "brand_sub", "food_items"}
    protected_web = {"consentBody", "footer_not_medical", "footer_demo_not_medical",
                     "brandSub", "privacyBody"}

    total = 0
    problems = 0
    pending = []
    for code in codes:
        for label, folder, base, pattern, protected in (
            ("app", APP_TRANSLATIONS, app_base, APP_TOKENS, protected_app),
            ("web", WEB_TRANSLATIONS, web_base, WEB_TOKENS, protected_web),
        ):
            path = os.path.join(folder, code + ".json")
            if not os.path.exists(path):
                pending.append("%s/%s" % (code, label))
                continue
            try:
                data = load(path)
            except ValueError as exc:
                print("FAIL %-5s %-3s invalid JSON: %s" % (code, label, exc))
                problems += 1
                continue
            issues = validate(label, base, data, pattern, protected,
                              INJECTED_APP_KEYS if label == "app" else ())
            total += 1
            if issues:
                problems += len(issues)
                print("FAIL %-5s %-3s" % (code, label))
                for issue in issues[:8]:
                    print("      - " + issue)
            else:
                print("ok    %-5s %-3s (%d keys)" % (code, label, len(base)))

    print("\n%d files validated, %d problems, %d pending: %s" %
          (total, problems, len(pending), ", ".join(pending) if pending else "none"))
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
