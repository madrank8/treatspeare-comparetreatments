"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Brand, RankingEntry } from "@/types";
import { Button } from "@/components/ui/Button";
import { ComparisonCard } from "./ComparisonCard";

interface ComparisonListItem {
  entry: RankingEntry;
  brand: Brand;
}

/**
 * The ranked offer chart: an ordered stack of ComparisonCards.
 * Cards beyond `initialCount` are collapsed behind a "Show more"
 * expander.
 */
export function ComparisonList({
  items,
  categorySlug,
  placement,
  initialCount = 5,
}: {
  items: ComparisonListItem[];
  categorySlug: string;
  placement: string;
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > initialCount;
  const visible = expanded ? items : items.slice(0, initialCount);
  const hiddenCount = items.length - initialCount;

  return (
    <div>
      <ol className="space-y-4">
        {visible.map((item) => (
          <li key={item.brand.slug}>
            <ComparisonCard
              entry={item.entry}
              brand={item.brand}
              categorySlug={categorySlug}
              placement={placement}
            />
          </li>
        ))}
      </ol>

      {hasMore ? (
        <div className="mt-6 flex justify-center">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded
              ? "Show fewer providers"
              : `Show ${hiddenCount} more providers`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
