import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "University Hackathon Series 2025 - Innovate. Compete. Elevate.",
  description:
    "Join South Africa's premier university hackathon series. Transform your ideas into reality with cutting-edge technology competitions.",
  keywords: "hackathon, university, innovation, technology, competition, South Africa, UHS, 2025",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
