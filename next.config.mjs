/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/urja-nayi",

  assetPrefix: "/urja-nayi/",
};

export default nextConfig;