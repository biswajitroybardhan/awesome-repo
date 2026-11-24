# Deploying the static site — runbook (NOT YET DEPLOYED)

The site in this folder is already deployable as-is: plain HTML, CSS and JavaScript,
no build step and no runtime network calls. Nothing here has been published.

Public base URL (GitHub Pages, project site):

`https://biswajitroybardhan.github.io/awesome-repo/`

## 1. Publish

Pick one static host (GitHub Pages, S3 + CloudFront, Netlify, or a normal web server):

- Publish the **contents** of `khai-site/` at the domain root, not the folder itself.
- Keep these files at the root: `index.html`, `privacy.html`, `security.html`,
  `robots.txt`, `sitemap.xml`, `_headers`, and the hidden `.well-known/security.txt`.
- Serve over HTTPS. Several pages reference `https://biswajitroybardhan.github.io/awesome-repo/...` as their
  canonical URL; HTTP would conflict with those references.
- Do not add a build step or a CDN script. That would break the site's no-network design.
- Apply the security headers in `_headers`. Netlify reads it automatically; on GitHub Pages,
  S3/CloudFront or a normal web server, set the same headers in the host configuration. The
  CSP allows this site's inline CSS/JS and local downloads but sets `connect-src 'none'`.

For GitHub Pages specifically: repository Settings → Pages → deploy from a branch,
then select the branch and `/root` (or `/docs` only if the files are moved there).
A custom domain requires DNS entries under the domain owner's control.

> No deployment has been performed from this workspace. An `origin` remote is configured, but no
> GitHub authentication or hosting/DNS credentials are available here. Publishing still requires
> access that has not been supplied.

## 2. Verify after publishing

```powershell
$pages = 'index.html','functions.html','blueprint.html','hospital.html',
         'assistant.html','demo.html','security.html','privacy.html',
         'robots.txt','sitemap.xml','.well-known/security.txt'
foreach ($p in $pages) {
  try { $r = Invoke-WebRequest "https://biswajitroybardhan.github.io/awesome-repo/$p" -UseBasicParsing
        "{0} {1}" -f $r.StatusCode, $p }
  catch { "FAIL $p : $($_.Exception.Message)" }
}
```

All eleven must return 200. The exact privacy URL that must be live is
`https://biswajitroybardhan.github.io/awesome-repo/privacy.html`.

Check that the security headers are present (adjust the host if `_headers` is not supported):

```powershell
$r = Invoke-WebRequest https://biswajitroybardhan.github.io/awesome-repo/ -UseBasicParsing
$r.Headers['Content-Security-Policy']
$r.Headers['X-Content-Type-Options']
$r.Headers['Referrer-Policy']
```

The CSP must include `connect-src 'none'`; the other two must be `nosniff` and `no-referrer`.

Verify the downloadable APK too:

```powershell
Invoke-WebRequest https://biswajitroybardhan.github.io/awesome-repo/files/khai-tracker-1.0.0.apk -OutFile apk-check.apk
(Get-FileHash apk-check.apk -Algorithm SHA256).Hash.ToLowerInvariant()
Get-Content khai-site\files\khai-tracker-1.0.0.apk.sha256
```

The two hashes must match. The pinned value at the time this runbook was written was
`40803ec96f6068ffe4dc863f7a429e496db33fa42c7424e9110e377d1c693b4f`.

The same page, header and APK checks are available as one script once the site is live:

```powershell
powershell -File khai-site\tools\verify_deploy.ps1 -BaseUrl https://biswajitroybardhan.github.io/awesome-repo
```

It exits non-zero if any check fails. It does not publish anything.

## 3. Before public launch

- Confirm both mailboxes are actually monitored (`MAILBOXES.md`).
- Replace the placeholder wording in `privacy.html` section 10 and `security.html`
  only when that is true.
- Remove any staging/noindex directive if one was added during development.
- Record the deployment URL and the date in the release ticket.

Deployment is not complete until step 2 passes on the public domain.
