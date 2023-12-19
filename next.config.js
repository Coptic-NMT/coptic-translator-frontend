/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend-2tuprk3lxq-uc.a.run.app/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
