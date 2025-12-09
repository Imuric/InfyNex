/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- ADD THIS LINE. This creates the static HTML.
  images: {
    unoptimized: true, // <--- ADD THIS. Required for static images in V0.
  }
};

export default nextConfig;