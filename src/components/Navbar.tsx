import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-orange-900 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Priyansh Desai</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <a href="/resume.pdf" target="_blank">Resume</a>
        <Link href="/agent">My AI Agent</Link>
        <Link href="/publications">My Publications</Link>
        <Link href="/projects">My Projects</Link>
        <Link href="/myproject">my project 2</Link>
      </div>
    </nav>
  )
}