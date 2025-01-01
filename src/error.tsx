'use client'

import ErrorPage from './components/ErrorPage'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <ErrorPage 
      code={500}
      message={error.message || "Something went wrong"}
      reset={reset}
    />
  )
}

