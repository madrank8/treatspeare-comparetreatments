import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-brand-100">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold text-ink-900">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 max-w-md text-ink-500">
        The page you&apos;re looking for may have moved. Try starting from a
        treatment category instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" variant="primary">
          Back to homepage
        </ButtonLink>
        <ButtonLink href="/weight-loss" variant="secondary">
          Compare weight-loss treatments
        </ButtonLink>
      </div>
    </Container>
  );
}
