import { Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Affiliate / advertising disclosure. FTC requires this to appear
 * clearly BEFORE any offer chart (architecture §6).
 */
export function DisclosureBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-line-200 bg-brand-50 p-4",
        className,
      )}
    >
      <Info
        className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
        aria-hidden
      />
      <p className="text-sm leading-relaxed text-ink-700">
        <span className="font-semibold text-ink-900">
          Advertising disclosure:
        </span>{" "}
        CompareTreatments is reader-supported. When you click through to a
        provider listed below, we may earn a commission. This never
        influences our scores, rankings or editorial opinions — our
        methodology is applied identically to every provider.{" "}
        <Link
          href="/affiliate-disclosure"
          className="font-medium text-brand-600 underline underline-offset-2"
        >
          Read our full disclosure
        </Link>
        .
      </p>
    </div>
  );
}
