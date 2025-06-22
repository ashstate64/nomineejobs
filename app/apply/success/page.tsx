import Link from "next/link"
import { CheckCircle, Clock, Mail, Phone, Users, Calendar, Shield, TrendingUp, ArrowRight, Download, MessageSquare } from "lucide-react"

export default function ApplicationSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Application Successfully Submitted!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for applying to become a nominee director. We've received your application 
            and will begin processing it immediately.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Clock className="h-6 w-6 text-blue-600" />
            What Happens Next
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Immediate Confirmation</div>
                <div className="text-gray-600 text-sm">You'll receive an email confirmation within 5 minutes</div>
                <div className="text-blue-600 text-xs mt-1">✓ Check your inbox (and spam folder)</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Initial Review (24-48 hours)</div>
                <div className="text-gray-600 text-sm">Our compliance team reviews your application and documents</div>
                <div className="text-green-600 text-xs mt-1">✓ Document verification and background checks begin</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Identity Verification (3-5 days)</div>
                <div className="text-gray-600 text-sm">Professional background and identity checks completed</div>
                <div className="text-purple-600 text-xs mt-1">✓ AML and compliance verification</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-orange-600 font-semibold text-sm">4</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Welcome & Onboarding (1 week)</div>
                <div className="text-gray-600 text-sm">Complete onboarding and receive your first opportunities</div>
                <div className="text-orange-600 text-xs mt-1">✓ Training materials and dashboard access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">Check Your Email</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              We've sent a confirmation email with your application reference number and next steps.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-700 text-xs">
                <strong>Tip:</strong> Add applications@nomineejobs.co.uk to your contacts to ensure you receive all updates.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">Secure Processing</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your application is being processed securely with bank-level encryption and GDPR compliance.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-700 text-xs">
                <strong>Security:</strong> All personal data is encrypted and will be deleted if not approved.
              </p>
            </div>
          </div>
        </div>

        {/* While You Wait */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <TrendingUp className="h-6 w-6" />
            While You Wait: Prepare for Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Learn About the Role</h3>
              <p className="text-blue-600 text-sm mb-3">
                Understand your responsibilities and opportunities as a nominee director.
              </p>
              <Link
                href="/learn-more/comparing-roles"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-1"
              >
                Learn More <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Plan Your Schedule</h3>
              <p className="text-blue-600 text-sm mb-3">
                Most nominees work flexibly around their existing commitments.
              </p>
              <Link
                href="/learn-more/onboarding-process"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-1"
              >
                View Process <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Earnings Potential</h3>
              <p className="text-blue-600 text-sm mb-3">
                Review our transparent earnings structure and payment schedule.
              </p>
              <Link
                href="/learn-more/earnings-structure"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-1"
              >
                View Earnings <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Questions? We're Here to Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                Speak to Our Team
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Our application specialists are available to answer any questions about your submission.
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
                <MessageSquare className="h-5 w-5 text-green-600" />
                Email Support
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                For detailed questions or additional documentation, email us directly.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Email:</span>
                  <a href="mailto:applications@nomineejobs.co.uk" className="text-blue-600 hover:text-blue-700 text-sm">
                    applications@nomineejobs.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Response:</span>
                  <span className="text-gray-600 text-sm">Within 4 hours during business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-amber-800 mb-3">📌 Important Reminders</h3>
          <ul className="space-y-2 text-sm text-amber-700">
            <li>• Keep your email accessible - we'll send important updates about your application</li>
            <li>• Your application reference number will be in your confirmation email</li>
            <li>• Processing times may vary during peak application periods</li>
            <li>• All communications will come from @nomineejobs.co.uk email addresses</li>
            <li>• You can contact us anytime if you have questions or need to update information</li>
          </ul>
        </div>

        {/* Return to Homepage */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            Thank you for choosing Nominee Jobs UK. We look forward to working with you.
          </p>
        </div>
      </div>
    </div>
  )
} 