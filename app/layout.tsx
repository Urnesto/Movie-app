import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MainF from "./components/footer"
import { Navbar } from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='w-full h-48'>
        <Navbar/>
          </header>
        {children}
      <MainF></MainF>
      </body>
    </html>
  )
}
