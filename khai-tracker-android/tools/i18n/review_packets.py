#!/usr/bin/env python3
"""Build native-speaker review packets for the 24 machine-draft locales.

This tool does not review or edit any translation. It prints the English source
next to each draft so a qualified reviewer can check meaning, tone, consent and
safety wording, then records a sign-off. Passing the automated token checks is
not the same as human review.

Outputs:
  docs/review/README.md      index with an explicit unreviewed status
  docs/review/<code>.md      one side-by-side packet per draft language

Usage: py tools/i18n/review_packets.py
"""
import collections
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(HERE)))
ANDROID = os.path.join(ROOT, "khai-tracker-android")
SITE = os.path.join(ROOT, "khai-site")
OUT = os.path.join(ANDROID, "docs", "review")

APP_TOKENS = re.compile(r"%1\$d|%2\$d|%s|\{\w+\}|</?b>|\\n", re.UNICODE)
WEB_TOKENS = re.compile(r"\{\w+\}|</?b>|<br\s*/?>", re.UNICODE)
PROTECTED = (
    "Khai", "Khai Tracker", "Aadhaar", "FHIR", "HL7", "CSV", "JSON", "PDF",
    "PIN", "katori", "kcal", "mg/dL", "mmHg", "LOINC", "UCUM",
    "Zhongshan Hospital", "HIMSS",
)
INJECTED_APP_KEYS = {"language_hint", "draft_notice"}
PROTECTED_APP = {"about_body", "privacy_body", "footer_not_medical",
                 "footer_demo_not_medical", "brand_sub", "food_items"}
PROTECTED_WEB = {"consentBody", "footer_not_medical", "footer_demo_not_medical",
                 "brandSub", "privacyBody"}


def load(path):
    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def cell(value):
    """One Markdown table cell; never let a source newline break the table."""
    return str(value).replace("|", "\\|").replace("\r\n", "\n").replace("\n", "<br>")


def counter(pattern, text):
    return collections.Counter(pattern.findall(str(text)))


def checks(base, data, pattern, protected_keys):
    """Return (problem_count, notes) for the machine-checkable part only."""
    problems = []
    missing = sorted(set(base) - set(data))
    if missing:
        problems.append("missing keys: %s" % ", ".join(missing[:10]))
    for key, english in base.items():
        if key not in data:
            continue
        value = data[key]
        if not isinstance(value, str) or not value.strip():
            problems.append("%s: empty or non-string" % key)
            continue
        if counter(pattern, english) != counter(pattern, value):
            problems.append("%s: placeholder or tag mismatch" % key)
        if key in protected_keys:
            for term in PROTECTED:
                if term in english and term not in value:
                    problems.append("%s: protected term %r missing" % (key, term))
    return len(problems), problems


def table(base, data):
    lines = ["| Key | English source | Draft translation | Reviewer note |",
             "| --- | --- | --- | --- |"]
    for key in sorted(base):
        lines.append("| `%s` | %s | %s |  |" % (
            key, cell(base[key]), cell(data.get(key, "— MISSING —"))))
    return "\n".join(lines)


