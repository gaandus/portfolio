/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Forces static output
  assetPrefix: '/',
  images: {
    unoptimized: true, // Disable Next.js Image Optimization
  },
};

module.exports = nextConfig;
