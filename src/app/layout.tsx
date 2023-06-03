import './globals.css'

export const metadata = {
  title: 'Open Table',
  description: 'Clone Open Table',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
