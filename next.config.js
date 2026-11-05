/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
