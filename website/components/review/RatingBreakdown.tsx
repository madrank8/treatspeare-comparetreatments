import { cn } from "@/lib/utils";
import type { RatingSubScore } from "@/types";

/**
 * Labeled sub-score bars — the rating breakdown on a brand review.
 * Each row shows a criterion, a filled bar (0–10 scale) and the score.
 */
export function RatingBreakdown({
  scores,
  className,
}: {
  scores: RatingSubScore[];
  className?: string;
}) {
  if (scores.length === 0) return null;

  return (
    <div
      className={cn(
        "rounded-lg border border-line-200 bg-white p-5 shadow-card sm:p-6",
        className,
      )}
    >
      <h2 className="mb-4 font-display text-xl font-bold text-ink-900">
        Rating breakdown
      </h2>
      <dl className="space-y-3.5">
        {scores.map((item) => {
          const pct = Math.max(0, Math.min(100, (item.score / 10) * 100));
          return (
            <div key={item.label} className="grid grid-cols-[1fr_auto] gap-x-3">
              <dt className="text-sm font-medium text-ink-700">
                {item.label}
              </dt>
              <dd className="font-display text-sm font-bold text-brand-900 tabular-nums">
                {item.score.toFixed(1)}
              </dd>
              <div
                className="col-span-2 mt-1.5 h-2 overflow-hidden rounded-full bg-brand-50"
                role="img"
                aria-label={`${item.label}: ${item.score.toFixed(1)} out of 10`}
              >
                <div
                  className="h-full rounded-full bg-brand-600"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
