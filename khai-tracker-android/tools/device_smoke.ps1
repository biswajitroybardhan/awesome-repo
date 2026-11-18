#Requires -Version 5.1
<#
    Khai Tracker 1.0.0 - device smoke run and real screenshot capture.

    This script does NOT claim that the app passes tests. It installs the signed
    APK on a real attached device, records what is installed, and captures the
    screens a tester navigates to. The tester still completes docs/TESTING.md.

    It refuses to run when no physical device is attached, so no report or
    screenshot can be produced without a device.

    Usage:
      powershell -ExecutionPolicy Bypass -File tools\device_smoke.ps1
      powershell -ExecutionPolicy Bypass -File tools\device_smoke.ps1 -Universal
#>
[CmdletBinding()]
param(
    [string]$Apk,
    [switch]$Universal,
    [string]$OutDir,
    [switch]$NoInstall
)

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$sdk = $env:ANDROID_SDK_ROOT
if (-not $sdk) { $sdk = $env:ANDROID_HOME }
if (-not $sdk) { $sdk = Join-Path $env:LOCALAPPDATA 'Android\Sdk' }
$adb = Join-Path $sdk 'platform-tools\adb.exe'

if (-not (Test-Path $adb)) {
    Write-Host "adb not found at $adb. Install platform-tools or set ANDROID_SDK_ROOT. No report was created."
    exit 2
}

if (-not $Apk) {
    if ($Universal) {
        $Apk = Join-Path $root 'build\apks-out\universal.apk'
    } else {
        $Apk = Join-Path $root 'build\khai-tracker-1.0.0.apk'
    }
}
if (-not (Test-Path $Apk)) {
    Write-Host "APK not found: $Apk. Run tools\build.py first. No report was created."
    exit 2
}
if (-not $OutDir) { $OutDir = Join-Path $root 'build\device-check' }
$OutDir = [System.IO.Path]::GetFullPath($OutDir)
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$devices = @(& $adb devices | Select-String -Pattern '^\S+\s+device\s*$')
if ($devices.Count -lt 1) {
    Write-Host "No authorised device is attached ('adb devices' shows no 'device' row). No report or screenshots were created."
    exit 2
}
$serialLine = ($devices[0].Line -split '\s+')[0]
$deviceArg = @('-s', $serialLine)

function Invoke-Adb {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Arguments)
    & $adb @deviceArg @Arguments
}

function Get-Prop([string]$Name) {
    (Invoke-Adb shell getprop $Name 2>$null) -join ' ' | ForEach-Object { $_.Trim() }
}

$model = Get-Prop 'ro.product.model'
$release = Get-Prop 'ro.build.version.release'
$sdkLevel = Get-Prop 'ro.build.version.sdk'
$density = Get-Prop 'ro.product.density'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'

$report = Join-Path $OutDir "report-$stamp.txt"
$lines = [System.Collections.Generic.List[string]]::new()
function Note([string]$Text) {
    $lines.Add($Text)
    Write-Host $Text
}

Note 'Khai Tracker - device smoke record'
Note "Recorded: $stamp"
Note "Device serial: $serialLine"
Note "Model: $model"
Note "Android: $release (SDK $sdkLevel)"
Note "Density: $density"
Note "APK: $Apk"
Note 'This record captures observations only. It is not a test pass and does not replace docs/TESTING.md.'
Note ''

$hash = (Get-FileHash -Algorithm SHA256 $Apk).Hash.ToLowerInvariant()
Note "APK SHA-256: $hash"

$apksigner = Join-Path $sdk "build-tools\35.0.0\apksigner.bat"
if (Test-Path $apksigner) {
    $certs = & $apksigner verify --print-certs $Apk 2>&1 | Out-String
    $certFingerprint = ($certs -split "`n" | Where-Object { $_ -match 'SHA-256 digest' }) -join ' '
    Note "Local APK signer: $certFingerprint"
}

if (-not $NoInstall) {
    Note ''
    Note 'Installing APK...'
    $install = Invoke-Adb install -r $Apk 2>&1 | Out-String
    Note $install.Trim()
}

Invoke-Adb logcat -c 2>$null | Out-Null
$resolved = Invoke-Adb shell cmd package resolve-activity --brief in.khaifoods.tracker 2>$null | Out-String
Note "Launch activity: $($resolved.Trim())"
Invoke-Adb shell monkey -p in.khaifoods.tracker -c android.intent.category.LAUNCHER 1 2>$null | Out-Null
Start-Sleep -Seconds 3

$dump = Invoke-Adb shell dumpsys package in.khaifoods.tracker 2>$null | Out-String
$versionName = ($dump -split "`n" | Where-Object { $_ -match 'versionName=' } | Select-Object -First 1).Trim()
$versionCode = ($dump -split "`n" | Where-Object { $_ -match 'versionCode=' } | Select-Object -First 1).Trim()
Note "Installed: $versionName $versionCode"

$captures = @(
    @{ Name = '01-onboarding'; Prompt = 'Leave the app on its first-run onboarding screen, then press Enter.' },
    @{ Name = '02-today'; Prompt = 'Complete onboarding and open Today (test data only), then press Enter.' },
    @{ Name = '03-history'; Prompt = 'Open History, then press Enter.' },
    @{ Name = '04-progress'; Prompt = 'Open Progress, then press Enter.' },
    @{ Name = '05-guide'; Prompt = 'Open Guide, tap a chip to show an answer, then press Enter.' }
)

Note ''
Note 'Screenshots: the tester navigates; this script only captures what is on screen.'
foreach ($capture in $captures) {
    Read-Host $capture.Prompt | Out-Null
    $png = Join-Path $OutDir "$($capture.Name)-$stamp.png"
    # cmd /c preserves the raw bytes; PowerShell's native-output pipeline does not.
    $quotedAdb = '"' + $adb + '"'
    $quotedPng = '"' + $png + '"'
    $deviceFlags = $deviceArg -join ' '
    & cmd /c "$quotedAdb $deviceFlags exec-out screencap -p > $quotedPng" 2>$null | Out-Null
    if ((Test-Path $png) -and ((Get-Item $png).Length -gt 0)) {
        Note "Captured: $png"
    } else {
        Note "NOT captured: $png (screencap failed; check the device screen is on)"
    }
}

$logErrors = Invoke-Adb logcat -d '*:E' 2>$null | Out-String
$errorFile = Join-Path $OutDir "logcat-errors-$stamp.txt"
[System.IO.File]::WriteAllText($errorFile, $logErrors, [System.Text.Encoding]::UTF8)
$errorCount = ($logErrors -split "`n" | Where-Object { $_ -match 'AndroidRuntime|FATAL EXCEPTION' }).Count
Note ''
Note "Fatal/runtime log lines: $errorCount (full log: $errorFile)"
Note 'Review the log and screenshots, then fill in docs/TESTING.md by hand. No pass/fail is inferred here.'

[System.IO.File]::WriteAllText($report, (($lines -join "`r`n") + "`r`n"), [System.Text.Encoding]::UTF8)
Write-Host "`nRecord written to $report"
