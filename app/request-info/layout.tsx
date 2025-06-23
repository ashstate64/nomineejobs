import Link from "next/link"
import { Metadata } from "next"
import { ArrowLeft, Shield, Phone, Clock, ChevronRight, Mail, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'Request Information - Get Answers About Nominee Director Roles | NomineeJobs',
  description: 'Have questions about becoming a UK nominee director? Contact our expert team for personalized answers about earnings, responsibilities, legal requirements and more.',
  keywords: [
    'nominee director questions',
    'contact nominee jobs',
    'director services information',
    'UK nominee director help',
    'director role consultation',
    'nominee director support'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Request Information - Get Answers About Nominee Director Roles',
    description: 'Have questions about becoming a UK nominee director? Contact our expert team for personalized answers.',
    type: 'website',
    url: 'https://nomineejobs.co.uk/request-info',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Information - Get Answers About Nominee Director Roles',
    description: 'Have questions about becoming a UK nominee director? Contact our expert team for personalized answers.',
  },
  alternates: {
    canonical: '/request-info',
  },
}

export default function RequestInfoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
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
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Get Expert Help</span>
              </div>
              <h1 className="hidden sm:block text-lg font-semibold text-gray-800">Request Information</h1>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-gray-500 bg-gray-50 px-2 py-1 rounded">
                <Clock className="h-3 w-3" />
                <span className="text-xs">24h Response</span>
              </div>
              <a 
                href="mailto:info@nomineejobs.co.uk" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-gray-400" />
              <span className="text-blue-600 font-medium">Request Information</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Confidential</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="min-h-[60vh]">
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="mt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex flex-col gap-4">
              {/* Contact Notice */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  📞 <strong>Prefer to talk?</strong> Call us directly or email for immediate assistance
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Expert consultations available • Response within 24 hours • Completely confidential
                </p>
              </div>
              
              {/* Contact & Links */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-600">
                    📧 <a href="mailto:info@nomineejobs.co.uk" className="text-blue-600 hover:text-blue-700 font-medium">info@nomineejobs.co.uk</a>
                    <span className="mx-2">•</span>
                    📞 <a href="tel:+442071234567" className="text-blue-600 hover:text-blue-700 font-medium">+44 207 123 4567</a>
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <Link href="/" className="hover:text-gray-700 transition-colors font-medium">
                    ← Back to Home
                  </Link>
                  <span>•</span>
                  <Link href="/apply" className="hover:text-gray-700 transition-colors">
                    Start Application
                  </Link>
                  <span>•</span>
                  <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link href="/terms-and-conditions" className="hover:text-gray-700 transition-colors">
                    Terms
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