"use client"

import React, { memo } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Lazy load icons that are only used below the fold
import { 
  ArrowRight, 
  Info, 
  Building, 
  TrendingUp, 
  HelpCircle,
  CheckCircle,
  IconWrapper
} from '@/components/icons/optimized-icons'

// ListChecks isn't in our optimized icons yet, so keep it lazy
const ListChecks = React.lazy(() => import("lucide-react").then(mod => ({ default: mod.ListChecks })))

// Optimized FAQ data (moved out of render)
const FAQ_DATA = [
  {
    question: "What qualifications do I need to become a nominee director?",
    answer: "You need to be 16 or older, a UK resident (or have right to work), have no unspent criminal convictions for dishonesty/fraud, and not be disqualified as a director. No formal qualifications required - we provide all training."
  },
  {
    question: "How much time does this actually take?",
    answer: "Most tasks take 5-15 minutes. You might handle 2-5 tasks per month per company. Busiest periods are year-end (filing season) and when companies open new bank accounts."
  },
  {
    question: "What if I make a mistake or want to resign?",
    answer: "Professional indemnity insurance covers honest mistakes. You can resign with 30 days' notice. We provide clear procedures and 24/7 support for any concerns."
  },
  {
    question: "Are there any tax implications for me personally?",
    answer: "Payments to you are taxable income. We provide P60s for employed nominees. Contractor payments require you to handle your own tax. We recommend consulting an accountant for your specific situation."
  },
  {
    question: "What happens if the company gets into legal trouble?",
    answer: "As a nominee acting on instructions, you're protected provided you follow our procedures. We maintain comprehensive professional indemnity and legal expenses insurance. Our legal team provides immediate support if issues arise."
  }
]

// Optimized testimonials data
const TESTIMONIALS_DATA = [
  {
    name: "Thomas B.",
    location: "Bristol, UK",
    avatar: "/testimonials/thomas.png",
    rating: 5,
    earnings: "£4,200 earned",
    testimonial: "I started with just one company and now manage 7 across multiple sectors. It's been an incredibly consistent side income for my retirement. The NomineeJobs team handles all the heavy lifting—from legal contracts to insurance—making the whole process seamless and secure. Highly professional."
  },
  {
    name: "Sarah M.", 
    location: "London, UK",
    avatar: "/testimonials/sarah.png",
    rating: 5,
    earnings: "£12,400 earned", 
    testimonial: "As a professional consultant, I was looking for a way to leverage my director experience. This programme is exceptional. The identity verification was straightforward, and I'm fully protected by their professional indemnity insurance. It fits perfectly into my existing workload without any stress."
  },
  {
    name: "James H.",
    location: "Manchester, UK", 
    avatar: "/testimonials/james.png",
    rating: 5,
    earnings: "£8,950 earned",
    testimonial: "The transparency is what sold me. I manage 5 companies now and the monthly payments are always on time. Having a dedicated legal team on call gives me total peace of mind. It's rare to find a professional service that actually delivers on its promises with this level of support."
  }
]

