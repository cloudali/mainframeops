'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowUp, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ISPFSearch from '../components/ISPFSearch'
import CategoryButtons from '../components/CategoryButtons'
import toolsData from './tools.json'

const { environments, toolTypes, functionalities, components, tools } = toolsData

const ContributeButton = () => (
  <a
    href="https://github.com/cloudali/mainframeops/edit/main/app/tools/page.tsx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-3 py-1 mt-4 text-xs border border-green-500 rounded-md bg-black hover:bg-green-900 transition-colors duration-200"
  >
    <span className="text-green-500 mr-2">$</span>
    <Github size={14} className="mr-2 text-green-500" />
    <span className="text-green-500">Contribute to this page</span>
  </a>
)

export default function Tools(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>("All")
  const [selectedToolType, setSelectedToolType] = useState<string>("All")
  const [selectedFunctionality, setSelectedFunctionality] = useState<string>("All")
  const [selectedComponent, setSelectedComponent] = useState<string>("All")
  const [page, setPage] = useState<number>(1)
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)
  const [filtersApplied, setFiltersApplied] = useState<boolean>(false)
  const loader = useRef<HTMLDivElement>(null)
  const ITEMS_PER_PAGE = 9

  const filteredTools = useMemo(() => {
    return tools.filter(tool => 
      (selectedEnvironment === "All" || tool.environment.includes(selectedEnvironment)) &&
      (selectedToolType === "All" || tool.toolType.includes(selectedToolType)) &&
      (selectedFunctionality === "All" || tool.functionality.includes(selectedFunctionality)) &&
      (selectedComponent === "All" || tool.components.includes(selectedComponent)) &&
      (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
  }, [searchQuery, selectedEnvironment, selectedToolType, selectedFunctionality, selectedComponent])

  const displayedTools = useMemo(() => {
    return filteredTools.slice(0, page * ITEMS_PER_PAGE)
  }, [filteredTools, page])

  useEffect(() => {
    setPage(1)
  }, [searchQuery, selectedEnvironment, selectedToolType, selectedFunctionality, selectedComponent])

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting && displayedTools.length < filteredTools.length) {
      setPage((prev) => prev + 1)
    }
  }, [displayedTools.length, filteredTools.length])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
    return () => observer.disconnect()
  }, [handleObserver])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    setFiltersApplied(query !== "")
  }, [])

  const handleEnvironmentChange = useCallback((category: string) => {
    setSelectedEnvironment(category)
    setFiltersApplied(category !== "All")
  }, [])

  const handleToolTypeChange = useCallback((category: string) => {
    setSelectedToolType(category)
    setFiltersApplied(category !== "All")
  }, [])

  const handleFunctionalityChange = useCallback((category: string) => {
    setSelectedFunctionality(category)
    setFiltersApplied(category !== "All")
  }, [])

  const handleComponentChange = useCallback((category: string) => {
    setSelectedComponent(category)
    setFiltersApplied(category !== "All")
  }, [])

  const resetAllFilters = useCallback(() => {
    setSearchQuery("")
    setSelectedEnvironment("All")
    setSelectedToolType("All")
    setSelectedFunctionality("All")
    setSelectedComponent("All")
    setFiltersApplied(false)
    setPage(1)
  }, [])

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold terminal-glow mb-8">MAINFRAME TOOLS CATALOG</h1>
        
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-96 h-32">
            {/* Outer metallic frame with rivets */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg border-4 border-gray-500">
              {/* Rivets/bolts in corners */}
              <div className="absolute top-[-4px] left-[-4px] w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-600"></div>
              <div className="absolute top-[-4px] right-[-4px] w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-600"></div>
              <div className="absolute bottom-[-4px] left-[-4px] w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-600"></div>
              <div className="absolute bottom-[-4px] right-[-4px] w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-600"></div>
              
              {/* Toolbox ridges */}
              <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gray-800"></div>
              <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gray-800"></div>
            </div>
            
            {/* Inner screen container */}
            <div className="absolute inset-2 bg-black rounded-md overflow-hidden border border-gray-700">
              <Image
                src="https://i.imgur.com/KdIyVN9.png"
                alt="Mainframe Tools Art"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Bottom stand styled as a toolbox handle */}
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-32 h-4">
              <div className="w-full h-full bg-gray-600 rounded-b-lg border-t-2 border-gray-700"></div>
              <div className="absolute top-0 left-2 right-2 h-1 bg-gray-500 rounded-full"></div>
            </div>
            
            {/* Power indicator and status light */}
            <div className="absolute top-[-3px] right-4 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute top-1 right-5 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            
            {/* Additional toolbox details */}
            <div className="absolute top-1 left-4 text-[8px] text-gray-400 font-mono">TOOLS-V1</div>
            <div className="absolute bottom-1 right-4 text-[8px] text-gray-400 font-mono">MF/OPS</div>
          </div>
        </div>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          Explore our comprehensive catalog of mainframe tools. Find the right tools for your environment, functionality needs, and system components.
        </p>
        <div className="flex justify-center">
          <ContributeButton />
        </div>
      </section>

      <div className="sticky top-16 z-20 bg-background/80 backdrop-blur-sm pb-4">
        <div className="container mx-auto px-4">
          <ISPFSearch placeholder="Search tools..." onSearch={handleSearch} />

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Browse by Environment</h2>
              <CategoryButtons
                categories={["All", ...environments]}
                activeCategory={selectedEnvironment}
                onCategoryChange={handleEnvironmentChange}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Browse by Tool Type</h2>
              <CategoryButtons
                categories={["All", ...toolTypes]}
                activeCategory={selectedToolType}
                onCategoryChange={handleToolTypeChange}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Browse by Functionality</h2>
              <CategoryButtons
                categories={["All", ...functionalities]}
                activeCategory={selectedFunctionality}
                onCategoryChange={handleFunctionalityChange}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Browse by Components</h2>
              <CategoryButtons
                categories={["All", ...components]}
                activeCategory={selectedComponent}
                onCategoryChange={handleComponentChange}
              />
            </div>
            {filtersApplied && (
              <div className="mt-4">
                <Button
                  onClick={resetAllFilters}
                  variant="outline"
                  className="w-full"
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTools.length > 0 ? (
            displayedTools.map((tool, index) => (
              <div key={index} className="card p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2 terminal-shadow">{tool.name}</h2>
                  <p className="text-sm text-muted-foreground mb-2">{tool.description}</p>
                  <div className="mb-2">
                    <strong className="text-sm block mb-1">Environment:</strong>
                    <div className="flex flex-wrap gap-1">
                      {tool.environment.map((env, i) => (
                        <span key={i} className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs">{env}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <strong className="text-sm block mb-1">Tool Type:</strong>
                    <div className="flex flex-wrap gap-1">
                      {tool.toolType.map((type, i) => (
                        <span key={i} className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs">{type}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <strong className="text-sm block mb-1">Functionality:</strong>
                    <div className="flex flex-wrap gap-1">
                      {tool.functionality.map((func, i) => (
                        <span key={i} className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs">{func}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-2">
                    <strong className="text-sm block mb-1">Components:</strong>
                    <div className="flex flex-wrap gap-1">
                      {tool.components.map((comp, i) => (
                        <span key={i} className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs">{comp}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <strong className="text-sm block mb-1">Contributors:</strong>
                    <div className="flex flex-wrap gap-4">
                      {tool.contributors.map((contributor, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <Link href={contributor.github} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${contributor.name}'s GitHub profile`}>
                            <Image
                              src={contributor.avatar}
                              alt={contributor.name}
                              width={40}
                              height={40}
                              className="rounded-full mb-1"
                            />
                          </Link>
                          <span className="text-xs text-center">{contributor.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={tool.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${tool.name} project website`} className="mainframe-button text-sm inline-flex items-center">
                    Visit Project
                    <ExternalLink size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-muted-foreground">
              No tools found matching your criteria
            </div>
          )}
        </section>

        <div ref={loader} className="flex justify-center py-4">
          {displayedTools.length < filteredTools.length && (
            <div className="loading terminal-glow">Loading more tools...</div>
          )}
        </div>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className={`fixed bottom-4 right-4 z-50 rounded-full transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  )
}

