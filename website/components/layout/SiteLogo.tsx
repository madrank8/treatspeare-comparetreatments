import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

/**
 * Brand wordmark lockup. No image asset.
 *
 * The wordmark text is driven from `SITE.shortName` so a future brand
 * swap is a single-file change in `lib/site.ts`. The original design
 * split a "name + .com" pattern across two colors; since the working
 * placeholder doesn't have a built-in TLD split, the brand renders in
 * a single tone here. Re-introduce the two-color split (or a logo
 * asset) once the real brand is locked.
 */
export function SiteLogo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <Link
      href="/"
      aria-label={`${SITE.shortName} — home`}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-white">
        <HeartPulse className="h-[18px] w-[18px]" aria-hidden />
      </span>
      <span
        className={cn(
          "font-display text-[1.0625rem] font-bold tracking-tight",
          isDark ? "text-white" : "text-brand-900",
        )}
      >
        {SITE.shortName}
      </span>
    </Link>
  );
}
