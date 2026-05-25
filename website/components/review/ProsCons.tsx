import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Two-column pros / cons lists with check and cross icons.
 * Used on brand review pages (architecture §4.4 / §6).
 */
export function ProsCons({
  pros,
  cons,
  className,
}: {
  pros: string[];
  cons: string[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {/* Pros */}
      <div className="rounded-lg border border-line-200 bg-white p-5 shadow-card">
        <h3 className="mb-3 flex items-center gap-2 font-display text-base font-bold text-ink-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-50">
            <Check className="h-4 w-4 text-success-600" aria-hidden />
          </span>
          Pros
        </h3>
        <ul className="space-y-2.5">
          {pros.map((pro) => (
            <li
              key={pro}
              className="flex items-start gap-2.5 text-sm text-ink-700"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-success-600"
                aria-hidden
              />
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="rounded-lg border border-line-200 bg-white p-5 shadow-card">
        <h3 className="mb-3 flex items-center gap-2 font-display text-base font-bold text-ink-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-50">
            <X className="h-4 w-4 text-danger-600" aria-hidden />
          </span>
          Cons
        </h3>
        <ul className="space-y-2.5">
          {cons.map((con) => (
            <li
              key={con}
              className="flex items-start gap-2.5 text-sm text-ink-700"
            >
              <X
                className="mt-0.5 h-4 w-4 shrink-0 text-danger-600"
                aria-hidden
              />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
