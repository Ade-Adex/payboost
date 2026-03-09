import Footer from '@/app/components/footer/Footer'
import Navbar from '@/app/components/navbar/Navbar'
import type { Metadata } from 'next'
import {
  lora,
  montserrat,
  overpass,
  plusJakartaSans,
  poppins,
  syne,
} from './fonts/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Payboost',
  description:
    'Payboost combines digital payments with practical loan and savings solutions built for everyday users and small businesses. Payboost also help you to Buy, sell, and manage your crypto assets with industry leading security. Seamlessly integrate your digital wallet with your daily spending.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${plusJakartaSans.variable} 
          ${poppins.variable} 
          ${overpass.variable} 
          ${lora.variable}
          ${montserrat.variable}
          ${syne.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
