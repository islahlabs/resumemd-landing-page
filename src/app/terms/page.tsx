// app/terms/page.tsx
'use client'

import Link from 'next/link'

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString()
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
      </header>

      <article className="space-y-8 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1 · Acceptance</h2>
          <p className="text-muted-foreground leading-relaxed">By using ResumeMD, you agree to these Terms. If you do not agree, do not use the app.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2 · Use of the Service</h2>
          <p className="text-muted-foreground leading-relaxed">You may use ResumeMD only for lawful purposes and in accordance with these Terms. You are responsible for any content you upload or submit.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3 · User‑Submitted Content and License</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>You represent that you have the right to share any content you upload.</li>
            <li>
              You grant ResumeMD a non‑exclusive, worldwide, royalty‑free license to store, process, analyze, and create derivative works (such as anonymized analytics or
              model‑training data).
            </li>
            <li>You retain all ownership rights in your content.</li>
            <li>We will not publicly display or resell your identifiable content without your consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4 · Job Posting Submissions</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>If you upload or scan a job posting, you confirm you have permission to provide it.</li>
            <li>We may extract information to contact the employer for authorization to republish or summarize that posting.</li>
            <li>We will not republish full job descriptions without authorization.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5 · Prohibited Conduct</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Uploading content that violates another party&rsquo;s intellectual&ndash;property or privacy rights.</li>
            <li>Scraping or mass&ndash;collecting data from ResumeMD.</li>
            <li>Interfering with system security or functionality.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6 · Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">All ResumeMD software, branding, and AI systems are owned by Islah Labs LLC and protected by applicable intellectual&ndash;property laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7 · Disclaimer of Warranties</h2>
          <p className="text-muted-foreground leading-relaxed">The service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee specific hiring outcomes or model accuracy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8 · Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">To the maximum extent permitted by law, ResumeMD and Islah Labs LLC are not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9 · Copyright Policy (Takedown)</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you believe your copyrighted material appears in ResumeMD without authorization, email <a href="mailto:privacy@islahlabs.com" className="text-foreground underline hover:no-underline">privacy@islahlabs.com</a> with your
            contact information, identification of the work, and the URL or description of the material. We will promptly investigate and remove confirmed infringements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10 · Service Availability and Suspension</h2>
          <p className="text-muted-foreground leading-relaxed">
            Because ResumeMD does not maintain user accounts or identifiable records, we cannot individually suspend or terminate specific users. However, we may modify, restrict, or
            discontinue access to parts or all of the service at any time—for example, to maintain security, comply with law, or update system infrastructure. If the service is
            discontinued, previously processed anonymized data may continue to be used for analytics or AI improvement consistent with the Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11 · Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">These Terms are governed by the laws of the State of California, USA.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12 · Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Email: <a href="mailto:legal@islahlabs.com" className="text-foreground underline hover:no-underline">legal@islahlabs.com</a><br />
            Mail: Islah Labs LLC, Los Angeles, CA (USA)
          </p>
        </section>
      </article>

      <footer className="mt-12 text-sm text-muted-foreground">
        <Link href="/privacy" className="underline hover:no-underline">Privacy Policy</Link>
      </footer>
    </div>
  )
}