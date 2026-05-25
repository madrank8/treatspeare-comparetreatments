import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { accentColors, type AccentColor } from "@/lib/accent-colors";
import { rankingWeights } from "@/lib/data/site-content";

/** One distinct accent hue per weighted-criteria stat. */
const weightAccents: AccentColor[] = [
  "blue",
  "teal",
  "green",
  "violet",
  "coral",
];

/**
 * "Rankings you can trust" strip — methodology line, a link to the
 * full review process and the weighted scoring criteria.
 */
export function RankingWeightsBar() {
  return (
    <div className="rounded-xl border border-line-200 bg-surface-50 p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-bold text-ink-900">
            Rankings you can trust
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Every provider is scored against the same weighted criteria —
            no marketing spin, no pay-to-win.
          </p>
        </div>
        <Link
          href="/how-we-review"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
        >
          See How We Review
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {rankingWeights.map((item, i) => {
          const accent =
            accentColors[weightAccents[i % weightAccents.length]];
          return (
            <div
              key={item.label}
              className="rounded-lg border border-line-200 bg-white px-4 py-3 text-center"
            >
              <dt className="text-sm font-medium text-ink-700">
                {item.label}
              </dt>
              <dd
                className={cn(
                  "mt-1 font-display text-2xl font-extrabold tabular-nums",
                  accent.fg,
                )}
              >
                {item.weight}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
