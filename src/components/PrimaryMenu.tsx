'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

const PrimaryMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isReaderMode, setIsReaderMode] = useState(false)

  useEffect(() => {
    const handleReaderModeChange = () => {
      setIsReaderMode(document.body.classList.contains('reader-mode'))
    }

    handleReaderModeChange()
    const observer = new MutationObserver(handleReaderModeChange)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const menuItems = [
    { id: '1', name: 'Home', path: '/' },
    { id: '2', name: 'Getting Started', path: '/getting-started' },
    { id: '3', name: 'Guides', path: '/guides' },
    { id: '4', name: 'Cheatsheets', path: '/cheatsheets' },
    { id: '5', name: 'Tools', path: '/tools' },
    { id: '6', name: 'Resources', path: '/resources' },
  ]

  const systemInfo = [
    { label: 'Terminal', value: '3278' },
    { label: 'Language', value: 'English' },
    { label: 'Release', value: 'MF/OPS' },
    { label: 'TSO logon', value: 'Guest' },
    { label: 'TSO prefix', value: 'Guest' },
  ]

  if (isReaderMode) {
    return null
  }

  return (
    <>
      <button
        className="fixed bottom-4 left-4 z-40 md:hidden mainframe-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <aside className={cn(
        "bg-background/90 backdrop-blur-sm border-r border-foreground w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-30 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex-grow overflow-y-auto mt-80">
          <div className="p-4 border-b border-foreground mb-4">
            {systemInfo.map((item, index) => (
              <div key={index} className="text-sm mb-2">
                <span className="font-bold">{item.label}:</span> {item.value}
              </div>
            ))}
          </div>
          <nav className="p-4">
            {menuItems.map((item) => (
              <Link
                key={item.path || item.href} // Handle both path and href
                href={item.path || item.href} // Handle both path and href
                className={cn(
                  "block py-2 px-4 my-1 transition duration-200 rounded-md",
                  pathname === (item.path || item.href) // Handle both path and href
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.id ? <span className="terminal-shadow">{item.id}.</span> : null} {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default PrimaryMenu

