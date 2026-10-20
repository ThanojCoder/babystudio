/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Perfect for static local export and rapid local image rendering
  },
};

export default nextConfig;
