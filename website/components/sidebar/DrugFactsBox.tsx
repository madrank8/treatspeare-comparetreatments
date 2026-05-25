import { Pill } from "lucide-react";
import type { DrugFacts } from "@/types";

/** Structured drug-information block for the sidebar. */
export function DrugFactsBox({ facts }: { facts: DrugFacts }) {
  const rows: { label: string; value: string }[] = [
    { label: "Generic name", value: facts.genericName },
    { label: "Brand names", value: facts.brandNames.join(", ") },
    { label: "Drug class", value: facts.drugClass },
    { label: "Administration", value: facts.administration },
  ];

  return (
    <div className="rounded-lg border border-line-200 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-600">
          <Pill className="h-4.5 w-4.5" aria-hidden />
        </span>
        <h3 className="font-display text-base font-bold text-ink-900">
          Treatment facts
        </h3>
      </div>
      <dl className="divide-y divide-line-200 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-4 py-2">
            <dt className="text-ink-500">{row.label}</dt>
            <dd className="text-right font-medium text-ink-900">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-3 border-t border-line-200 pt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
          Common side effects
        </p>
        <p className="mt-1 text-sm text-ink-700">
          {facts.commonSideEffects.join(", ")}.
        </p>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-500">
        Educational summary only — not a complete list. Discuss safety
        information with a licensed clinician.
      </p>
    </div>
  );
}
