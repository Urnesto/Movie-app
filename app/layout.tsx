import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import MainF from "./components/footer"
import { Navbar } from './components/Navbar'
const roboto = Roboto({ subsets:['cyrillic'], weight:['100','300', '400', '500', '700', '900'], })

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
      <body className={roboto.className}>
        <header className='w-full h-48'>
        <Navbar/>
        </header>
        {children}
      <MainF/>
      </body>
    </html>
  )
}
