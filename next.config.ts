import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "64.media.tumblr.com", // TODO REMOVE
      },
    ],
  },
};

export default nextConfig;
