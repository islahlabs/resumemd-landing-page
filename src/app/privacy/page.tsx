// app/privacy/page.tsx
'use client'

import Link from 'next/link'

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString()
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
      </header>

      <article className="space-y-8 text-foreground">
        <p className="text-muted-foreground leading-relaxed">
          ResumeMD (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides AI-powered tools for creating and tailoring
          resumes and cover letters. We respect your privacy and collect only the data necessary to
          operate, improve, and secure our services. This policy explains what information we collect,
          how we use it, and your choices.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">A. User Content</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Resume text, job descriptions, and tailoring inputs that you voluntarily upload or enter.
                </li>
                <li>
                  We automatically remove personal identifiers before analysis or storage. After anonymization,
                  this data may be used to improve AI models and to generate aggregated analytics.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">B. Usage Data</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Basic interaction metrics such as feature use (e.g., &ldquo;Tailor&rdquo; events) and aggregated app statistics.
                </li>
                <li>No precise location, contacts, or advertising identifiers are collected.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">C. Diagnostic Data</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Basic error/performance logs to maintain reliability.</li>
                <li>No third&ndash;party crash ads SDKs or IDFA are used.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-medium">Purpose</th>
                  <th className="border border-border p-3 text-left font-medium">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">App Functionality</td>
                  <td className="border border-border p-3 text-muted-foreground">Processing resumes and tailoring results.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Analytics & Product Improvement</td>
                  <td className="border border-border p-3 text-muted-foreground">Understanding which features users find valuable.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">AI Model Training</td>
                  <td className="border border-border p-3 text-muted-foreground">Improving tailoring accuracy using anonymized text.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Market Insights</td>
                  <td className="border border-border p-3 text-muted-foreground">Aggregated job‑posting trends for analytics dashboards or future job‑board features.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Job Posting Data</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              When you upload or scan a job posting (including via OCR), we may extract text to identify job title, company,
              and related information.
            </li>
            <li>Personal contact details (e.g., recruiter names, emails, phone numbers) are removed automatically.</li>
            <li>
              Company names, titles, and descriptions may be stored to support aggregated analytics or future employer&ndash;authorized listings.
            </li>
            <li>
              We may algorithmically locate the original posting to request permission from the employer to republish it.
            </li>
            <li>
              We do not publicly republish full job descriptions from third&ndash;party sources without authorization.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third&ndash;Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may use secure third&ndash;party providers (e.g., cloud hosting, email delivery) that process anonymized data on our
            behalf under confidentiality terms. We do not sell or share data with advertisers or data brokers. We do not use IDFA
            and do not track you across other companies&rsquo; apps or websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security & Retention</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>All transmissions use TLS encryption; stored data is protected with access controls.</li>
            <li>Anonymized records may be retained for continued analytics and AI improvement.</li>
            <li>Raw, non&ndash;anonymized content is deleted after processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Choices & Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Because we do not maintain personally identifiable records, traditional data&ndash;deletion requests generally do not apply.
            However, you may:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Request exclusion of future submissions from model&ndash;improvement or analytics datasets: <a href="mailto:privacy@islahlabs.com" className="text-foreground underline hover:no-underline">privacy@islahlabs.com</a></li>
            <li>Ask questions about our data practices at any time.</li>
            <li>Uninstall the app to stop further data collection.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Deletion and Opt-Out</h2>
          <p className="text-muted-foreground leading-relaxed">
            All information collected by ResumeMD is permanently anonymized before storage and cannot be associated with any identifiable
            individual. For that reason, we are unable to retrieve or delete specific historical records upon request. You may opt out of
            <em> future</em> data collection at any time by uninstalling the app or (when available) disabling the in-app setting
            &nbsp;&ldquo;Share anonymized usage data.&rdquo;
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children&rsquo;s Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">ResumeMD is not intended for children under 13. We do not knowingly collect information from them.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">International Users</h2>
          <p className="text-muted-foreground leading-relaxed">Our servers are located in the United States. By using the service, you consent to processing in the U.S.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes</h2>
          <p className="text-muted-foreground leading-relaxed">We may update this policy periodically and will post the new version with a revised &ldquo;Last updated&rdquo; date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Email: <a href="mailto:privacy@islahlabs.com" className="text-foreground underline hover:no-underline">privacy@islahlabs.com</a><br />
            Website: <Link href="/" className="text-foreground underline hover:no-underline">resumemd.islahlabs.com</Link>
          </p>
        </section>
      </article>

      <footer className="mt-12 text-sm text-muted-foreground">
        <Link href="/terms" className="underline hover:no-underline">Terms of Service</Link>
      </footer>
    </div>
  )
}