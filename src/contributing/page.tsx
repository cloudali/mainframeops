import Image from 'next/image'

export default function Contributing() {
 return (
   <div className="space-y-8 p-4">
     <h1 className="text-4xl font-bold mb-8 terminal-glow">Contributing to MainframeOps</h1>
     
     <div className="mb-12 relative w-full max-w-3xl mx-auto">
       <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border-4 border-gray-700 transform rotate-1">
         <div className="absolute top-[-8px] left-[-8px] w-20 h-8 bg-gray-700 rounded-tr-xl rounded-bl-xl border-r-2 border-b-2 border-gray-600">
           <div className="text-[8px] text-green-400 font-mono p-1">CONTRIB-SYS</div>
           <div className="absolute bottom-1 right-1 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
         </div>
         
         <div className="absolute top-2 right-2 w-24 h-6 bg-gray-700 rounded-sm border border-gray-600">
           <div className="text-[8px] text-green-400 font-mono text-right p-1">MODE: EDIT</div>
         </div>
         
         <div className="absolute inset-4 grid grid-cols-4 gap-px bg-gray-700 opacity-20"></div>
       </div>
       
       <div className="relative aspect-[16/9] rounded-lg overflow-hidden border-2 border-gray-600 transform -rotate-1">
         <Image
           src="https://i.imgur.com/0D39Xx8.png"
           alt="Contributing Visualization"
           fill
           className="object-cover"
           priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
     </div>
     
     <p className="text-lg">
       Stay tuned! We&apos;ll soon provide instructions on how to contribute, including improving existing topics, adding new ones or resources, requesting topics, reporting errors or typos, submitting changes to cheatsheets, and much more.
     </p>
     
     <p className="text-lg">
       🎉 Thank you for your interest in contributing! Community contributions are the &#128156; of this project.
     </p>
     
     <h2 className="text-2xl font-bold mt-8 mb-4">Code of Conduct</h2>
     <p>
       This project follows the Contributor Covenant Code of Conduct. By participating, you agree to uphold these standards. If you encounter unacceptable behavior, please report it to services@github.com.
     </p>
   </div>
 )
}

