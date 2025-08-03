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

      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        {/* Modern Announcement Bar */}
        <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center py-4 text-sm font-medium sticky top-0 z-50 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-yellow-300 animate-pulse" />
              <span className="font-bold">{config.urgencyMessage}</span>
              <ArrowRight className="h-4 w-4 ml-1 animate-bounce" />
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Premium Trust Indicators */}
            <div className="inline-flex items-center gap-6 mb-8 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">Fully Insured</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700">5,000+ Members</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                </div>
                <span className="text-gray-700">4.9/5 Rating</span>
              </div>
            </div>

            {/* Hero Headline with Animation */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 animate-fade-in leading-tight">
              {config.heroHeadline}
            </h1>
            
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              {config.heroSubheadline}
            </p>

            {/* Enhanced Earnings Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">{config.earnings.monthly}</div>
                <div className="text-green-700 font-medium">Monthly Income</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{config.earnings.hourly}</div>
                <div className="text-blue-700 font-medium">Per Hour</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{config.earnings.timeCommitment}</div>
                <div className="text-purple-700 font-medium">Time Needed</div>
              </div>
            </div>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/apply"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              >
                <span className="relative z-10">{config.callToAction}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/request-info"
                className="group border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Learn More First
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Modern Pain Points Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/30 to-yellow-50/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  Tired of These Common Problems?
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  You're not alone. Here's what people in your situation struggle with every day:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {config.painPoints.map((painPoint, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <AlertCircle className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <p className="text-lg text-gray-800 font-medium leading-relaxed">{painPoint}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                  Here's How We Solve Every Single Problem
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Finally, work that actually works for people like you. Every problem has a solution:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {config.benefits.map((benefit, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <p className="text-lg text-gray-800 font-semibold leading-relaxed">{benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Testimonial Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Real Success Story From Someone Just Like You
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="lg:w-24 lg:h-24 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{config.testimonialConfig.name}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{config.testimonialConfig.location}</p>
                        <p className="text-gray-600 mt-2">{config.testimonialConfig.situation}</p>
                      </div>
                      <div className="text-center lg:text-right bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200/50">
                        <p className="text-3xl lg:text-4xl font-bold text-green-600 mb-1">{config.testimonialConfig.earnings}</p>
                        <p className="text-green-700 font-medium">Recent Earnings</p>
                      </div>
                    </div>
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-medium italic">
                      "{config.testimonialConfig.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-3 text-gray-600 font-medium">Verified Success Story</span>
                      </div>
                      <div className="hidden lg:block w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium FAQ Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
                  Questions People In Your Situation Always Ask
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  We get it. You need specific answers for your specific situation:
                </p>
              </div>
              
              <div className="space-y-6">
                {config.specificFAQs.map((faq, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{faq.question}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to Change Your Financial Situation?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
                Join thousands of people who've already transformed their income with this opportunity.
                Your application takes less than 10 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  href="/apply"
                  className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  <span className="flex items-center justify-center gap-3">
                    {config.callToAction}
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  href="/request-info"
                  className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center gap-3">
                    Get Free Information Pack
                    <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              
              {/* Enhanced Contact Options */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <p className="text-white text-lg font-medium mb-6 text-center">
                  Have questions? Our expert team is here to help:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <a 
                    href="tel:+442071234567" 
                    className="group flex items-center justify-center gap-3 text-white hover:text-blue-200 transition-colors duration-300 bg-white/10 p-4 rounded-xl hover:bg-white/20"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">+44 207 123 4567</span>
                  </a>
                  <a 
                    href="mailto:info@nomineejobs.co.uk" 
                    className="group flex items-center justify-center gap-3 text-white hover:text-blue-200 transition-colors duration-300 bg-white/10 p-4 rounded-xl hover:bg-white/20"
                  >
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">info@nomineejobs.co.uk</span>
                  </a>
                  <div className="flex items-center justify-center gap-3 text-blue-100 bg-white/10 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">Mon-Fri, 9AM-6PM GMT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}