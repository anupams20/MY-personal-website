/* ============================================================
   Single source of truth for PERSON facts (Round 4).
   Every string here is traceable to the verified facts table
   (LinkedIn PDF export). Do not add anything unverified.
   ============================================================ */
window.FACTS = {
  /* TODO(Anupam): check your employment contract / outside-work policy
     before setting SHOW_EMPLOYER to true, and before running this
     business publicly under your own name. Default: false. */
  SHOW_EMPLOYER: false,

  name: "Anupam Singh",
  /* TODO(Anupam): confirm "B.Tech" wording — LinkedIn shows institute+years only */
  education: "IIT Kanpur, 2024 batch",
  linkedin: "https://www.linkedin.com/in/anupamsingh-iitk/",
  email: "anupam@anupamwebworks.com",
  phone_display: "+91 96708 09669",
  wa: "919670809669",

  /* Employer line variants — swapped at runtime by SHOW_EMPLOYER.
     Source: LinkedIn (Manager 1, Tech Operations & Platform Strategy,
     ICICI Bank, Hyderabad, since Oct 2025; before that DevOps at BeeHyv). */
  workline: {
    hidden_en: "I work on live production systems where downtime is not allowed.",
    hidden_hi: "मैं ऐसे लाइव सिस्टम पर काम करता हूँ जो रुक नहीं सकते।",
    shown_en: "I work on live loan-platform systems at ICICI Bank, Hyderabad.",
    shown_hi: "मैं ICICI Bank, Hyderabad में लाइव loan-platform सिस्टम पर काम करता हूँ।"
  }
};
