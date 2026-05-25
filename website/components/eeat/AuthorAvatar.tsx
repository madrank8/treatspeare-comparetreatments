import { cn } from "@/lib/utils";
import type { Author } from "@/types";

/**
 * Initials-based circular avatar for an author / medical reviewer.
 * There are no photo files in this build, so — like `BrandLogo` — the
 * avatar is a clean styled placeholder built from the person's
 * initials. No broken image references.
 */
export function AuthorAvatar({
  author,
  size = "md",
  className,
}: {
  author: Pick<Author, "initials" | "name">;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const dims = {
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-16 w-16 text-lg",
    xl: "h-24 w-24 text-2xl",
  }[size];

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-brand-600 font-display font-bold text-white",
        dims,
        className,
      )}
      role="img"
      aria-label={author.name}
    >
      {author.initials}
    </span>
  );
}
