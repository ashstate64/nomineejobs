"use client"

import { useState } from "react"
import Link from "next/link"
import { TrendingUp, DollarSign, Clock, Building2, ArrowRight } from "lucide-react"

export default function EarningsCalculatorComponent() {
  const [companies, setCompanies] = useState(3)
  const [experience, setExperience] = useState('beginner')
  const [complexity, setComplexity] = useState('standard')
  const [location, setLocation] = useState('uk-average')

  const getBaseRate = () => {
    let base = 65 // Base rate per company per month
    
    // Experience multiplier
    if (experience === 'beginner') base = 55
    else if (experience === 'experienced') base = 75
    else if (experience === 'expert') base = 95
    
    // Complexity multiplier
    if (complexity === 'simple') base *= 0.8
    else if (complexity === 'complex') base *= 1.4
    
    // Location multiplier
    if (location === 'london') base *= 1.25
    else if (location === 'financial') base *= 1.35
    
    return Math.round(base)
  }

  const monthlyEarnings = getBaseRate() * companies
  const annualEarnings = monthlyEarnings * 12
  const weeklyHours = Math.min(2 + (companies * 0.6), 15)
  const hourlyRate = Math.round(monthlyEarnings / (weeklyHours * 4.33))

  const getExperienceLabel = () => {
    switch (experience) {
      case 'beginner': return 'New to nominee services'
      case 'experienced': return '6+ months experience'
      case 'expert': return '18+ months experience'
      default: return ''
    }
  }

  const getComplexityLabel = () => {
    switch (complexity) {
      case 'simple': return 'Basic UK companies'
      case 'standard': return 'Standard companies'
      case 'complex': return 'Complex/international'
      default: return ''
    }
  }

  const getLocationLabel = () => {
    switch (location) {
      case 'uk-average': return 'UK Average'
      case 'london': return 'London Premium'
      case 'financial': return 'Financial District'
      default: return ''
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calculator Input Panel */}
      <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          Your Details
        </h2>

        <div className="space-y-8">
          {/* Number of Companies */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Number of Companies
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="20"
                value={companies}
                onChange={(e) => setCompanies(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>10</span>
                <span>20</span>
              </div>
            </div>
            <div className="mt-2 text-center">
              <span className="text-2xl font-bold text-blue-600">{companies}</span>
              <span className="text-gray-600 ml-1">companies</span>
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Experience Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'beginner', label: 'Beginner' },
                { value: 'experienced', label: 'Experienced' },
                { value: 'expert', label: 'Expert' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setExperience(option.value)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    experience === option.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">{getExperienceLabel()}</p>
          </div>

          {/* Company Complexity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Company Complexity
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'simple', label: 'Simple' },
                { value: 'standard', label: 'Standard' },
                { value: 'complex', label: 'Complex' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setComplexity(option.value)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    complexity === option.value
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">{getComplexityLabel()}</p>
          </div>

          {/* Location Premium */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Location
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'uk-average', label: 'UK Average' },
                { value: 'london', label: 'London' },
                { value: 'financial', label: 'Financial' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setLocation(option.value)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    location === option.value
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">{getLocationLabel()}</p>
          </div>
        </div>
      </div>

      {/* Results Panel */}
      <div className="space-y-6">
        {/* Main Earnings Display */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Your Potential Earnings</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">£{monthlyEarnings.toLocaleString()}</div>
              <div className="text-green-100">per month</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">£{annualEarnings.toLocaleString()}</div>
                <div className="text-green-100 text-sm">per year</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">£{hourlyRate}</div>
                <div className="text-green-100 text-sm">per hour</div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-blue-600" />
            Earnings Breakdown
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-700">Average per company</span>
              <span className="font-semibold text-blue-600">£{getBaseRate()}/month</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Number of companies</span>
              <span className="font-semibold text-gray-800">{companies}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">Total monthly</span>
              <span className="font-bold text-green-600 text-lg">£{monthlyEarnings.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Time Commitment */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-gray-800">Time Commitment</h4>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{weeklyHours.toFixed(1)}</div>
            <div className="text-blue-700 text-sm">hours per week</div>
            <div className="text-xs text-blue-600 mt-2">
              Based on typical workload for {companies} companies
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
          <h4 className="font-bold text-lg mb-2">Ready to start earning?</h4>
          <p className="text-blue-100 text-sm mb-4">
            Join 3,000+ nominees already earning with NomineeJobs. 
            Application takes just 8 minutes.
          </p>
          <div className="flex gap-3">
            <Link
              href="/apply"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm flex items-center gap-1"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn-more"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}