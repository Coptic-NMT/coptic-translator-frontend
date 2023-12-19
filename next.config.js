/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.BACKEND_API + "/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
