import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Questrial } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

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
      
        <body 
          className={questrial.className} >
            <NavBar/>
              {children}
        </body>

    </html>
  )
}
