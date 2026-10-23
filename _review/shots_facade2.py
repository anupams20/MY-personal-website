# -*- coding: utf-8 -*-
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_context(viewport={"width": 1280, "height": 800}).new_page()
    pg.goto("https://aww-preview.web.app/", wait_until="networkidle")
    pg.wait_for_timeout(1500)
    shots = pg.locator(".lazyfr--shot")
    print("count:", shots.count())
    for i in range(shots.count()):
        box = shots.nth(i).bounding_box()
        print(i, box)
    shots.first.scroll_into_view_if_needed()
    pg.wait_for_timeout(1200)
    pg.screenshot(path="_review/audit_shots/final-facades2.png")
    b.close()
print("OK")
