import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Author } from "@/types";
import { AuthorAvatar } from "./AuthorAvatar";
import { RoleBadge } from "./RoleBadge";

/**
 * Full author block for the `/authors` index grid — avatar, name with
 * credentials, role badge, job title and the short bio. The whole card
 * links to the author's profile page.
 */
export function AuthorCard({ author }: { author: Author }) {
  return (
    <Link
      href={`/authors/${author.slug}`}
      className="group flex flex-col rounded-lg border border-line-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="flex items-center gap-4">
        <AuthorAvatar author={author} size="lg" />
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-ink-900">
            {author.name}
            {author.credentials ? (
              <span className="text-ink-500">, {author.credentials}</span>
            ) : null}
          </h3>
          <p className="mt-0.5 text-sm text-ink-500">{author.jobTitle}</p>
        </div>
      </div>

      <div className="mt-4">
        <RoleBadge role={author.role} />
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
        {author.shortBio}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        View profile
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
