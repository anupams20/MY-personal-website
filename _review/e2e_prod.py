# -*- coding: utf-8 -*-
"""Post-deploy E2E against the LIVE site (prod or UAT).
Usage: python _review/e2e_prod.py [https://anupamwebworks.com]
Firebase hit-counter writes are intercepted and BLOCKED so QA runs
never pollute real stats — we only assert the tracker tried to fire."""
import sys
from urllib.parse import urljoin
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8")
BASE = (sys.argv[1] if len(sys.argv) > 1 else "https://anupamwebworks.com").rstrip("/") + "/"
IS_PROD = "anupamwebworks.com" in BASE
PAGES = ["", "how-it-works.html", "opd-software.html", "whatsapp-booking.html",
         "google-maps.html", "nmc-rules.html", "pricing.html", "about.html",
         "faq.html", "mental-health.html", "specialties.html", "details.html",
         "calculator.html", "check.html", "privacy.html", "sample.html", "link.html"]
fails = []

def check(name, cond, extra=""):
    print(("PASS " if cond else "FAIL ") + name + (" :: " + str(extra) if (extra and not cond) else ""))
    if not cond:
        fails.append(name)

with sync_playwright() as pw:
    b = pw.chromium.launch()
    ctx = b.new_context(viewport={"width": 390, "height": 844})
    tracker_hits = []
    ctx.route("**firebaseio.com**", lambda r: (tracker_hits.append(r.request.url), r.abort()))

    # ---- every page: loads, no console errors, no failed same-site requests ----
    for p in PAGES:
        pg = ctx.new_page()
        errs, bad = [], []
        pg.on("console", lambda m: errs.append(m.text + " @ " + (m.location.get("url") or ""))
              if m.type == "error" and "firebaseio" not in (m.location.get("url") or "") else None)
        pg.on("requestfailed", lambda r: bad.append(r.url) if BASE.split("//")[1].split("/")[0] in r.url and "firebaseio" not in r.url else None)
        resp = pg.goto(urljoin(BASE, p), wait_until="networkidle", timeout=30000)
        name = p or "home"
        check(name + ": HTTP 200", resp and resp.status == 200, resp and resp.status)
        check(name + ": no console errors", not errs, errs[:2])
        check(name + ": no failed site requests", not bad, bad[:2])
        pg.close()

    # ---- about: cert viewer full flow + hindi ----
    pg = ctx.new_page()
    reqs = []
    pg.on("request", lambda r: reqs.append(r.url))
    pg.goto(urljoin(BASE, "about.html"), wait_until="networkidle")
    check("about: cert-data not pre-loaded", not any("cert-data" in u for u in reqs))
    pg.click("#vCert")
    pg.wait_for_selector("#certCanvas:not([hidden])", timeout=8000)
    check("about: viewer opens, canvas drawn", pg.locator("#certCanvas").is_visible())
    check("about: cert served ONLY as js data", any(u.endswith("cert-data.js") for u in reqs)
          and not any("cert" in u.lower() and u.lower().endswith((".jpg", ".png", ".pdf")) for u in reqs))
    pg.keyboard.press("Escape")
    check("about: ESC closes", pg.locator("#certModal").is_hidden())
    check("about: photo placeholder shown", pg.locator(".photoslot.missing").is_visible())
    pg.click("[data-lang=hi]")
    pg.wait_for_timeout(400)
    check("about: hindi toggle", "देखें" in (pg.locator("#vCert b").text_content() or ""))
    pg.close()

    # ---- tracking fired on prod hostname (and was blocked by QA intercept) ----
    if IS_PROD:
        check("tracking: tracker fired on prod hostname (blocked by QA)", len(tracker_hits) > 0)
    else:
        check("tracking: UAT silent (hostname guard)", len(tracker_hits) == 0, tracker_hits[:2])

    # ---- headers + robots ----
    rq = ctx.request
    r = rq.get(urljoin(BASE, "data/cert-data.js"))
    xr = (r.headers.get("x-robots-tag") or "")
    check("headers: cert-data.js served 200", r.status == 200)
    check("headers: cert-data.js noindex", "noindex" in xr, xr)
    robots = rq.get(urljoin(BASE, "robots.txt")).text()
    check("robots: /data/ disallowed", "Disallow: /data/" in robots)

    # ---- internal links on home + about all resolve ----
    seen, dead = set(), []
    for p in ["", "about.html"]:
        pg = ctx.new_page()
        pg.goto(urljoin(BASE, p))
        hrefs = pg.eval_on_selector_all("a[href]", "els=>els.map(e=>e.getAttribute('href'))")
        pg.close()
        for hrf in hrefs:
            if not hrf or hrf.startswith(("#", "mailto:", "tel:", "http")) or hrf in seen:
                continue
            seen.add(hrf)
            st = rq.get(urljoin(BASE, hrf)).status
            if st != 200:
                dead.append(f"{hrf} -> {st}")
    check("links: all internal links 200", not dead, dead)

    ctx.close()
    b.close()

print("\n" + ("ALL PASS — " + BASE if not fails else "FAILURES %d — %s" % (len(fails), BASE)))
sys.exit(1 if fails else 0)
