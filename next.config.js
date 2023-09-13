/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  images: {
    domains: ["localhost", "manager", "github.com", "avatars.githubusercontent.com", "manager.gabriel-melo.tech"],
  },
};

module.exports = nextConfig;
