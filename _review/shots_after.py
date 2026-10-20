# -*- coding: utf-8 -*-
"""After-shots of the changed sections on UAT."""
import os
from playwright.sync_api import sync_playwright

OUT = os.path.join(os.path.dirname(__file__), "audit_shots")
B = "https://aww-preview.web.app"
JOBS = [  # (url, scroll-to selector or None, name)
    (B + "/", None, "after-hero-creds"),
    (B + "/", "#work", "after-work"),
    (B + "/", "#pricing", "after-pricing"),
    (B + "/about", ".storygrid", "after-about-story"),
    (B + "/opd-software", "#ba", "after-opd-ba"),
    (B + "/mental-health", None, "after-mh"),
    (B + "/nmc-rules", ".nmcgrid", "after-nmc"),
]
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": 1280, "height": 800})
    pg = ctx.new_page()
    for url, sel, name in JOBS:
        pg.goto(url, wait_until="networkidle", timeout=45000)
        pg.wait_for_timeout(1200)
        if sel:
            pg.eval_on_selector(sel, "e=>e.scrollIntoView({block:'center'})")
            pg.wait_for_timeout(1500)
        pg.screenshot(path=os.path.join(OUT, name + ".png"))
        print("OK", name)
    # mobile hero
    ctx2 = b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, is_mobile=True)
    pg2 = ctx2.new_page()
    pg2.goto(B + "/", wait_until="networkidle", timeout=45000)
    pg2.wait_for_timeout(1500)
    pg2.screenshot(path=os.path.join(OUT, "after-home-mobile-top.png"))
    print("OK after-home-mobile-top")
    b.close()
print("DONE")
