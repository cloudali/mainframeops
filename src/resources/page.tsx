import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Youtube, PenTool, Users, Newspaper, GraduationCap, FileText, Sliders, Briefcase, HardDrive, Settings, Wrench, Github } from 'lucide-react'
import resourcesData from './resourceslist.json'

// Map of icon names to icon components
const iconMap = {
  BookOpen,
  Youtube,
  PenTool,
  Users,
  Newspaper,
  GraduationCap,
  FileText,
  Sliders,
  Briefcase,
  HardDrive,
  Settings,
  Wrench
}

const ContributeButton = () => (
  <a
    href="https://github.com/cloudali/mainframeops/edit/main/app/resources/page.tsx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-3 py-1 mt-4 text-xs border border-green-500 rounded-md bg-black hover:bg-green-900 transition-colors duration-200"
  >
    <span className="text-green-500 mr-2">$</span>
    <Github size={14} className="mr-2 text-green-500" />
    <span className="text-green-500">Contribute to this page</span>
  </a>
)

export default function Resources(): JSX.Element {
  return (
    <div className="space-y-12 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 terminal-glow">Mainframe Resources</h1>
      
      <div className="flex justify-center items-center mb-8">
        <div className="relative w-full max-w-[384px] h-32">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-4 border-gray-700">
            <div className="absolute top-[-8px] left-[-8px] w-20 h-8 bg-gray-700 rounded-tr-xl rounded-bl-xl border-r-2 border-b-2 border-gray-600">
              <div className="text-[8px] text-green-400 font-mono p-1">LIBRARY-SYS</div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="absolute top-2 right-2 w-24 h-6 bg-gray-700 rounded-sm border border-gray-600">
              <div className="text-[8px] text-green-400 font-mono text-right p-1">INDEX: MF-RES</div>
            </div>
            
            <div className="absolute inset-4 grid grid-cols-4 gap-px bg-gray-700 opacity-20"></div>
          </div>
          
          <div className="absolute inset-2 bg-black rounded-md overflow-hidden border border-gray-600">
            <Image
              src="https://i.imgur.com/I54l2jW.png"
              alt="Mainframe Resources Interface"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-48 h-3">
            <div className="w-full h-full bg-gray-700 rounded-b-lg flex justify-around items-center px-2">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute top-1 right-8 flex space-x-1">
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-200"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <div className="absolute bottom-1 left-2 text-[8px] text-gray-400 font-mono">RESOURCE-DB</div>
          <div className="absolute bottom-1 right-2 text-[8px] text-gray-400 font-mono">V1.0</div>
        </div>
      </div>
      
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 text-center">
        Explore our curated collection of mainframe resources. From blogs to courses, tools to communities, find everything you need to enhance your mainframe knowledge and skills.
      </p>
      <div className="flex justify-center">
        <ContributeButton />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourcesData.resourceCategories.map((category, index) => {
          const IconComponent = iconMap[category.iconName as keyof typeof iconMap]
          return (
            <div key={index} className="card p-6 flex flex-col items-center">
              {IconComponent && <IconComponent className="w-12 h-12 mb-4" />}
              <h2 className="text-2xl font-bold mb-4 terminal-shadow">{category.title}</h2>
              <ul className="space-y-2 text-center">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.url} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" aria-label={`Go to ${item.name}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

