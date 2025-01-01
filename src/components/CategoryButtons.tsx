'use client'

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

interface CategoryButtonsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ categories, activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsOpen(window.innerWidth >= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full text-left mainframe-button mb-2"
      >
        {activeCategory} ▼
      </button>
      <div className={cn(
        "flex flex-wrap gap-2",
        isOpen ? "block" : "hidden md:flex"
      )}>
        {categories.map((category) => (
          <button
            key={category}
            className={cn(
              "mainframe-button text-sm px-3 py-1 transition-colors",
              activeCategory === category 
                ? "bg-green-600 text-background hover:bg-green-700 ring-2 ring-green-400" 
                : "hover:bg-foreground hover:text-background"
            )}
            onClick={() => {
              if (activeCategory === category) {
                onCategoryChange("All")
              } else {
                onCategoryChange(category)
              }
              setIsOpen(false)
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryButtons

