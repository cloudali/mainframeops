import { Card } from '@/components/ui/card'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 font-mono p-4">
      <Card className="w-full max-w-3xl p-6 bg-black border-green-500 relative">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold terminal-glow">Loading...</div>
          <div className="w-2 h-4 bg-green-500 mx-auto animate-pulse"></div>
        </div>
      </Card>
    </div>
  )
}

