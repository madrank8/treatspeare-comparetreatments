/**
 * Renders a JSON-LD `<script>` tag. Server component — zero client JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; data is built from typed,
      // controlled sources (lib/schema.ts), never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
