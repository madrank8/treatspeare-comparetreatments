import type { HomeCategory } from "@/lib/data/site-content";
import { CategoryTile } from "./CategoryTile";

/** Responsive grid of homepage category tiles. */
export function CategoryGrid({
  categories,
}: {
  categories: HomeCategory[];
}) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {categories.map((cat) => (
        <CategoryTile key={cat.name} category={cat} />
      ))}
    </div>
  );
}
