import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Building2, TrendingUp, Star, DollarSign, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: &apos;Nominee Director Jobs in London - £18,000+ Average Earnings | NomineeJobs&apos;,
  description: &apos;Find nominee director opportunities in London, UK. Highest demand market with £18,000+ average annual earnings. 45,000+ active companies seeking professional nominees.&apos;,
  keywords: [
    &apos;nominee director jobs London&apos;,
    &apos;London nominee services&apos;,
    &apos;director services London UK&apos;,
    &apos;London company nominee director&apos;,
    &apos;nominee director work London&apos;,
    &apos;London business director services&apos;,
    &apos;professional nominee London&apos;,
    &apos;London director for hire&apos;,
    &apos;company formation London nominee&apos;,
    &apos;London registered office services&apos;
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: &apos;Nominee Director Jobs in London - £18,000+ Average Earnings&apos;,
    description: &apos;Premium nominee director opportunities in London. Highest demand market in the UK with excellent earning potential.&apos;,
    type: &apos;article&apos;,
    url: &apos;https://nomineejobs.co.uk/locations/london&apos;,
  },
  twitter: {
    card: &apos;summary_large_image&apos;,
    title: &apos;Nominee Director Jobs in London - £18,000+ Average&apos;,
    description: &apos;Premium nominee director opportunities in London with excellent earning potential.&apos;,
  },
  alternates: {
    canonical: &apos;/locations/london&apos;,
  },
}

