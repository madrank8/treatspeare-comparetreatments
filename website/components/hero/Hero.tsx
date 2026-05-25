import { CalendarCheck, ShieldCheck, Stethoscope } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { formatDate } from "@/lib/utils";
import { TrustStatChip } from "./TrustStatChip";
import { TrustMicroRow } from "./TrustMicroRow";
import { HeroIllustration } from "./HeroIllustration";

/** Homepage hero — split layout with illustration and floating chip. */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-line-200 bg-white">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Left: copy */}
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Independent telehealth comparisons
          </p>
          <h1 className="fluid-display text-brand-900">
            Compare trusted treatments.{" "}
            <span className="text-brand-600">Choose what&apos;s right.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-700">
            We research, score and medically review US telehealth providers
            across weight loss, men&apos;s and women&apos;s health and more —
            so you can compare your options side by side and pick with
            confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/weight-loss" variant="primary" size="lg">
              Browse all treatments
            </ButtonLink>
            <ButtonLink href="/how-we-review" variant="secondary" size="lg">
              How we review
            </ButtonLink>
          </div>
          <TrustMicroRow
            points={["Independent", "Evidence-based", "Medically reviewed"]}
            className="mt-6"
          />
        </div>

        {/* Right: illustration + floating chip */}
        <div className="relative">
          {/* Reserve space so the chip never shifts layout */}
          <HeroIllustration className="w-full" />
          <TrustStatChip
            value="1,804"
            label="Treatments reviewed"
            className="absolute -bottom-4 left-2 sm:left-6"
          />
        </div>
      </Container>
    </section>
  );
}

/** Category-hub hero — heading, dek, 3-icon trust strip, last-updated. */
export function HubHero({
  headline,
  intro,
  lastReviewed,
  reviewedTreatments = "1,804",
}: {
  headline: string;
  intro: string;
  lastReviewed: string;
  reviewedTreatments?: string;
}) {
  const trustItems = [
    { icon: Stethoscope, label: "Expert reviewed" },
    { icon: ShieldCheck, label: "Independent & unbiased" },
    {
      icon: CalendarCheck,
      label: `Updated ${formatDate(lastReviewed)}`,
    },
  ];

  return (
    <section className="border-b border-line-200 bg-white">
      <Container className="py-10 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
              {headline}
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
              {intro}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {trustItems.map((item) => {
                const LucideComp = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm font-medium text-ink-700"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                      <LucideComp className="h-4 w-4" aria-hidden />
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden justify-end lg:flex">
            <TrustStatChip
              value={reviewedTreatments}
              label="Treatments reviewed"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
