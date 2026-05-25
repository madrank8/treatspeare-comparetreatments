import {
  CalendarCheck,
  CircleDollarSign,
  ScrollText,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { formatDate } from "@/lib/utils";
import { TrustStatChip } from "./TrustStatChip";
import { HeroPhoto } from "./HeroPhoto";
import { HeroStatCard } from "./HeroStatCard";

/** The 3-icon trust row shown beneath the homepage hero copy. */
const heroTrustItems = [
  { icon: ScrollText, label: "Expert research you can trust" },
  { icon: ShieldCheck, label: "Independent & unbiased" },
  { icon: CircleDollarSign, label: "Transparent pricing & real reviews" },
] as const;

/**
 * Homepage hero — an integrated, full-bleed composition.
 *
 * The photo bleeds to the top, right and bottom edges of the section and a
 * soft white gradient melts its left edge into the copy, so the photograph
 * and the headline read as ONE woven hero rather than a text box beside a
 * separate image box. On mobile the photo drops to a banner above the fold.
 */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line-200 bg-white">
      {/* Desktop: full-bleed photo layer woven behind/beside the copy. */}
      <div className="absolute inset-y-0 right-0 left-[46%] hidden lg:block">
        <HeroPhoto sizes="56vw" objectPosition="object-center" />
        {/* White gradient blend — melts the photo's left edge into the copy. */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-transparent"
          aria-hidden
        />
        <HeroStatCard className="absolute right-[10%] top-1/2 -translate-y-1/2" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 py-12 sm:py-14 lg:min-h-[600px] lg:grid-cols-2 lg:gap-8 lg:py-24">
          {/* Copy */}
          <div className="relative z-10 max-w-xl">
            <h1 className="fluid-display text-brand-900">
              Compare trusted treatments.{" "}
              <span className="text-brand-600">Choose what&apos;s right.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-700">
              We research, compare, and rank the best treatments so you can
              make confident decisions about your health and wellness.
            </p>

            {/* 3-icon trust row */}
            <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {heroTrustItems.map((item) => {
                const LucideComp = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm font-medium text-ink-700"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                      <LucideComp className="h-4 w-4" aria-hidden />
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/weight-loss" variant="primary" size="lg">
                Browse All Treatments
              </ButtonLink>
              <ButtonLink href="/weight-loss" variant="secondary" size="lg">
                Find My Best Option
              </ButtonLink>
            </div>

            {/* Reassurance strip */}
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-ink-500">
              We only review and recommend providers that meet our strict
              trust and safety standards.{" "}
              <ButtonLink
                href="/how-we-review"
                variant="ghost"
                className="inline px-0 py-0 align-baseline text-sm font-semibold text-brand-600 underline underline-offset-2 hover:bg-transparent"
              >
                See our review process
              </ButtonLink>
            </p>
          </div>

          {/* Mobile: photo banner (the desktop bleed layer is hidden below lg;
              on desktop this column is the empty right half the photo bleeds
              behind). */}
          <div className="relative lg:hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <HeroPhoto sizes="100vw" objectPosition="object-center" />
            </div>
            <HeroStatCard className="absolute -bottom-6 left-2 sm:left-6" />
          </div>
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
