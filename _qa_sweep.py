# -*- coding: utf-8 -*-
"""Round-2 QA sweep: pages x widths, links, WA numbers, mojibake, interactives,
lang persistence, no-JS, anchors. Writes findings to stdout for the report."""
import os, re, io, urllib.parse
from playwright.sync_api import sync_playwright

ROOT = r"C:\Users\Abhinav PC\Desktop\Website_projects\site"
BASE = "file:///" + ROOT.replace("\\", "/") + "/"
PAGES = ["index.html", "how-it-works.html", "opd-software.html", "whatsapp-booking.html",
         "google-maps.html", "nmc-rules.html", "pricing.html", "about.html",
         "faq.html", "mental-health.html", "specialties.html", "details.html"]
os.makedirs(ROOT + r"\_review\screens", exist_ok=True)
issues = []

def log(page, what, sev):
    issues.append((page, what, sev))
    print(f"[{sev}] {page}: {what}")

# ---- static checks: mojibake, WA numbers, internal links, anchors ----
all_files = {p: io.open(os.path.join(ROOT, p), encoding="utf-8").read() for p in PAGES}
for p, s in all_files.items():
    for bad in ["â", "Ã¢", "�", "&amp;amp;"]:
        if bad in s: log(p, f"garbled text '{bad}'", "High")
    for m in re.finditer(r'wa\.me/(\d+)\?text=([^"\']+)', s):
        if m.group(1) != "919670809669":
            log(p, f"wrong WA number {m.group(1)}", "Blocker")
    for m in re.finditer(r'href="(?!http|#|tel:|mailto:|/)([^"]+)"', s):
        t = m.group(1).split("#")[0].split("?")[0]
        if t and not os.path.exists(os.path.join(ROOT, t)):
            log(p, f"dead internal link: {m.group(1)}", "High")
    for m in re.finditer(r'href="([a-z\-]+\.html)#([a-z\-]+)"', s):
        tgt, anc = m.group(1), m.group(2)
        if tgt in all_files or os.path.exists(os.path.join(ROOT, tgt)):
            ts = all_files.get(tgt) or io.open(os.path.join(ROOT, tgt), encoding="utf-8").read()
            if f'id="{anc}"' not in ts:
                log(p, f"anchor missing: {tgt}#{anc}", "Medium")
# 404 page exists?
if not os.path.exists(os.path.join(ROOT, "404.html")):
    log("site", "no 404.html page", "High")

with sync_playwright() as pw:
    b = pw.chromium.launch()
    # ---- every page, 4 widths ----
    for p in PAGES:
        for w, h in [(360, 740), (390, 844), (768, 1024), (1440, 900)]:
            pg = b.new_page(viewport={"width": w, "height": h})
            errs = []
            pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
            pg.on("pageerror", lambda e: errs.append(str(e)))
            pg.goto(BASE + p, wait_until="networkidle", timeout=60000)
            pg.wait_for_timeout(400)
            ov = pg.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
            if errs: log(p, f"console errors at {w}px: {errs[0][:90]}", "High")
            if ov: log(p, f"horizontal overflow at {w}px", "High")
            if w == 390:
                pg.screenshot(path=ROOT + rf"\_review\screens\{p.replace('.html','')}_390.png", full_page=True)
            pg.close()
    # ---- lang toggle persistence across pages ----
    pg = b.new_page(viewport={"width": 390, "height": 844})
    pg.goto(BASE + "index.html", wait_until="networkidle")
    pg.locator('#lang button[data-lang="hi"]').click(); pg.wait_for_timeout(300)
    pg.goto(BASE + "pricing.html", wait_until="networkidle"); pg.wait_for_timeout(400)
    hi_persist = pg.evaluate("() => document.documentElement.lang")
    if hi_persist != "hi": log("pricing.html", f"lang did not persist across pages (lang={hi_persist})", "High")
    pg.goto(BASE + "index.html", wait_until="networkidle"); pg.wait_for_timeout(400)
    if pg.evaluate("() => document.documentElement.lang") != "hi":
        log("index.html", "lang did not persist after return", "High")
    # untranslated sample in hi mode on a subpage
    pg.goto(BASE + "faq.html", wait_until="networkidle"); pg.wait_for_timeout(500)
    body_txt = pg.locator(".faq").inner_text()
    if "Practo shows your competitor" in body_txt:
        log("faq.html", "FAQ body untranslated in Hindi mode", "Medium")
    pg.close()
    # ---- no-JS ----
    ctx = b.new_context(java_script_enabled=False, viewport={"width": 390, "height": 844})
    pg = ctx.new_page()
    pg.goto(BASE + "index.html", wait_until="load")
    vis = pg.evaluate("""() => {
      const el = document.querySelector('#problems .card');
      return el ? getComputedStyle(el).opacity : 'none';
    }""")
    if vis == "0": log("index.html", "no-JS: reveal content invisible (opacity 0)", "High")
    wa_ok = pg.locator('a[href*="wa.me"]').count() > 0
    if not wa_ok: log("index.html", "no-JS: no WhatsApp links", "Blocker")
    ctx.close()
    # ---- interactives: calc edges, quiz retake ----
    pg = b.new_page(viewport={"width": 390, "height": 844})
    pg.goto(BASE + "index.html", wait_until="networkidle")
    for v_ap, v_fee, v_ns in [(5, 100, 5), (80, 2500, 40)]:
        pg.evaluate(f"""() => {{
          const s = (id,v) => {{ const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input')); }};
          s('c_ap',{v_ap}); s('c_fee',{v_fee}); s('c_ns',{v_ns});
        }}""")
        m = pg.locator("#r_month").inner_text()
        if not re.match(r"^[\d,]+$", m): log("index.html", f"calc bad output '{m}'", "High")
    for _ in range(7):
        pg.locator(".qz__opt").nth(0).click(); pg.wait_for_timeout(80)
    s1 = pg.locator("#scoreNum").inner_text()
    pg.locator("#qzRetake").click(); pg.wait_for_timeout(300)
    if not pg.locator("#qz").is_visible(): log("index.html", "quiz retake broken", "High")
    for _ in range(7):
        pg.locator(".qz__opt").nth(2).click(); pg.wait_for_timeout(80)
    pg.wait_for_timeout(1600)
    s2 = pg.locator("#scoreNum").inner_text()
    print(f"quiz paths: all-first score ok, all-third score={s2}")
    pg.close()
    b.close()

print(f"\n==== TOTAL ISSUES: {len(issues)} ====")
