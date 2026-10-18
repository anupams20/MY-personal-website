/* Small bits of behaviour. No libraries. */
document.documentElement.classList.add('js'); /* no-JS fallback: reveal styles only apply when JS runs */

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
     "I don't" in the HTML never matches "I don't" in the dictionary.
     Normalise both sides once, and quotes/dashes while we're at it. */
  function norm(s) {
    return String(s)
      .replace(/['']/g, "'")
      .replace(/[""]/g, '"')
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
    var sel = 'li,summary,h3,h4,p,a,span,button,strong,td,th,label,option,output,b,small,i';
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
  var mcta = document.getElementById('mcta'), pain = document.getElementById('problems') || document.getElementById('pain');
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
      var jar = document.getElementById('jar');
      if (jar) jar.dataset.rate = month > 120000 ? 'fast' : month > 50000 ? 'med' : 'slow';
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
    { q: 'Your practice is…', score: false,
      o: ['🧑‍⚕️ Just me', '👥 2–5 doctors', '🏥 6+ / hospital'] },
    { q: 'Own website?',
      o: ['❌ No', '📘 Only Facebook / Insta', '✅ Yes'] },
    { q: 'Google listing: photos + 20 reviews?',
      o: ['🤷 Not sure', '🌓 Partly', '⭐ Yes, both'] },
    { q: 'How do patients book?',
      o: ['📞 Call / walk-in only', '💬 WhatsApp, informally', '🗓️ Online booking'] },
    { q: 'Appointment reminders?',
      o: ['❌ None', '🗣️ Staff calls manually', '🤖 Automatic'] },
    { q: 'Patient records live in…',
      o: ['📒 Paper registers', '🖥️ Excel / files', '⚙️ Proper software'] },
    { q: 'Patients from Google last month?',
      o: ['🤷 No idea', '🌓 Rough sense', '📊 Tracked'] }
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
    var HIQ = (document.documentElement.lang === 'hi' && window.I18N && window.I18N.hi && window.I18N.hi.QUIZ) || null;
    var item = (HIQ || Q)[step];
    document.getElementById('qzFill').style.width = ((step) / Q.length * 100) + '%';
    var dots = '';
    for (var di = 0; di < Q.length; di++) dots += '<i class="' + (di < step ? 'done' : di === step ? 'now' : '') + '"></i>';
    document.getElementById('qzStep').innerHTML = dots + '<span>' + (step + 1) + '/' + Q.length + '</span>';
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
    var ring = document.getElementById('ringVal');
    if (score <= 40) { title = '🌱 Invisible online — fixable fast.'; lastBand = 'low'; ring.style.stroke = '#d97706';
      msg = 'Patients in your city are searching right now and finding your competitors. The good news: starting from zero means every fix shows results quickly.'; }
    else if (score <= 70) { title = '🚀 Halfway there — leaks to plug.'; lastBand = 'mid'; ring.style.stroke = '#0e7490';
      msg = 'You have pieces of an online presence, but patients fall through the gaps between them — missed bookings, no reminders, no tracking.'; }
    else { title = '⭐ Strong base — time to compound.'; lastBand = 'high'; ring.style.stroke = '#15803d';
      msg = 'Better than most clinics. The next wins are in automation and measurement, so growth stops depending on memory and effort.'; }
    document.getElementById('scoreTitle').textContent = title;
    document.getElementById('scoreMsg').textContent = msg;
    var rec = answers[0] === 0 ? 'Recommended for you: Clinic Starter (₹4,999)'
            : answers[0] === 1 ? 'Recommended for you: Clinic Growth (₹9,999 — most chosen)'
            : 'Recommended for you: Hospital Pro (₹34,999)';
    document.getElementById('scoreRec').innerHTML = rec + ' · <a href="#pricing">see package ↓</a>';
    var n = document.getElementById('scoreNum');
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



/* ============================================================
   v15 — "apna clinic" personalisation, URL params, Google check,
   fee-equivalence, forward buttons. All client-side; nothing is
   sent anywhere until the user taps WhatsApp.
   ============================================================ */
(function () {
  'use strict';
  var SPEC = {
    general:   { ico: '🩺', line: 'General physician',        q: 'doctor',            chips: ['Fever & BP', 'Diabetes', 'Full check-up'] },
    gynae:     { ico: '🤰', line: 'Gynae & maternity',        q: 'gynecologist',      chips: ['Pregnancy care', 'Delivery', 'PCOS'] },
    dental:    { ico: '🦷', line: 'Dental clinic',            q: 'dentist',           chips: ['RCT', 'Braces', 'Implants'] },
    eye:       { ico: '👁️', line: 'Eye clinic',               q: 'eye specialist',    chips: ['Cataract', 'Eye test', 'Specs removal'] },
    pediatrics:{ ico: '🧸', line: 'Child specialist',         q: 'child specialist',  chips: ['Vaccination', 'Fever', 'Growth'] },
    skin:      { ico: '💆', line: 'Skin & hair clinic',       q: 'skin specialist',   chips: ['Acne', 'Hair fall', 'Laser'] },
    ortho:     { ico: '🦴', line: 'Orthopaedic clinic',       q: 'orthopedic doctor', chips: ['Joint pain', 'Fracture', 'Spine'] },
    psychiatry:{ ico: '🧠', line: 'Mental health clinic',     q: 'psychiatrist',      chips: ['Confidential', 'Video consult', 'Counselling'] },
    hospital:  { ico: '🏥', line: 'Multi-specialty hospital', q: 'hospital',          chips: ['24×7 Emergency', 'All departments', 'Health packages'] }
  };
  function clean(v, n) { return (v || '').replace(/[^\w .,()\-\u0900-\u097F]/g, ' ').replace(/\s+/g, ' ').slice(0, n).trim(); }

  var nameI = document.getElementById('pv_name');
  if (nameI) {
    var cityI = document.getElementById('pv_city'), specI = document.getElementById('pv_spec');
    function paint() {
      var n = clean(nameI.value, 40), c = clean(cityI.value, 30), sp = SPEC[specI.value] || SPEC.general;
      document.getElementById('pvName').textContent = n || 'Your Clinic';
      document.getElementById('pvCity').textContent = c || 'Your city';
      document.getElementById('pvSpecIco').textContent = sp.ico;
      document.getElementById('pvSpecLine').textContent = sp.line;
      var ch = document.getElementById('pvChips'); ch.textContent = '';
      sp.chips.forEach(function (t) { var s = document.createElement('span'); s.textContent = t; ch.appendChild(s); });
      var msg = 'Hi Anupam, I am ' + (n || 'a doctor') + (c ? ' from ' + c : '') + ' (' + sp.line + '). Please send my clinic\'s free demo.';
      document.getElementById('pvWa').href = 'https://wa.me/919670809669?text=' + encodeURIComponent(msg);
      document.getElementById('pvGoogle').href = 'https://www.google.com/maps/search/' +
        encodeURIComponent(sp.q + (c ? ' near ' + c : ' near me'));
    }
    [nameI, cityI, specI].forEach(function (el) { el.addEventListener('input', paint); el.addEventListener('change', paint); });

    /* URL personalisation: ?name=Dr.%20Sharma&city=Kanpur&spec=dental */
    try {
      var q = new URLSearchParams(location.search);
      var pn = clean(q.get('name'), 40), pc = clean(q.get('city'), 30), ps = (q.get('spec') || '').toLowerCase();
      if (pn) nameI.value = pn;
      if (pc) cityI.value = pc;
      if (SPEC[ps]) specI.value = ps;
      if (pn) {
        var h1 = document.querySelector('.hero h1');
        var specWord = SPEC[ps] ? SPEC[ps].line.toLowerCase() : 'clinic';
        h1.textContent = pn + ', here is how your ' + (pc ? pc + ' ' : '') + specWord + ' looks on Google.';
        var pvSec = document.getElementById('preview');
        setTimeout(function () { if (pvSec) pvSec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 900);
      }
    } catch (e) {}
    paint();
  }

  /* fee-equivalence: ₹4,999 as N patients' fees (plain arithmetic) */
  var feeEq2 = document.getElementById('feeEq2');
  if (feeEq2) { feeEq2.textContent = Math.round(4999 / 400); }
  var feeEq = document.getElementById('feeEq'), feeIn = document.getElementById('c_fee');
  if (feeEq && feeIn) {
    function eq() {
      var f = +feeIn.value || 400;
      feeEq.textContent = Math.max(2, Math.round(4999 / f));
      document.getElementById('feeEqFee').textContent = f.toLocaleString('en-IN');
    }
    feeIn.addEventListener('input', eq); eq();
  }

  /* audio: hide the card politely if the file is missing */
  document.querySelectorAll('.audiocard audio').forEach(function (au) {
    au.addEventListener('error', function () { var c = au.closest('.audiocard'); if (c) c.style.display = 'none'; });
  });

  /* forward-to-colleague buttons */
  document.querySelectorAll('.shareFwd').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var msg = 'Dekho — clinic website + OPD software, ₹4,999 se. Demo pehle dikhate hain, payment baad mein.\n' +
                (location.origin && location.origin !== 'null' ? location.origin + location.pathname : 'https://anupamwebworks.com/');
      window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
    });
  });
})();


