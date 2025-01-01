import { Github, DiscIcon as DiscordIcon, TwitterIcon, Instagram } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-[#090cbd] border-dotted border-t-4 text-foreground p-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-lg">Made with 💚 by Ali.</p>
        <div className="flex justify-center space-x-6">
          <Link 
            href="https://github.com/mainframeops" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="https://discord.gg/your-discord-invite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <DiscordIcon size={24} />
            <span className="sr-only">Discord</span>
          </Link>
          <Link 
            href="https://twitter.com/mainframeops" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <TwitterIcon size={24} />
            <span className="sr-only">X (Twitter)</span>
          </Link>
          <Link 
            href="https://instagram.com/mainframeops" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

