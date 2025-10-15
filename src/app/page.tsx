// app/page.tsx
'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl mx-auto py-20">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">
          AI-Tailored Resumes in Under a Minute
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Instantly personalize your resume and cover letter for any job using ResumeMD’s
          privacy-first AI. Upload once, tailor anywhere.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://apps.apple.com/"
            target="_blank"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Download on the App Store
          </Link>
          <Link
            href="/privacy"
            className="text-sm underline text-muted-foreground hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm underline text-muted-foreground hover:text-foreground"
          >
            Terms of Service
          </Link>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          Try ResumeMD free through mid-November 2025 — instantly create AI-tailored resumes
          and cover letters in under a minute.
        </div>
      </div>
    </main>
  )
}