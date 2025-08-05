'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-[#1f1f22] shadow-md transition-colors"
      aria-label="Toggle Theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
