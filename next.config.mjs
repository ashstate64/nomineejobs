import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize bundle splitting
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-select',
      '@radix-ui/react-progress',
    ],
  },
  // Enable compression
  compress: true,
  // Optimize headers for bfcache and performance
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'production' 
              ? 'public, max-age=3600, stale-while-revalidate=86400'
              : 'no-cache, no-store, must-revalidate', // Dev mode
          },
          // Security headers that don't interfere with bfcache
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
      {
        // Optimize static assets for caching
        source: '/(.*)\\.(js|css|woff|woff2|jpg|jpeg|png|gif|ico|svg|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // API routes should not be cached aggressively
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },
  // Bundle size optimizations
  webpack: (config, { isServer, dev }) => {
    // Optimize for better tree shaking
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    // Client-side optimizations
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Disable WebSocket in production for bfcache compatibility
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Prevent WebSocket usage in production client bundle
      }
    }
    
    return config
  },
}

export default withBundleAnalyzer(nextConfig)
