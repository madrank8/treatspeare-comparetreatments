import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Brand, RankingEntry } from "@/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StarRating } from "@/components/comparison/StarRating";

/** One alternative provider — a brand + its ranking entry. */
export interface RelatedBrandItem {
  brand: Brand;
  entry: RankingEntry;
}

/**
 * A "Compare alternatives" strip shown at the foot of a brand review.
 * Each card links to that brand's own review; a final tile links back
 * to the full category comparison.
 */
export function RelatedBrands({
  items,
  categorySlug,
  categoryTitle,
  className,
}: {
  items: RelatedBrandItem[];
  categorySlug: string;
  categoryTitle: string;
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div className={cn("", className)}>
      <h2 className="mb-1 font-display text-2xl font-bold text-ink-900">
        Compare alternatives
      </h2>
      <p className="mb-5 text-sm text-ink-500">
        Weighing up your options? Here are other {categoryTitle.toLowerCase()}{" "}
        providers from our ranked comparison.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ brand, entry }) => (
          <Link
            key={brand.slug}
            href={`/${categorySlug}/reviews/${brand.slug}`}
            className="group flex flex-col gap-3 rounded-lg border border-line-200 bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            <div className="flex items-center justify-between gap-2">
              <BrandLogo brand={brand} size="sm" />
              <span className="font-display text-lg font-extrabold text-brand-900 tabular-nums">
                {entry.score.toFixed(1)}
              </span>
            </div>
            <StarRating rating={entry.starRating} size="sm" />
            <p className="line-clamp-2 text-sm text-ink-500">
              {entry.offerHeadline}
            </p>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:underline">
              Read review
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </Link>
        ))}

        {/* Back to the full comparison */}
        <Link
          href={`/${categorySlug}`}
          className="group flex flex-col items-start justify-center gap-2 rounded-lg border border-dashed border-brand-600/40 bg-brand-50 p-4 transition-colors hover:bg-brand-100"
        >
          <span className="font-display text-base font-bold text-brand-700">
            See the full ranking
          </span>
          <span className="text-sm text-ink-500">
            All {categoryTitle.toLowerCase()} providers, side by side.
          </span>
          <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:underline">
            Compare all
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </Link>
      </div>
    </div>
  );
}
