import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Brand, RankingEntry } from "@/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";
import { accentColors, type AccentColor } from "@/lib/accent-colors";
import { StarRating } from "./StarRating";
import { ScoreLabelTag } from "./ScoreLabelTag";

/**
 * A ranked treatment card for the homepage "Top-rated treatments"
 * row — rank badge, brand, stars, bullets, big score and a
 * "View Review" button.
 */
export function RankedCard({
  entry,
  brand,
  categorySlug,
  rankLabel,
  highlighted = false,
  accent = "blue",
}: {
  entry: RankingEntry;
  brand: Brand;
  categorySlug: string;
  /** The award line shown beside the rank — e.g. "Best Overall". */
  rankLabel: string;
  /** The #1 card gets a brand-accent border. */
  highlighted?: boolean;
  /** Accent hue for the rank badge + award label. */
  accent?: AccentColor;
}) {
  const accentClasses = accentColors[accent];
  return (
    <article
      className={`relative flex flex-col rounded-xl border bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover ${
        highlighted ? "border-brand-600 ring-1 ring-brand-600" : "border-line-200"
      }`}
    >
      {/* Rank + award — color-coded per card */}
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white",
            accentClasses.solid,
          )}
        >
          {entry.rank}
        </span>
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-wide",
            accentClasses.fg,
          )}
        >
          {rankLabel}
        </span>
      </div>

      {/* Brand */}
      <div className="mt-4">
        <BrandLogo brand={brand} size="md" />
      </div>

      {/* Stars */}
      <div className="mt-3 flex items-center gap-2">
        <StarRating rating={entry.starRating} size="sm" />
        <ScoreLabelTag label={entry.scoreLabel} />
      </div>

      {/* Bullets */}
      <ul className="mt-4 flex-1 space-y-2">
        {entry.sellingPoints.slice(0, 3).map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm leading-snug text-ink-700"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-success-600"
              aria-hidden
            />
            {point}
          </li>
        ))}
      </ul>

      {/* Big score */}
      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-display text-4xl font-extrabold leading-none text-brand-900 tabular-nums">
          {entry.score.toFixed(1)}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-ink-500">
          / 10
        </span>
      </div>

      {/* CTA */}
      <Link
        href={`/${categorySlug}#${brand.slug}`}
        className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-brand-600 px-5 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-brand-700"
      >
        View Review
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
