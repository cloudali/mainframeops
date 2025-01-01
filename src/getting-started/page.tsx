'use client'

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, PenToolIcon as Tools, FileText, ScrollText } from 'lucide-react'
import PageSidebar from '../components/PageSidebar'
import PrimaryMenu from '../components/PrimaryMenu'

const sidebarItems = [
  { title: "My Mainframe Journey", href: "#my-journey" },
  { title: "What are Mainframes?", href: "#what-are-mainframes" },
  { title: "Accessing Mainframes", href: "#accessing-mainframes" },
  { title: "Learning Resources", href: "#learning-resources" },
  { title: "Emulators and OS", href: "#emulators-and-os" },
  { title: "Programming Languages", href: "#programming-languages" },
  { title: "IBM Systems", href: "#ibm-systems" },
  { title: "IBM Z Explore Program", href: "#ibm-z-explore" },
  { title: "Quick Access", href: "#quick-access" },
]

export default function GettingStarted(): JSX.Element {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash
    if (hash && sectionRefs.current[hash]) {
      sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Handle initial load

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [handleHashChange])

  return (
    <div className="flex flex-col items-center">
      <PrimaryMenu />
      <PageSidebar items={sidebarItems} />
      <main className="flex-1 p-4 md:p-8 mt-24 mx-auto max-w-4xl w-full">
        <div className="mb-8 relative w-full aspect-[16/9] max-w-3xl mx-auto">
          <Image
            src="https://i.imgur.com/NA8dthT.png"
            alt="Retro Terminal Art"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 terminal-glow text-center">
          Getting Started with Mainframes
        </h1>

        <section id="my-journey" ref={el => sectionRefs.current['#my-journey'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">My Mainframe Journey</h2>
          <p className="mb-3 md:mb-4">I&apos;m not a seasoned professional or some all-knowing mainframe bot 🤖, but my fascination with mainframes started during my quest to uncover the weird and wonderful corners of technology. That&apos;s when I stumbled upon mainframes—absolute beasts of computing that have been powering critical systems for decades without much of a redesign. Think of them as the tech world&apos;s version of classic cars🚘—timeless, powerful, and always reliable 💾.</p>
          <p className="mb-3 md:mb-4">Intrigued, I went full-on detective mode 🔍 and reached out to mainframe experts on LinkedIn. To my surprise (and relief), a few responded, shared resources, and pointed me in the right direction. That&apos;s when it hit me: mainframes aren&apos;t just relics of the past—they&apos;re the backbone of tech, the silent processors powering everything: reliable, resilient, and always getting the job done⚡.</p>
          <p className="mb-3 md:mb-4">From there, I dove in headfirst. I joined Master the Mainframe (now IBM Z Explore), browsed forums, took online courses, obtained mainframe-related certifications 🎓, and steadily built up my mainframe skills one byte at a time. 🛠️💻 Along the way, I noticed how scattered and cryptic most beginner resources were—many felt stuck in &quot;mainframe-speak&quot; and weren&apos;t exactly newbie-friendly.</p>
          <p className="mb-3 md:mb-4">As a Computer Science student, I decided to build this site to document my journey and share the best resources I&apos;ve found. It&apos;s packed with guides, cheatsheets, and notes to make mainframes more accessible (and maybe a little less intimidating). Whether you&apos;re here to explore, learn, or just satisfy your curiosity, I hope this site helps—and maybe even inspires you to dive into the fascinating world of mainframes yourself 🚀.</p>
        </section>

        <section id="what-are-mainframes" ref={el => sectionRefs.current['#what-are-mainframes'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">What are Mainframes?</h2>
          <p className="mb-3 md:mb-4">Mainframes are high-performance computers designed for processing and storing large amounts of data. They are known for their reliability, security, and ability to handle high-volume input and output.</p>

          <h3 className="text-lg md:text-xl font-bold mb-2">A Brief History of Mainframes</h3>
          <div className="relative overflow-x-auto mb-6">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Year</th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">Event</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-800 border-gray-700">
                  <td className="px-4 py-2 md:px-6 md:py-4">1952</td>
                  <td className="px-4 py-2 md:px-6 md:py-4">IBM introduces the IBM 701, its first commercial scientific computer</td>
                </tr>
                <tr className="border-b bg-gray-800 border-gray-700">
                  <td className="px-4 py-2 md:px-6 md:py-4">1964</td>
                  <td className="px-4 py-2 md:px-6 md:py-4">IBM announces the System/360, revolutionizing the industry</td>
                </tr>
                <tr className="border-b bg-gray-800 border-gray-700">
                  <td className="px-4 py-2 md:px-6 md:py-4">1970s</td>
                  <td className="px-4 py-2 md:px-6 md:py-4">Introduction of virtual memory and time-sharing systems</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="px-4 py-2 md:px-6 md:py-4">2000s-Present</td>
                  <td className="px-4 py-2 md:px-6 md:py-4">Continued evolution with focus on hybrid cloud integration and AI capabilities</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg md:text-xl font-bold mb-2">Does Mainframe have a future?</h3>
          <p className="mb-4">Despite the rise of cloud computing, mainframes continue to play a crucial role in many industries, particularly in finance, healthcare, and government sectors. Their unparalleled ability to process vast amounts of data securely makes them indispensable for many organizations.</p>

          <div className="relative w-full mb-6 pt-[56.25%] bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ouAG4vXFORc"
              title="Why Do Mainframes Still Exist? What&apos;s Inside One? 40TB, 200+ Cores, AI, and more!"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section id="mainframe-components" ref={el => sectionRefs.current['#mainframe-components'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Mainframe Components Overview</h2>
          <p className="mb-4">Mainframes consist of various components that work together to provide powerful, reliable, and secure computing. Here&apos;s a bird&apos;s-eye view of key components you might encounter in your mainframe journey:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">Hardware</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Central Processing Units (CPUs)</li>
                <li>Memory (RAM)</li>
                <li>Storage devices (DASD, Tape)</li>
                <li>I/O Processors</li>
                <li>Cryptographic coprocessors</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">Operating Systems</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>z/OS</li>
                <li>z/VM</li>
                <li>z/VSE</li>
                <li>Linux on Z</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">Middleware</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>CICS (Customer Information Control System)</li>
                <li>IMS (Information Management System)</li>
                <li>Db2 (Database management)</li>
                <li>WebSphere Application Server</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">System Management</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>JES (Job Entry Subsystem)</li>
                <li>RACF (Resource Access Control Facility)</li>
                <li>SMF (System Management Facility)</li>
                <li>RMF (Resource Measurement Facility)</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">As you progress in your mainframe learning, you&apos;ll dive deeper into these components and understand how they interact to create the powerful and reliable systems that mainframes are known for.</p>
        </section>

        <section id="accessing-mainframes" ref={el => sectionRefs.current['#accessing-mainframes'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Accessing Mainframes</h2>
          <p className="mb-3 md:mb-4">Accessing mainframes typically requires specialized software and permissions. Here are some common methods:</p>
          <ul className="list-disc pl-5 md:pl-6 mb-3 md:mb-4">
            <li>Terminal emulators (e.g., IBM Personal Communications, Micro Focus Rumba)</li>
            <li>Web-based interfaces (e.g., IBM z/OS Connect)</li>
            <li>APIs for programmatic access</li>
            <li>Cloud-based mainframe services</li>
          </ul>
          <p>For learning purposes, you can use mainframe emulators or access free mainframe environments provided by some organizations for educational use.</p>
        </section>

        <section id="learning-resources" ref={el => sectionRefs.current['#learning-resources'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Learning Resources</h2>
          <p className="mb-3 md:mb-4">Here are some valuable resources to start your mainframe learning journey:</p>
          <ul className="list-disc pl-5 md:pl-6">
            <li><Link href="/resources" aria-label="Our curated list of resources" className="text-green-400 hover:underline">Our curated list of resources</Link></li>
            <li>IBM&apos;s official documentation and tutorials</li>
            <li>Online courses on platforms like Coursera and edX</li>
            <li>Mainframe user groups and forums</li>
            <li>Books on mainframe technologies and programming</li>
          </ul>
        </section>

        <section id="emulators-and-os" ref={el => sectionRefs.current['#emulators-and-os'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Emulators and Operating Systems</h2>
          <p className="mb-3 md:mb-4">Mainframe emulators allow you to run mainframe operating systems on your personal computer. Some popular options include:</p>
          <ul className="list-disc pl-5 md:pl-6 mb-3 md:mb-4">
            <li>Hercules: An open-source mainframe emulator</li>
            <li>z/PDT: IBM&apos;s Personal Development Tool for z/OS</li>
            <li>TK4-: A free MVS 3.8j distribution</li>
          </ul>
          <p className="mb-3 md:mb-4">Common mainframe operating systems include:</p>
          <ul className="list-disc pl-5 md:pl-6">
            <li>z/OS: The most widely used mainframe OS</li>
            <li>z/VM: A virtualization platform for mainframes</li>
            <li>z/VSE: For smaller mainframe environments</li>
            <li>Linux on Z: Linux distribution for IBM mainframes</li>
          </ul>
        </section>

        <section id="programming-languages" ref={el => sectionRefs.current['#programming-languages'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Programming Languages</h2>
          <p className="mb-3 md:mb-4">Mainframes support a wide range of programming languages, including:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">COBOL</h3>
              <p>The most widely used language for business applications on mainframes.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">PL/I</h3>
              <p>A versatile language that combines scientific and business programming capabilities.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">Assembler</h3>
              <p>Low-level programming for maximum performance and system-level operations.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="text-lg md:text-xl font-bold mb-2">Java</h3>
              <p>Widely supported on modern mainframes for application development.</p>
            </div>
          </div>
        </section>

        <section id="ibm-systems" ref={el => sectionRefs.current['#ibm-systems'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">IBM Systems</h2>
          <p className="mb-4">IBM offers a range of systems that are crucial in the mainframe ecosystem:</p>
          <ul className="list-disc pl-5 md:pl-6 space-y-2">
            <li><strong>IBM i:</strong> An integrated operating system for IBM Power Systems, known for its robust security and scalability.</li>
            <li><strong>AIX (Advanced Interactive eXecutive):</strong> IBM&apos;s Unix-based operating system, designed for business computing and scalability.</li>
            <li><strong>KVM (Kernel-based Virtual Machine):</strong> A virtualization solution for Linux on IBM Z and LinuxONE systems, allowing multiple operating systems to run on a single machine.</li>
            <li><strong>OS/390:</strong> A predecessor to z/OS, it was the primary operating system for IBM mainframes in the late 1990s and early 2000s.</li>
          </ul>
          <p className="mt-4">Understanding these systems provides a comprehensive view of the IBM mainframe ecosystem and its evolution over time.</p>
        </section>

        <section id="ibm-z-explore" ref={el => sectionRefs.current['#ibm-z-explore'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">IBM Z Explore Program</h2>
          <p className="mb-4">One of the best ways to get started with mainframes is through the IBM Z Explore program (formerly known as Master the Mainframe). This program offers:</p>
          <ul className="list-disc pl-5 md:pl-6 space-y-2">
            <li>Hands-on experience with real mainframe systems</li>
            <li>Progressive learning path from basics to advanced topics</li>
            <li>Challenges and projects to apply your knowledge</li>
            <li>Recognition and badges for completed levels</li>
          </ul>
          <p className="mt-4">You can start your mainframe journey with IBM Z Explore at <Link href="https://www.ibm.com/z/resources/zxplore" aria-label="IBM Z Explore Program Link" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ibm.com/z/resources/zxplore</Link>.</p>
          <p className="mt-4">Additionally, IBM offers a comprehensive course on z/OS Facilities, which you can find in the IBM Redbooks: <Link href="https://www.redbooks.ibm.com/abstracts/crse0304.html" aria-label="IBM Redbooks Link" className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.redbooks.ibm.com/abstracts/crse0304.html</Link>.</p>
        </section>

        <section id="quick-access" ref={el => sectionRefs.current['#quick-access'] = el} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Quick Access to Learning Materials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/resources" aria-label="Resources Link" className="card p-6 hover:translate-y-[-4px] transition-transform duration-200">
              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Resources</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive collection of mainframe learning materials</p>
                </div>
              </div>
            </Link>
            <Link href="/tools" aria-label="Tools Link" className="card p-6 hover:translate-y-[-4px] transition-transform duration-200">
              <div className="flex items-center gap-4">
                <Tools className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Tools</h3>
                  <p className="text-sm text-muted-foreground">Essential tools and utilities for mainframe development</p>
                </div>
              </div>
            </Link>
            <Link href="/guides" aria-label="Guides Link" className="card p-6 hover:translate-y-[-4px] transition-transform duration-200">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Guides</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step tutorials and detailed guides</p>
                </div>
              </div>
            </Link>
            <Link href="/cheatsheets" aria-label="Cheatsheets Link" className="card p-6 hover:translate-y-[-4px] transition-transform duration-200">
              <div className="flex items-center gap-4">
                <ScrollText className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Cheatsheets</h3>
                  <p className="text-sm text-muted-foreground">Quick reference guides for commands and operations</p>
                </div>
              </div>
            </Link>
          </div>
          <p className="mt-4 text-sm md:text-base">Utilize every resource listed here to dive deeper into the world of mainframes. Each tool, guide, and cheatsheet is designed to enhance your understanding and skills in this fascinating field.</p>
        </section>
      </main>
    </div>
  )
}

