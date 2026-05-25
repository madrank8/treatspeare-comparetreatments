import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { HomeHero } from "@/components/hero/Hero";
import { CategoryGrid } from "@/components/category/CategoryGrid";
import { RankedCard } from "@/components/comparison/RankedCard";
import { RankingWeightsBar } from "@/components/trust/RankingWeightsBar";
import { HowWeReviewSteps } from "@/components/content/HowWeReviewSteps";
import { TrustBar } from "@/components/trust/TrustBar";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";
import { getBrand } from "@/lib/data/brands";
import { getRankingTable } from "@/lib/data/rankings";
import { getFaqs } from "@/lib/data/faqs";
import type { RankingEntry } from "@/types";
import type { AccentColor } from "@/lib/accent-colors";
import {
  homeCategories,
  homepageFaqSlugs,
  reviewSteps,
  trustStats,
} from "@/lib/data/site-content";

export const metadata: Metadata = {
  title: SITE.tagline,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
};

/**
 * Homepage "Top-rated treatments" picks. Curated from the weight-loss
 * ranking, with homepage-specific rank, award label and headline score
 * so the three-card row matches the design.
 */
const topRatedPicks: {
  brandSlug: string;
  rankLabel: string;
  rank: number;
  score: number;
  accent: AccentColor;
}[] = [
  {
    brandSlug: "trimrx",
    rankLabel: "Best Overall",
    rank: 1,
    score: 9.8,
    accent: "amber",
  },
  {
    brandSlug: "sunlightrx",
    rankLabel: "Best Value",
    rank: 2,
    score: 9.4,
    accent: "teal",
  },
  {
    brandSlug: "noom",
    rankLabel: "Best for Support",
    rank: 3,
    score: 9.1,
    accent: "violet",
  },
];

export default function HomePage() {
  const weightLoss = getRankingTable("weight-loss");

  // Build the three top-rated cards from the weight-loss ranking.
  const topRated = topRatedPicks
    .map(({ brandSlug, rankLabel, rank, score, accent }) => {
      const base = weightLoss?.entries.find(
        (e) => e.brandSlug === brandSlug,
      );
      const brand = getBrand(brandSlug);
      if (!base || !brand) return null;
      // Homepage display entry — overrides rank/score for the curated row.
      const entry: RankingEntry = { ...base, rank, score };
      return { entry, brand, rankLabel, accent };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const faqs = getFaqs(homepageFaqSlugs);

  return (
    <>
      {/* ── 1 · Hero ──────────────────────────────────────────── */}
      <HomeHero />

      {/* ── 2 · Explore treatments by category ────────────────── */}
      <Section tone="muted">
        <SectionHeading
          title="Explore treatments by category"
          dek="Whatever your health goals, we can help you find the right solution."
        />
        <CategoryGrid categories={homeCategories} />
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/weight-loss" variant="secondary">
            View All Categories
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </Section>

      {/* ── 3 · Top-rated treatments ──────────────────────────── */}
      <Section tone="default">
        <SectionHeading
          title="Top-rated treatments, carefully reviewed"
          dek="Our highest-scoring providers, ranked by the same independent methodology."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {topRated.map(({ entry, brand, rankLabel, accent }) => (
            <RankedCard
              key={brand.slug}
              entry={entry}
              brand={brand}
              categorySlug="weight-loss"
              rankLabel={rankLabel}
              highlighted={entry.rank === 1}
              accent={accent}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/weight-loss" variant="ghost">
            View All Rankings
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        {/* Rankings you can trust strip */}
        <div className="mt-12">
          <RankingWeightsBar />
        </div>
      </Section>

      {/* ── 4 · How we review ─────────────────────────────────── */}
      <Section tone="muted">
        <SectionHeading
          title="How we review every treatment"
          dek="The same rigorous, transparent process is applied to every provider — partner or not."
        />
        <HowWeReviewSteps steps={reviewSteps} />
      </Section>

      {/* ── 5 · Trust band ────────────────────────────────────── */}
      <Section tone="default">
        <TrustBar
          heading="Why thousands trust CompareTreatments.com"
          stats={trustStats}
        />
      </Section>

      {/* ── 6 · FAQ ───────────────────────────────────────────── */}
      <Section tone="muted">
        <Container className="max-w-3xl px-0">
          <SectionHeading title="Frequently asked questions" />
          <FAQAccordion items={faqs} />
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/how-we-review" variant="ghost">
              View All FAQs
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <JsonLd data={buildFaqSchema(faqs)} />
    </>
  );
}
