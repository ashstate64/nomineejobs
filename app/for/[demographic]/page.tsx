import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getDemographicConfig, getAllDemographicSlugs } from "@/lib/demographic-config"
import Navigation from "@/components/navigation"
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Shield, 
  Zap, 
  AlertCircle,
  Phone,
  Mail
} from "lucide-react"

interface DemographicPageProps {
  params: { demographic: string }
}

export async function generateMetadata({ params }: DemographicPageProps): Promise<Metadata> {
  const config = getDemographicConfig(params.demographic)
  
  if (!config) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      type: 'website',
      url: `https://nomineejobs.co.uk/for/${params.demographic}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.metaTitle,
      description: config.metaDescription,
    },
    alternates: {
      canonical: `/for/${params.demographic}`,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllDemographicSlugs()
  return slugs.map((demographic) => ({
    demographic,
  }))
}

export default function DemographicPage({ params }: DemographicPageProps) {
  const config = getDemographicConfig(params.demographic)

  if (!config) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['WebPage', 'JobPosting'],
            name: `Nominee Director Jobs for ${config.title}`,
            description: config.metaDescription,
            url: `https://nomineejobs.co.uk/for/${params.demographic}`,
            title: `Nominee Director - ${config.title}`,
            datePosted: new Date().toISOString().split('T')[0],
            employmentType: 'CONTRACTOR',
            workHours: config.earnings.timeCommitment,
            hiringOrganization: {
              '@type': 'Organization',
              name: 'NomineeJobs',
              url: 'https://nomineejobs.co.uk'
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
            }
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        {/* Announcement Bar */}
        <header className="bg-gradient-to-r from-sky-600 to-sky-700 text-white text-center p-3 text-sm font-medium sticky top-0 z-50 shadow-lg">
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            <Zap className="h-4 w-4 text-yellow-300" />
            <span className="hidden sm:inline">🔥</span>
            <strong>{config.urgencyMessage}</strong>
            <ArrowRight className="inline h-4 w-4 ml-1" />
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-sky-50/30"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center">
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Fully Insured & Legal</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span>5,000+ Active Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
              {config.heroHeadline}
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
              {config.heroSubheadline}
            </p>

            {/* Earnings Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-8 text-sm font-medium">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{config.earnings.monthly}</div>
                  <div className="text-green-700">Monthly Income</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{config.earnings.hourly}</div>
                  <div className="text-blue-700">Per Hour</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{config.earnings.timeCommitment}</div>
                  <div className="text-purple-700">Time Needed</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/apply"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg"
              >
                {config.callToAction}
              </Link>
              <Link
                href="/request-info"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More First
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Tired of These Common Problems?
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                You're not alone. Here's what people in your situation struggle with:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {config.painPoints.map((painPoint, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{painPoint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Here's How We Solve Every Single Problem
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Finally, work that actually works for people like you:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {config.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Real Success Story From Someone Just Like You
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{config.testimonialConfig.name}</h3>
                        <p className="text-blue-600 font-medium">{config.testimonialConfig.location}</p>
                        <p className="text-sm text-gray-600">{config.testimonialConfig.situation}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">{config.testimonialConfig.earnings}</p>
                        <p className="text-sm text-gray-600">Recent earnings</p>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                      "{config.testimonialConfig.quote}"
                    </blockquote>
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">Verified Success Story</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Questions People In Your Situation Always Ask
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                We get it. You need specific answers for your specific situation:
              </p>
              
              <div className="space-y-6">
                {config.specificFAQs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Change Your Financial Situation?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of people who've already transformed their income with this opportunity.
                Your application takes less than 10 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/apply"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
                >
                  {config.callToAction} →
                </Link>
                <Link
                  href="/request-info"
                  className="border border-blue-300 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
                >
                  Get Free Information Pack
                </Link>
              </div>
              
              {/* Contact Options */}
              <div className="border-t border-blue-500 pt-8">
                <p className="text-blue-100 mb-4">
                  Have questions? Our team is here to help:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <a href="tel:+442071234567" className="flex items-center gap-2 text-blue-100 hover:text-white">
                    <Phone className="h-4 w-4" />
                    +44 207 123 4567
                  </a>
                  <a href="mailto:info@nomineejobs.co.uk" className="flex items-center gap-2 text-blue-100 hover:text-white">
                    <Mail className="h-4 w-4" />  
                    info@nomineejobs.co.uk
                  </a>
                  <span className="text-blue-200">
                    Monday-Friday, 9AM-6PM GMT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}