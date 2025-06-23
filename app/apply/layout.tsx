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
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Back Navigation */}
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Secure Application</span>
              </div>
              <h1 className="hidden sm:block text-lg font-semibold text-gray-800">Apply to Become a Nominee</h1>
            </div>

            {/* Support */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-gray-500 bg-gray-50 px-2 py-1 rounded">
                <Clock className="h-3 w-3" />
                <span className="text-xs">~5 min</span>
              </div>
              <a 
                href="mailto:info@nomineejobs.co.uk" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Need Help?</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Progress Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-gray-400" />
              <span className="text-blue-600 font-medium">Nominee Application</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Auto-saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 min-h-[60vh]">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            {children}
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="mt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex flex-col gap-4">
              {/* Security Notice */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  🔒 Your data is protected with <strong>bank-level security</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  SSL encrypted • GDPR compliant • Never shared without consent
                </p>
              </div>
              
              {/* Contact & Links */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-600">
                    Need help? Contact us at <a href="mailto:info@nomineejobs.co.uk" className="text-blue-600 hover:text-blue-700 font-medium">info@nomineejobs.co.uk</a>
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <Link href="/" className="hover:text-gray-700 transition-colors font-medium">
                    ← Back to Home
                  </Link>
                  <span>•</span>
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
        </div>
      </footer>
    </div>
  )
}
