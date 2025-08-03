import { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { DEMOGRAPHIC_CONFIGS } from "@/lib/demographic-config"
import { ArrowRight, Users, TrendingUp, Clock, DollarSign, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: 'Find Your Perfect Opportunity | All Demographics | NomineeJobs',
  description: 'Find the perfect nominee director opportunity designed specifically for your situation. Browse opportunities for mums, students, side hustlers, retirees and more.',
  keywords: [
    'nominee director opportunities',
    'work from home demographics',
    'flexible work opportunities',
    'side hustle options',
    'part time income'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Find Your Perfect Opportunity | All Demographics',
    description: 'Find the perfect nominee director opportunity designed specifically for your situation.',
    type: 'website',
    url: 'https://nomineejobs.co.uk/demographics',
  },
  alternates: {
    canonical: '/demographics',
  },
}

const demographicIcons: Record<string, any> = {
  'stay-at-home-moms': Users,
  'side-hustle-income': TrendingUp,
  'urgent-income-needed': Clock,
  'flexible-work-schedule': ArrowRight,
  'part-time-income': DollarSign,
}

export default function DemographicsPage() {
  const demographics = Object.values(DEMOGRAPHIC_CONFIGS)

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Trust Indicators */}
            <div className="inline-flex items-center gap-6 mb-8 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">5 Tailored Options</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700">High Success Rate</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calculator className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Instant Match</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
              Find Your Perfect Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              We've created specific opportunities designed for different situations. 
              Choose the one that fits your lifestyle and goals perfectly.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-20">

          {/* Premium Demographics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {demographics.map((config, index) => {
              const IconComponent = demographicIcons[config.slug] || Users
              const gradients = [
                'from-blue-500 to-purple-600',
                'from-green-500 to-teal-600', 
                'from-red-500 to-pink-600',
                'from-orange-500 to-yellow-600',
                'from-indigo-500 to-purple-600'
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <Link
                  key={config.slug}
                  href={`/for/${config.slug}`}
                  className="group block"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="w-full h-full bg-repeat opacity-30" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
                    </div>
                    
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`bg-gradient-to-br ${gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors mb-1">
                            {config.title}
                          </h2>
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1 rounded-full border border-green-200/50">
                            <p className="text-sm font-semibold text-green-700">
                              {config.earnings.monthly} monthly
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg relative z-10">
                      {config.heroSubheadline}
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200/50">
                        <div className="text-xs text-blue-600 font-medium mb-1">Time Needed</div>
                        <div className="text-sm font-bold text-blue-800">{config.earnings.timeCommitment}</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200/50">
                        <div className="text-xs text-green-600 font-medium mb-1">Hourly Rate</div>
                        <div className="text-sm font-bold text-green-800">{config.earnings.hourly}</div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300 relative z-10">
                      <span className="text-blue-600 font-bold text-lg group-hover:text-blue-700">
                        Explore This Path
                      </span>
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                        <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Premium Bottom CTA */}
          <div className="text-center mt-20">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-repeat" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Users className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Not Sure Which Is Right for You?
                </h3>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Our expert team can help you find the perfect opportunity based on your specific situation and goals. 
                  Get personalized advice in under 24 hours.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/request-info"
                    className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Get Personalized Advice
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    href="/apply"
                    className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Apply Now Instead
                      <DollarSign className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-blue-100 mb-4 text-lg">
                    Have questions? Our team is standing by:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="tel:+442071234567" className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">+44 207 123 4567</span>
                    </a>
                    <div className="w-px h-6 bg-white/30 hidden sm:block"></div>
                    <span className="text-blue-200">Monday-Friday, 9AM-6PM GMT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}