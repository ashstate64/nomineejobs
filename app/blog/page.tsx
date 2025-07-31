import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Nominee Director Blog - Latest Industry Insights & Guides | NomineeJobs',
  description: 'Stay updated with the latest in UK company law, director responsibilities, business formation guides, and nominee service insights.',
}

const articles = [
  {
    slug: 'how-to-become-nominee-director-uk-2024',
    title: 'How to Become a Nominee Director in the UK: Complete 2024 Guide',
    description: 'Step-by-step guide to becoming a UK nominee director. Requirements, qualifications, earnings potential, and application process explained.',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'Career Guide',
    featured: true,
  },
  {
    slug: 'nominee-director-salary-uk-2024',
    title: 'Nominee Director Salary UK 2024: Complete Earnings Guide',
    description: 'Discover nominee director salaries in the UK. Detailed breakdown of earnings, factors affecting pay, and how to maximize your income.',
    date: '2024-01-05',
    readTime: '9 min read',
    category: 'Salary Guide',
    featured: true,
  },
  {
    slug: 'nominee-director-responsibilities-uk-legal-guide',
    title: 'Nominee Director Responsibilities UK: Complete Legal Guide 2024',
    description: 'Comprehensive guide to nominee director legal responsibilities, duties, and obligations under UK company law.',
    date: '2024-01-08',
    readTime: '12 min read',
    category: 'Legal Guide',
    featured: true,
  },
]

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Articles</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert insights on UK nominee director services, legal requirements, earnings potential, 
          and career guidance for aspiring professional directors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href={`/blog/${article.slug}`} key={article.slug} className="block group">
            <article className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    article.category === 'Career Guide' ? 'bg-green-100 text-green-700' :
                    article.category === 'Salary Guide' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="ml-2 inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Nominee Director Career?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Learn from our expert guides and join hundreds of successful nominee directors earning 
          £600-£20,000+ annually across the UK.
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