'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isReaderMode, setIsReaderMode] = useState(false)

  useEffect(() => {
    const handleReaderModeChange = () => {
      setIsReaderMode(document.body.classList.contains('reader-mode'))
    }

    // Initial check
    handleReaderModeChange()

    // Listen for changes
    const observer = new MutationObserver(handleReaderModeChange)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const menuItems = [
    { id: '1', name: 'Home', path: '/' },
    { id: '2', name: 'Getting Started', path: '/getting-started' },
    { id: '3', name: 'Guides', path: '/guides' },
    { id: '4', name: 'Cheatsheets', path: '/cheatsheets' },
    { id: '5', name: 'Resources', path: '/resources' },
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
        "bg-background border-r border-foreground w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-30 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex-grow overflow-y-auto">
          {/* Content can be added here if needed */}
        </div>
        <div className="p-4 border-t border-foreground">
          <nav>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "block py-2 px-4 my-1 transition duration-200 rounded-md",
                  pathname === item.path
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span className="terminal-shadow">{item.id}.</span> {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

