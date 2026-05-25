import { StepIcon } from "@/components/ui/Icon";
import type { ReviewStep } from "@/types";

/**
 * The numbered editorial process — "How we review every treatment".
 * Five steps linked by a connector line, each with a prominent icon
 * medallion and a number badge.
 */
export function HowWeReviewSteps({ steps }: { steps: ReviewStep[] }) {
  return (
    <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li
          key={step.number}
          className="relative flex flex-col items-center text-center"
        >
          {/* Connector line to the next step — desktop only */}
          {i < steps.length - 1 ? (
            <span
              className="absolute left-1/2 top-10 hidden h-0.5 w-[calc(100%_+_1.5rem)] bg-brand-100 lg:block"
              aria-hidden
            />
          ) : null}

          {/* Icon medallion + number badge */}
          <div className="relative z-10">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <StepIcon name={step.icon} className="h-9 w-9" />
            </span>
            <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-600 font-display text-sm font-bold text-white">
              {step.number}
            </span>
          </div>

          <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
            {step.title}
          </h3>
          <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-ink-500">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
