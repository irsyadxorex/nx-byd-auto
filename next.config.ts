import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "**.placehold.co",
      },
      {
        protocol: "https",
        hostname: "www.byd.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.byd.com",
      },
      {
        protocol: "https",
        hostname: "www.denza.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.denza.com",
      },
    ],
  },
};

export default nextConfig;
