import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/eeat/Breadcrumbs";
import { AuthorCard } from "@/components/eeat/AuthorCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebPageSchema } from "@/lib/schema";
import { authors } from "@/lib/data/authors";

const PATH = "/authors";
const TITLE = "Our Editorial & Medical Review Team";
const DESCRIPTION = `Meet the writers, editors and board-certified medical reviewers behind ${SITE.shortName} — the people who research, write and clinically review every treatment comparison.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function AuthorsIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Authors", path: PATH },
  ];

  return (
    <>
      {/* ── Breadcrumbs ──────────────────────────────────────── */}
      <div className="border-b border-line-200 bg-white">
        <Container className="py-3">
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      <div className="bg-surface-50 py-10 lg:py-16">
        <Container>
          {/* ── Intro ──────────────────────────────────────── */}
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-[2.5rem]">
              {TITLE}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              Every comparison on {SITE.shortName} is researched and written
              by experienced health writers, then checked for clinical
              accuracy by board-certified physicians. This is a YMYL health
              site, so real authorship and medical review are not optional —
              they are the product. Meet the team responsible for the content
              you read here.
            </p>
          </header>

          {/* ── Author grid ────────────────────────────────── */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
            {authors.map((author) => (
              <AuthorCard key={author.slug} author={author} />
            ))}
          </div>
        </Container>
      </div>

      {/* ── Structured data ──────────────────────────────────── */}
      <JsonLd
        data={buildWebPageSchema({
          name: TITLE,
          description: DESCRIPTION,
          path: PATH,
        })}
      />
    </>
  );
}
