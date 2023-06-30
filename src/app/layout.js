import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zeroscope comparison',
  description: 'Compare how parameters effect a Zeroscope video',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Zeroscope v2 – A settings guide by Replicate</title>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
