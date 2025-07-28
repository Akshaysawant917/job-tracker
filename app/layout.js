import './globals.css'

export const metadata = {
  title: 'Job Tracker Dashboard',
  description: 'Professional job application tracking system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}