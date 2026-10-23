# -*- coding: utf-8 -*-
"""QA: about-page certificate viewer at mobile + desktop widths."""
import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8")
URL = "file:///C:/Users/Abhinav PC/Desktop/Website_projects/site/about.html"
OUT = r"C:\Users\Abhinav PC\Desktop\Website_projects\site\_review\audit_shots"
fails = []

def check(name, cond):
    print(("PASS " if cond else "FAIL ") + name)
    if not cond:
        fails.append(name)

with sync_playwright() as pw:
    b = pw.chromium.launch()
    for label, w, h in [("mobile", 390, 844), ("desktop", 1366, 850)]:
        pg = b.new_page(viewport={"width": w, "height": h})
        reqs = []
        pg.on("request", lambda r: reqs.append(r.url))
        pg.goto(URL)
        pg.wait_for_timeout(600)
        check(label + ": cert button visible", pg.locator("#vCert").is_visible())
        check(label + ": cert-data NOT loaded before open",
              not any("cert-data" in u for u in reqs))
        pg.click("#vCert")
        pg.wait_for_selector("#certCanvas:not([hidden])", timeout=5000)
        check(label + ": canvas shown after open", pg.locator("#certCanvas").is_visible())
        check(label + ": cert-data lazy-loaded on open",
              any("cert-data" in u for u in reqs))
        check(label + ": no .jpg/.png/.pdf cert request",
              not any(("cert" in u.lower() and u.lower().endswith((".jpg", ".png", ".pdf"))) for u in reqs))
        check(label + ": focus on close button", pg.evaluate("document.activeElement.id") == "certClose")
        canvas_w = pg.evaluate("document.getElementById('certCanvas').getBoundingClientRect().width")
        check(label + ": canvas fits viewport", 0 < canvas_w <= w)
        pg.screenshot(path=OUT + r"\cert_" + label + ".png")
        # ESC closes + focus returns
        pg.keyboard.press("Escape")
        pg.wait_for_timeout(200)
        check(label + ": ESC closes modal", pg.locator("#certModal").is_hidden())
        check(label + ": focus returned to opener", pg.evaluate("document.activeElement.id") == "vCert")
        # placeholder photo slot
        check(label + ": photo placeholder marked",
              pg.evaluate("document.querySelector('.photoslot').classList.contains('missing')"))
        pg.close()
    # Hindi toggle sanity on mobile
    pg = b.new_page(viewport={"width": 390, "height": 844})
    pg.goto(URL)
    pg.wait_for_timeout(400)
    pg.click("[data-lang=hi]")
    pg.wait_for_timeout(400)
    t = pg.locator("#vCert b").text_content()
    check("hindi: cert card translated", "देखें" in (t or ""))
    pg.click("#vCert")
    pg.wait_for_selector("#certCanvas:not([hidden])", timeout=5000)
    pg.screenshot(path=OUT + r"\cert_mobile_hi.png")
    pg.close()
    b.close()

print(("ALL PASS" if not fails else "FAILURES: %d" % len(fails)))
sys.exit(1 if fails else 0)
