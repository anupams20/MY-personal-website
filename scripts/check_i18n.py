# -*- coding: utf-8 -*-
"""Every data-i18n key used in HTML must exist in i18n.js hi KEYS."""
import io, re, glob, sys
sys.stdout.reconfigure(encoding='utf-8')
i18n = io.open("i18n.js", encoding="utf-8").read()
keys = set(re.findall(r"'([a-z0-9_.\-]+)'\s*:", i18n, re.I))
missing = set()
for f in glob.glob("*.html"):
    s = io.open(f, encoding="utf-8").read()
    for m in re.finditer(r'data-i18n(?:-html)?="([^"]+)"', s):
        if m.group(1) not in keys: missing.add(f + " :: " + m.group(1))
print("I18N CHECK:", ("MISSING\n" + "\n".join(sorted(missing))) if missing else "PASS")
sys.exit(1 if missing else 0)
