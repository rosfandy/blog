import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rosfandy', // {name} is a placeholder for the page name
  description: 'Rosfandy Profile Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        <div className="bg-black/95">
          <div className="min-h-screen w-full">
            <div id='background' className="min-h-screen w-full bg-cover bg-center bg-[url('./../public/bg.jpg')] "
            >
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>

    </html>
  )
}
