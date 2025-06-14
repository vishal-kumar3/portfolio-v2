import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*', // Apply CSP to all paths
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              img-src 'self' data: https://i.imgur.com *.imgur.com https://img.shields.io *.shields.io https://placehold.co *.placehold.co https://opengraph.githubassets.com https://avatars.githubusercontent.com https://raw.githubusercontent.com https://repository-images.githubusercontent.com;
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.tailwindcss.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.github.com;
            `.replace(/\s{2,}/g, ' ').trim(), // Remove excess whitespace
          },
        ],
      },
    ];
  },
};

export default nextConfig;
