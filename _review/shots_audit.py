# -*- coding: utf-8 -*-
"""Phase-1 audit screenshots of UAT site: desktop 1280 + mobile 390, full page."""
import os
from playwright.sync_api import sync_playwright

BASE = "https://aww-preview.web.app"
PAGES = ["", "pricing", "about", "how-it-works", "opd-software", "check", "calculator", "faq", "specialties"]
OUT = os.path.join(os.path.dirname(__file__), "audit_shots")
os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    b = p.chromium.launch()
    for label, vp, dsf, mobile in [("desktop", {"width": 1280, "height": 800}, 1, False),
                                   ("mobile", {"width": 390, "height": 844}, 2, True)]:
        ctx = b.new_context(viewport=vp, device_scale_factor=dsf, is_mobile=mobile)
        pg = ctx.new_page()
        for path in PAGES:
            url = f"{BASE}/{path}"
            name = path or "home"
            try:
                pg.goto(url, wait_until="networkidle", timeout=45000)
                pg.wait_for_timeout(1800)  # let reveal animations settle
                # force reveal-on-scroll elements visible for a full-page shot
                pg.evaluate("document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'))")
                pg.screenshot(path=os.path.join(OUT, f"{name}-{label}.png"), full_page=True)
                print(f"OK {name}-{label}")
            except Exception as e:
                print(f"FAIL {name}-{label}: {e}")
        ctx.close()
    b.close()
print("DONE")
