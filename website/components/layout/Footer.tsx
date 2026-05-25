import Link from "next/link";
import { SITE } from "@/lib/site";
import { orderedCategories } from "@/lib/data/categories";
import { Container } from "./Container";
import { SiteLogo } from "./SiteLogo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/authors" },
  { label: "How We Review", href: "/how-we-review" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "DMCA", href: "/dmca" },
];

/** Site footer: link columns, disclosure text and copyright. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-200 bg-brand-900 text-brand-100">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + mission */}
          <div>
            <SiteLogo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/80">
              Independent, evidence-based comparisons of US telehealth
              treatments — so you can choose care with confidence.
            </p>
          </div>

          {/* Categories */}
          <FooterColumn title="Treatments">
            {orderedCategories.slice(0, 6).map((cat) => (
              <FooterLink key={cat.slug} href={`/${cat.slug}`}>
                {cat.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company">
            {companyLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Legal */}
          <FooterColumn title="Legal">
            {legalLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-brand-100/70">
            {SITE.disclosure} CompareTreatments does not provide medical
            advice, diagnosis or treatment. Always seek the advice of a
            licensed clinician with any questions about a medical condition.
          </p>
          <p className="mt-4 text-xs text-brand-100/60">
            &copy; {year} {SITE.name}. All rights reserved. This is a
            demonstration build with sample data.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
        {title}
      </h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-brand-100/80 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
