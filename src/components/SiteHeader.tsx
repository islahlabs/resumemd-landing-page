// (Optional) Minimal header component if you want to include it in your layout later
// components/SiteHeader.tsx
import Link from 'next/link'

export function SiteHeader() {
    return (
      <header className="w-full border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-6 text-sm">
          <Link href="/" className="font-semibold">ResumeMD</Link>
          <nav className="ml-auto flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </nav>
        </div>
      </header>
    )
  }