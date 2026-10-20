# -*- coding: utf-8 -*-
"""Phase-4 asset pipeline: webp conversions, client-site screenshots, video title card."""
import os
from PIL import Image
from playwright.sync_api import sync_playwright

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ILLUS = os.path.join(SITE, "images", "illus")
CLIENTS = os.path.join(SITE, "images", "clients")
os.makedirs(CLIENTS, exist_ok=True)

# 1) illustrations -> webp (1536w display max ~820px, 2x safe)
for name in ["illus-clinic-morning", "illus-register-before", "illus-opd-after", "illus-mh-quiet"]:
    src = os.path.join(ILLUS, name + ".png")
    img = Image.open(src).convert("RGB")
    img.save(os.path.join(ILLUS, name + ".webp"), "WEBP", quality=82, method=6)
    print(name, "->", round(os.path.getsize(os.path.join(ILLUS, name + ".webp")) / 1024), "KB")

# 2) client site screenshots (16:10 like .work__thumb) + video title card
CARD_HTML = """
<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Inter:wght@500;700;800&display=swap" rel="stylesheet">
<style>
body{margin:0;width:1280px;height:720px;display:flex;align-items:center;justify-content:center;
  background:radial-gradient(900px 600px at 75% 20%, #11424d 0%, #0b2b31 60%);font-family:Inter,sans-serif}
.card{text-align:center;color:#fff}
.k{display:inline-flex;align-items:center;gap:14px;background:#25d366;color:#06301a;border-radius:999px;
  padding:18px 34px;font-size:30px;font-weight:800;box-shadow:0 18px 50px rgba(37,211,102,.35);margin-bottom:38px}
.k .tri{width:0;height:0;border-left:22px solid #06301a;border-top:13px solid transparent;border-bottom:13px solid transparent}
h1{font-family:Fraunces,serif;font-size:64px;margin:0 0 14px;letter-spacing:-.01em}
h1 b{color:#8fd0c9}
p{font-size:28px;color:#bcd7d4;margin:0;font-weight:500}
.row{display:flex;gap:16px;justify-content:center;margin-top:44px}
.chip{border:1.5px solid rgba(255,255,255,.25);border-radius:999px;padding:10px 22px;font-size:21px;color:#e3f3f6;font-weight:700}
</style></head><body><div class="card">
<h1>Website + <b>OPD software</b></h1>
<p>Dekhiye — chalta hua, aapke clinic jaisa · 5 minute</p>
<div class="row"><span class="chip">🌐 Clinic website</span><span class="chip">🖥️ OPD + printed ℞</span><span class="chip">💬 WhatsApp booking</span></div>
</div></body></html>
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport={"width": 1000, "height": 625}, device_scale_factor=2)
    pg = ctx.new_page()
    for url, name in [("https://little-heart-child-care.web.app/", "little-heart"),
                      ("https://mohan-eye-health-clinic.web.app/", "mohan-eye")]:
        pg.goto(url, wait_until="networkidle", timeout=45000)
        pg.wait_for_timeout(2500)
        tmp = os.path.join(CLIENTS, name + ".png")
        pg.screenshot(path=tmp)
        img = Image.open(tmp).convert("RGB")
        img = img.resize((1200, 750), Image.LANCZOS)
        img.save(os.path.join(CLIENTS, name + ".webp"), "WEBP", quality=80, method=6)
        os.remove(tmp)
        print(name, "->", round(os.path.getsize(os.path.join(CLIENTS, name + ".webp")) / 1024), "KB")
    ctx.close()

    ctx2 = b.new_context(viewport={"width": 1280, "height": 720})
    pg2 = ctx2.new_page()
    pg2.set_content(CARD_HTML, wait_until="networkidle")
    pg2.wait_for_timeout(1200)
    tmp = os.path.join(SITE, "images", "video-card.png")
    pg2.screenshot(path=tmp)
    img = Image.open(tmp).convert("RGB")
    img.save(os.path.join(SITE, "images", "video-card.jpg"), "JPEG", quality=85, optimize=True)
    os.remove(tmp)
    print("video-card ->", round(os.path.getsize(os.path.join(SITE, "images", "video-card.jpg")) / 1024), "KB")
    b.close()
print("DONE")
