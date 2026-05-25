import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PricingTier } from "@/types";

/**
 * Brand pricing tiers for a review. Renders each plan as a row with
 * a name, price, billing period and optional notes. The highlighted
 * tier is visually emphasised.
 */
export function PricingTable({
  tiers,
  brandName,
  className,
}: {
  tiers: PricingTier[];
  brandName: string;
  className?: string;
}) {
  if (tiers.length === 0) return null;

  return (
    <div className={cn("overflow-hidden", className)}>
      <h2 className="mb-1 font-display text-2xl font-bold text-ink-900">
        {brandName} pricing
      </h2>
      <p className="mb-5 text-sm text-ink-500">
        Sample published pricing — confirm current rates and exactly what
        each plan includes directly with {brandName}.
      </p>
      <div className="divide-y divide-line-200 overflow-hidden rounded-lg border border-line-200 bg-white shadow-card">
        {tiers.map((tier) => (
          <div
            key={tier.planName}
            className={cn(
              "flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between",
              tier.highlighted && "bg-accent-50/60",
            )}
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-base font-bold text-ink-900">
                  {tier.planName}
                </h3>
                {tier.highlighted ? (
                  <span className="inline-flex items-center gap-1 rounded-sm bg-accent-600 px-2 py-0.5 text-xs font-semibold text-white">
                    <Check className="h-3 w-3" aria-hidden />
                    Best value
                  </span>
                ) : null}
              </div>
              {tier.notes ? (
                <p className="mt-1 text-sm text-ink-500">{tier.notes}</p>
              ) : null}
            </div>
            <div className="shrink-0 sm:text-right">
              <span className="font-display text-2xl font-extrabold text-brand-900 tabular-nums">
                ${tier.price}
              </span>
              <span className="ml-1 text-sm text-ink-500">
                {tier.billingPeriod}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
