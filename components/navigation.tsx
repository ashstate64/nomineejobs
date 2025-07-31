import Link from "next/link"
import { BookOpen, MapPin, Home, Users, Phone } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Home className="h-6 w-6" />
            NomineeJobs
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/learn-more" className="text-gray-600 hover:text-blue-600 transition-colors">
              Learn More
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              Blog
            </Link>
            <Link href="/locations" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Locations
            </Link>
            <Link href="/request-info" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Phone className="h-4 w-4" />
              Contact
            </Link>
            <Link 
              href="/apply" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link 
              href="/apply" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
            >
              Apply
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/learn-more" className="text-gray-600 hover:text-blue-600">
              Learn More
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              Blog
            </Link>
            <Link href="/locations" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Locations
            </Link>
            <Link href="/request-info" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}