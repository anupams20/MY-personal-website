# -*- coding: utf-8 -*-
"""v17 -> v18 on root pages. Read fully BEFORE opening for write."""
import io, glob, os
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
for f in glob.glob("*.html"):
    s = io.open(f, encoding="utf-8").read()
    s2 = s.replace("style.css?v=18", "style.css?v=19")
    if s2 != s:
        with io.open(f, "w", encoding="utf-8", newline="") as out:
            out.write(s2)
        print("bumped", f, len(s2), "bytes")
print("OK")
