import { GraduationCap, MapPin, Award } from "lucide-react";
import type { Author } from "@/types";
import { AuthorAvatar } from "./AuthorAvatar";
import { RoleBadge } from "./RoleBadge";

/** A labeled chip row — licensure, affiliations, education. */
function ChipRow({
  icon: IconComp,
  label,
  items,
}: {
  icon: typeof MapPin;
  label: string;
  items: string[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
        <IconComp className="h-3.5 w-3.5" aria-hidden />
        {label}
      </span>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-sm border border-line-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/**
 * The header block of an author profile page — avatar, name with
 * credentials, role badge, job title and chip rows for licensure,
 * education and professional affiliations (architecture §4.6).
 */
export function AuthorProfileHeader({ author }: { author: Author }) {
  return (
    <header className="rounded-lg border border-line-200 bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <AuthorAvatar author={author} size="xl" />
        <div className="min-w-0 flex-1">
          <RoleBadge role={author.role} />
          <h1 className="mt-3 font-display text-3xl font-bold text-ink-900 sm:text-[2.25rem]">
            {author.name}
            {author.credentials ? (
              <span className="text-ink-500">, {author.credentials}</span>
            ) : null}
          </h1>
          <p className="mt-1 text-base text-ink-700">{author.jobTitle}</p>
          {author.yearsExperience ? (
            <p className="mt-1 text-sm text-ink-500">
              {author.yearsExperience}+ years of experience
            </p>
          ) : null}
        </div>
      </div>

      {(author.licensure?.length ||
        author.affiliations?.length ||
        author.education?.length) ? (
        <div className="mt-6 space-y-3 border-t border-line-200 pt-6">
          {author.licensure && author.licensure.length > 0 ? (
            <ChipRow
              icon={MapPin}
              label="Licensure"
              items={author.licensure}
            />
          ) : null}
          {author.education && author.education.length > 0 ? (
            <ChipRow
              icon={GraduationCap}
              label="Education"
              items={author.education}
            />
          ) : null}
          {author.affiliations && author.affiliations.length > 0 ? (
            <ChipRow
              icon={Award}
              label="Affiliations"
              items={author.affiliations}
            />
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
