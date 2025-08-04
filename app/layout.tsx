import "@/app/globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AutoParts Pro - Premium Auto Parts Store",
  description: "Your trusted source for high-quality auto parts and accessories",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              background-color: white !important; 
              color: black !important; 
              font-family: Arial, sans-serif !important;
            }
            .test-css { 
              background-color: red !important; 
              color: white !important; 
              padding: 10px !important;
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          Tailwind Test - This should be blue with white text and rounded corners
        </div>
        <div className="test-css">CSS Test - If you see this in red, CSS is working</div>
        {children}
      </body>
    </html>
  )
}
