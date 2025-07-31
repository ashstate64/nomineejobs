import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nominee Director Blog & Resources | Expert Guides & News | NomineeJobs',
  description: 'Expert insights on nominee director services, UK company law, business formation, and director responsibilities. Stay updated with industry news and regulations.',
  keywords: [
    'nominee director blog',
    'UK company law news',
    'director responsibilities guide',
    'business formation UK',
    'company compliance updates',
    'nominee services insights',
    'UK business regulations',
    'director duties explained',
    'company formation guides',
    'business law updates UK'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Nominee Director Blog & Resources | Expert Guides',
    description: 'Expert insights on nominee director services, UK company law, and business formation. Industry guides and regulatory updates.',
    type: 'website',
    url: 'https://nomineejobs.co.uk/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nominee Director Blog & Resources',
    description: 'Expert insights on UK company law, nominee services, and business formation.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'NomineeJobs Blog',
            description: 'Expert insights on nominee director services, UK company law, and business formation',
            url: 'https://nomineejobs.co.uk/blog',
            publisher: {
              '@type': 'Organization',
              name: 'NomineeJobs'
            }
          }),
        }}
      />

      <div className="min-h-screen bg-slate-50">
        <nav className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                Back to NomineeJobs
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/blog" className="text-gray-600 hover:text-gray-800">All Posts</Link>
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
                <BookOpen className="h-8 w-8" />
                Nominee Director Resources
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Expert insights, guides, and updates on UK company law, director responsibilities, 
                and the nominee services industry
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