import { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { DEMOGRAPHIC_CONFIGS } from "@/lib/demographic-config"
import { ArrowRight, Users, TrendingUp, Clock, DollarSign } from "lucide-react"

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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect Opportunity
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've created specific opportunities designed for different situations. 
              Choose the one that fits your lifestyle and goals perfectly.
            </p>
          </div>

          {/* Demographics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {demographics.map((config) => {
              const IconComponent = demographicIcons[config.slug] || Users
              
              return (
                <Link
                  key={config.slug}
                  href={`/for/${config.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                          {config.title}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {config.earnings.monthly} monthly
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {config.heroSubheadline}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Time Commitment:</span>
                        <span className="font-medium text-gray-700">{config.earnings.timeCommitment}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Hourly Rate:</span>
                        <span className="font-medium text-green-600">{config.earnings.hourly}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                        Learn More
                      </span>
                      <ArrowRight className="h-5 w-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not Sure Which Is Right for You?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team can help you find the perfect opportunity based on your specific situation and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-info"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Personalized Advice
                </Link>
                <Link
                  href="/apply"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}