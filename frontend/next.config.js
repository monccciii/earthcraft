/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'icon2.cleanpng.com']
  },
  redirects() {
    return [
      {
        source: '/auth/login',
        destination: `http://localhost:3002/auth/login`,
        permanent: true
      },
    ]
  }
}

module.exports = nextConfig
