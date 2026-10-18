# Round-2 Test Report — branch `redesign-visual` (not pushed)

Tested with Playwright/Chromium, device emulation 360/390/768/1440, file:// and deployed preview.
Screens in `_review/screens/`.

| Page | Role | What I did | What went wrong | Severity | Fixed? |
|---|---|---|---|---|---|
| all 12 | QA | 4 widths: console, overflow, broken imgs, mojibake | nothing | — | n/a |
| all | QA | scanned every wa.me link | all use 919670809669, per-page prefilled text, URL-encoded | — | pass |
| all | QA | every internal link + anchor target checked programmatically | none dead | — | pass |
| site | QA | made-up URL | **no 404 page** | High | ✅ 404.html (Home + WhatsApp), Firebase serves automatically; Netlify uses /404.html too |
| index | QA | JS disabled | **reveal content invisible** (opacity:0 without JS) | High | ✅ styles gated behind `html.js`; scenes get static final states without JS |
| index | QA | calc edge values read while section off-screen | empty reading — **test artifact** of `content-visibility` (renders fine when scrolled: min=650, max=20,80,000 Indian grouping, jar→fast) | Low | ✅ verified not a real bug |
| index | QA | quiz all-paths + retake | works; score 100 on best path; retake resets | — | pass |
| all | QA | lang toggle EN→हिं→EN, cross-page, reload | persists (localStorage) | — | pass |
| subpages | Hindi editor | read all text in हिं | **bodies untranslated** | Medium | ✅ 105 Hindi TEXT entries + quiz in Hindi + table cells/labels/options now translate |
| faq | Hindi editor | exact-match misses from em-dash variants | answers stayed EN | Medium | ✅ exact-string entries added, verified live |
| pricing | QA/honesty | invented ₹1,999 Starter renewal | not a real price | High | ✅ now "Ask me" + TODO(Anupam) |
| nmc-rules, faq, index | NMC reviewer | "Your registration stays safe" overconfident | borderline | Medium | ✅ softened to "Built to follow NMC guidelines"; responsibility line added on /nmc-rules |
| sample | NMC reviewer | "100% confidential" phrasing | borderline absolute | Low | ✅ softened to "confidential" |
| all | NMC reviewer | testimonials / best / discounts / before-after / patient names | none found on site or sample pages | — | pass |
| index | Security | `?name=<img onerror=…>` injection attempt | rendered as inert text (textContent sink); residue text ugly | Low | ✅ sanitizer now whitelists [letters digits . , ( ) - space + Devanagari] |
| site | Security | secrets scan | only public Firebase DB URLs (by design, rules-limited); no keys | — | pass + noted |
| preview | Security | headers | none | Medium | ✅ preview firebase.json: X-Robots-Tag noindex, nosniff, Referrer-Policy (prod/Netlify unaffected — headers for prod listed as TODO) |
| site | Privacy | where does data go | quiz lead only on submit; calc/preview fully client-side | — | ✅ /privacy page added (EN+हिं), footer-linked everywhere; preview tool says "nothing sent until you tap" |
| all | SEO | og tags | subpages had none | Medium | ✅ unique og:title/desc/url + og:image on all; 4 branded 1200×630 JPGs (37–58 KB); FAQPage JSON-LD; sitemap +privacy; preview noindex via header = zero-change production switch |
| all | A11y | tap targets, focus, contrast, alt | lang buttons fixed in round 1; icon buttons labelled; contrast AA (muted #5d6e74) | — | pass (axe-style full audit not run — noted) |

## Doctor personas (phone, stopwatch)
1. **Dr. Meena (gynae, Lucknow, in OPD):** 0–5s: headline + phone animation land; she sees "₹4,999" immediately. The preview tool typing her name is the hook. Doubt: "is it NMC-safe?" — the shield line under solutions answers it before she asks. *Would tap after seeing her name on the mockup.* → preview tool placed directly after problems ✅.
2. **Dr. Verma (58, Hindi):** auto-opens in हिं if phone is Hindi; big type, short lines; quiz now fully Hindi. He would tap "WhatsApp karein" because the next-steps strip says what happens after. Weak spot: audio "Anupam ki baat" is a placeholder — **his strongest trust element is your voice. Record it.**
3. **Dr. Arjun (dentist, Noida, compares):** the honest comparison table (Listing apps / Template sites / AWW) answers Practo/Wix directly without mudslinging; dental sample link shows a real demo. He'd forward via the new 📤 button — exactly his behaviour.
4. **Dr. Khan (nursing-home owner):** Hospital Pro tier + live hospital demo + "Forward to my manager" button = his path. Pricing page table is manager-friendly.
5. **Sceptical doctor (burned before):** "Demo first, pay after approving" repeated at hero, pricing, next-steps strip, and About's 4 verify tiles; no advance asked anywhere. The one thing that would still convert him: a call — number is everywhere.

## Performance (throttled mobile)
- Round-1 Lighthouse (live preview): Perf 80 · A11y 97 · BP 100 · SEO 100; TBT 0ms, CLS 0.048. Round-2 additions are CSS/inline-JS only (+~9KB), OG images load only when shared, audio preload=none, iframes remain tap-to-load. **Not re-run on the new deploy** (note: run once more before production push).
- Animations: idle until in-view (.in), gentle loops, all disabled under prefers-reduced-motion, static fallbacks without JS.

## Data written during tests & deleted
- Round-1 quiz functional tests wrote "Playwright Test" leads → deleted same session (verified DB clean).
- Round-2 tests did NOT submit the lead form; no analytics counted (file:// is excluded by the counter). Nothing to clean.
