import { Metadata } from "next"
import Link from "next/link"
import { Calculator, TrendingUp, BookOpen } from "lucide-react"
import EarningsCalculatorComponent from "./calculator-component"

export const metadata: Metadata = {
  title: 'Nominee Director Earnings Calculator - Calculate Your Potential Income',
  description: 'Calculate your potential earnings as a UK nominee director. Interactive calculator showing monthly income based on companies, experience level, and time commitment.',
  keywords: [
    'nominee director calculator',
    'earnings calculator UK',
    'nominee director salary calculator',
    'UK director income calculator',
    'calculate nominee earnings',
    'director services pay calculator'
  ],
  openGraph: {
    title: 'Nominee Director Earnings Calculator',
    description: 'Calculate your potential monthly earnings as a UK nominee director',
    type: 'website',
    url: 'https://nomineejobs.co.uk/calculator',
  },
  alternates: {
    canonical: '/calculator',
  },
}

export default function EarningsCalculator() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-green-600 rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Earnings Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See your potential monthly income as a nominee director. Adjust the settings below 
            to match your situation and experience level.
          </p>
        </div>

        <EarningsCalculatorComponent />

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex items-start gap-3">
            <BookOpen className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium mb-1">Earnings Estimate Disclaimer</p>
              <p>
                These calculations are estimates based on current market rates and typical appointments. 
                Actual earnings may vary depending on individual circumstances, company requirements, 
                and market conditions. All nominees receive comprehensive training and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}