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
];

/** Look up FAQs by slug, preserving the requested order. */
export function getFaqs(slugs: string[]): FAQ[] {
  return slugs
    .map((slug) => faqs.find((f) => f.slug === slug))
    .filter((f): f is FAQ => Boolean(f));
}
