/* ============================================================
   Hindi translations — clinic-focused rewrite (v9).

   THE RULE: these stay in ENGLISH, always:
     • Qualifications and institutions — B.Tech, IIT Kanpur, NMC
     • Brand/product names — WhatsApp, Google, OPD, UPI, LinkedIn
     • Package names — Clinic Starter, Clinic Growth, Hospital Pro
     • Numbers, prices, dates, phone numbers

   Anything with no entry below simply stays in English (the
   script falls back to the English original by design).

   REGISTER: everyday spoken Hindi, the way a doctor's reception
   actually talks. Not शुद्ध हिंदी, never word-for-word.
   ============================================================ */

window.I18N = {
  hi: {

    KEYS: {
      /* nav */
      'skip'        : 'सीधे कंटेंट पर जाएँ',
      'nav.problems': 'समस्याएँ',
      'nav.services': 'क्या मिलेगा',
      'nav.pricing' : 'पैकेज',
      'nav.work'    : 'लाइव काम',
      'nav.about'   : 'मेरे बारे में',
      'nav.faq'     : 'सवाल-जवाब',
      'nav.quote'   : 'फ़्री डेमो पाएँ',

      /* hero */
      'hero.pill1'  : 'B.Tech, IIT Kanpur',
      'hero.pill2'  : 'सिर्फ़ क्लिनिक — पूरा भारत, remote',
      'hero.h1'     : 'मरीज़ पहले <span class="hl">Google</span> देखते हैं। क्या वो <span class="hl">आपको</span> ढूंढ पाते हैं?',
      'hero.lede'   : '<strong>वेबसाइट। OPD सॉफ़्टवेयर। WhatsApp appointments.</strong> दाम फ़िक्स, <strong class="mark">₹4,999</strong> से.',
      'hero.cta1'   : 'WhatsApp करें — फ़्री क्लिनिक डेमो',
      'hero.cta2'   : '▶ 60-सेकंड की जाँच कीजिए',
      'hero.note'   : 'पहले अपनी वेबसाइट देखिए। पसंद आए तभी पैसा दीजिए।',
      'hero.replies': 'कुछ ही घंटों में जवाब',

      /* credibility strip */
      'cred.1a': '600+',        'cred.1b': 'क्लिनिक वेबसाइटें बनीं (demo + client)',
      'cred.2a': '2 क्लिनिक',   'cred.2b': 'रोज़ाना मेरे OPD सॉफ़्टवेयर पर',
      'cred.3a': '16 शहर',      'cred.3b': 'पूरे UP में मैप किए',
      'cred.4a': 'IIT Kanpur',  'cred.4b': 'B.Tech, 2024',
      'cred.5a': 'पहले डेमो',   'cred.5b': 'approve करने के बाद ही payment',

      /* pain section */
      'sec.pain.eye': 'जाना-पहचाना लगेगा?',
      'h2.pain'     : 'क्लिनिक <span class="hl-light">मरीज़ कैसे खोते हैं</span> — देखिए:',
      'sub.pain'    : '<strong>हज़ारों UP क्लिनिक</strong> मैप किए — हर जगह यही चार दिक्कतें। चारों ठीक हो सकती हैं।',
      'pain.1.h'    : 'मरीज़ आपको ढूँढ नहीं पाते',
      'pain.1.p'    : 'कोई "doctor near me" खोजता है। Competitor दिखता है। आप नहीं।',
      'pain.2.h'    : 'छूटी कॉल = गया मरीज़',
      'pain.2.p'    : 'OPD में फ़ोन busy। मरीज़ list का अगला क्लिनिक बुक कर लेता है।',
      'pain.3.h'    : 'सब कुछ रजिस्टरों में',
      'pain.3.p'    : 'रिकॉर्ड कॉपियों में। पर्चे दो बार। पुराने visit — गायब।',
      'pain.4.h'    : 'आपकी साख ऑनलाइन काम नहीं कर रही',
      'pain.4.p'    : 'सालों के खुश मरीज़ — 12 reviews। नया मरीज़ सिर्फ़ 12 देखता है।',

      /* services */
      'sec.services.eye': 'क्या मिलेगा',
      'h2.services' : 'इलाज, <span class="hl">4 तस्वीरों में</span>.',
      'sub.services': 'सिर्फ़ healthcare — हर फ़ीचर इसलिए है क्योंकि <strong>किसी असली क्लिनिक को ज़रूरत पड़ी</strong>।',
      'svc.1.h': 'क्लिनिक वेबसाइट',
      'svc.1.p': 'आपके डॉक्टर, समय, फ़ोटो — और <strong>हर जगह booking बटन</strong>.',
      'svc.2.h': 'OPD सॉफ़्टवेयर',
      'svc.2.p': 'रजिस्टर की छुट्टी — रिकॉर्ड, history, <strong>प्रिंटेड पर्चा</strong>.',
      'svc.3.h': 'Google से मरीज़',
      'svc.3.p': 'आपकी specialty खोजने वाले को <strong>आप मिलें</strong> — Google पर।',
      'svc.4.h': 'WhatsApp पर booking और reminder',
      'svc.4.p': 'Request <strong>सीधे आपके WhatsApp</strong> पर — नाम, नंबर, department.',
      'spec.h'  : 'हर तरह की practice के लिए:',
      'spec.note': '<strong>Mental-health professionals:</strong> privacy-first साइटें — discreet booking, teleconsult, NMC-compliant. <a href="details.html#mental">और जानिए →</a>',

      /* pricing */
      'sec.pricing.eye': 'पैकेज',
      'h2.pricing'  : 'दाम फ़िक्स। <span class="hl-light">कोई surprise नहीं.</span>',
      'sub.pricing' : 'मैसेज करने से <strong>पहले</strong> ही दाम पता।',
      'ptrust.1': 'पैसा देने से पहले चलती हुई डेमो देखिए',
      'ptrust.2': 'दाम पहले से तय, बाद में नहीं बदलता',
      'ptrust.3': 'Domain और code आपके नाम पर',
      'ptrust.4': 'Renewal आपकी मर्ज़ी, कभी ज़बरदस्ती नहीं',
      'tier.1.h': 'Clinic Starter',
      'tier.1.for': 'अकेले practice करने वाले डॉक्टर के लिए — ऑनलाइन ठीक से मौजूद होने का पहला कदम।',
      'tier.1.note': '📅 3–5 दिन में तैयार',
      'tier.1.out': '<strong>मरीज़ आपको ढूँढें और WhatsApp पर book करें.</strong>',
      'tier.1.live': '<strong>3–5 दिन में live</strong>',
      'tier.pop': 'सबसे ज़्यादा चुना गया',
      'tier.2.h': 'Clinic Growth',
      'tier.2.for': 'उस क्लिनिक के लिए जिसे Google से नए मरीज़ भी चाहिए और आधुनिक रिसेप्शन भी।',
      'tier.2.note': '📅 7–10 दिन में तैयार · फिर ₹4,999/साल',
      'tier.2.out': '<strong>"near me" खोज में दिखिए — और OPD बिना रजिस्टर चलाइए.</strong>',
      'tier.2.live': '<strong>7–10 दिन में live</strong>',
      'tier.3.h': 'Hospital Pro',
      'tier.3.for': 'कई डॉक्टरों वाले क्लिनिक, nursing home और हॉस्पिटल के लिए।',
      'tier.3.note': '📅 10–14 दिन में तैयार · फिर ₹6,999/साल',
      'tier.3.out': '<strong>ऑनलाइन उतने ही professional दिखिए जितनी बड़ी hospital chains.</strong>',
      'tier.3.live': '<strong>10–14 दिन में live</strong>',
      'tier.enq': 'पूछताछ करें', 'tier.enq2': 'पूछताछ करें', 'tier.enq3': 'पूछताछ करें',
      'tiers.guarantee': '<strong>पहले डेमो। Payment सिर्फ़ approve करने के बाद.</strong>',
      'addons.eye': 'ज़रूरत पड़े तो add-on',
      'addon.1': '🎨 Poster pack — हर महीने 8 त्योहार/health-day पोस्टर · ₹999/महीना',
      'addon.2': '⏰ WhatsApp appointment reminder · ₹1,499 setup',
      'addon.3': '💻 Teleconsultation setup (video link + payment) · ₹1,999',
      'addon.4': '🌐 वेबसाइट का हिंदी version · ₹1,499',
      'fineprint': 'डेमो पसंद आने के बाद UPI या bank transfer से payment। Domain <em>आपके</em> नाम पर रजिस्टर होता है — सब कुछ आपका। Renewal में hosting, backup, security updates और छोटे बदलाव शामिल हैं।',

      /* work */
      'sec.work.eye': 'लाइव काम',
      'h2.work' : 'असली क्लिनिक। <span class="hl">खोलकर देखिए.</span>',
      'sub.work': 'असली practices, अभी live — <strong>खोलकर देखिए</strong>।',
      'work.note': 'आपकी साइट भी ऐसे ही बनेगी — आपके डॉक्टर, आपकी फ़ोटो।',

      /* about */
      'sec.about.eye': 'मेरे बारे में',
      'h2.about': 'मैं <span class="hl">एक इंजीनियर</span> हूँ। कोई agency नहीं.',
      'about.p1': '<strong class="mark">IIT Kanpur</strong>, 2024। बड़े corporate सिस्टम चलाता हूँ — वही standard आपकी वेबसाइट में: <strong>तेज़, भरोसेमंद, backup के साथ.</strong>',
      'about.p2': 'क्लिनिक ही क्यों? बीस डॉक्टरों वाले हॉस्पिटल बिना वेबसाइट, रिसेप्शन रजिस्टरों में डूबी। <strong>ईमानदार दाम पर fixable</strong> — इसलिए यही करता हूँ। <a href="details.html#about">पूरी कहानी →</a>',
      'about.p3': 'Hyderabad में, क्लिनिक <strong>पूरे भारत में</strong>। जो बनाता है, उसी से बात होती है।',
      'about.li': 'LinkedIn&nbsp;↗',
      'about.how': 'काम कैसे होता है',
      'step.1a': 'बात करते हैं — 15 मिनट',
      'step.1b': 'WhatsApp या कॉल। आप क्लिनिक के बारे में बताइए, मैं दाम बता दूँगा। बस।',
      'step.2a': 'पहले आपकी डेमो बनाता हूँ',
      'step.2b': 'आप अपने क्लिनिक की असली, चलती हुई वेबसाइट देखते हैं — PDF mockup नहीं — पैसा देने से पहले।',
      'step.3a': 'दो बार बदलाव',
      'step.3b': 'आप बताइए क्या ठीक करना है, मैं कर दूँगा। कोई बहस नहीं, कोई form नहीं।',
      'step.4a': 'साइट live हो जाती है',
      'step.4b': 'आपके अपने domain पर, आपके नाम से। हर login आपको सौंपता हूँ — और OPD सॉफ़्टवेयर की training रिसेप्शन को देता हूँ।',

      /* proof */
      'sec.proof.eye': 'जाँच लीजिए',
      'h2.proof': 'मेरी बात पर मत जाइए। <span class="hl">खुद जाँचिए.</span>',
      'sub.proof': 'जाँचने के चार तरीके — <strong>एक रुपया देने से पहले</strong>।',
      'proof.1.h': 'मेरा LinkedIn public है',
      'proof.1.p': 'नाम, फ़ोटो, <strong>IIT Kanpur B.Tech</strong> — 30 सेकंड में जाँचिए।',
      'proof.2.h': 'क्लाइंट क्लिनिक live हैं',
      'proof.2.p': 'Bareilly और Agra की क्लिनिक <strong>आज</strong> मेरे काम पर चल रही हैं।',
      'proof.3.h': 'आज ही कॉल कीजिए',
      'proof.3.p': 'असली नंबर, असली इंसान। कुछ भी technical पूछिए।',
      'proof.4.h': 'पैसे से पहले डेमो',
      'proof.4.p': 'पहले <strong>अपनी चलती हुई वेबसाइट</strong> देखिए। फिर फ़ैसला कीजिए।',

      /* faq + cta */
      'sec.faq.eye': 'सवाल',
      'h2.faq': 'तीन सवाल जो <span class="hl">हर doctor पूछता है</span>.',
      'faq.7a': 'जी — मैं <strong>पूरे भारत</strong> के क्लिनिक के साथ काम करता हूँ। सब कुछ WhatsApp, email और कॉल पर होता है। मेरे अभी के ज़्यादातर क्लाइंट उन शहरों में हैं जहाँ मैं कभी गया नहीं — नतीजे में कोई फ़र्क नहीं पड़ता।',
      'cta.h2': 'क्लिनिक का <span class="hl-light">नाम भेजिए</span>। डेमो पाइए.',
      'cta.body': 'एक मैसेज। मिलेगा — <strong>चलती हुई डेमो</strong>, पक्का दाम, timeline। आमतौर पर उसी दिन।',
      'cta.prefer': 'Email बेहतर लगे?',
      'foot.role': 'क्लिनिक के लिए वेबसाइट और सॉफ़्टवेयर, भारत।',

      /* journey milestones */
      'mile.1': 'समस्या', 'mile.2': 'समाधान', 'mile.3': 'प्लान', 'mile.4': 'सबूत', 'mile.5': 'शुरुआत',
      'pain.loss': 'एहसास की जगह आँकड़ा चाहिए? <a href="#calc"><strong>हिसाब लगाइए — no-show से कितना नुकसान हो रहा है ↓</strong></a>',

      /* stat strip */
      'st.1': 'क्लिनिक व हॉस्पिटल साइटें बनाईं',
      'st.2': 'UP के शहर मैप किए',
      'st.3': 'क्लिनिक मेरे OPD सॉफ़्टवेयर पर live',
      'st.4': 'mental-health leads पर रिसर्च',

      /* quiz */
      'sec.quiz.eye': '60 सेकंड की जाँच',
      'h2.quiz': 'आपका <span class="hl">Clinic Growth Score</span> कितना है?',
      'sub.quiz': '7 tap। कोई email नहीं। सीधा-सच्चा score।',
      'qz.unlock.h': '🎁 अपनी 7-point Clinic Growth Checklist खोलिए',
      'qz.unlock.p': 'आपके जवाबों के हिसाब से बनी practical to-do list — मुफ़्त, इसी पेज पर, अभी।',
      'qz.unlock.btn': 'मेरी checklist दिखाओ',
      'qz.unlock.priv': 'सिर्फ़ checklist aur (चाहें toh) free audit bhejne ke liye. Spam kabhi nahi.',
      'qz.retake': '↺ दोबारा जाँच करें',

      /* calculator */
      'sec.calc.eye': 'हिसाब कीजिए',
      'h2.calc': 'जो book करके <span class="hl">नहीं आते</span> — खर्च कितना?',
      'sub.calc': 'आपके आँकड़े, मोटा अनुमान — कहीं कुछ नहीं भेजा जाता।',
      'calc.lost': 'हर महीने का नुकसान',
      'calc.year': 'यानी साल भर में',
      'calc.half': 'Reminder आधा भी बचा लें तो*',
      'calc.cta': '🟢 पूछिए — यह कैसे रुकेगा',
      'calc.note': '*सिर्फ़ अनुमान — आपके आँकड़ों पर आधारित, कोई guarantee नहीं।',

      /* sticky bar */
      'mcta.call': 'कॉल',
      'mcta.audit': 'फ़्री 60-sec जाँच',

      'seemore': 'पूरी जानकारी चाहिए? सब यहाँ है →',

      /* v14: visual home + shared pages */
      'nav.home': 'होम',
      'pain.you': 'आप', 'pain.comp': 'Competitor',
      'pain.loss2': 'देखिए — इसका खर्च कितना है ↓',
      'svc.1.cap': '🌐 आपका क्लिनिक। आपकी timing। WhatsApp पर booking. <a href="specialties.html">देखें →</a>',
      'svc.2.cap': '🖥️ Patient खोजिए। Visit जोड़िए। पर्चा print कीजिए. <a href="opd-software.html">देखें →</a>',
      'svc.3.cap': '🗺️ पास में खोजने वाले मरीज़ों को दिखिए. <a href="google-maps.html">देखें →</a>',
      'svc.4.cap': '💬 Booking आपके phone पर। Reminder patient को. <a href="whatsapp-booking.html">देखें →</a>',
      'nmcline': '🛡️ NMC नियमों के अनुसार — आपका registration सुरक्षित →',
      'faq.1': 'Practo पर आपके बगल में competitor दिखता है। अपनी वेबसाइट पर सिर्फ़ आप — और patient सीधे आपके WhatsApp पर।',
      'faq.2': 'हाँ। कोई testimonial नहीं, कोई "best doctor" नहीं, कोई discount नहीं। सिर्फ़ qualification, timing, services, fees. <a href="nmc-rules.html">पूरे नियम →</a>',
      'faq.3': 'कोई office नहीं, कोई sales team नहीं। एक engineer बनाता है। इसीलिए सस्ता है।',
      'faq.more': 'सारे सवाल-जवाब →',
      'price.more': 'पूरी तुलना और add-ons →',
      'verify.link': 'पहले मुझे जाँचिए →',
      'ba.before': 'पहले: रजिस्टर', 'ba.after': 'अब: कोई भी patient 2 सेकंड में',
      'ba.b1': '📒 रजिस्टर', 'ba.b2': '🖥️ Screen',
      'calc.leak': 'fees बह रही है…',
      't1a': 'वेबसाइट + WhatsApp booking', 't1b': 'Google Maps ठीक से set', 't1c': 'आपकी timing, फ़ोटो, सेवाएँ',
      't2a': 'Starter का सब कुछ', 't2b': 'OPD सॉफ़्टवेयर — record + printed ℞', 't2c': 'Reception के लिए review QR',
      't3a': 'Growth का सब कुछ', 't3b': 'Department पेज + doctor profile', 't3c': 'पूरा content मैं लिखूँगा',
      'work.1.p': 'बच्चों की क्लिनिक। वेबसाइट + OPD सॉफ़्टवेयर, रोज़ाना use.',
      'work.2.p': 'आँखों की क्लिनिक। वेबसाइट + eye-OPD सॉफ़्टवेयर.',
      'work.3.p': '₹34,999 वाला पैकेज, live. Department, booking, packages.',
      'tap.preview': 'Live साइट देखें', 'tap.preview2': 'Live साइट देखें', 'tap.preview3': 'Live डेमो देखें',

      /* chat widget */
      'chat.status': 'आमतौर पर कुछ घंटों में जवाब',
      'chat.greet' : 'नमस्ते! 👋 मैं अनुपम — <strong>IIT Kanpur</strong> का इंजीनियर। पूरे भारत के क्लिनिक के लिए वेबसाइट और OPD सॉफ़्टवेयर बनाता हूँ।',
      'chat.prompt': 'बताइए, क्या मदद करूँ?'
    },

    /* Untagged leaf strings, matched on exact English text. */
    TEXT: {
      'Doctor profiles & department pages': 'डॉक्टर प्रोफ़ाइल और department पेज',
      'WhatsApp & click-to-call booking': 'WhatsApp और click-to-call booking',
      'Google Maps, timings, gallery': 'Google Maps, समय, गैलरी',
      'Loads fast on 4G phones': '4G फ़ोन पर भी फटाफट खुले',
      'Patient records & visit history': 'मरीज़ों का रिकॉर्ड और visit history',
      'Printed ℞ prescriptions': 'प्रिंटेड पर्चे',
      'One-click daily backup': 'एक-क्लिक daily backup',
      'Works offline at the desk': 'desk पर offline भी चले',
      'Google Business Profile optimization': 'Google Business Profile optimization',
      'Local SEO for your specialty + city': 'आपकी specialty + शहर का local SEO',
      'Review collection link & QR': 'Review link और QR code',
      'Search Console tracking': 'Search Console tracking',
      'Booking form → your WhatsApp': 'Booking form → सीधे आपका WhatsApp',
      'Department-wise booking': 'Department के हिसाब से booking',
      'Appointment reminders (add-on)': 'Appointment reminder (add-on)',
      'No app for patients to install': 'मरीज़ को कोई app install नहीं करना',
      '🤰 Gynaecology & maternity': '🤰 Gynae और maternity',
      '🦷 Dental': '🦷 Dental',
      '👁️ Eye care': '👁️ आँखों का इलाज',
      '🧸 Pediatrics': '🧸 बच्चों के डॉक्टर',
      '💆 Skin & hair': '💆 Skin और hair',
      '🦴 Orthopaedics': '🦴 हड्डी रोग',
      '🏥 Multi-specialty hospitals': '🏥 Multi-specialty हॉस्पिटल',
      '🧠 Psychiatry & mental health': '🧠 Psychiatry और mental health',
      'Clinic website with your services & timings': 'आपकी सेवाओं और समय के साथ क्लिनिक वेबसाइट',
      'WhatsApp + click-to-call booking': 'WhatsApp + click-to-call booking',
      'Google Maps & photo gallery': 'Google Maps और फ़ोटो गैलरी',
      'Google Business Profile basics': 'Google Business Profile की बुनियादी setting',
      'Everything in Clinic Starter': 'Clinic Starter का सब कुछ',
      'OPD software: records, history, printed ℞': 'OPD सॉफ़्टवेयर: रिकॉर्ड, history, प्रिंटेड पर्चा',
      'Review collection link & QR code': 'Review link और QR code',
      'Everything in Clinic Growth': 'Clinic Growth का सब कुछ',
      'Department pages with details & booking': 'हर department का पेज — जानकारी और booking के साथ',
      'Doctor profiles & health check-up packages': 'डॉक्टर प्रोफ़ाइल और health check-up पैकेज',
      "Your hospital's real photos on-site": 'आपके हॉस्पिटल की असली फ़ोटो साइट पर',
      'All content written for you — NMC-compliant': 'पूरा content मैं लिखूँगा — NMC नियमों के अनुसार',
      '1 year of support & updates': '1 साल का support और updates',
      'I run a clinic — show me a demo': 'मेरा क्लिनिक है — डेमो दिखाइए',
      'Tell me about the OPD software': 'OPD सॉफ़्टवेयर के बारे में बताइए',
      'How much will it cost?': 'कितना खर्च आएगा?',
      "I'm a mental-health professional": 'मैं mental-health professional हूँ',
      'Chat now →': 'अभी बात करें →',
      '📞 Call instead': '📞 कॉल करें',
      '✉️ Email me': '✉️ Email करें',
      'Built for every kind of practice:': 'हर तरह की practice के लिए:',
      'Open live client site ↗': 'Live क्लाइंट साइट खोलें ↗',
      'Open live demo ↗': 'Live डेमो खोलें ↗',
      '✓ Live client project': '✓ Live क्लाइंट प्रोजेक्ट',
      'Visit site ↗': 'साइट देखें ↗',
      'View demo ↗': 'डेमो देखें ↗',
      'See the client projects ↑': 'क्लाइंट प्रोजेक्ट देखें ↑',
      'How it works ↑': 'कैसे काम करता है ↑',
      'LinkedIn': 'LinkedIn',
      'Email': 'Email',
      "I don't have content or photos. Is that a problem?": 'मेरे पास content या फ़ोटो नहीं हैं। कोई दिक्कत?',
      "I'm already on Practo/Justdial. Why do I need my own website?": 'मैं पहले से Practo/Justdial पर हूँ। अपनी वेबसाइट क्यों चाहिए?',
      'Can my receptionist really use the OPD software?': 'क्या मेरी रिसेप्शनिस्ट सच में OPD सॉफ़्टवेयर चला पाएगी?',
      'Is this allowed under medical advertising rules?': 'क्या यह medical advertising के नियमों में allowed है?',
      'Why are you cheaper than agencies quoting ₹80,000?': '₹80,000 माँगने वाली agencies से आप सस्ते क्यों हैं?',
      'Who owns the domain and the data?': 'Domain और data किसके नाम पर रहेगा?',
      'How do payments work?': 'Payment कैसे होता है?',
      "My clinic isn't in UP or Hyderabad. Can you still help?": 'मेरा क्लिनिक UP या Hyderabad में नहीं है। फिर भी बनेगा?'
    }
  }
};
