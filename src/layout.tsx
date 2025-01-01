import { ThemeProvider } from './components/ThemeContext'
import Header from './components/Header'
import PrimaryMenu from './components/PrimaryMenu'
import Footer from './components/Footer'
import TerminalSearch from './components/TerminalSearch'
import { ScrollToTop } from './components/ScrollToTop'
import { AutoScrollTop } from './components/AutoScrollTop'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata = {
  title: 'MainframeOps',
  description: 'Your go-to resource for mainframe operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <AutoScrollTop />
          <div className="grid-pattern fixed inset-0 opacity-10 z-0" />
          <Header />
          <div className="flex flex-1 relative z-10">
            <PrimaryMenu />
            <main className="flex-1 p-4 overflow-auto pb-24">
              <div className="mx-auto max-w-4xl w-full">
                {children}
              </div>
            </main>
          </div>
          <Footer />
          <TerminalSearch />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

