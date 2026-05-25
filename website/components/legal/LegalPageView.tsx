import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/eeat/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebPageSchema } from "@/lib/schema";
import { getLegalContent, getLegalPage } from "@/lib/legal";

/**
 * Shared renderer for every legal / company page.
 *
 * Reads the page's markdown content file, parses it to trusted
 * first-party HTML at build time, and renders it inside the site's
 * standard chrome: breadcrumbs, an H1 and a styled `.legal-prose`
 * container. Emits matching `WebPage` JSON-LD (the breadcrumb schema
 * is emitted by the `Breadcrumbs` component itself).
 */
export function LegalPageView({ slug }: { slug: string }) {
  const page = getLegalPage(slug);
  if (!page) {
    throw new Error(`Unknown legal page slug: "${slug}"`);
  }

  const html = getLegalContent(slug);
  const path = `/${page.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: page.title, path },
  ];

  return (
    <>
      {/* ── Breadcrumbs ──────────────────────────────────────── */}
      <div className="border-b border-line-200 bg-white">
        <Container className="py-3">
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      {/* ── Page body ────────────────────────────────────────── */}
      <div className="bg-surface-50 py-10 lg:py-16">
        <Container>
          <article className="mx-auto max-w-3xl">
            <header className="mb-8 border-b border-line-200 pb-6">
              <h1 className="text-3xl font-bold text-ink-900 sm:text-[2.25rem]">
                {page.title}
              </h1>
            </header>

            <div
              className="legal-prose"
              // First-party, trusted content: parsed at build time from
              // our own markdown files in `content/legal/` — never user
              // input. Renders the GFM tables in the source documents.
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </Container>
      </div>

      {/* ── Structured data ──────────────────────────────────── */}
      <JsonLd
        data={buildWebPageSchema({
          name: page.title,
          description: page.metaDescription,
          path,
        })}
      />
    </>
  );
}
