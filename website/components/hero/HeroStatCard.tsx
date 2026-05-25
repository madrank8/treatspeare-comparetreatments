import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The floating stat card that overlaps the hero photo.
 *
 * Compliance note (FTC reviews rule): the mockup shows a fabricated
 * fixed live counter ("1,804 people found a treatment that worked for
 * them this week"). We deliberately ship honest, non-fabricated
 * framing instead — visually identical, just truthful copy.
 */
export function HeroStatCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex max-w-[18rem] items-center gap-3 rounded-xl border border-line-200 bg-white p-4 shadow-float",
        className,
      )}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
        <Users className="h-6 w-6" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="font-display text-base font-bold leading-tight text-brand-900">
          Thousands found a treatment that fit
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          {/* Avatar cluster */}
          <div className="flex -space-x-2" aria-hidden>
            {AVATAR_COLORS.map((color, i) => (
              <span
                key={i}
                className={cn(
                  "h-6 w-6 rounded-full border-2 border-white",
                  color,
                )}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-ink-500">
            this year
          </span>
        </div>
      </div>
    </div>
  );
}

const AVATAR_COLORS = [
  "bg-brand-600",
  "bg-accent-600",
  "bg-rating-500",
  "bg-brand-500",
] as const;
