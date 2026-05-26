import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { categories } from "@/lib/data/categories";
import { brandReviews } from "@/lib/data/reviews";
import { authors } from "@/lib/data/authors";

/**
 * Every legal / trust route the site renders. These are indexable
 * trust signals on a YMYL site and should be in the sitemap — the
 * search engines treat their presence as part of the E-E-A-T pattern.
 */
const legalSlugs = [
  "about",
  "how-we-review",
  "affiliate-disclosure",
  "medical-disclaimer",
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "accessibility",
  "dmca",
  "contact",
];

/**
 * Generates sitemap.xml — enumerates the homepage, all category hubs,
 * every brand review, the author profile pages, and the legal / trust
 * routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/authors`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE.url}/${cat.slug}`,
    lastModified: new Date(cat.lastReviewed),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const reviewRoutes: MetadataRoute.Sitemap = brandReviews.map((review) => ({
    url: `${SITE.url}/${review.categorySlug}/reviews/${review.brandSlug}`,
    lastModified: new Date(review.dateModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const authorRoutes: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${SITE.url}/authors/${author.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalSlugs.map((slug) => ({
    url: `${SITE.url}/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...reviewRoutes,
    ...authorRoutes,
    ...legalRoutes,
  ];
}
