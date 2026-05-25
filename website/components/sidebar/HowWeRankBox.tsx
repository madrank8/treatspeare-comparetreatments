import Link from "next/link";
import { ClipboardCheck } from "lucide-react";
import type { ReviewStep } from "@/types";
import { StepIcon } from "@/components/ui/Icon";

/** Sidebar methodology summary — "How we rank these providers". */
export function HowWeRankBox({ steps }: { steps: ReviewStep[] }) {
  return (
    <div className="rounded-lg border border-line-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-600">
          <ClipboardCheck className="h-4.5 w-4.5" aria-hidden />
        </span>
        <h3 className="font-display text-base font-bold text-ink-900">
          How we rank providers
        </h3>
      </div>
      <ul className="space-y-3">
        {steps.map((step) => (
          <li key={step.number} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
              <StepIcon name={step.icon} className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">
                {step.title}
              </p>
              <p className="text-xs leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href="/how-we-review"
        className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline"
      >
        Read our full methodology &rarr;
      </Link>
    </div>
  );
}
