import { cn } from "@/lib/utils";
import type { Brand } from "@/types";

/**
 * Renders a brand "logo" as a clean styled wordmark — no image files.
 * The colored mark + name reads as a credible logo lockup.
 */
export function BrandLogo({
  brand,
  size = "md",
  className,
}: {
  brand: Pick<Brand, "name" | "brandColor">;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims = {
    sm: { mark: "h-7 w-7 text-sm", name: "text-sm" },
    md: { mark: "h-10 w-10 text-base", name: "text-base" },
    lg: { mark: "h-12 w-12 text-lg", name: "text-lg" },
  }[size];

  // First letter as the colored mark glyph.
  const glyph = brand.name.charAt(0).toUpperCase();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-md font-bold text-white",
          brand.brandColor,
          dims.mark,
        )}
        aria-hidden
      >
        {glyph}
      </span>
      <span
        className={cn(
          "font-display font-bold tracking-tight text-ink-900",
          dims.name,
        )}
      >
        {brand.name}
      </span>
    </div>
  );
}
