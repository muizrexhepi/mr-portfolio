/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: process.env.VERCEL_ENV === 'production' ? 'all' : 'noindex'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig