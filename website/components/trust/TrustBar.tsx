import type { TrustStat } from "@/types";

/** Dark stats band — "Why thousands trust CompareTreatments". */
export function TrustBar({
  heading,
  stats,
}: {
  heading: string;
  stats: TrustStat[];
}) {
  return (
    <div className="rounded-xl bg-brand-900 px-6 py-10 text-white sm:px-10 sm:py-12">
      <h2 className="text-center font-display text-2xl font-bold text-white">
        {heading}
      </h2>
      <dl className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-sm text-brand-100">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
