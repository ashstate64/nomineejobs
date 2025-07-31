import { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ArrowLeft, BookOpen, ChevronRight, FileText, DollarSign, Shield, Users, Calculator, Gavel, HelpCircle } from "lucide-react"

const sections = [
  { href: "/learn-more/earnings-structure", title: "Earnings Structure", icon: DollarSign, description: "How you get paid" },
  { href: "/learn-more/legal-framework", title: "Legal Framework", icon: Gavel, description: "Your legal protections" },
  { href: "/learn-more/comparing-roles", title: "Role Comparison", icon: Users, description: "Nominee vs other roles" },
  { href: "/learn-more/onboarding-process", title: "Onboarding Process", icon: ChevronRight, description: "Getting started" },
  { href: "/learn-more/risks-mitigation", title: "Risk Management", icon: Shield, description: "Stay protected" },
  { href: "/learn-more/tax-benefits", title: "Tax Benefits", icon: FileText, description: "Financial advantages" },
  { href: "/learn-more/glossary", title: "Glossary", icon: BookOpen, description: "Key terms" },
]

export const metadata: Metadata = {
  title: 'Learn More About Nominee Director Services | NomineeJobs',
  description: 'Everything you need to know about becoming a UK nominee director. Legal framework, earnings structure, risks, tax benefits, and detailed guides.',
  keywords: [
    'nominee director guide',
    'UK director services info',
    'nominee director legal framework',
    'director earnings structure',
    'nominee director risks',
    'UK company law'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Learn More About Nominee Director Services',
    description: 'Everything you need to know about becoming a UK nominee director. Legal framework, earnings, risks, and detailed guides.',
    type: 'website',
    url: 'https://nomineejobs.co.uk/learn-more',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn More About Nominee Director Services',
    description: 'Everything you need to know about becoming a UK nominee director.',
  },
  alternates: {
    canonical: '/learn-more',
  },
}

export default function LearnMoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <Navigation />
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Learn More</span>
              </div>
              <h1 className="text-lg font-semibold text-gray-800">Nominee Guide</h1>
            </div>

            <Link 
              href="/apply" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-24">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Learning Sections
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <Link
                      key={section.href}
                      href={section.href}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
                        <div>
                          <div className="text-sm font-medium text-gray-800 group-hover:text-blue-800">
                            {section.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {section.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </nav>

              {/* Quick Apply CTA */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">Ready to Apply?</h3>
                <p className="text-xs text-blue-600 mb-3">
                  Start earning as a nominee today
                </p>
                <Link
                  href="/apply"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-6 border border-gray-200/60">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600">
                  📚 Complete our learning guide to become an expert nominee
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Understanding the role ensures better earnings and compliance
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms-and-conditions" className="hover:text-gray-700 transition-colors">
                  Terms
                </Link>
                <span>•</span>
                <Link href="/request-info" className="hover:text-gray-700 transition-colors">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