export default function LondonPage() {
  return (
    <>
      {/* Local Business Schema for London */}
      <script
        type="application/ld+json&quot;
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            &apos;@context&apos;: &apos;https://schema.org&apos;,
            &apos;@type&apos;: &apos;LocalBusiness&apos;,
            name: &apos;NomineeJobs London&apos;,
            description: &apos;Professional nominee director services in London, UK&apos;,
            url: &apos;https://nomineejobs.co.uk/locations/london&apos;,
            telephone: &apos;+44-xxx-xxx-xxxx&apos;,
            address: {
              &apos;@type&apos;: &apos;PostalAddress&apos;,
              addressLocality: &apos;London&apos;,
              addressRegion: &apos;England&apos;,
              addressCountry: &apos;GB&apos;
            },
            geo: {
              &apos;@type&apos;: &apos;GeoCoordinates&apos;,
              latitude: 51.5074,
              longitude: -0.1278
            },
            serviceType: &apos;Nominee Director Services&apos;,
            areaServed: {
              &apos;@type&apos;: &apos;City&apos;,
              name: &apos;London&apos;,
              containedInPlace: {
                &apos;@type&apos;: &apos;Country&apos;,
                name: &apos;United Kingdom&apos;
              }
            },
            priceRange: &apos;£600-£20000&apos;,
            hasOfferCatalog: {
              &apos;@type&apos;: &apos;OfferCatalog&apos;,
              name: &apos;London Nominee Director Services&apos;,
              itemListElement: [
                {
                  &apos;@type&apos;: &apos;Offer&apos;,
                  itemOffered: {
                    &apos;@type&apos;: &apos;Service&apos;,
                    name: &apos;Premium Nominee Director Services&apos;,
                    description: &apos;High-end nominee director services for London-based companies&apos;
                  },
                  priceSpecification: {
                    &apos;@type&apos;: &apos;PriceSpecification&apos;,
                    price: &apos;18000&apos;,
                    priceCurrency: &apos;GBP&apos;,
                    description: &apos;Average annual earnings&apos;
                  }
                }
              ]
            }
          }),
        }}
      />

      {/* FAQ Schema for London-specific questions */}
      <script
        type="application/ld+json&quot;
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            &apos;@context&apos;: &apos;https://schema.org&apos;,
            &apos;@type&apos;: &apos;FAQPage&apos;,
            mainEntity: [
              {
                &apos;@type&apos;: &apos;Question&apos;,
                name: &apos;What is the average salary for a nominee director in London?&apos;,
                acceptedAnswer: {
                  &apos;@type&apos;: &apos;Answer&apos;,
                  text: &apos;Nominee directors in London earn an average of £18,000+ annually, with top performers earning up to £25,000+. The high concentration of financial services and international businesses drives premium rates.&apos;
                }
              },
              {
                &apos;@type&apos;: &apos;Question&apos;,
                name: &apos;How many companies in London need nominee director services?&apos;,
                acceptedAnswer: {
                  &apos;@type&apos;: &apos;Answer&apos;,
                  text: &apos;London has over 45,000 active companies that regularly use nominee director services, making it the largest market in the UK with consistently high demand.&apos;
                }
              },
              {
                &apos;@type&apos;: &apos;Question&apos;,
                name: &apos;Can I work as a nominee director in London remotely?&apos;,
                acceptedAnswer: {
                  &apos;@type&apos;: &apos;Answer&apos;,
                  text: &apos;Yes, most nominee director work in London can be done remotely. You\&apos;ll handle document signing, compliance, and communication electronically, with occasional in-person meetings when required.&apos;
                }
              }
            ]
          }),
        }}
      />

      <div className="space-y-12&quot;>
        {/* Hero Section */}
        <div className="text-center&quot;>
          <div className="flex items-center justify-center gap-3 mb-4&quot;>
            <MapPin className="h-8 w-8 text-blue-600&quot; />
            <h1 className="text-4xl font-bold text-gray-800&quot;>Nominee Director Jobs in London</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8&quot;>
            London offers the UK&apos;s most lucrative nominee director opportunities. With over 45,000 active companies 
            and premium service rates, it&apos;s the ideal market for experienced professionals.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto&quot;>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4&quot;>
              <div className="text-2xl font-bold text-green-600&quot;>£18,000+</div>
              <div className="text-sm text-green-700&quot;>Average Earnings</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4&quot;>
              <div className="text-2xl font-bold text-blue-600&quot;>45,000+</div>
              <div className="text-sm text-blue-700&quot;>Active Companies</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4&quot;>
              <div className="text-2xl font-bold text-purple-600&quot;>Very High</div>
              <div className="text-sm text-purple-700&quot;>Market Demand</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4&quot;>
              <div className="text-2xl font-bold text-orange-600&quot;>+12%</div>
              <div className="text-sm text-orange-700&quot;>Annual Growth</div>
            </div>
          </div>
        </div>

        {/* Why London */}
        <section className="bg-white border border-gray-200 rounded-xl p-8&quot;>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2&quot;>
            <Building2 className="h-6 w-6 text-blue-600&quot; />
            Why London is the Premier Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <div className="space-y-4&quot;>
              <div className="flex items-start gap-3&quot;>
                <CheckCircle className="h-5 w-5 text-green-500 mt-1&quot; />
                <div>
                  <h3 className="font-semibold text-gray-800&quot;>Financial Services Hub</h3>
                  <p className="text-sm text-gray-600&quot;>Home to major banks, investment firms, and fintech companies requiring sophisticated nominee services</p>
                </div>
              </div>
              <div className="flex items-start gap-3&quot;>
                <CheckCircle className="h-5 w-5 text-green-500 mt-1&quot; />
                <div>
                  <h3 className="font-semibold text-gray-800&quot;>International Business Center</h3>
                  <p className="text-sm text-gray-600&quot;>Multinational corporations and foreign investment companies drive premium demand</p>
                </div>
              </div>
              <div className="flex items-start gap-3&quot;>
                <CheckCircle className="h-5 w-5 text-green-500 mt-1&quot; />
                <div>
                  <h3 className="font-semibold text-gray-800&quot;>High-Value Transactions</h3>
                  <p className="text-sm text-gray-600&quot;>Complex corporate structures and high-stakes decisions justify premium rates</p>
                </div>
              </div>
            </div>

            <div className="space-y-4&quot;>
              <div className="flex items-start gap-3&quot;>
                <CheckCircle className="h-5 w-5 text-green-500 mt-1&quot; />
                <div>
                  <h3 className="font-semibold text-gray-800&quot;>Professional Network</h3>
                  <p className="text-sm text-gray-600&quot;>Access to London&apos;s extensive legal, accounting, and business professional networks</p>
                </div>
              </div>
              <div className="flex items-start gap-3&quot;>
                <CheckCircle className="h-5 w-5 text-green-500 mt-1&quot; />
                <div>
                  <h3 className="font-semibold text-gray-800&quot;>Regulatory Excellence</h3>
                  <p className="text-sm text-gray-600&quot;>World-class regulatory environment ensures high professional standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3&quot;>
                <CheckCircle className="h-5 w-5 text-green-500 mt-1&quot; />
                <div>
                  <h3 className="font-semibold text-gray-800&quot;>Career Development</h3>
                  <p className="text-sm text-gray-600&quot;>Opportunities to work with leading companies and advance your professional reputation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
          <div className="bg-white border border-gray-200 rounded-xl p-6&quot;>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2&quot;>
              <DollarSign className="h-5 w-5 text-green-600&quot; />
              Earnings Breakdown
            </h3>
            <div className="space-y-4&quot;>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg&quot;>
                <div>
                  <div className="font-medium text-gray-800&quot;>Premium Companies</div>
                  <div className="text-xs text-gray-600&quot;>Financial services, international firms</div>
                </div>
                <div className="text-green-600 font-bold&quot;>£40-60/hr</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg&quot;>
                <div>
                  <div className="font-medium text-gray-800&quot;>Standard Companies</div>
                  <div className="text-xs text-gray-600&quot;>Professional services, tech companies</div>
                </div>
                <div className="text-blue-600 font-bold&quot;>£30-45/hr</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg&quot;>
                <div>
                  <div className="font-medium text-gray-800&quot;>Basic Services</div>
                  <div className="text-xs text-gray-600&quot;>Simple corporate structures</div>
                </div>
                <div className="text-gray-600 font-bold&quot;>£20-30/hr</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6&quot;>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2&quot;>
              <TrendingUp className="h-5 w-5 text-blue-600&quot; />
              Industry Sectors
            </h3>
            <div className="space-y-3&quot;>
              <div className="flex justify-between items-center&quot;>
                <span className="text-gray-700&quot;>Financial Services</span>
                <span className="text-blue-600 font-medium&quot;>35%</span>
              </div>
              <div className="flex justify-between items-center&quot;>
                <span className="text-gray-700&quot;>Professional Services</span>
                <span className="text-blue-600 font-medium&quot;>22%</span>
              </div>
              <div className="flex justify-between items-center&quot;>
                <span className="text-gray-700&quot;>Technology</span>
                <span className="text-blue-600 font-medium&quot;>18%</span>
              </div>
              <div className="flex justify-between items-center&quot;>
                <span className="text-gray-700&quot;>Real Estate</span>
                <span className="text-blue-600 font-medium&quot;>12%</span>
              </div>
              <div className="flex justify-between items-center&quot;>
                <span className="text-gray-700&quot;>Other</span>
                <span className="text-blue-600 font-medium&quot;>13%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8&quot;>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2&quot;>
            <Star className="h-6 w-6 text-blue-600&quot; />
            Success Stories from London Nominees
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            <div className="bg-white rounded-lg p-6&quot;>
              <div className="text-2xl font-bold text-green-600 mb-2&quot;>£24,000</div>
              <div className="text-sm text-gray-600 mb-3&quot;>Sarah K., Financial Services Specialist</div>
              <p className="text-sm text-gray-700 mb-3&quot;>
                &quot;Working with London&apos;s fintech companies has been incredibly rewarding. The complexity keeps me engaged.&quot;
              </p>
              <div className="text-xs text-gray-500&quot;>3 years experience</div>
            </div>
            
            <div className="bg-white rounded-lg p-6&quot;>
              <div className="text-2xl font-bold text-blue-600 mb-2&quot;>£19,500</div>
              <div className="text-sm text-gray-600 mb-3&quot;>James M., Professional Services</div>
              <p className="text-sm text-gray-700 mb-3&quot;>
                &quot;London&apos;s professional network has opened doors to high-quality appointments with leading firms.&quot;
              </p>
              <div className="text-xs text-gray-500&quot;>2 years experience</div>
            </div>
            
            <div className="bg-white rounded-lg p-6&quot;>
              <div className="text-2xl font-bold text-purple-600 mb-2&quot;>£21,800</div>
              <div className="text-sm text-gray-600 mb-3&quot;>Emma R., International Business</div>
              <p className="text-sm text-gray-700 mb-3&quot;>
                &quot;The international nature of London business provides diverse and interesting work opportunities.&quot;
              </p>
              <div className="text-xs text-gray-500&quot;>4 years experience</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8&quot;>
          <h2 className="text-2xl font-bold text-gray-800 mb-6&quot;>Frequently Asked Questions</h2>
          
          <div className="space-y-6&quot;>
            <div className="border-l-4 border-blue-500 pl-4&quot;>
              <h3 className="font-semibold text-gray-800 mb-2&quot;>What makes London different from other UK cities for nominee directors?</h3>
              <p className="text-gray-600 text-sm&quot;>
                London offers the highest earning potential due to its concentration of international businesses, 
                financial services, and complex corporate structures. The market is more competitive but also more rewarding.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4&quot;>
              <h3 className="font-semibold text-gray-800 mb-2&quot;>Do I need to be physically present in London to work as a nominee director?</h3>
              <p className="text-gray-600 text-sm&quot;>
                While most work can be done remotely, London-based companies may occasionally require in-person meetings 
                for important decisions or complex transactions. Proximity to London can be advantageous.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4&quot;>
              <h3 className="font-semibold text-gray-800 mb-2&quot;>What qualifications are preferred for London nominee director roles?</h3>
              <p className="text-gray-600 text-sm&quot;>
                While standard qualifications apply, London clients often prefer nominees with backgrounds in finance, 
                law, or business management. Professional certifications and relevant experience command premium rates.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center&quot;>
          <h2 className="text-2xl font-bold mb-4&quot;>Ready to Work in London&apos;s Premium Market?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto&quot;>
            Join London&apos;s elite network of nominee directors and access the UK&apos;s highest-paying opportunities. 
            With over 45,000 active companies, there&apos;s never been a better time to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Link
              href="/apply&quot;
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2&quot;
            >
              Apply for London Opportunities
              <ArrowRight className="h-4 w-4&quot; />
            </Link>
            <Link
              href="/request-info&quot;
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors&quot;
            >
              Get More Information
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}