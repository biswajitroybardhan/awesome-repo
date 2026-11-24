#Requires -Version 5.1
<#
    Generate a dedicated Khai Tracker UPLOAD keystore for Play App Signing.

    Important:
      * This is an upload key only. With Play App Signing, Google generates and
        holds the app signing key; this key signs the AAB you upload.
      * Nothing is written inside the repository. The keystore and its password
        are stored in a user-only directory outside the repo.
      * Enrolling the app in Play App Signing still has to be done in Play Console.
        This script does not do that and does not claim it was done.

    Usage:
      powershell -ExecutionPolicy Bypass -File tools\release_key.ps1
      powershell -ExecutionPolicy Bypass -File tools\release_key.ps1 -Verify
#>
[CmdletBinding()]
param(
    [string]$KeyDir,
    [string]$AliasName = 'khai-upload',
    [switch]$Verify
)

$ErrorActionPreference = 'Stop'

$repo = Split-Path -Parent $PSScriptRoot
if (-not $KeyDir) { $KeyDir = Join-Path $env:LOCALAPPDATA 'KhaiTracker\release' }
$KeyDir = [System.IO.Path]::GetFullPath($KeyDir)

if ($KeyDir.StartsWith($repo, [System.StringComparison]::OrdinalIgnoreCase)) {
    Write-Error "Refusing to write signing material inside the repository ($repo). Choose -KeyDir outside it."
    exit 2
}

$keystore = Join-Path $KeyDir 'khai-upload.jks'
$passwordFile = Join-Path $KeyDir 'upload.password.txt'

$javaHome = $env:JAVA_HOME
if (-not $javaHome -or -not (Test-Path (Join-Path $javaHome 'bin\keytool.exe'))) {
    $javaHome = 'C:\Program Files\Microsoft\jdk-17.0.21.21-hotspot'
}
$keytool = Join-Path $javaHome 'bin\keytool.exe'
if (-not (Test-Path $keytool)) {
    Write-Error "keytool not found at $keytool. Set JAVA_HOME to a JDK 17 installation."
    exit 2
}

function Invoke-Native([string]$File, [string[]]$NativeArgs) {
    # keytool writes progress to stderr; with ErrorActionPreference=Stop that
    # would abort a successful run, so isolate native stderr here.
    $previous = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
        return (& $File @NativeArgs 2>&1 | Out-String)
    } finally {
        $ErrorActionPreference = $previous
    }
}

function Protect-Directory([string]$Path) {
    if (-not (Test-Path $Path)) { New-Item -ItemType Directory -Force -Path $Path | Out-Null }
    try {
        $user = "$env:USERDOMAIN\$env:USERNAME"
        Invoke-Native 'icacls' @($Path, '/inheritance:r', "/grant:r", "${user}:(OI)(CI)F") | Out-Null
    } catch {
        Write-Warning "Could not restrict ACL on $Path. Move the keystore to a password manager or secure vault before release."
    }
}

function Protect-File([string]$Path) {
    try {
        $user = "$env:USERDOMAIN\$env:USERNAME"
        Invoke-Native 'icacls' @($Path, '/inheritance:r', "/grant:r", "${user}:F") | Out-Null
    } catch {
        Write-Warning "Could not restrict ACL on $Path."
    }
}

function Invoke-KeytoolWithSecret([string[]]$NativeArgs, [string]$Password) {
    $env:KHAI_KEYTOOL_PASS = $Password
    try {
        return Invoke-Native $keytool $NativeArgs
    } finally {
        Remove-Item Env:KHAI_KEYTOOL_PASS -ErrorAction SilentlyContinue
    }
}

function Show-Fingerprint([string]$Password) {
    $details = Invoke-KeytoolWithSecret @('-list', '-v', '-keystore', $keystore,
        '-storepass:env', 'KHAI_KEYTOOL_PASS', '-alias', $AliasName) $Password
    $sha = ($details -split "`n" | Where-Object { $_ -match 'SHA256:' } | Select-Object -First 1).Trim()
    Write-Host "Upload key SHA-256: $sha"
    Write-Host ''
    Write-Host 'Build with this key (PowerShell):'
    Write-Host "  `$env:KHAI_KEYSTORE = '$keystore'"
    Write-Host "  `$env:KHAI_KEYSTORE_PASS_FILE = '$passwordFile'"
    Write-Host "  `$env:KHAI_KEY_ALIAS = '$AliasName'"
    Write-Host '  py tools\build.py'
    Write-Host ''
    Write-Host 'Next step in Play Console: create the app, complete App signing setup,'
    Write-Host 'choose "Use a different upload key", then upload the generated .aab to Internal testing.'
    Write-Host 'Nothing here enrolls the app or makes it public.'
}

if ($Verify) {
    if (-not (Test-Path $keystore) -or -not (Test-Path $passwordFile)) {
        Write-Error "No upload key found at $keystore. Run without -Verify first."
        exit 2
    }
    Show-Fingerprint ((Get-Content $passwordFile -Raw).Trim())
    exit 0
}

if (Test-Path $keystore) {
    if (-not (Test-Path $passwordFile)) {
        Write-Warning 'An incomplete keystore exists without its password file; discarding it.'
        Remove-Item -Force $keystore
    } else {
        Write-Host "Existing upload key: $keystore"
        Show-Fingerprint ((Get-Content $passwordFile -Raw).Trim())
        exit 0
    }
}

Protect-Directory $KeyDir

$bytes = New-Object byte[] 32
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
$password = -join ($bytes | ForEach-Object { $_.ToString('x2') })

$dname = 'CN=Khai Foods Pvt Ltd, OU=Khai Tracker upload, O=Khai Foods Pvt Ltd, L=Jamshedpur, ST=Jharkhand, C=IN'
Write-Host "Generating a 4096-bit RSA upload key in $KeyDir (outside the repo)..."
Invoke-KeytoolWithSecret @('-genkeypair', '-v', '-keystore', $keystore, '-alias', $AliasName,
    '-keyalg', 'RSA', '-keysize', '4096', '-validity', '10000',
    '-storepass:env', 'KHAI_KEYTOOL_PASS', '-keypass:env', 'KHAI_KEYTOOL_PASS',
    '-dname', $dname) $password | Out-Null
if ($LASTEXITCODE -ne 0) {
    Remove-Item -Force $keystore -ErrorAction SilentlyContinue
    Write-Error 'keytool failed; no key was kept.'
    exit 1
}

[System.IO.File]::WriteAllText($passwordFile, $password + "`r`n", (New-Object System.Text.UTF8Encoding($false)))
Protect-File $keystore
Protect-File $passwordFile

Write-Host "Keystore: $keystore"
Write-Host "Password file: $passwordFile"
Write-Host 'The password is deliberately not printed here. Store both in your team password manager;'
Write-Host 'losing them means you cannot sign future uploads until Play support resets the key.'
Write-Host ''
Show-Fingerprint $password
