import { Info } from "lucide-react";
import Link from "next/link";
import type { Brand, BrandReview } from "@/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { RatingBadge } from "@/components/comparison/RatingBadge";
import { AffiliateButton } from "@/components/affiliate/AffiliateButton";
import { SITE } from "@/lib/site";

/**
 * The brand review hero: brand logo, H1 title, large rating cluster,
 * one-line verdict, a primary affiliate CTA and an inline FTC-compliant
 * affiliate disclosure near the CTA (architecture §4.4). Brand
 * reference uses `SITE.shortName` so a future brand swap is a
 * single-file change.
 */
export function ReviewHero({
  brand,
  review,
}: {
  brand: Brand;
  review: BrandReview;
}) {
  return (
    <div className="rounded-lg border border-line-200 bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
        {/* Left: identity + verdict */}
        <div className="min-w-0">
          <BrandLogo brand={brand} size="lg" />
          <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-[2.25rem]">
            {review.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-ink-700">
            {review.oneLineVerdict}
          </p>
        </div>

        {/* Right: rating + CTA */}
        <div className="flex flex-col items-stretch gap-4 lg:w-56">
          <RatingBadge
            score={review.overallScore}
            starRating={review.starRating}
            scoreLabel={review.scoreLabel}
          />
          <AffiliateButton
            goSlug={brand.goSlug}
            brandSlug={brand.slug}
            placement="review-hero"
            category={review.categorySlug}
            score={review.overallScore}
            size="lg"
          />
        </div>
      </div>

      {/* Inline affiliate disclosure — near the CTA, FTC requirement */}
      <p className="mt-5 flex items-start gap-2 border-t border-line-200 pt-4 text-xs leading-relaxed text-ink-500">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
        <span>
          <span className="font-semibold text-ink-700">
            Advertising disclosure:
          </span>{" "}
          {SITE.shortName} is reader-supported. If you sign up with{" "}
          {brand.name} through a link on this page, we may earn a commission.
          This never affects our scores or rankings.{" "}
          <Link
            href="/affiliate-disclosure"
            className="font-medium text-brand-600 underline underline-offset-2"
          >
            Learn more
          </Link>
          .
        </span>
      </p>
    </div>
  );
}
