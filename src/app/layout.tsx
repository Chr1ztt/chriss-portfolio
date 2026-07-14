import { Geist, Geist_Mono, Oxanium } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Wrapper } from "./(home)/wrapper"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-oxanium" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-oxanium",
        oxanium.variable,
        geist.variable,
      )}
    >
      <body>
        <ThemeProvider>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
