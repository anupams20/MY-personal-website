# Review file — ROUND 3 ADDENDUM

## TODO(Anupam) — consolidated (round 3)
1. Confirm: 600+ sites built · 2 clinics on OPD software (same as before)
2. Starter renewal price (still ''Ask me'')
3. DECIDE: WhatsApp reminders — include in Growth package, or keep ₹1,499 add-on? (site currently says add-on everywhere)
4. Confirm the OPD mock's 3 steps match your real OPD app screens
5. Test by hand on YOUR phone, inside WhatsApp in-app browser: open preview link from a WhatsApp chat, tap wa.me + tel links, use back button (cannot be emulated here)
6. Audio is LIVE (your 31-sec recording converted to media/intro-hi.mp3) — listen once on the preview and approve
7. Production release steps (when you say go): merge redesign-visual -> main, push; add the cache-control header block to netlify.toml; keep canonical/OG on anupamwebworks.com (already set)

(Original round-1/2 file continues below)
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
