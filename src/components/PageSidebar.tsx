'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"

interface PageSidebarProps {
  items: { title: string; href: string }[]
  title?: string
}

const menuItems = [
  { id: '1', name: 'Home', path: '/' },
  { id: '2', name: 'Getting Started', path: '/getting-started' },
  { id: '3', name: 'Guides', path: '/guides' },
  { id: '4', name: 'Cheatsheets', path: '/cheatsheets' },
  { id: '5', name: 'Resources', path: '/resources' },
  { id: '6', name: 'Tools', path: '/tools' },
]

const PageSidebar: React.FC<PageSidebarProps> = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentActiveSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - 100 && window.pageYOffset < sectionTop + sectionHeight - 100) {
          currentActiveSection = `#${section.id}`
        }
      })

      setActiveSection(currentActiveSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleItemClick = useCallback((href: string) => {
    try {
      setIsOpen(false);
      
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Element with selector "${href}" not found`);
        }
      } else {
        router.push(href);
      }
    } catch (error) {
      console.error('Error in handleItemClick:', error);
    }
  }, [router]);

  return (
    <>
      <button
        className="fixed bottom-4 left-4 z-40 md:hidden mainframe-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <aside className={cn(
        "bg-transparent-blur border-r border-foreground w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-30 mt-24",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <nav className="p-4 pt-8 h-full overflow-y-auto">
          {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2 px-4 rounded-md transition duration-200",
                    activeSection === item.href
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.href);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-4 border-t border-foreground"></div>
          <h3 className="text-lg font-semibold mb-2">Console</h3>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={cn(
                    "block py-2 px-4 rounded-md transition duration-200",
                    pathname === item.path
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.path);
                  }}
                >
                  {item.id && <span className="terminal-shadow mr-2">{item.id}.</span>} {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default PageSidebar

