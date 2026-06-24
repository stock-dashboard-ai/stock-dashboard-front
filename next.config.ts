import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React Strict Mode for catching potential issues during development
  reactStrictMode: true,

  // Turbopack configuration (top-level in Next.js 16+, moved from experimental.turbopack)
  turbopack: {},

  // Image optimization configuration
  images: {
    // Add external image domains/patterns as needed
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //     port: '',
    //     pathname: '/images/**',
    //   },
    // ],
    formats: ['image/avif', 'image/webp'],
  },

  // Compiler options
  compiler: {
    // Remove console.log statements in production builds
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Redirect configuration (add as needed)
  // async redirects() {
  //   return []
  // },

  // Rewrite configuration (add as needed)
  // async rewrites() {
  //   return []
  // },
}

export default nextConfig
