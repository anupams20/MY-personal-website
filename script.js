/* Small bits of behaviour. No libraries. */

/* ============================================================
   >>> THE OFFER — EDIT HERE AND NOWHERE ELSE <<<

   This text appears in the floating chat bubble and inside the
   chat panel. Edit both the `en` and `hi` blocks, or a visitor
   on the other language keeps seeing the old wording.

   A note worth reading once: a permanent "50% OFF" sits badly
   next to "Fixed prices, published openly" further up the page.
   If everyone gets half off, the published price isn't the real
   price — which is the exact thing you promise not to do.
   An honest alternative that creates the same urgency:

     headline: 'Launch offer — 20% off',
     sub:      'For my first 5 clients. 3 spots left.',
     panel:    '20% OFF your first website',
     panelSub: 'I am taking on my first 5 clients at a launch
                rate. Message me and I will confirm if a spot
                is still open.'
   ============================================================ */
var OFFER = {
  en: {
    headline: '🩺 Free demo of YOUR clinic\'s website',
    sub:      'Send your clinic\'s name and city — I\'ll build a working demo you can see before paying anything.',
    panel:    'Free working demo for your clinic',
    panelSub: 'Tell me your clinic\'s name and city. I\'ll send a live demo website for your own clinic — you decide after seeing it, not before.'
  },
  hi: {
    headline: '🩺 आपके क्लिनिक की वेबसाइट का फ़्री डेमो',
    sub:      'क्लिनिक का नाम और शहर भेजिए — बिना पैसा दिए चलती हुई डेमो देखिए।',
    panel:    'आपके क्लिनिक के लिए फ़्री डेमो',
    panelSub: 'क्लिनिक का नाम और शहर बताइए। मैं आपके क्लिनिक की live डेमो वेबसाइट भेजूँगा — देखकर फ़ैसला कीजिए, पहले नहीं।'
  }
};

var DELAY_MS = 7000;   /* how long before the bubble appears */

