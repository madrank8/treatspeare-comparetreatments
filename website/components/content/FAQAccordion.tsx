"use client";

import { Plus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import type { FAQ } from "@/types";

/**
 * Accessible FAQ accordion (Radix). The matching FAQPage JSON-LD is
 * emitted separately by the page (server-side) from the same data.
 */
export function FAQAccordion({ items }: { items: FAQ[] }) {
  if (items.length === 0) return null;

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="divide-y divide-line-200 overflow-hidden rounded-lg border border-line-200 bg-white"
    >
      {items.map((faq) => (
        <Accordion.Item key={faq.slug} value={faq.slug}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-50">
              <span className="font-display text-base font-semibold text-ink-900">
                {faq.question}
              </span>
              <Plus
                className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-data-[state=open]:rotate-45"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700">
              {faq.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
