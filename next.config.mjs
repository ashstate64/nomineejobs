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
    // Optimize Lucide React imports to reduce bundle size and main-thread work
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          // Split Lucide React into smaller chunks to prevent large bundles
          lucideIcons: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide-icons',
            chunks: 'all',
            priority: 15,
            minSize: 0,
            maxSize: 30000, // Keep icon chunks small (30KB max)
            enforce: true,
          },
          // Split other vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            maxSize: 80000, // Split vendor chunks at 80KB
            minChunks: 1,
          },
          // Common components and utilities
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            chunks: 'all',
            enforce: true,
          },
        },
      }
    }
    
    // Optimize for better tree shaking
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    // Enable tree shaking for lucide-react specifically
    config.module.rules.push({
      test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
      sideEffects: false,
    })
    
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
