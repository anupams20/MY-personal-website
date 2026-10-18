# Mismatch audit — Round 3

| Where | Type | What disagreed | Fix | Fixed? |
|---|---|---|---|---|
| **Phones showing old Round-1 page** | Stale cache (Role 8) | Firebase served HTML with default ~1h CDN cache → phones mixed old HTML + new assets. **This was the #1 source of the mismatches you saw.** | Preview firebase.json: `Cache-Control: no-cache` on all HTML; CSS/JS 1-day + `?v=` busting (bumped to v14/v12/v11); images/audio 7-day. No service worker exists (checked). | ✅ |
| Home solutions card | Content vs content | "Reminder to patient" implied reminders included, but reminders are a **₹1,499 add-on** | Caption now "Booking arrives on your WhatsApp"; /whatsapp-booking marks reminder bubble "add-on (₹1,499 setup)"; calculator note says the same. `TODO(Anupam)`: include reminders in Growth instead? | ✅ + TODO |
| Starter vs Growth tiers | Content vs content | "Google Maps set up properly" vs "Review QR" — difference unclear | Starter: "Google Maps profile set up" · Growth: "Maps profile + review QR" | ✅ |
| nmc-rules h1 / faq / home chip | Content vs content | "Your registration stays safe" (overclaim) vs "built to follow guidelines" | Careful wording everywhere + responsibility line on /nmc-rules | ✅ (round 2+3) |
| Calculator output | Phone glitch | Jar "fees leaking" label **overlapped** "Lost every month ₹…" (you reported it) | `.jar{margin-bottom:44px}`; verified label clears the number geometrically | ✅ |
| Preview tool on your phone | Stale cache | Tool appeared not to update → your phone had the old script.js | Cache fix above; tool re-verified live (typing updates name/city/chips/WA link) | ✅ |
| Hospital demo in "Real clinics" | Content vs claim | A demo listed beside live clients diluted "real" | Removed from Home proof; lives on /specialties + /pricing | ✅ |
| "600+ built" vs "2 clinics" | Claims | Clarified wording "600+ clinic websites built (demos + clients)" + both still `TODO(Anupam)` confirm | ✅ wording |
| details.html "Hyderabad-based" | Content vs content | vs "all India, remote" messaging | Kept (it's the long-story page; states both). Consistent lead message everywhere else is all-India | ✅ |
| Numbers in हिं | EN vs HI | Indian grouping verified both languages (₹20,80,000) | — | ✅ |
| i18n coverage | EN vs HI | 32 missing keys (page heroes, chips, labels) | Added; `scripts/check_i18n.py` now gates deploys (PASS) | ✅ |
| ₹ amounts & day-ranges | Content vs content | No single source of truth | `data/facts.json` + `scripts/check_facts.py` lint (PASS). Caught stray ₹80,000 → whitelisted as explicit market reference | ✅ |
| Content vs software | Claims vs product | OPD mock shows: search patient, visit history, printed ℞, offline, backups — matches what Little Heart/Mohan Eye software does per your own description. Could not independently run the OPD app | `TODO(Anupam)`: confirm OPD mock's 3 steps match the real app screens | TODO |
| Emoji on old Android | Phone risk | 🤰🧸🦴 may render poorly on old devices | NOT fixed (SVG replacement = large effort); risk documented — key CTAs already use SVG (WhatsApp icon) | ⚠️ noted |
