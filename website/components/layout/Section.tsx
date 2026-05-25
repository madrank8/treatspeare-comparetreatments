import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * A full-bleed section band with a centered inner Container.
 * `tone` controls the background wash.
 */
export function Section({
  tone = "default",
  className,
  containerClassName,
  children,
  id,
}: {
  tone?: "default" | "muted" | "tint" | "dark";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
}) {
  const toneClass = {
    default: "bg-surface-0",
    muted: "bg-surface-50",
    tint: "bg-brand-50",
    dark: "bg-brand-900 text-white",
  }[tone];

  return (
    <section
      id={id}
      className={cn("py-16 lg:py-24", toneClass, className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** A centered section heading with optional eyebrow and dek. */
export function SectionHeading({
  eyebrow,
  title,
  dek,
  align = "center",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
  align?: "center" | "left";
  tone?: "default" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "mb-10 lg:mb-12",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-sm font-semibold uppercase tracking-wide",
            isDark ? "text-brand-100" : "text-brand-600",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold sm:text-[2rem]",
          isDark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {dek ? (
        <p
          className={cn(
            "mt-3 text-lg",
            isDark ? "text-brand-100" : "text-ink-500",
          )}
        >
          {dek}
        </p>
      ) : null}
    </div>
  );
}
