'use client'

import { useEffect, useRef, useState } from 'react'
import PageSidebar from '@/app/components/PageSidebar'
import ISPFSearch from '@/app/components/ISPFSearch'
import { ScrollToTop } from '@/app/components/ScrollToTop'
import abendCodes from './mvsabendcodes.json'

// Define the type for ABEND codes
interface AbendCode {
  code: string;
  description: string;
}

// Flattened ABEND codes for easier searching
const flattenedAbendCodes: AbendCode[] = abendCodes

const sidebarItems = [
  { title: "ABEND Codes", href: "#abend-codes" }
]

export default function MVSAbendCodes() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash && sectionRefs.current[hash]) {
        sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Handle initial load

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase())
  }

  const filteredCodes = flattenedAbendCodes.filter(code => 
    code.code.toLowerCase().includes(searchQuery) || 
    code.description.toLowerCase().includes(searchQuery)
  )

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 relative z-10">
        <PageSidebar items={sidebarItems} />
        <main className="flex-1 p-4 md:p-8 mt-16 md:mt-24 mx-auto max-w-4xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 terminal-glow text-center">MVS ABEND Codes Reference</h1>

          <div className="mb-8">
            <ISPFSearch placeholder="Search ABEND codes..." onSearch={handleSearch} />
          </div>

          <section 
            id="abend-codes"
            ref={(el: HTMLElement | null) => {
              if (el) sectionRefs.current['#abend-codes'] = el;
            }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">ABEND Codes</h2>
            <div className="space-y-6">
              {filteredCodes.map((code, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 font-mono text-lg font-bold">
                      {code.code}
                    </div>
                    <p className="text-muted-foreground">{code.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <ScrollToTop />
    </div>
  )
}

