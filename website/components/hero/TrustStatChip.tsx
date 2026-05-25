import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating "1,804 treatments reviewed" chip. Space is reserved by the
 * parent so it never causes layout shift.
 */
export function TrustStatChip({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-line-200 bg-white p-3 shadow-float",
        className,
      )}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-600">
        <CheckCircle2 className="h-6 w-6" aria-hidden />
      </span>
      <div className="leading-tight">
        <div className="font-display text-xl font-extrabold text-brand-900 tabular-nums">
          {value}
        </div>
        <div className="text-xs text-ink-500">{label}</div>
      </div>
    </div>
  );
}
