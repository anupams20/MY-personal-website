import sys, json
from playwright.sync_api import sync_playwright

URL = "file:///C:/Users/Abhinav PC/Desktop/Website_projects/site/index.html"
OUT = r"C:\Users\Abhinav PC\Desktop\Website_projects\site\shots"
import os; os.makedirs(OUT, exist_ok=True)

widths = [(375, 812), (768, 1024), (1440, 900)]
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
        # broken images check
        broken = pg.evaluate("""() => [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src)""")
        # horizontal overflow check
        overflow = pg.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
        print(f"{w}px: console_errors={len(errors)} broken_imgs={len(broken)} h_overflow={overflow}")
        for e in errors[:5]: print("   ERR:", e[:160])
        for s in broken[:5]: print("   IMG:", s[:120])
        pg.close()
    b.close()
print("shots in", OUT)
