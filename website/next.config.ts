import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /**
   * Strategy docs name a few legal URLs slightly differently than the
   * built routes (see AUDIT-2026-05-26.md § 2a). Permanent 301
   * redirects keep inbound links from those plan-spelled URLs alive
   * and consolidate the canonical destination for crawlers.
   */
  async redirects() {
    return [
      {
        source: "/terms-of-use",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/accessibility-statement",
        destination: "/accessibility",
        permanent: true,
      },
      {
        source: "/dmca-policy",
        destination: "/dmca",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
