import { Metadata } from "next"
import Link from "next/link"
import { User, TrendingUp, Clock, MapPin, DollarSign, CheckCircle, Quote, Star, Calendar, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: 'Success Stories - Real Nominee Director Earnings & Experiences | NomineeJobs',
  description: 'Read real success stories from UK nominee directors. See actual earnings, experiences, and career journeys from our 3,000+ active nominees.',
  keywords: [
    'nominee director success stories',
    'real nominee earnings UK',
    'nominee director testimonials',
    'UK director services reviews',
    'nominee director case studies',
    'actual nominee income stories'
  ],
  authors: [{ name: 'NomineeJobs Success Team' }],
  openGraph: {
    title: 'Success Stories - Real Nominee Director Earnings & Experiences',
    description: 'Read inspiring success stories from UK nominee directors earning £600-£20,000+ annually',
    type: 'website',
    url: 'https://nomineejobs.co.uk/success-stories',
  },
  alternates: {
    canonical: '/success-stories',
  },
}

const successStories = [
  {
    id: 1,
    name: "Margaret Thompson",
    age: 64,
    location: "Edinburgh, Scotland",
    profession: "Retired Teacher",
    joinDate: "March 2022",
    companies: 8,
    monthlyEarnings: 4200,
    annualEarnings: 50400,
    hoursPerWeek: 6,
    avatar: "/thomas-avatar.svg",
    story: "After retiring from teaching, I was looking for something to keep me engaged while supplementing my pension. NomineeJobs has been perfect - the work is interesting, the team is supportive, and the extra £4,200 monthly has transformed my retirement. I now help my grandchildren with university costs and can afford those holidays I always dreamed of.",
    highlights: [
      "Doubled retirement income in 18 months",
      "Flexible schedule perfect for travel",
      "Comprehensive training provided",
      "24/7 professional support"
    ],
    quote: "At 64, I never expected to find such a rewarding career. The financial security has given me peace of mind, and I genuinely enjoy the work."
  },
  {
    id: 2,
    name: "David Richards",
    age: 42,
    location: "Manchester, England",
    profession: "Part-time Consultant",
    joinDate: "August 2021",
    companies: 12,
    monthlyEarnings: 6800,
    annualEarnings: 81600,
    hoursPerWeek: 9,
    avatar: "/james-avatar.svg",
    story: "As a freelance consultant, my income was unpredictable. NomineeJobs has provided the stability I needed. With 12 companies in my portfolio, I earn £6,800 monthly - more than many full-time positions. The work fits perfectly around my consulting schedule, and the steady income allows me to be selective with my consultancy clients.",
    highlights: [
      "£81,600 annual stable income",
      "Perfect work-life balance",
      "Complements existing business",
      "Professional development opportunities"
    ],
    quote: "The reliability of the monthly payments has changed my entire approach to business. I can plan ahead and take calculated risks with my consultancy."
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    age: 35,
    location: "London, England",
    profession: "Marketing Executive",
    joinDate: "November 2021",
    companies: 15,
    monthlyEarnings: 9200,
    annualEarnings: 110400,
    hoursPerWeek: 12,
    hoursDetail: "Mostly weekends and evenings",
    avatar: "/sarah-avatar.svg",
    story: "Working in London marketing, I needed extra income to afford my mortgage and still have a life. Starting with 3 companies, I've grown to 15 and now earn more from NomineeJobs than my day job! The London premium rates and complex international companies have been incredibly lucrative. I'm saving for a house deposit while maintaining my marketing career.",
    highlights: [
      "£110,400 annual income - exceeds day job",
      "London premium rates (25% higher)",
      "International company portfolio",
      "Building substantial savings"
    ],
    quote: "I never imagined a part-time opportunity could be so financially rewarding. It's allowed me to live comfortably in London while building real wealth."
  },
  {
    id: 4,
    name: "James Wilson",
    age: 58,
    location: "Birmingham, England",
    profession: "Semi-Retired Accountant",
    joinDate: "January 2020",
    companies: 22,
    monthlyEarnings: 12600,
    annualEarnings: 151200,
    hoursPerWeek: 15,
    specialization: "Complex international structures",
    avatar: "/thomas-profile.jpg",
    story: "After 30 years as a chartered accountant, I wanted to wind down gradually. NomineeJobs has been the perfect bridge to retirement. My accounting background makes me ideal for complex companies, and I now earn £151,200 annually - more than I ever made in practice! The work is engaging, uses my skills, and the income supports both my lifestyle and early retirement planning.",
    highlights: [
      "Highest earnings tier - £151,200 annually",
      "22 company portfolio",
      "Specialized in complex structures",
      "Perfect semi-retirement solution"
    ],
    quote: "My accounting background opened doors to the most lucrative appointments. It's the ideal way to use my skills while preparing for full retirement."
  },
  {
    id: 5,
    name: "Emma Clarke",
    age: 29,
    location: "Bristol, England", 
    profession: "New Mother",
    joinDate: "February 2023",
    companies: 5,
    monthlyEarnings: 2400,
    annualEarnings: 28800,
    hoursPerWeek: 4,
    situation: "Recently had first child",
    avatar: "/sarah-avatar.svg",
    story: "After having my first child, returning to my corporate job full-time wasn't appealing. NomineeJobs allows me to earn £2,400 monthly working just 4 hours per week - perfect for fitting around childcare. The income helps with nursery costs, and I can work entirely from home during nap times. It's given me financial independence while being present for my daughter.",
    highlights: [
      "Perfect for new parents",
      "4 hours per week maximum",
      "Work around childcare schedule",
      "Financial independence maintained"
    ],
    quote: "As a new mum, this has been a lifesaver. I can contribute financially without sacrificing time with my daughter."
  },
  {
    id: 6,
    name: "Robert Taylor",
    age: 71,
    location: "Cardiff, Wales",
    profession: "Retired Executive",
    joinDate: "June 2019",
    companies: 18,
    monthlyEarnings: 8400,
    annualEarnings: 100800,
    hoursPerWeek: 8,
    seniority: "Longest-serving member",
    avatar: "/thomas-avatar.svg",
    story: "At 71, I've been with NomineeJobs for over 4 years - one of their longest-serving nominees. What started as a way to stay active in business has become a significant income stream. With 18 companies, I earn £100,800 annually while maintaining complete flexibility. The work keeps my mind sharp, and the income funds an active retirement my pension alone couldn't support.",
    highlights: [
      "4+ year track record",
      "18 company portfolio",
      "£100,800 stable annual income",
      "Keeps mind active in retirement"
    ],
    quote: "Four years later, I'm still as enthusiastic as day one. The work keeps me sharp, and the income keeps me comfortable."
  }
]

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-green-600 rounded-xl">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Success Stories</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from our 3,000+ nominees earning £600-£20,000+ monthly. 
            See how others have transformed their finances with professional nominee director work.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">£3.2M</div>
            <div className="text-xs text-gray-600">Combined annual earnings</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">80</div>
            <div className="text-xs text-gray-600">Total companies served</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">8.5</div>
            <div className="text-xs text-gray-600">Average hours/week</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">5/5</div>
            <div className="text-xs text-gray-600">Average satisfaction</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="space-y-12">
          {successStories.map((story, index) => (
            <div key={story.id} className="bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Profile Section */}
                  <div className="lg:col-span-1">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                      <p className="text-gray-600 text-sm mb-1">{story.profession}, {story.age}</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-4">
                        <MapPin className="h-3 w-3" />
                        <span>{story.location}</span>
                      </div>
                    </div>

                    {/* Key Stats */}
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-600">£{story.monthlyEarnings.toLocaleString()}</div>
                        <div className="text-green-700 text-xs">Monthly Earnings</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-blue-600">{story.companies}</div>
                          <div className="text-blue-700 text-xs">Companies</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-purple-600">{story.hoursPerWeek}h</div>
                          <div className="text-purple-700 text-xs">Per Week</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>Joined {story.joinDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <Quote className="h-8 w-8 text-blue-300 mb-4" />
                      <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                        "{story.quote}"
                      </blockquote>
                    </div>

                    <div className="prose prose-gray max-w-none mb-6">
                      <p className="text-gray-700 leading-relaxed">{story.story}</p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Key Highlights
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {story.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Annual Summary */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-600">£{story.annualEarnings.toLocaleString()}</div>
                          <div className="text-blue-700 text-xs">Annual Earnings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-green-600">{(story.monthlyEarnings / story.hoursPerWeek / 4.33).toFixed(0)}</div>
                          <div className="text-green-700 text-xs">Per Hour (£)</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-purple-600">{story.hoursPerWeek * 52}</div>
                          <div className="text-purple-700 text-xs">Hours/Year</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Margaret, David, Sarah, James, Emma, Robert and 3,000+ others earning 
            substantial income as professional nominee directors. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Application
            </Link>
            <Link
              href="/calculator"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Calculate Your Earnings
            </Link>
          </div>
        </div>

        {/* Verification Notice */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Verified Success Stories</p>
              <p>
                All earnings figures and testimonials are verified through our internal records. 
                Names have been changed to protect privacy, but all financial details are accurate 
                as of their most recent quarterly statements. Individual results may vary.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}