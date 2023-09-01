/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com", "avatars.githubusercontent.com", "res.cloudinary.com", "manager.gabriel-melo.tech"],
  },
};

module.exports = nextConfig;
