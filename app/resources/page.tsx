import { Metadata } from "next"
import Link from "next/link"
import { Download, FileText, Calculator, TrendingUp, BookOpen, Shield, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'Resources - Templates, Guides & Tools for Nominee Directors | NomineeJobs',
  description: 'Free resources for UK nominee directors: earnings calculator, legal templates, industry reports, tax guides, and professional development materials.',
  keywords: [
    'nominee director resources UK',
    'director templates free',
    'nominee director tools',
    'UK company law resources',
    'director responsibilities guide',
    'nominee services templates'
  ],
  alternates: {
    canonical: '/resources',
  },
}

const resources = [
  {
    category: "Calculators & Tools",
    items: [
      {
        title: "Earnings Calculator",
        description: "Calculate your potential monthly income based on companies, experience, and location",
        icon: Calculator,
        link: "/calculator",
        type: "tool",
        popular: true
      },
      {
        title: "Tax Calculator 2024",
        description: "Calculate tax obligations on nominee director income (coming soon)",
        icon: Calculator,
        link: "#",
        type: "tool",
        coming: true
      },
      {
        title: "Time Tracker",
        description: "Track hours spent on nominee duties for accurate reporting",
        icon: FileText,
        link: "#",
        type: "tool",
        coming: true
      }
    ]
  },
  {
    category: "Legal Templates",
    items: [
      {
        title: "Director's Resignation Letter Template",
        description: "Professional template for resigning from nominee director positions",
        icon: FileText,
        link: "/resources/resignation-template.pdf",
        type: "download",
        size: "PDF, 150KB"
      },
      {
        title: "Meeting Minutes Template",
        description: "Standard template for board meeting minutes and resolutions",
        icon: FileText,
        link: "/resources/meeting-minutes-template.pdf",
        type: "download",
        size: "PDF, 200KB"
      },
      {
        title: "Conflict of Interest Declaration",
        description: "Template for declaring potential conflicts of interest",
        icon: Shield,
        link: "/resources/conflict-declaration.pdf",
        type: "download",
        size: "PDF, 120KB"
      }
    ]
  },
  {
    category: "Industry Reports",
    items: [
      {
        title: "UK Nominee Director Market Report 2024",
        description: "Comprehensive analysis of the nominee director industry, rates, and trends",
        icon: TrendingUp,
        link: "/resources/market-report-2024.pdf",
        type: "download",
        size: "PDF, 2.1MB",
        popular: true
      },
      {
        title: "Regulatory Changes Update Q4 2024",
        description: "Latest changes to UK company law affecting nominee directors",
        icon: AlertTriangle,
        link: "/resources/regulatory-update-q4-2024.pdf",
        type: "download",
        size: "PDF, 800KB"
      },
      {
        title: "Benchmarking Study: Nominee vs Traditional Employment",
        description: "Comparative analysis of earning potential and work-life balance",
        icon: BookOpen,
        link: "/resources/benchmarking-study.pdf",
        type: "download",
        size: "PDF, 1.5MB"
      }
    ]
  },
  {
    category: "Educational Guides",
    items: [
      {
        title: "Complete Guide to Nominee Director Responsibilities",
        description: "Comprehensive guide covering all legal duties and obligations",
        icon: BookOpen,
        link: "/blog/nominee-director-responsibilities-uk-legal-guide",
        type: "article"
      },
      {
        title: "Tax Optimization for Nominee Directors",
        description: "Strategies to minimize tax liability on nominee director income",
        icon: Calculator,
        link: "/resources/tax-optimization-guide.pdf",
        type: "download",
        size: "PDF, 1.2MB"
      },
      {
        title: "Building Multiple Income Streams",
        description: "How to scale from 3 to 20+ company appointments safely",
        icon: TrendingUp,
        link: "/resources/scaling-guide.pdf",
        type: "download",
        size: "PDF, 900KB"
      }
    ]
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-purple-600 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Resources</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free tools, templates, and guides to help you succeed as a professional nominee director. 
            Everything you need to maximize your earnings and stay compliant.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔥 Most Popular Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/calculator" className="group">
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      Interactive Earnings Calculator
                    </h3>
                    <p className="text-sm text-gray-600">See your potential monthly income</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full inline-block">
                  🏆 Most Used Tool
                </div>
              </div>
            </Link>
            
            <div className="group cursor-pointer">
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      UK Market Report 2024
                    </h3>
                    <p className="text-sm text-gray-600">Industry analysis & trends</p>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full inline-block">
                  📊 2.1MB PDF
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  categoryIndex === 0 ? 'bg-green-100 text-green-600' :
                  categoryIndex === 1 ? 'bg-blue-100 text-blue-600' :
                  categoryIndex === 2 ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {categoryIndex === 0 ? <Calculator className="h-5 w-5" /> :
                   categoryIndex === 1 ? <FileText className="h-5 w-5" /> :
                   categoryIndex === 2 ? <TrendingUp className="h-5 w-5" /> :
                   <BookOpen className="h-5 w-5" />}
                </div>
                {category.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={`border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all group ${
                    item.coming ? 'opacity-60' : 'hover:scale-105'
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-lg ${
                        item.type === 'tool' ? 'bg-green-100 text-green-600' :
                        item.type === 'download' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                          {item.title}
                          {item.popular && (
                            <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                          {item.coming && (
                            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        
                        {item.size && (
                          <div className="text-xs text-gray-500 mb-3">{item.size}</div>
                        )}
                        
                        {!item.coming && (
                          <div className="flex items-center gap-2">
                            {item.type === 'tool' && (
                              <Link
                                href={item.link}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-1"
                              >
                                Open Tool
                              </Link>
                            )}
                            {item.type === 'download' && (
                              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1">
                                <Download className="h-4 w-4" />
                                Download
                              </button>
                            )}
                            {item.type === 'article' && (
                              <Link
                                href={item.link}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                              >
                                Read Guide
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Request Resources */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Something Specific?</h2>
            <p className="text-gray-700 mb-6">
              Can't find the resource you need? Our team creates custom templates, 
              guides, and tools based on member requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-info"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Request Custom Resource
              </Link>
              <Link
                href="/blog"
                className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Browse All Guides
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our resources to understand the opportunity, then apply to join 3,000+ 
            successful nominees earning £1,200+ monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Application
            </Link>
            <Link
              href="/success-stories"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Read Success Stories
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <p className="font-medium mb-1">Resource Disclaimer</p>
              <p>
                All templates and guides are provided for informational purposes only and do not constitute 
                legal advice. Always consult with qualified legal professionals for specific situations. 
                Resources are updated regularly to reflect current UK law and best practices.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}