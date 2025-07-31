import { Metadata } from "next"
import Link from "next/link"
import { MapPin, TrendingUp, Users, Building2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nominee Director Jobs Across UK Cities - Local Opportunities | NomineeJobs',
  description: 'Explore nominee director job opportunities across major UK cities. Compare salary ranges, demand levels, and market conditions.',
}

const cities = [
  { 
    name: "London", 
    population: "9.5M", 
    demand: "Very High", 
    averageEarnings: "£18,000+", 
    slug: "london",
    description: "The financial capital with the highest demand for nominee services",
    companies: "45,000+",
    growth: "+12%"
  },
  { 
    name: "Manchester", 
    population: "2.7M", 
    demand: "High", 
    averageEarnings: "£14,000+", 
    slug: "manchester",
    description: "Major business hub with growing fintech and professional services",
    companies: "12,500+",
    growth: "+8%"
  },
  { 
    name: "Birmingham", 
    population: "2.6M", 
    demand: "High", 
    averageEarnings: "£13,500+", 
    slug: "birmingham",
    description: "Industrial and commercial center with diverse business needs",
    companies: "11,800+",
    growth: "+7%"
  }
]

export default function LocationsPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">UK Cities Overview</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The UK nominee director market varies significantly by location. Major cities offer 
          the highest demand and earnings potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <div key={city.slug} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">{city.population} population</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
                {city.demand} Demand
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {city.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-lg font-bold text-green-600">{city.averageEarnings}</div>
                <div className="text-xs text-gray-500">Average Earnings</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">{city.companies}</div>
                <div className="text-xs text-gray-500">Active Companies</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-green-600 font-medium">{city.growth} growth</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Work in Your City?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join our network of professional nominees and start earning competitive rates 
          in your local area.
        </p>
        <Link
          href="/apply"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Apply Now
        </Link>
      </div>
    </div>
  )
}