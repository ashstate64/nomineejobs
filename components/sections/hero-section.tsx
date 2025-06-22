"use client"

import React, { memo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Lazy load only essential icons for hero
const ChevronRight = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.ChevronRight })))
const MessageSquare = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.MessageSquare })))
const Users = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.Users })))
const Target = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.Target })))
const Star = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.Star })))
const Timer = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.Timer })))
const ShieldCheck = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.ShieldCheck })))
const Briefcase = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.Briefcase })))
const UserCheck = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.UserCheck })))
const Eye = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.Eye })))

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
          <AnimatedCounter value={2847} suffix="+ active nominees" />
        </div>
        <div className="flex items-center gap-2">
          <React.Suspense fallback={<div className="h-4 w-4 bg-gray-200 rounded" />}>
            <Target className="h-4 w-4 text-green-500" />
          </React.Suspense>
          <AnimatedCounter prefix="£" value={8640000} suffix=" paid out this year" />
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
          £600 – £20,000+
          <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
            <path d="M1 8C50 2 100 2 150 8C200 14 250 14 299 8" stroke="rgb(2 132 199)" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </span> per year working from home
      </h1>
      
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
        Provide nominee-director and registered-address services to UK companies. Sign documents electronically,
        forward business mail, scan or deposit the occasional cheque—professional, fully compliant, and insured.
      </p>
      
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
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-8 max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm">
          <React.Suspense fallback={<div className="h-4 w-4 bg-orange-200 rounded" />}>
            <Timer className="h-4 w-4 text-orange-500" />
          </React.Suspense>
          <span className="text-orange-700 font-medium">
            Only <strong className="text-orange-800">23 spots</strong> remaining this month
          </span>
        </div>
      </div>
      
      {/* Enhanced trust signals */}
      <div className="mt-8 text-xs text-gray-500 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
          <React.Suspense fallback={<div className="h-3 w-3 bg-sky-200 rounded" />}>
            <ShieldCheck className="h-3 w-3 text-sky-500" />
          </React.Suspense>
          FCA-supervised
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
          <React.Suspense fallback={<div className="h-3 w-3 bg-sky-200 rounded" />}>
            <Briefcase className="h-3 w-3 text-sky-500" />
          </React.Suspense>
          £1M liability cover
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
          <React.Suspense fallback={<div className="h-3 w-3 bg-sky-200 rounded" />}>
            <UserCheck className="h-3 w-3 text-sky-500" />
          </React.Suspense>
          GDPR-secure platform
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
          <React.Suspense fallback={<div className="h-3 w-3 bg-green-200 rounded" />}>
            <Eye className="h-3 w-3 text-green-500" />
          </React.Suspense>
          No hidden fees
        </Badge>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection 