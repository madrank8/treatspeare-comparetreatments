import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { SITE } from "@/lib/site";
import { Container } from "./Container";
import { SiteLogo } from "./SiteLogo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/authors" },
  { label: "How We Review", href: "/how-we-review" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Weight Loss", href: "/weight-loss" },
  { label: "ED Treatment", href: "/ed" },
  { label: "Hair Loss", href: "/hair-loss" },
  { label: "Blood Testing", href: "/blood-testing" },
  { label: "Advanced Wellness", href: "/wellness" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

/** Site footer: brand lockup, social icons, link columns and copyright. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-200 bg-brand-900 text-brand-100">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand + tagline + socials */}
          <div>
            <SiteLogo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/80">
              Compare treatments. Save time. Live better.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => {
                const LucideComp = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-brand-100 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    <LucideComp className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Company">
            {companyLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {resourceLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

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
            {SITE.disclosure} {SITE.shortName} does not provide medical
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
