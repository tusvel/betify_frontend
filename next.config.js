/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false, // Чтобы если кто-то будет пробивать, то он не видел что наш сайт сделан на next.js и тд
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
