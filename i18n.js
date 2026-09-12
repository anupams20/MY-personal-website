/* ============================================================
   Hindi translations.

   TWO dictionaries, because the page has two kinds of string:

   KEYS  — elements carrying data-i18n / data-i18n-html in the HTML.
           Used where the text contains inline markup (<strong>, <span>)
           that has to survive translation.

   TEXT  — plain-text elements matched by their exact English content.
           No HTML changes needed: add a line here and it translates.
           Anything missing simply stays in English, which is fine.

   The register is deliberately everyday business Hindi — the way people
   actually speak in a shop — not formal शुद्ध हिंदी. Words like वेबसाइट,
   बिज़नेस and पेज stay in Devanagari-spelled English because that is what
   a real customer says out loud. Translating them "properly" would read
   like a government form.
   ============================================================ */

window.I18N = {
  hi: {

    KEYS: {
      /* nav */
      'nav.services': 'सेवाएँ',
      'nav.pricing' : 'कीमत',
      'nav.work'    : 'काम',
      'nav.about'   : 'परिचय',
      'nav.faq'     : 'सवाल-जवाब',
      'nav.quote'   : 'फ्री कोटेशन लें',

      /* hero */
      'hero.pill1'  : 'बी.टेक, IIT&nbsp;कानपुर',
      'hero.pill2'  : 'नए प्रोजेक्ट के लिए उपलब्ध',
      'hero.h1'     : 'भारत में <span class="hl">कहीं भी</span> — आपके बिज़नेस की वेबसाइट, बनाई एक <span class="hl">IIT कानपुर इंजीनियर</span> ने।',
      'hero.lede'   : 'मैं अनुपम हूँ। दिन में मैं प्रोडक्शन सॉफ़्टवेयर बनाता और चलाता हूँ — वही सिस्टम जिन पर भारत का एक बड़ा बैंक रोज़ चलता है। वेबसाइट बनाना मुझे <strong>सच में पसंद है</strong>, इसीलिए आपको मिलती है एक तेज़, मोबाइल-फ़र्स्ट वेबसाइट जो सच में ग्राहक लाती है: <strong>एक हफ़्ते में लाइव</strong>, <strong class="mark">₹10,000</strong> से शुरू, और कीमत काम शुरू होने से पहले तय।',
      'hero.cta1'   : 'WhatsApp पर मैसेज करें',
      'hero.cta2'   : 'कीमत और पैकेज देखें',
      'hero.note'   : 'फ्री 15 मिनट की बात। कोई दबाव नहीं, कोई मुश्किल शब्द नहीं, कोई "प्रपोज़ल भेजते हैं" नहीं।',
      'hero.replies': 'कुछ ही घंटों में जवाब',

      /* credentials strip */
      'cred.1a': 'IIT कानपुर',      'cred.1b': 'बी.टेक, 2024',
      'cred.2a': '2+ साल',          'cred.2b': 'प्रोडक्शन इंजीनियरिंग',
      'cred.3a': 'पूरे भारत में',    'cred.3b': 'रिमोट · हैदराबाद से',
      'cred.4a': '7 दिन',           'cred.4b': 'आम डिलीवरी समय',
      'cred.5a': 'तय कीमत',         'cred.5b': 'शुरू करने से पहले तय',

      /* section headings */
      'sec.services.eye': 'मैं क्या बनाता हूँ',
      'sec.pricing.eye' : 'कीमत',
      'sec.work.eye'    : 'हाल का काम',
      'sec.about.eye'   : 'मेरे बारे में',
      'sec.faq.eye'     : 'सवाल',
      'h2.services': 'तीन चीज़ें, <span class="hl">पूरे मन से</span>।',
      'h2.pricing' : 'तय कीमत। <span class="hl">खुलेआम लिखी हुई।</span>',
      'h2.work'    : 'नमूने के <span class="hl">काम</span>।',
      'h2.about'   : 'मैं <span class="hl">अकेला इंजीनियर</span> हूँ। कोई एजेंसी नहीं।',
      'h2.faq'     : 'जो <span class="hl">हर कोई पूछता है</span>।',
      'cta.h2'     : 'अपने <span class="hl-light">बिज़नेस</span> के बारे में बताइए।',
      'sub.services': 'मैं सब कुछ नहीं करता। मैं वो करता हूँ जिसकी बिज़नेस को असल में ज़रूरत है — <strong>लोगों तक पहुँचना</strong> और <strong>कॉल आना</strong>।',
      'sub.pricing' : 'कीमत आपको फ़ोन करने से <strong>पहले</strong> पता होगी। कोई "ज़रूरत के हिसाब से" नहीं, कोई बीच में दोगुना होने वाला कोटेशन नहीं।',
      'sub.work'    : 'नमूने की वेबसाइटें, जिनसे पता चले कि हर पैकेज में असल में क्या मिलता है।',

      /* services */
      'svc.1.h': 'बिज़नेस वेबसाइट',
      'svc.1.p': 'साफ़-सुथरी, तेज़ वेबसाइट जो फ़ोन पर तुरंत खुले। आपकी सेवाएँ, आपकी फ़ोटो, मैप पर आपकी लोकेशन, और एक WhatsApp बटन जो ग्राहक को <strong>सीधे आपकी चैट में</strong> ले आए।',
      'svc.2.h': 'ऑनलाइन दुकान',
      'svc.2.p': 'Razorpay से UPI, कार्ड और नेट बैंकिंग के ज़रिए अपना सामान ऑनलाइन बेचिए। ऑर्डर और स्टॉक खुद संभालिए — हर बार कीमत बदलने पर मुझे फ़ोन करने की ज़रूरत नहीं।',
      'svc.3.h': 'Google पर दिखिए',
      'svc.3.p': 'जो वेबसाइट किसी को मिलती ही नहीं, वो बंद कमरे में लगा पोस्टर है। मैं आपकी <strong>Google Business Profile</strong> ठीक से बनाता हूँ ताकि आस-पास कोई खोजे तो आप मैप पर दिखें।',

      /* about */
      'about.p1': 'मैंने 2024 में <strong class="mark">IIT कानपुर</strong> से पढ़ाई पूरी की, और तब से असली सॉफ़्टवेयर चलाने का काम कर रहा हूँ — पहले BeeHyv Software Solutions में DevOps इंजीनियर के तौर पर, और अब भारत के सबसे बड़े प्राइवेट बैंकों में से एक में, जहाँ मैं वो लोन सिस्टम चलाता और संभालता हूँ जिन्हें हज़ारों लोग रोज़ इस्तेमाल करते हैं।',
      'about.p2': 'आपकी बिज़नेस वेबसाइट बनाने वाले के लिए ये थोड़ा अलग बैकग्राउंड है — और यही वजह है कि आपको मुझे चुनना चाहिए। बैंकिंग में सिस्टम एक घंटे भी धीमा या बंद हो जाए तो बड़ी बात होती है। वही स्तर मैं पाँच पेज की वेबसाइट पर भी लगाता हूँ: <strong>तेज़ चलती है, हर फ़ोन पर चलती है, उसका बैकअप होता है, और वो बंद नहीं पड़ती।</strong>',
      'about.p3': 'मैं हैदराबाद में हूँ और <strong>पूरे भारत</strong> के क्लाइंट के साथ काम करता हूँ — ज़्यादातर काम WhatsApp और कॉल पर होता है, तो आपका शहर कोई फ़र्क नहीं डालता। और जब आप मैसेज करेंगे, तो सीधे उसी इंसान से बात होगी जो आपकी वेबसाइट बनाएगा। न कोई सेल्समैन, न कोई अकाउंट मैनेजर, न पैसे लेने के बाद किसी इंटर्न को काम सौंपना।',
      'about.how': 'काम कैसे होता है',
      'about.li' : 'LinkedIn&nbsp;↗',

      /* how it works */
      'step.1a': 'बात — 15 मिनट',
      'step.1b': 'WhatsApp या कॉल। आप अपने बिज़नेस के बारे में बताइए। मैं कीमत बता दूँगा। बस इतना।',
      'step.2a': 'मैं ड्राफ़्ट बनाता हूँ',
      'step.2b': 'कुछ ही दिनों में आपको असली, चलती हुई वेबसाइट दिखेगी — कोई PDF मॉकअप नहीं।',
      'step.3a': 'दो बार बदलाव',
      'step.3b': 'आप बताइए क्या ठीक करना है। मैं कर दूँगा। कोई बहस नहीं, कोई फ़ॉर्म नहीं।',
      'step.4a': 'वेबसाइट लाइव',
      'step.4b': 'आपके अपने डोमेन पर, आपके ही नाम से। हर लॉगिन आपको सौंप दूँगा।'
    },

    TEXT: {
      /* service card bullet points */
      'Mobile-first — most of your visitors are on 4G': 'मोबाइल पहले — ज़्यादातर लोग 4G पर आते हैं',
      'Click-to-call and WhatsApp enquiry': 'एक टैप में कॉल और WhatsApp पूछताछ',
      'Google Maps and business hours': 'Google Maps और खुलने का समय',
      'Photo gallery for your work': 'आपके काम की फ़ोटो गैलरी',
      'Payments via Razorpay (UPI included)': 'Razorpay से पेमेंट (UPI समेत)',
      'Inventory you can update yourself': 'स्टॉक आप खुद अपडेट कर सकते हैं',
      'Order notifications on WhatsApp': 'ऑर्डर की जानकारी WhatsApp पर',
      'Delivery and pickup options': 'डिलीवरी और पिकअप के विकल्प',
      'Google Business Profile setup': 'Google Business Profile बनाना',
      'On-page SEO for local search': 'लोकल सर्च के लिए SEO',
      'Review collection link for customers': 'ग्राहकों से रिव्यू लेने का लिंक',
      'Search Console and traffic tracking': 'Search Console और ट्रैफ़िक ट्रैकिंग',

      /* pricing */
      'Starter': 'शुरुआती',
      'For a shop, clinic or studio that needs to exist online.': 'उस दुकान, क्लिनिक या स्टूडियो के लिए जिसे ऑनलाइन दिखना है।',
      'Up to 5 pages': '5 पेज तक',
      'Mobile-first, fast loading': 'मोबाइल पहले, तेज़ लोडिंग',
      'WhatsApp + call buttons': 'WhatsApp और कॉल बटन',
      'Google Maps and contact form': 'Google Maps और संपर्क फ़ॉर्म',
      'Free domain + hosting setup': 'डोमेन और होस्टिंग सेटअप फ्री',
      'Live in 5–7 days': '5–7 दिन में लाइव',
      'Business': 'बिज़नेस',
      'For a business that wants enquiries from Google, not just a link to share.': 'उस बिज़नेस के लिए जिसे Google से ग्राहक चाहिए, सिर्फ़ शेयर करने का लिंक नहीं।',
      'Everything in Starter': 'शुरुआती वाला सब कुछ',
      'Up to 12 pages + blog': '12 पेज तक + ब्लॉग',
      'Custom design, not a template': 'आपके लिए बना डिज़ाइन, कोई टेम्पलेट नहीं',
      'Analytics and Search Console': 'Analytics और Search Console',
      'Live in 10–14 days': '10–14 दिन में लाइव',
      'Online store': 'ऑनलाइन दुकान',
      'For selling products online with real payments.': 'असली पेमेंट के साथ सामान ऑनलाइन बेचने के लिए।',
      'Everything in Business': 'बिज़नेस वाला सब कुछ',
      'Up to 50 products': '50 प्रोडक्ट तक',
      'Razorpay / UPI payments': 'Razorpay / UPI पेमेंट',
      'Order and inventory dashboard': 'ऑर्डर और स्टॉक का डैशबोर्ड',
      'Training so you can run it': 'ट्रेनिंग, ताकि आप खुद चला सकें',
      'Live in 3–4 weeks': '3–4 हफ़्ते में लाइव',
      'Most chosen': 'सबसे ज़्यादा चुना गया',
      'Enquire': 'पूछताछ करें',
      'Ask about it': 'इसके बारे में पूछें',
      'Care plan — ₹1,500/month (optional)': 'देखभाल प्लान — ₹1,500/महीना (वैकल्पिक)',
      'Hosting, daily backups, security updates, uptime monitoring and two content changes a month. Most clients take this so they never have to think about the site again.': 'होस्टिंग, रोज़ बैकअप, सिक्योरिटी अपडेट, वेबसाइट चालू है या नहीं इसकी निगरानी, और महीने में दो बार कंटेंट बदलना। ज़्यादातर क्लाइंट यही लेते हैं ताकि उन्हें वेबसाइट की चिंता ही न करनी पड़े।',
      '50% to start, 50% when the site goes live. GST not applicable. Domain and hosting are billed at actual cost (roughly ₹1,000–2,500/year) and registered in your name — you own everything.': '50% शुरू करते समय, 50% वेबसाइट लाइव होने पर। GST लागू नहीं। डोमेन और होस्टिंग का असली खर्च ही लगेगा (करीब ₹1,000–2,500/साल) और वो आपके ही नाम पर होंगे — सब कुछ आपका।',

      /* work */
      'Treatment pricing, doctor profiles, clinic timings and an appointment request form.': 'इलाज की कीमत, डॉक्टरों का परिचय, क्लिनिक का समय और अपॉइंटमेंट फ़ॉर्म।',
      'Interactive class timetable, coach profiles, three membership tiers and a free-trial CTA.': 'क्लास की टाइम-टेबल, कोच का परिचय, तीन मेंबरशिप प्लान और फ्री ट्रायल बटन।',
      'Product catalogue with a working cart, UPI/Razorpay checkout messaging and delivery info.': 'चलता-फिरता कार्ट, UPI/Razorpay चेकआउट और डिलीवरी की जानकारी के साथ प्रोडक्ट कैटलॉग।',
      'Starter — ₹10,000': 'शुरुआती — ₹10,000',
      'Business — ₹25,000': 'बिज़नेस — ₹25,000',
      'Online store — ₹45,000': 'ऑनलाइन दुकान — ₹45,000',
      'View site ↗': 'वेबसाइट देखें ↗',
      'Open live demo ↗': 'लाइव डेमो खोलें ↗',
      'These are demonstration sites built to show what each package includes — the businesses are illustrative, not clients. Your site would use your own name, photos and content.': 'ये सिर्फ़ नमूने की वेबसाइटें हैं, ये दिखाने के लिए कि हर पैकेज में क्या मिलता है — ये बिज़नेस असली क्लाइंट नहीं, सिर्फ़ उदाहरण हैं। आपकी वेबसाइट में आपका अपना नाम, फ़ोटो और जानकारी होगी।',

      /* about stats */
      '2+ yrs': '2+ साल',
      'Production engineering': 'प्रोडक्शन इंजीनियरिंग',
      'Microservices migrated to Kubernetes': 'माइक्रोसर्विस Kubernetes पर शिफ़्ट कीं',
      'All India': 'पूरे भारत में',
      'Clients anywhere, fully remote': 'कहीं भी क्लाइंट, पूरा रिमोट',
      '7 days': '7 दिन',
      'Typical turnaround': 'आम तौर पर लगने वाला समय',

      /* FAQ */
      'I don’t have any content or photos. Is that a problem?': 'मेरे पास कोई कंटेंट या फ़ोटो नहीं है। क्या दिक्कत होगी?',
      'I don\'t have any content or photos. Is that a problem?': 'मेरे पास कोई कंटेंट या फ़ोटो नहीं है। क्या दिक्कत होगी?',
      'No, and it’s the normal situation. I’ll write the text for you based on a short conversation about your business, and I can use good stock photography until you have your own. If you can send me 10 photos from your phone, even better — real photos of your actual shop always convert better than stock.': 'नहीं, और यही आम बात है। आपके बिज़नेस के बारे में थोड़ी बात करके मैं खुद लिख दूँगा, और जब तक आपकी अपनी फ़ोटो न हों तब तक अच्छी स्टॉक फ़ोटो लगा सकता हूँ। अगर आप फ़ोन से 10 फ़ोटो भेज दें तो और भी बेहतर — आपकी असली दुकान की फ़ोटो हमेशा ज़्यादा ग्राहक लाती है।',
      'Why are you cheaper than the agencies quoting ₹80,000?': 'एजेंसियाँ ₹80,000 माँगती हैं, आप इतने सस्ते क्यों हैं?',
      'Because there’s no office rent, no sales team, and no project manager forwarding your emails. You’re paying one engineer for the hours he works. I also reuse a solid foundation across projects instead of rebuilding the basics every time, which cuts the work substantially without cutting quality.': 'क्योंकि न ऑफ़िस का किराया है, न सेल्स टीम, न कोई प्रोजेक्ट मैनेजर जो आपकी ईमेल आगे बढ़ाए। आप एक इंजीनियर को उसके काम के घंटों का पैसा दे रहे हैं। इसके अलावा मैं हर बार शुरू से बनाने की जगह एक मज़बूत बुनियाद दोबारा इस्तेमाल करता हूँ, जिससे काम काफ़ी कम हो जाता है — पर क्वालिटी कम नहीं होती।',
      'Can I update the website myself later?': 'क्या मैं बाद में वेबसाइट खुद अपडेट कर सकता हूँ?',
      'Who owns the domain and hosting?': 'डोमेन और होस्टिंग किसके नाम पर होंगे?',
      'Do you build mobile apps?': 'क्या आप मोबाइल ऐप बनाते हैं?',
      'Usually I’ll talk you out of it. An app on the Play Store means a yearly fee, store approvals and constant updates — a lot of cost for a local business. What most people actually want is a website that installs to the home screen and opens like an app. That’s included in every package, at no extra cost.': 'आम तौर पर मैं आपको मना ही करूँगा। Play Store पर ऐप का मतलब है सालाना फ़ीस, स्टोर की मंज़ूरी और लगातार अपडेट — एक लोकल बिज़नेस के लिए बहुत खर्च। ज़्यादातर लोगों को असल में ऐसी वेबसाइट चाहिए जो होम स्क्रीन पर लग जाए और ऐप जैसी खुले। वो हर पैकेज में शामिल है, बिना अलग पैसे के।',
      'How do payments work?': 'पेमेंट कैसे होता है?',
      'I’m not in Hyderabad. Can you still build my website?': 'मैं हैदराबाद में नहीं हूँ। क्या फिर भी वेबसाइट बना सकते हैं?',
      'I\'m not in Hyderabad. Can you still build my website?': 'मैं हैदराबाद में नहीं हूँ। क्या फिर भी वेबसाइट बना सकते हैं?',

      /* closing CTA + footer */
      'Send one message describing what you do. I’ll reply with what I’d build, what it costs, and how long it takes — usually within a few hours. If it’s not a fit, I’ll tell you that too.': 'बस एक मैसेज भेजिए कि आप क्या करते हैं। मैं बता दूँगा कि क्या बनाऊँगा, कितना लगेगा और कितना समय — आम तौर पर कुछ ही घंटों में। अगर काम नहीं बनता, तो वो भी साफ़ बता दूँगा।',
      'Prefer email? anumap07@gmail.com': 'ईमेल बेहतर लगे? anumap07@gmail.com',

      /* chat widget */
      'What can I help you with?': 'मैं आपकी क्या मदद कर सकता हूँ?',
      'I need a website for my business': 'मुझे अपने बिज़नेस के लिए वेबसाइट चाहिए',
      'Tell me about the offer': 'ऑफ़र के बारे में बताइए',
      'How much will it cost?': 'कितना खर्च आएगा?',
      'How long does it take?': 'कितना समय लगेगा?',
      '📞 Call instead': '📞 कॉल करें',
      '✉️ Email me': '✉️ ईमेल करें',
      'Usually replies within a few hours': 'आम तौर पर कुछ घंटों में जवाब'
    }
  }
};
