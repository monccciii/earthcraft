/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'icon2.cleanpng.com', 'images-ext-2.discordapp.net']
  },
  redirects() {
    return [
      {
        source: '/auth/login',
        destination: `${process.env.API_URL}auth/login`,
        permanent: true
      },
    ]
  }
}

module.exports = nextConfig
