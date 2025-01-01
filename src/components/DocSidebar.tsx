'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

interface DocSidebarProps {
  items: { title: string; href: string }[]
  title?: string
}

const DocSidebar: React.FC<DocSidebarProps> = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-40 md:hidden mainframe-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <aside className={cn(
        "bg-background border-r border-foreground w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-30",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <nav className="p-4">
          {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 px-4 rounded-md transition duration-200",
                    pathname === item.href
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default DocSidebar

