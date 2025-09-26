// path: app/layout.tsx
import './styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mogmarketing.com'),
  title: 'Mog Marketing — Modern growth for ambitious brands.',
  description: 'Marketing, Optimization, Growth.',
  openGraph: {
    title: 'Mog Marketing Ltd.',
    description: 'Modern growth for ambitious brands.',
    images: ['/og.png']
  },
  twitter: { card: 'summary_large_image' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: Add Plausible analytics
        <script defer data-domain="mogmarketing.com" src="https://plausible.io/js/script.js"></script>
        */}
        {children}
      </body>
    </html>
  )
}
