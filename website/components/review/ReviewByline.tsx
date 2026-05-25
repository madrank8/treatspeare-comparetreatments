import Link from "next/link";
import { BadgeCheck, CalendarCheck, PenLine } from "lucide-react";
import type { Author } from "@/types";
import { formatDate } from "@/lib/utils";
import { AuthorAvatar } from "@/components/eeat/AuthorAvatar";

/** One person row inside the byline block — links to the author page. */
function PersonRow({
  author,
  role,
  icon: IconComp,
}: {
  author: Author;
  role: string;
  icon: typeof PenLine;
}) {
  return (
    <Link
      href={`/authors/${author.slug}`}
      className="group flex items-center gap-3"
    >
      <AuthorAvatar author={author} size="md" />
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
          <IconComp className="h-3.5 w-3.5" aria-hidden />
          {role}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-ink-900 group-hover:text-brand-600">
          {author.name}
          {author.credentials ? `, ${author.credentials}` : ""}
        </p>
        <p className="text-xs text-ink-500">{author.jobTitle}</p>
      </div>
    </Link>
  );
}

/**
 * Brand review byline block — the writer, the medical reviewer and the
 * publish / modified / last-reviewed dates. The YMYL E-E-A-T signal
 * for a review page (architecture §4.4 step 10).
 */
export function ReviewByline({
  author,
  reviewer,
  datePublished,
  dateModified,
  lastReviewed,
}: {
  author: Author;
  reviewer: Author;
  datePublished: string;
  dateModified: string;
  lastReviewed: string;
}) {
  return (
    <div className="rounded-lg border border-line-200 bg-brand-50 p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <PersonRow author={author} role="Written by" icon={PenLine} />
        <PersonRow
          author={reviewer}
          role="Medically reviewed by"
          icon={BadgeCheck}
        />
      </div>
      <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line-200 pt-4 text-xs text-ink-500">
        <span className="flex items-center gap-1.5">
          <CalendarCheck className="h-3.5 w-3.5" aria-hidden />
          Published {formatDate(datePublished)}
        </span>
        <span>Last updated {formatDate(dateModified)}</span>
        <span className="font-medium text-ink-700">
          Last medically reviewed {formatDate(lastReviewed)}
        </span>
      </p>
      <p className="mt-2 text-xs leading-relaxed text-ink-500">
        This review is independent editorial content and is re-reviewed at
        least every 90 days. It is not medical advice — talk to a licensed
        clinician about whether a treatment is right for you.
      </p>
    </div>
  );
}
