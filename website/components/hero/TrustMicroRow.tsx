import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** A compact inline row of trust points — "Independent · Evidence-based". */
export function TrustMicroRow({
  points,
  tone = "default",
  className,
}: {
  points: string[];
  tone?: "default" | "light";
  className?: string;
}) {
  const textClass = tone === "light" ? "text-brand-100" : "text-ink-500";
  const iconBg =
    tone === "light"
      ? "bg-white/15 text-white"
      : "bg-accent-50 text-accent-600";
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2",
        className,
      )}
    >
      {points.map((point) => (
        <li
          key={point}
          className={cn(
            "flex items-center gap-1.5 text-sm font-medium",
            textClass,
          )}
        >
          <span
            className={cn(
              "flex h-4 w-4 items-center justify-center rounded-full",
              iconBg,
            )}
          >
            <Check className="h-3 w-3" aria-hidden />
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}
