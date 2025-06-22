import type { Metadata } from 'next'
import './globals.css'

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
  category: 'business',
  classification: 'Business Services',
  other: {
    'google-site-verification': 'your-google-verification-code', // Add your actual verification code
  },
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
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
