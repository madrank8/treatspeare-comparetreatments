import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/eeat/Breadcrumbs";
import { HubHero } from "@/components/hero/Hero";
import { DisclosureBanner } from "@/components/affiliate/DisclosureBanner";
import { ComparisonList } from "@/components/comparison/ComparisonList";
import { SeoBody } from "@/components/content/SeoBody";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { HowWeRankBox } from "@/components/sidebar/HowWeRankBox";
import { SidebarOfferCard } from "@/components/sidebar/SidebarOfferCard";
import { RecommendedModule } from "@/components/sidebar/RecommendedModule";
import { DrugFactsBox } from "@/components/sidebar/DrugFactsBox";
import { MedicalReviewerByline } from "@/components/eeat/MedicalReviewerByline";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildMedicalWebPageSchema,
} from "@/lib/schema";
import {
  categorySlugs,
  getCategory,
} from "@/lib/data/categories";
import { getBrand } from "@/lib/data/brands";
import { getRankingTable } from "@/lib/data/rankings";
import { getFaqs } from "@/lib/data/faqs";
import { getAuthor } from "@/lib/data/authors";
import { rankSteps } from "@/lib/data/site-content";

type PageParams = { category: string };

/** Pre-render every category route at build time. */
export function generateStaticParams(): PageParams[] {
  return categorySlugs.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const path = `/${category.slug}`;
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE.url}${path}`,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function CategoryHubPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const table = getRankingTable(category.slug);
  if (!table) notFound();

  const reviewer = getAuthor(category.medicalReviewerSlug);
  const faqs = getFaqs(category.faqSlugs);
  const path = `/${category.slug}`;

  // Resolve each ranking entry to its brand.
  const items = table.entries
    .map((entry) => {
      const brand = getBrand(entry.brandSlug);
      return brand ? { entry, brand } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  // Sidebar promo + editor's pick come from the #1-ranked entry.
  const topItem = items[0];
  const promoItem = items.find((i) => i.entry.promo) ?? topItem;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: category.title, path },
  ];

  return (
    <>
      {/* ── Breadcrumbs ──────────────────────────────────────── */}
      <div className="border-b border-line-200 bg-white">
        <Container className="py-3">
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      {/* ── Hub hero ─────────────────────────────────────────── */}
      <HubHero
        headline={category.heroHeadline}
        intro={category.heroIntro}
        lastReviewed={category.lastReviewed}
      />

      {/* ── Two-column body ──────────────────────────────────── */}
      <div className="bg-surface-50 py-10 lg:py-14">
        <Container className="grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-10">
          {/* Main column */}
          <div className="min-w-0">
            <DisclosureBanner className="mb-6" />

            <h2 className="mb-1 font-display text-2xl font-bold text-ink-900">
              The {items.length} best providers, ranked
            </h2>
            <p className="mb-6 text-sm text-ink-500">
              Ranked by our weighted methodology — clinical oversight,
              treatment options, pricing transparency, customer experience
              and support.
            </p>

            <ComparisonList
              items={items}
              categorySlug={category.slug}
              placement="hub-card"
              initialCount={5}
            />

            {/* SEO body */}
            <div className="mt-12">
              <SeoBody blocks={category.seoBody} />
            </div>

            {/* FAQ */}
            {faqs.length > 0 ? (
              <div className="mt-12">
                <h2 className="mb-5 font-display text-2xl font-bold text-ink-900">
                  Frequently asked questions
                </h2>
                <FAQAccordion items={faqs} />
              </div>
            ) : null}

            {/* Medical reviewer byline */}
            {reviewer ? (
              <div className="mt-12">
                <MedicalReviewerByline
                  reviewer={reviewer}
                  lastReviewed={category.lastReviewed}
                />
              </div>
            ) : null}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <HowWeRankBox steps={rankSteps} />
              {promoItem ? (
                <SidebarOfferCard
                  brand={promoItem.brand}
                  entry={promoItem.entry}
                  categorySlug={category.slug}
                />
              ) : null}
              {category.drugFacts ? (
                <DrugFactsBox facts={category.drugFacts} />
              ) : null}
              {topItem ? (
                <RecommendedModule
                  brand={topItem.brand}
                  entry={topItem.entry}
                  categorySlug={category.slug}
                />
              ) : null}
            </div>
          </aside>
        </Container>
      </div>

      {/* ── Structured data ──────────────────────────────────── */}
      <JsonLd data={buildItemListSchema(table, category)} />
      {faqs.length > 0 ? (
        <JsonLd data={buildFaqSchema(faqs)} />
      ) : null}
      {reviewer ? (
        <JsonLd
          data={buildMedicalWebPageSchema({
            name: category.heroHeadline,
            description: category.metaDescription,
            path,
            lastReviewed: category.lastReviewed,
            reviewerName: reviewer.name,
          })}
        />
      ) : null}
    </>
  );
}
