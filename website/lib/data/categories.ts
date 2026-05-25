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
    heroHeadline: "Compare Men's Health Treatments 2026",
    heroIntro:
      "Independent comparisons of telehealth providers for men's health concerns.",
    metaTitle: "Compare Men's Health Treatments 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best telehealth men's health providers for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 2,
    seoBody: [],
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    shortName: "Women's Health",
    icon: "womens-health",
    tileDescription: "Birth control, HRT and wellness",
    heroHeadline: "Compare Women's Health Treatments 2026",
    heroIntro:
      "Independent comparisons of telehealth providers for women's health concerns.",
    metaTitle: "Compare Women's Health Treatments 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best telehealth women's health providers for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 3,
    seoBody: [],
  },
  {
    slug: "ed",
    title: "Erectile Dysfunction",
    shortName: "ED",
    icon: "ed",
    tileDescription: "Sildenafil, tadalafil and ED care",
    heroHeadline: "Compare ED Treatments 2026",
    heroIntro:
      "Independent comparisons of telehealth providers for erectile dysfunction.",
    metaTitle: "Compare ED Treatments 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best telehealth ED treatment providers for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 4,
    seoBody: [],
  },
  {
    slug: "hair-loss",
    title: "Hair Loss",
    shortName: "Hair Loss",
    icon: "hair-loss",
    tileDescription: "Finasteride, minoxidil and regrowth",
    heroHeadline: "Compare Hair Loss Treatments 2026",
    heroIntro:
      "Independent comparisons of telehealth providers for hair-loss treatment.",
    metaTitle: "Compare Hair Loss Treatments 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best telehealth hair-loss providers for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 5,
    seoBody: [],
  },
  {
    slug: "skin",
    title: "Skin & Dermatology",
    shortName: "Skin",
    icon: "skin",
    tileDescription: "Acne, anti-aging and prescription skincare",
    heroHeadline: "Compare Skin & Dermatology Treatments 2026",
    heroIntro:
      "Independent comparisons of telehealth dermatology and skincare providers.",
    metaTitle: "Compare Skin & Dermatology Treatments 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best telehealth dermatology providers for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 6,
    seoBody: [],
  },
  {
    slug: "sexual-health",
    title: "Sexual Health",
    shortName: "Sexual Health",
    icon: "sexual-health",
    tileDescription: "STI testing, PrEP and intimate care",
    heroHeadline: "Compare Sexual Health Services 2026",
    heroIntro:
      "Independent comparisons of telehealth sexual-health providers.",
    metaTitle: "Compare Sexual Health Services 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best telehealth sexual-health providers for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 7,
    seoBody: [],
  },
  {
    slug: "blood-testing",
    title: "Blood Testing",
    shortName: "Blood Testing",
    icon: "blood-testing",
    tileDescription: "At-home lab kits and biomarker panels",
    heroHeadline: "Compare At-Home Blood Testing 2026",
    heroIntro:
      "Independent comparisons of at-home blood testing and lab services.",
    metaTitle: "Compare At-Home Blood Testing 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best at-home blood-testing services for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 8,
    seoBody: [],
  },
  {
    slug: "wellness",
    title: "Advanced Wellness",
    shortName: "Wellness",
    icon: "wellness",
    tileDescription: "Longevity, sleep and metabolic health",
    heroHeadline: "Compare Advanced Wellness Programs 2026",
    heroIntro:
      "Independent comparisons of telehealth wellness and longevity programs.",
    metaTitle: "Compare Advanced Wellness Programs 2026",
    metaDescription:
      "Independent, medically reviewed comparisons of the best telehealth wellness programs for 2026.",
    rankingMethodology: [],
    faqSlugs: [],
    medicalReviewerSlug: "dr-elena-marsh",
    lastReviewed: "2026-05-10",
    order: 9,
    seoBody: [],
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
