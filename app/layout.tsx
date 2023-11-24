import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ActiveSectionContextProvider } from '@/app/lib/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bryant Wong - Sofware Developer',
  description: 'Bryant Wong portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/bwlogo.svg" />
      </head>
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
