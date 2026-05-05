import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/food-guide",
        destination: "/food",
        permanent: true,
      },
      {
        source: "/sleep-guide",
        destination: "/sleep",
        permanent: true,
      },
      {
        source: "/growth",
        destination: "/tools/growth",
        permanent: true,
      },
      {
        source: "/early-intervention",
        destination: "/resources/early-intervention",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
