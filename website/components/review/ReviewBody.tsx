import type { ReviewSection } from "@/types";

/**
 * Renders the long-form review body — an array of H2 sections, each
 * with one or more paragraphs. Uses the shared `.prose-body` styling.
 */
export function ReviewBody({ sections }: { sections: ReviewSection[] }) {
  if (sections.length === 0) return null;

  return (
    <div className="prose-body max-w-none text-ink-700">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="font-display text-ink-900">{section.heading}</h2>
          {section.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
