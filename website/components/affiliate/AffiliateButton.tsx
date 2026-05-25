"use client";

import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { trackAffiliateClick } from "@/lib/tracking";

/**
 * The green "VISIT SITE" affiliate CTA. Links to the first-party
 * `/go/[slug]` redirect, fires a GA4 event on click, and carries the
 * correct rel tokens for a paid link (architecture §7).
 */
export function AffiliateButton({
  goSlug,
  brandSlug,
  placement,
  label = "VISIT SITE",
  category,
  score,
  size = "md",
  block = true,
  className,
}: {
  goSlug: string;
  brandSlug: string;
  placement: string;
  label?: string;
  category?: string;
  score?: number;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  className?: string;
}) {
  return (
    <a
      href={`/go/${goSlug}?p=${encodeURIComponent(placement)}`}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      data-brand={brandSlug}
      data-placement={placement}
      onClick={() =>
        trackAffiliateClick({ brand: brandSlug, placement, category, score })
      }
      className={cn(
        buttonVariants({ variant: "affiliate", size, block }),
        "uppercase tracking-wide",
        className,
      )}
    >
      {label}
      <ExternalLink className="h-4 w-4" aria-hidden />
    </a>
  );
}
