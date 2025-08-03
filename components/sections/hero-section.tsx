"use client"

import React, { memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Lazy load only essential icons for hero
import { 
  ChevronRight, 
  MessageSquare, 
  Users, 
  Target, 
  Star, 
  Timer, 
  ShieldCheck, 
  Briefcase, 
  UserCheck, 
  Eye,
  IconWrapper
} from '@/components/icons/optimized-icons'

// Optimized counter component
const AnimatedCounter = memo(({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  return (
    <span className="font-bold text-sky-600">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
})

const HeroSection = memo(() => {
  return (
    <section className="text-center flex flex-col items-center">
      {/* Social Proof Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <React.Suspense fallback={<div className="h-4 w-4 bg-gray-200 rounded" />}>
            <Users className="h-4 w-4 text-sky-500" />
          </React.Suspense>
          <AnimatedCounter value={3142} suffix="+ earning members" />
        </div>
        <div className="flex items-center gap-2">
          <React.Suspense fallback={<div className="h-4 w-4 bg-gray-200 rounded" />}>
            <Target className="h-4 w-4 text-green-500" />
          </React.Suspense>
          <AnimatedCounter prefix="£" value={12800000} suffix=" paid to nominees in 2024" />
        </div>
        <div className="flex items-center gap-2">
          <React.Suspense fallback={<div className="h-4 w-4 bg-gray-200 rounded" />}>
            <Star className="h-4 w-4 text-yellow-500" />
          </React.Suspense>
          <span>4.9/5 satisfaction rating</span>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
        Earn <span className="text-sky-600 relative">
          £1,200+ monthly
          <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
            <path d="M1 8C50 2 100 2 150 8C200 14 250 14 299 8" stroke="rgb(2 132 199)" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </span> as a UK Nominee Director
      </h1>
      
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-6">
        Work from home just <strong>2-8 hours per week</strong>. We pay you to be a professional nominee director for UK companies—sign documents electronically, handle mail, fully insured and legally protected.
      </p>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-10 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-8 text-sm font-medium">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">£50-165</div>
            <div className="text-green-700">per company/month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">3-12</div>
            <div className="text-blue-700">companies typically</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">2-8</div>
            <div className="text-purple-700">hours per week</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced CTAs with conversion psychology */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
        <Link href="/apply" passHref>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-sky-500/40 transition-all transform hover:scale-105 w-full sm:w-auto relative overflow-hidden group"
          >
            <span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              Start Secure Application 
              <React.Suspense fallback={<div className="ml-2 h-5 w-5 bg-white/30 rounded" />}>
                <ChevronRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform duration-200" />
              </React.Suspense>
            </span>
          </Button>
        </Link>
        <Link href="/request-info" passHref>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 hover:text-sky-700 font-semibold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-sky-500/20 transition-all transform hover:scale-105 w-full sm:w-auto bg-white/70 backdrop-blur-sm group"
          >
            <span>
              Request More Information 
              <React.Suspense fallback={<div className="ml-2 h-5 w-5 bg-sky-600/30 rounded" />}>
                <MessageSquare className="ml-2 h-5 w-5 inline-block group-hover:scale-110 transition-transform duration-200" />
              </React.Suspense>
            </span>
          </Button>
        </Link>
      </div>

      {/* Enhanced urgency indicator */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-8 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm">
          <React.Suspense fallback={<div className="h-4 w-4 bg-blue-200 rounded" />}>
            <Timer className="h-4 w-4 text-blue-500" />
          </React.Suspense>
          <span className="text-blue-700 font-medium">
            <strong className="text-blue-800">Sarah from Manchester</strong> just earned £4,200 last month • <strong className="text-blue-800">47 new positions</strong> available
          </span>
        </div>
      </div>

      {/* Quick Demographic Links */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 text-center mb-4">Perfect for:</p>  
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link 
            href="/for/stay-at-home-moms"
            className="bg-white/80 border border-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-50 hover:border-pink-300 transition-all transform hover:scale-105"
          >
            Stay-at-Home Mums
          </Link>
          <Link 
            href="/for/side-hustle-income"
            className="bg-white/80 border border-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-50 hover:border-purple-300 transition-all transform hover:scale-105"
          >
            Side Hustlers
          </Link>
          <Link 
            href="/for/urgent-income-needed"
            className="bg-white/80 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-all transform hover:scale-105"
          >
            Urgent Income
          </Link>
          <Link 
            href="/for/part-time-income"
            className="bg-white/80 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 hover:border-blue-300 transition-all transform hover:scale-105"
          >
            Part-Time Work
          </Link>
          <Link 
            href="/demographics"
            className="bg-white/80 border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all transform hover:scale-105"
          >
            View All →
          </Link>
        </div>
      </div>
      
      {/* Enhanced trust signals */}
      <div className="mt-8 text-xs text-gray-500 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        <Badge variant="outline" className="flex items-center gap-1 bg-white/90 shadow-sm hover:shadow-md transition-shadow">
          <React.Suspense fallback={<div className="h-3 w-3 bg-sky-200 rounded" />}>
            <ShieldCheck className="h-3 w-3 text-sky-500" />
          </React.Suspense>
          <span className="font-medium">FCA Supervised</span>
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-white/90 shadow-sm hover:shadow-md transition-shadow">
          <React.Suspense fallback={<div className="h-3 w-3 bg-green-200 rounded" />}>
            <Briefcase className="h-3 w-3 text-green-500" />
          </React.Suspense>
          <span className="font-medium">£5M Insurance</span>
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-white/90 shadow-sm hover:shadow-md transition-shadow">
          <React.Suspense fallback={<div className="h-3 w-3 bg-purple-200 rounded" />}>
            <UserCheck className="h-3 w-3 text-purple-500" />
          </React.Suspense>
          <span className="font-medium">GDPR Secure</span>
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-white/90 shadow-sm hover:shadow-md transition-shadow">
          <React.Suspense fallback={<div className="h-3 w-3 bg-orange-200 rounded" />}>
            <Eye className="h-3 w-3 text-orange-500" />
          </React.Suspense>
          <span className="font-medium">Zero Fees</span>
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-white/90 shadow-sm hover:shadow-md transition-shadow border-yellow-300">
          <span className="text-yellow-600">🏆</span>
          <span className="font-medium text-yellow-700">Award Winner 2023</span>
        </Badge>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection 