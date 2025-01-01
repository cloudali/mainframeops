'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, Github } from 'lucide-react'
import CategoryButtons from '../components/CategoryButtons'
import ISPFSearch from '../components/ISPFSearch'
import guides from './guideslist.json'

const categories = [
  "All", "Basics", "Dev + Ops", "Cloud + Modernization", "Data + Storage",
  "Security", "Troubleshooting", "Automation", "Networking", "Monitoring", "Other"
]

const ContributeButton = () => (
  <a
    href="https://github.com/cloudali/mainframeops/edit/main/app/guides/page.tsx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-3 py-1 mt-4 text-xs border border-green-500 rounded-md bg-black hover:bg-green-900 transition-colors duration-200"
  >
    <span className="text-green-500 mr-2">$</span>
    <Github size={14} className="mr-2 text-green-500" />
    <span className="text-green-500">Contribute to this page</span>
  </a>
)

export default function Guides() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filteredGuides = guides.filter(guide => 
    (activeCategory === "All" || guide.category === activeCategory) &&
    (guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     guide.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    setActiveCategory("All")
  }, [])

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold terminal-glow mb-8 relative z-10">MAINFRAME GUIDES</h1>
        
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-96 h-32">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg border-4 border-gray-600">
              <div className="absolute top-0 left-4 right-4 h-2 bg-gray-900 rounded-b flex justify-around items-center">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="absolute left-[-8px] top-8 w-2 h-4 bg-gray-600 rounded-l"></div>
              <div className="absolute left-[-8px] top-16 w-2 h-4 bg-gray-600 rounded-l"></div>
              <div className="absolute right-[-8px] top-8 w-2 h-4 bg-gray-600 rounded-r"></div>
              <div className="absolute right-[-8px] top-16 w-2 h-4 bg-gray-600 rounded-r"></div>
            </div>
            
            <div className="absolute inset-2 bg-black rounded-md overflow-hidden border border-gray-600">
              <Image
                src="https://i.imgur.com/nALd5eF.png"
                alt="Mainframe Guides Interface"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-56 h-4">
              <div className="w-full h-full bg-gray-700 rounded-b-lg border-t border-gray-600 flex justify-between items-center px-2">
                <span className="text-[8px] text-green-400 font-mono">DOC-SYS</span>
                <div className="flex space-x-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-100"></div>
                </div>
                <span className="text-[8px] text-green-400 font-mono">REV.2024</span>
              </div>
            </div>
            
            <div className="absolute top-1 left-2 text-[8px] text-gray-400 font-mono">GUIDE-DB</div>
            <div className="absolute top-1 right-2 text-[8px] text-gray-400 font-mono">MF/OPS</div>
          </div>
        </div>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive guides to help you navigate the world of mainframes. From beginner to advanced topics, find the knowledge you need here.
        </p>
        <div className="flex justify-center">
          <ContributeButton />
        </div>
      </section>

      <ISPFSearch placeholder="Search guides..." onSearch={handleSearch} />

      <CategoryButtons
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide, index) => (
            <div key={index} className="card p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 terminal-shadow flex items-center">
                  {guide.title}
                  {guide.locked && <Lock className="ml-2 w-5 h-5" />}
                </h2>
                <p className="text-muted-foreground mb-6">{guide.description}</p>
                <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-sm mb-4">
                  {guide.category}
                </span>
              </div>
              {guide.locked ? (
                <button className="mainframe-button inline-block text-center opacity-50 cursor-not-allowed" disabled>
                  Locked
                </button>
              ) : (
                <Link href={guide.link} className="mainframe-button inline-block text-center" aria-label={`Read ${guide.title}`}>
                  Read Guide
                </Link>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-xl text-muted-foreground">
            No Guides found
          </div>
        )}
      </section>
    </div>
  )
}

