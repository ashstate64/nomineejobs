import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Building2, TrendingUp, Star, DollarSign, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nominee Director Jobs in London - £18,000+ Average Earnings | NomineeJobs',
  description: 'Find nominee director opportunities in London, UK. Highest demand market with £18,000+ average annual earnings. 45,000+ active companies seeking professional nominees.',
  keywords: [
    'nominee director jobs London',
    'London nominee services',
    'director services London UK',
    'London company nominee director',
    'nominee director work London',
    'London business director services',
    'professional nominee London',
    'London director for hire',
    'company formation London nominee',
    'London registered office services'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Nominee Director Jobs in London - £18,000+ Average Earnings',
    description: 'Premium nominee director opportunities in London. Highest demand market in the UK with excellent earning potential.',
    type: 'article',
    url: 'https://nomineejobs.co.uk/locations/london',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nominee Director Jobs in London - £18,000+ Average',
    description: 'Premium nominee director opportunities in London with excellent earning potential.',
  },
  alternates: {
    canonical: '/locations/london',
  },
}

export default function LondonPage() {
  return (
    <>
      {/* Local Business Schema for London */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NomineeJobs London',
            description: 'Professional nominee director services in London, UK',
            url: 'https://nomineejobs.co.uk/locations/london',
            telephone: '+44-xxx-xxx-xxxx',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'London',
              addressRegion: 'England',
              addressCountry: 'GB'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 51.5074,
              longitude: -0.1278
            },
            serviceType: 'Nominee Director Services',
            areaServed: {
              '@type': 'City',
              name: 'London',
              containedInPlace: {
                '@type': 'Country',
                name: 'United Kingdom'
              }
            },
            priceRange: '£600-£20000',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'London Nominee Director Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Premium Nominee Director Services',
                    description: 'High-end nominee director services for London-based companies'
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '18000',
                    priceCurrency: 'GBP',
                    description: 'Average annual earnings'
                  }
                }
              ]
            }
          }),
        }}
      />

      {/* FAQ Schema for London-specific questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the average salary for a nominee director in London?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nominee directors in London earn an average of £18,000+ annually, with top performers earning up to £25,000+. The high concentration of financial services and international businesses drives premium rates.'
                }
              },
              {
                '@type': 'Question',
                name: 'How many companies in London need nominee director services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'London has over 45,000 active companies that regularly use nominee director services, making it the largest market in the UK with consistently high demand.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I work as a nominee director in London remotely?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, most nominee director work in London can be done remotely. You\'ll handle document signing, compliance, and communication electronically, with occasional in-person meetings when required.'
                }
              }
            ]
          }),
        }}
      />

      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Nominee Director Jobs in London</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            London offers the UK's most lucrative nominee director opportunities. With over 45,000 active companies 
            and premium service rates, it's the ideal market for experienced professionals.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">£18,000+</div>
              <div className="text-sm text-green-700">Average Earnings</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">45,000+</div>
              <div className="text-sm text-blue-700">Active Companies</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">Very High</div>
              <div className="text-sm text-purple-700">Market Demand</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">+12%</div>
              <div className="text-sm text-orange-700">Annual Growth</div>
            </div>
          </div>
        </div>

        {/* Why London */}
        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            Why London is the Premier Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Financial Services Hub</h3>
                  <p className="text-sm text-gray-600">Home to major banks, investment firms, and fintech companies requiring sophisticated nominee services</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">International Business Center</h3>
                  <p className="text-sm text-gray-600">Multinational corporations and foreign investment companies drive premium demand</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">High-Value Transactions</h3>
                  <p className="text-sm text-gray-600">Complex corporate structures and high-stakes decisions justify premium rates</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Professional Network</h3>
                  <p className="text-sm text-gray-600">Access to London's extensive legal, accounting, and business professional networks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Regulatory Excellence</h3>
                  <p className="text-sm text-gray-600">World-class regulatory environment ensures high professional standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Career Development</h3>
                  <p className="text-sm text-gray-600">Opportunities to work with leading companies and advance your professional reputation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Earnings Breakdown
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">Premium Companies</div>
                  <div className="text-xs text-gray-600">Financial services, international firms</div>
                </div>
                <div className="text-green-600 font-bold">£40-60/hr</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">Standard Companies</div>
                  <div className="text-xs text-gray-600">Professional services, tech companies</div>
                </div>
                <div className="text-blue-600 font-bold">£30-45/hr</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">Basic Services</div>
                  <div className="text-xs text-gray-600">Simple corporate structures</div>
                </div>
                <div className="text-gray-600 font-bold">£20-30/hr</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Industry Sectors
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Financial Services</span>
                <span className="text-blue-600 font-medium">35%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Professional Services</span>
                <span className="text-blue-600 font-medium">22%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Technology</span>
                <span className="text-blue-600 font-medium">18%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Real Estate</span>
                <span className="text-blue-600 font-medium">12%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Other</span>
                <span className="text-blue-600 font-medium">13%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-blue-600" />
            Success Stories from London Nominees
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">£24,000</div>
              <div className="text-sm text-gray-600 mb-3">Sarah K., Financial Services Specialist</div>
              <p className="text-sm text-gray-700 mb-3">
                "Working with London's fintech companies has been incredibly rewarding. The complexity keeps me engaged."
              </p>
              <div className="text-xs text-gray-500">3 years experience</div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">£19,500</div>
              <div className="text-sm text-gray-600 mb-3">James M., Professional Services</div>
              <p className="text-sm text-gray-700 mb-3">
                "London's professional network has opened doors to high-quality appointments with leading firms."
              </p>
              <div className="text-xs text-gray-500">2 years experience</div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="text-2xl font-bold text-purple-600 mb-2">£21,800</div>
              <div className="text-sm text-gray-600 mb-3">Emma R., International Business</div>
              <p className="text-sm text-gray-700 mb-3">
                "The international nature of London business provides diverse and interesting work opportunities."
              </p>
              <div className="text-xs text-gray-500">4 years experience</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">What makes London different from other UK cities for nominee directors?</h3>
              <p className="text-gray-600 text-sm">
                London offers the highest earning potential due to its concentration of international businesses, 
                financial services, and complex corporate structures. The market is more competitive but also more rewarding.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Do I need to be physically present in London to work as a nominee director?</h3>
              <p className="text-gray-600 text-sm">
                While most work can be done remotely, London-based companies may occasionally require in-person meetings 
                for important decisions or complex transactions. Proximity to London can be advantageous.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">What qualifications are preferred for London nominee director roles?</h3>
              <p className="text-gray-600 text-sm">
                While standard qualifications apply, London clients often prefer nominees with backgrounds in finance, 
                law, or business management. Professional certifications and relevant experience command premium rates.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work in London's Premium Market?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join London's elite network of nominee directors and access the UK's highest-paying opportunities. 
            With over 45,000 active companies, there's never been a better time to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Apply for London Opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/request-info"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}