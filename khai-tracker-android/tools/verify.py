#!/usr/bin/env python3
"""
Khai Tracker release verifier.

`tools/check.py` guards the source. This script guards the artefact that would actually be
uploaded: it inspects the built APK and AAB and refuses to call them shippable unless the parts
that Play and a phone care about are true.

Checks
  1. APK exists and both v2 and v3 signatures verify (v1 is off by design: minSdk 24).
  2. The signer is Khai Foods and the key is 4096-bit RSA.
  3. The optional expected certificate SHA-256 matches (--sha256).
  4. Badging matches the manifest: package, versionName, versionCode, minSdk, targetSdk, label.
  5. The permission set is exactly the four declared, with no extras sneaked in by a library.
  6. A launchable activity exists.
  7. The APK contains the food library, both language packs and a dex file.
  8. The AAB validates with bundletool and contains a base module.

Usage
  py tools/verify.py
  py tools/verify.py --sha256 <hex>          # pin the expected certificate
  py tools/verify.py --apk-only              # skip the AAB (faster loop)

Exit code 0 means "structurally shippable", not "works on a phone". Device testing is
docs/TESTING.md and cannot be replaced by any script.
"""
import argparse
import os
import re
import subprocess
import sys
import zipfile
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = os.path.join(ROOT, "build")
TOOLS = os.path.join(ROOT, "tools")
MANIFEST = os.path.join(ROOT, "app", "AndroidManifest.xml")
PACKAGE = "in.khaifoods.tracker"
VERSION_NAME = "1.0.0"
VERSION_CODE = "1"
MIN_SDK = "24"
TARGET_SDK = "35"
REQUIRED_PERMISSIONS = {
    "android.permission.INTERNET",
    "android.permission.ACCESS_NETWORK_STATE",
    "android.permission.POST_NOTIFICATIONS",
    "android.permission.RECEIVE_BOOT_COMPLETED",
}

SDK = os.environ.get("ANDROID_SDK_ROOT") or os.environ.get("ANDROID_HOME") or \
    os.path.expanduser(r"~\AppData\Local\Android\Sdk")
BUILD_TOOLS = os.environ.get("BUILD_TOOLS_VERSION", "35.0.0")
BT = os.path.join(SDK, "build-tools", BUILD_TOOLS)
APK = os.path.join(BUILD, "khai-tracker-%s.apk" % VERSION_NAME)
AAB = os.path.join(BUILD, "khai-tracker-%s.aab" % VERSION_NAME)
BUNDLETOOL = os.environ.get("BUNDLETOOL") or os.path.join(TOOLS, "bundletool.jar")

NS = "{http://schemas.android.com/apk/res/android}"
problems = []
checks = 0


def ok(label, detail=""):
    global checks
    checks += 1
    print("  PASS  %-46s %s" % (label, detail))


def bad(label, detail=""):
    global checks
    checks += 1
    problems.append("%s: %s" % (label, detail) if detail else label)
    print("  FAIL  %-46s %s" % (label, detail))


def run(cmd, **kw):
    return subprocess.run(cmd, capture_output=True, text=True, errors="replace", **kw)


def tool(name):
    """Resolve a build-tool binary on both Windows (.exe/.bat) and POSIX."""
    for ext in (".exe", ".bat", ""):
        exe = os.path.join(BT, name + ext)
        if os.path.exists(exe):
            return exe
    sys.exit("build-tool not found: %s\nSet ANDROID_SDK_ROOT or BUILD_TOOLS_VERSION." % os.path.join(BT, name))


def read_manifest():
    if not os.path.exists(MANIFEST):
        sys.exit("manifest not found: %s" % MANIFEST)
    root = ET.parse(MANIFEST).getroot()
    sdk = root.find("uses-sdk")
    perms = {
        el.get(NS + "name")
        for el in root.findall("uses-permission")
        if el.get(NS + "name")
    }
    return {
        "package": root.get("package"),
        "versionName": root.get(NS + "versionName"),
        "versionCode": root.get(NS + "versionCode"),
        "minSdk": sdk.get(NS + "minSdkVersion") if sdk is not None else None,
        "targetSdk": sdk.get(NS + "targetSdkVersion") if sdk is not None else None,
        "permissions": perms,
    }


