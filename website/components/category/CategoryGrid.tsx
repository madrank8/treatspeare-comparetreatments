import type { HomeCategory } from "@/lib/data/site-content";
import { CategoryTile } from "./CategoryTile";

/**
 * Responsive grid of homepage category tiles. Uses a centered flex-wrap so
 * an incomplete final row (e.g. 7 tiles across 4 columns) is centered
 * rather than left-aligned with an awkward empty slot.
 */
export function CategoryGrid({
  categories,
}: {
  categories: HomeCategory[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {categories.map((cat) => (
        <CategoryTile
          key={cat.name}
          category={cat}
          className="w-[calc(50%_-_0.625rem)] sm:w-[calc(33.333%_-_0.834rem)] lg:w-[calc(25%_-_0.9375rem)]"
        />
      ))}
    </div>
  );
}
