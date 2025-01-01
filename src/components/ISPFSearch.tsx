'use client'

import { useState, useEffect, useRef } from 'react'

interface ISPFSearchProps {
  placeholder: string
  onSearch: (query: string) => void
}

const ISPFSearch: React.FC<ISPFSearchProps> = ({ placeholder, onSearch }) => {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const blinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.visibility = cursorRef.current.style.visibility === 'visible' ? 'hidden' : 'visible'
      }
    }
    const intervalId = setInterval(blinkCursor, 500)
    blinkCursor() // Immediate blink
    return () => clearInterval(intervalId)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInput(newValue)
    onSearch(newValue) // Trigger search on each input change
  }

  return (
    <form className="mb-8">
      <div className="flex items-center bg-gray-800 p-2 rounded-md">
        <label htmlFor="ispf-search" className="mr-2 text-green-400">Option ===&gt;</label>
        <input
          ref={inputRef}
          id="ispf-search"
          type="text"
          value={input}
          onChange={handleInputChange}
          className="bg-transparent border-none outline-none text-green-400 flex-grow"
          placeholder={placeholder}
        />
        <span ref={cursorRef} className="text-green-400 ml-1">_</span>
      </div>
    </form>
  )
}

export default ISPFSearch

