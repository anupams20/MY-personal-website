import os
from playwright.sync_api import sync_playwright

BASE = "file:///C:/Users/Abhinav PC/Desktop/Website_projects/site/"
OUT = r"C:\Users\Abhinav PC\Desktop\Website_projects\site\shots"
os.makedirs(OUT, exist_ok=True)
PAGES = ["index.html", "how-it-works.html", "opd-software.html", "whatsapp-booking.html",
         "google-maps.html", "nmc-rules.html", "pricing.html", "about.html",
         "faq.html", "mental-health.html", "specialties.html", "details.html"]

with sync_playwright() as pw:
    b = pw.chromium.launch()
    # home at 4 widths
    for w, h in [(360, 740), (390, 844), (768, 1024), (1440, 900)]:
        pg = b.new_page(viewport={"width": w, "height": h})
        errors = []
        pg.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
        pg.on("pageerror", lambda e: errors.append(str(e)))
        pg.goto(BASE + "index.html", wait_until="networkidle", timeout=60000)
        pg.wait_for_timeout(1000)
        pg.screenshot(path=rf"{OUT}\home_{w}.png", full_page=True)
        overflow = pg.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
        broken = pg.evaluate("() => [...document.images].filter(i => !i.complete || i.naturalWidth === 0).length")
        print(f"home {w}px: err={len(errors)} broken_img={broken} overflow={overflow}")
        for e in errors[:3]: print("  ERR:", e[:140])
        pg.close()
    # all subpages at 360
    for p in PAGES[1:]:
        pg = b.new_page(viewport={"width": 360, "height": 740})
        errors = []
        pg.on("pageerror", lambda e: errors.append(str(e)))
        pg.goto(BASE + p, wait_until="networkidle", timeout=60000)
        pg.wait_for_timeout(600)
        overflow = pg.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
        print(f"{p}: err={len(errors)} overflow={overflow}")
        for e in errors[:2]: print("  ERR:", e[:140])
        pg.close()
    # functional: quiz + calc + opd mock + before/after
    pg = b.new_page(viewport={"width": 390, "height": 844})
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto(BASE + "index.html", wait_until="networkidle")
    for _ in range(7):
        pg.locator(".qz__opt").nth(1).click(); pg.wait_for_timeout(100)
    ok_quiz = pg.locator("#qzResult").is_visible()
    pg.locator("#c_ns").evaluate("el => { el.value = 35; el.dispatchEvent(new Event('input')) }")
    jar = pg.locator("#jar").get_attribute("data-rate")
    pg.locator("#baA").click(); flipped = "flip" in (pg.locator("#ba").get_attribute("class") or "")
    print(f"FUNC: quiz={ok_quiz} jar_rate={jar} ba_flip={flipped} js_errors={len(errs)}")
    pg.close()
    pg = b.new_page(viewport={"width": 390, "height": 844})
    pg.goto(BASE + "opd-software.html", wait_until="networkidle")
    pg.locator('#opdmock .steps button[data-s="2"]').click(); pg.wait_for_timeout(200)
    print("OPD mock step3 shows Rx:", "letterhead" in pg.locator("#opdBody").inner_text())
    pg.screenshot(path=rf"{OUT}\opd_360.png", full_page=True)
    pg.close()
    b.close()
print("done")
