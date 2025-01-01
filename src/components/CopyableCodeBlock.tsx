'use client'

import { useState } from 'react'

interface CopyableCodeBlockProps {
  code: string
  language: string
}

const CopyableCodeBlock: React.FC<CopyableCodeBlockProps> = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative">
      <pre className={`language-${language} p-4 rounded-md bg-gray-800 overflow-x-auto`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-2 py-1 text-xs mainframe-button"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

export default CopyableCodeBlock

