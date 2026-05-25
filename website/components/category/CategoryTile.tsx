import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryIcon } from "@/components/ui/Icon";
import type { HomeCategory } from "@/lib/data/site-content";

/** One icon tile in the homepage "Explore treatments by category" grid. */
export function CategoryTile({
  category,
}: {
  category: HomeCategory;
}) {
  return (
    <Link
      href={category.href}
      className="group relative flex flex-col rounded-xl border border-line-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-card-hover"
    >
      {category.badge ? (
        <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-rating-50 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-rating-500">
          {category.badge}
        </span>
      ) : null}

      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <CategoryIcon name={category.icon} className="h-6 w-6" />
      </span>
      <span className="font-display text-base font-bold text-ink-900">
        {category.name}
      </span>
      <span className="mt-1.5 flex-1 text-sm leading-snug text-ink-500">
        {category.description}
      </span>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
        Compare
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
