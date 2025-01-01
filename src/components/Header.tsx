'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import AsciiLogo from './AsciiLogo'
import { Book, BookOpen, Menu, Plus, Minus, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../components/ThemeContext'

const Header: React.FC = () => {
  const [readerMode, setReaderMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleReaderMode = () => {
    setReaderMode(!readerMode)
    document.body.classList.toggle('reader-mode')
  }

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24))
    document.documentElement.style.setProperty('--reader-font-size', `${fontSize + 2}px`)
  }

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12))
    document.documentElement.style.setProperty('--reader-font-size', `${fontSize - 2}px`)
  }

  return (
    <header className="bg-transparent-blur border-b border-[#090cbd] border-dotted border-b-4 p-2 sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold terminal-glow flex items-center">
          <AsciiLogo size="small" />
          <span className="sr-only">MainframeOps</span>
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <li><Link href="/contributing" className="hover:text-[var(--foreground)]">Contributing</Link></li>
              <li><Link href="/changelog" className="hover:text-[var(--foreground)]">Changelog</Link></li>
            </ul>
          </nav>

          <button onClick={toggleReaderMode} className="p-2 rounded-full hover:bg-gray-700 ml-2">
            {readerMode ? <Book size={20} /> : <BookOpen size={20} />}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 ml-2">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {readerMode && (
            <>
              <button onClick={increaseFontSize} className="p-2 rounded-full hover:bg-gray-700 ml-2">
                <Plus size={20} />
              </button>
              <button onClick={decreaseFontSize} className="p-2 rounded-full hover:bg-gray-700 ml-2">
                <Minus size={20} />
              </button>
            </>
          )}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 rounded-full hover:bg-[var(--muted)] ml-2 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <nav className={`md:hidden bg-transparent-blur p-4 rounded-md absolute top-full left-0 right-0 z-30 transition-all duration-300 ${mobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <ul className="flex flex-col space-y-2">
          <li>
            <Link href="/contributing" className="block py-2 hover:text-[var(--foreground)]" onClick={() => setMobileMenuOpen(false)}>
              Contributing
            </Link>
          </li>
          <li>
            <Link href="/changelog" className="block py-2 hover:text-[var(--foreground)]" onClick={() => setMobileMenuOpen(false)}>
              Changelog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

