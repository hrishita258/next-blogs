/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['ncmaz.chisnghiax.com', 'miro.medium.com', 'upload.wikimedia.org']
  }
}

module.exports = nextConfig
