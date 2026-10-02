import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/generator",
        destination: "https://app.codeandbuild.tech/generator",
        permanent: false,
      },
      {
        source: "/generator/:path*",
        destination: "https://app.codeandbuild.tech/generator/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
