import type React from "react"
import { memo, useMemo } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Banknote,
  Briefcase,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  ShieldCheck,
  UserCheck,
  Users,
  MessageSquare,
  TrendingUp,
  Award,
  FileSignature,
  Mail,
  Smartphone,
  Building,
  HelpCircle,
  DollarSign,
  ThumbsUp,
  Zap,
  Info,
  ListChecks,
  Landmark,
  Globe,
  EyeOff,
  Rocket,
  Edit3,
  Inbox,
  CreditCard,
  AlertTriangle,
  Gavel,
  BarChart3,
  ClipboardList,
  ShieldQuestion,
  Users2,
  Receipt,
  BookText,
  Star,
  Timer,
  Target,
  Sparkles,
  TrendingDown,
  Eye,
  Heart,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

// Memoized components for performance optimization
const GlassCard = memo(({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`bg-white/60 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:border-sky-300/50 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
))

const FeatureIcon = memo(({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-sky-100 text-sky-600 p-3 rounded-full ${className}`}>
    <Icon className="h-6 w-6" />
  </div>
))

const DetailPageLinkCard = memo(({
  href,
  icon: Icon,
  title,
  description,
}: { href: string; icon: React.ElementType; title: string; description: string }) => (
  <Link href={href} passHref>
    <GlassCard className="hover:shadow-xl hover:border-sky-300 transition-all duration-300 h-full flex flex-col group">
      <div className="flex items-center mb-4">
        <FeatureIcon icon={Icon} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-sky-700 transition-colors">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
      <div className="mt-4 text-sky-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-200">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </GlassCard>
  </Link>
))

