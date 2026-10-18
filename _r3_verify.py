# -*- coding: utf-8 -*-
import os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
from playwright.sync_api import sync_playwright

ROOT = r"C:\Users\Abhinav PC\Desktop\Website_projects\site"
B = "file:///" + ROOT.replace("\\", "/") + "/"
PAGES = ["index.html", "check.html", "calculator.html", "how-it-works.html", "opd-software.html",
         "whatsapp-booking.html", "google-maps.html", "nmc-rules.html", "pricing.html",
         "about.html", "faq.html", "mental-health.html", "specialties.html", "privacy.html", "sample.html"]
os.makedirs(ROOT + r"\_review\screens\round3", exist_ok=True)

with sync_playwright() as pw:
    b = pw.chromium.launch()
    bad = 0
    for p in PAGES:
        for w, h in [(320, 568), (360, 740), (390, 844), (768, 1024)]:
            pg = b.new_page(viewport={"width": w, "height": h})
            errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            pg.goto(B + p, wait_until="networkidle", timeout=60000)
            pg.wait_for_timeout(350)
            ov = pg.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
            if errs or ov:
                bad += 1
                print(f"ISSUE {p}@{w}: errs={errs[:1]} overflow={ov}")
            if w == 390:
                pg.screenshot(path=ROOT + rf"\_review\screens\round3\{p.replace('.html','')}_390.png", full_page=True)
            pg.close()
    print("regression issues:", bad)

    # ---- home measurements (the before/after numbers) ----
    pg = b.new_page(viewport={"width": 390, "height": 844})
    pg.goto(B + "index.html", wait_until="networkidle")
    pg.wait_for_timeout(600)
    m = pg.evaluate("""() => {
      const H = document.documentElement.scrollHeight;
      const screens = +(H / 844).toFixed(1);
      // visible EN words excluding footer
      const foot = document.querySelector('footer');
      const clone = document.body.cloneNode(true);
      clone.querySelectorAll('footer,script,style,.chat,#mcta,[hidden]').forEach(e => e.remove());
      const words = clone.innerText.trim().split(/\\s+/).length;
      // first WA button within first viewport?
      const wa = [...document.querySelectorAll('a[href*="wa.me"]')].map(a => a.getBoundingClientRect().top).filter(t => t >= 0);
      return {screens, words, firstWaTop: Math.round(Math.min(...wa))};
    }""")
    print("HOME: screens=", m["screens"], " visible words=", m["words"], " first WA button at y=", m["firstWaTop"], "(<844 = screen 1)")

    # calc overlap visual check on /calculator
    pg.goto(B + "calculator.html", wait_until="networkidle")
    pg.locator("#calc").scroll_into_view_if_needed(); pg.wait_for_timeout(500)
    ol = pg.evaluate("""() => {
      const jar = document.querySelector('.jar').getBoundingClientRect();
      const label = document.querySelector('.leaklabel').getBoundingClientRect();
      const big = document.querySelector('.calc__big').getBoundingClientRect();
      return label.bottom <= big.top + 2;
    }""")
    print("jar label clear of big number:", ol)
    pg.screenshot(path=ROOT + r"\_review\screens\round3\calculator_fixed_390.png")

    # quiz works on /check
    pg.goto(B + "check.html", wait_until="networkidle"); pg.wait_for_timeout(500)
    for _ in range(7):
        pg.locator(".qz__opt").nth(1).click(); pg.wait_for_timeout(80)
    print("quiz on /check works:", pg.locator("#qzResult").is_visible())

    # audio presence
    pg.goto(B + "index.html", wait_until="networkidle")
    pg.locator("#work").scroll_into_view_if_needed(); pg.wait_for_timeout(500)
    print("audio card visible with real file:", pg.locator(".audiocard").is_visible())
    pg.close(); b.close()
print("done")
