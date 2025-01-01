'use client'

import { useEffect, useRef } from 'react'
import CopyableCodeBlock from '@/app/components/CopyableCodeBlock'
import PageSidebar from '@/app/components/PageSidebar'

const ispfCommands = [
  {
    title: "Navigation Shortcuts",
    commands: [
      { command: "=sd;st", description: "Go to SDSF and then to Status" },
      { command: "=3.4", description: "Go to Data Set List Utility" },
      { command: "=6", description: "Go to Command Shell" },
      { command: "=x", description: "Exit ISPF" },
      { command: "=XALL", description: "Logoff quickly from multiple split sessions" }
    ]
  },
  {
    title: "ISPF Common Commands",
    commands: [
      { command: "HELP", description: "Display help information" },
      { command: "END", description: "Return to the previous panel" },
      { command: "RETURN", description: "Return to the primary option menu" },
      { command: "KEYS", description: "Display or change function key definitions" },
      { command: "SPLIT", description: "Split the screen horizontally" },
      { command: "SWAP", description: "Switch between split screens" },
      { command: "START", description: "Create a new logical screen" },
      { command: "SYSNAME ON|OFF", description: "Display or remove system name" },
      { command: "USERID ON|OFF", description: "Display or remove user ID" }
    ]
  },
  {
    title: "Edit Commands",
    commands: [
      { command: "FIND 'text'", description: "Find specified text" },
      { command: "CHANGE 'old' 'new'", description: "Change old text to new text" },
      { command: "COPY", description: "Copy lines" },
      { command: "MOVE", description: "Move lines" },
      { command: "DELETE", description: "Delete lines" },
      { command: "COMPARE", description: "Compare the edited member with another" },
      { command: "COLS [ON|OFF]", description: "Display or hide columns line" },
      { command: "HIDE X", description: "Hide excluded lines" },
      { command: "RESET HIDE", description: "Redisplay hidden lines" },
      { command: "HEX ON|OFF", description: "Turn hexadecimal display on or off" }
    ]
  },
  {
    title: "Data Set List Commands",
    commands: [
      { command: "APPEND", description: "Add entries to the displayed list" },
      { command: "REFRESH", description: "Refresh display to original list filter criteria" },
      { command: "EXCLUDE", description: "Exclude data sets from display" },
      { command: "SORT", description: "Sort the data set list" },
      { command: "SRCHFOR", description: "Search for strings in listed data sets" }
    ]
  },
  {
    title: "SDSF Commands",
    commands: [
      { command: "ST", description: "Display status of jobs" },
      { command: "? jobname", description: "Display job output" },
      { command: "SORT JOBID A", description: "Sort jobs by job ID in ascending order" },
      { command: "ST;SORT JOBID A", description: "Go to status view and sort jobs by ID" }
    ]
  },
  {
    title: "z/OS UNIX Commands",
    commands: [
      { command: "UDLIST", description: "Display a z/OS UNIX Directory List" },
      { command: "EDIT pathname", description: "Edit a z/OS UNIX file" },
      { command: "OBROWSE pathname", description: "Browse a z/OS UNIX file" }
    ]
  }
]

const commonKeys = [
  { key: "F1", description: "Help" },
  { key: "F2", description: "Split" },
  { key: "F3", description: "End / Exit" },
  { key: "F4", description: "Return" },
  { key: "F5", description: "RFind (Repeat Find)" },
  { key: "F6", description: "RChange (Repeat Change)" },
  { key: "F7", description: "Backward / Up" },
  { key: "F8", description: "Forward / Down" },
  { key: "F9", description: "Swap" },
  { key: "F10", description: "Left" },
  { key: "F11", description: "Right" },
  { key: "F12", description: "Cancel" }
]

