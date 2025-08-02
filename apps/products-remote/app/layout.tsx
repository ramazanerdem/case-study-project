import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products Remote',
  description: 'Remote products application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