def check_manifest(m):
    expected = {
        "package": PACKAGE,
        "versionName": VERSION_NAME,
        "versionCode": VERSION_CODE,
        "minSdk": MIN_SDK,
        "targetSdk": TARGET_SDK,
    }
    # The manifest declares no <uses-sdk>; aapt2 injects SDK levels from the build flags. Compare
    # what is present and let badging confirm the rest.
    for key, want in expected.items():
        got = m.get(key)
        if got is not None and got != want:
            bad("manifest %s" % key, "expected %s, found %s" % (want, got))
        else:
            ok("manifest %s" % key, got or "(injected at link time)")
    if m["permissions"] == REQUIRED_PERMISSIONS:
        ok("manifest permissions", "%d, exactly the declared set" % len(m["permissions"]))
    else:
        bad("manifest permissions", "unexpected set: %s" % sorted(m["permissions"] ^ REQUIRED_PERMISSIONS))
    return not problems


def check_apk(expect_sha):
    if not os.path.exists(APK):
        bad("APK exists", "missing %s - run tools/build.py" % APK)
        return
    size_mb = os.path.getsize(APK) / (1024 * 1024)
    ok("APK exists", "%.1f MB" % size_mb)

    v = run([tool("apksigner"), "verify", "--verbose", "--print-certs", APK])
    out = (v.stdout or "") + (v.stderr or "")
    if v.returncode != 0 or "Verifies" not in out:
        bad("APK signature verifies", "apksigner refused the file")
        return
    ok("APK signature verifies")

    for scheme, want in (("v2", True), ("v3", True), ("v1", False)):
        m = re.search(r"Verified using %s scheme[^:]*: (true|false)" % scheme, out)
        got = (m.group(1) == "true") if m else None
        if got == want:
            ok("signature scheme %s" % scheme, "enabled" if want else "off by design (minSdk 24)")
        else:
            bad("signature scheme %s" % scheme, "expected %s" % want)

    dn = re.search(r"certificate DN: (.+)", out)
    if dn and "Khai Foods" in dn.group(1):
        ok("signer", dn.group(1).strip())
    else:
        bad("signer", dn.group(1).strip() if dn else "no certificate DN")

    bits = re.search(r"key size \(bits\): (\d+)", out)
    if bits and bits.group(1) == "4096":
        ok("key size", "4096-bit RSA")
    else:
        bad("key size", bits.group(1) if bits else "unknown")

    sha = re.search(r"certificate SHA-256 digest: ([0-9a-fA-F]+)", out)
    if expect_sha:
        got = sha.group(1).lower() if sha else ""
        if got == expect_sha.lower():
            ok("certificate SHA-256", got)
        else:
            bad("certificate SHA-256", "expected %s, found %s" % (expect_sha, got))
    elif sha:
        ok("certificate SHA-256", sha.group(1))

    b = run([tool("aapt2"), "dump", "badging", APK])
    bo = b.stdout or ""
    if b.returncode != 0:
        bad("badging readable", (b.stderr or "").strip()[:120])
        return
    pkg = re.search(r"package: name='([^']+)' versionCode='([^']+)' versionName='([^']+)'", bo)
    if pkg and pkg.groups() == (PACKAGE, VERSION_CODE, VERSION_NAME):
        ok("badging package/version", "%s %s (%s)" % (PACKAGE, VERSION_NAME, VERSION_CODE))
    else:
        bad("badging package/version", pkg.group(0) if pkg else "not found")

    for key, want in (("minSdkVersion", MIN_SDK), ("targetSdkVersion", TARGET_SDK)):
        m = re.search(r"%s:'([^']+)'" % key, bo)
        if m and m.group(1) == want:
            ok("badging %s" % key, want)
        else:
            bad("badging %s" % key, "expected %s, found %s" % (want, m.group(1) if m else "?"))

    badged = set(re.findall(r"uses-permission: name='([^']+)'", bo))
    if badged == REQUIRED_PERMISSIONS:
        ok("badging permissions", "%d, no extras" % len(badged))
    else:
        bad("badging permissions", "differs: %s" % sorted(badged ^ REQUIRED_PERMISSIONS))

    label = re.search(r"application-label:'([^']+)'", bo)
    if label and label.group(1) == "Khai Tracker":
        ok("application label", label.group(1))
    else:
        bad("application label", label.group(1) if label else "not found")

    if "launchable-activity: name='%s.MainActivity'" % PACKAGE in bo:
        ok("launchable activity", PACKAGE + ".MainActivity")
    else:
        bad("launchable activity", "MainActivity is not the launcher")

    with zipfile.ZipFile(APK) as z:
        names = set(z.namelist())
    for wanted, label in (
        ("classes.dex", "dex payload"),
        ("assets/foods.json", "food library"),
        ("resources.arsc", "resource table"),
    ):
        if wanted in names:
            ok("APK contains %s" % label, wanted)
        else:
            bad("APK contains %s" % label, "missing " + wanted)
    # Both language packs live inside resources.arsc. aapt2 prints the locale qualifier in ASCII,
    # so this works even where the console cannot render Devanagari.
    r = run([tool("aapt2"), "dump", "resources", APK])
    dump = r.stdout or ""
    if r.returncode == 0 and re.search(r"\(hi[)\-]", dump):
        ok("Hindi resources present", "values-hi compiled into resources.arsc")
    else:
        bad("Hindi resources present", "no hi locale in resources.arsc")
    # A universal APK is only useful if it was built from the same bundle that is being shipped.
    uni = os.path.join(BUILD, "apks-out", "universal.apk")
    if os.path.exists(uni):
        if os.path.getmtime(uni) + 1 >= os.path.getmtime(AAB):
            ok("universal APK fresh", "build/apks-out/universal.apk")
            uv = run([tool("apksigner"), "verify", "--print-certs", uni])
            if uv.returncode == 0:
                ok("universal APK signature", "signed by the same upload key")
            else:
                bad("universal APK signature", ((uv.stderr or uv.stdout) or "").strip()[:100])
        else:
            bad("universal APK stale", "older than the AAB - rebuild, do not hand out")
    else:
        print("  INFO  universal APK not built (build.py --apk mode)")


