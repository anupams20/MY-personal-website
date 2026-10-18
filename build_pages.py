# -*- coding: utf-8 -*-
"""Builds the 'show, don't tell' subpages with a shared shell.
Doctor-language copy: max ~12 words/sentence, glossary-safe, per-page WA msg.
Run: python build_pages.py   (writes *.html + sitemap.xml)"""
import io, urllib.parse

WA_NUM = "919670809669"
def wa(msg):
    return "https://wa.me/" + WA_NUM + "?text=" + urllib.parse.quote(msg)

SHELL = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>@TITLE@</title>
<meta name="description" content="@DESC@">
<link rel="canonical" href="https://anupamwebworks.com/@SLUG@">
<meta name="theme-color" content="#0b3b3c">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"></noscript>
<link rel="stylesheet" href="style.css?v=13">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
</head>
<body>
<header class="nav" id="nav">
  <div class="wrap nav__inner">
    <a href="/" class="nav__logo">Anupam&nbsp;Web&nbsp;Works<span>+</span></a>
    <nav class="nav__links" id="navLinks" aria-label="Main">
      <a href="/" data-i18n="nav.home">Home</a>
      <a href="opd-software.html">OPD software</a>
      <a href="pricing.html" data-i18n="nav.pricing">Packages</a>
      <a href="how-it-works.html">How it works</a>
      <a href="faq.html" data-i18n="nav.faq">FAQ</a>
    </nav>
    <div class="lang" id="lang" role="group" aria-label="Language">
      <button type="button" data-lang="en" aria-pressed="true">EN</button>
      <button type="button" data-lang="hi" aria-pressed="false">हिं</button>
    </div>
    <a class="btn btn--wa nav__cta" href="@WAURL@" target="_blank" rel="noopener"><span data-i18n="nav.quote">Get a free demo</span></a>
    <button class="nav__burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks"><span></span><span></span><span></span></button>
  </div>
</header>

<div class="phero">
  <h1@H1I18N@>@H1@</h1>
  <p@SUBI18N@>@SUB@</p>
</div>

<main class="pbody">
@BODY@
<div class="pcta">
  <a class="btn btn--wa btn--lg" href="@WAURL@" target="_blank" rel="noopener">🟢 @WACTA@</a>
  <p style="margin-top:12px;font-size:13.5px"><a href="/">← Home</a></p>
</div>
</main>

<footer class="foot">
  <div class="wrap foot__inner">
    <p>&copy; <span id="yr">2026</span> Anupam Web Works — <span data-i18n="foot.role">Websites &amp; software for clinics, India.</span></p>
    <p class="foot__links"><a href="/">Home</a><a href="https://www.linkedin.com/in/anupamsingh-iitk/" target="_blank" rel="noopener">LinkedIn</a><a href="tel:+919670809669">+91 96708 09669</a></p>
  </div>
</footer>

<div class="mcta show" id="mcta">
  <a href="@WAURL@" target="_blank" rel="noopener"><span class="e">🟢</span>WhatsApp</a>
  <a href="tel:+919670809669"><span class="e">📞</span><span data-i18n="mcta.call">Call</span></a>
</div>

<script src="i18n.js?v=10"></script>
<script src="script.js?v=11"></script>
@PAGEJS@
</body>
</html>"""

PAGES = {}

PAGES["how-it-works.html"] = dict(
 title="How It Works — demo first, pay later | Anupam Web Works",
 desc="4 steps: talk on WhatsApp, see your clinic's demo website, 2 rounds of changes, go live in days. Payment only after you approve the demo.",
 h1="Baat → Demo → Changes → Live.", sub="Four steps. You pay only after you like the demo.",
 wamsg="Hi Anupam, I want to start. Please show me my clinic's demo.",
 wacta="Start step 1 — WhatsApp karein",
 body="""
<div class="tline reveal"><div class="fillbar"></div>
  <div class="tstep"><span class="day">Day 1</span><h3>💬 Baat karein</h3><p>15 minutes on WhatsApp or call. You get the exact price.</p></div>
  <div class="tstep"><span class="day">Day 2–3</span><h3>👀 Demo</h3><p>See your clinic's real, working website. Pay nothing yet.</p></div>
  <div class="tstep"><span class="day">Day 3–4</span><h3>✏️ Changes</h3><p>2 rounds. You say, I fix. No forms, no arguments.</p></div>
  <div class="tstep"><span class="day">Day 5</span><h3>🚀 Live</h3><p>Your domain, your name, your logins. Reception gets OPD training.</p></div>
