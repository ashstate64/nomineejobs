import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, XCircle, AlertTriangle, TrendingUp, Shield, Clock, DollarSign, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: 'Compare: NomineeJobs vs Other Opportunities | Why We\'re the Best Choice',
  description: 'Compare NomineeJobs with other nominee director providers and traditional employment. See why we offer the best rates, protection, and support.',
  keywords: [
    'nominee director comparison UK',
    'NomineeJobs vs competitors',
    'best nominee director platform',
    'compare nominee services UK',
    'traditional employment vs nominee',
    'freelance vs nominee director'
  ],
  alternates: {
    canonical: '/compare',
  },
}

const competitorData = [
  {
    feature: "Average Monthly Earnings",
    nomineeJobs: "£1,200+ (verified)",
    competitorA: "£400-800",
    competitorB: "£300-600",
    traditional: "£2,500-3,500",
    freelance: "£0-5,000 (variable)"
  },
  {
    feature: "Professional Indemnity Insurance",
    nomineeJobs: "£5M coverage included",
    competitorA: "£1M coverage",
    competitorB: "Not included",
    traditional: "Employer covers",
    freelance: "Self-arrange"
  },
  {
    feature: "Training & Support",
    nomineeJobs: "Comprehensive + 24/7 support",
    competitorA: "Basic training only",
    competitorB: "Self-guided resources",
    traditional: "On-job training",
    freelance: "None"
  },
  {
    feature: "Payment Guarantee",
    nomineeJobs: "Monthly, never missed",
    competitorA: "Quarterly payments",
    competitorB: "Payment delays common",
    traditional: "Monthly salary",
    freelance: "Client dependent"
  },
  {
    feature: "Time Commitment",
    nomineeJobs: "2-8 hours/week",
    competitorA: "5-15 hours/week",
    competitorB: "10-20 hours/week",
    traditional: "37.5 hours/week",
    freelance: "Variable"
  },
  {
    feature: "Legal Protection",
    nomineeJobs: "Full legal support team",
    competitorA: "Basic legal advice",
    competitorB: "Not provided",
    traditional: "HR department",
    freelance: "Self-arrange"
  },
  {
    feature: "Regulatory Compliance",
    nomineeJobs: "FCA supervised",
    competitorA: "Basic compliance",
    competitorB: "Self-certified",
    traditional: "Employer handles",
    freelance: "Self-manage"
  },
  {
    feature: "Work Flexibility",
    nomineeJobs: "Complete flexibility",
    competitorA: "Some flexibility",
    competitorB: "Fixed schedules",
    traditional: "Office hours",
    freelance: "Complete flexibility"
  }
]

const reasons = [
  {
    icon: DollarSign,
    title: "Higher Earnings",
    description: "Our nominees earn 2-3x more than competitors with verified £1,200+ monthly averages",
    advantage: "Up to 200% higher income"
  },
  {
    icon: Shield,
    title: "Superior Protection",
    description: "£5M professional indemnity, legal support team, and full regulatory compliance",
    advantage: "5x better insurance coverage"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 professional support, comprehensive training, and dedicated account managers",
    advantage: "Round-the-clock expertise"
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "FCA supervised, 5-year track record, 3,000+ successful nominees, £47M+ paid out",
    advantage: "Proven market leader"
  },
  {
    icon: Clock,
    title: "Perfect Balance",
    description: "2-8 hours per week maximum, work from home, perfect for any lifestyle",
    advantage: "Ideal work-life balance"
  },
  {
    icon: TrendingUp,
    title: "Growth Potential",
    description: "Build portfolio from 3 to 20+ companies, increase earnings over time",
    advantage: "Unlimited earning potential"
  }
]