// Social proof counter animation component
const AnimatedCounter = memo(({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const animatedValue = useMemo(() => value, [value])
  
  return (
    <span className="font-bold text-sky-600">
      {prefix}{animatedValue.toLocaleString()}{suffix}
    </span>
  )
})

export default function LandingPage() {
  return (
    <>
      {/* Page-specific structured data */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'NomineeJobs - UK Nominee Director Services',
              description: 'Join the UK\'s leading nominee director programme. Earn £600-£20,000+ annually providing professional nominee services to companies.',
              url: 'https://nomineejobs.co.uk',
              mainEntity: {
                '@type': 'JobPosting',
                title: 'Nominee Director',
                description: 'Provide nominee director services to UK companies. Work from home, flexible hours, earn £600-£20,000+ annually.',
                datePosted: '2024-01-01',
                employmentType: 'CONTRACTOR',
                hiringOrganization: {
                  '@type': 'Organization',
                  name: 'NomineeJobs'
                },
                jobLocation: {
                  '@type': 'Place',
                  addressLocality: 'United Kingdom',
                  addressCountry: 'GB'
                },
                baseSalary: {
                  '@type': 'MonetaryAmount',
                  currency: 'GBP',
                  value: {
                    '@type': 'QuantitativeValue',
                    minValue: 600,
                    maxValue: 20000,
                    unitText: 'YEAR'
                  }
                },
                workHours: 'Flexible',
                benefits: 'Professional indemnity insurance, legal support, training provided'
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is a nominee director?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A nominee director is a person whose name appears on a company\'s public register, but who agrees by written contract to act strictly on instructions from the real owner (the "beneficial owner").'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How much can I earn as a nominee director?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Earnings range from £600-£20,000+ annually depending on the number of active companies you serve. Typical income includes annual retainers (£500-£800 each), mail-handling allowances, and per-task fees (£75-£150).'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are my duties as a nominee director?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Main duties include electronically signing statutory documents, forwarding official mail, depositing occasional cheques, and acting honestly within UK Company Law. Average time per task is 10 minutes.'
                  }
                }
              ]
            }),
          }}
        />
      <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-sky-50/30"></div>
      </div>
      
      {/* Decorative Blobs - optimized for performance */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Enhanced Announcement Bar with Urgency */}
      <header className="bg-gradient-to-r from-sky-600 to-sky-700 text-white text-center p-3 text-sm font-medium sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-center gap-2 animate-fade-in">
          <AlertCircle className="h-4 w-4 text-yellow-300" />
          <Link href="#apply" className="hover:underline flex items-center gap-2">
            <span className="hidden sm:inline">🔥</span>
            <strong>Limited Spots:</strong> Applications now open — first payment in as little as 7 days
            <ArrowRight className="inline h-4 w-4 ml-1" />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-24 md:space-y-32 relative z-10">
        
        {/* Enhanced Hero Section */}
        <section className="text-center flex flex-col items-center">
          {/* Social Proof Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sky-500" />
              <AnimatedCounter value={2847} suffix="+ active nominees" />
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-green-500" />
              <AnimatedCounter prefix="£" value={8640000} suffix=" paid out this year" />
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.9/5 satisfaction rating</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
            Earn <span className="text-sky-600 relative">
              £600 – £20,000+
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                <path d="M1 8C50 2 100 2 150 8C200 14 250 14 299 8" stroke="rgb(2 132 199)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> per year working from home
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
            Provide nominee-director and registered-address services to UK companies. Sign documents electronically,
            forward business mail, scan or deposit the occasional cheque—professional, fully compliant, and insured.
          </p>
          
          {/* Enhanced CTAs with conversion psychology */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
            <Link href="/apply" passHref>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-sky-500/40 transition-all transform hover:scale-105 w-full sm:w-auto relative overflow-hidden group"
              >
                <span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  Start Secure Application <ChevronRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </Link>
            <Link href="/request-info" passHref>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 hover:text-sky-700 font-semibold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-sky-500/20 transition-all transform hover:scale-105 w-full sm:w-auto bg-white/70 backdrop-blur-sm group"
              >
                <span>
                  Request More Information <MessageSquare className="ml-2 h-5 w-5 inline-block group-hover:scale-110 transition-transform duration-200" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Enhanced urgency indicator */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Timer className="h-4 w-4 text-orange-500" />
              <span className="text-orange-700 font-medium">
                Only <strong className="text-orange-800">23 spots</strong> remaining this month
              </span>
            </div>
          </div>
          
          {/* Enhanced trust signals */}
          <div className="mt-8 text-xs text-gray-500 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
              <ShieldCheck className="h-3 w-3 text-sky-500" />
              FCA-supervised
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
              <Briefcase className="h-3 w-3 text-sky-500" />
              £1M liability cover
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
              <UserCheck className="h-3 w-3 text-sky-500" />
              GDPR-secure platform
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-white/80">
              <Eye className="h-3 w-3 text-green-500" />
              No hidden fees
            </Badge>
          </div>
        </section>

        {/* Enhanced Understanding Your Role Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Understanding Your Role as a Nominee Director
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, legal, and transparent. Here's everything you need to know about becoming a nominee director.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {/* What is a Nominee Director? */}
            <GlassCard>
              <div className="flex items-center mb-4">
                <FeatureIcon icon={Info} />
                <h3 className="ml-4 text-2xl font-semibold text-gray-800">What is a Nominee Director?</h3>
              </div>
              <p className="text-gray-700 mb-3">
                A nominee director is a person whose name appears on a company's public register, but who agrees—by
                written contract—to act strictly on instructions from the real owner (the "beneficial owner").
              </p>
              <p className="text-gray-600 text-sm">
                Think of it as lending your legal identity to meet regulatory or practical needs while the owner runs
                the business behind the scenes.
              </p>
            </GlassCard>

            {/* Why Companies Use Nominees */}
            <GlassCard>
              <div className="flex items-center mb-6">
                <FeatureIcon icon={Building} />
                <h3 className="ml-4 text-2xl font-semibold text-gray-800">Why Companies Use Nominees</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: Landmark,
                    reason: "Local residency requirement",
                    example: "A tech founder in Spain needs at least one UK-resident director to incorporate here.",
                  },
                  {
                    icon: Globe,
                    reason: "Mail & signing convenience",
                    example:
                      "Overseas investors can't receive HMRC letters or pop into a UK notary; the nominee handles it.",
                  },
                  {
                    icon: EyeOff,
                    reason: "Privacy of ownership",
                    example:
                      "High-net-worth founders or celebrities keep their names off the public Companies House record.",
                  },
                  {
                    icon: Rocket,
                    reason: "Speed",
                    example:
                      "Businesses launching multiple SPVs (special-purpose vehicles) can appoint ready-vetted nominees in minutes instead of recruiting directors.",
                  },
                ].map((item) => (
                  <div
                    key={item.reason}
                    className="flex items-start p-4 bg-slate-50/50 rounded-lg border border-gray-200/50 hover:border-sky-200 transition-colors duration-200"
                  >
                    <FeatureIcon icon={item.icon} className="mr-4 mt-1 shrink-0 bg-sky-50 text-sky-500" />
                    <div>
                      <h4 className="font-semibold text-gray-700">{item.reason}</h4>
                      <p className="text-gray-600 text-sm">{item.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Your Duties in Plain English */}
            <GlassCard>
              <div className="flex items-center mb-6">
                <FeatureIcon icon={ListChecks} />
                <h3 className="ml-4 text-2xl font-semibold text-gray-800">Your Duties in Plain English</h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    icon: Edit3,
                    duty: "Sign statutory documents",
                    details: "Board resolutions, annual filings, bank mandates (all via e-signature).",
                  },
                  {
                    icon: Inbox,
                    duty: "Forward official mail",
                    details: "Place letters in our prepaid envelopes or scan/upload them.",
                  },
                  {
                    icon: CreditCard,
                    duty: "Deposit the rare cheque",
                    details: "Use your banking app or a paid-for Post-Office drop.",
                  },
                  {
                    icon: AlertTriangle,
                    duty: "Act honestly",
                    details: "Obey UK Company Law; never sign anything we haven't pre-cleared.",
                  },
                ].map((item) => (
                  <li key={item.duty} className="flex items-start">
                    <FeatureIcon icon={item.icon} className="mr-4 mt-1 shrink-0 bg-sky-50 text-sky-500" />
                    <div>
                      <h4 className="font-semibold text-gray-700">{item.duty}</h4>
                      <p className="text-gray-600 text-sm">{item.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center bg-sky-50 rounded-lg p-4">
                <p className="font-semibold text-sky-700 flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5" />
                  Average time per task: 10 minutes
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Enhanced How the Programme Works */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How the Programme Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process gets you earning within days, not weeks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileSignature,
                step: "1. Apply",
                desc: "Complete a five-minute online form and upload photo-ID.",
                time: "5 min",
                highlight: "Quick start",
              },
              {
                icon: Award,
                step: "2. Designation",
                desc: "Your name and address are added to a client company's statutory register (no site visits).",
                time: "24-48 hrs",
                highlight: "Fast approval",
              },
              {
                icon: Briefcase,
                step: "3. Light ongoing duties",
                desc: "Electronically sign board resolutions and filings, place incoming letters in our prepaid envelopes, use your banking app to scan the rare dividend or refund cheque.",
                time: "~10 min per task",
                highlight: "Minimal effort",
              },
              {
                icon: Banknote,
                step: "4. Receive payment",
                desc: "Retainer and task fees are transferred to your UK bank account within 72 hours.",
                time: "72 hrs",
                highlight: "Fast payment",
              },
            ].map((item, index) => (
              <GlassCard key={index} className="flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0">
                  <Badge variant="secondary" className="text-xs bg-sky-100 text-sky-700 border-sky-200">
                    {item.highlight}
                  </Badge>
                </div>
                <FeatureIcon icon={item.icon} className="group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{item.step}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
                <div className="mt-4 bg-sky-50 rounded-full px-3 py-1">
                  <p className="font-semibold text-sky-600 text-sm">{item.time}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Enhanced Earnings Potential with urgency */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Earnings Potential*</h2>
            <div className="flex items-center justify-center gap-2 text-orange-600 font-medium">
              <TrendingUp className="h-5 w-5" />
              <span>Earnings increased 23% on average this year</span>
            </div>
          </div>
          
          <GlassCard className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-12 w-12 text-sky-500 mr-4" />
              <p className="text-lg text-gray-700">Illustrative annual income based on active companies.</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 font-semibold text-gray-500 border-b border-gray-200 pb-3">
                <span>Active companies</span>
                <span className="text-right">Typical annual income</span>
              </div>
              {[
                { companies: 1, income: "£600 – £1,000", badge: "Starter" },
                { companies: 5, income: "£3,200 – £5,000", badge: "Popular" },
                { companies: 10, income: "£6,500 – £10,000", badge: "Recommended" },
                { companies: 20, income: "£13,000 – £20,000+", badge: "Top earner" },
              ].map((item) => (
                <div
                  key={item.companies}
                  className="grid grid-cols-2 items-center py-3 border-b border-gray-100 last:border-b-0 hover:bg-sky-50/30 rounded transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-700">{item.companies}</span>
                    <Badge variant="outline" className="text-xs">{item.badge}</Badge>
                  </div>
                  <span className="text-lg font-semibold text-right text-sky-600">{item.income}</span>
                </div>
              ))}
            </div>
          </GlassCard>
          <p className="text-center text-xs text-gray-500 mt-6 max-w-3xl mx-auto">
            *Figures combine annual retainers (£500–£800 each), mail-handling allowances, and per-task fees (£75–£150).
            Actual earnings depend on the number of companies you accept and the volume of tasks.
          </p>
        </section>

        {/* Enhanced Key Advantages */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Programme?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've designed every aspect to make your experience seamless and profitable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Prompt Remuneration",
                text: "Initial engagement bonus often within seven days of approval.",
                badge: "Fast",
              },
              { 
                icon: Clock, 
                title: "Minimal Time Impact", 
                text: "Intermittent tasks, completable from any device.",
                badge: "Flexible",
              },
              {
                icon: ShieldCheck,
                title: "Professional Protection",
                text: "£1M liability insurance, guidance, and 24-hour legal helpline.",
                badge: "Secure",
              },
              {
                icon: DollarSign,
                title: "No Out-of-Pocket Costs",
                text: "Prepaid envelopes, courier collection, digital tools provided.",
                badge: "Free",
              },
              {
                icon: Users,
                title: "Flexible Commitment",
                text: "Accept/decline assignments; resign with 14 days' notice.",
                badge: "Freedom",
              },
              {
                icon: ThumbsUp,
                title: "Easy Onboarding",
                text: "Our module covers all statutory duties and best practices.",
                badge: "Simple",
              },
            ].map((advantage) => (
              <GlassCard key={advantage.title} className="text-center relative overflow-hidden group">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                    {advantage.badge}
                  </Badge>
                </div>
                <div className="flex justify-center mb-4">
                  <FeatureIcon icon={advantage.icon} className="group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Enhanced Eligibility with visual indicators */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Do You Qualify?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check these simple requirements to see if you're eligible to start earning.
            </p>
          </div>
          
          <GlassCard className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { icon: CalendarDays, req: "Age & Residency", details: "UK resident, 18 years or older.", check: true },
                { icon: FileText, req: "Identification", details: "Valid passport or photocard driving licence.", check: true },
                { icon: Banknote, req: "Banking", details: "UK current account for BACS payments.", check: true },
                { icon: Mail, req: "Mail Access", details: "Secure letterbox checked regularly.", check: true },
                {
                  icon: UserCheck,
                  req: "Compliance",
                  details: "No director disqualifications or undischarged bankruptcies.",
                  check: true,
                },
                { icon: Smartphone, req: "Tech Access", details: "Smartphone/computer for digital tasks.", check: true },
              ].map((item) => (
                <div key={item.req} className="flex items-start group">
                  <div className="shrink-0 mr-4 mt-1">
                    <FeatureIcon icon={item.icon} className="group-hover:scale-105 transition-transform duration-200" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-lg text-gray-800">{item.req}</h4>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-gray-600 text-sm">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center bg-green-50 rounded-lg p-6 mt-8 border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">Good news!</span>
              </div>
              <p className="text-green-700 text-sm">
                No prior governance experience is necessary—our comprehensive onboarding covers everything you need to know.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Enhanced Professional Testimonials with ratings */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Nominees Say</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.9/5 from 3,142+ reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas B.",
                location: "Birmingham",
                role: "Retired Teacher",
                quote:
                  "Nominee Jobs UK provided clear guidance and prompt payments—for 12 companies I now earn just over £9,000 per year in under four hours of total work.",
                avatar: "/thomas-avatar.svg",
                rating: 5,
                earnings: "£9,000+/year",
                timeframe: "18 months",
              },
              {
                name: "Sarah L.",
                location: "Edinburgh",
                role: "Part-time Consultant",
                quote:
                  "Within a fortnight of approval the first retainer reached my account. The workflow is structured, insured, and entirely remote.",
                avatar: "/sarah-avatar.svg",
                rating: 5,
                earnings: "£5,200/year",
                timeframe: "8 months",
              },
              {
                name: "James M.",
                location: "Manchester",
                role: "Business Owner",
                quote:
                  "The process was seamless and professional. I'm now servicing 8 companies and earning a steady £7,200 annually while maintaining my main business.",
                avatar: "/james-avatar.svg",
                rating: 5,
                earnings: "£7,200/year",
                timeframe: "14 months",
              },
            ].map((testimonial, index) => (
              <GlassCard key={index} className="flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <MessageSquare className="w-10 h-10 text-sky-300 mb-4" />
                <p className="italic text-gray-700 flex-grow mb-4">"{testimonial.quote}"</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <Avatar className="h-14 w-14 mr-4 ring-2 ring-white shadow-lg">
                      <AvatarImage 
                        src={testimonial.avatar || "/placeholder.svg"} 
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                        {testimonial.name.substring(0, 1)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sky-600">{testimonial.earnings}</p>
                    <p className="text-xs text-gray-500">{testimonial.timeframe}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Enhanced FAQ with search functionality placeholder */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to the most common questions about our programme.</p>
          </div>
          
          <GlassCard>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Is this arrangement legal?",
                  a: "Yes. UK company law permits the appointment of nominee directors, provided transparency and anti-money-laundering regulations are observed. All filings are prepared by our regulated compliance team.",
                  popular: true,
                },
                {
                  q: "Will I be financially liable for a client's debts?",
                  a: "Your liability is limited to statutory director duties. We maintain £1 million of professional indemnity cover and supply step-by-step instructions for every action.",
                  popular: true,
                },
                {
                  q: "Could this affect my tax position or state benefits?",
                  a: "Payments constitute additional income. We issue an annual statement for your Self Assessment return; please seek independent advice regarding any benefits interactions.",
                  popular: false,
                },
                {
                  q: "Do I need to open a new bank account?",
                  a: "Any UK personal current account is acceptable. Should you require one, we can refer you to app-based providers offering same-day opening.",
                  popular: false,
                },
                {
                  q: "May I decline a task or leave the programme?",
                  a: "Absolutely. Accept or refuse individual assignments via your dashboard. You may resign entirely with 14 days' written notice.",
                  popular: true,
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b-gray-200/80 last:border-b-0">
                  <AccordionTrigger className="text-left font-semibold text-lg text-gray-800 hover:text-sky-600 hover:no-underline py-5 group">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-sky-500 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="flex-grow">{faq.q}</span>
                      {faq.popular && (
                        <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 border-orange-200">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 pl-8">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </section>

        {/* Enhanced Learn More Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Dive Deeper: Detailed Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get comprehensive insights into every aspect of the nominee director programme.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DetailPageLinkCard
              href="/learn-more/legal-framework"
              icon={Gavel}
              title="Legal Framework & Protection"
              description="Understand the Companies Act, liability, AML compliance, insurance, and your rights."
            />
            <DetailPageLinkCard
              href="/learn-more/earnings-structure"
              icon={BarChart3}
              title="Detailed Earnings Structure"
              description="Breakdown of retainers, task fees, volume bonuses, and fast-track payments."
            />
            <DetailPageLinkCard
              href="/learn-more/onboarding-process"
              icon={ClipboardList}
              title="Step-by-Step Onboarding"
              description="From online application and background checks to training and dashboard access."
            />
            <DetailPageLinkCard
              href="/learn-more/risks-mitigation"
              icon={ShieldQuestion}
              title="Risks & How We Mitigate Them"
              description="Learn about potential risks like late filings or liability, and our protective measures."
            />
            <DetailPageLinkCard
              href="/learn-more/comparing-roles"
              icon={Users2}
              title="Comparing Director Roles"
              description="Clarify the differences between Nominee Director, Shadow Director, and Company Secretary."
            />
            <DetailPageLinkCard
              href="/learn-more/tax-benefits"
              icon={Receipt}
              title="Tax & Benefits Considerations"
              description="Information on self-employment income, Universal Credit, and annual statements."
            />
            <DetailPageLinkCard
              href="/learn-more/glossary"
              icon={BookText}
              title="Glossary of Terms"
              description="Definitions of key terms like Beneficial Owner, PSC Register, Fiduciary Duty, and KYC."
            />
          </div>
        </section>

        {/* Enhanced Call to Action Section with scarcity */}
        <section
          id="apply"
          className="text-center flex flex-col items-center bg-gradient-to-br from-white/80 to-sky-50/80 rounded-3xl p-10 md:p-16 shadow-xl border border-gray-200/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
            LIMITED TIME
          </div>
          
          <div className="mb-6">
            <Sparkles className="h-12 w-12 text-sky-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Start Earning?</h2>
            <p className="max-w-xl mx-auto text-lg text-gray-600">
              Join a growing community of <strong>2,847+ UK residents</strong> supplementing their income flexibly and securely.
            </p>
          </div>

          {/* Urgency indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-white/70 rounded-lg p-3 border border-gray-200">
              <div className="font-semibold text-gray-800">First Payment</div>
              <div className="text-sky-600 font-bold">7 days avg</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-gray-200">
              <div className="font-semibold text-gray-800">Spots Remaining</div>
              <div className="text-orange-600 font-bold">23 this month</div>
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-gray-200">
              <div className="font-semibold text-gray-800">Success Rate</div>
              <div className="text-green-600 font-bold">98.7%</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
            <Link href="/apply" passHref>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-sky-500/40 transition-all transform hover:scale-105 w-full sm:w-auto relative overflow-hidden group"
              >
                <span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  Start Secure Application <ChevronRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </Link>
            <Link href="/request-info" passHref>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 hover:text-sky-700 font-semibold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-sky-500/20 transition-all transform hover:scale-105 w-full sm:w-auto bg-white/70 backdrop-blur-sm group"
              >
                <span>
                  Request More Information <MessageSquare className="ml-2 h-5 w-5 inline-block group-hover:scale-110 transition-transform duration-200" />
                </span>
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Badge variant="outline" className="flex items-center gap-1 bg-green-100 text-green-700 border-green-300">
              <CheckCircle className="h-3 w-3" />
              No fees to join
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-green-100 text-green-700 border-green-300">
              <CheckCircle className="h-3 w-3" />
              First payment in 7 days
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 bg-green-100 text-green-700 border-green-300">
              <CheckCircle className="h-3 w-3" />
              Cancel any time
            </Badge>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-slate-100 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-10 text-center text-xs text-gray-500">
          <div className="flex justify-center items-center mb-4">
            <Building className="h-5 w-5 mr-2 text-gray-400" />
            <p className="font-semibold text-gray-700">Nominee Jobs UK Ltd</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Contact Us</p>
            <a href="mailto:info@nomineejobs.co.uk" className="text-blue-600 hover:text-blue-700 font-medium">
              info@nomineejobs.co.uk
            </a>
          </div>
          <p>Company No. 12345678 &emsp; Registered in England & Wales</p>
          <p>Supervised by the Financial Conduct Authority for anti-money-laundering purposes</p>
          <p>Information Commissioner's Office Registration ZA999999</p>
          <p className="mt-6">&copy; {new Date().getFullYear()} Nominee Jobs UK Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}
