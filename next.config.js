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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.paypal.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
