const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend-python-2tuprk3lxq-uc.a.run.app/:path*",
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
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
