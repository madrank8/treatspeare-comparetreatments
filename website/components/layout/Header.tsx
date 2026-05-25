import { ButtonLink } from "@/components/ui/Button";
import { Container } from "./Container";
import { SiteLogo } from "./SiteLogo";
import { MegaNav } from "./MegaNav";
import { MobileNav } from "./MobileNav";

/** Sticky site header: logo, primary nav and a CTA. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <SiteLogo />
          <MegaNav />
        </div>
        <div className="flex items-center gap-2">
          <ButtonLink
            href="/weight-loss"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Compare treatments
          </ButtonLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
