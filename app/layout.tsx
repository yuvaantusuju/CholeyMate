import './globals.css'
import { ReactNode } from 'react'

export const metadata = { title: 'CholeyMate', description: 'Spotify-like clone' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {children}
        </div>
      </body>
    </html>
  )
}
