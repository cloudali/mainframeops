'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

// This would typically come from your actual content, but for this example, we'll use a mock dataset
const mockContent = [
  { title: 'Getting Started with Mainframes', path: '/guides/getting-started-mainframes' },
  { title: 'COBOL Programming for Beginners', path: '/guides/cobol-programming-beginners' },
  { title: 'JCL Quick Reference', path: '/cheatsheets/jcl-quick-reference' },
  { title: 'Mainframe Security Best Practices', path: '/resources/mainframe-security' },
  { title: 'z/OS Basics', path: '/guides/zos-basics' },
  { title: 'CICS Fundamentals', path: '/guides/cics-fundamentals' },
]

const TerminalSearch = () => {
  const [input, setInput] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [searchResults, setSearchResults] = useState<typeof mockContent>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isActive) {
        e.preventDefault()
        setIsActive(true)
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isActive])

  useEffect(() => {
    if (input) {
      const results = mockContent.filter(item => 
        item.title.toLowerCase().includes(input.toLowerCase())
      )
      setSearchResults(results)
      setSelectedIndex(-1)
    } else {
      setSearchResults([])
    }
  }, [input])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
      router.push(searchResults[selectedIndex].path)
      handleReset()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev + 1) % searchResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev - 1 + searchResults.length) % searchResults.length)
    } else if (e.key === 'Escape') {
      handleReset()
    }
  }

  const handleReset = () => {
    setIsActive(false)
    setInput('')
    setSearchResults([])
    setSelectedIndex(-1)
  }

  return (
    <div className={`fixed inset-x-0 bottom-0 p-4 bg-background/90 backdrop-blur-sm border-t border-foreground z-50 transition-all duration-300 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-4 pr-10 py-2 bg-background text-foreground border border-foreground focus:outline-none focus:border-green-700"
          placeholder="Enter search query..."
        />
        <div className="absolute top-0 right-0 bottom-0 flex items-center pr-3">
          <div className={`w-2 h-4 bg-foreground ${isActive ? 'animate-pulse' : ''}`}></div>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="mt-2 max-w-3xl mx-auto bg-background border border-foreground max-h-60 overflow-y-auto">
          <ul className="text-foreground font-mono">
            {searchResults.map((result, index) => (
              <li 
                key={index} 
                className={`p-2 cursor-pointer ${index === selectedIndex ? 'bg-foreground text-background' : 'hover:bg-muted'}`}
                onClick={() => {
                  router.push(result.path)
                  handleReset()
                }}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default TerminalSearch

