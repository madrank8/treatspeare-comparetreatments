import type { FAQ } from "@/types";

/** Sample FAQ content. Educational only — not medical advice. */
export const faqs: FAQ[] = [
  // ── Homepage FAQs ──────────────────────────────────────────
  {
    slug: "how-do-you-make-money",
    question: "How does CompareTreatments make money?",
    answer:
      "We earn affiliate commissions when readers click through to a telehealth provider and sign up. Commissions never influence our scores or rankings — our methodology is applied identically to partners and non-partners, and we disclose every paid relationship.",
  },
  {
    slug: "is-this-medical-advice",
    question: "Is the information on this site medical advice?",
    answer:
      "No. CompareTreatments publishes independent research and comparison content to help you have an informed conversation with a licensed clinician. It is not a substitute for personalized medical advice, diagnosis or treatment.",
  },
  {
    slug: "how-are-treatments-scored",
    question: "How are treatments scored and ranked?",
    answer:
      "Every provider is assessed on the same weighted criteria: clinical oversight and safety, treatment options, transparent pricing, customer experience, and support. Scores are reviewed by a medical reviewer before publication and refreshed on a fixed schedule.",
  },
  {
    slug: "how-often-updated",
    question: "How often is the information updated?",
    answer:
      "Comparison pages are reviewed at least every 90 days, and immediately when a provider changes pricing, drug availability or its program structure. The 'Last updated' date at the top of each page reflects the most recent review.",
  },
  {
    slug: "who-reviews-content",
    question: "Who reviews the content?",
    answer:
      "Health content is written by experienced health editors and medically reviewed by licensed clinicians. Each comparison and review page shows the medical reviewer and the date the page was last reviewed.",
  },

  // ── Weight-loss / semaglutide hub FAQs ─────────────────────
  {
    slug: "what-is-semaglutide",
    question: "What is semaglutide and how does it work?",
    answer:
      "Semaglutide is a GLP-1 receptor agonist — a class of medication that mimics a gut hormone involved in appetite regulation and blood-sugar control. Prescribed for weight management, it can help reduce appetite and food intake. It is available as both FDA-approved brand-name products and, in some cases, compounded formulations. A licensed clinician determines whether it is appropriate for you.",
  },
  {
    slug: "semaglutide-cost",
    question: "How much does semaglutide cost through telehealth?",
    answer:
      "Pricing varies widely by provider and by whether you receive a brand-name or compounded medication. Telehealth programs in our comparison typically range from roughly $149 to $499 per month, often bundling the medication, clinician visits and shipping. Brand-name products may be partially covered by insurance; compounded options are usually paid out of pocket at a flat rate.",
  },
  {
    slug: "brand-vs-compounded",
    question: "What is the difference between brand-name and compounded semaglutide?",
    answer:
      "Brand-name semaglutide is an FDA-approved, manufacturer-produced product. Compounded semaglutide is prepared by a licensed compounding pharmacy and is not FDA-approved as a finished product. Compounded options are often less expensive but differ in regulatory status. Discuss the trade-offs with a licensed clinician before choosing.",
  },
  {
    slug: "semaglutide-side-effects",
    question: "What are the common side effects of semaglutide?",
    answer:
      "The most commonly reported side effects are gastrointestinal — nausea, diarrhea, constipation, vomiting and abdominal discomfort — and are often most noticeable when starting treatment or increasing the dose. Serious side effects are less common. Always review the full safety information with your prescribing clinician.",
  },
  {
    slug: "who-can-take-semaglutide",
    question: "Who is eligible for semaglutide weight-loss treatment?",
    answer:
      "Eligibility is decided by a licensed clinician and generally considers your BMI, weight-related health conditions and medical history. Semaglutide is not appropriate for everyone — for example, it is not recommended during pregnancy or for people with certain personal or family medical histories. A telehealth provider will screen you during onboarding.",
  },
  {
    slug: "how-to-choose-provider",
    question: "How do I choose a semaglutide telehealth provider?",
    answer:
      "Look for genuine clinical oversight by licensed prescribers, transparent all-in pricing with no hidden fees, clear information about whether the medication is brand-name or compounded, responsive support, and a straightforward cancellation policy. The ranked comparison on this page weighs each of these factors.",
  },

  // ── TrimRx review FAQs ─────────────────────────────────────
  {
    slug: "trimrx-prescription",
    question: "Do I need an existing prescription to start with TrimRx?",
    answer:
      "No. TrimRx connects you with a licensed clinician who reviews your online health questionnaire and decides whether a GLP-1 prescription is appropriate for you. You do not need a referral or an existing prescription to begin the intake process.",
  },
  {
    slug: "trimrx-medication-type",
    question: "Does TrimRx offer brand-name or compounded medication?",
    answer:
      "TrimRx offers both brand-name GLP-1 products and compounded semaglutide prepared by a licensed compounding pharmacy. Compounded formulations are not FDA-approved finished products. Your prescribing clinician will discuss which option, if any, is suitable for your situation.",
  },
  {
    slug: "trimrx-cancel",
    question: "Can I cancel my TrimRx plan at any time?",
    answer:
      "TrimRx advertises a flexible, cancel-anytime policy with no long-term lock-in. As with any subscription, confirm the current cancellation terms and any cutoff dates directly with TrimRx before signing up.",
  },
  {
    slug: "trimrx-coaching",
    question: "Is health coaching included with TrimRx?",
    answer:
      "TrimRx includes personalized coaching with its GLP-1 programs at no additional cost. Coaching is a supportive service and does not replace the clinical guidance of your prescribing clinician.",
  },

  // ── AltRx review FAQs ──────────────────────────────────────
  {
    slug: "altrx-lab-kit",
    question: "What is included in the AltRx at-home lab kit?",
    answer:
      "AltRx includes an at-home lab kit with onboarding so a clinician can review relevant baseline information before deciding whether treatment is appropriate. The exact panel can change, so confirm what is covered with AltRx directly.",
  },
  {
    slug: "altrx-insurance",
    question: "Does AltRx work with insurance?",
    answer:
      "AltRx is built around a flat, out-of-pocket monthly price and does not require insurance. Compounded semaglutide is typically paid out of pocket. If you want to use insurance toward a brand-name GLP-1, a provider that offers insurance navigation may be a better fit.",
  },
  {
    slug: "altrx-compounded-safety",
    question: "Is compounded semaglutide from AltRx the same as Wegovy®?",
    answer:
      "No. Compounded semaglutide is prepared by a licensed compounding pharmacy and is not an FDA-approved finished product, and it is not the same as brand-name products such as Wegovy® or Ozempic®. The regulatory status differs. A licensed clinician can explain the trade-offs before you decide.",
  },

  // ── SunlightRx review FAQs ─────────────────────────────────
  {
    slug: "sunlightrx-dietitian",
    question: "Do I get to work with a registered dietitian at SunlightRx?",
    answer:
      "Yes. SunlightRx pairs its GLP-1 programs with registered-dietitian nutrition support. Dietitian guidance is supportive and works alongside — not in place of — the care of your prescribing clinician.",
  },
  {
    slug: "sunlightrx-checkins",
    question: "How often does SunlightRx check in on my progress?",
    answer:
      "SunlightRx advertises quarterly metabolic check-ins with a clinician, in addition to ongoing messaging support. The cadence can vary by plan, so confirm the current schedule with SunlightRx.",
  },
  {
    slug: "sunlightrx-eligibility",
    question: "Who determines if I am eligible for treatment at SunlightRx?",
    answer:
      "A licensed clinician reviews your health questionnaire and history and determines whether a GLP-1 prescription is appropriate. GLP-1 treatment is not suitable for everyone, and eligibility is a clinical decision.",
  },

  // ── Remedy Meds review FAQs ────────────────────────────────
  {
    slug: "remedy-meds-clinicians",
    question: "Are Remedy Meds clinicians board-certified?",
    answer:
      "Remedy Meds states that its programs are overseen by board-certified clinicians. As with any telehealth provider, you can ask about a specific clinician's credentials and licensure during onboarding.",
  },
  {
    slug: "remedy-meds-insurance-help",
    question: "Does Remedy Meds help with insurance for brand-name GLP-1s?",
    answer:
      "Remedy Meds offers insurance navigation assistance for brand-name GLP-1 products. Coverage depends on your individual plan, and approval is never guaranteed. Compounded options are generally paid out of pocket.",
  },
  {
    slug: "remedy-meds-speed",
    question: "How quickly can I start treatment with Remedy Meds?",
    answer:
      "Remedy Meds advertises fast onboarding, with many members starting within roughly 48 hours of completing intake. Timelines depend on clinical review, medication availability and shipping.",
  },

  // ── BetterMe review FAQs ───────────────────────────────────
  {
    slug: "betterme-medication-optional",
    question: "Is the GLP-1 medication add-on required at BetterMe?",
    answer:
      "No. BetterMe is built around a behavioral, habit-first program, and the clinician-prescribed GLP-1 add-on is optional for eligible members. You can use the coaching program without medication if you prefer.",
  },
  {
    slug: "betterme-best-for",
    question: "Who is BetterMe best suited for?",
    answer:
      "BetterMe tends to fit people who want lifestyle and behavior-change support first, with the option to add clinician-prescribed medication later. If your priority is the fastest possible route to a GLP-1 prescription, a clinician-led provider may suit you better.",
  },
  {
    slug: "betterme-app",
    question: "Do I need to use the BetterMe app?",
    answer:
      "The BetterMe program is delivered largely through its app, which handles coaching, tracking and community features. Comfort with an app-based experience helps you get the most from the program.",
  },

  // ── Measured review FAQs ───────────────────────────────────
  {
    slug: "measured-connected-scale",
    question: "What does the Measured connected scale do?",
    answer:
      "Measured uses a connected scale and lab data to inform dosing decisions made by a licensed clinician. The device supports clinical oversight; it does not make medical decisions on its own.",
  },
  {
    slug: "measured-data-tracking",
    question: "How does Measured track my progress?",
    answer:
      "Measured provides a progress-tracking dashboard that brings together weigh-ins, lab results and clinician notes between visits. The depth of tracking is a core part of its data-driven approach.",
  },
  {
    slug: "measured-oversight",
    question: "Is there a clinician involved between visits at Measured?",
    answer:
      "Yes. Measured advertises ongoing clinician oversight between scheduled visits, with dosing decisions reviewed against your tracked data and labs.",
  },

  // ── Noom review FAQs ───────────────────────────────────────
  {
    slug: "noom-med-track",
    question: "How does the Noom medication track work?",
    answer:
      "Noom's medication track connects eligible users with prescribers who can evaluate whether a GLP-1 is appropriate. It runs alongside Noom's psychology-based behavior-change program rather than replacing it.",
  },
  {
    slug: "noom-psychology",
    question: "What makes Noom different from a clinician-first provider?",
    answer:
      "Noom is built around psychology and behavior change, with a large educational content library. The medication track is one part of a broader lifestyle program, so it suits people who want behavior support as much as a prescription.",
  },
  {
    slug: "noom-eligibility",
    question: "Does everyone on Noom get a GLP-1 prescription?",
    answer:
      "No. The medication track is for eligible users only, and a licensed prescriber decides whether a GLP-1 is appropriate. Many Noom members use the behavior-change program without medication.",
  },

  // ── Ro review FAQs ─────────────────────────────────────────
  {
    slug: "ro-brand-name",
    question: "Does Ro focus on brand-name GLP-1 medication?",
    answer:
      "Ro emphasizes brand-name GLP-1 products with pharmacy fulfillment. Brand-name products are FDA-approved and may be partially covered by insurance, though coverage depends on your individual plan.",
  },
  {
    slug: "ro-insurance",
    question: "Will Ro help me use my insurance?",
    answer:
      "Ro offers insurance support for eligible members seeking brand-name GLP-1 medication. Approval and coverage levels vary by plan and are never guaranteed.",
  },
  {
    slug: "ro-experience",
    question: "Is Ro an established telehealth provider?",
    answer:
      "Ro is a well-known, full-service telehealth company that has operated across multiple health categories for several years. Its weight-management program is part of that broader platform.",
  },

  // ── MEDVi review FAQs ──────────────────────────────────────
  {
    slug: "medvi-membership",
    question: "How does MEDVi membership pricing work?",
    answer:
      "MEDVi uses a membership-style model with a flat monthly price that bundles clinical care and medication. Confirm exactly what each membership tier includes with MEDVi before signing up.",
  },
  {
    slug: "medvi-medication",
    question: "What medication options does MEDVi offer?",
    answer:
      "MEDVi offers compounded semaglutide and tirzepatide. Compounded medications are prepared by a licensed compounding pharmacy and are not FDA-approved finished products. A clinician decides what is appropriate for you.",
  },
  {
    slug: "medvi-onboarding",
    question: "How do I sign up for MEDVi?",
    answer:
      "MEDVi uses a simple onboarding quiz to collect your health information, which a licensed clinician then reviews. Treatment is only prescribed if a clinician determines it is appropriate.",
  },

  // ── Fridays review FAQs ────────────────────────────────────
  {
    slug: "fridays-weekly-dosing",
    question: "What does 'streamlined weekly dosing' mean at Fridays?",
    answer:
      "Fridays is built around once-weekly GLP-1 dosing with direct-to-door delivery and weekly progress check-ins. Semaglutide and tirzepatide are typically administered as a weekly subcutaneous injection.",
  },
  {
    slug: "fridays-new-provider",
    question: "Fridays is a newer provider — what should I keep in mind?",
    answer:
      "Fridays launched more recently than some competitors, so it has a shorter track record. Its quiz-based onboarding and weekly check-ins are designed to be simple; weigh that against the longer history of more established providers.",
  },
  {
    slug: "fridays-compounded",
    question: "Does Fridays use compounded medication?",
    answer:
      "Fridays offers compounded GLP-1 plans. Compounded semaglutide and tirzepatide are prepared by a licensed compounding pharmacy and are not FDA-approved finished products. A licensed clinician determines suitability.",
  },

  // ── Men's Health hub FAQs ──────────────────────────────────
  {
    slug: "mens-health-what-covered",
    question: "What can an online men's health platform cover?",
    answer:
      "Depending on the provider, an online men's health membership can connect you with a licensed clinician for concerns such as erectile dysfunction, hair loss, low energy and testosterone questions, mental health, skincare and general primary care. Breadth varies widely — some platforms focus on one area, others bundle several — so check exactly what a membership includes before signing up.",
  },
  {
    slug: "mens-health-online-legit",
    question: "Is online men's health care legitimate?",
    answer:
      "Reputable telehealth platforms connect you with US-licensed clinicians who review your health information and decide whether treatment is appropriate. The quality of clinical oversight is the key differentiator. Look for genuine prescriber involvement, clear licensure information and responsive support — not a service that simply sells products after a quick form.",
  },
  {
    slug: "mens-health-cost",
    question: "How much do online men's health services cost?",
    answer:
      "Pricing depends on the provider and which services you use. Many platforms charge a consultation or membership fee plus the cost of any medication, while some bundle everything into a flat monthly price. Costs in this comparison generally range from around $20 to $100+ per month. Always confirm what the price includes before subscribing.",
  },
  {
    slug: "mens-health-privacy",
    question: "Is online men's health care confidential?",
    answer:
      "Established providers handle your health information under applicable privacy rules and typically ship medication in plain, unbranded packaging. Confidentiality practices still vary, so review a provider's privacy policy and shipping details if discretion is important to you.",
  },
  {
    slug: "mens-health-prescription",
    question: "Do I need an existing prescription to use these services?",
    answer:
      "No. These platforms connect you with a licensed clinician who reviews your online health intake and decides whether a prescription is appropriate. Treatment is only issued when a clinician determines it is suitable for you — these services do not prescribe on request.",
  },
  {
    slug: "mens-health-choose-provider",
    question: "How do I choose a men's health provider?",
    answer:
      "Match the provider to your needs: a focused service may offer deeper expertise in one area, while a broad platform is convenient if you want several concerns handled in one place. In all cases, prioritize genuine clinical oversight, transparent pricing, discreet shipping and a fair cancellation policy. The ranked comparison on this page weighs each of these factors.",
  },

  // ── Women's Health hub FAQs ────────────────────────────────
  {
    slug: "womens-health-what-covered",
    question: "What can an online women's health platform cover?",
    answer:
      "Depending on the provider, an online women's health service can connect you with a licensed clinician for birth control, menopause and perimenopause care, hormone therapy where appropriate, mental health, and general primary care. Services vary, so confirm exactly what each platform offers before signing up.",
  },
  {
    slug: "womens-health-birth-control-online",
    question: "Can I get birth control online?",
    answer:
      "Yes. Online services can prescribe many contraceptive options after a licensed clinician reviews your health history and questionnaire. Not every method is suitable for every person — a clinician makes that determination — and some situations still call for an in-person visit. Reputable services make the clinical review genuine rather than a formality.",
  },
  {
    slug: "womens-health-cost",
    question: "How much do online women's health services cost?",
    answer:
      "Pricing varies by provider and service. Consultation fees, membership fees and medication costs differ widely, and some birth-control prescriptions may be available at low or no cost depending on your situation. Always confirm the all-in cost — and what is included — before subscribing.",
  },
  {
    slug: "womens-health-insurance",
    question: "Do online women's health providers accept insurance?",
    answer:
      "Some do and some operate on a cash-pay basis. Where insurance is accepted, coverage depends on your individual plan and is never guaranteed. If using insurance matters to you, confirm a provider's policy and check with your insurer before signing up.",
  },
  {
    slug: "womens-health-prescription",
    question: "Do I need an existing prescription to use these services?",
    answer:
      "No. These platforms connect you with a licensed clinician who reviews your health information and decides whether a prescription or treatment plan is appropriate. Treatment is only issued when a clinician determines it is suitable for you.",
  },
  {
    slug: "womens-health-choose-provider",
    question: "How do I choose a women's health provider?",
    answer:
      "Match the provider to your needs and prioritize genuine clinical oversight, transparent pricing, a clear statement of which services are included, responsive follow-up support and a fair cancellation policy. The ranked comparison on this page weighs each of these factors.",
  },

  // ── ED hub FAQs ────────────────────────────────────────────
  {
    slug: "ed-what-causes",
    question: "What causes erectile dysfunction?",
    answer:
      "Erectile dysfunction can have physical causes — such as cardiovascular conditions, diabetes, hormonal factors or certain medications — as well as psychological contributors like stress and anxiety. Because ED is sometimes a sign of an underlying health issue, a genuine clinical review matters. A licensed clinician can help identify likely causes and appropriate next steps.",
  },
  {
    slug: "ed-online-treatment-work",
    question: "Does online ED treatment work?",
    answer:
      "Online ED treatment can be effective when it includes a real clinical review by a licensed prescriber. After reviewing your health questionnaire, a clinician decides whether a prescription medication is appropriate. Effectiveness varies between individuals, and the medication chosen, the dose and any underlying causes all play a role.",
  },
  {
    slug: "ed-sildenafil-vs-tadalafil",
    question: "What is the difference between sildenafil and tadalafil?",
    answer:
      "Both are PDE5 inhibitors. Sildenafil — the active ingredient in Viagra® — typically works for several hours and is taken before activity. Tadalafil — the active ingredient in Cialis® — can last considerably longer and is sometimes prescribed as a low daily dose. Generic versions of both are widely available. A licensed clinician determines which option, dose and schedule is appropriate for you.",
  },
  {
    slug: "ed-cost",
    question: "How much does online ED treatment cost?",
    answer:
      "Pricing depends on the provider, the medication and the dose. Generic sildenafil and tadalafil are often relatively affordable, and many telehealth providers price ED treatment per dose or as a flexible monthly plan. Always confirm the per-dose or monthly cost — including any consultation fee — before ordering.",
  },
  {
    slug: "ed-side-effects",
    question: "What are the side effects of ED medication?",
    answer:
      "Commonly reported side effects of PDE5 inhibitors include headache, flushing, nasal congestion, indigestion and dizziness. These medications are not safe for everyone — in particular, they should not be taken with nitrate medications. Always review the full safety information with your prescribing clinician.",
  },
  {
    slug: "ed-choose-provider",
    question: "How do I choose an ED treatment provider?",
    answer:
      "Look for a genuine clinical review by a licensed prescriber, a clear choice of clinician-prescribed medications and doses, transparent per-dose or monthly pricing, discreet shipping and responsive support. The ranked comparison on this page weighs each of these factors.",
  },

  // ── Hair Loss hub FAQs ─────────────────────────────────────
  {
    slug: "hair-loss-what-causes",
    question: "What causes male-pattern hair loss?",
    answer:
      "Male-pattern hair loss is largely driven by genetics and the effect of a hormone (DHT) on hair follicles, which causes them to shrink over time. It often begins in a man's twenties or thirties. Other factors — stress, nutrition, certain conditions and medications — can also affect hair, so a clinical review helps identify what is going on.",
  },
  {
    slug: "hair-loss-finasteride-minoxidil",
    question: "What is the difference between finasteride and minoxidil?",
    answer:
      "Finasteride — the active ingredient in Propecia® — is an oral prescription medication that addresses a hormonal driver of male-pattern hair loss. Minoxidil — the active ingredient in Rogaine® — is most commonly a topical treatment that can support regrowth. They work differently and are often prescribed together. A licensed clinician determines what is appropriate for you.",
  },
  {
    slug: "hair-loss-online-work",
    question: "Does online hair-loss treatment work?",
    answer:
      "Online hair-loss treatment can be effective when it pairs evidence-based medications with a genuine clinical review. Treatment generally works best when started early and used consistently, and results typically take several months to become visible. Outcomes vary between individuals, and a clinician can advise on realistic expectations.",
  },
  {
    slug: "hair-loss-cost",
    question: "How much does online hair-loss treatment cost?",
    answer:
      "Pricing depends on the provider and the treatment plan. Generic finasteride and minoxidil are often relatively affordable, and many telehealth providers offer all-in monthly plans. Always confirm the monthly cost — including any consultation fee — before subscribing.",
  },
  {
    slug: "hair-loss-side-effects",
    question: "What are the side effects of hair-loss treatments?",
    answer:
      "Topical minoxidil can cause scalp irritation and, occasionally, unwanted facial hair growth; many people also notice temporary increased shedding when starting. Finasteride is associated with uncommon sexual side effects in some men. Finasteride is not appropriate for women who are or may become pregnant. Review the full safety information with your prescribing clinician.",
  },
  {
    slug: "hair-loss-choose-provider",
    question: "How do I choose a hair-loss treatment provider?",
    answer:
      "Look for a genuine clinical review by a licensed prescriber, a clear choice of oral, topical or combination treatments, transparent all-in monthly pricing, discreet shipping and ongoing check-ins to monitor progress. The ranked comparison on this page weighs each of these factors.",
  },

  // ── Skin & Dermatology hub FAQs ────────────────────────────
  {
    slug: "skin-what-treated-online",
    question: "What skin concerns can be treated online?",
    answer:
      "Online dermatology is well suited to common, visible concerns such as acne, anti-aging, rosacea, melasma and certain pigmentation issues, which a clinician can often assess from clear photos and a health history. Some conditions still warrant an in-person exam, and a reputable provider will tell you when that is the case.",
  },
  {
    slug: "skin-online-derm-work",
    question: "Does online dermatology work?",
    answer:
      "Online dermatology can be effective for many common skin concerns when it includes a real review by a licensed clinician. After reviewing your photos and questionnaire, a clinician can prescribe an appropriate treatment plan. Results vary between individuals and typically build gradually over weeks to months.",
  },
  {
    slug: "skin-prescription-skincare",
    question: "What is prescription skincare?",
    answer:
      "Many online dermatology providers offer customized prescription formulas that combine clinician-selected active ingredients — for example tretinoin for anti-aging and acne, or treatments for rosacea and pigmentation. These are prescription products that a licensed clinician determines are appropriate for your skin; they are not available over the counter.",
  },
  {
    slug: "skin-cost",
    question: "How much does online dermatology cost?",
    answer:
      "Pricing depends on the provider and the treatment plan. Many services charge a flat monthly price that bundles the clinician review and a personalized prescription formula. Always confirm the all-in monthly cost — and what it includes — before subscribing.",
  },
  {
    slug: "skin-results-time",
    question: "How long do prescription skincare results take?",
    answer:
      "Most prescription skincare treatments build results gradually. Many people notice changes over several weeks to a few months, and consistency matters. Active ingredients can cause irritation, dryness or increased sun sensitivity, especially early on — a clinician can adjust your formula if needed.",
  },
  {
    slug: "skin-choose-provider",
    question: "How do I choose an online dermatology provider?",
    answer:
      "Look for a genuine review of your case by a licensed dermatology provider, evidence-based and clearly explained treatment plans, transparent monthly pricing, ongoing messaging so your formula can be adjusted, and discreet shipping. The ranked comparison on this page weighs each of these factors.",
  },

  // ── Sexual Health hub FAQs ─────────────────────────────────
  {
    slug: "sexual-health-what-services",
    question: "What sexual-health services are available online?",
    answer:
      "Online sexual-health services commonly include at-home STI testing, access to PrEP for HIV prevention, and confidential consultations with licensed clinicians for related concerns. Some providers also offer treatment for certain infections after a clinical review. Services vary, so check what each provider covers.",
  },
  {
    slug: "sexual-health-sti-testing-accuracy",
    question: "Are at-home STI tests accurate?",
    answer:
      "Reputable at-home STI tests are processed by CLIA-certified laboratories and can be highly accurate when samples are collected correctly. No test is perfect, however, and timing relative to a potential exposure affects results. A licensed clinician can advise on when and what to test for, and how to interpret your results.",
  },
  {
    slug: "sexual-health-prep-online",
    question: "Can I get PrEP online?",
    answer:
      "Yes. Online PrEP services connect you with a licensed clinician who reviews your eligibility, orders required baseline lab work and — if appropriate — prescribes PrEP, with periodic monitoring. PrEP is a clinician-prescribed medication that reduces the risk of HIV; it does not protect against other STIs. Suitability is always determined by a clinician.",
  },
  {
    slug: "sexual-health-cost",
    question: "How much do online sexual-health services cost?",
    answer:
      "Pricing depends on the service. At-home STI test panels are typically priced individually, while PrEP services may charge for consultations and lab work in addition to the medication. Some costs may be covered by insurance or assistance programs. Always confirm the all-in cost before ordering.",
  },
  {
    slug: "sexual-health-privacy",
    question: "Are online sexual-health services confidential?",
    answer:
      "Established providers handle your health information under applicable privacy rules, ship test kits in plain, unbranded packaging and deliver results privately through a secure account. Practices still vary, so review a provider's privacy policy if discretion is important to you.",
  },
  {
    slug: "sexual-health-choose-provider",
    question: "How do I choose a sexual-health service?",
    answer:
      "Look for testing processed by CLIA-certified laboratories, a licensed clinician available to interpret results and arrange treatment, transparent pricing, discreet packaging and clear follow-up pathways if a result needs attention. The ranked comparison on this page weighs each of these factors.",
  },

  // ── Blood Testing hub FAQs ─────────────────────────────────
  {
    slug: "blood-testing-how-works",
    question: "How does at-home blood testing work?",
    answer:
      "Most services ship a collection kit to your door. Depending on the panel, you provide a finger-prick sample at home or visit a partner lab for a standard blood draw, then return the sample for processing. Results are delivered through a secure online dashboard, often within a few days.",
  },
  {
    slug: "blood-testing-accuracy",
    question: "Are at-home blood tests accurate?",
    answer:
      "When processed by CLIA-certified, accredited laboratories and collected correctly, at-home blood tests can be reliable. Sample collection technique can affect results, and at-home testing is a screening and tracking tool rather than a diagnosis. Abnormal results should be confirmed and discussed with a licensed clinician.",
  },
  {
    slug: "blood-testing-what-panels",
    question: "What can at-home blood panels measure?",
    answer:
      "Panels range from general wellness checks — such as cholesterol, blood sugar and vitamin levels — to targeted hormone, thyroid or metabolic testing. More biomarkers is not automatically better; the most useful panel is the one matched to your health questions and history.",
  },
  {
    slug: "blood-testing-cost",
    question: "How much does at-home blood testing cost?",
    answer:
      "Pricing depends on the panel and provider. Individual panels are often priced per test, while some services offer subscriptions with periodic retesting. Always confirm the per-panel or subscription cost — and whether clinician review is included — before ordering.",
  },
  {
    slug: "blood-testing-doctor-review",
    question: "Does a doctor review my blood test results?",
    answer:
      "It depends on the service. Some include clinician review or guidance as standard, while others simply provide results and reference ranges. A service that pairs results with clinician input makes them easier to act on — and any abnormal result should be discussed with a licensed clinician.",
  },
  {
    slug: "blood-testing-choose-provider",
    question: "How do I choose a blood testing service?",
    answer:
      "Look for samples processed by CLIA-certified, accredited laboratories, clear information on which biomarkers each panel measures, clinician review to help interpret results, transparent pricing and secure results delivery. The ranked comparison on this page weighs each of these factors.",
  },

  // ── Advanced Wellness hub FAQs ─────────────────────────────
  {
    slug: "wellness-what-programs-cover",
    question: "What do advanced wellness programs cover?",
    answer:
      "Advanced wellness and longevity programs typically combine an assessment — often a health questionnaire and lab panel — with a personalized plan covering areas such as metabolic health, sleep, fitness, nutrition and stress. Some also include clinician-prescribed care. Scope varies widely, so confirm what each program includes.",
  },
  {
    slug: "wellness-longevity-evidence",
    question: "Is there evidence behind longevity programs?",
    answer:
      "Some elements have strong evidence and others do not. Well-established fundamentals — sleep, physical activity, nutrition, not smoking and managing key health markers — are well supported. More speculative \"optimization\" interventions are not, and no program can promise a longer life or guaranteed results. A credible provider is clear about that distinction.",
  },
  {
    slug: "wellness-clinician-involved",
    question: "Is a clinician involved in wellness programs?",
    answer:
      "It varies. The strongest programs include genuine oversight from licensed clinicians, while others rely mainly on coaching. If a program offers lab testing or any prescription care, a licensed clinician should be meaningfully involved in those decisions.",
  },
  {
    slug: "wellness-cost",
    question: "How much do advanced wellness programs cost?",
    answer:
      "Most programs use a membership model, and pricing varies widely depending on what is included — testing, coaching, clinician access and retesting. Always confirm the membership cost and exactly what it covers before subscribing.",
  },
  {
    slug: "wellness-vs-primary-care",
    question: "Can a wellness program replace primary care?",
    answer:
      "No. A wellness or longevity program is best viewed as a complement to, not a replacement for, ongoing primary care from a licensed clinician. Keep your regular clinician informed, and discuss any program recommendations or lab findings with them.",
  },
  {
    slug: "wellness-choose-provider",
    question: "How do I choose a wellness program?",
    answer:
      "Look for genuine clinical oversight, recommendations grounded in established health evidence, transparent membership pricing, personalization based on your data and goals, and honest communication about what the program can realistically deliver. The ranked comparison on this page weighs each of these factors.",
  },
];

/** Look up FAQs by slug, preserving the requested order. */
export function getFaqs(slugs: string[]): FAQ[] {
  return slugs
    .map((slug) => faqs.find((f) => f.slug === slug))
    .filter((f): f is FAQ => Boolean(f));
}
