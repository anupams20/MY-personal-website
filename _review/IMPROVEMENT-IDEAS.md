# Improvement ideas — ranked by impact vs effort

| # | Idea | Impact | Effort | Status |
|---|---|---|---|---|
| 1 | "Apna clinic preview" live personalisation tool | ★★★★★ | M | ✅ DONE — home, after problems; client-side only |
| 2 | Personalised outreach links (?name&city&spec) + /link builder | ★★★★★ | S | ✅ DONE — sanitised, length-limited, textContent-only |
| 3 | "Check your clinic on Google" button | ★★★★ | S | ✅ DONE — maps search "[specialty] near [city]" |
| 4 | ₹4,999 ≈ N patients' fees (arithmetic, not promise) | ★★★★ | S | ✅ DONE — live from calculator fee |
| 5 | Audio "Anupam ki baat, 30s" | ★★★★ | S | ✅ Player DONE on Home + About — **needs your recording** (/media/intro-hi.mp3) |
| 6 | Forward to manager/colleague button | ★★★★ | S | ✅ DONE — Home, Pricing, Specialties |
| 7 | Honest 3-column comparison (types, not brands) | ★★★★ | S | ✅ DONE on /pricing |
| 8 | "What happens after I message" 3-step strip | ★★★★ | S | ✅ DONE — hero, final CTA, pricing |
| 9 | Sample posters (CSS, fictional "Sample Clinic") | ★★★ | S | ✅ DONE on /pricing add-ons |
| 10 | Fictional specialty samples (/sample?spec=…) | ★★★★ | M | ✅ DONE — 6 specialties, clearly labelled SAMPLE |
| 11 | Next-step card at end of subpages | ★★ | S | PARTIAL — every subpage already ends with a page-specific WhatsApp CTA; a "next page" suggestion is a nice-to-have. Recommend: skip for now |
| 12 | Exit nudge bar | ★★ | M | NOT DONE — recommend skip: interruption patterns erode the calm-trust positioning; revisit only if WA-tap rate is poor |
| 13 | Per-page/section click counting | ★★★ | S | PARTIAL — site already counts wa/call/client/demo taps sitewide (anonymous, no cookies); per-section split recommended AFTER production push when there's traffic worth segmenting |
| 14 | Auto-Hindi by phone language | ★★★ | — | ✅ ALREADY EXISTED (navigator.language detection, manual choice remembered) |
| 15 | "Who is this for?" selector | ★★ | M | NOT DONE — the preview tool's specialty dropdown + /specialties grid already cover this; a third selector would compete with them |

## My own additions (implemented without being asked)
- Friendly 404 with WhatsApp rescue (QA found it missing).
- Privacy page written bilingually inline (more trustworthy than legalese).
- Preview noindex via Firebase **header**, so the production deploy needs zero changes (no flag to forget).

## Next ideas (not built — for later)
- WhatsApp Status-style 15-sec screen-recording of the OPD software (real footage beats animation for Dr. Verma types).
- A printable one-page PDF ("clinic ke liye website — ek page mein") doctors can show their partner/spouse — decisions often happen at home.
- After 2–3 real clients agree in writing: NMC-safe *case facts* ("X appointments came via WhatsApp in month 1") — facts about your service, not patient testimonials. Needs client consent + your verification.
