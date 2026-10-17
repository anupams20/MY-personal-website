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
      'hero.pill2'  : 'सिर्फ़ healthcare वेबसाइटें',
      'hero.h1'     : 'आपके मरीज़ क्लिनिक आने से पहले <span class="hl">Google</span> देखते हैं। वहाँ <span class="hl">आप</span> दिखने चाहिए.',
      'hero.lede'   : 'मैं अनुपम हूँ — एक इंजीनियर जो क्लिनिक को ऑनलाइन बढ़ाने का <strong>पूरा सिस्टम</strong> बनाता है: प्रोफ़ेशनल वेबसाइट, रिसेप्शन के लिए OPD सॉफ़्टवेयर, <strong>WhatsApp</strong> पर appointment booking, और Google पर रैंक करती प्रोफ़ाइल। दाम पहले से तय, <strong class="mark">₹4,999</strong> से शुरू — और <strong>वेबसाइट देखकर ही पैसा दीजिए</strong>.',
      'hero.cta1'   : 'WhatsApp करें — फ़्री क्लिनिक डेमो',
      'hero.cta2'   : 'पैकेज और दाम देखें',
      'hero.note'   : '15 मिनट की फ़्री कॉल। एक रुपया खर्च करने से पहले मैं आपके क्लिनिक की चलती-फिरती डेमो वेबसाइट दिखाऊँगा।',
      'hero.replies': 'कुछ ही घंटों में जवाब',

      /* credibility strip */
      'cred.1a': '600+',        'cred.1b': 'क्लिनिक व हॉस्पिटल साइटें बनाईं',
      'cred.2a': '2 क्लिनिक',   'cred.2b': 'रोज़ मेरे OPD सॉफ़्टवेयर पर चलते हैं',
      'cred.3a': '16 शहर',      'cred.3b': 'पूरे UP में मैप किए',
      'cred.4a': 'IIT Kanpur',  'cred.4b': 'B.Tech, 2024',
      'cred.5a': 'दाम फ़िक्स',   'cred.5b': 'शुरू करने से पहले तय',

      /* pain section */
      'sec.pain.eye': 'जाना-पहचाना लगेगा?',
      'h2.pain'     : 'चार दिक्कतें जो चुपचाप <span class="hl">क्लिनिक के मरीज़ कम</span> करती हैं.',
      'sub.pain'    : 'मैंने UP के <strong>हज़ारों क्लिनिक</strong> देखे और मैप किए हैं। हर जगह यही चार दिक्कतें मिलती हैं — और चारों ठीक हो सकती हैं।',
      'pain.1.h'    : 'मरीज़ आपको ढूँढ नहीं पाते',
      'pain.1.p'    : 'कोई रात में "doctor near me" खोजता है। आपका competitor फ़ोटो, reviews और वेबसाइट के साथ दिखता है। आप नक्शे पर एक खाली pin हैं — या हैं ही नहीं।',
      'pain.2.h'    : 'छूटी कॉल = गया मरीज़',
      'pain.2.p'    : 'OPD के समय फ़ोन कोई नहीं उठा पाता। मरीज़ दोबारा कॉल नहीं करता — list में अगला क्लिनिक बुक कर लेता है। आपको पता भी नहीं चलता।',
      'pain.3.h'    : 'सब कुछ रजिस्टरों में',
      'pain.3.p'    : 'मरीज़ों का रिकॉर्ड कॉपियों में, पर्चे दो-दो बार लिखे जाते हैं, पुराना visit ढूँढना नामुमकिन। आपकी रिसेप्शन मेहनत बहुत करती है — उन कामों पर जो सॉफ़्टवेयर सालों पहले हल कर चुका।',
      'pain.4.h'    : 'आपकी साख ऑनलाइन काम नहीं कर रही',
      'pain.4.p'    : 'सालों के खुश मरीज़, पर Google पर सिर्फ़ 12 reviews। नया मरीज़ वही देखता है जो ऑनलाइन दिखता है — और अभी वहाँ कुछ खास दिखता नहीं।',

      /* services */
      'sec.services.eye': 'क्या मिलेगा',
      'h2.services' : 'क्लिनिक को जो चाहिए, सब। <span class="hl">फ़ालतू कुछ नहीं.</span>',
      'sub.services': 'मैं सिर्फ़ healthcare का काम करता हूँ। इसलिए हर फ़ीचर इसलिए है क्योंकि <strong>किसी असली क्लिनिक को उसकी ज़रूरत पड़ी</strong> — इसलिए नहीं कि agency को bill बढ़ाना था।',
      'svc.1.h': 'क्लिनिक वेबसाइट',
      'svc.1.p': 'तेज़, mobile-first और मरीज़ों के लिए लिखी हुई: आपके डॉक्टर, department, समय, फ़ोटो — और <strong>हर जगह booking के बटन</strong>.',
      'svc.2.h': 'OPD सॉफ़्टवेयर',
      'svc.2.p': 'रजिस्टर की छुट्टी: मरीज़ का रिकॉर्ड, पुराने visit और <strong>प्रिंटेड पर्चा</strong> — इतना आसान कि रिसेप्शन एक दोपहर में सीख जाए।',
      'svc.3.h': 'Google से मरीज़',
      'svc.3.p': 'आपकी <strong>Google Business Profile</strong> ठीक से बनी हुई — फ़ोटो, सेवाएँ, समय, review link — और SEO ताकि आपकी specialty खोजने वाले को आप मिलें।',
      'svc.4.h': 'WhatsApp पर booking और reminder',
      'svc.4.p': 'Appointment की request मरीज़ के नाम, नंबर और department के साथ <strong>सीधे आपके WhatsApp</strong> पर आती है। Reminder no-show घटाने में मदद करते हैं।',
      'spec.h'  : 'हर तरह की practice के लिए:',
      'spec.note': '<strong>मानसिक स्वास्थ्य (psychiatrist/psychologist) के लिए:</strong> privacy-first वेबसाइटें — discreet appointment request, कोई patient testimonial नहीं (medical ethics के अनुसार), और teleconsultation link उन मरीज़ों के लिए जो क्लिनिक आने से झिझकते हैं। Stigma की वजह से लोग किसी से पूछने से पहले ऑनलाइन खोजते हैं — आपकी वेबसाइट अक्सर उनका पहला कदम होती है।',

      /* pricing */
      'sec.pricing.eye': 'पैकेज',
      'h2.pricing'  : 'दाम फ़िक्स। <span class="hl">खुलेआम लिखे हुए.</span>',
      'sub.pricing' : 'मैसेज करने से <strong>पहले</strong> ही आपको दाम पता होगा। कोई "requirements पर depend करता है" नहीं, कोई बीच में दुगना होता quote नहीं।',
      'ptrust.1': 'पैसा देने से पहले चलती हुई डेमो देखिए',
      'ptrust.2': 'दाम पहले से तय, बाद में नहीं बदलता',
      'ptrust.3': 'Domain और code आपके नाम पर',
      'ptrust.4': 'Renewal आपकी मर्ज़ी, कभी ज़बरदस्ती नहीं',
      'tier.1.h': 'Clinic Starter',
      'tier.1.for': 'अकेले practice करने वाले डॉक्टर के लिए — ऑनलाइन ठीक से मौजूद होने का पहला कदम।',
      'tier.1.note': 'एक बार का दाम · पहले साल की hosting शामिल',
      'tier.1.out': '<strong>मरीज़ आपको ढूँढें और WhatsApp पर book करें.</strong>',
      'tier.1.live': '<strong>3–5 दिन में live</strong>',
      'tier.pop': 'सबसे ज़्यादा चुना गया',
      'tier.2.h': 'Clinic Growth',
      'tier.2.for': 'उस क्लिनिक के लिए जिसे Google से नए मरीज़ भी चाहिए और आधुनिक रिसेप्शन भी।',
      'tier.2.note': 'पहला साल · फिर ₹4,999/साल',
      'tier.2.out': '<strong>"near me" खोज में दिखिए — और OPD बिना रजिस्टर चलाइए.</strong>',
      'tier.2.live': '<strong>7–10 दिन में live</strong>',
      'tier.3.h': 'Hospital Pro',
      'tier.3.for': 'कई डॉक्टरों वाले क्लिनिक, nursing home और हॉस्पिटल के लिए।',
      'tier.3.note': 'एक बार का दाम · दूसरे साल से ₹6,999/साल',
      'tier.3.out': '<strong>ऑनलाइन उतने ही professional दिखिए जितनी बड़ी hospital chains.</strong>',
      'tier.3.live': '<strong>10–14 दिन में live</strong>',
      'tier.enq': 'पूछताछ करें', 'tier.enq2': 'पूछताछ करें', 'tier.enq3': 'पूछताछ करें',
      'tiers.guarantee': '<strong>हर पैकेज में: पैसा देने से पहले आप अपने ही क्लिनिक की चलती हुई डेमो वेबसाइट देखते हैं.</strong>',
      'addons.eye': 'ज़रूरत पड़े तो add-on',
      'addon.1': '🎨 Poster pack — हर महीने 8 त्योहार/health-day पोस्टर · ₹999/महीना',
      'addon.2': '⏰ WhatsApp appointment reminder · ₹1,499 setup',
      'addon.3': '💻 Teleconsultation setup (video link + payment) · ₹1,999',
      'addon.4': '🌐 वेबसाइट का हिंदी version · ₹1,499',
      'fineprint': 'डेमो पसंद आने के बाद UPI या bank transfer से payment। Domain <em>आपके</em> नाम पर रजिस्टर होता है — सब कुछ आपका। Renewal में hosting, backup, security updates और छोटे बदलाव शामिल हैं।',

      /* work */
      'sec.work.eye': 'लाइव काम',
      'h2.work' : 'असली क्लिनिक। <span class="hl">अभी live.</span>',
      'sub.work': 'Mockup नहीं — ये <strong>असली practices हैं जो मेरे काम पर चल रही हैं</strong>। खोलिए, scroll कीजिए, book करके देखिए।',
      'work.note': 'पहली दो <strong>असली क्लिनिक हैं, अभी live</strong> — खुद खोलकर देखिए। आपकी साइट भी इसी तरह बनेगी — आपके डॉक्टरों, फ़ोटो और जानकारी के साथ।',

      /* about */
      'sec.about.eye': 'मेरे बारे में',
      'h2.about': 'मैं <span class="hl">एक इंजीनियर</span> हूँ। कोई agency नहीं.',
      'about.p1': 'मैंने 2024 में <strong class="mark">IIT Kanpur</strong> से B.Tech किया और तब से बड़े corporate सिस्टम चलाता आया हूँ — जिन्हें रोज़ हज़ारों लोग इस्तेमाल करते हैं। वही standard क्लिनिक की वेबसाइट में लाता हूँ: <strong>तेज़, भरोसेमंद, backup के साथ.</strong>',
      'about.p2': 'क्लिनिक ही क्यों? क्योंकि मैंने यह कमी पास से देखी है। बीस डॉक्टरों वाले हॉस्पिटल बिना वेबसाइट के। हज़ार मरीज़ों का हिसाब कागज़ के रजिस्टरों में। काबिल डॉक्टर Google पर गायब, जबकि औसत chain पहले नंबर पर। <strong>अच्छी engineering और ईमानदार दाम से यह कमी भरी जा सकती है</strong> — इसलिए अब मैं यही करता हूँ।',
      'about.p3': 'मैं Hyderabad में रहता हूँ और <strong>पूरे भारत</strong> के क्लिनिक के साथ काम करता हूँ — ज़्यादातर काम WhatsApp और कॉल पर होता है। आप जिसे मैसेज करते हैं, वही आपकी वेबसाइट और सॉफ़्टवेयर बनाता है। कोई salesperson नहीं, कोई intern को handover नहीं।',
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
      'sub.proof': 'वेबसाइट पर "IIT engineer" कोई भी लिख सकता है। ये चार तरीके हैं यह जाँचने के कि मैं असली इंसान हूँ और काम असली है — <strong>एक रुपया देने से पहले</strong>।',
      'proof.1.h': 'मेरा LinkedIn public है',
      'proof.1.p': 'नाम, फ़ोटो, <strong>IIT Kanpur से B.Tech</strong>, काम का इतिहास — 30 सेकंड में जाँच लीजिए।',
      'proof.2.h': 'क्लाइंट क्लिनिक live हैं',
      'proof.2.p': 'अभी खोलकर देखिए — Bareilly की एक children क्लिनिक और Agra की एक eye क्लिनिक <strong>आज</strong> मेरे काम पर चल रही हैं।',
      'proof.3.h': 'आज ही कॉल कीजिए',
      'proof.3.p': 'असली नंबर, असली इंसान उठाता है। कोई भी technical सवाल पूछिए — <strong>नकली पकड़ने का सबसे तेज़ तरीका यही है</strong>।',
      'proof.4.h': 'पैसे से पहले डेमो',
      'proof.4.p': 'आप <strong>अपने क्लिनिक की चलती हुई वेबसाइट पहले देखते हैं</strong>। अगर मैं वह नहीं जो कह रहा हूँ, तो आपको पैसे जाने से पहले पता चल जाएगा।',

      /* faq + cta */
      'sec.faq.eye': 'सवाल',
      'h2.faq': 'जो <span class="hl">हर डॉक्टर पूछता है</span>.',
      'faq.7a': 'जी — मैं <strong>पूरे भारत</strong> के क्लिनिक के साथ काम करता हूँ। सब कुछ WhatsApp, email और कॉल पर होता है। मेरे अभी के ज़्यादातर क्लाइंट उन शहरों में हैं जहाँ मैं कभी गया नहीं — नतीजे में कोई फ़र्क नहीं पड़ता।',
      'cta.h2': 'अपने <span class="hl-light">क्लिनिक</span> के बारे में बताइए.',
      'cta.body': 'बस एक मैसेज: क्लिनिक का नाम और शहर। जवाब में मिलेगा — आपकी <strong>वेबसाइट की चलती हुई डेमो</strong>, पक्का दाम, और कितने दिन लगेंगे। आमतौर पर एक दिन के अंदर। काम का न हुआ तो वह भी साफ़ बता दूँगा।',
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
      'sub.quiz': '7 छोटे सवाल। score देखने के लिए email नहीं चाहिए — और आपके क्लिनिक की ऑनलाइन हालत की सीधी-सच्ची तस्वीर।',
      'qz.unlock.h': '🎁 अपनी 7-point Clinic Growth Checklist खोलिए',
      'qz.unlock.p': 'आपके जवाबों के हिसाब से बनी practical to-do list — मुफ़्त, इसी पेज पर, अभी।',
      'qz.unlock.btn': 'मेरी checklist दिखाओ',
      'qz.unlock.priv': 'सिर्फ़ checklist aur (चाहें toh) free audit bhejne ke liye. Spam kabhi nahi.',
      'qz.retake': '↺ दोबारा जाँच करें',

      /* calculator */
      'sec.calc.eye': 'हिसाब कीजिए',
      'h2.calc': 'No-show आपके क्लिनिक को <span class="hl">कितना महँगा पड़ता है</span>?',
      'sub.calc': 'अपने आँकड़ों से मोटा अनुमान — slider चलाइए। कुछ भी कहीं नहीं भेजा जाता।',
      'calc.lost': 'हर महीने का नुकसान',
      'calc.year': 'यानी साल भर में',
      'calc.half': 'अगर WhatsApp reminder आधा भी बचा लें*',
      'calc.cta': '🟢 पूछिए — यह नुकसान कैसे रुकेगा',
      'calc.note': '*सिर्फ़ अनुमान — आपके आँकड़ों पर आधारित, कोई guarantee नहीं।',

      /* sticky bar */
      'mcta.call': 'कॉल',
      'mcta.audit': 'फ़्री 60-sec जाँच',

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
