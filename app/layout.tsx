import type { Metadata, Viewport } from 'next'
import './globals.css'
import { BFCacheOptimizer } from '@/components/bfcache-optimizer'

export const metadata: Metadata = {
  title: {
    default: 'NomineeJobs - Earn £600-£20k+ as a UK Nominee Director | Work From Home',
    template: '%s | NomineeJobs'
  },
  description: 'Join the UK\'s leading nominee director programme. Earn £600-£20,000+ annually providing professional nominee services to companies. FCA-supervised, fully insured, work from home.',
  keywords: [
    'nominee director jobs',
    'nominee director UK',
    'work from home UK',
    'director services',
    'company formation services',
    'UK business services',
    'earn money from home',
    'director for hire',
    'registered office services',
    'company secretary services'
  ],
  authors: [{ name: 'NomineeJobs', url: 'https://nomineejobs.co.uk' }],
  creator: 'NomineeJobs',
  publisher: 'NomineeJobs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nomineejobs.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://nomineejobs.co.uk',
    siteName: 'NomineeJobs',
    title: 'NomineeJobs - Earn £600-£20k+ as a UK Nominee Director',
    description: 'Join the UK\'s leading nominee director programme. Earn £600-£20,000+ annually providing professional nominee services to companies. FCA-supervised, fully insured.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NomineeJobs - UK Nominee Director Services',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'NomineeJobs - Earn as a Nominee Director',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NomineeJobs - Earn £600-£20k+ as a UK Nominee Director',
    description: 'Join the UK\'s leading nominee director programme. Earn £600-£20,000+ annually. FCA-supervised, fully insured, work from home.',
    images: ['/twitter-image.jpg'],
    creator: '@nomineejobs',
    site: '@nomineejobs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb',
      },
    ],
  },
  manifest: '/site.webmanifest',

  category: 'business',
  classification: 'Business Services',
  other: {
    'google-site-verification': 'your-google-verification-code', // Add your actual verification code
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1d4ed8' }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NomineeJobs',
              url: 'https://nomineejobs.co.uk',
              logo: 'https://nomineejobs.co.uk/logo.png',
              description: 'UK\'s leading nominee director programme offering professional director services for companies.',
              foundingDate: '2020',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
                addressRegion: 'England',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+44-xxx-xxx-xxxx',
                email: 'info@nomineejobs.co.uk',
                contactType: 'customer service',
                availableLanguage: 'English'
              },
              sameAs: [
                'https://linkedin.com/company/nomineejobs',
                'https://twitter.com/nomineejobs'
              ]
            }),
          }}
        />
        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Nominee Director Services',
              provider: {
                '@type': 'Organization',
                name: 'NomineeJobs'
              },
              areaServed: {
                '@type': 'Country',
                name: 'United Kingdom'
              },
              description: 'Professional nominee director services for UK companies including document signing, mail forwarding, and registered office services.',
              offers: {
                '@type': 'Offer',
                priceRange: '£600-£20000',
                priceCurrency: 'GBP'
              }
            }),
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* App Meta Tags */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* iOS Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NomineeJobs" />
        
        {/* Android/Chrome Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="NomineeJobs" />
        
        {/* Windows Meta Tags */}
        <meta name="msapplication-tooltip" content="NomineeJobs - UK Nominee Director Services" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-navbutton-color" content="#2563eb" />
        
        {/* Additional PWA Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
      </head>
      <body suppressHydrationWarning={true}>
        <BFCacheOptimizer />
        {children}
      </body>
    </html>
  )
}
