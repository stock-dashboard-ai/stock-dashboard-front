import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Stock Finance AI',
    template: '%s | Stock Finance AI',
  },
  description: 'AI-powered stock and finance analytics platform',
  keywords: ['stock', 'finance', 'AI', 'analytics', 'investment'],
  authors: [{ name: 'Stock Finance AI Team' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Stock Finance AI',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex">{children}</body>
    </html>
  )
}
