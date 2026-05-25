import type { TreatmentCategory } from "@/types";
import { CategoryTile } from "./CategoryTile";

/** Responsive grid of category tiles. */
export function CategoryGrid({
  categories,
}: {
  categories: TreatmentCategory[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {categories.map((cat) => (
        <CategoryTile key={cat.slug} category={cat} />
      ))}
    </div>
  );
}
