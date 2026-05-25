import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryIcon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { getCategoryAccent } from "@/lib/accent-colors";
import type { HomeCategory } from "@/lib/data/site-content";

/** One tile in the homepage "Explore treatments by category" grid. */
export function CategoryTile({
  category,
  className,
}: {
  category: HomeCategory;
  className?: string;
}) {
  // Derive the category slug from the hub href, then resolve its accent.
  const slug = category.href.replace(/^\//, "");
  const accent = getCategoryAccent(slug);

  return (
    <Link
      href={category.href}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-line-200 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover",
        className,
      )}
    >
      {category.badge ? (
        <span className="absolute right-5 top-5 inline-flex items-center rounded-full bg-rating-50 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-rating-500">
          {category.badge}
        </span>
      ) : null}

      {/* Prominent category icon — color-coded per category */}
      <span
        className={cn(
          "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-200 group-hover:text-white",
          accent.tint,
          accent.fg,
          accent.groupHoverSolid,
        )}
      >
        <CategoryIcon name={category.icon} className="h-8 w-8" />
      </span>

      <span className="font-display text-lg font-bold text-ink-900">
        {category.name}
      </span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
        {category.description}
      </span>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Compare
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