def packet(code, info, app_base, web_base):
    app_data = load(os.path.join(HERE, "translations", code + ".json"))
    web_data = load(os.path.join(SITE, "tools", "i18n", "translations", code + ".json"))
    app_problems, app_notes = checks(app_base, app_data, APP_TOKENS, PROTECTED_APP)
    web_problems, web_notes = checks(web_base, web_data, WEB_TOKENS, PROTECTED_WEB)

    out = []
    out.append("# %s (%s) — translation review packet" % (info["name"], code))
    out.append("")
    out.append("> **MACHINE DRAFT — NOT REVIEWED.** This language must not be used for "
               "consent, clinical guidance or real participant records until a native "
               "speaker with the required competence signs the form at the end.")
    out.append("")
    out.append("- Language: %s (%s)" % (info["name"], info["native"]))
    out.append("- Scope: Khai Tracker app strings and the static site's strings")
    out.append("- Source of truth: `tools/i18n/en-app.json`, `tools/i18n/en-web.json`")
    out.append("- Draft files: `tools/i18n/translations/%s.json` (app and site)" % code)
    out.append("- Generated automatically; no reviewer has approved this draft.")
    out.append("")
    out.append("## What to check")
    out.append("")
    out.append("1. Meaning matches the English source. Do not translate dish names or "
               "brand names; they must stay in their familiar original form.")
    out.append("2. The non-medical-device disclaimer and the no-affiliation sentence "
               "are accurate and complete.")
    out.append("3. Consent wording is understandable to a lay person and does not imply "
               "care, diagnosis or a relationship with any named health system.")
    out.append("4. Numbers, units, placeholders (`{...}`, `%1$d`) and inline tags "
               "(`<b>`, `<br>`) are preserved exactly.")
    out.append("5. Tone is neutral and non-promotional; no invented capability is added.")
    out.append("")
    out.append("## Automated checks (not a human review)")
    out.append("")
    out.append("- App: %d problem(s)" % app_problems)
    out.extend("- " + note for note in app_notes[:25])
    out.append("- Site: %d problem(s)" % web_problems)
    out.extend("- " + note for note in web_notes[:25])
    out.append("")
    out.append("## App strings — %s" % info["name"])
    out.append("")
    out.append(table(app_base, app_data))
    out.append("")
    out.append("## Site strings — %s" % info["name"])
    out.append("")
    out.append(table(web_base, web_data))
    out.append("")
    out.append("## Sign-off — leave blank until actually reviewed")
    out.append("")
    out.append("```text")
    out.append("Reviewer name: ______________________________")
    out.append("Language reviewed: %s (%s)" % (info["name"], code))
    out.append("Reviewer is a native speaker: yes / no")
    out.append("Relevant competence (linguistic / clinical / consent): ______________")
    out.append("Date (YYYY-MM-DD): ____________________________")
    out.append("")
    out.append("App strings checked:      yes / no")
    out.append("Site strings checked:     yes / no")
    out.append("Consent wording checked:  yes / no")
    out.append("Disclaimer + no-affiliation sentence checked: yes / no")
    out.append("Placeholders, units and dish names checked:   yes / no")
    out.append("")
    out.append("Decision: APPROVED FOR REAL USE / NOT APPROVED")
    out.append("Reviewer signature: ___________________________")
    out.append("```")
    out.append("")
    out.append("Approval must be recorded in the release ticket before this locale is "
               "listed as reviewed. Until then the picker keeps its draft notice.")
    out.append("")
    return "\n".join(out)


def main():
    languages = load(os.path.join(HERE, "languages.json"))["languages"]
    drafts = [x for x in languages if x["status"] != "shipped"]
    app_base = {k: v for k, v in load(os.path.join(HERE, "en-app.json")).items()
                if k not in INJECTED_APP_KEYS}
    web_base = load(os.path.join(HERE, "en-web.json"))
    os.makedirs(OUT, exist_ok=True)

    index = [
        "# Translation review queue",
        "",
        "> These are **machine drafts**. None has been reviewed. Do not use any of them "
        "for consent, clinical guidance or real participant records until the sign-off "
        "in its packet is complete.",
        "",
        "Each packet places the English source beside the draft and includes a sign-off "
        "form. Generate them with `py tools/i18n/review_packets.py`; regenerate after "
        "any source string changes so reviewer notes stay aligned with the current text.",
        "",
        "| Code | Language | Status | Packet |",
        "| --- | --- | --- | --- |",
    ]
    for info in drafts:
        code = info["code"]
        with open(os.path.join(OUT, code + ".md"), "w", encoding="utf-8", newline="\n") as handle:
            handle.write(packet(code, info, app_base, web_base))
        index.append("| `%s` | %s | Not reviewed | [%s.md](%s.md) |" %
                     (code, info["name"], code, code))
    index.append("")
    index.append("Shipped after human review: `en` (English), `hi` (Hindi). "
                 "They are not in this queue.")
    index.append("")
    with open(os.path.join(OUT, "README.md"), "w", encoding="utf-8", newline="\n") as handle:
        handle.write("\n".join(index))
    print("wrote %d review packets to %s" % (len(drafts), OUT))


if __name__ == "__main__":
    main()
