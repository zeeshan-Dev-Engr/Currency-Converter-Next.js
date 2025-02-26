/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // Optimizes for production deployment
    images: {
        domains: ['media.istockphoto.com'], // For your background image
    },
    // Enable static optimization where possible
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
