import { Users2, CheckCircle, XCircle, BookOpen, HelpCircle } from "lucide-react"

export default function ComparingRolesPage() {
  const rolesData = [
    {
      feature: "Publicly listed at Companies House",
      nominee: true,
      shadow: false,
      secretary: true,
      note: "Secretary listing is optional for private companies.",
    },
    {
      feature: "Takes/Gives Instructions",
      nomineeText: "Acts on instructions from beneficial owner (via us)",
      shadowText: "Gives instructions to de jure directors (often covertly)",
      secretaryText: "Carries out board instructions; independent filings",
    },
    {
      feature: "Main Purpose",
      nomineeText: "Fulfilling residency requirements, mail handling, privacy for owner",
      shadowText: "Exercising control without public disclosure (can be problematic/illegal if not declared)",
      secretaryText: "Ensuring corporate governance and compliance administration",
    },
    {
      feature: "Paid Retainer Common?",
      nominee: true,
      shadow: false,
      secretaryText: "Sometimes, depends on company size/complexity",
    },
    {
      feature: "Directorial Duties & Liabilities",
      nomineeText: "Yes, same as any director (care, skill, good faith)",
      shadowText: "Yes, if found to be acting as one",
      secretaryText: "Generally not, unless also a director",
    },
  ]

  const renderCheckmark = (value?: boolean) => {
    if (value === true) return <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
    if (value === false) return <XCircle className="h-5 w-5 text-red-500 mx-auto" />
    return <span className="text-gray-500">-</span>
  }

  return (
    <div>
      <div className="flex items-center mb-8">
        <Users2 className="h-10 w-10 text-sky-500 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">Comparing Director & Related Roles</h1>
      </div>
      <p className="text-gray-600 mb-8 text-md">
        It's important to understand the distinctions between different roles within a company structure. As a Nominee
        Director with Nominee Jobs UK, your position is unique and clearly defined by contract.
      </p>

      <div className="overflow-x-auto bg-slate-50/70 p-1 md:p-4 rounded-lg border border-gray-200/60">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-100">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Feature / Role
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nominee Director (Our Programme)
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Shadow Director
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Company Secretary
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rolesData.map((role, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                <td className="px-4 py-4 whitespace-normal text-sm font-medium text-gray-900">
                  {role.feature}
                  {role.note && (
                    <p className="text-xs text-gray-500 mt-1">
                      <HelpCircle className="inline h-3 w-3 mr-1" />
                      {role.note}
                    </p>
                  )}
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 text-center align-top">
                  {role.nomineeText || renderCheckmark(role.nominee)}
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 text-center align-top">
                  {role.shadowText || renderCheckmark(role.shadow)}
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-700 text-center align-top">
                  {role.secretaryText || renderCheckmark(role.secretary)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-6 bg-sky-50 border-l-4 border-sky-500 rounded-r-lg">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-sky-600 mr-3" />
          <h3 className="text-lg font-semibold text-sky-700">Important: You Are NOT a Shadow Director</h3>
        </div>
        <p className="mt-2 text-gray-700">
          Under our programme, you are a <strong>de jure (legally appointed) Nominee Director</strong>. You do not
          devise strategy or run the company; you provide a lawful, contracted service by lending your name for public
          record and performing administrative tasks strictly as instructed by the beneficial owner, via our secure
          platform. This is distinct from a "shadow director" who typically exerts control without formal appointment.
        </p>
      </div>
    </div>
  )
}
