import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryIcon } from "@/components/ui/Icon";
import type { TreatmentCategory } from "@/types";

/** One icon tile in the CategoryGrid. */
export function CategoryTile({
  category,
}: {
  category: TreatmentCategory;
}) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group flex flex-col rounded-lg border border-line-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-card-hover"
    >
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <CategoryIcon name={category.icon} className="h-6 w-6" />
      </span>
      <span className="font-display text-base font-bold text-ink-900">
        {category.title}
      </span>
      <span className="mt-1 text-sm leading-snug text-ink-500">
        {category.tileDescription}
      </span>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
        Compare
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
