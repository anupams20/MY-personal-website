/* ============================================================
   Hindi translations.

   ------------------------------------------------------------
   THE RULE, and it matters more than the grammar:
   ------------------------------------------------------------
   These things stay in ENGLISH, always:

     • Qualifications and institutions — B.Tech, IIT Kanpur
     • Brand and product names — WhatsApp, Google, Razorpay, UPI,
       Razorpay, Search Console, Analytics, Kubernetes, LinkedIn
     • Your own package names — Starter, Business, Online store
     • Numbers, prices, dates, phone numbers

   Nobody says "बी.टेक" out loud. Writing it that way makes the
   credential look smaller, not more local. Same for package
   names: "शुरुआती" is not a product, "Starter" is — and a
   customer who reads the Hindi page still has to say the package
   name back to you on the phone.

   Anything with no entry below simply stays in English. That is
   how the English terms above are handled — by omission, not by
   copying them into this file.

   ------------------------------------------------------------
   THE REGISTER:
   ------------------------------------------------------------
   Everyday spoken Hindi, the way a shopkeeper actually talks.
   Not शुद्ध हिंदी, and never word-for-word from the English —
   each line was written to make sense on its own in Hindi, then
   checked that it still makes the same promise as the English.
   ============================================================ */

window.I18N = {
  hi: {

    KEYS: {
      /* nav — note: no key for the quote button's brand words */
      'nav.services': 'सेवाएँ',
      'nav.pricing' : 'कीमत',
      'nav.work'    : 'काम',
      'nav.about'   : 'परिचय',
      'nav.faq'     : 'सवाल-जवाब',
      'nav.quote'   : 'फ्री कोटेशन लें',

      /* hero — hero.pill1 is deliberately absent: "B.Tech, IIT Kanpur"
         stays exactly as it is in English */
      'hero.pill2'  : 'नए प्रोजेक्ट के लिए उपलब्ध',
      'hero.h1'     : 'आपके बिज़नेस की वेबसाइट — <span class="hl">भारत में कहीं भी</span>, बनाई <span class="hl">IIT Kanpur के इंजीनियर</span> ने।',
      'hero.lede'   : 'मैं अनुपम हूँ। नौकरी में मैं वो सॉफ़्टवेयर सिस्टम संभालता हूँ जिन पर भारत का एक बड़ा बैंक हर दिन चलता है। वेबसाइट बनाना मेरा <strong>शौक़ है</strong> — इसीलिए आपको ऐसी वेबसाइट मिलती है जो फ़ोन पर तेज़ चले और सच में ग्राहक लाए: <strong>एक हफ़्ते में तैयार</strong>, <strong class="mark">₹10,000</strong> से शुरू, और कीमत पहले ही तय।',
      'hero.cta1'   : 'WhatsApp पर मैसेज करें',
      'hero.cta2'   : 'कीमत और पैकेज देखें',
      'hero.note'   : 'फ्री 15 मिनट की बात। न कोई दबाव, न मुश्किल शब्द, न "प्रपोज़ल भेजते हैं" वाला चक्कर।',
      'hero.replies': 'कुछ घंटों में जवाब',

      /* credentials strip — cred.1a/1b absent on purpose:
         "IIT Kanpur" and "B.Tech, 2024" stay in English */
      'cred.2a': '2+ साल',        'cred.2b': 'सॉफ़्टवेयर इंजीनियरिंग',
      'cred.3a': 'पूरे भारत में',  'cred.3b': 'ऑनलाइन · हैदराबाद से',
      'cred.4a': '7 दिन',         'cred.4b': 'आम तौर पर डिलीवरी',
      'cred.5a': 'तय कीमत',       'cred.5b': 'शुरू करने से पहले तय',

      /* section headings */
      'sec.services.eye': 'मैं क्या बनाता हूँ',
      'sec.pricing.eye' : 'कीमत',
      'sec.work.eye'    : 'हाल का काम',
      'sec.about.eye'   : 'मेरे बारे में',
      'sec.faq.eye'     : 'सवाल',

      'h2.services': 'तीन काम, <span class="hl">पूरे मन से</span>।',
      'h2.pricing' : 'कीमत तय। <span class="hl">सबके सामने।</span>',
      'h2.work'    : 'कुछ <span class="hl">नमूने</span>।',
      'h2.about'   : 'मैं <span class="hl">अकेला इंजीनियर</span> हूँ। कोई एजेंसी नहीं।',
      'h2.faq'     : 'जो <span class="hl">हर कोई पूछता है</span>।',
      'cta.h2'     : 'अपने <span class="hl-light">बिज़नेस</span> के बारे में बताइए।',

      'sub.services': 'मैं सब कुछ नहीं करता। मैं वही करता हूँ जिसकी बिज़नेस को सच में ज़रूरत है — <strong>लोगों तक पहुँचना</strong> और <strong>कॉल आना</strong>।',
      'sub.pricing' : 'कीमत आपको फ़ोन करने से <strong>पहले</strong> पता होगी। न "काम देखकर बताएँगे", न बीच में दोगुना होने वाला कोटेशन।',
      'sub.work'    : 'नमूने की वेबसाइटें — ताकि दिख जाए कि हर पैकेज में असल में क्या मिलता है।',

      /* services */
      'svc.1.h': 'बिज़नेस वेबसाइट',
      'svc.1.p': 'साफ़-सुथरी, तेज़ वेबसाइट जो फ़ोन पर तुरंत खुले। आपकी सेवाएँ, आपकी फ़ोटो, मैप पर आपकी लोकेशन, और एक WhatsApp बटन जो ग्राहक को <strong>सीधे आपकी चैट में</strong> ले आए।',
      'svc.2.h': 'ऑनलाइन दुकान',
      'svc.2.p': 'Razorpay के ज़रिए UPI, कार्ड और नेट बैंकिंग से अपना सामान ऑनलाइन बेचिए। ऑर्डर और स्टॉक खुद संभालिए — हर बार कीमत बदलने पर मुझे फ़ोन करने की ज़रूरत नहीं।',
      'svc.3.h': 'Google पर दिखिए',
      'svc.3.p': 'जो वेबसाइट किसी को मिलती ही नहीं, वो बंद कमरे में लगे पोस्टर जैसी है। मैं आपकी <strong>Google Business Profile</strong> ठीक से बनाता हूँ, ताकि आस-पास कोई ढूँढे तो आप मैप पर दिखें।',

      /* about */
      'about.p1': 'मैंने 2024 में <strong class="mark">IIT Kanpur</strong> से पढ़ाई पूरी की। तब से असली सॉफ़्टवेयर सिस्टम चलाने का काम कर रहा हूँ — पहले BeeHyv Software Solutions में DevOps इंजीनियर के तौर पर, और अब भारत के सबसे बड़े प्राइवेट बैंकों में से एक में, जहाँ मैं वो लोन सिस्टम संभालता हूँ जिन्हें हज़ारों लोग रोज़ इस्तेमाल करते हैं।',
      'about.p2': 'वेबसाइट बनाने वाले के लिए ये बैकग्राउंड थोड़ा अलग है — और यही वजह है कि मुझे चुनना चाहिए। बैंक में सिस्टम एक घंटा भी बंद हो जाए तो बड़ी बात हो जाती है। वही तरीका मैं पाँच पेज की छोटी वेबसाइट पर भी लगाता हूँ: <strong>तेज़ चलती है, हर फ़ोन पर चलती है, बैकअप रहता है, और बंद नहीं पड़ती।</strong>',
      'about.p3': 'मैं हैदराबाद में रहता हूँ और <strong>पूरे भारत</strong> के क्लाइंट के साथ काम करता हूँ — ज़्यादातर बात WhatsApp और कॉल पर हो जाती है, तो आपका शहर कोई फ़र्क नहीं डालता। और जब आप मैसेज करेंगे, तो सीधे उसी से बात होगी जो आपकी वेबसाइट बनाएगा। न कोई सेल्समैन, न अकाउंट मैनेजर, न पैसे लेने के बाद किसी और को काम सौंपना।',
      'about.how': 'काम कैसे होता है',

      /* how it works */
      'step.1a': 'बात — 15 मिनट',
      'step.1b': 'WhatsApp या कॉल। आप अपने बिज़नेस के बारे में बताइए, मैं कीमत बता दूँगा। बस इतना।',
      'step.2a': 'मैं पहला ड्राफ़्ट बनाता हूँ',
      'step.2b': 'कुछ ही दिनों में आपको चलती-फिरती असली वेबसाइट दिखेगी — कोई PDF डिज़ाइन नहीं।',
      'step.3a': 'दो बार बदलाव',
      'step.3b': 'आप बताइए क्या ठीक करना है, मैं कर दूँगा। न बहस, न कोई फ़ॉर्म भरना।',
      'step.4a': 'वेबसाइट लाइव',
      'step.4b': 'आपके अपने डोमेन पर, आपके नाम से। हर पासवर्ड आपको सौंप दूँगा।',

      /* compound elements (they wrap inline <strong>) */
      'skip'        : 'सीधे कंटेंट पर जाएँ',
      'tier.1.live' : '<strong>5–7 दिन में तैयार</strong>',
      'tier.2.live' : '<strong>10–14 दिन में तैयार</strong>',
      'tier.3.live' : '<strong>3–4 हफ़्ते में तैयार</strong>',
      'amc.h'       : '<span>देखभाल प्लान — ₹1,500/महीना </span><span>(ज़रूरी नहीं)</span>',
      'fineprint'   : '50% काम शुरू करते समय, 50% वेबसाइट लाइव होने पर। GST लागू नहीं। डोमेन और होस्टिंग का सिर्फ़ असली खर्च लगेगा (करीब ₹1,000–2,500 साल का) और वो आपके ही नाम पर रहेंगे — मालिक आप हैं।',
      'work.note'   : 'ये सिर्फ़ नमूने हैं, ये दिखाने के लिए कि हर पैकेज में क्या-क्या मिलता है। इनमें दिखाए गए बिज़नेस असली क्लाइंट नहीं, बस उदाहरण हैं। <strong>आपकी वेबसाइट में आपका अपना नाम, अपनी फ़ोटो और अपनी जानकारी होगी।</strong>',
      'faq.7a'      : 'हाँ — मैं <strong>पूरे भारत</strong> में क्लाइंट के साथ काम करता हूँ। सारा काम WhatsApp, ईमेल और कॉल पर होता है, जैसे वैसे भी ज़्यादातर होता ही है। मैं हैदराबाद में हूँ, तो आप यहीं के हैं तो मिल भी सकते हैं — पर इससे आपको मिलने वाली चीज़ या कीमत में कोई फ़र्क नहीं पड़ता।',
      'cta.body'    : 'बस एक मैसेज भेजिए कि आप क्या काम करते हैं। मैं बता दूँगा कि क्या बनाऊँगा, कितना खर्च आएगा और कितना समय लगेगा — <strong>आम तौर पर कुछ ही घंटों में</strong>। अगर बात नहीं बनती, तो वो भी साफ़ कह दूँगा।',

      /* chat + footer */
      'chat.greet' : 'नमस्ते! 👋 मैं अनुपम — <strong>IIT Kanpur</strong> से इंजीनियर, और पूरे भारत के बिज़नेस के लिए वेबसाइट बनाता हूँ।',
      'chat.prompt': 'मैं आपकी क्या मदद करूँ?',
      'chat.status': 'आम तौर पर कुछ घंटों में जवाब',
      'cta.prefer' : 'ईमेल बेहतर लगे?',
      'foot.role'  : 'फ्रीलांस वेबसाइट डेवलपर, भारत।'
    },

    TEXT: {
      /* ---- service bullets ---- */
      'Mobile-first — most of your visitors are on 4G': 'मोबाइल पहले — ज़्यादातर लोग फ़ोन से ही आते हैं',
      'Click-to-call and WhatsApp enquiry': 'एक टैप में कॉल या WhatsApp',
      'Google Maps and business hours': 'Google Maps और खुलने का समय',
      'Photo gallery for your work': 'आपके काम की फ़ोटो गैलरी',
      'Payments via Razorpay (UPI included)': 'Razorpay से पेमेंट — UPI भी',
      'Inventory you can update yourself': 'स्टॉक आप खुद अपडेट करें',
      'Order notifications on WhatsApp': 'हर ऑर्डर की जानकारी WhatsApp पर',
      'Delivery and pickup options': 'डिलीवरी और पिकअप, दोनों',
      'On-page SEO for local search': 'लोकल सर्च के लिए SEO',
      'Review collection link for customers': 'ग्राहकों से रिव्यू माँगने का लिंक',

      /* ---- pricing ----
         "Starter", "Business", "Online store", "Analytics and Search
         Console" and "Google Business Profile setup" are absent on
         purpose — they stay in English. */
      'For a shop, clinic or studio that needs to exist online.': 'दुकान, क्लिनिक या स्टूडियो — जिन्हें बस ऑनलाइन दिखना है।',
      'Up to 5 pages': '5 पेज तक',
      'Mobile-first, fast loading': 'फ़ोन पर तेज़ी से खुलने वाली',
      'WhatsApp + call buttons': 'WhatsApp और कॉल बटन',
      'Google Maps and contact form': 'Google Maps और संपर्क फ़ॉर्म',
      'Free domain + hosting setup': 'डोमेन और होस्टिंग सेटअप — फ्री',
      'Live in 5–7 days': '5–7 दिन में तैयार',
      'For a business that wants enquiries from Google, not just a link to share.': 'उस बिज़नेस के लिए जिसे Google से ग्राहक चाहिए — सिर्फ़ शेयर करने को एक लिंक नहीं।',
      'Everything in Starter': 'Starter वाला सब कुछ',
      'Up to 12 pages + blog': '12 पेज तक और ब्लॉग',
      'Custom design, not a template': 'आपके लिए बना डिज़ाइन — कोई रेडीमेड टेम्पलेट नहीं',
      'Live in 10–14 days': '10–14 दिन में तैयार',
      'For selling products online with real payments.': 'असली पेमेंट लेकर ऑनलाइन सामान बेचने के लिए।',
      'Everything in Business': 'Business वाला सब कुछ',
      'Up to 50 products': '50 प्रोडक्ट तक',
      'Razorpay / UPI payments': 'Razorpay और UPI पेमेंट',
      'Order and inventory dashboard': 'ऑर्डर और स्टॉक का डैशबोर्ड',
      'Training so you can run it': 'ट्रेनिंग, ताकि आप खुद चला सकें',
      'Live in 3–4 weeks': '3–4 हफ़्ते में तैयार',
      'Most chosen': 'सबसे ज़्यादा पसंद',
      'Enquire': 'पूछताछ करें',
      'Ask about it': 'इसके बारे में पूछिए',
      'Care plan — ₹1,500/month (optional)': 'देखभाल प्लान — ₹1,500/महीना (ज़रूरी नहीं)',
      'Hosting, daily backups, security updates, uptime monitoring and two content changes a month. Most clients take this so they never have to think about the site again.': 'होस्टिंग, रोज़ का बैकअप, सिक्योरिटी अपडेट, साइट चालू है या नहीं इसकी निगरानी, और महीने में दो बार कंटेंट में बदलाव। ज़्यादातर क्लाइंट यही लेते हैं, ताकि वेबसाइट की चिंता ही न रहे।',
      '50% to start, 50% when the site goes live. GST not applicable. Domain and hosting are billed at actual cost (roughly ₹1,000–2,500/year) and registered in your name — you own everything.': '50% काम शुरू करते समय, 50% वेबसाइट लाइव होने पर। GST लागू नहीं। डोमेन और होस्टिंग का सिर्फ़ असली खर्च लगेगा (करीब ₹1,000–2,500 साल का) और वो आपके ही नाम पर रहेंगे — मालिक आप हैं।',

      /* ---- work ---- */
      'Treatment pricing, doctor profiles, clinic timings and an appointment request form.': 'इलाज की कीमत, डॉक्टरों का परिचय, क्लिनिक का समय और अपॉइंटमेंट का फ़ॉर्म।',
      'Interactive class timetable, coach profiles, three membership tiers and a free-trial CTA.': 'क्लास की टाइम-टेबल, कोच का परिचय, तीन मेंबरशिप प्लान और फ्री ट्रायल का बटन।',
      'Product catalogue with a working cart, UPI/Razorpay checkout messaging and delivery info.': 'चलता हुआ कार्ट, UPI/Razorpay चेकआउट और डिलीवरी की जानकारी के साथ पूरा प्रोडक्ट कैटलॉग।',
      'View site ↗': 'वेबसाइट देखें ↗',
      'Open live demo ↗': 'डेमो खोलें ↗',
      'These are demonstration sites built to show what each package includes — the businesses are illustrative, not clients. Your site would use your own name, photos and content.': 'ये सिर्फ़ नमूने हैं, ये दिखाने के लिए कि हर पैकेज में क्या-क्या मिलता है। इनमें दिखाए गए बिज़नेस असली क्लाइंट नहीं, बस उदाहरण हैं। आपकी वेबसाइट में आपका अपना नाम, अपनी फ़ोटो और अपनी जानकारी होगी।',

      /* ---- about stats ---- */
      '2+ yrs': '2+ साल',
      'Production engineering': 'सॉफ़्टवेयर इंजीनियरिंग',
      'Microservices migrated to Kubernetes': 'Kubernetes पर शिफ़्ट की गईं माइक्रोसर्विस',
      'All India': 'पूरे भारत में',
      'Clients anywhere, fully remote': 'कहीं भी क्लाइंट, पूरा काम ऑनलाइन',
      '7 days': '7 दिन',
      'Typical turnaround': 'आम तौर पर लगने वाला समय',
      'How it works': 'काम कैसे होता है',

      /* ---- FAQ ---- */
      'I don’t have any content or photos. Is that a problem?': 'मेरे पास कंटेंट या फ़ोटो नहीं हैं। क्या दिक्कत होगी?',
      'I don\'t have any content or photos. Is that a problem?': 'मेरे पास कंटेंट या फ़ोटो नहीं हैं। क्या दिक्कत होगी?',
      'No, and it’s the normal situation. I’ll write the text for you based on a short conversation about your business, and I can use good stock photography until you have your own. If you can send me 10 photos from your phone, even better — real photos of your actual shop always convert better than stock.': 'नहीं, और यही सबसे आम बात है। आपके बिज़नेस के बारे में थोड़ी बात करके लिखना मैं खुद कर दूँगा, और जब तक आपकी अपनी फ़ोटो न हों, तब तक अच्छी स्टॉक फ़ोटो लगा देंगे। अगर आप फ़ोन से 10 फ़ोटो भेज दें तो और भी अच्छा — अपनी असली दुकान की फ़ोटो हमेशा ज़्यादा असर करती है।',

      'Why are you cheaper than the agencies quoting ₹80,000?': 'एजेंसी ₹80,000 माँगती है, आप इतने कम में कैसे?',
      'Because there’s no office rent, no sales team, and no project manager forwarding your emails. You’re paying one engineer for the hours he works. I also reuse a solid foundation across projects instead of rebuilding the basics every time, which cuts the work substantially without cutting quality.': 'क्योंकि न ऑफ़िस का किराया है, न सेल्स टीम, न कोई मैनेजर जो आपकी ईमेल इधर-उधर भेजता रहे। आप सीधे एक इंजीनियर को उसके काम के पैसे दे रहे हैं। इसके अलावा हर बार शून्य से शुरू करने की जगह मैं एक तैयार, मज़बूत बुनियाद दोबारा इस्तेमाल करता हूँ — इससे काम काफ़ी कम हो जाता है, पर क्वालिटी वही रहती है।',

      'Can I update the website myself later?': 'क्या मैं बाद में वेबसाइट खुद अपडेट कर सकता हूँ?',
      'Yes. For text and photo changes I’ll set you up so you can edit without touching code, and I’ll walk you through it once. If you’d rather not deal with it at all, the ₹1,500/month care plan includes two changes a month.': 'हाँ। टेक्स्ट और फ़ोटो बदलने के लिए मैं ऐसा सेटअप कर दूँगा कि कोड छूने की ज़रूरत ही न पड़े, और एक बार आपको सिखा भी दूँगा। अगर आप ये झंझट बिल्कुल नहीं चाहते, तो ₹1,500/महीना वाले देखभाल प्लान में महीने के दो बदलाव शामिल हैं।',

      'Who owns the domain and hosting?': 'डोमेन और होस्टिंग किसके नाम पर रहेंगे?',
      'You do. I register everything in your name with your email and card where possible, and I hand over every username and password when the site goes live. Some developers keep this in their own name so you can’t leave. I think that’s a bad way to do business.': 'आपके नाम पर। जहाँ तक हो सके मैं सब कुछ आपके नाम, आपकी ईमेल और आपके कार्ड से रजिस्टर करता हूँ, और वेबसाइट लाइव होते ही हर यूज़रनेम-पासवर्ड आपको दे देता हूँ। कुछ डेवलपर ये अपने नाम पर रखते हैं ताकि आप उन्हें छोड़ न सकें। मुझे ये तरीका ग़लत लगता है।',

      'Do you build mobile apps?': 'क्या आप मोबाइल ऐप बनाते हैं?',
      'Usually I’ll talk you out of it. An app on the Play Store means a yearly fee, store approvals and constant updates — a lot of cost for a local business. What most people actually want is a website that installs to the home screen and opens like an app. That’s included in every package, at no extra cost.': 'आम तौर पर मैं आपको मना ही करूँगा। Play Store पर ऐप का मतलब है सालाना फ़ीस, स्टोर की मंज़ूरी और लगातार अपडेट — एक छोटे बिज़नेस के लिए बहुत खर्च। ज़्यादातर लोगों को असल में ऐसी वेबसाइट चाहिए जो होम स्क्रीन पर लग जाए और ऐप की तरह खुले। वो हर पैकेज में शामिल है, बिना अलग पैसे के।',

      'How do payments work?': 'पेमेंट कैसे होता है?',
      '50% to begin and 50% when the site goes live, by UPI or bank transfer. You see the full working site before the second payment — if you’re not happy with it, you don’t pay the balance.': '50% शुरू करते समय और 50% वेबसाइट लाइव होने पर, UPI या बैंक ट्रांसफ़र से। दूसरी पेमेंट से पहले आप पूरी चलती हुई वेबसाइट देख लेते हैं — पसंद न आए तो बाक़ी पैसे मत दीजिए।',

      'I’m not in Hyderabad. Can you still build my website?': 'मैं हैदराबाद में नहीं हूँ। क्या फिर भी वेबसाइट बना सकते हैं?',
      'I\'m not in Hyderabad. Can you still build my website?': 'मैं हैदराबाद में नहीं हूँ। क्या फिर भी वेबसाइट बना सकते हैं?',
      'Yes — I work with clients anywhere in India. Everything happens over WhatsApp, email and calls, which is how most of my work runs regardless of city. I’m based in Hyderabad, so if you’re local we can meet in person, but it makes no difference to what you get or what you pay.': 'हाँ — मैं पूरे भारत में क्लाइंट के साथ काम करता हूँ। सारा काम WhatsApp, ईमेल और कॉल पर होता है, जैसे वैसे भी ज़्यादातर होता ही है। मैं हैदराबाद में हूँ, तो आप यहीं के हैं तो मिल भी सकते हैं — पर इससे आपको मिलने वाली चीज़ या कीमत में कोई फ़र्क नहीं पड़ता।',

      /* ---- closing CTA ---- */
      'Send one message describing what you do. I’ll reply with what I’d build, what it costs, and how long it takes — usually within a few hours. If it’s not a fit, I’ll tell you that too.': 'बस एक मैसेज भेजिए कि आप क्या काम करते हैं। मैं बता दूँगा कि क्या बनाऊँगा, कितना खर्च आएगा और कितना समय लगेगा — आम तौर पर कुछ ही घंटों में। अगर बात नहीं बनती, तो वो भी साफ़ कह दूँगा।',

      /* ---- chat ---- */
      'I need a website for my business': 'मुझे अपने बिज़नेस के लिए वेबसाइट चाहिए',
      'Tell me about the offer': 'ऑफ़र के बारे में बताइए',
      'How much will it cost?': 'कितना खर्च आएगा?',
      'How long does it take?': 'कितना समय लगेगा?',
      '📞 Call instead': '📞 कॉल करें',
      '✉️ Email me': '✉️ ईमेल करें'
    }
  }
};
