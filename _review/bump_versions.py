# -*- coding: utf-8 -*-
"""Bump cache-busting versions on all pages: style v17, script v15, i18n v14."""
import io, glob, os

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PAIRS = [
    ("style.css?v=15", "style.css?v=17"), ("style.css?v=16", "style.css?v=17"),
    ("script.js?v=13", "script.js?v=15"), ("script.js?v=14", "script.js?v=15"),
    ("i18n.js?v=12", "i18n.js?v=14"), ("i18n.js?v=13", "i18n.js?v=14"),
]
for f in glob.glob("*.html") + glob.glob("admin/*.html"):
    s = io.open(f, encoding="utf-8").read()
    s2 = s
    for old, new in PAIRS:
        s2 = s2.replace(old, new)
    if s2 != s:
        io.open(f, "w", encoding="utf-8", newline="").write(s2)
        print("bumped", f)
print("OK")
