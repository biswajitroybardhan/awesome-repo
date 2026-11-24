param(
  [string]$BaseUrl = 'https://khaifoods.in',
  [switch]$SkipApk
)

$ErrorActionPreference = 'Stop'
$failures = 0

function Check-Url([string]$path) {
  try {
    $response = Invoke-WebRequest -Uri "$BaseUrl/$path" -UseBasicParsing -MaximumRedirection 0
    if ($response.StatusCode -eq 200) {
      "OK    $path"
    } else {
      "FAIL  $path returned $($response.StatusCode)"
      $script:failures++
    }
    return $response
  } catch {
    "FAIL  $path : $($_.Exception.Message)"
    $script:failures++
    return $null
  }
}

'== Pages and support files =='
$pages = @(
  'index.html', 'functions.html', 'blueprint.html', 'hospital.html',
  'assistant.html', 'demo.html', 'security.html', 'privacy.html',
  'robots.txt', 'sitemap.xml', '.well-known/security.txt'
)
foreach ($page in $pages) { Check-Url $page | Out-Null }

'== Security headers =='
$root = Check-Url ''
if ($null -ne $root) {
  $csp = [string]$root.Headers['Content-Security-Policy']
  $nosniff = [string]$root.Headers['X-Content-Type-Options']
  $referrer = [string]$root.Headers['Referrer-Policy']
  $hsts = [string]$root.Headers['Strict-Transport-Security']

  if ($csp -match "connect-src\s+'none'") { 'OK    CSP connect-src none' }
  else { "FAIL  CSP missing connect-src 'none'"; $failures++ }
  if ($nosniff -eq 'nosniff') { 'OK    X-Content-Type-Options' }
  else { "FAIL  X-Content-Type-Options = '$nosniff'"; $failures++ }
  if ($referrer -eq 'no-referrer') { 'OK    Referrer-Policy' }
  else { "FAIL  Referrer-Policy = '$referrer'"; $failures++ }
  if ($hsts -match 'max-age=') { 'OK    HSTS present' }
  else { 'FAIL  HSTS missing (configure at the host if _headers is unsupported)'; $failures++ }
}

if (-not $SkipApk) {
  '== APK =='
  $shaFile = Join-Path $PSScriptRoot '..\files\khai-tracker-1.0.0.apk.sha256'
  if (-not (Test-Path $shaFile)) {
    "FAIL  Missing local checksum file: $shaFile"
    $failures++
  } else {
    $expected = (Get-Content $shaFile -First 1).Split(' ')[0].ToLowerInvariant()
    $tempApk = Join-Path $env:TEMP 'khai-tracker-deploy-check.apk'
    try {
      Invoke-WebRequest -Uri "$BaseUrl/files/khai-tracker-1.0.0.apk" -OutFile $tempApk -UseBasicParsing
      $actual = (Get-FileHash $tempApk -Algorithm SHA256).Hash.ToLowerInvariant()
      if ($actual -eq $expected) {
        "OK    APK SHA-256 $actual"
      } else {
        "FAIL  APK hash mismatch: expected $expected, got $actual"
        $failures++
      }
    } catch {
      "FAIL  APK download: $($_.Exception.Message)"
      $failures++
    } finally {
      if (Test-Path $tempApk) { Remove-Item $tempApk -Force }
    }
  }
}

if ($failures -eq 0) {
  'PASS: deployment checks completed'
  exit 0
}

"FAIL: $failures deployment check(s) failed"
exit 1
