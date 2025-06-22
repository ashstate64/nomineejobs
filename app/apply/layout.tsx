import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft, Shield, Phone, Clock, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Apply Now - Become a UK Nominee Director | NomineeJobs',
  description: 'Apply to become a UK nominee director in just 5 minutes. Earn £600-20k+ annually. Secure application, instant approval, first payment within 7 days.',
  keywords: [
    'apply nominee director',
    'nominee director application',
    'UK director jobs',
    'work from home application',
    'director services application',
    'earn money from home UK'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Apply Now - Become a UK Nominee Director',
    description: 'Apply to become a UK nominee director in just 5 minutes. Earn £600-20k+ annually. Secure application, instant approval.',
    type: 'website',
    url: 'https://nomineejobs.co.uk/apply',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply Now - Become a UK Nominee Director',
    description: 'Apply to become a UK nominee director in just 5 minutes. Earn £600-20k+ annually.',
  },
  alternates: {
    canonical: '/apply',
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Back Navigation */}
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Secure Application</span>
              </div>
              <h1 className="text-lg font-semibold text-gray-800">Apply to Become a Nominee</h1>
            </div>

            {/* Support */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-gray-500">
                <Clock className="h-4 w-4" />
                <span className="text-xs">~5 min</span>
              </div>
              <Link 
                href="tel:+44207123456" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Need Help?</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Breadcrumb */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Application</span>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-blue-600 font-medium">In Progress</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
          <div className="p-6 sm:p-8">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-6 border border-gray-200/60">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600">
                  🔒 Your data is protected with <strong>bank-level security</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  SSL encrypted • GDPR compliant • Never shared without consent
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
