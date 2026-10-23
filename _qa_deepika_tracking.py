"""E2E: Deepika client card, tracker (counters + restored sessions), UAT guard, admin stats."""
import os, mimetypes, sys
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.abspath(__file__))
issues = []

def serve_local(route):
    """Serve https://anupamwebworks.com/* from the local working tree."""
    from urllib.parse import urlparse
    p = urlparse(route.request.url).path
    if p.endswith("/"): p += "index.html"
    f = os.path.join(ROOT, p.lstrip("/"))
    if not os.path.exists(f) and os.path.exists(f + ".html"): f += ".html"
    if os.path.exists(f):
        mt = mimetypes.guess_type(f)[0] or "application/octet-stream"
        route.fulfill(path=f, content_type=mt)
    else:
        route.fulfill(status=404, body="nf")

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 390, "height": 844}, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    hits = []
    page.route("**://anupamwebworks.com/**", serve_local)
    def fb(route):
        r = route.request
        hits.append((r.method, r.url, r.post_data or ""))
        route.fulfill(status=200, content_type="application/json", body="{}")
    page.route("**firebaseio.com**", fb)

    # ---- 1. prod hostname: tracker must fire, Deepika card must exist, no Mohan
    page.goto("https://anupamwebworks.com/", wait_until="networkidle")
    html = page.content()
    if "dr-deepika-rawat.web.app" not in html: issues.append("Deepika card missing on index")
    if "mohan" in html.lower(): issues.append("Mohan still referenced on index")
    page.wait_for_timeout(1200)
    if not any("count" in h[2] for h in hits if h[0] == "PATCH"):
        issues.append("visit counter PATCH not sent on prod hostname")

    # scroll + dwell so the section sampler accumulates, then click Deepika card
    page.evaluate("window.scrollTo(0, document.body.scrollHeight*0.4)")
    page.wait_for_timeout(2500)
    n_before = len(hits)
    page.eval_on_selector("a.work__thumb[href*='dr-deepika-rawat']",
        "a => a.dispatchEvent(new MouseEvent('click', {bubbles:true, cancelable:true}))")
    page.wait_for_timeout(900)
    for extra in ctx.pages[1:]:
        extra.close()
    if not any('"client"' in h[2] or "'client'" in h[2] or '"client":' in h[2] for h in hits[n_before:]):
        issues.append(f"client-open event not tracked (new hits: {[h[2][:60] for h in hits[n_before:]]})")

    # hide the tab -> session POST with sec/scroll/secs
    page.evaluate("Object.defineProperty(document,'visibilityState',{value:'hidden',configurable:true});"
                  "document.dispatchEvent(new Event('visibilitychange'))")
    page.wait_for_timeout(700)
    sess = [h for h in hits if h[0] == "POST" and "/sessions.json" in h[1]]
    if not sess:
        issues.append("session POST not sent (restored tracking broken)")
    else:
        import json
        body = json.loads(sess[-1][2])
        if not (body.get("sec", 0) >= 3 and "secs" in body and "scroll" in body):
            issues.append(f"session payload incomplete: {body}")
        else:
            print("session payload OK:", {k: body[k] for k in ("sec", "scroll")}, "sections:", list(body["secs"].keys()))

    # ---- 2. Hindi toggle: work.2.p switches to new gynaecology text
    page2 = ctx.new_page()
    page2.route("**://anupamwebworks.com/**", serve_local)
    page2.route("**firebaseio.com**", lambda r: r.fulfill(status=200, body="{}"))
    page2.goto("https://anupamwebworks.com/", wait_until="networkidle")
    page2.click("#lang button[data-lang=hi]")
    page2.wait_for_timeout(400)
    t = page2.text_content("[data-i18n='work.2.p']") or ""
    if "Gynaecology" not in t: issues.append(f"Hindi work.2.p wrong: {t!r}")
    # about page link
    page2.goto("https://anupamwebworks.com/about.html", wait_until="networkidle")
    ab = page2.content()
    if "dr-deepika-rawat.web.app" not in ab or "mohan" in ab.lower():
        issues.append("about.html still wrong (deepika/mohan)")
    page2.close()

    # ---- 3. UAT hostname: tracker must stay silent
    uat_hits = []
    page3 = ctx.new_page()
    page3.route("**://aww-preview.web.app/**", serve_local)
    page3.route("**firebaseio.com**", lambda r: (uat_hits.append(r.request.url), r.fulfill(status=200, body="{}")))
    page3.goto("https://aww-preview.web.app/", wait_until="networkidle")
    page3.evaluate("window.scrollTo(0, 2000)")
    page3.wait_for_timeout(1800)
    page3.evaluate("Object.defineProperty(document,'visibilityState',{value:'hidden',configurable:true});"
                   "document.dispatchEvent(new Event('visibilitychange'))")
    page3.wait_for_timeout(500)
    writes = [u for u in uat_hits if "_site_main" in u]
    if writes: issues.append(f"UAT polluted prod stats: {writes[:2]}")
    page3.close()

    # ---- 4. admin dashboard renders stats + sessions table (reads REAL db, read-only)
    page4 = ctx.new_page()
    page4.route("**://anupamwebworks.com/**", serve_local)
    page4.goto("https://anupamwebworks.com/admin/", wait_until="load")
    page4.evaluate("sessionStorage.setItem('aww_team_gate_v1','2210faf30051bd4544f76c3d062f6a6cd8dbe4cc0119041597c78239b5d533e3')")
    page4.reload(wait_until="networkidle")
    page4.wait_for_timeout(1500)
    grid = page4.text_content("#statgrid") or ""
    if "could not load" in grid or "loading" in grid:
        issues.append(f"admin stats failed: {grid[:80]}")
    if page4.is_hidden("#sesswrap"):
        issues.append("admin sessions table hidden (no sessions parsed)")
    else:
        rows = page4.locator("#sesstab tbody tr").count()
        print(f"admin OK: stats rendered, {rows} recent-visit rows")
    page4.close()
    browser.close()

print("E2E:", "FAIL" if issues else "PASS")
for i in issues: print(" -", i)
sys.exit(1 if issues else 0)
