/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'producion'
const nextConfig = {
    output: isProd ? 'export' : '',
    distDir: 'dist',
    images: { unoptimized: true }
}

module.exports = nextConfig
