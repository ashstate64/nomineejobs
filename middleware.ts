import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Optimize cache-control headers for better bfcache performance
  // Based on https://github.com/vercel/next.js/discussions/57644
  
  const isProduction = process.env.NODE_ENV === 'production'
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  // For HTML pages, use cache-friendly headers that don't prevent bfcache
  if (request.nextUrl.pathname.match(/^\/[^.]*$/)) {
    if (isProduction) {
      // Production: Allow bfcache with stale-while-revalidate
      response.headers.set('Cache-Control', 'public, max-age=0, stale-while-revalidate=60, must-revalidate')
    } else if (isDevelopment) {
      // Development: Minimal caching to ensure FormSubmit compatibility
      response.headers.set('Cache-Control', 'no-cache, max-age=0, must-revalidate')
    }
  }
  
  // For static assets, use long-term caching
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // For API routes, use short-term caching
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
  }
  
  // Add performance hints for browser
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Add preload hints for critical resources
  if (request.nextUrl.pathname === '/') {
    // Font preload removed - using system fonts for better performance
    // response.headers.set('Link', '</fonts/inter.woff2>; rel=preload; as=font; crossorigin')
  }
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
} 