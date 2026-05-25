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
];

/** Look up FAQs by slug, preserving the requested order. */
export function getFaqs(slugs: string[]): FAQ[] {
  return slugs
    .map((slug) => faqs.find((f) => f.slug === slug))
    .filter((f): f is FAQ => Boolean(f));
}
