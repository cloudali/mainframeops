import Link from 'next/link'
import AsciiLogo from './components/AsciiLogo'

export default function Home(): JSX.Element {
  return (
    <div className="space-y-12">
      <section className="text-center py-20">
        <div className="mb-6 terminal-glow">
          <AsciiLogo />
        </div>
        <h1 className="sr-only">MainframeOps</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Start your mainframe learning journey here! This hub features guides, notes, and cheatsheets I've created & Curated from other sources to help myself learn, now available to support your own path.
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you're just getting started or expanding your skills, find practical resources to help you succeed in the world of mainframes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/getting-started" className="mainframe-button text-lg px-6 py-3" aria-label="Begin Your Journey">
            Begin Your Journey
          </Link>
          <Link href="/resources" className="mainframe-button text-lg px-6 py-3" aria-label="Explore Resources">
            Explore Resources
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 terminal-shadow">Getting Started</h2>
            <p className="mb-6">Kickstart your mainframe journey with curated introductory materials I found most helpful when beginning.</p>
          </div>
          <Link href="/getting-started" className="mainframe-button inline-block text-center" aria-label="Start Here">
            Start Here
          </Link>
        </div>
        <div className="card p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 terminal-shadow">Guides</h2>
            <p className="mb-6">Dive into detailed guides covering various mainframe topics, from basics to advanced techniques I've learned along the way.</p>
          </div>
          <Link href="/guides" className="mainframe-button inline-block text-center" aria-label="Read Guides">
            Read Guides
          </Link>
        </div>
        <div className="card p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 terminal-shadow">Cheatsheets</h2>
            <p className="mb-6">Access quick reference sheets I've compiled for mainframe commands and operations to boost your productivity.</p>
          </div>
          <Link href="/cheatsheets" className="mainframe-button inline-block text-center" aria-label="View Cheatsheets">
            View Cheatsheets
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <div className="card p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 terminal-shadow">Tools</h2>
            <p className="mb-6">Discover a curated catalog of mainframe tools and utilities. From classic solutions to modern advancements, find everything you need to streamline your mainframe workflow and bridge the gap between tradition and innovation.</p>
          </div>
          <Link href="/tools" className="mainframe-button inline-block text-center" aria-label="Browse Tools">
            Browse Tools
          </Link>
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6 terminal-shadow">My Learning Journey</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          As I navigated the world of mainframes, I created these resources to solidify my understanding. Now, I'm sharing them with you to help make your learning path smoother.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Personal Insights</h3>
            <p>Benefit from the lessons I've learned and the insights I've gained throughout my mainframe journey.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Practical Approach</h3>
            <p>Focus on hands-on learning with real-world scenarios and examples I found most valuable.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
            <p>Join me in ongoing learning as I update and expand these resources with new discoveries and techniques.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>Connect with fellow learners and share experiences as we navigate the mainframe landscape together.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

