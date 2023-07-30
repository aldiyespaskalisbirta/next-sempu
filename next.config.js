/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
    serverActions: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
      },
    ],
  },
  env: {
    MAP_URL: process.env.MAP_URL,
  },
};
