import { cn } from "@/lib/utils";
import type { ScoreLabel } from "@/types";
import { StarRating } from "./StarRating";
import { ScoreLabelTag } from "./ScoreLabelTag";

/**
 * The rating cluster: big numeric score, stars and a score label.
 * `layout="stacked"` is used inside comparison cards.
 */
export function RatingBadge({
  score,
  starRating,
  scoreLabel,
  layout = "stacked",
  className,
}: {
  score: number; // 0–10
  starRating: number; // 0–5
  scoreLabel: ScoreLabel;
  layout?: "stacked" | "inline";
  className?: string;
}) {
  if (layout === "inline") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <span className="font-display text-2xl font-extrabold text-brand-900 tabular-nums">
          {score.toFixed(1)}
        </span>
        <div className="flex flex-col gap-0.5">
          <StarRating rating={starRating} size="sm" />
          <ScoreLabelTag label={scoreLabel} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-lg bg-rating-50 px-4 py-3 text-center",
        className,
      )}
    >
      <span className="font-display text-[2rem] font-extrabold leading-none text-brand-900 tabular-nums">
        {score.toFixed(1)}
      </span>
      <span className="mt-1 text-[0.7rem] font-medium uppercase tracking-wide text-ink-500">
        out of 10
      </span>
      <StarRating rating={starRating} size="sm" className="mt-2" />
      <ScoreLabelTag label={scoreLabel} className="mt-2" />
    </div>
  );
}
