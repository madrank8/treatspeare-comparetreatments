import { cn } from "@/lib/utils";
import type { Brand, BrandReview } from "@/types";
import { ScoreLabelTag } from "@/components/comparison/ScoreLabelTag";
import { AffiliateButton } from "@/components/affiliate/AffiliateButton";

/**
 * The "at a glance" box — a compact key-facts panel with the score,
 * structured facts and a Visit Site CTA. Sits directly under the
 * review hero (architecture §4.4).
 */
export function AtAGlanceBox({
  brand,
  review,
  className,
}: {
  brand: Brand;
  review: BrandReview;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line-200 bg-brand-50 p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-xl font-bold text-ink-900">
          {brand.name} at a glance
        </h2>
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold text-brand-900 tabular-nums">
            {review.overallScore.toFixed(1)}
          </span>
          <ScoreLabelTag label={review.scoreLabel} />
        </div>
      </div>

      <dl className="mt-4 divide-y divide-line-200 border-y border-line-200">
        {review.atAGlance.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 py-2.5"
          >
            <dt className="text-sm font-medium text-ink-500">{fact.label}</dt>
            <dd className="text-sm font-semibold text-ink-900">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4">
        <AffiliateButton
          goSlug={brand.goSlug}
          brandSlug={brand.slug}
          placement="review-at-a-glance"
          label="VISIT SITE"
          category={review.categorySlug}
          score={review.overallScore}
        />
      </div>
    </div>
  );
}