</div>
<h2>After going live</h2>
<p>Renewal is optional — hosting, backups and small changes. You own the domain, the code and the data. You are never locked in.</p>""")

PAGES["opd-software.html"] = dict(
 title="OPD Software for Clinics — replace the register | Anupam Web Works",
 desc="Search patient, add visit, print prescription. Works offline, data stays on your computer. Your receptionist learns it in one afternoon.",
 h1="Search patient. Add visit. Print parcha.", sub="The register, retired. Try it below — tap the steps.",
 wamsg="Hi Anupam, I saw the OPD software. Please show me a demo.",
 wacta="Show me the OPD software",
 body="""
<div class="opdmock reveal" id="opdmock">
  <div class="bar">🖥️ Your Clinic — OPD</div>
  <div class="body" id="opdBody"></div>
  <div class="steps">
    <button type="button" class="on" data-s="0">1 · Search</button>
    <button type="button" data-s="1">2 · Add visit</button>
    <button type="button" data-s="2">3 · Print ℞</button>
  </div>
</div>
<h2>🔒 Your data stays with you</h2>
<ul class="ticks" style="max-width:420px">
  <li>Works offline — no internet needed in OPD</li>
  <li>Patient records stay on YOUR computer</li>
  <li>One-click daily backup</li>
  <li>Receptionist learns it in one afternoon</li>
  <li>I train your staff on a call, free</li>
</ul>
<h2>Who uses it today</h2>
<p>Two clinics run their daily OPD on this software — a children's clinic in Bareilly and an eye clinic in Agra. <!-- TODO(Anupam): confirm both clinics still actively use it --></p>""",
 pagejs="""<script>
(function(){
var steps=[
 '<p><b>Patient comes in.</b> Reception types two letters…</p><div class="sm-opd" style="position:static"><div class="field">🔍 <b style="max-width:none">Ra… → Ramesh Gupta, 42</b></div></div><p style="margin-top:10px;color:#5d6e74">Full history opens — every old visit, instantly.</p>',
 '<p><b>Doctor adds today\\'s visit.</b></p><div class="rxpaper">BP 130/85 · Fever 3 days<br>Paracetamol 650 — 1-0-1 × 5 days</div><p style="margin-top:10px;color:#5d6e74">Saved to the patient\\'s record in one click.</p>',
 '<p><b>Print the parcha.</b></p><div class="rxpaper">℞ <b>Your Clinic's letterhead</b><br>Ramesh Gupta · 42 · M<br>Paracetamol 650 — 1-0-1 × 5<br><i>Dr. signature line</i></div><p style="margin-top:10px;color:#5d6e74">Clean printed prescription. No handwriting confusion.</p>'];
var body=document.getElementById('opdBody'),btns=document.querySelectorAll('#opdmock .steps button');
function show(i){body.innerHTML=steps[i];btns.forEach(function(b,j){b.classList.toggle('on',j==i)});}
btns.forEach(function(b){b.addEventListener('click',function(){show(+b.dataset.s)})});
show(0);
})();
</script>""")

PAGES["whatsapp-booking.html"] = dict(
 title="WhatsApp Appointment Booking for Clinics | Anupam Web Works",
 desc="Patient books on your website — the booking lands in your WhatsApp with name, number and department. Automatic reminder goes the day before.",
 h1="Booking aapke WhatsApp par. Reminder patient ko.", sub="No app. No missed calls. Watch it happen:",
 wamsg="Hi Anupam, I want WhatsApp booking for my clinic. Show me how it works.",
 wacta="I want this for my clinic",
 body="""
<div class="wachat reveal">
  <div class="bub from"><b>Patient</b> taps Book on your website 👆<div class="meta">no app needed</div></div>
  <div class="bub to">📥 <b>New appointment</b><br>Ramesh Gupta · 98xxxxxx21<br>Gynae OPD · Tomorrow 11am<div class="meta">arrives on YOUR WhatsApp</div></div>
  <div class="bub from">⏰ Reminder: aapka appointment kal 11 baje hai 🙏<div class="meta">goes to the patient, day before</div></div>
  <div class="bub to">✅ Patient aaya. Fees mili. No empty slot.</div>
</div>
<h2>Why this matters</h2>
<ul class="ticks" style="max-width:460px">
  <li>Calls missed in OPD ≠ patients lost anymore</li>
  <li>Reminders cut "booked but didn't come" patients</li>
  <li>Patient's name and number — saved, not scribbled</li>
</ul>
<p><a href="/#calc"><strong>Calculate what missed patients cost you →</strong></a></p>""")

