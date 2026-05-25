"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { CategoryIcon } from "@/components/ui/Icon";
import { orderedCategories } from "@/lib/data/categories";
import { SiteLogo } from "./SiteLogo";

/** Mobile navigation drawer (Radix Dialog). */
export function MobileNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 hover:bg-brand-50 lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-brand-900/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-float">
          <div className="flex items-center justify-between border-b border-line-200 p-4">
            <SiteLogo />
            <Dialog.Title className="sr-only">Site menu</Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 hover:bg-brand-50"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex-1 p-4">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
              Treatments
            </p>
            <ul className="mb-6 space-y-1">
              {orderedCategories.map((cat) => (
                <li key={cat.slug}>
                  <Dialog.Close asChild>
                    <Link
                      href={`/${cat.slug}`}
                      className="flex items-center gap-3 rounded-md p-2.5 text-sm font-semibold text-ink-700 hover:bg-brand-50"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                        <CategoryIcon name={cat.icon} className="h-4 w-4" />
                      </span>
                      {cat.title}
                    </Link>
                  </Dialog.Close>
                </li>
              ))}
            </ul>

            <div className="space-y-1 border-t border-line-200 pt-4">
              <Dialog.Close asChild>
                <Link
                  href="/how-we-review"
                  className="block rounded-md p-2.5 text-sm font-semibold text-ink-700 hover:bg-brand-50"
                >
                  How we review
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link
                  href="/about"
                  className="block rounded-md p-2.5 text-sm font-semibold text-ink-700 hover:bg-brand-50"
                >
                  About us
                </Link>
              </Dialog.Close>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
