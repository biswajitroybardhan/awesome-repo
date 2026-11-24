#!/usr/bin/env python3
"""Insert the embedded translation bundle and runtime before site.js on every page."""
from pathlib import Path

SITE = Path(__file__).resolve().parents[2]
ANCHOR = '<script src="scripts/site.js" defer></script>'
INSERT = ('<script src="scripts/translations.js" defer></script>\n'
          '<script src="scripts/i18n.js" defer></script>\n')

for page in sorted(SITE.glob('*.html')):
    source = page.read_text(encoding='utf-8')
    if 'scripts/i18n.js' in source:
        print('already', page.name)
        continue
    if ANCHOR not in source:
        print('skip', page.name)
        continue
    page.write_text(source.replace(ANCHOR, INSERT + ANCHOR, 1), encoding='utf-8', newline='')
    print('updated', page.name)
