import Link from "next/link"
import { DEMOGRAPHIC_CONFIGS } from "@/lib/demographic-config"

export default function ComprehensiveFooter() {
  const demographicEntries = Object.entries(DEMOGRAPHIC_CONFIGS)

  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">NomineeJobs</h3>
            <p className="text-sm text-gray-300">
              The UK's premier platform connecting qualified individuals with nominee director opportunities.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Phone:</strong> +44 207 123 4567
              </p>
              <p className="text-sm">
                <strong>Email:</strong>{" "}
                <a 
                  href="mailto:info@nomineejobs.co.uk" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  info@nomineejobs.co.uk
                </a>
              </p>
              <p className="text-sm">
                <strong>Hours:</strong> Mon-Fri 9AM-6PM GMT
              </p>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/learn-more" className="text-gray-300 hover:text-white transition-colors">
                  Learn More
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-300 hover:text-white transition-colors">
                  Salary Calculator
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-300 hover:text-white transition-colors">
                  Compare Options
                </Link>
              </li>
              <li>
                <Link href="/request-info" className="text-gray-300 hover:text-white transition-colors">
                  Request Information
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Demographics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Find Your Match</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/demographics" className="text-gray-300 hover:text-white transition-colors">
                  Browse All Opportunities
                </Link>
              </li>
              {demographicEntries.slice(0, 5).map(([slug, config]) => (
                <li key={slug}>
                  <Link 
                    href={`/for/${slug}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {config.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
            
            <h4 className="text-md font-semibold text-blue-400 mt-6">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Nominee Jobs UK Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>🇬🇧 UK Registered</span>
              <span>✓ GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}