import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "./Container";
import { SiteLogo } from "./SiteLogo";
import { MegaNav } from "./MegaNav";
import { MobileNav } from "./MobileNav";

/** Sticky site header: logo, primary nav and a search affordance. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <Container className="flex h-16 items-center justify-between gap-4">
        <SiteLogo />
        <div className="flex items-center gap-1">
          <MegaNav />
          <Link
            href="/weight-loss"
            aria-label="Search treatments"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-md text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
          >
            <Search className="h-[18px] w-[18px]" aria-hidden />
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
