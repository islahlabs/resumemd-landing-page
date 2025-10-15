// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: 'ResumeMD',
  description: 'AI‑Tailored Resume Under 1 Min',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <SiteHeader />
        <main className="flex-grow pb-24">{children}</main>
        <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Islah Labs LLC · All rights reserved.</p>
          <p>
            Contact: <a href="mailto:privacy@islahlabs.com" className="underline">privacy@islahlabs.com</a>
          </p>
        </footer>
      </body>
    </html>
  )
}