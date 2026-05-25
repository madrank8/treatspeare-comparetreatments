import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, FileText } from "lucide-react";
import { SITE } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/eeat/Breadcrumbs";
import { AuthorProfileHeader } from "@/components/eeat/AuthorProfileHeader";
import { ROLE_LABEL } from "@/components/eeat/RoleBadge";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildAuthorProfileSchema } from "@/lib/schema";
import { authors, getAuthor } from "@/lib/data/authors";
import { brandReviews } from "@/lib/data/reviews";
import { getCategory } from "@/lib/data/categories";

type PageParams = { slug: string };

/** Pre-render a page for every author. */
export function generateStaticParams(): PageParams[] {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};

  const path = `/authors/${author.slug}`;
  const titleName = `${author.name}${author.credentials ? `, ${author.credentials}` : ""}`;
  const description = `${titleName} — ${author.jobTitle} at ${SITE.shortName}. ${author.shortBio}`.slice(
    0,
    160,
  );

  return {
    title: `${titleName} — ${ROLE_LABEL[author.role]}`,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${titleName} — ${ROLE_LABEL[author.role]}`,
      description,
      url: `${SITE.url}${path}`,
      type: "profile",
    },
    twitter: { card: "summary" },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const path = `/authors/${author.slug}`;

  // Reviews this person wrote.
  const written = brandReviews.filter((r) => r.authorSlug === author.slug);
  // Reviews this person medically reviewed.
  const reviewed = brandReviews.filter(
    (r) => r.medicalReviewerSlug === author.slug,
  );

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Authors", path: "/authors" },
    { name: author.name, path },
  ];

  return (
    <>
      {/* ── Breadcrumbs ──────────────────────────────────────── */}
      <div className="border-b border-line-200 bg-white">
        <Container className="py-3">
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      <div className="bg-surface-50 py-10 lg:py-14">
        <Container>
          <article className="mx-auto max-w-3xl space-y-8">
            {/* ── Author header ──────────────────────────────── */}
            <AuthorProfileHeader author={author} />

            {/* ── Biography ──────────────────────────────────── */}
            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-ink-900">
                About {author.name}
              </h2>
              <p className="text-base leading-relaxed text-ink-700">
                {author.bio}
              </p>
            </section>

            {/* ── Written by ─────────────────────────────────── */}
            {written.length > 0 ? (
              <ContributionList
                heading={`Written by ${author.name}`}
                reviews={written}
              />
            ) : null}

            {/* ── Medically reviewed by ──────────────────────── */}
            {reviewed.length > 0 ? (
              <ContributionList
                heading={`Medically reviewed by ${author.name}`}
                reviews={reviewed}
              />
            ) : null}

            {written.length === 0 && reviewed.length === 0 ? (
              <section className="rounded-lg border border-line-200 bg-white p-6 text-sm text-ink-500">
                {author.name} sets editorial standards across the site.
                Individual bylined reviews are listed on each contributor&apos;s
                profile.
              </section>
            ) : null}

            {/* ── sameAs / external links ────────────────────── */}
            {author.sameAs.length > 0 ? (
              <section className="rounded-lg border border-line-200 bg-white p-6">
                <h2 className="mb-3 font-display text-lg font-bold text-ink-900">
                  Find {author.name} elsewhere
                </h2>
                <ul className="space-y-2">
                  {author.sameAs.map((url) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden />
                        {linkLabel(url)}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-ink-500">
                  Sample profile links are illustrative for this
                  demonstration build.
                </p>
              </section>
            ) : null}
          </article>
        </Container>
      </div>

      {/* ── Structured data ──────────────────────────────────── */}
      <JsonLd data={buildAuthorProfileSchema({ author, path })} />
    </>
  );
}

/** A list of brand reviews an author contributed to, each a link. */
function ContributionList({
  heading,
  reviews,
}: {
  heading: string;
  reviews: typeof brandReviews;
}) {
  return (
    <section>
      <h2 className="mb-4 font-display text-2xl font-bold text-ink-900">
        {heading}
      </h2>
      <ul className="space-y-2">
        {reviews.map((review) => {
          const category = getCategory(review.categorySlug);
          const href = `/${review.categorySlug}/reviews/${review.brandSlug}`;
          return (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-center gap-3 rounded-lg border border-line-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600"
                  aria-hidden
                >
                  <FileText className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink-900 group-hover:text-brand-600">
                    {review.title}
                  </span>
                  {category ? (
                    <span className="block text-xs text-ink-500">
                      {category.title}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** Friendly label for a sameAs URL. */
function linkLabel(url: string): string {
  if (url.includes("linkedin.com")) return "LinkedIn profile";
  if (url.includes("npiregistry")) return "NPI Registry record";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