PAGES["google-maps.html"] = dict(
 title="Your Clinic on Google Maps, Set Up Properly | Anupam Web Works",
 desc="Appear when patients search nearby. Photos, timings, services and a review QR for your reception — done for you.",
 h1="Patients search nearby. You should appear first.", sub="Your clinic on Google Maps — set up properly, with reviews growing.",
 wamsg="Hi Anupam, set up my clinic on Google properly. What do you need?",
 wacta="Set up my clinic on Google",
 body="""
<div class="scene reveal" style="max-width:380px;margin:0 auto">
  <div class="smini sm-map" style="height:200px;margin:0;border-radius:0">
    <span class="mp m1">📍</span><span class="mp m2">📍</span><span class="you">📍</span>
  </div>
  <p class="cap">Searches happen every day. Your pin rises to the top.</p>
</div>
<h2>What I set up</h2>
<ul class="ticks" style="max-width:460px">
  <li>Photos, timings, services, correct phone — complete profile</li>
  <li>Website linked, so Google trusts your clinic more</li>
  <li>Review QR card for your reception desk</li>
  <li>Monthly numbers: how many patients found you</li>
</ul>
<h2>About reviews — the honest way</h2>
<p>A polite ask and a QR card at reception. Never paid reviews, never fake ones — NMC rules, and Google bans them too.</p>""")

PAGES["nmc-rules.html"] = dict(
 title="Is a Clinic Website Allowed? NMC Rules Explained | Anupam Web Works",
 desc="Yes — if done right. What NMC allows on a doctor's website (qualifications, timings, services, fees) and what it forbids (testimonials, 'best doctor', discounts).",
 h1="Your registration stays safe.", sub="NMC rules (updated 2026) — what your website can and cannot say.",
 wamsg="Hi Anupam, I want a website that follows NMC rules. Let's talk.",
 wacta="Build mine the safe way",
 body="""
<div class="nmcgrid">
  <div class="nmccol ok reveal"><h3>✅ Allowed — and enough</h3><ul>
    <li>Your qualifications and registration</li>
    <li>Departments and services</li>
    <li>Timings and address</li>
    <li>Fees, if you want</li>
    <li>Photos of your clinic</li>
    <li>Appointment booking</li>
  </ul></div>
  <div class="nmccol no reveal"><h3>❌ Not allowed — I never add these</h3><ul>
    <li>Patient testimonials</li>
    <li>"Best doctor" claims</li>
    <li>Discounts and offers</li>
    <li>Guaranteed cure promises</li>
    <li>Before/after patient photos</li>
  </ul></div>
</div>
<h2>Why most local designers get this wrong</h2>
<p>They copy shop-website templates — testimonial sliders, "50% off" banners. On a doctor's website those can invite NMC trouble. I build only for clinics, so every page follows the rules from day one.</p>""")

PAGES["pricing.html"] = dict(
 title="Packages & Prices — fixed, published openly | Anupam Web Works",
 desc="Clinic Starter ₹4,999 · Clinic Growth ₹9,999 · Hospital Pro ₹34,999. Full comparison, add-ons, renewal. Demo first, payment after.",
 h1="Fixed prices. No surprises.", sub="Demo first. Payment only after you approve it.",
 wamsg="Hi Anupam, I checked the packages. Help me pick one.",
 wacta="Help me pick a package",
 body="""
<table class="ticktable reveal">
<thead><tr><th>What you get</th><th>Starter<br>₹4,999</th><th>Growth<br>₹9,999</th><th>Hospital Pro<br>₹34,999</th></tr></thead>
<tbody>
<tr><td>Clinic website + WhatsApp booking</td><td class="y">✓</td><td class="y">✓</td><td class="y">✓</td></tr>
<tr><td>Google Maps set up properly</td><td class="y">✓</td><td class="y">✓</td><td class="y">✓</td></tr>
<tr><td>OPD software (records + printed ℞)</td><td class="n">—</td><td class="y">✓</td><td class="y">✓</td></tr>
<tr><td>Review QR for reception</td><td class="n">—</td><td class="y">✓</td><td class="y">✓</td></tr>
<tr><td>Department pages + doctor profiles</td><td class="n">—</td><td class="n">—</td><td class="y">✓</td></tr>
<tr><td>Health check-up packages page</td><td class="n">—</td><td class="n">—</td><td class="y">✓</td></tr>
<tr><td>All content written for you</td><td class="n">—</td><td class="n">—</td><td class="y">✓</td></tr>
<tr><td>Ready in</td><td>3–5 days</td><td>7–10 days</td><td>10–14 days</td></tr>
<tr><td>Renewal (optional)</td><td>₹1,999/yr</td><td>₹4,999/yr</td><td>₹6,999/yr</td></tr>
</tbody></table>
<!-- TODO(Anupam): confirm Starter renewal ₹1,999/yr — set your real number -->
<h2>Add-ons</h2>
<ul class="chips chips--addons">
  <li>🎨 8 festival/health-day posters monthly · ₹999/mo</li>
  <li>⏰ WhatsApp reminders for appointments · ₹1,499 setup</li>
  <li>💻 Video consultation setup · ₹1,999</li>
  <li>🌐 Hindi version of your website · ₹1,499</li>
</ul>
<h2>Payment</h2>
<p>UPI or bank transfer, after you approve the demo. Larger packages: part on approval, part on go-live. Domain registered in YOUR name.</p>""")

