import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ON Medical Company – Oncology & Radiotherapy Equipment, Egypt',
    template: '%s | ON Medical Company',
  },
  description:
    'ON Medical Company is a leading Egyptian distributor of oncology, radiotherapy, and medical physics equipment. Representing international manufacturers including PTW Freiburg, Ashland Medical, and Klarity.',
  keywords: [
    'oncology equipment Egypt',
    'radiotherapy equipment',
    'medical physics',
    'PTW Freiburg Egypt',
    'dosimetry equipment',
    'radiation measurement',
    'medical distribution Egypt',
    'ON Medical',
  ],
  authors: [{ name: 'ON Medical Company' }],
  creator: 'ON Medical Company',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ON Medical Company',
    title: 'ON Medical Company – Oncology & Radiotherapy Equipment',
    description:
      'Specialized distributor of oncology and radiotherapy equipment in Egypt. Representing world-class manufacturers to advance cancer treatment technology.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
