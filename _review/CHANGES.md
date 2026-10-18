# Redesign review — branch `redesign-visual` (NOT pushed)

## Pages added (10 new + home rebuilt)
| Page | Purpose |
|---|---|
| `/` (index.html) | Rebuilt: 6 visual screens — animated hero phone, 4 animated problem cards, 4-picture solution swipe, quiz, calculator+money jar, proof + register↔screen toggle, 3-tick pricing, top-3 FAQ, start CTA |
| `/how-it-works` | Animated timeline: Baat → Demo → Changes → Live, with day counters |
| `/opd-software` | Interactive mock: Search → Add visit → Print ℞; offline/data-ownership |
| `/whatsapp-booking` | Animated WhatsApp chat: booking arrives, reminder goes out |
| `/google-maps` | Pin-rising animation; what gets set up; honest review policy |
| `/nmc-rules` | ✅/❌ columns — reassurance page |
| `/pricing` | Full tick-table comparison + add-ons + payment terms |
| `/about` | Icon facts + the 4 "verify me" tiles |
| `/faq` | All 8 FAQs, 2-line answers, icons |
| `/mental-health` | Privacy-first page, lock+calendar animation |
| `/specialties` | Icon grid; hospital + dental link to live samples, others to WhatsApp |
| `details.html` | KEPT as-is so old links don't break (linked from footer) |

## Numbers you must verify (all marked `TODO(Anupam)` in code)
1. **"600+ clinic websites built (demos + clients)"** — index.html creds strip. It now says demos+clients honestly; confirm the number.
2. **"2 clinics run daily OPD on my software"** — index.html creds + opd-software.html. Confirm both still actively use it.
3. **Starter renewal ₹1,999/yr** — pricing.html table. I had no fixed number for Starter renewal, so I set ₹1,999 — **set your real number**.
4. REMOVED: "870 mental-health leads researched" counter (sounded like data collection) and "16 cities mapped" (meaningless to a doctor).

## Text removed from home page
Long about paragraphs, verify-me section (→ /about), full FAQ (→ /faq), specialty chips (→ /specialties), add-ons (→ /pricing), spec note (→ /mental-health), stat strip reduced 4→4 but honest, every card paragraph cut to one caption line.

## Language changes (glossary applied)
"Local SEO" → "appear first on Google Maps" · "no-shows" → "booked but didn't come" · "front desk" → "reception" · "GBP optimization" → "Google Maps set up properly" · "teleconsult setup" → "video consultation" · "compliant" → "follows NMC rules" · "turnaround" → "ready in X days" · removed "leads", "digital presence". Hindi rewritten as spoken Hindi with English clinic words (OPD, appointment, WhatsApp).

## Things I was unsure about / open questions
1. **Hinglish third toggle — SKIPPED** as you allowed: a 3-way switch makes the toggle messy on mobile. The EN copy is already Hinglish-flavoured ("Baat karein", "parcha"). Say the word if you want it anyway.
2. **Subpage Hindi coverage is partial**: shared shell strings (nav, CTA, footer) translate; page body content on the 10 new pages is English-with-Hinglish (sentences ≤12 words). Full Hindi for all 10 pages is ~2h more work — tell me if you want it.
3. Specialty samples: only hospital + dental have live sample links; gynae/eye/pediatrics/skin/ortho go to a prefilled WhatsApp ask. If you want live samples for those, I can wire batch-3 demo links — but they carry real clinics' names, so I left them out of your public site.
4. `details.html` kept but no longer linked from main nav (only footer) — delete it later if you prefer.
5. Netlify serves `/how-it-works.html` at `/how-it-works` via pretty URLs? **Netlify does this automatically ONLY with "Pretty URLs" asset optimization enabled.** Firebase preview uses cleanUrls (works). Internal links use `page.html` form so they work everywhere regardless.

## How to run locally
```
cd Desktop\Website_projects\site
python -m http.server 8000
# phone on same WiFi: http://<your-pc-ip>:8000
```

## Deploy status
- Branch `redesign-visual`, committed locally, **not pushed**.
- Deployed to **https://aww-preview.web.app** only (`firebase deploy --only hosting --site aww-preview` from Desktop\aww-preview).
- Production anupamwebworks.com deploys only via git push to main (Netlify) — untouched.
