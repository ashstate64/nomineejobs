import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, DollarSign, Shield, Users, Calculator, Gavel, ChevronRight, FileText, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'Learn More About Nominee Director Services | Complete Guide | NomineeJobs',
  description: 'Everything you need to know about becoming a UK nominee director. Explore earnings structure, legal framework, risks, tax benefits, and detailed guides.',
  keywords: [
    'nominee director guide',
    'UK director services info', 
    'nominee director legal framework',
    'director earnings structure',
    'nominee director risks',
    'UK company law',
    'nominee director benefits',
    'company director roles'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Learn More About Nominee Director Services | Complete Guide',
    description: 'Everything you need to know about becoming a UK nominee director. Explore earnings, legal framework, risks, and detailed guides.',
    type: 'website',
    url: 'https://nomineejobs.co.uk/learn-more',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn More About Nominee Director Services | Complete Guide',
    description: 'Everything you need to know about becoming a UK nominee director. Explore earnings, legal framework, risks, and detailed guides.',
  },
  alternates: {
    canonical: '/learn-more',
  },
}

const sections = [
  { 
    href: "/learn-more/earnings-structure", 
    title: "Earnings Structure", 
    icon: DollarSign, 
    description: "How you get paid as a nominee director",
    details: "Understand payment structures, earning potential, and compensation models"
  },
  { 
    href: "/learn-more/legal-framework", 
    title: "Legal Framework", 
    icon: Gavel, 
    description: "Your legal protections and responsibilities",
    details: "Know your rights, duties, and legal safeguards in the UK"
  },
  { 
    href: "/learn-more/comparing-roles", 
    title: "Role Comparison", 
    icon: Users, 
    description: "Nominee vs other director roles",
    details: "Compare nominee directors with executive and non-executive positions"
  },
  { 
    href: "/learn-more/onboarding-process", 
    title: "Onboarding Process", 
    icon: ChevronRight, 
    description: "Getting started step-by-step",
    details: "Your journey from application to active nominee director"
  },
  { 
    href: "/learn-more/risks-mitigation", 
    title: "Risk Management", 
    icon: Shield, 
    description: "Stay protected and informed",
    details: "Understand and mitigate potential risks and liabilities"
  },
  { 
    href: "/learn-more/tax-benefits", 
    title: "Tax Benefits", 
    icon: FileText, 
    description: "Financial advantages and considerations",
    details: "Explore tax implications and potential benefits"
  },
  { 
    href: "/learn-more/glossary", 
    title: "Glossary", 
    icon: BookOpen, 
    description: "Key terms and definitions",
    details: "Essential terminology for nominee directors in the UK"
  },
]

export default function LearnMorePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Complete Nominee Director Guide
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about becoming a successful nominee director in the UK. 
          Explore detailed guides covering earnings, legal framework, risks, and benefits.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">£2,000+</div>
          <div className="text-sm text-blue-800">Average Annual Earnings</div>
        </div>
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">Protected</div>
          <div className="text-sm text-green-800">Legal Framework</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
          <div className="text-sm text-purple-800">Support Available</div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Link
              key={section.href}
              href={section.href}
              className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900">
                      {section.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-gray-600 font-medium">
                    {section.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {section.details}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join thousands of individuals who have successfully become nominee directors. 
          Start your application today and begin earning within weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/request-info"
            className="border border-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Request Information
          </Link>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="h-6 w-6 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Have questions about becoming a nominee director? Our team is here to help you understand the process.
        </p>
        <Link 
          href="/request-info"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          Contact our team
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}