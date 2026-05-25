import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { getLegalPage } from "@/lib/legal";

const SLUG = "terms-of-service";
const page = getLegalPage(SLUG)!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `/${SLUG}` },
};

export default function TermsOfServicePage() {
  return <LegalPageView slug={SLUG} />;
}
