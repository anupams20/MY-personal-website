# Anupam Singh — website development site

Plain HTML + CSS + a little JavaScript. **No build step, no npm install.** Open
`index.html` in a browser and it just works. Edit the text directly in the file.

```
site/
├── index.html      all the content and copy
├── style.css       all the styling (colours are at the very top)
├── script.js       mobile menu, FAQ accordion, footer year
├── images/
│   └── anupam.jpg  your photo, cropped
└── demos/          portfolio pieces, each a single self-contained file
    ├── dental-clinic.html    Aarogya Dental Care  (teal, clinical)
    ├── fitness-studio.html   Iron Hive Fitness    (dark, high-energy)
    └── boutique-store.html   Kalika Handloom      (warm, editorial, has a cart)
```

## How the portfolio previews work

The three thumbnails in the Work section are **live `<iframe>`s of the real demo
pages**, rendered at 4× width and scaled to 25%. That means the preview is always
the actual current page — there are no screenshots to regenerate when you edit a
demo. Swap a demo file and its thumbnail updates itself.

Each demo carries a small fixed "Demo site" ribbon linking back to your main page.
**Leave it there.** It keeps you honest about what these are, and it doubles as a
CTA if anyone shares a demo link.

---

## Before it goes live — 5 things to change

1. **`REPLACE-WITH-YOUR-DOMAIN.com`** — appears 4 times in `index.html` (lines 13, 18, 34, 35).
   Swap in your real domain once you buy it.
2. **The bank's name.** The site currently says *"a major Indian bank"* and *"one of
   India's largest private banks"* rather than naming your employer. If you've cleared
   this with HR, naming it is more persuasive. If not, leave it as is.

   **Positioning note:** the site now sells to clients *anywhere in India*. Hyderabad
   appears only as "based in" — that's deliberate. Being a real person in a real city is
   a trust signal; being restricted to one city is not.
3. **Email.** Currently `anupam07@gmail.com` (from your resume). Your LinkedIn lists a
   different address — pick one. Better still, once you own a domain, set up
   `hello@yourdomain.com`; it looks considerably more professional than Gmail.
4. **Prices.** `₹10,000 / ₹25,000 / ₹45,000` and the `₹1,500/month` care plan. Change
   them if you disagree — but keep them *published*. That's the whole point.
5. **The Work section.** ✅ Done — three demo sites are built and wired in.
   They live in `demos/` and are labelled as demonstrations, not client work.
   Replace them with real client sites as you land them.

## Nice to have

- **A better photo.** The one you gave me is 400×400 — small, and slightly soft when
  enlarged. Any recent photo taken in daylight against a plain wall will look sharper.
  Keep it friendly rather than formal; it suits the audience.
- **Testimonials.** There's deliberately no testimonials section, because you have no
  clients yet and inventing them would be fraud. Add one after your first two jobs —
  it'll do more for conversion than anything else on the page.

---

## Deploying

**Recommended: GitHub → Netlify.** Connect once, then every `git push` is a
deploy. You get version history, one-click rollback to any earlier deploy, and
free HTTPS. `netlify.toml` in this folder already sets the security headers and
the caching policy — HTML revalidates on every request so a deploy is visible
immediately, and assets cache hard.

This folder is already a git repo with one commit. To push it:

```bash
# 1. Create an EMPTY repo on github.com (no README, no .gitignore)
# 2. Then, from this folder:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on Netlify: **Add new site → Import an existing project → GitHub →
pick the repo → Deploy**. Leave the build command empty; publish directory `.`
is read from `netlify.toml`.

**Note the repo root is `site/`, not `Website_projects/`.** That is deliberate —
the parent folder holds your resume and LinkedIn PDF, which must not end up in a
public repo. `.gitignore` blocks `*.pdf` as a second line of defence.

### Alternatives
- **Netlify Drop** — <https://app.netlify.com/drop>, drag this folder on. Live in
  30 seconds, no account. Good for a one-off test; no version history.
- **Cloudflare Pages / Vercel** — equally good, same GitHub flow.
- **Docker / AWS / a VPS** — don't. See the note in the deployment discussion:
  you would be running a server to serve 160KB of static files, and taking on
  uptime responsibility for every client site you host.

## After every change

Bump the `?v=` number on the CSS and JS links in `index.html`:

```html
<link rel="stylesheet" href="style.css?v=4">
<script src="script.js?v=4"></script>
```

Browsers cache aggressively. This one habit prevents the "I fixed it but it
still looks broken on my phone" problem.

## Buying a domain

`anupamsingh.in` or `anupambuilds.com` — around ₹800–1,200/year from Hostinger,
Namecheap or GoDaddy. Point it at Netlify/Vercel through their dashboard; they give
you the exact DNS records to paste.

---

## After it's live — in this order

1. **Google Business Profile** — <https://business.google.com>. Free, 30 minutes.
   Category: *Website designer*. This matters more for getting found than the site does.
2. **Google Search Console** — <https://search.google.com/search-console>. Add the
   domain and submit it so Google knows the site exists.
3. **Post the link once** on LinkedIn and WhatsApp status. Your first client will come
   from someone who already knows you.

## Testing before you show anyone

- Open it on your own phone, not just the laptop.
- Tap the WhatsApp buttons — confirm they open a chat to **+91 96708 09669** with the
  message pre-filled.
- Read every price out loud and check you'd actually accept that amount.
