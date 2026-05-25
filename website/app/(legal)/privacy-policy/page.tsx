import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { getLegalPage } from "@/lib/legal";

const SLUG = "privacy-policy";
const page = getLegalPage(SLUG)!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `/${SLUG}` },
};

export default function PrivacyPolicyPage() {
  return <LegalPageView slug={SLUG} />;
}
