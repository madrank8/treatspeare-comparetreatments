import { Award, Crown, Sparkles, Tag, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BadgeKind } from "@/types";

const badgeConfig: Record<
  BadgeKind,
  { label: string; icon: typeof Award; className: string }
> = {
  "editors-choice": {
    label: "Editor's Choice",
    icon: Crown,
    className: "bg-brand-900 text-white",
  },
  "best-value": {
    label: "Best Value",
    icon: Award,
    className: "bg-accent-600 text-white",
  },
  "most-popular": {
    label: "Most Popular",
    icon: Sparkles,
    className: "bg-brand-600 text-white",
  },
  new: {
    label: "New",
    icon: Tag,
    className: "bg-rating-50 text-rating-500 ring-1 ring-rating-500/30",
  },
  "free-shipping": {
    label: "Free Shipping",
    icon: Truck,
    className: "bg-accent-50 text-accent-700 ring-1 ring-accent-600/20",
  },
};

/** A small pill — "Editor's Choice", "Best Value", "Free Shipping". */
export function Badge({
  kind,
  className,
}: {
  kind: BadgeKind;
  className?: string;
}) {
  const config = badgeConfig[kind];
  const LucideComp = config.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-semibold",
        config.className,
        className,
      )}
    >
      <LucideComp className="h-3.5 w-3.5" aria-hidden />
      {config.label}
    </span>
  );
}
