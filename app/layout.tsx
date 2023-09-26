'use client'

import './styles/globals.scss'
import Header from './components/header'
import Sidebar from './components/sidebar'
import useResponsive from './hooks/useResponsive'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = useResponsive()

  return (
    <html lang="en">
      <body>
        <Header isMobile={isMobile} />
        <main className="flex h-full">
          <Sidebar isMobile={isMobile} />
          {children}
        </main>
      </body>
    </html>
  )
}
