import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mental Balance Hub - Wellness PDF Worksheets & Resources',
  description: 'Premium digital wellness worksheets, guides, and resources for mental health. Instant downloads, secure payments, 30-day guarantee.',
  keywords: 'wellness, mental health, worksheets, guided journals, PDF resources, digital downloads',
  openGraph: {
    title: 'Mental Balance Hub - Your Wellness Journey Starts Here',
    description: 'Download premium mental wellness PDF worksheets and digital resources',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
