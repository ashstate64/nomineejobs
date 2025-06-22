import { Receipt, FileDigit, Percent, Info, FileText } from "lucide-react"
import type React from "react"

const FeatureIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-sky-100 text-sky-600 p-3 rounded-full mr-4 shrink-0 ${className}`}>
    <Icon className="h-6 w-6" />
  </div>
)

const InfoPoint = ({
  icon,
  title,
  children,
}: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <div className="mb-6 p-4 bg-slate-50/70 rounded-lg border border-gray-200/60">
    <div className="flex items-center mb-2">
      <FeatureIcon icon={icon} />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="pl-16 text-gray-700 text-sm space-y-1">{children}</div>
  </div>
)

export default function TaxBenefitsPage() {
  return (
    <div>
      <div className="flex items-center mb-8">
        <Receipt className="h-10 w-10 text-sky-500 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">Tax & Benefits Considerations</h1>
      </div>
      <p className="text-gray-600 mb-8 text-md">
        Understanding how your earnings as a nominee director affect your taxes and any state benefits is important for
        financial planning.
      </p>

      <InfoPoint icon={FileDigit} title="Self-Employment Income & Self Assessment">
        <p>
          Earnings from your role as a nominee director are treated as <strong>self-employment income</strong> by HMRC
          (Her Majesty's Revenue and Customs).
        </p>
        <p>
          You will need to register as self-employed with HMRC if you aren't already, and declare this income annually
          via a Self Assessment tax return.
        </p>
      </InfoPoint>

      <InfoPoint icon={Percent} title="Means-Tested Benefits (e.g., Universal Credit)">
        <p>
          If you receive Universal Credit or other means-tested state benefits, your net profit from this role will be
          taken into account when calculating your entitlement.
        </p>
        <p>
          Net profit is your total earnings from Nominee Jobs UK minus any allowable business expenses (e.g., a portion
          of your home internet or phone costs if used for tasks, specific stationery, or postage not covered by our
          prepaid envelopes).
        </p>
        <p className="mt-2 font-semibold">
          It is crucial to report your earnings accurately to the Department for Work and Pensions (DWP). We strongly
          advise seeking independent advice from a benefits advisor or Citizens Advice to understand the specific impact
          on your benefits.
        </p>
      </InfoPoint>

      <InfoPoint icon={FileText} title="Annual Statement for Your Tax Return">
        <p>
          To simplify your tax reporting, Nominee Jobs UK will provide you with an annual statement. This statement will
          clearly detail all your earnings (retainers, task fees, bonuses) from us during the tax year.
        </p>
        <p>This document will help you complete your Self Assessment tax return accurately and efficiently.</p>
      </InfoPoint>

      <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
        <div className="flex items-center">
          <Info className="h-5 w-5 text-amber-600 mr-2 shrink-0" />
          <h4 className="font-semibold text-amber-700">Important Disclaimer:</h4>
        </div>
        <p className="text-sm text-amber-600 mt-1">
          The information provided here is for general guidance only and does not constitute financial or tax advice.
          Tax laws and benefit rules can be complex and change. Please consult with a qualified accountant, tax advisor,
          or benefits specialist for advice tailored to your personal circumstances.
        </p>
      </div>
    </div>
  )
}
