import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/fairfield/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/stamford/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hours",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/directions",
        destination: "/contact",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
