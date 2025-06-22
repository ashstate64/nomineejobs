import LegalLayout from "../legal/layout" // Adjust path if necessary
import type React from "react"

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-300">{title}</h2>
    <div className="space-y-3 text-gray-700 text-sm leading-relaxed">{children}</div>
  </section>
)

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 22, 2025" // Example date

  return (
    <LegalLayout pageTitle="Privacy Policy">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

        <Section title="1. Introduction">
          <p>
            Nominee Jobs UK Ltd ("Company", "we", "our", "us") is committed to protecting and respecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
            our website https://nomineejobs.co.uk (the "Service") and use our services.
          </p>
          <p>Please read this policy carefully to understand our views and practices regarding your personal data.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect and process the following data about you:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Personal Identification Information:</strong> Name, date of birth, address, email address, phone
              number, National Insurance number, copies of identification documents (passport, driving licence).
            </li>
            <li>
              <strong>Financial Information:</strong> Bank account details for payment processing.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, operating system, login data, and other
              technology on the devices you use to access this website.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our website and services.
            </li>
            <li>
              <strong>Background Check Information:</strong> Information obtained through AML, KYC, and other compliance
              checks.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect in the following ways:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>To provide and maintain our Service.</li>
            <li>To process your application to become a nominee director.</li>
            <li>To manage your appointments and facilitate communication with client companies.</li>
            <li>To process payments to you.</li>
            <li>To comply with legal and regulatory obligations (e.g., AML/KYC checks).</li>
            <li>To improve our website and services.</li>
            <li>To communicate with you, including responding to your inquiries.</li>
          </ul>
        </Section>

        <Section title="4. Legal Basis for Processing Personal Data">
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and
              fundamental rights do not override those interests.
            </li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </Section>

        <Section title="5. Disclosure of Your Information">
          <p>We may share your information with:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Client companies for the purpose of your appointment as a nominee director.</li>
            <li>Third-party service providers for background checks, payment processing, and IT services.</li>
            <li>Regulatory authorities (e.g., HMRC, FCA, Companies House) as required by law.</li>
            <li>Professional advisors (lawyers, bankers, auditors, insurers).</li>
          </ul>
          <p>
            We require all third parties to respect the security of your personal data and to treat it in accordance
            with the law.
          </p>
        </Section>

        <Section title="6. Data Security">
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally
            lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data
            to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for,
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </Section>

        <Section title="8. Your Data Protection Rights">
          <p>Under data protection law, you have rights including:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Your right of access - You have the right to ask us for copies of your personal information.</li>
            <li>
              Your right to rectification - You have the right to ask us to rectify information you think is inaccurate.
            </li>
            <li>
              Your right to erasure - You have the right to ask us to erase your personal information in certain
              circumstances.
            </li>
            <li>
              Your right to restriction of processing - You have the right to ask us to restrict the processing of your
              information in certain circumstances.
            </li>
            <li>
              Your right to object to processing - You have the right to object to the processing of your personal data
              in certain circumstances.
            </li>
            <li>
              Your right to data portability - You have the right to ask that we transfer the information you gave us to
              another organisation, or to you, in certain circumstances.
            </li>
          </ul>
          <p>
            You are not required to pay any charge for exercising your rights. If you make a request, we have one month
            to respond to you.
          </p>
        </Section>

        <Section title="9. Cookies">
          <p>
            Our website may use cookies to enhance your experience. You can set your browser to refuse all or some
            browser cookies, or to alert you when websites set or access cookies.
          </p>
        </Section>

        <Section title="10. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have any questions about this Privacy Policy or our data protection practices, please contact us at:
          </p>
          <p>info@nomineejobs.co.uk</p>
          <p>Data Protection Officer: [Name/Contact, if applicable]</p>
        </Section>
      </div>
    </LegalLayout>
  )
}
