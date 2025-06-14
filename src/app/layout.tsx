import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AnimatedBackground from "@/components/animated-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "vishalkumar.space - Vishal Kumar",
  description: "Developer portfolio - Full-stack development and scalable backends",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-foreground min-h-screen`}>
        <AnimatedBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
          <Header />
          <main className="flex-1 pb-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
