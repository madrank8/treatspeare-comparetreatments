import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Container } from "./Container";

/** Thin slate disclosure strip at the very top of every page. */
export function AnnouncementBar() {
  return (
    <div className="bg-brand-900 text-white">
      <Container className="flex items-center justify-center gap-2 py-2 text-center text-xs sm:text-[0.8rem]">
        <ShieldCheck
          className="hidden h-4 w-4 shrink-0 text-brand-100 sm:block"
          aria-hidden
        />
        <span className="text-brand-100">
          We only review and recommend trusted partners.
        </span>
        <Link
          href="/advertising-disclosure"
          className="font-semibold text-white underline underline-offset-2 hover:text-brand-100"
        >
          Advertising disclosure
        </Link>
      </Container>
    </div>
  );
}
