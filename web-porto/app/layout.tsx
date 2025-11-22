import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nadilla Ananda | Portfolio',
  description: 'Stories in Light and Shadow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

