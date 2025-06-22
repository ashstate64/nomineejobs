import {
  ShieldQuestion,
  FileWarning,
  MessageCircle,
  AlertTriangle,
  CreditCard,
  CalendarDays,
  FileText,
  Ban,
  ShieldAlert,
} from "lucide-react"
import type React from "react"

const RiskIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-red-100 text-red-600 p-3 rounded-full mr-4 shrink-0 ${className}`}>
    <Icon className="h-6 w-6" />
  </div>
)
const MitigationIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <div className={`bg-green-100 text-green-600 p-3 rounded-full mr-4 shrink-0 ${className}`}>
    <Icon className="h-6 w-6" />
  </div>
)

const RiskItem = ({
  riskIcon,
  riskTitle,
  riskDescription,
  mitigationIcon,
  mitigationDescription,
}: {
  riskIcon: React.ElementType
  riskTitle: string
  riskDescription: string
  mitigationIcon: React.ElementType
  mitigationDescription: string
}) => (
  <div className="mb-6 p-4 bg-slate-50/70 rounded-lg border border-gray-200/60">
    <div className="flex items-start mb-3">
      <RiskIcon icon={riskIcon} />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{riskTitle}</h3>
        <p className="text-gray-700 text-sm">{riskDescription}</p>
      </div>
    </div>
    <div className="flex items-start pl-4 border-l-4 border-green-500 ml-[calc(0.75rem+2px)]">
      <MitigationIcon icon={mitigationIcon} />
      <div>
        <h4 className="font-semibold text-green-700">Our Mitigation:</h4>
        <p className="text-gray-700 text-sm">{mitigationDescription}</p>
      </div>
    </div>
  </div>
)

export default function RisksMitigationPage() {
  return (
    <div>
      <div className="flex items-center mb-8">
        <ShieldQuestion className="h-10 w-10 text-sky-500 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">Risks & How We Mitigate Them</h1>
      </div>
      <p className="text-gray-600 mb-8 text-md">
        While the role of a nominee director is generally low-risk when managed properly through our platform, it's
        important to be aware of potential issues and the robust measures we have in place to protect you.
      </p>

      <RiskItem
        riskIcon={FileWarning}
        riskTitle="Late Filings → Companies House Fines"
        riskDescription="Failure to submit company documents (like annual returns or accounts) on time can result in penalties from Companies House."
        mitigationIcon={CalendarDays}
        mitigationDescription="Our dedicated compliance team drafts every statutory return and document. We monitor all deadlines and send you automated reminders 7 days in advance of any action required from your side. We manage the process to ensure timeliness."
      />

      <RiskItem
        riskIcon={MessageCircle}
        riskTitle="Being Asked to Sign Something Unclear or Improper"
        riskDescription="You might be concerned about the implications of a document you're asked to sign if its purpose isn't clear."
        mitigationIcon={FileText}
        mitigationDescription="We supply a plain English legal summary for every document requiring your signature, explaining its purpose and implications. All documents are pre-vetted by our compliance team. You always have the right to refuse any task you are uncomfortable with, without penalty, and can consult our support team."
      />

      <RiskItem
        riskIcon={AlertTriangle}
        riskTitle="Personal Liability for Wrongful Trading"
        riskDescription="Directors can be held personally liable if a company continues to trade when it is insolvent (unable to pay its debts)."
        mitigationIcon={Ban}
        mitigationDescription="We have a zero-tolerance policy for any activity that could lead to wrongful trading. We continuously monitor the financial health and activities of client companies. If any risk of insolvency or improper activity arises, we will disengage with the client and take steps to protect your position well before such risks escalate."
      />

      <RiskItem
        riskIcon={CreditCard}
        riskTitle="Cheque Fraud or Mismanagement of Funds"
        riskDescription="Handling cheques or company funds could expose you to potential fraud if not managed correctly."
        mitigationIcon={ShieldAlert}
        mitigationDescription="You will rarely handle physical cheques. If you do, they are typically for small, pre-agreed amounts like refunds. All significant financial transactions are managed through secure, regulated channels. Cheques clear into escrow or designated client accounts first; you will never be asked to advance personal funds or handle client money directly in a way that exposes you to financial risk."
      />
    </div>
  )
}
