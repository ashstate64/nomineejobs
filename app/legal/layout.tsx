import Link from "next/link"
import { ChevronLeft, FileText } from "lucide-react"
import type React from "react"

const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`bg-white/70 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-xl p-6 md:p-10 ${className}`}
  >
    {children}
  </div>
)

export default function LegalLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode
  pageTitle: string
}) {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 font-sans">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100/50 to-sky-100/30"></div>
      </div>
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-sky-600 hover:text-sky-700 flex items-center text-sm">
            <ChevronLeft className="h-5 w-5 mr-1" /> Back to Homepage
          </Link>
          <div className="flex items-center text-gray-700">
            <FileText className="h-5 w-5 mr-2" />
            <span className="font-semibold text-lg">{pageTitle}</span>
          </div>
          {/* Placeholder for potential logo or branding */}
          <div className="w-1/3 text-right">
            <span className="text-sm text-gray-500">Nominee Jobs UK Ltd</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <GlassCard className="max-w-4xl mx-auto">{children}</GlassCard>
      </main>
      <footer className="bg-slate-200 border-t border-gray-300 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nominee Jobs UK Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
