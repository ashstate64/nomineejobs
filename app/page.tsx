"use client"

import React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

// Lazy load only critical icons for above-the-fold content
import { AlertCircle, ArrowRight, IconWrapper } from '@/components/icons/optimized-icons'
import Navigation from '@/components/navigation'

// Dynamic imports for heavy sections (below the fold)
const HeroSection = dynamic(() => import("@/components/sections/hero-section"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />,
})

const BelowFoldContent = dynamic(() => import("@/components/sections/below-fold-content"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />,
  ssr: false, // Don't server-render this heavy content
})

const ComprehensiveFooter = dynamic(() => import("@/components/comprehensive-footer"), {
  loading: () => <div className="h-32 bg-slate-900 animate-pulse" />,
})

export default function LandingPage() {
  return (
    <>
      <Navigation />
      {/* Optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['WebPage', 'JobPosting'],
            name: 'NomineeJobs - UK Nominee Director Services',
            description: 'Join the UK\'s leading nominee director programme. Earn £600-£20,000+ annually providing professional nominee services to companies.',
            url: 'https://nomineejobs.co.uk',
            title: 'Nominee Director',
            datePosted: '2024-01-01',
            employmentType: 'CONTRACTOR',
            hiringOrganization: {
              '@type': 'Organization',
              name: 'NomineeJobs'
            },
            jobLocation: {
              '@type': 'Place',
              addressLocality: 'United Kingdom',
              addressCountry: 'GB'
            },
            baseSalary: {
              '@type': 'MonetaryAmount',
              currency: 'GBP',
              value: {
                '@type': 'QuantitativeValue',
                minValue: 600,
                maxValue: 20000,
                unitText: 'YEAR'
              }
            },
            workHours: 'Flexible'
          }),
        }}
      />
      
      <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
        {/* Optimized background pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-sky-50/30"></div>
        </div>

        {/* Enhanced Announcement Bar with minimal icons */}
        <header className="bg-gradient-to-r from-sky-600 to-sky-700 text-white text-center p-3 text-sm font-medium sticky top-0 z-50 shadow-lg">
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            <React.Suspense fallback={<div className="h-4 w-4 bg-yellow-300 rounded" />}>
              <AlertCircle className="h-4 w-4 text-yellow-300" />
            </React.Suspense>
            <Link href="#apply" className="hover:underline flex items-center gap-2">
              <span className="hidden sm:inline">🔥</span>
              <strong>Limited Spots:</strong> Applications now open — first payment in as little as 7 days
              <React.Suspense fallback={<div className="inline h-4 w-4 ml-1 bg-white/30 rounded" />}>
                <ArrowRight className="inline h-4 w-4 ml-1" />
              </React.Suspense>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16 md:py-24 space-y-24 md:space-y-32 relative z-10">
          {/* Hero Section - Above the fold content */}
          <HeroSection />
          
          {/* Below the fold content - Lazy loaded */}
          <BelowFoldContent />
        </main>

        <ComprehensiveFooter />
      </div>
    </>
  )
}
