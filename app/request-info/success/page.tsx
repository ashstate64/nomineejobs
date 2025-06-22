import Link from "next/link"
import { CheckCircle, Clock, Mail, Phone, Users, Calendar, TrendingUp, ArrowRight, MessageSquare, BookOpen } from "lucide-react"

export default function InfoRequestSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Message Sent Successfully!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for your inquiry about becoming a nominee director. 
            We've received your message and will respond with detailed answers soon.
          </p>
        </div>

        {/* Response Timeline */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Clock className="h-6 w-6 text-blue-600" />
            What Happens Next
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-800 mb-2">Immediate Confirmation</div>
              <div className="text-gray-600 text-sm">Check your email for confirmation (within 5 minutes)</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <div className="font-semibold text-gray-800 mb-2">Personal Response</div>
              <div className="text-gray-600 text-sm">Detailed answers from our experts (within 24 hours)</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <div className="font-semibold text-gray-800 mb-2">Optional Call</div>
              <div className="text-gray-600 text-sm">Free consultation if requested (at your convenience)</div>
            </div>
          </div>
        </div>

        {/* While You Wait */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6" />
            While You Wait: Learn More
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold text-gray-800">Earnings Structure</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Discover how much you can earn as a nominee director with our transparent payment structure.
              </p>
              <Link
                href="/learn-more/earnings-structure"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                View Earnings Guide <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Role Comparison</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Learn how nominee work differs from traditional employment and freelancing.
              </p>
              <Link
                href="/learn-more/comparing-roles"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                Compare Roles <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-gray-800">Onboarding Process</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Understand the step-by-step process to become a qualified nominee director.
              </p>
              <Link
                href="/learn-more/onboarding-process"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                View Process <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-orange-600" />
                <h3 className="font-semibold text-gray-800">Legal Framework</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Learn about your legal protections and responsibilities as a nominee.
              </p>
              <Link
                href="/learn-more/legal-framework"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                Legal Guide <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Need Immediate Assistance?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                Call Our Team
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Speak directly with our nominee specialists for immediate answers.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Phone:</span>
                  <a href="tel:+442071234567" className="text-blue-600 hover:text-blue-700 text-sm">
                    +44 207 123 4567
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Hours:</span>
                  <span className="text-gray-600 text-sm">Monday - Friday, 9:00 AM - 6:00 PM GMT</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                Email Support
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Send additional questions or request specific information.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Email:</span>
                  <a href="mailto:info@nomineejobs.co.uk" className="text-blue-600 hover:text-blue-700 text-sm">
                    info@nomineejobs.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Response:</span>
                  <span className="text-gray-600 text-sm">Within 24 hours during business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Apply CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Convinced? Start Your Application</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            If you've learned enough and are ready to begin, you can start your official application now. 
            The process takes about 5 minutes to complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Application
            </Link>
            <Link
              href="/learn-more"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Continue Learning
            </Link>
          </div>
        </div>

        {/* Return to Homepage */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Return to Homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            Thank you for your interest in becoming a nominee director.
          </p>
        </div>
      </div>
    </div>
  )
} 