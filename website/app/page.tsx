import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { HomeHero } from "@/components/hero/Hero";
import { CategoryGrid } from "@/components/category/CategoryGrid";
import { FeaturedCard } from "@/components/comparison/FeaturedCard";
import { HowWeReviewSteps } from "@/components/content/HowWeReviewSteps";
import { TrustBar } from "@/components/trust/TrustBar";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";
import { orderedCategories } from "@/lib/data/categories";
import { getBrand } from "@/lib/data/brands";
import { getRankingTable } from "@/lib/data/rankings";
import { getFaqs } from "@/lib/data/faqs";
import {
  featuredBrandSlugs,
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

export default function HomePage() {
  // Featured comparison cards — curated from the weight-loss ranking.
  const weightLoss = getRankingTable("weight-loss");
  const featured = featuredBrandSlugs
    .map((slug) => {
      const entry = weightLoss?.entries.find((e) => e.brandSlug === slug);
      const brand = getBrand(slug);
      return entry && brand ? { entry, brand } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const faqs = getFaqs(homepageFaqSlugs);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <HomeHero />

      {/* ── Category grid ────────────────────────────────────── */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Explore by category"
          title="Find the right treatment for you"
          dek="Browse our independent comparisons across the telehealth categories we cover."
        />
        <CategoryGrid categories={orderedCategories} />
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/weight-loss" variant="secondary">
            View all categories
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </Section>

      {/* ── Featured comparison cards ────────────────────────── */}
      <Section tone="default">
        <SectionHeading
          eyebrow="Top-rated treatments"
          title="Carefully reviewed, clearly compared"
          dek="A snapshot of providers that scored highly in our latest weight-loss comparison."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map(({ entry, brand }) => (
            <FeaturedCard
              key={brand.slug}
              entry={entry}
              brand={brand}
              categorySlug="weight-loss"
              placement="home-featured"
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/weight-loss" variant="primary">
            See the full weight-loss comparison
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </Section>

      {/* ── How we review ────────────────────────────────────── */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Our process"
          title="How we review every treatment"
          dek="The same rigorous, transparent process is applied to every provider — partner or not."
        />
        <HowWeReviewSteps steps={reviewSteps} />
      </Section>

      {/* ── Trust bar ────────────────────────────────────────── */}
      <Section tone="muted">
        <TrustBar
          heading="Why thousands trust CompareTreatments"
          stats={trustStats}
        />
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Section tone="default">
        <Container className="max-w-3xl px-0">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
          />
          <FAQAccordion items={faqs} />
        </Container>
      </Section>

      <JsonLd data={buildFaqSchema(faqs)} />
    </>
  );
}
