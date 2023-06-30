import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zeroscope text-to-video – A settings guide by Replicate',
  description: 'Compare how settings affect a Zeroscope video',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://zeroscope.replicate.dev/og.jpg" />
        <meta property="og:url" content="https://zeroscope.replicate.dev" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://waveformer.replicate.dev" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content="https://zeroscope.replicate.dev/og.jpg" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
