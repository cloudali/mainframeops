import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ErrorPageProps {
  code?: number
  message?: string
  reset?: () => void
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code = 500, message = "Something went wrong", reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 font-mono">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">{code}</h1>
        <p className="text-xl">{message}</p>
        <div className="flex justify-center space-x-4">
          {reset && (
            <Button onClick={reset} variant="outline">
              Try again
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage

