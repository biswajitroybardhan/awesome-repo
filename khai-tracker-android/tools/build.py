#!/usr/bin/env python3
"""
Khai Tracker build.

Produces, from source, without Gradle and without Android Studio:
  build/khai-tracker-1.0.0.apk          signed, installable on any Android 7.0+ phone
  build/khai-tracker-1.0.0.aab          signed Android App Bundle for Google Play
  build/apks-out/universal.apk          one signed APK built from the AAB, for testing

The toolchain is the official Android one (aapt2, d8, zipalign, apksigner) plus the Kotlin
compiler. Pinning the exact steps here means the shipped binary is reproducible from source on
a normal Windows machine and does not depend on a hidden IDE build cache.

Usage:
  py tools/build.py            # full build (APK + AAB)
  py tools/build.py --apk      # APK only
  py tools/build.py --clean

Environment overrides:
  ANDROID_SDK_ROOT, JAVA_HOME, KHAI_KEYSTORE, KHAI_KEYSTORE_PASS, KHAI_KEY_ALIAS
"""
import argparse
import os
import shutil
import subprocess
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app")
BUILD = os.path.join(ROOT, "build")
TOOLS = os.path.join(ROOT, "tools")
VERSION_NAME = "1.0.0"
VERSION_CODE = "1"
MIN_SDK = "24"
TARGET_SDK = "35"
PACKAGE = "in.khaifoods.tracker"

SDK = os.environ.get("ANDROID_SDK_ROOT") or os.environ.get("ANDROID_HOME") or \
    os.path.expanduser(r"~\AppData\Local\Android\Sdk")
JAVA_HOME = os.environ.get("JAVA_HOME") or ""


def _find_kotlinc():
    """Kotlin compiler: env override, then a few conventional locations."""
    env = os.environ.get("KOTLINC")
    if env:
        return os.path.abspath(env)
    for base in (TOOLS, SDK, r"C:\kotlinc", os.path.expanduser("~/kotlinc")):
        cand = os.path.join(base, "kotlinc", "bin", "kotlinc.bat")
        if os.path.exists(cand):
            return cand
    return os.path.join(TOOLS, "kotlinc", "bin", "kotlinc.bat")


def _find_java():
    """JDK 17 home: env, then the usual Microsoft / Temurin / Oracle installs."""
    env = os.environ.get("JAVA_HOME")
    if env and os.path.exists(os.path.join(env, "bin", "javac.exe")):
        return env
    roots = [r"C:\Program Files\Microsoft", r"C:\Program Files\Eclipse Adoptium",
             r"C:\Program Files\Java", r"C:\Program Files\Android\Android Studio\jbr"]
    found = []
    for root in roots:
        if not os.path.isdir(root):
            continue
        for name in os.listdir(root):
            if name.lower().startswith(("jdk", "jbr", "jre")) and name.lower() != "jre":
                home = os.path.join(root, name)
                if os.path.exists(os.path.join(home, "bin", "javac.exe")):
                    found.append(home)
    if found:
        return sorted(found)[-1]
    return r"C:\Program Files\Microsoft\jdk-17.0.21.21-hotspot"


KOTLINC = _find_kotlinc()
KOTLIN_STDLIB = os.path.join(os.path.dirname(os.path.dirname(KOTLINC)), "lib", "kotlin-stdlib.jar")
BUNDLETOOL = os.environ.get("BUNDLETOOL") or os.path.join(TOOLS, "bundletool.jar")

if not (JAVA_HOME and os.path.exists(os.path.join(JAVA_HOME, "bin", "javac.exe"))):
    JAVA_HOME = _find_java()
BUILD_TOOLS = os.environ.get("BUILD_TOOLS_VERSION", "35.0.0")
PLATFORM = os.environ.get("PLATFORM_VERSION", "android-35")

KEYSTORE = os.environ.get("KHAI_KEYSTORE") or os.path.join(ROOT, "keystore", "khai-upload.jks")
KEYSTORE_PASS = os.environ.get("KHAI_KEYSTORE_PASS") or "khai-release-2026"
KEY_ALIAS = os.environ.get("KHAI_KEY_ALIAS") or "khai"

