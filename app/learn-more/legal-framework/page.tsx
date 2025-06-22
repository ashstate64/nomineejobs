import { Gavel, ShieldCheck, Scale, FileText, RotateCcw } from "lucide-react"
import type React from "react"

const FeatureIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-sky-100 text-sky-600 p-3 rounded-full mr-4 shrink-0 ${className}`}>
    <Icon className="h-6 w-6" />
  </div>
)

const InfoSection = ({
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

export default function LegalFrameworkPage() {
  return (
    <div>
      <div className="flex items-center mb-8">
        <Gavel className="h-10 w-10 text-sky-500 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">Legal Framework & Protection</h1>
      </div>
      <p className="text-gray-600 mb-8 text-md">
        Understanding the legal aspects of being a nominee director is crucial. Here’s what you need to know about your
        duties, protections, and our compliance measures.
      </p>

      <InfoSection icon={FileText} title="Companies Act 2006">
        <p>
          As a nominee director, you hold the same fiduciary duties as any UK director. This means you must act with
          care, skill, and in good faith towards the company you represent.
        </p>
      </InfoSection>

      <InfoSection icon={Scale} title="“Corporate Veil” & Limited Liability">
        <p>
          The principle of the "corporate veil" means that the company is a separate legal entity. Generally, company
          liabilities stay with the company, and your personal assets are protected unless fraud is proven on your part.
        </p>
      </InfoSection>

      <InfoSection icon={ShieldCheck} title="AML / KYC Compliance">
        <p>
          Nominee Jobs UK is supervised by the Financial Conduct Authority (FCA) for Anti-Money Laundering (AML)
          purposes. We perform thorough Know Your Customer (KYC) due diligence on every client company and its
          beneficial owners before you are appointed. This is a critical step in preventing financial crime.
        </p>
      </InfoSection>

      <InfoSection icon={ShieldCheck} title="Professional Indemnity Insurance">
        <p>
          For your protection, every nominee director appointment made through our platform is backed by a £1 million
          professional indemnity insurance policy. This provides an extra layer of security against unforeseen
          circumstances.
        </p>
      </InfoSection>

      <InfoSection icon={RotateCcw} title="Resignation Rights">
        <p>
          You have the right to step down from your role as a nominee director with 14 days’ written notice. For your
          peace of mind and to ensure a smooth transition if needed, your undated resignation letter is lodged with us
          in advance.
        </p>
      </InfoSection>
    </div>
  )
}
