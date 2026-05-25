import { Tag } from "lucide-react";
import type { Brand, RankingEntry } from "@/types";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StarRating } from "@/components/comparison/StarRating";
import { AffiliateButton } from "@/components/affiliate/AffiliateButton";
import { formatDate } from "@/lib/utils";

/**
 * Promo card for the sticky sidebar — surfaces a brand's `promo`
 * ("$140 Off + Free Shipping") with its own AffiliateButton.
 */
export function SidebarOfferCard({
  brand,
  entry,
  categorySlug,
}: {
  brand: Brand;
  entry: RankingEntry;
  categorySlug: string;
}) {
  if (!entry.promo) return null;
  const { promo } = entry;

  return (
    <div className="overflow-hidden rounded-xl border border-accent-600/30 bg-accent-50 shadow-card">
      <div className="flex items-center gap-1.5 bg-accent-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
        <Tag className="h-3.5 w-3.5" aria-hidden />
        Exclusive offer
      </div>
      <div className="p-5">
        <BrandLogo brand={brand} size="sm" />
        <p className="mt-3 font-display text-2xl font-extrabold leading-tight text-brand-900">
          {promo.headline}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          {promo.description}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <StarRating rating={entry.starRating} size="sm" showValue />
          <span className="text-xs text-ink-500">
            Rated {entry.scoreLabel.toLowerCase()}
          </span>
        </div>
        <div className="mt-4">
          <AffiliateButton
            goSlug={brand.goSlug}
            brandSlug={brand.slug}
            placement="sidebar-offer"
            label="Claim this offer"
            category={categorySlug}
            score={entry.score}
          />
        </div>
        {promo.expiry ? (
          <p className="mt-2 text-center text-xs text-ink-500">
            Offer ends {formatDate(promo.expiry)}
          </p>
        ) : null}
      </div>
    </div>
  );
}
