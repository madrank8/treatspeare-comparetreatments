import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Brand, RankingEntry } from "@/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Badge } from "@/components/ui/Badge";
import { RatingBadge } from "./RatingBadge";
import { AffiliateButton } from "@/components/affiliate/AffiliateButton";

/**
 * A compact comparison card used in the homepage 3-up featured row.
 * Same data shape as ComparisonCard, vertical layout.
 */
export function FeaturedCard({
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
  return (
    <article className="flex flex-col rounded-lg border border-line-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <BrandLogo brand={brand} size="md" />
        {entry.badges[0] ? <Badge kind={entry.badges[0]} /> : null}
      </div>

      <RatingBadge
        score={entry.score}
        starRating={entry.starRating}
        scoreLabel={entry.scoreLabel}
        layout="inline"
        className="mt-4"
      />

      <h3 className="mt-4 font-display text-base font-bold text-ink-900">
        {entry.offerHeadline}
      </h3>

      <ul className="mt-3 flex-1 space-y-1.5">
        {entry.sellingPoints.slice(0, 3).map((point) => (
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

      <div className="mt-5 space-y-2">
        <AffiliateButton
          goSlug={brand.goSlug}
          brandSlug={brand.slug}
          placement={placement}
          label={entry.ctaLabel}
          category={categorySlug}
          score={entry.score}
        />
        <Link
          href={`/${categorySlug}#${brand.slug}`}
          className="inline-flex w-full items-center justify-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
        >
          See full comparison
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
