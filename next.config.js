/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.oklink.com",
      },
    ],
  },
  // i18n: {
  //   locales: ["en", "zh-CN"],
  //   defaultLocale: "en",
  // },
};

module.exports = nextConfig;
