/**
 * Typed JSON-LD schema builders. Generated from the same data the
 * pages render, so structured data can never drift from on-page
 * content (a Google requirement — architecture §8).
 */
import { SITE } from "@/lib/site";
import type { FAQ, RankingTable, TreatmentCategory } from "@/types";
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
