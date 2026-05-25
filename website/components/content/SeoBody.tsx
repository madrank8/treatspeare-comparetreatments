import type { SeoBlock } from "@/types";

/**
 * Renders a long-form SEO body — an array of typed blocks (the plain-TS
 * replacement for Portable Text).
 */
export function SeoBody({ blocks }: { blocks: SeoBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="prose-body max-w-none text-ink-700">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="font-display text-ink-900">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}
