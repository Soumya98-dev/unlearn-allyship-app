import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Unlearn',
  description: 'Unlearn bias. Become an ally.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
