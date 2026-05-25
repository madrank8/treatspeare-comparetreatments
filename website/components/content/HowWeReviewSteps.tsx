import { StepIcon } from "@/components/ui/Icon";
import type { ReviewStep } from "@/types";

/**
 * The numbered editorial process — "How we review every treatment".
 * Steps connect visually on desktop.
 */
export function HowWeReviewSteps({ steps }: { steps: ReviewStep[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step) => (
        <li key={step.number} className="relative">
          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-600 text-white">
                <StepIcon name={step.icon} className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-bold text-brand-600">
                Step {step.number}
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-ink-900">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
