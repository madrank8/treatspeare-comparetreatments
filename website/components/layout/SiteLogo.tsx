import Link from "next/link";
import { Stethoscope } from "lucide-react";
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
      aria-label="CompareTreatments.com — home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-600 text-white">
        <Stethoscope className="h-5 w-5" aria-hidden />
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        <span className={isDark ? "text-white" : "text-brand-900"}>
          compare
        </span>
        <span className="text-brand-600">treatments</span>
        <span className={isDark ? "text-brand-100" : "text-ink-500"}>
          .com
        </span>
      </span>
    </Link>
  );
}
