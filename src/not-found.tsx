import ErrorPage from './components/ErrorPage'

export default function NotFound() {
  return (
    <ErrorPage 
      code={404}
      message="404 - Page Not Found"
    />
  )
}
