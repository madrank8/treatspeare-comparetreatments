import { StepIcon } from "@/components/ui/Icon";
import type { ReviewStep } from "@/types";

/**
 * The numbered editorial process — "How we review every treatment".
 * Five steps, each with an icon medallion and a number badge.
 */
export function HowWeReviewSteps({ steps }: { steps: ReviewStep[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
      {steps.map((step) => (
        <li key={step.number} className="flex flex-col items-center text-center">
          <div className="relative">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <StepIcon name={step.icon} className="h-6 w-6" />
            </span>
            <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 font-display text-xs font-bold text-white">
              {step.number}
            </span>
          </div>
          <h3 className="mt-4 font-display text-base font-bold text-ink-900">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
