/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- ADD THIS LINE. This creates the static HTML.
  images: {
    unoptimized: true, // <--- ADD THIS. Required for static images in V0.
  }
};
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mail.yourdomain.com',
          },
        ],
        destination: 'https://mail.hostinger.com/v2',
        permanent: true,
      },
    ]
  },
}
export default nextConfig;
