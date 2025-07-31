import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nominee Director Jobs by Location - UK Cities | NomineeJobs',
  description: 'Find nominee director opportunities in your city. Explore salary ranges, demand levels, and application processes for major UK cities.',
  keywords: [
    'nominee director jobs London',
    'nominee director Manchester',
    'nominee director Birmingham',
    'UK city nominee services',
    'local nominee director work',
    'regional director services UK'
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/locations',
  },
}

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <nav className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                Back to NomineeJobs
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/locations" className="text-gray-600 hover:text-gray-800">All Locations</Link>
                <Link href="/apply" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <MapPin className="h-8 w-8" />
                Nominee Director Jobs by Location
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover nominee director opportunities in your city. Local demand, salary ranges, 
                and market insights for major UK locations.
              </p>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {children}
        </main>
      </div>
    </>
  )
}