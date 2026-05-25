import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Generates robots.txt — content is crawlable; /go/ and /api/ are not. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/go/", "/api/", "/studio/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
