# Review file — branch `redesign-visual` (NOT pushed) · Round 2

## ⚠️ ALL TODO(Anupam) — things only you can decide/provide
1. **"600+ clinic websites built (demos + clients)"** — confirm (index.html creds).
2. **"2 clinics run daily OPD on my software"** — confirm both still use it (index + opd-software).
3. **Starter renewal price** — currently "Ask me" on /pricing. Set the real number.
4. **Record the intro audio**: 30–40 sec Hindi/Hinglish → save as `media/intro-hi.mp3` (players ready on Home + About).
5. **Approve the 4 OG images** (`images/og/*.jpg`) — these are what doctors see when your link lands on WhatsApp.
6. Production (Netlify) security headers + pretty-URLs: when you go live, add headers in `netlify.toml` and confirm `/how-it-works`-style URLs (internal links use `.html` so they work either way).
7. Lighthouse: re-run once on the final preview before production push (round-1 scores: 80/97/100/100; round-2 changes are light but unmeasured).

## Round-2 summary
**Fixed (from testing):** 404 page added · no-JS invisibility fixed · invented ₹1,999 removed · NMC phrasing softened + responsibility line · FAQ/quiz/subpage Hindi completed (105 entries + Hindi quiz) · injection sanitizer whitelisted · preview noindex + security headers · per-page OG tags + 4 branded OG images (37–58 KB) · FAQPage JSON-LD · sitemap + privacy.

**Added (Part B):** apna-clinic preview tool · personalised links + /link builder · check-on-Google button · fee-equivalence line · audio slot (placeholder) · forward buttons · honest comparison table · next-steps strips · CSS poster samples · 6 fictional specialty samples (/sample?spec=…).

**New pages:** `/privacy` `/link` (noindex, unlinked) `/sample` `/404.html`.

## Deploy state
Branch `redesign-visual`, committed locally, **never pushed**. Preview-only deploys from `Desktop\aww-preview` (firebase.json pins site `aww-preview`; production is Netlify-on-push, structurally unreachable from here). Production verified unchanged after every deploy.

## Run locally
`cd Desktop\Website_projects\site` → `python -m http.server 8000` → phone: `http://<pc-ip>:8000`

*(Round-1 notes preserved in git history of this file.)*
