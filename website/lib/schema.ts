/**
 * Typed JSON-LD schema builders. Generated from the same data the
 * pages render, so structured data can never drift from on-page
 * content (a Google requirement — architecture §8).
 */
import { SITE } from "@/lib/site";
import type {
  Author,
  BrandReview,
  FAQ,
  RankingTable,
  TreatmentCategory,
} from "@/types";
import { getBrand } from "@/lib/data/brands";

type JsonLdObject = Record<string, unknown>;

/** Organization — emitted in the root layout. */
export function buildOrganizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    slogan: SITE.tagline,
  };
}

/** WebSite (with SearchAction) — emitted in the root layout. */
export function buildWebSiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** BreadcrumbList. */
export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

/** ItemList — the ranked offer chart on a comparison page. */
export function buildItemListSchema(
  table: RankingTable,
  category: TreatmentCategory,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.heroHeadline,
    numberOfItems: table.entries.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: table.entries.map((entry) => {
      const brand = getBrand(entry.brandSlug);
      return {
        "@type": "ListItem",
        position: entry.rank,
        name: brand?.name ?? entry.brandSlug,
        url: `${SITE.url}/${category.slug}#${entry.brandSlug}`,
      };
    }),
  };
}

/** FAQPage. */
export function buildFaqSchema(items: FAQ[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** WebPage — a standard informational page (legal / company pages). */
export function buildWebPageSchema(opts: {
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  const url = `${SITE.url}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: opts.name,
    description: opts.description,
    url,
    isPartOf: { "@id": `${SITE.url}/#website` },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

/** MedicalWebPage — the YMYL signal Google's medical guidance rewards. */
export function buildMedicalWebPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  lastReviewed: string;
  reviewerName: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    lastReviewed: opts.lastReviewed,
    reviewedBy: {
      "@type": "Person",
      name: opts.reviewerName,
    },
  };
}

/** Build a Person node from an Author — used as author / reviewedBy. */
function buildPersonNode(author: Author): JsonLdObject {
  const node: JsonLdObject = {
    "@type": "Person",
    name: author.name,
    jobTitle: author.jobTitle,
  };
  if (author.credentials) node.honorificSuffix = author.credentials;
  if (author.sameAs.length > 0) node.sameAs = author.sameAs;
  return node;
}

/**
 * AggregateRating — derived from a brand review's overall score.
 * Scores are on a 0–10 scale.
 */
export function buildAggregateRatingSchema(review: BrandReview): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: review.overallScore,
    bestRating: 10,
    worstRating: 0,
    ratingCount: review.ratingBreakdown.length,
    reviewCount: 1,
  };
}

/**
 * Review — the editorial brand review, with itemReviewed, author and
 * reviewRating. The reviewed entity is modelled as a MedicalBusiness.
 */
export function buildBrandReviewSchema(opts: {
  review: BrandReview;
  brandName: string;
  brandWebsite: string;
  path: string;
  author: Author;
}): JsonLdObject {
  const { review, brandName, brandWebsite, path, author } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${SITE.url}${path}#review`,
    name: review.title,
    url: `${SITE.url}${path}`,
    datePublished: review.datePublished,
    dateModified: review.dateModified,
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: brandName,
      url: brandWebsite,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.overallScore,
      bestRating: 10,
      worstRating: 0,
    },
    author: buildPersonNode(author),
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

/**
 * ProfilePage + Person — the author / medical-reviewer profile page.
 * Emits a full Person node (with sameAs, jobTitle, hasCredential and
 * knowsAbout) wrapped in a ProfilePage, per architecture §8.
 */
export function buildAuthorProfileSchema(opts: {
  author: Author;
  path: string;
}): JsonLdObject {
  const { author, path } = opts;
  const url = `${SITE.url}${path}`;

  const person: JsonLdObject = {
    "@type": "Person",
    "@id": `${url}#person`,
    name: author.name,
    url,
    jobTitle: author.jobTitle,
    description: author.shortBio,
    worksFor: { "@id": `${SITE.url}/#organization` },
  };
  if (author.credentials) person.honorificSuffix = author.credentials;
  if (author.sameAs.length > 0) person.sameAs = author.sameAs;
  if (author.affiliations && author.affiliations.length > 0) {
    person.memberOf = author.affiliations.map((name) => ({
      "@type": "Organization",
      name,
    }));
  }
  if (author.education && author.education.length > 0) {
    person.alumniOf = author.education.map((name) => ({
      "@type": "EducationalOrganization",
      name,
    }));
  }
  if (author.credentials) {
    person.hasCredential = {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: author.credentials,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profilepage`,
    name: `${author.name}${author.credentials ? `, ${author.credentials}` : ""}`,
    url,
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: person,
  };
}

/**
 * MedicalWebPage for a brand review — includes lastReviewed and a
 * full reviewedBy Person node plus the page's AggregateRating.
 */
export function buildReviewMedicalWebPageSchema(opts: {
  review: BrandReview;
  path: string;
  reviewer: Author;
}): JsonLdObject {
  const { review, path, reviewer } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${SITE.url}${path}#webpage`,
    name: review.title,
    description: review.metaDescription,
    url: `${SITE.url}${path}`,
    lastReviewed: review.lastReviewed,
    datePublished: review.datePublished,
    dateModified: review.dateModified,
    reviewedBy: buildPersonNode(reviewer),
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}
