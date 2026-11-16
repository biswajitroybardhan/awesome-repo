#!/usr/bin/env python3
"""
Static checks that a compiler cannot make.

Kotlin catches missing resources at compile time, but it cannot catch a Hindi string that was
never translated, a food whose energy range is inverted, a mipmap density that is short a file,
or a manifest that points at a class nobody wrote. This script checks those, and it is the gate
that should run before every Play upload.

Usage: py tools/check.py
Exit code 0 means clean; 1 means at least one error (warnings do not fail the build).
"""
import json
import os
import re
import sys
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app")
RES = os.path.join(APP, "res")
SRC = os.path.join(APP, "src", "in", "khaifoods", "tracker")

errors = []
warnings = []


def err(msg):
    errors.append(msg)


def warn(msg):
    warnings.append(msg)


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


# ---------------------------------------------------------------- strings

def parse_strings(path):
    root = ET.parse(path).getroot()
    out = {}
    for child in root:
        if child.tag in ("string", "plurals"):
            out[child.get("name")] = child
    return out


def check_strings():
    base = parse_strings(os.path.join(RES, "values", "strings.xml"))
    hindi = parse_strings(os.path.join(RES, "values-hi", "strings.xml"))
    for name in base:
        if name not in hindi:
            warn("Hindi missing: %s" % name)
    for name in hindi:
        if name not in base:
            err("Hindi string with no English original: %s" % name)
    # Same substitution tokens on both sides, or the Hindi layout breaks at runtime.
    for name, node in base.items():
        if name not in hindi:
            continue
        a = sorted(set(re.findall(r"%\d*\$?[sd]", "".join(node.itertext()))))
        b = sorted(set(re.findall(r"%\d*\$?[sd]", "".join(hindi[name].itertext()))))
        if a != b:
            err("Placeholder mismatch for %s: en=%s hi=%s" % (name, a, b))
    print("  strings: %d English, %d Hindi" % (len(base), len(hindi)))
    return set(base)


# ---------------------------------------------------------------- resources used from code

def declared_resources():
    names = {"string": set(), "drawable": set(), "color": set(), "array": set(),
             "mipmap": set(), "xml": set(), "style": set()}
    for base, _, files in os.walk(RES):
        for f in files:
            path = os.path.join(base, f)
            kind = os.path.basename(base).split("-")[0]
            stem = os.path.splitext(f)[0]
            if kind == "values":
                try:
                    root = ET.parse(path).getroot()
                except ET.ParseError as e:
                    err("bad XML %s: %s" % (path, e))
                    continue
                for child in root:
                    tag = child.tag
                    if tag in ("string", "color", "style", "string-array", "integer-array", "array", "plurals"):
                        key = {"string-array": "array", "integer-array": "array",
                               "plurals": "string"}.get(tag, tag)
                        names[key].add(child.get("name"))
            elif kind in names:
                names[kind].add(stem)
    return names


def check_code_references(declared):
    used = set()
    pattern = re.compile(r"(?<!android\.)(?<!\.)R\.(string|drawable|color|array|mipmap|xml|style)\.(\w+)")
    for f in os.listdir(SRC):
        if not f.endswith(".kt"):
            continue
        for kind, name in pattern.findall(read(os.path.join(SRC, f))):
            used.add((kind, name))
            if name not in declared[kind]:
                err("R.%s.%s referenced in %s but not declared" % (kind, name, f))
    print("  code references: %d resource ids" % len(used))


# ---------------------------------------------------------------- layouts the platform needs

def check_density_coverage():
    sizes = {"mdpi": 48, "hdpi": 72, "xhdpi": 96, "xxhdpi": 144, "xxxhdpi": 192}
    for density, px in sizes.items():
        for name in ("ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"):
            path = os.path.join(RES, "mipmap-" + density, name)
            if not os.path.exists(path):
                err("missing %s/%s" % (density, name))
                continue
            # PNG header carries width/height at bytes 16..23 big endian.
            with open(path, "rb") as f:
                head = f.read(24)
            if head[:8] != b"\x89PNG\r\n\x1a\n":
                err("%s is not a PNG" % path)
                continue
            w = int.from_bytes(head[16:20], "big")
            h = int.from_bytes(head[20:24], "big")
            expected = px if "foreground" not in name else int(px * 2.25)
            if w < expected * 0.9:
                err("%s is %dx%d, expected about %d" % (path, w, h, expected))
    for path in (os.path.join(RES, "mipmap-anydpi-v26", "ic_launcher.xml"),
                 os.path.join(RES, "mipmap-anydpi-v26", "ic_launcher_round.xml")):
        if not os.path.exists(path):
            err("missing adaptive icon " + os.path.basename(path))
    print("  icons: densities checked")


# ---------------------------------------------------------------- food library

SLOTS = {"breakfast", "lunch", "dinner", "snacks"}
NUTRIENTS = ("kcal", "carb", "protein", "fat", "fiber", "sodium")


