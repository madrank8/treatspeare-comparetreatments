import type { Author } from "@/types";

/**
 * Sample author / medical-reviewer data. Sample content only — names,
 * credentials and links are illustrative.
 */
export const authors: Author[] = [
  {
    slug: "dr-elena-marsh",
    name: "Dr. Elena Marsh",
    role: "medical-reviewer",
    credentials: "MD, MPH",
    jobTitle: "Board-Certified Family Physician",
    initials: "EM",
    shortBio:
      "Dr. Marsh is a board-certified family physician with over 14 years treating patients in primary and metabolic care. She reviews our weight-loss content for clinical accuracy.",
    licensure: ["Licensed in CA", "Licensed in NY", "Licensed in TX"],
    affiliations: [
      "American Academy of Family Physicians",
      "The Obesity Society",
    ],
    yearsExperience: 14,
    sameAs: [
      "https://www.linkedin.com/in/example-elena-marsh",
      "https://npiregistry.cms.hhs.gov/",
    ],
  },
  {
    slug: "james-okafor",
    name: "James Okafor",
    role: "editor",
    credentials: "MS",
    jobTitle: "Senior Health Editor",
    initials: "JO",
    shortBio:
      "James leads editorial standards at CompareTreatments. He has spent a decade covering consumer health, telehealth and digital pharmacy.",
    affiliations: ["Association of Health Care Journalists"],
    yearsExperience: 10,
    sameAs: ["https://www.linkedin.com/in/example-james-okafor"],
  },
];

/** Look up an author by slug. */
export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
