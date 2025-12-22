import type { Metadata } from 'next'
import { Geist, Geist_Mono, Delius_Swash_Caps, Teko, Roboto, Share_Tech_Mono } from 'next/font/google'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const deliusSwash = Delius_Swash_Caps({
  variable: '--font-delius-swash',
  weight: '400',
  subsets: ['latin'],
})

const shareTechMono = Share_Tech_Mono({
  variable: '--font-share-tech-mono',
  weight: '400',
  subsets: ['latin'],
})

const teko = Teko({
  variable: '--font-teko',
  weight: '400',
  subsets: ['latin'],
})

const roboto = Roboto({
  variable: '--font-roboto',
  weight: '900',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aziz Arar',
  description: 'Aziz Arar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${deliusSwash.variable} ${teko.variable} ${roboto.variable} ${shareTechMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}
