import { cn } from "@/lib/utils";
import type { ScoreLabel } from "@/types";

const labelClass: Record<ScoreLabel, string> = {
  Excellent: "bg-accent-50 text-accent-700",
  Great: "bg-brand-50 text-brand-600",
  Good: "bg-rating-50 text-rating-500",
  Fair: "bg-surface-50 text-ink-500",
  Poor: "bg-surface-50 text-ink-500",
};

/** A small pill describing a score band — "Excellent", "Great"... */
export function ScoreLabelTag({
  label,
  className,
}: {
  label: ScoreLabel;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-2 py-0.5 text-xs font-semibold",
        labelClass[label],
        className,
      )}
    >
      {label}
    </span>
  );
}
