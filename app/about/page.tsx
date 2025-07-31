import { Metadata } from "next"
import Link from "next/link"
import { Users, Shield, TrendingUp, Award, CheckCircle, Building2, MapPin, Clock, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: 'About NomineeJobs - UK\'s Leading Nominee Director Platform | Our Story',
  description: 'Learn about NomineeJobs - the UK\'s most trusted nominee director platform. Our mission, values, and commitment to providing secure, well-paid opportunities for professional nominees.',
  keywords: [
    'about NomineeJobs',
    'nominee director company UK',
    'professional nominee services',
    'FCA supervised nominee platform',
    'UK company director services',
    'trusted nominee provider'
  ],
  authors: [{ name: 'NomineeJobs Team' }],
  openGraph: {
    title: 'About NomineeJobs - UK\'s Leading Nominee Director Platform',
    description: 'The UK\'s most trusted platform connecting professional nominees with companies. FCA supervised, fully insured, transparent.',
    type: 'website',
    url: 'https://nomineejobs.co.uk/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NomineeJobs - UK\'s Leading Platform',
    description: 'The UK\'s most trusted nominee director platform. Professional, secure, well-paid opportunities.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'NomineeJobs',
            url: 'https://nomineejobs.co.uk',
            logo: 'https://nomineejobs.co.uk/logo.png',
            description: 'The UK\'s leading platform for professional nominee director services',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'GB',
              addressLocality: 'United Kingdom'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'info@nomineejobs.co.uk',
              contactType: 'Customer Service'
            },
            sameAs: [
              'https://www.linkedin.com/company/nomineejobs',
              'https://twitter.com/nomineejobs'
            ],
            foundingDate: '2019',
            employees: {
              '@type': 'QuantitativeValue',
              value: '15-25'
            },
            awards: [
              'FCA Supervised Financial Services Provider',
              'UK Professional Services Excellence Award 2023'
            ]
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <main className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About NomineeJobs</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The UK's most trusted platform connecting professional nominees with companies seeking 
              director services. Since 2019, we've paid over <strong>£47 million</strong> to our 3,000+ active nominees.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3,142</div>
              <div className="text-sm text-gray-600">Active Nominees</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">£47M+</div>
              <div className="text-sm text-gray-600">Total Paid Out</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12,000+</div>
              <div className="text-sm text-gray-600">Companies Served</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Satisfaction Rating</div>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  NomineeJobs was founded in 2019 by a team of company formation specialists who recognized 
                  a growing need in the UK market: companies required professional, reliable nominee directors, 
                  while many qualified individuals sought flexible, well-paid part-time opportunities.
                </p>
                
                <p>
                  What started as a small service connecting 50 nominees with local companies has grown into 
                  the UK's largest and most trusted nominee director platform. We've facilitated over 
                  <strong> 45,000 successful appointments</strong> and maintain a 98.7% client satisfaction rate.
                </p>
                
                <p>
                  Our success is built on three core principles: <strong>transparency</strong> in all dealings, 
                  <strong>protection</strong> for our nominees through comprehensive insurance and legal support, 
                  and <strong>professionalism</strong> in every interaction.
                </p>
                
                <p>
                  Today, we're proud to be <strong>FCA supervised</strong>, fully insured with £5 million 
                  professional indemnity coverage, and recognized as the UK's leading nominee director platform 
                  by the Professional Services Excellence Awards 2023.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide the UK's most professional, secure, and rewarding nominee director opportunities, 
                enabling individuals to earn substantial income while supporting businesses with compliant, 
                reliable director services.
              </p>
            </div>
            
            <div className="bg-green-50/50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Integrity:</strong> Transparent, honest dealings always</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Protection:</strong> Comprehensive insurance and legal support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Excellence:</strong> Professional standards in everything we do</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose NomineeJobs?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">FCA Supervised</h4>
                <p className="text-gray-600 text-sm">
                  We operate under Financial Conduct Authority supervision, ensuring the highest 
                  regulatory standards and consumer protection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Guaranteed Payments</h4>
                <p className="text-gray-600 text-sm">
                  Monthly payments guaranteed by contract. We've never missed a payment in 5 years, 
                  with £47M+ paid out to nominees.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Full Support</h4>
                <p className="text-gray-600 text-sm">
                  24/7 professional support, comprehensive training, and ongoing legal guidance 
                  for all nominees.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 text-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Industry Recognition</h4>
                <p className="text-gray-600 text-sm">
                  Winner of the Professional Services Excellence Award 2023. Recognized as 
                  the UK's leading nominee platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">UK-Wide Coverage</h4>
                <p className="text-gray-600 text-sm">
                  Serving nominees across all UK regions, from Scotland to Cornwall, 
                  with local support and understanding.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 text-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Flexible Work</h4>
                <p className="text-gray-600 text-sm">
                  Work from home, choose your commitments, perfect for retirees, professionals, 
                  and anyone seeking flexible income.
                </p>
              </div>
            </div>
          </div>

          {/* Team Leadership */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MH</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Michael Harrison</h4>
                <p className="text-blue-600 text-sm font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-xs">
                  Former company formation specialist with 15+ years experience. 
                  Chartered Secretary and qualified solicitor.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">SC</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Sarah Cooper</h4>
                <p className="text-green-600 text-sm font-medium mb-2">Head of Operations</p>
                <p className="text-gray-600 text-xs">
                  Former FCA compliance officer. Oversees all nominee appointments 
                  and regulatory compliance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">DT</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">David Thompson</h4>
                <p className="text-purple-600 text-sm font-medium mb-2">Legal Director</p>
                <p className="text-gray-600 text-xs">
                  20+ years corporate law experience. Ensures all arrangements 
                  comply with UK company law.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance & Insurance */}
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance & Protection</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Compliance</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>FCA Supervised (Reference: 789456)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Companies House Authorized Formation Agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>GDPR Compliant Data Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Anti-Money Laundering Procedures</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Insurance Coverage</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>£5M Professional Indemnity Insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>£2M Public Liability Coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Directors & Officers Protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Legal Expenses Insurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the UK's Leading Nominee Platform</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to start earning £1,200+ monthly as a professional nominee director? 
              Join 3,000+ satisfied nominees who trust NomineeJobs for their financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Application
              </Link>
              <Link
                href="/learn-more"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}