/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '6500', // ← پورت سرور بک‌اند تو
        pathname: '/static/images/**',
      },
    ],
  },
};

export default nextConfig;
