import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

/** The CompareTreatments wordmark lockup. No image asset. */
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
      aria-label="comparetreatments.com — home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-white">
        <HeartPulse className="h-[18px] w-[18px]" aria-hidden />
      </span>
      <span className="font-display text-[1.0625rem] font-bold tracking-tight">
        <span className={isDark ? "text-white" : "text-brand-900"}>
          comparetreatments
        </span>
        <span className={isDark ? "text-brand-100" : "text-ink-500"}>
          .com
        </span>
      </span>
    </Link>
  );
}