(function () {
  'use strict';

  /* ==========================================================
     Language: browser detection for the default, manual toggle
     as the override, choice remembered in localStorage.

     Order of precedence:
       1. a saved choice from a previous visit  (explicit — wins)
       2. navigator.language / navigator.languages (the user's own
          device setting, so it beats guessing from an IP)
       3. English
     ========================================================== */
  var LANGS = ['en', 'hi'];

  var mem = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  function detect() {
    var saved = mem.get('lang');
    if (saved && LANGS.indexOf(saved) > -1) return saved;

    var list = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase().split('-')[0];
      if (LANGS.indexOf(code) > -1) return code;
    }
    return 'en';
  }

  /* Remember the English original the first time an element is touched,
     so switching back is exact rather than a reverse-translation. */
  var originals = new WeakMap();

  function keep(el, prop) {
    if (!originals.has(el)) originals.set(el, el[prop]);
    return originals.get(el);
  }

  /* Curly vs straight apostrophes are the classic silent miss here:
     "I don't" in the HTML never matches "I don’t" in the dictionary.
     Normalise both sides once, and quotes/dashes while we're at it. */
  function norm(s) {
    return String(s)
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, ' ')
      .trim();
  }

  var normCache = {};
  function textMap(lang) {
    if (normCache[lang]) return normCache[lang];
    var src = (window.I18N && window.I18N[lang] && window.I18N[lang].TEXT) || {};
    var out = {};
    for (var k in src) if (Object.prototype.hasOwnProperty.call(src, k)) out[norm(k)] = src[k];
    normCache[lang] = out;
    return out;
  }

  /* Offer copy in the active language; falls back to English. */
  function paintOffer(lang) {
    var o = OFFER[lang] || OFFER.en;
    var head = document.getElementById('teaserHead');
    var sub  = document.getElementById('teaserSub');
    var box  = document.getElementById('chatOffer');
    if (!head || !sub || !box) return;
    head.textContent = o.headline;
    sub.textContent  = o.sub;
    box.textContent = '';
    var strong = document.createElement('strong');
    strong.textContent = o.panel;
    var span = document.createElement('span');
    span.textContent = o.panelSub;
    box.append(strong, span);
  }

  function apply(lang) {
    var pack = (window.I18N && window.I18N[lang]) || null;
    var keys = pack ? pack.KEYS : {};
    var text = textMap(lang);

    /* elements tagged in the HTML */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var en = keep(el, 'textContent');
      el.textContent = keys[el.getAttribute('data-i18n')] || en;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var en = keep(el, 'innerHTML');
      el.innerHTML = keys[el.getAttribute('data-i18n-html')] || en;
    });

    /* everything else, matched on its exact English text */
    var sel = 'li,summary,h3,h4,p,a,span,button,strong';
    document.querySelectorAll(sel).forEach(function (el) {
      if (el.hasAttribute('data-i18n') || el.hasAttribute('data-i18n-html')) return;
      if (el.querySelector('*')) return;              /* leaf nodes only */
      if (el.closest('[data-i18n-html]')) return;     /* already handled above */
      if (el.closest('#lang')) return;                /* the toggle labels never translate */
      var en = keep(el, 'textContent');
      var hit = text[norm(en)];
      el.textContent = hit || en;
    });

    paintOffer(lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('#lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    mem.set('lang', lang);
  }

  var current = detect();
  if (current !== 'en') apply(current);
  else {
    document.querySelectorAll('#lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === 'en'));
    });
  }

  var langBox = document.getElementById('lang');
  if (langBox) {
    langBox.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-lang]');
      if (!b || b.dataset.lang === current) return;
      current = b.dataset.lang;
      apply(current);
    });
  }

  /* ---------- footer year ---------- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var links  = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- nav border on scroll ---------- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- one FAQ answer open at a time ---------- */
  var faqs = document.querySelectorAll('.faq details');
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      faqs.forEach(function (other) { if (other !== d) other.open = false; });
    });
  });

  /* ---------- chat widget ---------- */
  var chat   = document.getElementById('chat');
  var fab    = document.getElementById('chatFab');
  var panel  = document.getElementById('chatPanel');
  var teaser = document.getElementById('chatTeaser');
  if (!chat || !fab || !panel || !teaser) return;

  /* paint the offer text from the block above (textContent, so the copy
     above can contain any characters without breaking the markup) */
  paintOffer(current);

  /* sessionStorage so a dismissed bubble stays dismissed while browsing,
     but returns on a fresh visit. Wrapped — private mode can throw. */
  var store = {
    get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };

  function hideTeaser() { teaser.hidden = true; }

  function openChat() {
    panel.hidden = false;
    hideTeaser();
    chat.classList.add('is-open', 'is-seen');
    fab.setAttribute('aria-expanded', 'true');
    store.set('chatSeen', '1');
  }

  function closeChat() {
    panel.hidden = true;
    chat.classList.remove('is-open');
    fab.setAttribute('aria-expanded', 'false');
  }

  /* JS is alive: upgrade the plain WhatsApp link into a panel toggle,
     and only now let the unread badge show. */
  chat.classList.add('is-ready');
  fab.setAttribute('role', 'button');
  fab.setAttribute('aria-expanded', 'false');

  fab.addEventListener('click', function (e) {
    e.preventDefault();          /* cancel the href fallback */
    e.stopPropagation();         /* don't let the outside-click handler see it */
    panel.hidden ? openChat() : closeChat();
  });

  document.getElementById('chatClose').addEventListener('click', closeChat);

  teaser.addEventListener('click', function (e) { e.stopPropagation(); openChat(); });

  /* the × on the bubble dismisses only the bubble, not the widget */
  document.getElementById('teaserClose').addEventListener('click', function (e) {
    e.stopPropagation();
    hideTeaser();
    chat.classList.add('is-seen');
    store.set('chatDismissed', '1');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { closeChat(); fab.focus(); }
  });

  /* close when clicking away, but never swallow a click inside the widget */
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !chat.contains(e.target)) closeChat();
  });

  /* tapping a quick reply hands off to WhatsApp — tidy up behind it */
  panel.querySelectorAll('.qr').forEach(function (a) {
    a.addEventListener('click', function () { setTimeout(closeChat, 250); });
  });

  if (store.get('chatSeen')) chat.classList.add('is-seen');

  if (!store.get('chatDismissed') && !store.get('chatSeen')) {
    setTimeout(function () {
      if (panel.hidden) teaser.hidden = false;
    }, DELAY_MS);
  }
})();


