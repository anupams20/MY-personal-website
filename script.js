/* Small bits of behaviour. No libraries. */

/* ============================================================
   >>> THE OFFER — EDIT THESE FOUR LINES AND NOTHING ELSE <<<

   This text appears in the floating chat bubble and inside the
   chat panel. Changing it here changes it everywhere.

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
  headline: '🎉 50% OFF for you',
  sub:      'Limited-time deal on your first website. Want to check if you qualify?',
  panel:    '50% OFF your first website',
  panelSub: 'A limited-time launch deal. Send me a message and I\'ll confirm whether it applies to your project.'
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

  function apply(lang) {
    var pack = (window.I18N && window.I18N[lang]) || null;
    var keys = pack ? pack.KEYS : {};
    var text = pack ? pack.TEXT : {};

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
      var hit = text[en.replace(/\s+/g, ' ').trim()];
      el.textContent = hit || en;
    });

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
  document.getElementById('teaserHead').textContent = OFFER.headline;
  document.getElementById('teaserSub').textContent  = OFFER.sub;

  var offerBox = document.getElementById('chatOffer');
  var strong = document.createElement('strong');
  strong.textContent = OFFER.panel;
  var span = document.createElement('span');
  span.textContent = OFFER.panelSub;
  offerBox.append(strong, span);

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
