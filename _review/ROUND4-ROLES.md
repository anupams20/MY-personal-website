# Round-4 role findings (consolidated)

Role 2 (biographer): every About sentence has an HTML source-comment tracing to the facts table. Bank/cloud translated to 'live systems that can't go down' + tech expander ('production releases', 'cost-optimised infra') — no employer name, no tool jargon. Udghosh/Outlier/school/personal Gmail: excluded per brief.

Role 3 (copy): first person, aap-register, <=12-word sentences, no hype/exclamations. All draft lines used with confirm-marks converted to TODO comments. EN/HI parity checked (i18n lint PASS).

Role 5 (legal/honesty): SHOW_EMPLOYER=false default in data/facts.js (text swap point: #worklineTile on /about; sheet fact 2 uses the hidden wording). No IIT/bank logos. Small print added. No client quotes — talk-to-client is on-request with consent TODO. details.html 'large-scale corporate systems for a living' softened to defendable wording. Claims scan: no expert/best/leading/guaranteed/certified.

Role 6 (UX): chip inside existing hero pills (y=97px, screen 1, no new screen). Sheet: native feel, 44px+ buttons, focus trap, Esc/X/backdrop/swipe-down close, body scroll lock, safe-area padding, no collision with sticky bar (z-index 120 > 70).

Role 7 (QA): regression 10 pages x 2 widths = 0 errors, 0 overflow. Sheet verified: open/Esc/X/Hindi. QR scans to LinkedIn URL (segno-generated SVG, no external service). Audio plays; hides on error. Video-call message URL-encoded. JSON-LD Person valid. Lints PASS. JS-off: About shows text + working links (reveal-gating from round 2 applies). NOT re-run this round: Lighthouse, 150% font, WebKit — carried note: test on real phone.

Role 8 (personas, 4-question recall): Meena 4/4 (names Anupam+IITK, would check LinkedIn) · Verma 4/4 in Hindi (audio + Hindi sheet) · Arjun 4/4 (tech expander satisfies; taps LinkedIn) · Khan 4/4 (forwards About link) · Sceptic 4/4 — first tap = 'Live clinics kholein', second = video-call offer; says the video-call offer is the strongest de-risker. 5/5 pass (simulated).

Measurement added: trust_chip, trust_sheet, v_linkedin, v_videocall, v_liveclinic, v_demo, about_view, about_cta.
