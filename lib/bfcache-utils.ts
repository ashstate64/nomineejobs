/**
 * Back/Forward Cache (bfcache) optimization utilities
 * Based on web.dev bfcache guide: https://web.dev/articles/bfcache
 */

// Track if page was restored from bfcache
export let wasRestoredFromBFCache = false

/**
 * Initialize bfcache event listeners for optimal performance
 */
export function initializeBFCache() {
  if (typeof window === 'undefined') return

  // Detect bfcache restoration
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      wasRestoredFromBFCache = true
      // Page was restored from bfcache
      console.log('Page restored from bfcache')
      
      // Reset any performance measurements
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'bfcache_restore', {
          event_category: 'navigation',
          event_label: 'restored_from_cache',
        })
      }
    }
  })

  // Handle page going into bfcache
  window.addEventListener('pagehide', (event) => {
    if (event.persisted) {
      // Page is being stored in bfcache
      console.log('Page stored in bfcache')
      
      // Clean up any resources that might prevent bfcache
      cleanupForBFCache()
    }
  })

  // Handle visibility changes for better bfcache compatibility
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      // Page is hidden, prepare for potential bfcache storage
      cleanupForBFCache()
    }
  })
}

/**
 * Clean up resources that could prevent bfcache eligibility
 */
function cleanupForBFCache() {
  // Clear any ongoing fetch requests with AbortController
  if (window.pendingRequests) {
    window.pendingRequests.forEach((controller: AbortController) => {
      controller.abort()
    })
    window.pendingRequests.clear()
  }

  // Pause any ongoing timers (they'll resume on restoration)
  // Note: Most timers are automatically paused by the browser
  
  // Close any open IndexedDB transactions
  // (Most will be automatically handled by the browser)
}

/**
 * Create an AbortController for fetch requests to support bfcache
 */
export function createBFCacheCompatibleFetch() {
  const controller = new AbortController()
  
  // Track pending requests for cleanup
  if (!window.pendingRequests) {
    window.pendingRequests = new Set()
  }
  window.pendingRequests.add(controller)
  
  // Clean up on completion
  const originalSignal = controller.signal
  const cleanup = () => {
    if (window.pendingRequests) {
      window.pendingRequests.delete(controller)
    }
  }
  
  originalSignal.addEventListener('abort', cleanup)
  
  return controller
}

/**
 * Check if current navigation is from bfcache
 */
export function isBFCacheRestore(): boolean {
  return wasRestoredFromBFCache
}

/**
 * Enhanced fetch function that supports bfcache
 */
export async function bfcacheFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  const controller = createBFCacheCompatibleFetch()
  
  const response = await fetch(input, {
    ...init,
    signal: controller.signal,
  })
  
  return response
}

/**
 * Performance measurement utilities for bfcache
 */
export function measureBFCachePerformance() {
  if (typeof window === 'undefined') return

  // Measure performance for bfcache restores
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        const navigationEntry = entry as PerformanceNavigationTiming
        
        // Check if this was a back/forward navigation
        if (navigationEntry.type === 'back_forward') {
          console.log('Back/forward navigation detected:', {
            type: navigationEntry.type,
            duration: navigationEntry.duration,
            fromBFCache: wasRestoredFromBFCache
          })
          
          // Report to analytics
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'navigation_timing', {
              event_category: 'performance',
              event_label: 'back_forward',
              value: Math.round(navigationEntry.duration),
              custom_parameters: {
                from_bfcache: wasRestoredFromBFCache
              }
            })
          }
        }
      }
    }
  })
  
  observer.observe({ entryTypes: ['navigation'] })
}

// Global types for tracking
declare global {
  interface Window {
    pendingRequests?: Set<AbortController>
    gtag?: (...args: any[]) => void
  }
} 