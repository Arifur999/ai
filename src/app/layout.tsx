import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "ARAI",
  description: "Multi AI Platform",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
