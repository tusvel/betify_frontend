/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*'
      },
      {
        source: '/file/:path*',
        destination: 'http://localhost:5000/file/:path*'
      }
    ];
  }
};

module.exports = nextConfig;
