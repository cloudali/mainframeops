'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, Github } from 'lucide-react'
import ISPFSearch from '../components/ISPFSearch'
import cheatsheets from './cheatsheetslist.json'

const ContributeButton = () => (
  <a
    href="https://github.com/cloudali/mainframeops/edit/main/app/cheatsheets/page.tsx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-3 py-1 mt-4 text-xs border border-green-500 rounded-md bg-black hover:bg-green-900 transition-colors duration-200"
  >
    <span className="text-green-500 mr-2">$</span>
    <Github size={14} className="mr-2 text-green-500" />
    <span className="text-green-500">Contribute to this page</span>
  </a>
)

export default function Cheatsheets(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filteredCheatsheets = cheatsheets.filter(cheatsheet =>
    cheatsheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cheatsheet.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  return (
    <div className="space-y-12">
      <section className="text-center py-12 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-full h-full max-w-3xl max-h-96 grid-pattern"></div>
        </div>
        <h1 className="text-4xl font-bold terminal-glow mb-8 relative z-10">MAINFRAME CHEATSHEETS</h1>
        
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-96 h-32">
            <div className="absolute inset-0 bg-gray-800 rounded-full border-4 border-gray-600"></div>
            <div className="absolute inset-1 bg-black rounded-full overflow-hidden">
              <Image
                src="https://i.imgur.com/mvFG6gl.png"
                alt="Mainframe Terminal Art"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-600 rounded-full"></div>
            <div className="absolute top-[-3px] right-4 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute top-1 right-5 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6 relative z-10">
          Quick reference guides for mainframe operations. Boost your productivity with these concise resources.
        </p>
        <div className="flex justify-center">
          <ContributeButton />
        </div>
      </section>

      <ISPFSearch placeholder="Search cheatsheets..." onSearch={handleSearch} />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCheatsheets.length > 0 ? (
          filteredCheatsheets.map((cheatsheet, index) => (
            <div key={index} className="card p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 terminal-shadow flex items-center">
                  {cheatsheet.title}
                  {cheatsheet.locked && <Lock className="ml-2 w-5 h-5" />}
                </h2>
                <p className="text-muted-foreground mb-6">{cheatsheet.description}</p>
              </div>
              {cheatsheet.locked ? (
                <button className="mainframe-button inline-block text-center opacity-50 cursor-not-allowed" disabled>
                  Locked
                </button>
              ) : (
                <Link href={cheatsheet.link} className="mainframe-button inline-block text-center" aria-label={`View ${cheatsheet.title}`}>
                  View Cheatsheet
                </Link>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-xl text-muted-foreground">
            No Cheatsheets found
          </div>
        )}
      </section>
    </div>
  )
}

