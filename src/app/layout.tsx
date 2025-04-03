import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Questrial } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const questrial = Questrial({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CS Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body 
          className={questrial.className} >
            <NavBar/>
              {children}
              <Analytics />
        </body>

    </html>
  )
}
