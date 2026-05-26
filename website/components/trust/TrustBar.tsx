import { cn } from "@/lib/utils";
import type { TrustStat } from "@/types";

/**
 * Dark stats band rendering up to five trust statistics. Heading is
 * supplied by the consumer (typically interpolated with `SITE.name`).
 */
export function TrustBar({
  heading,
  stats,
}: {
  heading: string;
  stats: TrustStat[];
}) {
  return (
    <div className="rounded-2xl bg-brand-900 px-6 py-14 sm:px-12 sm:py-16">
      <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl">
        {heading}
      </h2>
      <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "text-center",
              i > 0 && "lg:border-l lg:border-white/10",
            )}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-4xl font-extrabold text-white sm:text-[2.75rem]">
                {stat.value}
              </span>
              <span className="mx-auto mt-2 block max-w-[11rem] text-sm font-medium leading-snug text-brand-100">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
