import os
from playwright.sync_api import sync_playwright

URL = "file:///C:/Users/Abhinav PC/Desktop/Website_projects/site/index.html"
OUT = r"C:\Users\Abhinav PC\Desktop\Website_projects\site\shots"
os.makedirs(OUT, exist_ok=True)

widths = [(375, 812), (414, 896), (768, 1024), (1440, 900)]
with sync_playwright() as pw:
    b = pw.chromium.launch()
    for w, h in widths:
        pg = b.new_page(viewport={"width": w, "height": h})
        errors = []
        pg.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
        pg.on("pageerror", lambda e: errors.append(str(e)))
        pg.goto(URL, wait_until="networkidle", timeout=60000)
        pg.wait_for_timeout(1200)
        pg.screenshot(path=rf"{OUT}\full_{w}.png", full_page=True)
        broken = pg.evaluate("() => [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src)")
        overflow = pg.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
        print(f"{w}px: console_errors={len(errors)} broken_imgs={len(broken)} h_overflow={overflow}")
        for e in errors[:4]: print("   ERR:", e[:160])
        pg.close()

    # functional test: quiz end-to-end + calculator on mobile viewport
    pg = b.new_page(viewport={"width": 375, "height": 812})
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto(URL, wait_until="networkidle")
    for _ in range(7):
        pg.locator(".qz__opt").nth(1).click()
        pg.wait_for_timeout(120)
    visible = pg.locator("#qzResult").is_visible()
    pg.wait_for_timeout(1600)
    score = pg.locator("#scoreNum").inner_text()
    pg.fill("#ql_n", "Playwright Test")
    pg.fill("#ql_p", "9000000001")
    pg.locator(".unlock__form button").click()
    pg.wait_for_timeout(900)
    checklist = pg.locator("#checklist").is_visible()
    pg.locator("#c_ns").evaluate("el => { el.value = 25; el.dispatchEvent(new Event('input')) }")
    loss = pg.locator("#r_month").inner_text()
    print(f"QUIZ: result_visible={visible} score={score} checklist={checklist} calc_loss_Rs={loss} js_errors={len(errs)}")
    pg.screenshot(path=rf"{OUT}\quiz_result_375.png", full_page=False)
    pg.close()
    b.close()
print("done")