export default function ComparePage() {
  const getIcon = (value: string, isNomineeJobs = false) => {
    if (isNomineeJobs) return <CheckCircle className="h-5 w-5 text-green-500" />
    if (value.includes("Not") || value.includes("None") || value.includes("delays")) {
      return <XCircle className="h-5 w-5 text-red-500" />
    }
    if (value.includes("Basic") || value.includes("Self")) {
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    }
    return <CheckCircle className="h-5 w-5 text-green-500" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-blue-600 rounded-xl">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Why Choose NomineeJobs?</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare us with other nominee director providers and traditional employment options. 
            See why 3,000+ professionals choose NomineeJobs for their financial future.
          </p>
        </div>

        {/* Quick Comparison */}
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-blue-600 bg-blue-50 rounded-t-lg">NomineeJobs</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Competitor A</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Competitor B</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Traditional Job</th>
                  <th className="text-center p-4 font-semibold text-gray-700">Freelance</th>
                </tr>
              </thead>
              <tbody>
                {competitorData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="text-center p-4 bg-blue-50">
                      <div className="flex items-center justify-center gap-2">
                        {getIcon(row.nomineeJobs, true)}
                        <span className="font-semibold text-blue-700">{row.nomineeJobs}</span>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="flex items-center justify-center gap-2">
                        {getIcon(row.competitorA)}
                        <span className="text-gray-600">{row.competitorA}</span>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="flex items-center justify-center gap-2">
                        {getIcon(row.competitorB)}
                        <span className="text-gray-600">{row.competitorB}</span>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="flex items-center justify-center gap-2">
                        {getIcon(row.traditional)}
                        <span className="text-gray-600">{row.traditional}</span>
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="flex items-center justify-center gap-2">
                        {getIcon(row.freelance)}
                        <span className="text-gray-600">{row.freelance}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">6 Reasons We're Different</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                    {reason.advantage}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Numbers */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Numbers Don't Lie</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">£47M+</div>
              <div className="text-green-700 font-medium mb-2">Total Paid to Nominees</div>
              <div className="text-green-600 text-sm">Verified through our payment system</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3,142</div>
              <div className="text-blue-700 font-medium mb-2">Active Earning Members</div>
              <div className="text-blue-600 text-sm">More than all competitors combined</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-purple-700 font-medium mb-2">Satisfaction Rating</div>
              <div className="text-purple-600 text-sm">From 1,200+ verified reviews</div>
            </div>
          </div>
        </div>

        {/* Why Not Others? */}
        <div className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Concerns About Competitors</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">⚠️ Low Payment Rates</h4>
                <p className="text-gray-700 text-sm">Most competitors pay £300-800 monthly vs our verified £1,200+ average</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-600 mb-2">⚠️ Poor Insurance Coverage</h4>
                <p className="text-gray-700 text-sm">Many offer only £1M coverage or none at all vs our £5M professional indemnity</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-600 mb-2">⚠️ Payment Delays</h4>
                <p className="text-gray-700 text-sm">Competitors often have quarterly payments with delays - we pay monthly, never missed</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">⚠️ Limited Support</h4>
                <p className="text-gray-700 text-sm">Basic training and support vs our comprehensive 24/7 professional guidance</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-600 mb-2">⚠️ Regulatory Issues</h4>
                <p className="text-gray-700 text-sm">Many lack proper FCA supervision - we're fully regulated and compliant</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-600 mb-2">⚠️ High Time Demands</h4>
                <p className="text-gray-700 text-sm">Competitors often require 10-20 hours/week vs our 2-8 hour maximum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Employment Comparison */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">vs Traditional Employment</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">NomineeJobs Advantages</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Work from home - no commute</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">2-8 hours per week maximum</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Complete schedule flexibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Perfect for retirees, parents, consultants</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Supplement existing income</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-4">Traditional Job Limitations</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">37.5 hours per week minimum</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fixed office hours and location</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Limited holiday and sick leave</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Age discrimination in hiring</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Office politics and management stress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose the Best?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't settle for inferior rates, poor support, and payment delays. 
            Join the UK's leading nominee director platform with proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now - It's Free
            </Link>
            <Link
              href="/success-stories"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}