/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.joomshaper.com',
        port: '',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  }
};

module.exports = nextConfig;
