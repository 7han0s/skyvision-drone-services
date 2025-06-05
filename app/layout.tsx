import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "SkyVision Drone Services - Professional Aerial Photography & Videography",
    template: "%s | SkyVision Drone Services",
  },
  description:
    "Professional drone photography and videography services for real estate, events, promotional content, and tourism. Licensed operators delivering cinematic 4K quality with fast turnaround.",
  keywords: [
    "drone photography",
    "aerial videography",
    "real estate photography",
    "event coverage",
    "promotional content",
    "tourism visuals",
    "4K drone footage",
  ],
  authors: [{ name: "SkyVision Drone Services" }],
  creator: "SkyVision Drone Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skyvision-drones.com",
    title: "SkyVision Drone Services - Professional Aerial Photography & Videography",
    description:
      "Professional drone photography and videography services for real estate, events, promotional content, and tourism. Licensed operators delivering cinematic 4K quality with fast turnaround.",
    siteName: "SkyVision Drone Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyVision Drone Services - Professional Aerial Photography & Videography",
    description:
      "Professional drone photography and videography services for real estate, events, promotional content, and tourism. Licensed operators delivering cinematic 4K quality with fast turnaround.",
    creator: "@skyvisiondrones",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
