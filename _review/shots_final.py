# -*- coding: utf-8 -*-
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_context(viewport={"width": 1280, "height": 800}).new_page()
    pg.goto("https://aww-preview.web.app/", wait_until="networkidle")
    pg.wait_for_timeout(1800)
    pg.screenshot(path="_review/audit_shots/final-hero.png")
    pg.eval_on_selector(".work__item", "e=>e.scrollIntoView({block:'center'})")
    pg.wait_for_timeout(1200)
    pg.screenshot(path="_review/audit_shots/final-proof.png")
    pg.eval_on_selector("#demo-video", "e=>e.scrollIntoView({block:'center'})")
    pg.wait_for_timeout(1200)
    pg.screenshot(path="_review/audit_shots/final-video.png")
    b.close()
print("OK")
