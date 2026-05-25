import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { categories } from "@/lib/data/categories";

/** Generates sitemap.xml — enumerates the homepage and all category hubs. */
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

  return [...staticRoutes, ...categoryRoutes];
}
