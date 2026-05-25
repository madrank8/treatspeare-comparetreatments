import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Brand, RankingEntry } from "@/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Badge } from "@/components/ui/Badge";
import { RatingBadge } from "./RatingBadge";
import { AffiliateButton } from "@/components/affiliate/AffiliateButton";

/**
 * The core ranked comparison card. Renders one RankingEntry: rank
 * number, brand logo, rating cluster, offer headline, selling-point
 * bullets, an optional badge, the green VISIT SITE CTA and a
 * "Read full review" link.
 */
export function ComparisonCard({
  entry,
  brand,
  categorySlug,
  placement,
}: {
  entry: RankingEntry;
  brand: Brand;
  categorySlug: string;
  placement: string;
}) {
  const isTop = entry.rank === 1;
  const reviewHref = `/${categorySlug}/reviews/${brand.slug}`;

  return (
    <article
      id={brand.slug}
      className={cn(
        "scroll-mt-24 rounded-lg border bg-white shadow-card transition-all hover:shadow-card-hover",
        isTop
          ? "border-brand-600 ring-1 ring-brand-600/20"
          : "border-line-200",
      )}
    >
      {isTop ? (
        <div className="flex items-center gap-2 rounded-t-lg bg-brand-600 px-5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
          Our #1 recommended provider
        </div>
      ) : null}

      <div className="grid gap-5 p-5 md:grid-cols-[auto_1fr_auto] md:gap-6 md:p-6">
        {/* Rank + logo */}
        <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3">
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-lg font-extrabold",
              isTop
                ? "bg-brand-900 text-white"
                : "bg-brand-50 text-brand-700",
            )}
            aria-label={`Ranked number ${entry.rank}`}
          >
            {entry.rank}
          </span>
          <BrandLogo
            brand={brand}
            size="md"
            className="md:flex-col md:gap-1.5 md:text-center"
          />
        </div>

        {/* Middle: offer details */}
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {entry.badges.map((badge) => (
              <Badge key={badge} kind={badge} />
            ))}
          </div>
          <h3 className="font-display text-lg font-bold text-ink-900">
            {entry.offerHeadline}
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            {brand.shortDescription}
          </p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {entry.sellingPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-ink-700"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-success-600"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: rating + CTA */}
        <div className="flex flex-col items-stretch gap-3 md:w-44">
          <RatingBadge
            score={entry.score}
            starRating={entry.starRating}
            scoreLabel={entry.scoreLabel}
          />
          <AffiliateButton
            goSlug={brand.goSlug}
            brandSlug={brand.slug}
            placement={placement}
            label={entry.ctaLabel}
            category={categorySlug}
            score={entry.score}
          />
          {entry.hasReview ? (
            <Link
              href={reviewHref}
              className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
            >
              Read full review
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
