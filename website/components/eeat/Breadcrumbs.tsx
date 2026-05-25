import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Renders a breadcrumb trail and emits matching BreadcrumbList JSON-LD.
 * The final crumb is the current page (not a link).
 */
export function Breadcrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={cn("text-sm text-ink-500", className)}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {i > 0 ? (
                  <ChevronRight
                    className="h-3.5 w-3.5 text-line-200"
                    aria-hidden
                  />
                ) : null}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-ink-700"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-brand-600"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={buildBreadcrumbSchema(items)} />
    </>
  );
}
