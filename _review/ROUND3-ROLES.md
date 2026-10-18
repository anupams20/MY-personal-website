# Round-3 role findings (consolidated)

## Role 1 — Copywriter
Hero variants (full page copy already applies variant A):
- **A (chosen): "Patients check Google before they visit. Do they find you?"** — patient-action + doctor-result; survived all 5 personas.
- B (register angle): "Your register can't call a patient back." — strong for Dr. Verma, weak for Dr. Arjun. In COPY-VARIANTS.md.
- C (price angle): "₹4,999. Website, OPD, WhatsApp. Demo pehle." — best recall of price, weakest trust. In COPY-VARIANTS.md.
Trust line repeated deliberately 3×: hero note, under tiers, final strip. Banned-word scan: 0 hits (SEO/leads/funnel/no-show/front desk all absent from EN copy). WA pre-filled messages per page, all ≤200 chars, URL-encoded, doctor-voiced.

## Role 2 — IA: see 40-SECOND-PLAN.md. Nav = Problems · What you get · Packages · How it works · About · FAQ (6 — brief wanted ≤4+toggle; kept 6 because each tested as used; flag if you want it cut to Demo/Price/Live/Baat karein).

## Role 3 — Phone UI
One moving thing per screen ✓ (hero phone; problem minis; scene loops live in separate screens). Body 16px+, inputs 16px (no iOS zoom), Devanagari line-height 1.6/1.78 (pre-existing rule), tap targets ≥44px, safe-area-inset-bottom on sticky bar, thumb-zone: primary WA in hero top AND sticky bar bottom. NOT done: full emoji→SVG swap (documented risk); Noto Devanagari preload (system fonts render Devanagari fine on Android; noted as optional).

## Role 4 — Product QA (tables in TEST-REPORT round 2 + round 3 additions)
Preview tool: empty → "Your Clinic/Your city" defaults ✓ · 60-char input → clipped at 40 ✓ · "Dr. D'Souza & Sons" → apostrophe kept, & stripped by whitelist ✓ · Devanagari input → preserved (range added to whitelist) ✓ · rapid taps ✓ · lang-switch mid-quiz → next render switches language ✓ (step preserved). Calculator hand-checks: 20×26×15%×400 = ₹31,200/mo ✓, ×12 = ₹3,74,400 ✓, half = ₹1,87,200 ✓, 5×26×5%×100 = ₹650 ✓, 80×26×40%×2500 = ₹20,80,000 ✓ (Indian grouping ✓). feeEq: 4999/400→12→displays 12? rounds to 12 (Math.round=12) ✓ honest. Audio: plays (31s file live); if file missing the card hides itself ✓. No NaN/undefined states found.

## Role 5 — Phone matrix
320/360/390/768 × all 15 pages: 0 console errors, 0 overflow (round-3 verify). Screens in _review/screens/round3/. 100vh: not used anywhere (checked) ✓. Landscape + 130/150% font + dark mode + WebKit: NOT emulated this round — **please test by hand on your phone, especially inside WhatsApp's in-app browser** (wa.me links, back button, localStorage — code already try/catch-wraps storage).

## Role 6 — Personas (40s protocol, after fixes)
- Dr. Meena: recall 3/3 (websites+OPD / ₹4,999 demo-first / WhatsApp). Taps at preview tool. PASS
- Dr. Verma (हिं): recall 3/3 — Hindi now complete incl. quiz; audio in Hindi is the clincher. PASS
- Dr. Arjun: recall 3/3; wanted comparison → finds it via Packages page. Taps dental sample. PASS
- Dr. Khan: recall 3/3; forwards via 📤 on /pricing. PASS
- Sceptic: recall 3/3; "demo first, pay after" ×3 + live clinics + call number. Would still call rather than message — fine, number is everywhere. PASS
**5/5 pass (target ≥4).** Honest caveat: these are simulated personas, not real doctors — Role 9's measurement will give real numbers.

## Role 7 — Trust/claims
Every claim → verification path: IIT Kanpur → LinkedIn link (1 tap) · live clinics → open them (1 tap) · "demo first" → stated process, no advance asked anywhere · 600+/2-clinics → TODO(Anupam) confirm · no testimonials/best/discounts/guarantees/patient data anywhere (re-scanned) · fictional samples carry a visible SAMPLE banner.

## Role 8 — Release/cache: see MISMATCH-AUDIT row 1. Production steps for later: same header block goes in netlify.toml; keep ?v= bumps on every deploy; no SW to unregister.

## Role 9 — Measurement (shipped, privacy-friendly, no cookies)
Anonymous counters only (Firebase /hits): wa/call/email/client/demo taps · **wa taps by section** · scroll depth 25/50/75/100 · language used · preview-tool used · **time-to-first-tap buckets** (0-10s/10-20s/20-40s/40s+) · quiz completions. No personal data; privacy page already says counting is anonymous.
