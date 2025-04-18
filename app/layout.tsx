import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Unlearn',
  description: 'Unlearn bias. Become an ally.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black font-sans">
        <nav className="bg-blue-600 text-white px-6 py-3">
          <Link href="/" className="font-bold text-lg">Unlearn</Link>
          <span className="ml-4"><Link href="/dashboard">Dashboard</Link></span>
        </nav>
        {children}
      </body>
    </html>
  )
}