// Memoized glass card component
const GlassCard = memo(({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:border-sky-300/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
))

// Memoized feature icon component
const FeatureIcon = memo(({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-sky-100 text-sky-600 p-3 rounded-full ${className}`}>
    <Icon className="h-6 w-6" />
  </div>
))

const BelowFoldContent = memo(() => {
  return (
    <>
      {/* Role Understanding Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Understanding Your Role as a Nominee Director
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple, legal, and transparent. Here's everything you need to know about becoming a nominee director.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          <GlassCard>
            <div className="flex items-center mb-4">
              <React.Suspense fallback={<div className="h-12 w-12 bg-sky-100 rounded-full" />}>
                <FeatureIcon icon={Info} />
              </React.Suspense>
              <h3 className="ml-4 text-2xl font-semibold text-gray-800">What is a Nominee Director?</h3>
            </div>
            <p className="text-gray-700 mb-3">
              A nominee director is a person whose name appears on a company's public register, but who agrees—by
              written contract—to act strictly on instructions from the real owner (the "beneficial owner").
            </p>
            <p className="text-gray-600 text-sm">
              Think of it as lending your legal identity to meet regulatory or practical needs while the owner runs
              the business behind the scenes.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Earnings Potential Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Earnings Potential*</h2>
          <div className="flex items-center justify-center gap-2 text-orange-600 font-medium">
            <React.Suspense fallback={<div className="h-5 w-5 bg-orange-200 rounded" />}>
              <TrendingUp className="h-5 w-5" />
            </React.Suspense>
            <span>Earnings increased 23% on average this year</span>
          </div>
        </div>
        
        <GlassCard className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <React.Suspense fallback={<div className="h-12 w-12 bg-sky-200 rounded" />}>
              <TrendingUp className="h-12 w-12 text-sky-500 mr-4" />
            </React.Suspense>
            <p className="text-lg text-gray-700">Illustrative annual income based on active companies.</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 font-semibold text-gray-500 border-b border-gray-200 pb-3 text-sm md:text-base gap-2">
              <span>Companies</span>
              <span className="text-center">Monthly Income</span>
              <span className="text-right">Annual Income</span>
            </div>
            {[
              { companies: 1, monthly: "£50–£165", annual: "£600–£2,000" },
              { companies: 5, monthly: "£250–£825", annual: "£3,000–£10,000" },
              { companies: 10, monthly: "£500–£1,650", annual: "£6,000–£20,000" },
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-3 py-3 border-b border-gray-100 last:border-b-0 text-sm md:text-base gap-2 items-center">
                <span className="text-gray-700 font-medium">{item.companies}</span>
                <span className="text-center font-semibold text-sky-600">{item.monthly}</span>
                <span className="text-right font-semibold text-gray-800">{item.annual}</span>
              </div>
            ))}
            <div className="pt-2 text-center text-sm font-medium text-slate-500">
              Most nominees manage 3–12 companies
            </div>
          </div>
        </GlassCard>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <React.Suspense fallback={<span className="inline-block h-8 w-8 bg-blue-200 rounded mr-3" />}>
              <HelpCircle className="inline-block h-8 w-8 text-blue-600 mr-3" />
            </React.Suspense>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about becoming a nominee director.
          </p>
        </div>
        
        <GlassCard className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-sky-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Nominees Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from our active nominee directors about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-none mx-auto">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <GlassCard key={index} className="flex flex-col group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Avatar className="h-14 w-14 md:h-16 md:w-16 mr-4 ring-2 ring-sky-200 shadow-lg">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-sky-100 text-sky-700 font-semibold text-lg md:text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg md:text-xl leading-none">★</span>
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-base md:text-lg leading-tight">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 mb-1 leading-tight">{testimonial.location}</p>
                  <div className="bg-green-100 text-green-700 text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full inline-block mt-0.5">
                    {testimonial.earnings}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 flex-grow italic leading-relaxed text-sm md:text-base">
                "{testimonial.testimonial}"
              </blockquote>
              
              {/* Verified Badge */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] md:text-xs text-green-600 font-medium">
                  <CheckCircle className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  <span>Verified Earnings</span>
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium whitespace-nowrap">
                  Active since 2022
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
            <div className="text-gray-700 font-medium mb-2">Average Rating</div>
            <div className="text-sm text-gray-500 mb-4">
              From <strong>3,142+ verified reviews</strong>
            </div>
            <div className="grid grid-cols-5 gap-1 max-w-xs mx-auto">
              {[5,4,3,2,1].map((stars) => (
                <div key={stars} className="text-center">
                  <div className="text-xs text-gray-500 mb-1">{stars}★</div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-yellow-400 h-full rounded-full" 
                      style={{ 
                        width: stars === 5 ? '94%' : stars === 4 ? '4%' : stars === 3 ? '1.5%' : '0.5%' 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
})

BelowFoldContent.displayName = "BelowFoldContent"

export default BelowFoldContent 