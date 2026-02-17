import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/NavBar'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Alejandro Urrea — Software Engineer',
  description: 'Senior Full Stack Engineer specializing in AI systems, cloud architecture, and scalable applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
