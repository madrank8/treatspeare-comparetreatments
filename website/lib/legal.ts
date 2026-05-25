/**
 * Registry for the site's legal / company pages.
 *
 * Each entry maps a route slug to its title, footer label and meta
 * description. The page body lives in `content/legal/{slug}.md` and is
 * parsed to HTML at build time by `getLegalContent`.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

export interface LegalPage {
  /** Route slug — also the content filename (`content/legal/{slug}.md`). */
  slug: string;
  /** Page H1 and `<title>` base. */
  title: string;
  /** Short label used in the footer link columns. */
  navLabel: string;
  /** SEO meta description (70–160 chars). */
  metaDescription: string;
}

/** All legal/company pages, in a stable display order. */
export const LEGAL_PAGES: readonly LegalPage[] = [
  {
    slug: "about",
    title: "About Us",
    navLabel: "About Us",
    metaDescription:
      "Learn who we are — an independent publisher comparing US telehealth treatments — and the mission, standards and people behind our reviews.",
  },
  {
    slug: "contact",
    title: "Contact Us",
    navLabel: "Contact",
    metaDescription:
      "Get in touch with our team for questions, feedback, corrections or partnership inquiries about our telehealth treatment comparisons.",
  },
  {
    slug: "how-we-review",
    title: "Editorial and Review Methodology",
    navLabel: "How We Review",
    metaDescription:
      "See exactly how we research, score and rank telehealth providers — our weighted methodology, sources and editorial independence policy.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    navLabel: "Privacy Policy",
    metaDescription:
      "How we collect, use, share and protect your personal information, plus your privacy rights and choices when you use our website.",
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    navLabel: "Terms of Service",
    metaDescription:
      "The terms and conditions that govern your use of our website, including acceptable use, disclaimers and limitations of liability.",
  },
  {
    slug: "affiliate-disclosure",
    title: "Affiliate and Advertising Disclosure",
    navLabel: "Affiliate Disclosure",
    metaDescription:
      "How we make money: our affiliate and advertising relationships, and our commitment that commissions never influence our rankings.",
  },
  {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    navLabel: "Medical Disclaimer",
    metaDescription:
      "Our content is for information only and is not medical advice. Always consult a licensed clinician about your health and treatment.",
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    navLabel: "Cookie Policy",
    metaDescription:
      "What cookies and similar technologies we use, why we use them, and how you can manage or disable them in your browser.",
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    navLabel: "Accessibility",
    metaDescription:
      "Our commitment to making this website accessible to everyone, the standards we follow, and how to report an accessibility issue.",
  },
  {
    slug: "dmca",
    title: "DMCA / Copyright Policy",
    navLabel: "DMCA",
    metaDescription:
      "How to submit a DMCA copyright takedown notice or counter-notice, and how we handle reported copyright infringement.",
  },
] as const;

/** Every legal route slug — used for `generateStaticParams`-style listing. */
export const legalSlugs: readonly string[] = LEGAL_PAGES.map((p) => p.slug);

/** Look up a single legal page by slug. */
export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((p) => p.slug === slug);
}

/** Absolute path to a legal page's markdown source. */
function contentPath(slug: string): string {
  return join(process.cwd(), "content", "legal", `${slug}.md`);
}

/**
 * Read a legal page's markdown file and parse it to trusted HTML.
 * Runs at build time (Server Component / SSG). GFM is enabled so the
 * tables in the source documents render.
 */
export function getLegalContent(slug: string): string {
  const raw = readFileSync(contentPath(slug), "utf8");
  return marked.parse(raw, { gfm: true, async: false }) as string;
}