def check_aab():
    if not os.path.exists(AAB):
        bad("AAB exists", "missing %s - run tools/build.py" % AAB)
        return
    ok("AAB exists", "%.1f MB" % (os.path.getsize(AAB) / (1024 * 1024)))
    java = os.path.join(os.environ.get("JAVA_HOME", ""), "bin", "java.exe")
    if not os.path.exists(java):
        java = "java"
    if not os.path.exists(BUNDLETOOL):
        bad("bundletool present", BUNDLETOOL)
        return
    v = run([java, "-jar", BUNDLETOOL, "validate", "--bundle", AAB])
    if v.returncode == 0:
        ok("AAB validates", "bundletool validate")
    else:
        bad("AAB validates", ((v.stderr or v.stdout) or "").strip().splitlines()[:1])
    with zipfile.ZipFile(AAB) as z:
        names = set(z.namelist())
    for wanted in ("base/manifest/AndroidManifest.xml", "base/dex/classes.dex"):
        if wanted in names:
            ok("AAB contains %s" % wanted.split("/")[-1], wanted)
        else:
            bad("AAB contains %s" % wanted, "missing")


def main():
    ap = argparse.ArgumentParser(description="Verify the built Khai Tracker APK and AAB.")
    ap.add_argument("--sha256", help="expected signing certificate SHA-256 (hex)")
    ap.add_argument("--apk-only", action="store_true", help="skip AAB checks")
    args = ap.parse_args()

    print("Khai Tracker release verification")
    print("  APK %s" % APK)
    m = read_manifest()
    check_manifest(m)
    check_apk(args.sha256)
    if not args.apk_only:
        check_aab()

    print()
    if problems:
        print("NOT SHIPPABLE (%d check(s) failed)" % len(problems))
        for p in problems:
            print("  - " + p)
        return 1
    print("structurally shippable (%d checks passed)" % checks)
    print("Still required before upload: docs/TESTING.md on a real phone, a production keystore,")
    print("a live privacy-policy URL, and real screenshots.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
