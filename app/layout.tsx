import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alumni Association",
  description: "Celebrating our alumni community",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <Image
                  src="data:image/png;base64,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"
                  width={60}
                  height={60}
                  alt="College Logo"
                  className="rounded-md"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  ASVS Alumni 2019
                </span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                  Home
                </Link>
                <Link href="/alumni" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                  Alumni
                </Link>
                <Link
                  href="/memories"
                  className="text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  Memories
                </Link>
                <Link
                  href="/teachers"
                  className="text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  Teachers
                </Link>
                <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                  Gallery
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </nav>
              <Button variant="outline" size="sm" className="md:hidden">
                Menu
              </Button>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="w-full border-t py-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=30&width=30"
                  width={30}
                  height={30}
                  alt="College Logo"
                  className="rounded-md"
                />
                <span className="text-lg font-semibold text-white">Alumni Association</span>
              </div>
              <p className="text-sm text-slate-300">
                &copy; {new Date().getFullYear()} University Alumni Association. All rights reserved.
              </p>
              <nav className="flex gap-4 text-sm text-slate-300">
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'