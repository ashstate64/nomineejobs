import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nominee Director Blog - Latest Industry Insights & Guides | NomineeJobs',
  description: 'Stay updated with the latest in UK company law, director responsibilities, business formation guides, and nominee service insights.',
}

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our expert blog content is being prepared. Check back soon for the latest insights 
          on UK company law, nominee director services, and industry updates.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Nominee Director Career?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          While we prepare our blog content, you can still apply to join our network of professional nominees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/learn-more"
            className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}