# -*- coding: utf-8 -*-
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_context(viewport={"width": 1280, "height": 800}).new_page()
    pg.goto("https://aww-preview.web.app/", wait_until="networkidle")
    pg.wait_for_timeout(1500)
    pg.eval_on_selector(".lazyfr--shot", "e=>e.scrollIntoView({block:'center'})")
    pg.wait_for_timeout(1500)
    pg.screenshot(path="_review/audit_shots/final-facades.png")
    b.close()
print("OK")
