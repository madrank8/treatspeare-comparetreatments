"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CategoryIcon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { getCategoryAccent } from "@/lib/accent-colors";
import { orderedCategories } from "@/lib/data/categories";

/**
 * Desktop primary navigation with an accessible category mega-menu
 * dropdown (Radix NavigationMenu).
 */
export function MegaNav() {
  return (
    <NavigationMenu.Root className="relative hidden lg:block" delayDuration={80}>
      <NavigationMenu.List className="flex items-center gap-1">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-600 data-[state=open]:text-brand-600">
            Treatments
            <ChevronDown
              className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-full pt-2 data-[motion=from-start]:animate-in data-[motion=from-end]:animate-in">
            <div className="w-[640px] rounded-lg border border-line-200 bg-white p-4 shadow-card-hover">
              <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Browse by category
              </p>
              <ul className="grid grid-cols-2 gap-1">
                {orderedCategories.map((cat) => {
                  const accent = getCategoryAccent(cat.slug);
                  return (
                  <li key={cat.slug}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={`/${cat.slug}`}
                        className="flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-brand-50"
                      >
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
                            accent.tint,
                            accent.fg,
                          )}
                        >
                          <CategoryIcon
                            name={cat.icon}
                            className="h-5 w-5"
                          />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink-900">
                            {cat.title}
                          </span>
                          <span className="block text-xs text-ink-500">
                            {cat.tileDescription}
                          </span>
                        </span>
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                  );
                })}
              </ul>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/weight-loss"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
            >
              Reviews
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/how-we-review"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
            >
              Articles
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
