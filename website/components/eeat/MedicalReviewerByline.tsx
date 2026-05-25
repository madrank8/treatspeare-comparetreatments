import { BadgeCheck, CalendarCheck } from "lucide-react";
import type { Author } from "@/types";
import { formatDate } from "@/lib/utils";

/**
 * "Medically reviewed by [Author], [credentials] · Last reviewed
 * [date]" — the YMYL E-E-A-T signal block.
 */
export function MedicalReviewerByline({
  reviewer,
  lastReviewed,
}: {
  reviewer: Author;
  lastReviewed: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-line-200 bg-brand-50 p-5 sm:flex-row sm:items-center">
      {/* Avatar */}
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white"
        aria-hidden
      >
        {reviewer.initials}
      </span>

      <div className="flex-1">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
          <BadgeCheck className="h-4 w-4" aria-hidden />
          Medically reviewed
        </p>
        <p className="mt-0.5 text-sm text-ink-700">
          Reviewed by{" "}
          <span className="font-semibold text-ink-900">
            {reviewer.name}
            {reviewer.credentials ? `, ${reviewer.credentials}` : ""}
          </span>{" "}
          — {reviewer.jobTitle}.
        </p>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-500">
          <CalendarCheck className="h-3.5 w-3.5" aria-hidden />
          Last reviewed {formatDate(lastReviewed)}. Content is re-reviewed
          at least every 90 days.
        </p>
      </div>
    </div>
  );
}
