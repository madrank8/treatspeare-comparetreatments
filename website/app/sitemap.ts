import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { categories } from "@/lib/data/categories";
import { brandReviews } from "@/lib/data/reviews";

/**
 * Generates sitemap.xml — enumerates the homepage, all category hubs
 * and every brand review.
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

  return [...staticRoutes, ...categoryRoutes, ...reviewRoutes];
}
