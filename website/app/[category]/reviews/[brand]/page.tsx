import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/eeat/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { ReviewHero } from "@/components/review/ReviewHero";
import { AtAGlanceBox } from "@/components/review/AtAGlanceBox";
import { ProsCons } from "@/components/review/ProsCons";
import { RatingBreakdown } from "@/components/review/RatingBreakdown";
import { ReviewBody } from "@/components/review/ReviewBody";
import { PricingTable } from "@/components/review/PricingTable";
import { ReviewByline } from "@/components/review/ReviewByline";
import { RelatedBrands } from "@/components/review/RelatedBrands";
import { AffiliateButton } from "@/components/affiliate/AffiliateButton";
import {
  buildAggregateRatingSchema,
  buildBrandReviewSchema,
  buildFaqSchema,
  buildReviewMedicalWebPageSchema,
} from "@/lib/schema";
import {
  brandReviews,
  getBrandReview,
  reviewParams,
} from "@/lib/data/reviews";
import { getBrand } from "@/lib/data/brands";
import { getCategory } from "@/lib/data/categories";
import { getRankingTable } from "@/lib/data/rankings";
import { getFaqs } from "@/lib/data/faqs";
import { getAuthor } from "@/lib/data/authors";

type PageParams = { category: string; brand: string };

/** Pre-render every {category, brand} pair that has a review. */
export function generateStaticParams(): PageParams[] {
  return reviewParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { category, brand } = await params;
  const review = getBrandReview(category, brand);
  if (!review) return {};

  const path = `/${review.categorySlug}/reviews/${review.brandSlug}`;
  return {
    title: review.metaTitle,
    description: review.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: review.metaTitle,
      description: review.metaDescription,
      url: `${SITE.url}${path}`,
      type: "article",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function BrandReviewPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { category: categorySlug, brand: brandSlug } = await params;

  const review = getBrandReview(categorySlug, brandSlug);
  if (!review) notFound();

  const brand = getBrand(review.brandSlug);
  const category = getCategory(review.categorySlug);
  if (!brand || !category) notFound();

  const author = getAuthor(review.authorSlug);
  const reviewer = getAuthor(review.medicalReviewerSlug);
  if (!author || !reviewer) notFound();

  const faqs = getFaqs(review.faqSlugs);
  const path = `/${review.categorySlug}/reviews/${review.brandSlug}`;

  // "Compare alternatives" — other brands in this category that have a
  // review, resolved against the ranking table for scores.
  const table = getRankingTable(review.categorySlug);
  const relatedBrands = brandReviews
    .filter(
      (r) =>
        r.categorySlug === review.categorySlug &&
        r.brandSlug !== review.brandSlug,
    )
    .map((r) => {
      const b = getBrand(r.brandSlug);
      const entry = table?.entries.find((e) => e.brandSlug === r.brandSlug);
      return b && entry ? { brand: b, entry } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .slice(0, 5);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: category.title, path: `/${category.slug}` },
    { name: "Reviews", path: `/${category.slug}` },
    { name: brand.name, path },
  ];

  return (
    <>
      {/* ── Breadcrumbs ──────────────────────────────────────── */}
      <div className="border-b border-line-200 bg-white">
        <Container className="py-3">
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      <div className="bg-surface-50 py-10 lg:py-14">
        <Container className="max-w-3xl space-y-10">
          {/* ── Review hero ────────────────────────────────── */}
          <ReviewHero brand={brand} review={review} />

          {/* ── Hero summary (2 paragraphs) ────────────────── */}
          <div className="prose-body max-w-none text-ink-700">
            {review.heroSummary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* ── At-a-glance box ────────────────────────────── */}
          <AtAGlanceBox brand={brand} review={review} />

          {/* ── Pros / cons ────────────────────────────────── */}
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-ink-900">
              {brand.name} pros and cons
            </h2>
            <ProsCons pros={review.pros} cons={review.cons} />
          </div>

          {/* ── Rating breakdown ───────────────────────────── */}
          <RatingBreakdown scores={review.ratingBreakdown} />

          {/* ── Review body ────────────────────────────────── */}
          <ReviewBody sections={review.body} />

          {/* ── Pricing table ──────────────────────────────── */}
          <PricingTable tiers={review.pricing} brandName={brand.name} />

          {/* ── Verdict + final CTA ────────────────────────── */}
          <div className="rounded-lg border border-line-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="mb-3 font-display text-2xl font-bold text-ink-900">
              Our verdict on {brand.name}
            </h2>
            <p className="prose-body leading-relaxed text-ink-700">
              {review.verdict}
            </p>
            <div className="mt-5 sm:max-w-xs">
              <AffiliateButton
                goSlug={brand.goSlug}
                brandSlug={brand.slug}
                placement="review-verdict"
                label={`VISIT ${brand.name.toUpperCase()}`}
                category={review.categorySlug}
                score={review.overallScore}
                size="lg"
              />
            </div>
            <p className="mt-3 text-xs text-ink-500">
              Affiliate link — we may earn a commission. GLP-1 treatment is
              not suitable for everyone and carries side effects; a licensed
              clinician decides whether it is appropriate for you.
            </p>
          </div>

          {/* ── FAQ ────────────────────────────────────────── */}
          {faqs.length > 0 ? (
            <div>
              <h2 className="mb-5 font-display text-2xl font-bold text-ink-900">
                {brand.name} — frequently asked questions
              </h2>
              <FAQAccordion items={faqs} />
            </div>
          ) : null}

          {/* ── Byline block ───────────────────────────────── */}
          <ReviewByline
            author={author}
            reviewer={reviewer}
            datePublished={review.datePublished}
            dateModified={review.dateModified}
            lastReviewed={review.lastReviewed}
          />

          {/* ── Related brands ─────────────────────────────── */}
          <RelatedBrands
            items={relatedBrands}
            categorySlug={category.slug}
            categoryTitle={category.title}
          />
        </Container>
      </div>

      {/* ── Structured data ──────────────────────────────────── */}
      <JsonLd
        data={buildBrandReviewSchema({
          review,
          brandName: brand.name,
          brandWebsite: brand.website,
          path,
          author,
        })}
      />
      <JsonLd data={buildAggregateRatingSchema(review)} />
      <JsonLd
        data={buildReviewMedicalWebPageSchema({ review, path, reviewer })}
      />
      {faqs.length > 0 ? <JsonLd data={buildFaqSchema(faqs)} /> : null}
    </>
  );
}
