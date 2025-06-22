import LegalLayout from "../legal/layout" // Adjust path if necessary
import type React from "react"

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-300">{title}</h2>
    <div className="space-y-3 text-gray-700 text-sm leading-relaxed">{children}</div>
  </section>
)

export default function TermsAndConditionsPage() {
  const lastUpdated = "June 22, 2025" // Example date

  return (
    <LegalLayout pageTitle="Terms & Conditions">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

        <Section title="1. Introduction">
          <p>
            Welcome to Nominee Jobs UK Ltd ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern
            your use of our website located at https://nomineejobs.co.uk (the "Service") and the services we provide,
            including the facilitation of nominee director appointments.
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of
            the terms, then you may not access the Service.
          </p>
        </Section>

        <Section title="2. Eligibility">
          <p>
            To use our Service as a nominee director, you must meet the eligibility criteria outlined on our website and
            application form, including but not limited to being a UK resident, being 18 years or older, and passing our
            background checks.
          </p>
        </Section>

        <Section title="3. Nominee Director Services">
          <p>
            Our Service connects individuals willing to act as nominee directors with client companies requiring such
            services. As a nominee director, you agree to perform your duties diligently, honestly, and in accordance
            with UK company law and the specific instructions provided for each appointment.
          </p>
          <p>
            You acknowledge that you are acting as a director of the client company and are subject to the fiduciary
            duties and responsibilities associated with that role.
          </p>
        </Section>

        <Section title="4. Payments">
          <p>
            Payment terms, including retainers, task fees, and bonuses, will be as specified in your agreement with us
            and as detailed on our platform. Payments will be made to your nominated UK bank account.
          </p>
          <p>You are responsible for any taxes due on income received through our Service.</p>
        </Section>

        <Section title="5. Confidentiality">
          <p>
            You agree to maintain the confidentiality of all information related to client companies and their
            beneficial owners that you may access through your role as a nominee director.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property
            of Nominee Jobs UK Ltd and its licensors.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, in no event shall Nominee Jobs UK Ltd, nor its directors,
            employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special,
            consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or
            other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
          <p>
            Our liability is limited as per the professional indemnity insurance cover provided for each nominee
            appointment.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            We may terminate or suspend your access to our Service immediately, without prior notice or liability, for
            any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>You may resign from your role as a nominee director in accordance with the agreed notice period.</p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard
            to its conflict of law provisions.
          </p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have any questions about these Terms, please contact us at [Your Contact Email/Link].</p>
        </Section>
      </div>
    </LegalLayout>
  )
}
