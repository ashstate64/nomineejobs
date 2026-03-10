"use client"

import Link from "next/link"
import { BookOpen, Home, Phone, Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative z-50 bg-transparent">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            <div className="p-1.5 bg-blue-600 rounded-lg">
              <Home className="h-5 w-5 text-white" />
            </div>
            NomineeJobs
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/learn-more" 
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              Learn More
            </Link>
            <Link 
              href="/demographics" 
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              Find Your Match
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Blog
            </Link>
            <Link 
              href="/calculator" 
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              Calculator
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href="/resources" 
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              Resources
            </Link>
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <Link 
              href="/apply" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-sm hover:shadow-md transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 rounded-lg text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-[65px] h-screen overflow-y-auto w-full max-w-full m-0 p-0 overscroll-contain pb-24 touch-pan-y" style={{ '-webkit-overflow-scrolling': 'touch' } as React.CSSProperties}>
          <div className="flex flex-col px-6 py-8 space-y-2 relative h-full">
            <Link 
              href="/learn-more" 
              className="block font-semibold text-xl py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn More
            </Link>
            <Link 
              href="/demographics" 
              className="block font-semibold text-xl py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Your Match
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center gap-3 font-semibold text-xl py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5 text-gray-400" />
              Insights Blog
            </Link>
            <Link 
              href="/calculator" 
              className="block font-semibold text-xl py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Salary Calculator
            </Link>
            <Link 
              href="/about" 
              className="block font-semibold text-xl py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About NomineeJobs
            </Link>
            <Link 
              href="/resources" 
              className="block font-semibold text-xl py-4 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Resources
            </Link>

            <div className="pt-8 w-full mt-auto mb-10 block">
              <Link 
                href="/apply" 
                className="w-full flex items-center justify-between bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Start Application</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}