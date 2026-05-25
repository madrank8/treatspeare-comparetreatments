import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A 5-star widget with half-star support and amber fill.
 * Implemented with a clipped overlay so half-stars render crisply.
 */
export function StarRating({
  rating,
  size = "md",
  showValue = false,
  className,
}: {
  rating: number; // 0–5, half-steps
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}) {
  const px = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" }[size];
  const clamped = Math.max(0, Math.min(5, rating));
  const fillPct = (clamped / 5) * 100;

  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      role="img"
      aria-label={`Rated ${clamped} out of 5 stars`}
    >
      <span className="relative inline-flex">
        {/* Empty track */}
        <span className="inline-flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(px, "text-line-200")}
              fill="currentColor"
              aria-hidden
            />
          ))}
        </span>
        {/* Filled overlay, clipped to the rating */}
        <span
          className="absolute inset-0 inline-flex overflow-hidden"
          style={{ width: `${fillPct}%` }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(px, "shrink-0 text-rating-500")}
              fill="currentColor"
              aria-hidden
            />
          ))}
        </span>
      </span>
      {showValue ? (
        <span className="text-sm font-semibold text-ink-700">
          {clamped.toFixed(1)}
        </span>
      ) : null}
    </span>
  );
}
