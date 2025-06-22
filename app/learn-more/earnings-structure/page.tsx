import { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, DollarSign, Calendar, CheckCircle, Info, BarChart3, PieChart, Target, Clock, Award, Zap, Star } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nominee Director Earnings Structure - £500-2k Monthly | NomineeJobs',
  description: 'Detailed breakdown of nominee director earnings. Learn about hourly rates (£15-50), payment schedules, bonuses, and how to maximize your income as a UK nominee director.',
  keywords: [
    'nominee director salary',
    'nominee director earnings',
    'UK director fees',
    'nominee director pay rates',
    'director services income',
    'work from home earnings UK'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Nominee Director Earnings Structure - £500-2k Monthly',
    description: 'Detailed breakdown of nominee director earnings. Hourly rates £15-50, weekly payments, bonuses and performance incentives.',
    type: 'article',
    url: 'https://nomineejobs.co.uk/learn-more/earnings-structure',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nominee Director Earnings Structure - £500-2k Monthly',
    description: 'Learn about nominee director earnings, rates, and payment structure.',
  },
  alternates: {
    canonical: '/learn-more/earnings-structure',
  },
}

export default function EarningsStructurePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <TrendingUp className="h-8 w-8 text-green-600" />
          <h1 className="text-4xl font-bold text-gray-800">Earnings Structure</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understand exactly how you'll be compensated as a nominee director. 
          Transparent rates, regular payments, and performance incentives.
        </p>
      </div>

      {/* Key Earnings Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">£15-50</div>
          <div className="text-sm text-green-700 font-medium">Per Hour</div>
          <div className="text-xs text-green-600 mt-1">Based on complexity</div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">£500-2k</div>
          <div className="text-sm text-blue-700 font-medium">Per Month</div>
          <div className="text-xs text-blue-600 mt-1">Average earnings</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">Weekly</div>
          <div className="text-sm text-purple-700 font-medium">Payment Frequency</div>
          <div className="text-xs text-purple-600 mt-1">Every Friday</div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Payment Structure</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Base Rates */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                Base Hourly Rates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">Simple Companies</div>
                    <div className="text-sm text-gray-600">Basic nominee duties, minimal complexity</div>
                  </div>
                  <div className="text-lg font-bold text-green-600">£15-25/hr</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">Standard Companies</div>
                    <div className="text-sm text-gray-600">Regular meetings, moderate oversight</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">£25-35/hr</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">Complex Companies</div>
                    <div className="text-sm text-gray-600">High responsibility, detailed reporting</div>
                  </div>
                  <div className="text-lg font-bold text-purple-600">£35-50/hr</div>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-600" />
                Additional Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Performance Bonuses</div>
                    <div className="text-sm text-gray-600">Up to 20% bonus for excellent service</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Long-term Incentives</div>
                    <div className="text-sm text-gray-600">Annual loyalty bonuses for retained clients</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Professional Development</div>
                    <div className="text-sm text-gray-600">Paid training and certification programs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Flexible Schedule</div>
                    <div className="text-sm text-gray-600">Work around your availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Schedule */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Payment Schedule</h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold text-blue-800">Weekly Payments</div>
                <div className="text-sm text-blue-600 mt-1">Every Friday via bank transfer</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold text-green-800">£10 Minimum</div>
                <div className="text-sm text-green-600 mt-1">Minimum threshold for payments</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold text-purple-800">Same Day</div>
                <div className="text-sm text-purple-600 mt-1">Rush payments available</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold text-orange-800">Bonus Tracking</div>
                <div className="text-sm text-orange-600 mt-1">Real-time earnings dashboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Factors Affecting Earnings */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Factors Affecting Your Earnings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Higher Earnings</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Complex business structures</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Multiple company directorships</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">International businesses</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Regular meeting attendance</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Standard Earnings</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Dormant company oversight</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Basic compliance requirements</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Minimal decision making</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Administrative tasks only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Info className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Important Considerations</h3>
              <div className="space-y-2 text-sm text-amber-700">
                <p>• All payments are made via UK bank transfer and are subject to standard UK taxation</p>
                <p>• You'll receive detailed invoices and annual tax summaries for your records</p>
                <p>• Professional indemnity insurance is provided at no cost to you</p>
                <p>• Earnings may vary based on client requirements and market conditions</p>
                <p>• Performance reviews are conducted quarterly with potential rate adjustments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Star className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">£1,800/month</div>
              <div className="text-sm text-gray-600 mb-3">Sarah M., Part-time Nominee</div>
              <p className="text-sm text-gray-700">
                "I manage 6 companies alongside my main job. The flexible schedule works perfectly with my lifestyle."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">£3,200/month</div>
              <div className="text-sm text-gray-600 mb-3">James L., Full-time Professional</div>
              <p className="text-sm text-gray-700">
                "Specializing in complex structures has allowed me to earn consistently above average rates."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">£2,100/month</div>
              <div className="text-sm text-gray-600 mb-3">Maria C., Career Changer</div>
              <p className="text-sm text-gray-700">
                "Transitioned from corporate law to nominee work. Better work-life balance with similar income."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join our network of professional nominees and start earning competitive rates for your expertise. 
          Apply today and begin your journey to financial independence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/request-info"
            className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get More Info
          </Link>
        </div>
      </div>
    </div>
  )
}
