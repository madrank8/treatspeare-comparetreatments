import { Star } from "lucide-react";
import type { Brand, RankingEntry } from "@/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StarRating } from "@/components/comparison/StarRating";
import { AffiliateButton } from "@/components/affiliate/AffiliateButton";

/** Sidebar "Editor's pick" module — a single highlighted provider. */
export function RecommendedModule({
  brand,
  entry,
  categorySlug,
}: {
  brand: Brand;
  entry: RankingEntry;
  categorySlug: string;
}) {
  return (
    <div className="rounded-lg border border-line-200 bg-white p-5 shadow-card">
      <div className="mb-3 flex items-center gap-2">
        <Star
          className="h-4 w-4 text-rating-500"
          fill="currentColor"
          aria-hidden
        />
        <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink-700">
          Editor&apos;s pick
        </h3>
      </div>
      <BrandLogo brand={brand} size="md" />
      <div className="mt-3 flex items-center gap-2">
        <span className="font-display text-2xl font-extrabold text-brand-900 tabular-nums">
          {entry.score.toFixed(1)}
        </span>
        <StarRating rating={entry.starRating} size="sm" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">
        {entry.offerHeadline}
      </p>
      <div className="mt-4">
        <AffiliateButton
          goSlug={brand.goSlug}
          brandSlug={brand.slug}
          placement="sidebar-recommended"
          label={entry.ctaLabel}
          category={categorySlug}
          score={entry.score}
        />
      </div>
    </div>
  );
}