/* ===== r4: trust chip bottom sheet ===== */
(function () {
  'use strict';
  var chip = document.getElementById('trustChip'), sh = document.getElementById('tsheet');
  if (!chip || !sh) return;
  var card = document.getElementById('tsheetCard'), prevFocus = null;
  function track(k) {
    try { fetch('https://anupam-samples-default-rtdb.firebaseio.com/hits/_site_main.json',
      { method: 'PATCH', body: JSON.stringify((function(){var o={};o[k]={'.sv':{increment:1}};return o;})()) }); } catch (e) {}
  }
  function open() {
    prevFocus = document.activeElement;
    sh.hidden = false;
    requestAnimationFrame(function () { sh.classList.add('open'); });
    document.body.style.overflow = 'hidden';
    document.getElementById('tsheetX').focus();
    track('trust_sheet');
  }
  function close() {
    sh.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { sh.hidden = true; }, 220);
    if (prevFocus) prevFocus.focus();
  }
  chip.addEventListener('click', function () { track('trust_chip'); open(); });
  document.getElementById('tsheetX').addEventListener('click', close);
  document.getElementById('tsheetBg').addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (sh.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') { /* simple trap */
      var f = card.querySelectorAll('a,button');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  var y0 = null;
  card.addEventListener('touchstart', function (e) { y0 = e.touches[0].clientY; }, { passive: true });
  card.addEventListener('touchend', function (e) {
    if (y0 !== null && e.changedTouches[0].clientY - y0 > 70) close();
    y0 = null;
  }, { passive: true });
  [['tsLinked', 'v_linkedin'], ['tsVideo', 'v_videocall'], ['tsMore', 'about_cta']].forEach(function (p) {
    var el = document.getElementById(p[0]); if (el) el.addEventListener('click', function () { track(p[1]); });
  });
})();
