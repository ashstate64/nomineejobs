import { ClipboardList, Smartphone, UserCheck, Film, CheckSquare, LayoutDashboard, CalendarClock } from "lucide-react"
import type React from "react"

const FeatureIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-sky-100 text-sky-600 p-2 rounded-full mr-3 shrink-0 ${className}`}>
    <Icon className="h-5 w-5" />
  </div>
)

const OnboardingStep = ({
  stepNumber,
  icon,
  title,
  duration,
  description,
}: {
  stepNumber: number
  icon: React.ElementType
  title: string
  duration: string
  description: string
}) => (
  <li className="mb-6 p-4 bg-slate-50/70 rounded-lg border border-gray-200/60 flex">
    <div className="flex flex-col items-center mr-4">
      <span className="text-2xl font-bold text-sky-500">{stepNumber}</span>
      <FeatureIcon icon={icon} className="mt-1" />
    </div>
    <div>
      <div className="flex justify-between items-baseline">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span className="ml-auto text-xs font-medium text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full whitespace-nowrap">
          <CalendarClock className="inline h-3 w-3 mr-1" />
          {duration}
        </span>
      </div>
      <p className="text-gray-700 text-sm mt-1">{description}</p>
    </div>
  </li>
)

export default function OnboardingProcessPage() {
  return (
    <div>
      <div className="flex items-center mb-8">
        <ClipboardList className="h-10 w-10 text-sky-500 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">Step-by-Step Onboarding</h1>
      </div>
      <p className="text-gray-600 mb-8 text-md">
        Our streamlined onboarding process is designed to be quick, efficient, and entirely digital, getting you ready
        to start earning in no time.
      </p>
      <ol className="list-none p-0">
        <OnboardingStep
          stepNumber={1}
          icon={Smartphone}
          title="Apply Online"
          duration="≈5 min"
          description="Complete our simple, mobile-friendly application form. You'll need to upload a photo of your ID (passport or driving licence) and take a selfie for verification purposes."
        />
        <OnboardingStep
          stepNumber={2}
          icon={UserCheck}
          title="Background Check"
          duration="Typically 24 hours"
          description="We conduct an automated Anti-Money Laundering (AML), sanctions, and insolvency screen. This is a standard compliance check."
        />
        <OnboardingStep
          stepNumber={3}
          icon={Film}
          title="Digital Training"
          duration="≈10 min"
          description="Watch a short, informative training video covering your duties, responsibilities, and best practices as a nominee director. You'll also receive a downloadable “director cheat-sheet” for easy reference."
        />
        <OnboardingStep
          stepNumber={4}
          icon={CheckSquare}
          title="Appointment & Bonus Payout"
          duration="Upon completion"
          description="Once your checks are clear and training is complete, you're approved! Your name is filed at Companies House for your first appointment, and your £125 fast-track bonus is processed and paid to your UK bank account."
        />
        <OnboardingStep
          stepNumber={5}
          icon={LayoutDashboard}
          title="Dashboard Live"
          duration="Immediately"
          description="You'll gain access to your personal online dashboard. Here you can view your active appointments, manage tasks, track earnings, and accept or decline future company appointments with a single click."
        />
      </ol>
    </div>
  )
}
