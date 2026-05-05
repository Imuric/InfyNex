/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // <--- ADD THIS. Required for static images in V0.
  }
};

export default nextConfig;