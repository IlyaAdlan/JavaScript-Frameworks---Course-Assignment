/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/JavaScript-Frameworks---Course-Assignment',
  assetPrefix: '/JavaScript-Frameworks---Course-Assignment/',
  distDir: 'out'
}

module.exports = nextConfig