def check_foods():
    path = os.path.join(APP, "assets", "foods.json")
    data = json.loads(read(path))
    items = data["items"]
    seen = set()
    for i, it in enumerate(items):
        ident = it.get("id")
        if not ident:
            err("food #%d has no id" % i)
            continue
        if ident in seen:
            err("duplicate food id: %s" % ident)
        seen.add(ident)
        for key in ("en", "hi", "unit", "portion"):
            if not it.get(key):
                err("%s missing %s" % (ident, key))
        meals = it.get("meals") or []
        if not meals:
            err("%s has no meal slots" % ident)
        for slot in meals:
            if slot not in SLOTS:
                err("%s has unknown meal slot %s" % (ident, slot))
        for nutrient in NUTRIENTS:
            rng = it.get(nutrient)
            if not isinstance(rng, list) or len(rng) != 2:
                err("%s: %s must be a [low, high] pair" % (ident, nutrient))
                continue
            lo, hi = rng
            if not (isinstance(lo, (int, float)) and isinstance(lo, (int, float))):
                err("%s: %s is not numeric" % (ident, nutrient))
            elif lo < 0 or hi < 0:
                err("%s: %s is negative" % (ident, nutrient))
            elif lo > hi:
                err("%s: %s range is inverted (%s > %s)" % (ident, nutrient, lo, hi))
        if not (it.get("kcal") and it["kcal"][0] > 0):
            err("%s: a food with no energy is not a food" % ident)
    print("  foods: %d items, %d unique ids" % (len(items), len(seen)))
    return seen


# ---------------------------------------------------------------- manifest

def class_declared(simple_name):
    """A manifest component may share a file with others; look for the declaration itself."""
    needle = re.compile(r"^\s*(?:open\s+|abstract\s+|internal\s+|public\s+)*class\s+"
                        + re.escape(simple_name) + r"\b", re.MULTILINE)
    for f in os.listdir(SRC):
        if f.endswith(".kt") and needle.search(read(os.path.join(SRC, f))):
            return True
    return False


def check_manifest():
    root = ET.parse(os.path.join(APP, "AndroidManifest.xml")).getroot()
    pkg = root.get("package")
    if pkg != "in.khaifoods.tracker":
        err("unexpected package %s" % pkg)
    ns = "{http://schemas.android.com/apk/res/android}"
    app = root.find("application")
    if app.get(ns + "allowBackup") != "false":
        err("allowBackup must be false: encrypted records must not be copied off-device by the OS")
    if app.get(ns + "usesCleartextTraffic") != "false":
        err("cleartext traffic must be disabled")
    for component, attr in (("activity", "name"), ("provider", "name"), ("receiver", "name"),
                            ("service", "name")):
        for node in app.findall(component):
            name = node.get(ns + attr)
            cls = name.lstrip(".").split(".")[-1]
            if not class_declared(cls):
                err("manifest declares %s but no Kotlin file declares class %s" % (name, cls))
            if component == "activity" and node.get(ns + "exported") is None:
                err("activity %s must declare android:exported" % name)
    permissions = {n.get(ns + "name") for n in root.findall("uses-permission")}
    allowed = {
        "android.permission.INTERNET",
        "android.permission.ACCESS_NETWORK_STATE",
        "android.permission.POST_NOTIFICATIONS",
        "android.permission.RECEIVE_BOOT_COMPLETED",
    }
    extra = permissions - allowed
    if extra:
        err("permission not justified in the privacy policy: %s" % ", ".join(sorted(extra)))
    missing = allowed - permissions
    if missing:
        warn("declared permission no longer used: %s" % ", ".join(sorted(missing)))
    print("  manifest: %s, %d permissions" % (pkg, len(permissions)))


# ---------------------------------------------------------------- version consistency

def check_versions():
    manifest = read(os.path.join(APP, "AndroidManifest.xml"))
    build = read(os.path.join(ROOT, "tools", "build.py"))
    m_name = re.search(r'android:versionName="([^"]+)"', manifest)
    m_code = re.search(r'android:versionCode="(\d+)"', manifest)
    b_name = re.search(r'VERSION_NAME = "([^"]+)"', build)
    b_code = re.search(r'VERSION_CODE = "(\d+)"', build)
    for label, a, b in (("versionName", m_name, b_name), ("versionCode", m_code, b_code)):
        if not a or not b:
            err("cannot read %s from manifest or build.py" % label)
        elif a.group(1) != b.group(1):
            err("%s differs: manifest=%s build.py=%s" % (label, a.group(1), b.group(1)))
    print("  version: %s (%s)" % (m_name.group(1) if m_name else "?", m_code.group(1) if m_code else "?"))


def main():
    print("Khai Tracker static checks")
    check_strings()
    declared = declared_resources()
    check_code_references(declared)
    check_density_coverage()
    check_foods()
    check_manifest()
    check_versions()

    for w in warnings:
        print("  WARN  " + w)
    for e in errors:
        print("  ERROR " + e)
    if errors:
        print("\n%d error(s), %d warning(s)" % (len(errors), len(warnings)))
        return 1
    print("\nclean (%d warning(s))" % len(warnings))
    return 0


if __name__ == "__main__":
    sys.exit(main())