PAGES["about.html"] = dict(
 title="About Anupam Singh — IIT Kanpur engineer for clinics | Anupam Web Works",
 desc="One engineer, not an agency. IIT Kanpur 2024, clinics across India, fully remote. Verify everything before you pay.",
 h1="One engineer. Not an agency.", sub="Clinics across North India and all India — fully remote.",
 wamsg="Hi Anupam, tell me about yourself and show me a demo.",
 wacta="Talk to me directly",
 body="""
<div class="icongrid reveal" style="margin-bottom:8px">
  <div class="tile"><span class="big">🎓</span>IIT Kanpur<small>B.Tech, 2024</small></div>
  <div class="tile"><span class="big">🏥</span>Healthcare only<small>clinic websites &amp; software</small></div>
  <div class="tile"><span class="big">🇮🇳</span>All India<small>fully remote, WhatsApp + calls</small></div>
</div>
<p style="margin-top:18px">I run large-scale corporate software for a living. Your clinic website gets the same standard: fast, reliable, backed up. When you message, you talk to the person who builds it — no salesperson, no intern.</p>
<h2>Verify me first — 4 checks</h2>
<div class="icongrid reveal">
  <a href="https://www.linkedin.com/in/anupamsingh-iitk/" target="_blank" rel="noopener"><span class="big">in</span>LinkedIn is public<small>IIT Kanpur — check in 30 sec</small></a>
  <a href="/#work"><span class="big">🏥</span>Client clinics are live<small>open them yourself</small></a>
  <a href="tel:+919670809669"><span class="big">📞</span>Call me now<small>96708 09669 — ask anything</small></a>
  <a href="how-it-works.html"><span class="big">👀</span>Demo first<small>payment only after you approve</small></a>
</div>""")

PAGES["faq.html"] = dict(
 title="FAQ — every question doctors ask | Anupam Web Works",
 desc="Practo vs own website, NMC rules, who owns the domain, payments, OPD software training — short honest answers.",
 h1="Every question, answered in 2 lines.", sub="Tap a question.",
 wamsg="Hi Anupam, I have a question about the clinic website.",
 wacta="Ask me directly on WhatsApp",
 body="""
<div class="faq reveal">
<details open><summary>🆚 I'm on Practo/Justdial. Why my own website?</summary><p>Practo shows your competitor next to you. Your own website shows only you — and patients come to your WhatsApp.</p></details>
<details><summary>🛡️ Is this allowed under NMC rules?</summary><p>Yes. No testimonials, no "best doctor", no discounts. Only qualifications, timings, services, fees. Your registration stays safe. <a href="nmc-rules.html">Full rules →</a></p></details>
<details><summary>💰 Why cheaper than ₹80,000 agencies?</summary><p>No office, no sales team. One engineer builds it. That is why it is cheaper.</p></details>
<details><summary>📷 I have no photos or content. Problem?</summary><p>No. I write everything for your specialty. WhatsApp me 10 phone photos — done.</p></details>
<details><summary>🖥️ Can my receptionist use the OPD software?</summary><p>Yes — search patient, add visit, print parcha. One afternoon to learn. I train on a call, free.</p></details>
<details><summary>🔑 Who owns the domain and data?</summary><p>You. Domain in your name, every login handed over. Patient data stays on your computer.</p></details>
<details><summary>💳 How do payments work?</summary><p>See your demo first. Then UPI or bank transfer. Big packages: half on approval, half on go-live.</p></details>
<details><summary>📍 My clinic is not in UP. Still possible?</summary><p>Yes — clinics anywhere in India. Everything happens on WhatsApp and calls.</p></details>
</div>""")

