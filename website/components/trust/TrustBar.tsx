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
    <div className="rounded-xl bg-brand-900 px-6 py-12 text-white sm:px-10 sm:py-14">
      <h2 className="text-center font-display text-2xl font-bold text-white sm:text-[1.75rem]">
        {heading}
      </h2>
      <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="mx-auto mt-1.5 block max-w-[10rem] text-sm leading-snug text-brand-100">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
