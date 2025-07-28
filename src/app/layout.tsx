import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import PopupNotification from '@/components/PopupNotification'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BTC Investment App',
  description: 'Quick micro-investments in Bitcoin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white text-black pb-20">
          {children}
          <NavBar />
          <PopupNotification />
        </main>
      </body>
    </html>
  )
}