/* ============================================================
   v11 — scroll rhythm + gamification. No libraries.
   Leads save to Firebase RTDB (/aww/leads) and ping ntfy.sh for
   an instant phone notification (topic below — subscribe in the
   ntfy app). Honest note: client-side only, no secrets involved.
   ============================================================ */
(function () {
  'use strict';
  var LEADS_DB = 'https://anupam-sample-default-rtdb.asia-southeast1.firebasedatabase.app/aww/leads.json';
  var NTFY = 'https://ntfy.sh/aww-leads-x7k2m9qp';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function saveLead(o) {
    o.ts = Date.now(); o.page = location.pathname;
    try { fetch(LEADS_DB, { method: 'POST', body: JSON.stringify(o), keepalive: true }); } catch (e) {}
    try {
      fetch(NTFY, { method: 'POST', body: '🩺 New lead: ' + (o.name || '?') + ' · ' + (o.phone || '') +
        (o.clinic ? ' · ' + o.clinic : '') + (o.score != null ? ' · score ' + o.score : '') +
        ' · via ' + (o.type || 'site'), headers: { Title: 'anupamwebworks.com lead' } });
    } catch (e) {}
  }

  /* ---------- scroll progress ---------- */
  var fill = document.getElementById('sprogFill');
  if (fill) {
    addEventListener('scroll', function () {
      var e = document.documentElement;
      fill.style.width = Math.min(100, (e.scrollTop / ((e.scrollHeight - e.clientHeight) || 1)) * 100) + '%';
    }, { passive: true });
  }

  /* ---------- reveal + counters ---------- */
  var toReveal = document.querySelectorAll('.card,.tier,.sstat,.step,.work__item,.pkg,.fac');
  toReveal.forEach(function (el) { el.classList.add('reveal'); });
  function countUp(el) {
    var to = +el.dataset.to, t0 = null, dur = 1500;
    if (reduced) { el.textContent = to; return; }
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));   /* ease-out, like a breath */
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var seen = new WeakSet();
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('.cnt[data-to]').forEach(function (c) {
        if (!seen.has(c)) { seen.add(c); countUp(c); }
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal,.statstrip__grid').forEach(function (el) { io.observe(el); });

  /* ---------- sticky mobile CTA: appears after the pain section ---------- */
  var mcta = document.getElementById('mcta'), pain = document.getElementById('pain');
  if (mcta && pain) {
    mcta.hidden = false;
    var mio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.boundingClientRect.bottom < 0) mcta.classList.add('show');
        else if (e.isIntersecting && e.boundingClientRect.top > 0) mcta.classList.remove('show');
      });
    }, { threshold: 0 });
    mio.observe(pain);
  }

  /* ---------- iframe facades: load live preview on tap ---------- */
  document.querySelectorAll('.lazyfr').forEach(function (f) {
    function load() {
      if (f.querySelector('iframe')) return;
      var i = document.createElement('iframe');
      i.src = f.dataset.src; i.title = f.dataset.title || 'Live preview';
      i.setAttribute('scrolling', 'no'); i.setAttribute('tabindex', '-1');
      f.appendChild(i);
      var b = f.querySelector('.lazyfr__btn'); if (b) b.remove();
    }
    f.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); load(); });
    f.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); load(); } });
  });

  /* ---------- no-show calculator ---------- */
  var ap = document.getElementById('c_ap');
  if (ap) {
    var fee = document.getElementById('c_fee'), ns = document.getElementById('c_ns');
    var fmt = function (n) { return n.toLocaleString('en-IN'); };
    function recalc() {
      var a = +ap.value, f = +fee.value, p = +ns.value;
      document.getElementById('o_ap').textContent = a;
      document.getElementById('o_fee').textContent = fmt(f);
      document.getElementById('o_ns').textContent = p;
      var month = Math.round(a * 26 * (p / 100) * f);
      document.getElementById('r_month').textContent = fmt(month);
      document.getElementById('r_year').textContent = fmt(month * 12);
      document.getElementById('r_half').textContent = fmt(Math.round(month * 12 / 2));
      var cta = document.getElementById('calcCta');
      if (cta) cta.href = 'https://wa.me/919670809669?text=' + encodeURIComponent(
        'Hi Anupam, your calculator says no-shows may be costing my clinic about ₹' + fmt(month) +
        '/month. Tell me how reminders + booking would work for us.');
    }
    [ap, fee, ns].forEach(function (el) { el.addEventListener('input', recalc); });
    recalc();
  }

  /* ---------- Clinic Growth Score quiz ---------- */
  var qzBody = document.getElementById('qzBody');
  if (!qzBody) return;
  var Q = [
    { q: 'Who runs the practice?', score: false,
      o: ['Just me (solo practitioner)', '2–5 doctors', '6+ doctors / nursing home / hospital'] },
    { q: 'Does your clinic have its own website?',
      o: ['No', 'Only a Facebook / Instagram page', 'Yes, our own website'] },
    { q: 'Your Google listing — does it have photos and 20+ reviews?',
      o: ['No, or not sure', 'Partly (few photos or reviews)', 'Yes, both'] },
    { q: 'How do new patients book an appointment?',
      o: ['Walk-in or phone call only', 'WhatsApp, informally', 'Online form / booking link'] },
    { q: 'Do patients get appointment reminders?',
      o: ['No reminders', 'Staff calls or messages manually', 'Automatic reminders'] },
    { q: 'Where do patient records live?',
      o: ['Paper registers', 'Excel / files on a computer', 'Proper software'] },
    { q: 'Do you know how many patients found you on Google last month?',
      o: ['No idea', 'A rough sense', 'Yes — we track it'] }
  ];
  var CHECKLIST = [
    'Claim and complete your Google Business Profile — photos, services, timings, correct phone.',
    'Get your clinic its own website — social pages rent visibility; a website you own builds it.',
    'Put a one-tap WhatsApp booking button everywhere patients see you.',
    'Set a weekly review habit: a polite ask + QR card at reception (never pay or incentivise — NMC rules).',
    'Send a day-before WhatsApp reminder for every appointment — the cheapest no-show fix there is.',
    'Move patient records off paper into simple OPD software your receptionist can run.',
    'Check your Google Business insights once a month — know your numbers like you know your OPD register.'
  ];
  var step = 0, answers = [];
  function render() {
    var item = Q[step];
    document.getElementById('qzFill').style.width = ((step) / Q.length * 100) + '%';
    document.getElementById('qzStep').textContent = 'Question ' + (step + 1) + ' of ' + Q.length;
    var h = '<div class="qz__q">' + item.q + '</div><div class="qz__opts">';
    item.o.forEach(function (o, i) {
      h += '<button type="button" class="qz__opt" data-i="' + i + '">' + o + '</button>';
    });
    qzBody.innerHTML = h + '</div>';
    document.getElementById('qzBack').hidden = step === 0;
    qzBody.querySelectorAll('.qz__opt').forEach(function (b) {
      b.addEventListener('click', function () {
        answers[step] = +b.dataset.i;
        step++;
        if (step < Q.length) render(); else finish();
      });
    });
  }
  window.qzStart = function () {
    step = 0; answers = [];
    document.getElementById('qzResult').hidden = true;
    document.getElementById('qz').hidden = false;
    document.getElementById('checklist').hidden = true;
    document.getElementById('unlock').style.display = '';
    render();
  };
  document.getElementById('qzBack').addEventListener('click', function () {
    if (step > 0) { step--; render(); }
  });
  var lastScore = 0, lastBand = '';
  function finish() {
    var score = 4;
    for (var i = 1; i < Q.length; i++) score += (answers[i] || 0) * 8;
    lastScore = score;
    document.getElementById('qz').hidden = true;
    var res = document.getElementById('qzResult');
    res.hidden = false;
    var title, msg;
    if (score <= 40) { title = 'Invisible online — but that\'s fixable fast.'; lastBand = 'low';
      msg = 'Patients in your city are searching right now and finding your competitors. The good news: starting from zero means every fix shows results quickly.'; }
    else if (score <= 70) { title = 'Halfway there — with leaks to plug.'; lastBand = 'mid';
      msg = 'You have pieces of an online presence, but patients fall through the gaps between them — missed bookings, no reminders, no tracking.'; }
    else { title = 'Strong base — time to compound it.'; lastBand = 'high';
      msg = 'Better than most clinics. The next wins are in automation and measurement, so growth stops depending on memory and effort.'; }
    document.getElementById('scoreTitle').textContent = title;
    document.getElementById('scoreMsg').textContent = msg;
    var rec = answers[0] === 0 ? 'Recommended for you: Clinic Starter (₹4,999)'
            : answers[0] === 1 ? 'Recommended for you: Clinic Growth (₹9,999 — most chosen)'
            : 'Recommended for you: Hospital Pro (₹34,999)';
    document.getElementById('scoreRec').innerHTML = rec + ' · <a href="#pricing">see package ↓</a>';
    var n = document.getElementById('scoreNum'), ring = document.getElementById('ringVal');
    if (reduced) { n.textContent = score; ring.style.strokeDashoffset = 327 - (327 * score / 100); }
    else {
      n.textContent = '0';
      setTimeout(function () {
        ring.style.strokeDashoffset = 327 - (327 * score / 100);
        var t0 = null;
        requestAnimationFrame(function tick(t) {
          if (!t0) t0 = t;
          var p = Math.min(1, (t - t0) / 1400);
          n.textContent = Math.round(score * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        });
      }, 120);
    }
    res.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    try { fetch('https://anupam-samples-default-rtdb.firebaseio.com/hits/_site_main.json',
      { method: 'PATCH', body: JSON.stringify({ quiz_done: { '.sv': { increment: 1 } } }) }); } catch (e) {}
  }
  window.qzLead = function (e) {
    e.preventDefault();
    var sb = e.target.querySelector('button'); if (sb) { if (sb.disabled) return false; sb.disabled = true; }
    saveLead({ type: 'quiz', name: document.getElementById('ql_n').value,
      phone: document.getElementById('ql_p').value, clinic: document.getElementById('ql_c').value,
      score: lastScore, band: lastBand, answers: answers.join(',') });
    document.getElementById('unlock').style.display = 'none';
    var cl = document.getElementById('checklist');
    /* weakest answers first — their personal priorities */
    var order = [];
    for (var i = 1; i < Q.length; i++) order.push([i, answers[i] || 0]);
    order.sort(function (a, b) { return a[1] - b[1]; });
    var prio = order.slice(0, 2).map(function (x) { return x[0] - 1; });
    var h = '<h4>Your 7-point Clinic Growth Checklist</h4><ul>';
    CHECKLIST.forEach(function (c, i) {
      h += '<li class="' + (prio.indexOf(i) > -1 ? 'prio' : '') + '">' + c + '</li>';
    });
    cl.innerHTML = h + '</ul><p class="cl-note">★ = your two biggest priorities, based on your answers. Screenshot this — or message me and I\'ll walk you through it free.</p>';
    cl.hidden = false;
    cl.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    return false;
  };
  qzStart();
})();

