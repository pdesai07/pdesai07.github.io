/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/pdesai07.github.io' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig