/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    appDir: true
  },
  target: "serverless",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io"
      }
    ]
  },
  // output: 'export',
  
};

export default nextConfig;
