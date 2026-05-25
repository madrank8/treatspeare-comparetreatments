import type { TreatmentCategory } from "@/types";

/**
 * Treatment categories. Only `weight-loss` is fully seeded (with a
 * semaglutide focus) for this build; the remaining categories carry
 * nav/grid metadata so the homepage CategoryGrid renders completely.
 */
export const categories: TreatmentCategory[] = [
  {
    slug: "weight-loss",
    title: "Weight Loss",
    shortName: "Weight Loss",
    icon: "weight-loss",
    tileDescription: "GLP-1 programs — semaglutide & tirzepatide",
    heroHeadline: "Compare Semaglutide Weight Loss Injections 2026",
    heroIntro:
      "Explore the leading telehealth semaglutide providers and how they support clinical oversight, pricing transparency and treatment options — so you can choose with confidence.",
    metaTitle: "Compare Semaglutide Weight Loss Injections 2026",
    metaDescription:
      "Compare the 10 best telehealth semaglutide weight-loss providers for 2026. Independent, medically reviewed rankings on price, clinical oversight and support.",
    rankingMethodology: [
      "Clinical oversight — licensed prescribers and ongoing medical supervision.",
      "Treatment options — brand-name and compounded GLP-1 availability.",
      "Pricing transparency — clear all-in monthly cost with no hidden fees.",
      "Customer experience — onboarding, shipping speed and ongoing coaching.",
      "Support & flexibility — responsiveness and a fair cancellation policy.",
    ],
    faqSlugs: [
      "what-is-semaglutide",
      "semaglutide-cost",
      "brand-vs-compounded",
      "semaglutide-side-effects",
      "who-can-take-semaglutide",
      "how-to-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-18",
    order: 1,
    drugFacts: {
      genericName: "Semaglutide",
      brandNames: ["Wegovy", "Ozempic"],
      drugClass: "GLP-1 receptor agonist",
      administration: "Subcutaneous injection, once weekly",
      commonSideEffects: [
        "Nausea",
        "Diarrhea",
        "Constipation",
        "Vomiting",
        "Abdominal discomfort",
      ],
    },
    seoBody: [
      {
        type: "paragraph",
        text: "Semaglutide has rapidly become one of the most-discussed weight-management treatments in the United States. As demand has grown, dozens of telehealth companies have launched programs that connect patients with licensed clinicians who can evaluate, prescribe and monitor GLP-1 treatment entirely online. The result is more access — but also more noise. This comparison cuts through it.",
      },
      {
        type: "heading",
        text: "How telehealth semaglutide programs work",
      },
      {
        type: "paragraph",
        text: "Most programs follow a similar path: you complete an online health questionnaire, a licensed clinician reviews your eligibility, and — if appropriate — a prescription is issued and the medication is shipped to your door. Ongoing care typically includes dose adjustments, side-effect management and, with the better providers, coaching or registered-dietitian support. The differences that matter are in the details: who provides the clinical oversight, what medication you actually receive, and what you pay all-in.",
      },
      {
        type: "heading",
        text: "Brand-name versus compounded semaglutide",
      },
      {
        type: "paragraph",
        text: "One of the most important distinctions between providers is whether they dispense FDA-approved brand-name semaglutide or a compounded formulation prepared by a licensed compounding pharmacy. Brand-name products carry full FDA approval and may be partially covered by insurance. Compounded semaglutide is often less expensive and paid out of pocket, but it is not an FDA-approved finished product. Neither option is universally 'better' — the right choice depends on your circumstances, and it is a decision to make with a licensed clinician.",
      },
      {
        type: "heading",
        text: "What to look for in a provider",
      },
      {
        type: "list",
        items: [
          "Genuine clinical oversight from licensed prescribers, not just a questionnaire.",
          "Transparent, all-in pricing — the monthly cost should include the medication, clinician visits and shipping.",
          "A clear statement of whether you receive brand-name or compounded medication.",
          "Responsive support for side effects and dose questions between visits.",
          "A straightforward cancellation policy with no long lock-in.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every provider on this page is scored against the same weighted criteria — clinical oversight, treatment options, pricing transparency, customer experience and support. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off on the content before it is published. The ranking is refreshed at least every 90 days, and immediately whenever a provider changes its pricing or program. Use it as a starting point for an informed conversation with a clinician — not as a substitute for medical advice.",
      },
    ],
  },
  {
    slug: "mens-health",
    title: "Men's Health",
    shortName: "Men's Health",
    icon: "mens-health",
    tileDescription: "ED, hair loss, TRT and everyday care",
    heroHeadline: "Compare Men's Health Telehealth Providers 2026",
    heroIntro:
      "Compare the leading all-in-one telehealth platforms for men's health — covering ED, hair loss, testosterone support, mental health and everyday primary care — on clinical oversight, pricing transparency and breadth of treatment.",
    metaTitle: "Compare Men's Health Telehealth Providers 2026",
    metaDescription:
      "Compare the best telehealth men's health providers for 2026. Independent, medically reviewed rankings on clinical oversight, treatment range, pricing and support.",
    rankingMethodology: [
      "Clinical oversight — licensed prescribers and genuine ongoing supervision.",
      "Treatment breadth — how many men's health concerns one membership covers.",
      "Pricing transparency — clear all-in cost with no hidden fees.",
      "Customer experience — onboarding, discreet shipping and support quality.",
      "Privacy & flexibility — confidential care and a fair cancellation policy.",
    ],
    faqSlugs: [
      "mens-health-what-covered",
      "mens-health-online-legit",
      "mens-health-cost",
      "mens-health-privacy",
      "mens-health-prescription",
      "mens-health-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 2,
    seoBody: [
      {
        type: "paragraph",
        text: "Telehealth has reshaped how American men access routine care. A single online membership can now connect you with a licensed clinician for concerns that once required separate appointments — erectile dysfunction, hair loss, low-energy and testosterone questions, mental health, skincare and general primary care. The convenience is real, but so is the variation between platforms. This comparison weighs the providers on what actually matters.",
      },
      {
        type: "heading",
        text: "How online men's health platforms work",
      },
      {
        type: "paragraph",
        text: "Most platforms follow a similar model: you complete an online health intake, a licensed clinician reviews it, and — where clinically appropriate — a treatment plan is issued and any medication is shipped discreetly to your door. Ongoing care typically includes messaging with the care team, dose or plan adjustments, and refills. The better platforms make the clinical relationship genuine rather than transactional, and are transparent about what each membership does and does not include.",
      },
      {
        type: "heading",
        text: "What one membership can — and cannot — cover",
      },
      {
        type: "paragraph",
        text: "Breadth is a major differentiator. Some providers focus narrowly on a single concern, while others bundle ED, hair loss, testosterone support and mental health under one account. Broader is not automatically better: a focused provider may offer deeper expertise in its niche. Consider which concerns you actually want addressed, and remember that any prescription treatment depends on a clinician determining that it is appropriate for you.",
      },
      {
        type: "heading",
        text: "What to look for in a provider",
      },
      {
        type: "list",
        items: [
          "Genuine clinical oversight from licensed prescribers, not just an online form.",
          "Transparent pricing — the cost should clearly state what the membership and any medication include.",
          "Discreet, clearly labeled shipping and confidential handling of your health data.",
          "Responsive support for questions about side effects, dosing or your treatment plan.",
          "A straightforward cancellation policy with no long lock-in.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every provider on this page is scored against the same weighted criteria — clinical oversight, treatment breadth, pricing transparency, customer experience and privacy. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. Treatment outcomes vary between individuals, and side effects are possible with any medication — use this page to start an informed conversation with a clinician, not as a substitute for medical advice.",
      },
    ],
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    shortName: "Women's Health",
    icon: "womens-health",
    tileDescription: "Birth control, menopause care and wellness",
    heroHeadline: "Compare Women's Health Telehealth Providers 2026",
    heroIntro:
      "Compare the leading telehealth platforms for women's health — birth control, menopause and hormone care, mental health and everyday primary care — on clinical oversight, pricing transparency and breadth of care.",
    metaTitle: "Compare Women's Health Telehealth Providers 2026",
    metaDescription:
      "Compare the best telehealth women's health providers for 2026. Independent, medically reviewed rankings on clinical oversight, treatment range, pricing and support.",
    rankingMethodology: [
      "Clinical oversight — licensed prescribers and genuine ongoing supervision.",
      "Treatment breadth — birth control, menopause care, mental health and more.",
      "Pricing transparency — clear all-in cost with no hidden fees.",
      "Customer experience — onboarding, discreet shipping and support quality.",
      "Privacy & flexibility — confidential care and a fair cancellation policy.",
    ],
    faqSlugs: [
      "womens-health-what-covered",
      "womens-health-birth-control-online",
      "womens-health-cost",
      "womens-health-insurance",
      "womens-health-prescription",
      "womens-health-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 3,
    seoBody: [
      {
        type: "paragraph",
        text: "Telehealth has made many aspects of women's health markedly more accessible — from getting a birth-control prescription without a clinic visit to discussing menopause symptoms with a clinician from home. A growing number of platforms now bundle these services together. As with any health decision, the right provider depends on your needs, and this comparison weighs them on the factors that matter most.",
      },
      {
        type: "heading",
        text: "How online women's health platforms work",
      },
      {
        type: "paragraph",
        text: "Most platforms follow a similar path: you complete an online health questionnaire, a licensed clinician reviews your information, and — where clinically appropriate — a prescription or treatment plan is issued and any medication is shipped to your door. Many providers offer ongoing messaging with the care team for follow-up questions, refills and adjustments. The strongest platforms pair that convenience with genuine clinical depth.",
      },
      {
        type: "heading",
        text: "Birth control, menopause and hormone care online",
      },
      {
        type: "paragraph",
        text: "Online birth-control services can prescribe many contraceptive options after a clinician reviews your health history, though not every method is suitable for every person — a clinician makes that determination. Menopause and perimenopause care, including hormone therapy where appropriate, is increasingly available by telehealth as well. Hormone therapy carries both benefits and risks that depend on your individual health profile, so it is a decision to make with a licensed clinician.",
      },
      {
        type: "heading",
        text: "What to look for in a provider",
      },
      {
        type: "list",
        items: [
          "Genuine clinical oversight from licensed prescribers, not just an online form.",
          "Transparent pricing — clear on what the consultation and any medication cost.",
          "A clear statement of which services are and are not included.",
          "Responsive support for follow-up questions, side effects and refills.",
          "Confidential handling of your health data and a fair cancellation policy.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every provider on this page is scored against the same weighted criteria — clinical oversight, treatment breadth, pricing transparency, customer experience and privacy. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. Outcomes and side effects vary between individuals — use this page to start an informed conversation with a clinician, not as a substitute for medical advice.",
      },
    ],
  },
  {
    slug: "ed",
    title: "Erectile Dysfunction",
    shortName: "ED",
    icon: "ed",
    tileDescription: "Sildenafil, tadalafil and ED care",
    heroHeadline: "Compare ED Treatment Providers 2026",
    heroIntro:
      "Compare the leading telehealth providers for erectile dysfunction — covering sildenafil, tadalafil and other clinician-prescribed options — on clinical oversight, pricing transparency, discretion and support.",
    metaTitle: "Compare ED Treatment Providers 2026",
    metaDescription:
      "Compare the best telehealth ED treatment providers for 2026. Independent, medically reviewed rankings on clinical oversight, treatment options, pricing and discretion.",
    rankingMethodology: [
      "Clinical oversight — licensed prescribers and a real clinical review.",
      "Treatment options — range of clinician-prescribed ED medications and doses.",
      "Pricing transparency — clear per-dose or monthly cost with no hidden fees.",
      "Discretion — confidential intake and plain, unbranded shipping.",
      "Support & flexibility — responsive care and a fair cancellation policy.",
    ],
    faqSlugs: [
      "ed-what-causes",
      "ed-online-treatment-work",
      "ed-sildenafil-vs-tadalafil",
      "ed-cost",
      "ed-side-effects",
      "ed-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 4,
    drugFacts: {
      genericName: "Sildenafil / Tadalafil",
      brandNames: ["Viagra", "Cialis"],
      drugClass: "PDE5 inhibitor",
      administration: "Oral tablet, as directed by a clinician",
      commonSideEffects: [
        "Headache",
        "Flushing",
        "Nasal congestion",
        "Indigestion",
        "Dizziness",
      ],
    },
    seoBody: [
      {
        type: "paragraph",
        text: "Erectile dysfunction is common and very treatable, and telehealth has made evaluation and treatment far more accessible. Dozens of online providers now connect men with licensed clinicians who can assess symptoms, identify possible causes and — where appropriate — prescribe medication discreetly. This comparison weighs those providers on the criteria that matter rather than on marketing claims.",
      },
      {
        type: "heading",
        text: "How online ED treatment works",
      },
      {
        type: "paragraph",
        text: "Most providers follow a similar path: you complete a confidential online health questionnaire, a licensed clinician reviews it, and — if a prescription treatment is appropriate — it is issued and shipped in plain packaging. ED can have underlying medical causes, so a genuine clinical review matters. The better providers also offer ongoing messaging so you can ask about dosing, side effects or switching medications.",
      },
      {
        type: "heading",
        text: "Sildenafil and tadalafil explained",
      },
      {
        type: "paragraph",
        text: "The most commonly prescribed ED medications are PDE5 inhibitors. Sildenafil — the active ingredient in Viagra® — typically works for several hours, while tadalafil — the active ingredient in Cialis® — can last considerably longer and is sometimes prescribed as a low daily dose. Generic versions of both are widely available. Which option, dose and schedule is appropriate is a clinical decision, and these medications are not safe for everyone, particularly people taking nitrates.",
      },
      {
        type: "heading",
        text: "What to look for in a provider",
      },
      {
        type: "list",
        items: [
          "A genuine clinical review by a licensed prescriber, not just a checkout form.",
          "A clear choice of clinician-prescribed medications and doses.",
          "Transparent pricing — you should know the per-dose or monthly cost upfront.",
          "Discreet, plainly labeled shipping and confidential data handling.",
          "Responsive support and a straightforward cancellation policy.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every provider on this page is scored against the same weighted criteria — clinical oversight, treatment options, pricing transparency, discretion and support. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. Individual results vary and side effects are possible — use this page to start an informed conversation with a clinician, not as a substitute for medical advice.",
      },
    ],
  },
  {
    slug: "hair-loss",
    title: "Hair Loss",
    shortName: "Hair Loss",
    icon: "hair-loss",
    tileDescription: "Finasteride, minoxidil and regrowth",
    heroHeadline: "Compare Hair Loss Treatment Providers 2026",
    heroIntro:
      "Compare the leading telehealth providers for hair-loss treatment — covering finasteride, minoxidil and clinician-prescribed regrowth plans — on clinical oversight, pricing transparency and support.",
    metaTitle: "Compare Hair Loss Treatment Providers 2026",
    metaDescription:
      "Compare the best telehealth hair-loss providers for 2026. Independent, medically reviewed rankings on clinical oversight, treatment options, pricing and support.",
    rankingMethodology: [
      "Clinical oversight — licensed prescribers reviewing your suitability.",
      "Treatment options — finasteride, minoxidil and combination regrowth plans.",
      "Pricing transparency — clear all-in monthly cost with no hidden fees.",
      "Customer experience — onboarding, discreet shipping and support quality.",
      "Support & flexibility — responsive care and a fair cancellation policy.",
    ],
    faqSlugs: [
      "hair-loss-what-causes",
      "hair-loss-finasteride-minoxidil",
      "hair-loss-online-work",
      "hair-loss-cost",
      "hair-loss-side-effects",
      "hair-loss-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 5,
    drugFacts: {
      genericName: "Finasteride / Minoxidil",
      brandNames: ["Propecia", "Rogaine"],
      drugClass: "5-alpha reductase inhibitor / vasodilator",
      administration: "Oral tablet and/or topical solution, as directed",
      commonSideEffects: [
        "Scalp irritation (topical minoxidil)",
        "Temporary increased shedding when starting",
        "Reduced libido (finasteride, uncommon)",
        "Unwanted facial hair growth (topical minoxidil)",
      ],
    },
    seoBody: [
      {
        type: "paragraph",
        text: "Male-pattern hair loss affects a large share of men, often beginning in their twenties or thirties. Telehealth has made evidence-based treatment easy to start: online providers connect you with a licensed clinician who can assess your pattern of loss and — where appropriate — prescribe medication delivered to your door. This comparison weighs those providers on clinical quality, treatment range and value.",
      },
      {
        type: "heading",
        text: "How online hair-loss treatment works",
      },
      {
        type: "paragraph",
        text: "Most providers follow a similar path: you submit photos and complete a health questionnaire, a licensed clinician reviews your suitability, and — if appropriate — a treatment plan is issued and shipped. Hair-loss treatment works best when started early and used consistently, and results typically take several months to become visible. The better providers offer ongoing check-ins so a clinician can monitor progress and adjust the plan.",
      },
      {
        type: "heading",
        text: "Finasteride and minoxidil explained",
      },
      {
        type: "paragraph",
        text: "The two most studied hair-loss treatments are finasteride and minoxidil. Finasteride — the active ingredient in Propecia® — is an oral prescription medication that addresses a hormonal driver of male-pattern hair loss. Minoxidil — the active ingredient in Rogaine® — is a topical treatment that can support regrowth, and is also used in oral form under clinician supervision in some cases. Many providers prescribe them together. Effectiveness and side effects vary between individuals, and a clinician determines what is appropriate for you. Finasteride is not appropriate for women who are or may become pregnant.",
      },
      {
        type: "heading",
        text: "What to look for in a provider",
      },
      {
        type: "list",
        items: [
          "A genuine clinical review of your suitability by a licensed prescriber.",
          "A clear choice of treatments — oral, topical or combination plans.",
          "Transparent, all-in monthly pricing with no hidden fees.",
          "Discreet shipping and a clear cancellation policy.",
          "Ongoing check-ins so progress can be monitored over time.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every provider on this page is scored against the same weighted criteria — clinical oversight, treatment options, pricing transparency, customer experience and support. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. Results are not guaranteed and side effects are possible — use this page to start an informed conversation with a clinician, not as a substitute for medical advice.",
      },
    ],
  },
  {
    slug: "skin",
    title: "Skin & Dermatology",
    shortName: "Skin",
    icon: "skin",
    tileDescription: "Acne, anti-aging and prescription skincare",
    heroHeadline: "Compare Online Dermatology Providers 2026",
    heroIntro:
      "Compare the leading telehealth dermatology providers — covering acne, anti-aging, rosacea and prescription skincare — on clinical oversight, treatment quality, pricing transparency and support.",
    metaTitle: "Compare Online Dermatology Providers 2026",
    metaDescription:
      "Compare the best telehealth dermatology and skincare providers for 2026. Independent, medically reviewed rankings on clinical oversight, treatments, pricing and support.",
    rankingMethodology: [
      "Clinical oversight — licensed dermatology providers reviewing your case.",
      "Treatment quality — evidence-based prescription formulas and clear plans.",
      "Pricing transparency — clear all-in monthly cost with no hidden fees.",
      "Customer experience — onboarding, photo intake and support quality.",
      "Support & flexibility — responsive care and a fair cancellation policy.",
    ],
    faqSlugs: [
      "skin-what-treated-online",
      "skin-online-derm-work",
      "skin-prescription-skincare",
      "skin-cost",
      "skin-results-time",
      "skin-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 6,
    seoBody: [
      {
        type: "paragraph",
        text: "Online dermatology has grown quickly, and for good reason: many common skin concerns can be assessed effectively from clear photos and a health history. Telehealth providers connect you with licensed clinicians who can evaluate acne, anti-aging concerns, rosacea and more, and — where appropriate — prescribe treatment. This comparison weighs those providers on clinical quality and value.",
      },
      {
        type: "heading",
        text: "How online dermatology works",
      },
      {
        type: "paragraph",
        text: "Most providers follow a similar path: you upload photos of your skin and complete a questionnaire, a licensed clinician reviews your case, and — if appropriate — a personalized prescription plan is formulated and shipped. Many services offer ongoing messaging so a clinician can fine-tune your formula over time. Telehealth dermatology is well suited to common, visible concerns; some conditions still warrant an in-person exam.",
      },
      {
        type: "heading",
        text: "Prescription skincare explained",
      },
      {
        type: "paragraph",
        text: "Many online dermatology providers offer customized prescription formulas that combine clinician-selected active ingredients — for example tretinoin for anti-aging and acne, or treatments for rosacea and pigmentation. These are prescription products that a licensed clinician determines are appropriate for your skin. Active ingredients can cause irritation, dryness or increased sun sensitivity, especially early on, and results typically build gradually over weeks to months.",
      },
      {
        type: "heading",
        text: "What to look for in a provider",
      },
      {
        type: "list",
        items: [
          "A genuine review of your case by a licensed dermatology provider.",
          "Evidence-based, clearly explained prescription treatment plans.",
          "Transparent, all-in monthly pricing with no hidden fees.",
          "Ongoing messaging so your formula can be adjusted over time.",
          "Discreet shipping and a straightforward cancellation policy.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every provider on this page is scored against the same weighted criteria — clinical oversight, treatment quality, pricing transparency, customer experience and support. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. Results and skin reactions vary between individuals — use this page to start an informed conversation with a clinician, not as a substitute for medical advice.",
      },
    ],
  },
  {
    slug: "sexual-health",
    title: "Sexual Health",
    shortName: "Sexual Health",
    icon: "sexual-health",
    tileDescription: "STI testing, PrEP and intimate care",
    heroHeadline: "Compare Sexual Health Services 2026",
    heroIntro:
      "Compare the leading telehealth sexual-health services — covering at-home STI testing, PrEP access and confidential clinical care — on accuracy, clinical oversight, pricing transparency and discretion.",
    metaTitle: "Compare Sexual Health Services 2026",
    metaDescription:
      "Compare the best telehealth sexual-health services for 2026. Independent, medically reviewed rankings on testing, PrEP access, clinical oversight and discretion.",
    rankingMethodology: [
      "Clinical oversight — licensed clinicians and CLIA-certified lab partners.",
      "Service range — STI testing panels, PrEP access and follow-up treatment.",
      "Pricing transparency — clear all-in cost with no hidden fees.",
      "Discretion — confidential intake, plain packaging and private results.",
      "Support & flexibility — responsive care and clear follow-up pathways.",
    ],
    faqSlugs: [
      "sexual-health-what-services",
      "sexual-health-sti-testing-accuracy",
      "sexual-health-prep-online",
      "sexual-health-cost",
      "sexual-health-privacy",
      "sexual-health-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 7,
    seoBody: [
      {
        type: "paragraph",
        text: "Sexual health is a routine part of overall health, and telehealth has made it far easier to take care of discreetly. Online services now offer at-home STI testing, access to PrEP for HIV prevention, and confidential consultations with licensed clinicians. This comparison weighs those services on testing quality, clinical oversight and value.",
      },
      {
        type: "heading",
        text: "How online sexual-health services work",
      },
      {
        type: "paragraph",
        text: "At-home STI testing services ship a collection kit; you provide the sample and mail it to a partner laboratory, then receive results privately online. PrEP services connect you with a licensed clinician who reviews your eligibility, orders required lab work and — if appropriate — prescribes PrEP, with ongoing monitoring. The better services make clinical follow-up easy if a result needs attention.",
      },
      {
        type: "heading",
        text: "STI testing and PrEP explained",
      },
      {
        type: "paragraph",
        text: "Reputable at-home STI tests are processed by CLIA-certified laboratories, and many are highly accurate when samples are collected correctly. No test is perfect, however, and timing relative to potential exposure matters — a clinician can advise on when and what to test for. PrEP is a clinician-prescribed medication taken to reduce the risk of HIV; it requires baseline and periodic lab testing and does not protect against other STIs. Eligibility and suitability are always determined by a licensed clinician.",
      },
      {
        type: "heading",
        text: "What to look for in a provider",
      },
      {
        type: "list",
        items: [
          "Testing processed by CLIA-certified laboratories with clear accuracy information.",
          "A licensed clinician available to interpret results and arrange treatment.",
          "Transparent pricing — you should know the all-in cost before ordering.",
          "Discreet, plainly labeled packaging and private, secure results delivery.",
          "Clear follow-up pathways if a result needs medical attention.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every provider on this page is scored against the same weighted criteria — clinical oversight, service range, pricing transparency, discretion and support. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. Testing and treatment decisions should always be made with a licensed clinician — this page is a starting point, not medical advice.",
      },
    ],
  },
  {
    slug: "blood-testing",
    title: "Blood Testing",
    shortName: "Blood Testing",
    icon: "blood-testing",
    tileDescription: "At-home lab kits and biomarker panels",
    heroHeadline: "Compare At-Home Blood Testing Services 2026",
    heroIntro:
      "Compare the leading at-home blood testing and biomarker services — covering general wellness panels, hormone testing and chronic-condition monitoring — on lab accreditation, panel depth, pricing and clinical follow-up.",
    metaTitle: "Compare At-Home Blood Testing Services 2026",
    metaDescription:
      "Compare the best at-home blood testing services for 2026. Independent, medically reviewed rankings on lab accreditation, panel depth, pricing and clinical follow-up.",
    rankingMethodology: [
      "Lab accreditation — testing processed by CLIA-certified, accredited labs.",
      "Panel depth — range of biomarkers and the relevance of what is measured.",
      "Pricing transparency — clear per-panel or subscription cost, no hidden fees.",
      "Clinical follow-up — clinician review and guidance on what results mean.",
      "Customer experience — sample collection, turnaround and report clarity.",
    ],
    faqSlugs: [
      "blood-testing-how-works",
      "blood-testing-accuracy",
      "blood-testing-what-panels",
      "blood-testing-cost",
      "blood-testing-doctor-review",
      "blood-testing-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 8,
    seoBody: [
      {
        type: "paragraph",
        text: "At-home blood testing has made it easier to track key health markers without a clinic visit. Services now offer everything from broad wellness panels to focused hormone or metabolic testing, processed by accredited laboratories. Used thoughtfully — and ideally alongside a clinician — these tests can support a clearer picture of your health. This comparison weighs the services on accuracy, depth and follow-up.",
      },
      {
        type: "heading",
        text: "How at-home blood testing works",
      },
      {
        type: "paragraph",
        text: "Most services ship a collection kit to your door. Depending on the panel, you provide a finger-prick sample or visit a partner lab for a standard blood draw, then return the sample for processing. Results are delivered through a secure online dashboard, often within days. The better services pair results with clinician review so you understand what the numbers mean and what, if anything, to do next.",
      },
      {
        type: "heading",
        text: "Choosing the right panel",
      },
      {
        type: "paragraph",
        text: "Panels range from general wellness checks — cholesterol, blood sugar, vitamin levels — to targeted hormone, thyroid or metabolic testing. More biomarkers is not automatically better; the most useful panel is the one matched to your health questions and history. At-home testing is a screening and tracking tool, not a diagnosis. Abnormal results should always be discussed with a licensed clinician, who can confirm findings and recommend any next steps.",
      },
      {
        type: "heading",
        text: "What to look for in a service",
      },
      {
        type: "list",
        items: [
          "Samples processed by CLIA-certified, accredited laboratories.",
          "Clear information on which biomarkers each panel measures.",
          "Clinician review or guidance to help interpret your results.",
          "Transparent per-panel or subscription pricing with no hidden fees.",
          "Secure, private results delivery and a clear data-handling policy.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every service on this page is scored against the same weighted criteria — lab accreditation, panel depth, pricing transparency, clinical follow-up and customer experience. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. At-home testing supports, but does not replace, care from a licensed clinician — use this page as a starting point, not as medical advice.",
      },
    ],
  },
  {
    slug: "wellness",
    title: "Advanced Wellness",
    shortName: "Wellness",
    icon: "wellness",
    tileDescription: "Longevity, sleep and metabolic health",
    heroHeadline: "Compare Advanced Wellness Programs 2026",
    heroIntro:
      "Compare the leading telehealth wellness and longevity programs — covering metabolic health, sleep, energy and preventive care — on clinical oversight, evidence-based methods, pricing transparency and support.",
    metaTitle: "Compare Advanced Wellness Programs 2026",
    metaDescription:
      "Compare the best telehealth wellness and longevity programs for 2026. Independent, medically reviewed rankings on clinical oversight, methods, pricing and support.",
    rankingMethodology: [
      "Clinical oversight — licensed clinicians guiding the program, not just an app.",
      "Evidence-based methods — programs grounded in established health science.",
      "Pricing transparency — clear membership cost and what it includes.",
      "Customer experience — onboarding, coaching quality and support.",
      "Personalization — plans matched to your data, goals and health history.",
    ],
    faqSlugs: [
      "wellness-what-programs-cover",
      "wellness-longevity-evidence",
      "wellness-clinician-involved",
      "wellness-cost",
      "wellness-vs-primary-care",
      "wellness-choose-provider",
    ],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 9,
    seoBody: [
      {
        type: "paragraph",
        text: "Advanced wellness and longevity programs have become one of the fastest-growing corners of telehealth. They promise a more proactive, data-driven approach to health — combining lab testing, lifestyle coaching and, in some cases, clinician-prescribed care. The category also varies widely in rigor, so it pays to compare carefully. This page weighs programs on clinical credibility and value.",
      },
      {
        type: "heading",
        text: "How advanced wellness programs work",
      },
      {
        type: "paragraph",
        text: "Most programs start with an assessment — often a health questionnaire and lab panel — and then build a personalized plan covering areas such as metabolic health, sleep, fitness, nutrition and stress. Ongoing coaching and periodic retesting help track progress. The strongest programs involve licensed clinicians in meaningful oversight rather than relying on coaching alone, and are honest about what the evidence does and does not support.",
      },
      {
        type: "heading",
        text: "Evaluating longevity claims",
      },
      {
        type: "paragraph",
        text: "\"Longevity\" and \"optimization\" are popular marketing terms, and the science behind them is still developing. Well-established fundamentals — sleep, physical activity, nutrition, not smoking and managing key health markers — have strong evidence. More speculative interventions do not, and no program can promise a longer life or guaranteed results. A credible provider distinguishes evidence-based recommendations from experimental ones and keeps a licensed clinician involved in decisions.",
      },
      {
        type: "heading",
        text: "What to look for in a program",
      },
      {
        type: "list",
        items: [
          "Genuine clinical oversight from licensed clinicians, not coaching alone.",
          "Recommendations grounded in established health evidence.",
          "Transparent membership pricing — clear on what is and is not included.",
          "Personalization based on your lab data, history and goals.",
          "Honest communication about what the program can realistically deliver.",
        ],
      },
      {
        type: "heading",
        text: "How we built this ranking",
      },
      {
        type: "paragraph",
        text: "Every program on this page is scored against the same weighted criteria — clinical oversight, evidence-based methods, pricing transparency, customer experience and personalization. We apply the methodology identically to advertising partners and non-partners, and a licensed medical reviewer signs off before publication. The ranking is refreshed at least every 90 days. A wellness program complements, but does not replace, primary care from a licensed clinician — use this page as a starting point, not as medical advice.",
      },
    ],
  },
];

/** All category slugs — used for static params and sitemap. */
export const categorySlugs = categories.map((c) => c.slug);

/** Look up a category by slug. */
export function getCategory(slug: string): TreatmentCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Categories sorted by display order. */
export const orderedCategories = [...categories].sort(
  (a, b) => a.order - b.order,
);
