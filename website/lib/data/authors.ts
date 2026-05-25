import type { Author } from "@/types";

/**
 * Sample author / medical-reviewer data. Sample content only — these
 * are illustrative, professional sample people created for this
 * demonstration build. Names, credentials, licensure and links do not
 * represent specific real individuals.
 *
 * Every author or medical reviewer referenced anywhere in
 * `lib/data/reviews.ts` has a complete profile here, so the byline
 * links on review pages always resolve to a real `/authors/[slug]`
 * page — a key E-E-A-T signal for this YMYL health site.
 */
export const authors: Author[] = [
  {
    slug: "dr-elena-marsh",
    name: "Dr. Elena Marsh",
    role: "medical-reviewer",
    credentials: "MD, MPH",
    jobTitle: "Board-Certified Family Physician",
    initials: "EM",
    bio: "Dr. Elena Marsh is a board-certified family physician with more than 14 years of experience in primary and metabolic care. After completing her residency in family medicine, she spent much of her career helping patients manage weight, diabetes and cardiometabolic risk, and she developed a particular interest in the safe, evidence-based use of GLP-1 medications. She holds a Master of Public Health and has worked on community health programs focused on obesity prevention. At CompareTreatments she reviews weight-loss content for clinical accuracy, ensuring that every claim is balanced, current and clearly distinguishes FDA-approved products from compounded alternatives. She is committed to clear, jargon-free health information that helps people make informed decisions with their own clinicians.",
    shortBio:
      "Dr. Marsh is a board-certified family physician with over 14 years treating patients in primary and metabolic care. She reviews our weight-loss content for clinical accuracy.",
    licensure: ["Licensed in CA", "Licensed in NY", "Licensed in TX"],
    education: [
      "MD, University of California, San Francisco School of Medicine",
      "MPH, Johns Hopkins Bloomberg School of Public Health",
      "Residency in Family Medicine, UCSF Medical Center",
    ],
    affiliations: [
      "American Academy of Family Physicians",
      "The Obesity Society",
    ],
    yearsExperience: 14,
    sameAs: [
      "https://www.linkedin.com/in/example-elena-marsh",
      "https://npiregistry.cms.hhs.gov/provider-view/example-elena-marsh",
    ],
  },
  {
    slug: "james-okafor",
    name: "James Okafor",
    role: "editor",
    credentials: "MS",
    jobTitle: "Senior Health Editor",
    initials: "JO",
    bio: "James Okafor is the Senior Health Editor at CompareTreatments, where he leads editorial standards and oversees the review process across every category. He holds a Master of Science in health communication and has spent more than a decade covering consumer health, telehealth and digital pharmacy for national publications. James built the editorial framework that keeps our reviews independent, evidence-based and free of unsubstantiated health claims. He works closely with the medical review team to make sure each article is fact-checked, properly sourced and re-reviewed on schedule. His focus is on producing health content that is genuinely useful, transparent about affiliate relationships and easy for everyday readers to act on.",
    shortBio:
      "James leads editorial standards at CompareTreatments. He has spent a decade covering consumer health, telehealth and digital pharmacy.",
    education: [
      "MS, Health Communication, Northwestern University",
      "BA, Journalism, University of Missouri",
    ],
    affiliations: ["Association of Health Care Journalists"],
    yearsExperience: 10,
    sameAs: ["https://www.linkedin.com/in/example-james-okafor"],
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    role: "writer",
    credentials: "MS, RD",
    jobTitle: "Health Writer & Registered Dietitian",
    initials: "PR",
    bio: "Priya Raman is a registered dietitian and health writer who covers metabolic health, GLP-1 treatments and the telehealth industry for CompareTreatments. She earned a Master of Science in clinical nutrition and completed a dietetic internship in an outpatient weight-management setting, where she counseled patients on nutrition alongside medical treatment. Priya writes our weight-loss brand reviews, combining hands-on clinical nutrition experience with careful research into how each telehealth program actually works. She is meticulous about the distinction between brand-name and compounded medication and about hedging outcomes responsibly. Her goal is to give readers a clear, honest picture of each provider so they can have a more informed conversation with a licensed clinician.",
    shortBio:
      "Priya is a registered dietitian and health writer who covers metabolic health, GLP-1 treatments and telehealth. She writes our weight-loss brand reviews.",
    licensure: ["Registered Dietitian (RD), Commission on Dietetic Registration"],
    education: [
      "MS, Clinical Nutrition, New York University",
      "Dietetic Internship, Tufts Medical Center",
      "BS, Nutritional Sciences, Cornell University",
    ],
    affiliations: ["Academy of Nutrition and Dietetics"],
    yearsExperience: 8,
    sameAs: ["https://www.linkedin.com/in/example-priya-raman"],
  },
  {
    slug: "dr-marcus-bell",
    name: "Dr. Marcus Bell",
    role: "medical-reviewer",
    credentials: "MD",
    jobTitle: "Board-Certified Internal Medicine Physician",
    initials: "MB",
    bio: "Dr. Marcus Bell is a board-certified internal medicine physician with more than 12 years of clinical experience in primary and metabolic care. He completed his internal medicine residency at a large academic medical center and has since focused on chronic disease management, including obesity, type 2 diabetes and cardiovascular risk reduction. Dr. Bell has a strong interest in telehealth and the responsible prescribing of GLP-1 medications, and he has seen first-hand how access and clinical oversight vary across virtual-care providers. At CompareTreatments he reviews brand reviews for clinical accuracy, checking that descriptions of treatment, side effects and regulatory status are correct and appropriately cautious. He believes good health content should empower patients without ever substituting for personalized medical advice.",
    shortBio:
      "Dr. Bell is a board-certified internal medicine physician with more than 12 years of clinical experience in primary and metabolic care. He reviews our brand reviews for clinical accuracy.",
    licensure: ["Licensed in FL", "Licensed in IL", "Licensed in WA"],
    education: [
      "MD, Northwestern University Feinberg School of Medicine",
      "Residency in Internal Medicine, University of Washington Medical Center",
    ],
    affiliations: [
      "American College of Physicians",
      "The Obesity Society",
    ],
    yearsExperience: 12,
    sameAs: [
      "https://www.linkedin.com/in/example-marcus-bell",
      "https://npiregistry.cms.hhs.gov/provider-view/example-marcus-bell",
    ],
  },
];

/** Look up an author by slug. */
export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
