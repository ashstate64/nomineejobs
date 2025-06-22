import {
  BookText,
  UserCircle,
  ListTree,
  ShieldHalf,
  CheckCheck,
  Building,
  FileSignature,
  ShieldAlert,
  Gavel,
} from "lucide-react"
import type React from "react"

const FeatureIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-sky-100 text-sky-600 p-2 rounded-full mr-3 shrink-0 ${className}`}>
    <Icon className="h-5 w-5" />
  </div>
)

const GlossaryItem = ({ icon, term, definition }: { icon: React.ElementType; term: string; definition: string }) => (
  <div className="mb-4 p-4 bg-slate-50/70 rounded-lg border border-gray-200/60">
    <div className="flex items-center mb-1">
      <FeatureIcon icon={icon} />
      <h3 className="text-lg font-semibold text-gray-800">{term}</h3>
    </div>
    <p className="pl-12 text-gray-700 text-sm">{definition}</p>
  </div>
)

export default function GlossaryPage() {
  return (
    <div>
      <div className="flex items-center mb-8">
        <BookText className="h-10 w-10 text-sky-500 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">Glossary of Key Terms</h1>
      </div>
      <p className="text-gray-600 mb-8 text-md">
        Understanding key terminology will help you navigate your role as a nominee director with confidence and
        clarity.
      </p>

      <GlossaryItem
        icon={UserCircle}
        term="Beneficial Owner (BO)"
        definition="The real person(s) who ultimately own or control the company and benefit from its activities. As a nominee director, you act on their instructions, facilitated through our platform."
      />
      <GlossaryItem
        icon={ListTree}
        term="PSC Register (People with Significant Control)"
        definition="A public register maintained by Companies House that lists individuals who have significant influence or control over a UK company. Nominee arrangements must be structured to comply with PSC reporting requirements."
      />
      <GlossaryItem
        icon={ShieldHalf}
        term="Fiduciary Duty"
        definition="A legal and ethical obligation to act in the best interests of the company to which you are appointed. This includes duties of care, skill, diligence, and good faith, as outlined in the Companies Act 2006."
      />
      <GlossaryItem
        icon={CheckCheck}
        term="KYC (Know Your Customer)"
        definition="The mandatory process of verifying the identity of clients (both the company and its beneficial owners). This is a crucial part of Anti-Money Laundering (AML) regulations designed to prevent financial crime."
      />
      <GlossaryItem
        icon={ShieldAlert}
        term="AML (Anti-Money Laundering)"
        definition="A set of laws, regulations, and procedures intended to prevent criminals from disguising illegally obtained funds as legitimate income. Nominee Jobs UK is supervised by the FCA for AML purposes."
      />
      <GlossaryItem
        icon={Building}
        term="Companies House"
        definition="The United Kingdom's official registrar of companies. It incorporates and dissolves limited companies, registers company information (including director details), and makes this information available to the public."
      />
      <GlossaryItem
        icon={FileSignature}
        term="Statutory Documents"
        definition="Official documents that UK companies are legally required to file with Companies House or maintain as part of their records. Examples include annual confirmation statements, accounts, and board resolutions."
      />
      <GlossaryItem
        icon={Gavel} // Using Gavel from legal framework
        term="De Jure Director"
        definition="A director who is formally and legally appointed to the board of a company and whose details are registered at Companies House. As a nominee director in our programme, you are a de jure director."
      />
    </div>
  )
}
