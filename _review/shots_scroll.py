# -*- coding: utf-8 -*-
"""Viewport (not full-page) shots after scrolling to anchors — artifact check."""
import os
from playwright.sync_api import sync_playwright

OUT = os.path.join(os.path.dirname(__file__), "audit_shots")
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": 1280, "height": 800})
    pg = ctx.new_page()
    pg.goto("https://aww-preview.web.app/", wait_until="networkidle", timeout=45000)
    pg.wait_for_timeout(1500)
    for anchor in ["solutions", "work", "pricing", "faq"]:
        pg.evaluate(f"document.getElementById('{anchor}').scrollIntoView()")
        pg.wait_for_timeout(1200)
        pg.screenshot(path=os.path.join(OUT, f"scroll-{anchor}.png"))
        print("OK", anchor)
    b.close()
print("DONE")