const editLineCommands = [
  { command: "I", description: "Insert line" },
  { command: "D", description: "Delete line" },
  { command: "R", description: "Repeat line" },
  { command: "C", description: "Copy line" },
  { command: "M", description: "Move line" },
  { command: "A", description: "After (for copy/move)" },
  { command: "B", description: "Before (for copy/move)" },
  { command: "TS", description: "Text split" },
  { command: "TF", description: "Text flow" },
  { command: "UC", description: "Uppercase" },
  { command: "LC", description: "Lowercase" },
  { command: ")", description: "Shift right" },
  { command: "(", description: "Shift left" },
  { command: "HX", description: "Display line in hexadecimal" },
  { command: "COLS", description: "Display columns line" },
  { command: "BOUNDS", description: "Display bounds line" },
  { command: "TABS", description: "Display tabs line" },
  { command: "MASK", description: "Display mask line" },
  { command: "MD", description: "Make dataline" }
]

const sidebarItems = [
  { title: "Navigation Shortcuts", href: "#navigation-shortcuts" },
  { title: "ISPF Common Commands", href: "#ispf-common-commands" },
  { title: "Edit Commands", href: "#edit-commands" },
  { title: "Data Set List Commands", href: "#data-set-list-commands" },
  { title: "SDSF Commands", href: "#sdsf-commands" },
  { title: "z/OS UNIX Commands", href: "#zos-unix-commands" },
  { title: "Commonly Used Function Keys", href: "#commonly-used-function-keys" },
  { title: "Edit Line Commands", href: "#edit-line-commands" },
  { title: "Tips", href: "#tips" }
]

export default function ISPFCheatsheet() {
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

  return (
    <div className="flex flex-col md:flex-row">
      <PageSidebar items={sidebarItems} />
      <main className="flex-1 p-4 md:p-8 mt-16 md:mt-24 mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 terminal-glow">ISPF Cheatsheet</h1>
        
        {ispfCommands.map((section, index) => (
          <section key={index} id={section.title.toLowerCase().replace(/\s+/g, '-')} ref={(el: HTMLElement | null) => {
  if (el) sectionRefs.current[`#${section.title.toLowerCase().replace(/\s+/g, '-')}`] = el;
}} className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.commands.map((cmd, cmdIndex) => (
                <div key={cmdIndex} className="bg-gray-800 p-4 rounded-md">
                  <CopyableCodeBlock code={cmd.command} language="plaintext" />
                  <p className="mt-2 text-sm text-muted-foreground">{cmd.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section id="commonly-used-function-keys" ref={(el: HTMLElement | null) => {
  if (el) sectionRefs.current['#commonly-used-function-keys'] = el;
}} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Commonly Used Function Keys</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {commonKeys.map((key, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">{key.key}</h3>
                <p className="text-sm text-muted-foreground">{key.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="edit-line-commands" ref={(el: HTMLElement | null) => {
  if (el) sectionRefs.current['#edit-line-commands'] = el;
}} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Edit Line Commands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {editLineCommands.map((cmd, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">{cmd.command}</h3>
                <p className="text-sm text-muted-foreground">{cmd.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tips" ref={(el: HTMLElement | null) => {
  if (el) sectionRefs.current['#tips'] = el;
}} className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 terminal-shadow">Tips</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use semicolon (;) as a command separator to execute multiple commands in sequence.</li>
            <li>In SDSF, you can limit the view to only input, execution, and output using specific commands.</li>
            <li>Customize your ISPF settings and shortcuts for increased productivity.</li>
            <li>Use the SRCHFOR command to search for text in a list of datasets (DSLIST/3.4) or members (within a PDS).</li>
            <li>To edit an unsaved member but forgot to make a backup copy: VIEW &lt;member name&gt; to open the unedited version, CREATE (or REPLACE) &lt;backup member name&gt; &#x2E;ZF &#x2E;ZL</li>
            <li>Consider setting up an INITIAL EDIT MACRO for frequently used settings (e.g., &#x27;HILITE REXX PAREN&#x27;, &#x27;BOUNDS 1 39&#x27; for Rexx programming).</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