PAGES["mental-health.html"] = dict(
 title="Websites for Psychiatrists & Therapists — privacy first | Anupam Web Works",
 desc="Patients search quietly before they ask anyone. A calm, private website with discreet booking and video consultation — NMC-safe.",
 h1="Your patients search quietly. Be found, gently.", sub="Privacy-first websites for psychiatrists, psychologists and counsellors.",
 wamsg="Hi Anupam, I'm a mental health professional. Show me a privacy-first demo.",
 wacta="Show me a privacy-first demo",
 body="""
<div class="lockcal reveal"><span>🔒</span><span>📅</span></div>
<ul class="ticks" style="max-width:480px;margin:0 auto">
  <li>Discreet booking — even the patient's full name is optional</li>
  <li>Video consultation page — for patients who won't walk in</li>
  <li>Confidentiality promise, written clearly on the page</li>
  <li>Calm design — nothing loud, nothing commercial</li>
  <li>Follows NMC rules — no testimonials, ever</li>
</ul>
<h2>Why this matters more in mental health</h2>
<p>Stigma makes patients research for weeks before calling anyone. Your website is usually their first step. It should feel safe — like the first session will.</p>
<h2>Follow-ups are the real leak</h2>
<p>Many patients stop coming after the first visit. Gentle WhatsApp reminders and video follow-ups keep care going.</p>""")

PAGES["specialties.html"] = dict(
 title="Clinic Websites by Specialty — gynae, dental, eye & more | Anupam Web Works",
 desc="Every specialty gets its own design, services and words. See a sample for yours.",
 h1="Your specialty. Your kind of website.", sub="Tap yours — see a sample.",
 wamsg="Hi Anupam, show me a sample website for my specialty.",
 wacta="Show a sample for my specialty",
 body="""
<div class="icongrid reveal">
  <a href="https://up-hospitals.web.app/demo?via=team" target="_blank" rel="noopener"><span class="big">🏥</span>Hospital / Multi-specialty<small>see live sample ↗</small></a>
  <a href="demos/dental-clinic.html" target="_blank" rel="noopener"><span class="big">🦷</span>Dental<small>see live sample ↗</small></a>
  <a href="mental-health.html"><span class="big">🧠</span>Psychiatry &amp; counselling<small>privacy-first →</small></a>
  <a href="@WAGYN@" target="_blank" rel="noopener"><span class="big">🤰</span>Gynae &amp; maternity<small>ask for a sample</small></a>
  <a href="@WAEYE@" target="_blank" rel="noopener"><span class="big">👁️</span>Eye care<small>ask for a sample</small></a>
  <a href="@WAPED@" target="_blank" rel="noopener"><span class="big">🧸</span>Pediatrics<small>ask for a sample</small></a>
  <a href="@WASKIN@" target="_blank" rel="noopener"><span class="big">💆</span>Skin &amp; hair<small>ask for a sample</small></a>
  <a href="@WAORTHO@" target="_blank" rel="noopener"><span class="big">🦴</span>Orthopaedics<small>ask for a sample</small></a>
</div>
<p style="margin-top:20px">Every specialty gets its own colours, services and patient questions — not one template repainted.</p>""")

# fill specialty WA links
PAGES["specialties.html"]["body"] = (PAGES["specialties.html"]["body"]
  .replace("@WAGYN@", wa("Hi Anupam, show me a gynae clinic website sample."))
  .replace("@WAEYE@", wa("Hi Anupam, show me an eye clinic website sample."))
  .replace("@WAPED@", wa("Hi Anupam, show me a pediatric clinic website sample."))
  .replace("@WASKIN@", wa("Hi Anupam, show me a skin clinic website sample."))
  .replace("@WAORTHO@", wa("Hi Anupam, show me an orthopaedic clinic website sample.")))

for slug, p in PAGES.items():
    out = (SHELL
      .replace("@TITLE@", p["title"]).replace("@DESC@", p["desc"])
      .replace("@SLUG@", slug.replace(".html", ""))
      .replace("@H1@", p["h1"]).replace("@SUB@", p["sub"])
      .replace("@H1I18N@", ' data-i18n="pg.' + slug.split(".")[0] + '.h1"')
      .replace("@SUBI18N@", ' data-i18n="pg.' + slug.split(".")[0] + '.sub"')
      .replace("@BODY@", p["body"])
      .replace("@WAURL@", wa(p["wamsg"]))
      .replace("@WACTA@", p["wacta"])
      .replace("@PAGEJS@", p.get("pagejs", "")))
    io.open(slug, "w", encoding="utf-8", newline="").write(out)
    print("built", slug)

# sitemap
urls = ["", "details.html"] + list(PAGES.keys())
sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for u in urls:
    sm += f'  <url><loc>https://anupamwebworks.com/{u.replace(".html","")}</loc></url>\n'
sm += "</urlset>\n"
io.open("sitemap.xml", "w", encoding="utf-8", newline="").write(sm)
print("sitemap:", len(urls), "urls")
