/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Ensure static files are served
  assetPrefix: '/',
};

module.exports = nextConfig;
