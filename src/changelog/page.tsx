'use client'

import { useState, useEffect, useCallback } from 'react'
import PageSidebar from '../components/PageSidebar'
import Image from 'next/image'

const changelogData = [
  {
    date: '2024-12-26',
    changes: [
      'Updated footer design with centered layout',
      'Added social media links for GitHub, Discord, X (Twitter), and Instagram',
      'Improved footer responsiveness and accessibility',
      'Refined overall site styling and user interface'
    ]
  },
  {
    date: '2024-12-25',
    changes: [
      'Implemented automatic scroll-to-top feature for improved navigation',
      'Updated and streamlined the Changelog page for better readability',
      'Further optimized page layouts and responsiveness'
    ]
  },
  {
    date: '2024-12-24',
    changes: [
      'Refactored data structure for cheatsheets, guides, and resources',
      'Improved code maintainability and overall site performance',
      'Enhanced error handling and component architecture',
      'Added GitHub repository link to the footer for open-source collaboration'
    ]
  },
  {
    date: '2024-12-22',
    changes: [
      'Optimized MVS ABEND Codes and ISPF Cheatsheet pages',
      'Improved layout responsiveness and readability across all pages'
    ]
  },
  {
    date: '2024-12-20',
    changes: [
      'Added Contributing and Changelog links to the header',
      'Implemented Light/Dark mode toggle and Reader mode for improved accessibility',
      'Enhanced PrimaryMenu and PageSidebar components for consistent navigation'
    ]
  },
  {
    date: '2024-12-19',
    changes: [
      'Initial release of MainframeOps',
      'Implemented core functionality including search feature and interactive components',
      'Established foundational structure for guides, cheatsheets, and resources'
    ]
  }
]

export default function Changelog(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>('')

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id)
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-50% 0px -50% 0px'
    })

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [handleIntersection])

  const sidebarItems = changelogData.map(entry => ({ title: entry.date, href: `#${entry.date}` }))

  return (
    <>
      <PageSidebar 
        items={sidebarItems}
        title="Session:"
      />
      <main className="flex-1 p-4 md:p-8 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 terminal-glow">Changelog</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Track the evolution of MainframeOps with our latest updates and improvements.
        </p>

        <div className="mb-12 relative w-full max-w-3xl mx-auto">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border-2 border-gray-600">
            <Image
              src="https://i.imgur.com/mUmkwsp.png"
              alt="Changelog Terminal Interface"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-56 h-4 bg-gray-700 rounded-b-lg border-t border-gray-600 flex justify-between items-center px-2">
            <span className="text-[8px] text-green-400 font-mono">LOG-SYS</span>
            <span className="text-[8px] text-green-400 font-mono">REV.2024</span>
          </div>
        </div>

        {changelogData.map((entry) => (
          <section key={entry.date} id={entry.date} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 terminal-shadow">{entry.date}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {entry.changes.map((change, index) => (
                <li key={index} className="text-muted-foreground">{change}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  )
}

