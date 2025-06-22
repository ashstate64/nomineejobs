"use client"

import { useEffect } from 'react'
import { initializeBFCache, measureBFCachePerformance } from '@/lib/bfcache-utils'

/**
 * BFCache optimization component that should be included in the root layout
 * to ensure bfcache compatibility across the entire application
 */
export function BFCacheOptimizer() {
  useEffect(() => {
    // Initialize bfcache event listeners
    initializeBFCache()
    
    // Set up performance monitoring
    measureBFCachePerformance()
    
    // Clean up any resources that might prevent bfcache on unmount
    return () => {
      // Clear any pending requests when component unmounts
      if (window.pendingRequests) {
        window.pendingRequests.forEach((controller) => {
          controller.abort()
        })
        window.pendingRequests.clear()
      }
    }
  }, [])

  // This component doesn't render anything visible
  return null
}

/**
 * Hook to use bfcache-compatible effects
 */
export function useBFCacheEffect(effect: () => void | (() => void), deps?: React.DependencyList) {
  useEffect(() => {
    // Only run effect if not restored from bfcache
    const cleanup = effect()
    
    // Handle bfcache restoration
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from bfcache, re-run effect
        effect()
      }
    }
    
    window.addEventListener('pageshow', handlePageShow)
    
    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      if (cleanup) {
        cleanup()
      }
    }
  }, deps)
} 