BT = os.path.join(SDK, "build-tools", BUILD_TOOLS)
AAPT2 = os.path.join(BT, "aapt2.exe")
D8 = os.path.join(BT, "d8.bat")
ZIPALIGN = os.path.join(BT, "zipalign.exe")
APKSIGNER = os.path.join(BT, "apksigner.bat")
ANDROID_JAR = os.path.join(SDK, "platforms", PLATFORM, "android.jar")
KEYTOOL = os.path.join(JAVA_HOME, "bin", "keytool.exe")


def fail(message):
    print("\nBUILD FAILED: " + message, file=sys.stderr)
    sys.exit(1)


def run(cmd, cwd=None, quiet=False):
    printable = cmd if isinstance(cmd, str) else " ".join(cmd)
    shown = printable if len(printable) < 150 else printable[:140] + " ..."
    print("  > " + shown)
    env = dict(os.environ)
    env["JAVA_HOME"] = JAVA_HOME
    env["PATH"] = os.path.join(JAVA_HOME, "bin") + os.pathsep + env.get("PATH", "")
    proc = subprocess.run(cmd, cwd=cwd, env=env, shell=isinstance(cmd, str),
                          stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    out = proc.stdout.decode("utf-8", "replace")
    if proc.returncode != 0:
        print(out)
        fail("command returned %d: %s" % (proc.returncode, printable))
    if not quiet and out.strip():
        for line in out.strip().splitlines()[-12:]:
            print("    " + line)
    return out


def check_toolchain():
    problems = []
    for name, path in [
        ("aapt2", AAPT2), ("d8", D8), ("zipalign", ZIPALIGN), ("apksigner", APKSIGNER),
        ("android.jar", ANDROID_JAR), ("kotlinc", KOTLINC), ("kotlin-stdlib.jar", KOTLIN_STDLIB),
    ]:
        if not os.path.exists(path):
            problems.append("  missing %-18s %s" % (name, path))
    if problems:
        print("Toolchain incomplete:")
        print("\n".join(problems))
        print("\nInstall with:")
        print("  sdkmanager \"platform-tools\" \"platforms;%s\" \"build-tools;%s\"" % (PLATFORM, BUILD_TOOLS))
        fail("toolchain")


def sources():
    out = []
    for base, _, files in os.walk(os.path.join(APP, "src")):
        for f in files:
            if f.endswith(".kt"):
                out.append(os.path.join(base, f))
    out.sort()
    return out


def kotlin_sources_arg():
    return sources()


def ensure_keystore():
    if os.path.exists(KEYSTORE):
        return
    os.makedirs(os.path.dirname(KEYSTORE), exist_ok=True)
    print("  generating upload keystore (keep this file and its password safe)")
    run([KEYTOOL, "-genkeypair", "-v",
         "-keystore", KEYSTORE,
         "-alias", KEY_ALIAS,
         "-keyalg", "RSA", "-keysize", "4096", "-validity", "10000",
         "-storepass", KEYSTORE_PASS, "-keypass", KEYSTORE_PASS,
         "-dname", "CN=Khai Foods Pvt Ltd, OU=Khai Tracker, O=Khai Foods Pvt Ltd, L=Jamshedpur, ST=Jharkhand, C=IN"])


def compile_resources():
    print("[1/7] compiling resources")
    res_zip = os.path.join(BUILD, "res.zip")
    gen = os.path.join(BUILD, "gen")
    os.makedirs(gen, exist_ok=True)
    run([AAPT2, "compile", "--dir", os.path.join(APP, "res"), "-o", res_zip])
    unsigned = os.path.join(BUILD, "base-unsigned.apk")
    run([
        AAPT2, "link", "-o", unsigned,
        "-I", ANDROID_JAR,
        "--manifest", os.path.join(APP, "AndroidManifest.xml"),
        "-R", res_zip,
        "-A", os.path.join(APP, "assets"),
        "--java", gen,
        "--auto-add-overlay",
        "--min-sdk-version", MIN_SDK,
        "--target-sdk-version", TARGET_SDK,
        "--version-code", VERSION_CODE,
        "--version-name", VERSION_NAME,
        "--no-version-vectors" if False else "--no-static-lib-packages",
    ])
    proto = os.path.join(BUILD, "base-proto.apk")
    run([
        AAPT2, "link", "-o", proto,
        "-I", ANDROID_JAR,
        "--manifest", os.path.join(APP, "AndroidManifest.xml"),
        "-R", res_zip,
        "-A", os.path.join(APP, "assets"),
        "--auto-add-overlay",
        "--proto-format",
        "--min-sdk-version", MIN_SDK,
        "--target-sdk-version", TARGET_SDK,
        "--version-code", VERSION_CODE,
        "--version-name", VERSION_NAME,
    ])
    return unsigned, proto, gen


def compile_kotlin(gen):
    print("[2/7] compiling Kotlin and the generated R class")
    classes = os.path.join(BUILD, "classes")
    os.makedirs(classes, exist_ok=True)
    rjava = os.path.join(gen, PACKAGE.replace(".", os.sep), "R.java")
    if not os.path.exists(rjava):
        fail("R.java was not generated at " + rjava)
    run([KOTLINC, "-classpath", ANDROID_JAR, "-jvm-target", "1.8", "-no-reflect",
         "-d", classes] + kotlin_sources_arg() + [rjava])
    javac = os.path.join(JAVA_HOME, "bin", "javac.exe")
    run([javac, "-source", "1.8", "-target", "1.8", "-bootclasspath", ANDROID_JAR,
         "-classpath", ANDROID_JAR, "-d", classes, rjava])
    return classes


def dex(classes):
    print("[3/7] dexing")
    out = os.path.join(BUILD, "dex")
    os.makedirs(out, exist_ok=True)
    class_files = []
    for base, _, files in os.walk(classes):
        for f in files:
            if f.endswith(".class"):
                class_files.append(os.path.join(base, f))
    # Windows caps the command line around 32k; D8 accepts an @argfile instead.
    # This R8 build reads one literal argument per line (no quote stripping),
    # so each path is written bare on its own line — spaces are preserved.
    argfile = os.path.join(BUILD, "d8-args.txt")
    args = ["--release", "--min-api", MIN_SDK, "--lib", ANDROID_JAR,
            "--output", out] + class_files + [KOTLIN_STDLIB]
    with open(argfile, "w", encoding="utf-8", newline="\n") as fh:
        for arg in args:
            fh.write(arg + "\n")
    run([D8, "@" + argfile])
    return os.path.join(out, "classes.dex")


def package_apk(unsigned, classes_dex):
    print("[4/7] packaging APK")
    apk = os.path.join(BUILD, "khai-tracker-%s-unsigned.apk" % VERSION_NAME)
    shutil.copyfile(unsigned, apk)
    with zipfile.ZipFile(apk, "a", zipfile.ZIP_DEFLATED) as z:
        # A fixed timestamp keeps the signed APK byte-identical across rebuilds;
        # z.write() would embed the dex file's changing mtime instead.
        info = zipfile.ZipInfo("classes.dex", date_time=(1980, 1, 1, 0, 0, 0))
        info.compress_type = zipfile.ZIP_DEFLATED
        with open(classes_dex, "rb") as dex_file:
            z.writestr(info, dex_file.read())
    return apk


def align_and_sign(apk):
    print("[5/7] aligning and signing")
    aligned = os.path.join(BUILD, "khai-tracker-%s-aligned.apk" % VERSION_NAME)
    run([ZIPALIGN, "-f", "-p", "4", apk, aligned])
    signed = os.path.join(BUILD, "khai-tracker-%s.apk" % VERSION_NAME)
    if os.path.exists(signed):
        os.remove(signed)
    run([APKSIGNER, "sign",
         "--ks", KEYSTORE, "--ks-pass", "pass:" + KEYSTORE_PASS,
         "--key-pass", "pass:" + KEYSTORE_PASS, "--ks-key-alias", KEY_ALIAS,
         "--v1-signing-enabled", "true", "--v2-signing-enabled", "true",
         "--out", signed, aligned])
    run([APKSIGNER, "verify", "--print-certs", signed], quiet=True)
    return signed


def build_aab(proto, classes_dex):
    print("[6/7] building Android App Bundle")
    module_dir = os.path.join(BUILD, "module")
    if os.path.exists(module_dir):
        shutil.rmtree(module_dir)
    os.makedirs(module_dir)
    with zipfile.ZipFile(proto) as z:
        z.extractall(module_dir)

    manifest_dir = os.path.join(module_dir, "manifest")
    os.makedirs(manifest_dir, exist_ok=True)
    src_manifest = os.path.join(module_dir, "AndroidManifest.xml")
    if os.path.exists(src_manifest):
        shutil.move(src_manifest, os.path.join(manifest_dir, "AndroidManifest.xml"))
    dex_dir = os.path.join(module_dir, "dex")
    os.makedirs(dex_dir, exist_ok=True)
    shutil.copyfile(classes_dex, os.path.join(dex_dir, "classes.dex"))

    module_zip = os.path.join(BUILD, "base.zip")
    with zipfile.ZipFile(module_zip, "w", zipfile.ZIP_DEFLATED) as z:
        for base, _, files in os.walk(module_dir):
            for f in files:
                full = os.path.join(base, f)
                rel = os.path.relpath(full, module_dir).replace(os.sep, "/")
                z.write(full, rel)

    aab = os.path.join(BUILD, "khai-tracker-%s.aab" % VERSION_NAME)
    if os.path.exists(aab):
        os.remove(aab)
    run([os.path.join(JAVA_HOME, "bin", "java.exe"), "-jar", BUNDLETOOL,
         "build-bundle", "--modules", module_zip, "--output", aab])
    return aab


def build_universal(aab):
    """One signed APK that installs on any device, for testing and for offline hand-out."""
    print("[7/7] building universal APK from the bundle")
    apks = os.path.join(BUILD, "khai-tracker.apks")
    if os.path.exists(apks):
        os.remove(apks)
    run([os.path.join(JAVA_HOME, "bin", "java.exe"), "-jar", BUNDLETOOL, "build-apks",
         "--bundle", aab, "--output", apks, "--mode=universal",
         "--ks", KEYSTORE, "--ks-pass", "pass:" + KEYSTORE_PASS,
         "--key-pass", "pass:" + KEYSTORE_PASS, "--ks-key-alias", KEY_ALIAS])
    out_dir = os.path.join(BUILD, "apks-out")
    if os.path.exists(out_dir):
        shutil.rmtree(out_dir)
    os.makedirs(out_dir)
    universal = os.path.join(out_dir, "universal.apk")
    with zipfile.ZipFile(apks) as z:
        with open(universal, "wb") as f:
            f.write(z.read("universal.apk"))
    return universal


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apk", action="store_true", help="APK only")
    ap.add_argument("--clean", action="store_true", help="delete build output first")
    args = ap.parse_args()

    if args.clean and os.path.exists(BUILD):
        shutil.rmtree(BUILD)
    os.makedirs(BUILD, exist_ok=True)

    print("Khai Tracker %s (versionCode %s)" % (VERSION_NAME, VERSION_CODE))
    print("SDK   : " + SDK)
    print("JDK   : " + JAVA_HOME)
    print("Sources: %d Kotlin files" % len(kotlin_sources_arg()))
    check_toolchain()
    ensure_keystore()

    unsigned, proto, gen = compile_resources()
    classes = compile_kotlin(gen)
    classes_dex = dex(classes)
    apk = package_apk(unsigned, classes_dex)
    signed = align_and_sign(apk)
    print("\nAPK  %s  (%.1f MB)" % (signed, os.path.getsize(signed) / 1e6))

    if not args.apk:
        aab = build_aab(proto, classes_dex)
        print("AAB  %s  (%.1f MB)" % (aab, os.path.getsize(aab) / 1e6))
        universal = build_universal(aab)
        print("UNI  %s  (%.1f MB)" % (universal, os.path.getsize(universal) / 1e6))
        print("\nUpload the .aab to Play Console; sideload either APK with:")
        print("  adb install -r \"%s\"" % universal)


if __name__ == "__main__":
    main()
