import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UMPSA - IET On Campus',
  description: 'Explore the vibrant world of UMPSA - IET On Campus, a hub for innovation, collaboration, and engineering excellence. This website is crafted with passion and powered by the Create Next App tool, providing you with a dynamic and engaging experience. Discover the latest updates, events, and initiatives that define our commitment to advancing technology and fostering a thriving engineering community on campus.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
