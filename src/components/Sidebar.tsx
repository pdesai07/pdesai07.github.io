'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineRobot,
  AiOutlineFilePdf,
  AiOutlineMail,
  AiOutlineBook,
} from 'react-icons/ai'
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'
import { useTheme } from '@/hooks/useTheme'

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div
        className="
          lg:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[96%] 
          bg-[#efeee7]/90 dark:bg-[#18181b]/90 
          text-black dark:text-white 
          flex items-center justify-between px-4 py-2 
          rounded-full shadow-lg border border-gray-300 dark:border-gray-700 
          backdrop-blur-md z-50
        "
      >
        {/* Left Icon */}
        <Image
          src="/my_photo_1.jpeg"
          alt="Profile"
          width={32} height={32}
          className="rounded-full sm:w-10 sm:h-10"
        />

        {/* Center Navigation */}
        <nav
          className="
            flex flex-wrap justify-center
            gap-2 sm:gap-4 text-xs sm:text-sm font-medium
            min-h-[60px]   /* ensures space for 2 rows */
            gap-y-2        /* vertical spacing when wrapped */
          "
        >
          <Link href="/" className="flex items-center gap-1 sm:gap-2 hover:text-green-600 dark:hover:text-green-400 transition">
            <AiOutlineHome className="text-lg sm:text-xl" /> Home
          </Link>
          <Link href="/projects" className="flex items-center gap-1 sm:gap-2 hover:text-green-600 dark:hover:text-green-400 transition">
            <AiOutlineProject className="text-lg sm:text-xl" /> Projects
          </Link>
          <Link href="/publications" className="flex items-center gap-1 sm:gap-2 hover:text-green-600 dark:hover:text-green-400 transition">
            <AiOutlineBook className="text-lg sm:text-xl" /> Publications
          </Link>
          <Link href="/agent" className="flex items-center gap-1 sm:gap-2 hover:text-green-600 dark:hover:text-green-400 transition">
            <AiOutlineRobot className="text-lg sm:text-xl" /> AI Agent
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 sm:gap-2 hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <AiOutlineFilePdf className="text-lg sm:text-xl" /> Resume
          </a>
        </nav>

        {/* Right Section - SOCIAL ICONS */}
        <div className="flex items-center gap-2 sm:gap-3 text-gray-600 dark:text-gray-300">
          <FiGithub className="text-xl sm:text-2xl hover:text-green-600 dark:hover:text-green-400 transition" />
          <FiLinkedin className="text-xl sm:text-2xl hover:text-green-600 dark:hover:text-green-400 transition" />
          <a href="mailto:priyanshdesai03@gmail.com">
            <AiOutlineMail className="text-xl sm:text-2xl hover:text-green-600 dark:hover:text-green-400 transition" />
          </a>
          <FiInstagram className="text-xl sm:text-2xl hover:text-green-600 dark:hover:text-green-400 transition" />

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-lg sm:text-xl hover:scale-110 transition-transform">
            {theme === 'dark' ? '🌙' : '🌞'}
          </button>
        </div>
      </div>

      <aside
        id="sidebar"
        className="
          hidden lg:flex 
          fixed left-4 top-4 h-[calc(100vh-2rem)] w-64 bg-[#efeee7] dark:bg-[#18181b]
          text-black dark:text-white flex-col justify-between py-8 px-6 border border-[#dcdad2] 
          dark:border-[#2c2c32] rounded-2xl shadow-xl
        "
      >
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Image src="/my_photo_1.jpeg" alt="Profile" width={48} height={48} className="rounded-full" />
            <h2 className="text-lg font-semibold">Priyansh</h2>
          </div>

          <nav className="space-y-6 text-[20px]">
            <Link href="/" className="flex items-center gap-3 hover:text-green-600 transition">
              <AiOutlineHome /> Home
            </Link>
            <Link href="/projects" className="flex items-center gap-3 hover:text-green-600 transition">
              <AiOutlineProject /> My Projects
            </Link>
            <Link href="/publications" className="flex items-center gap-3 hover:text-green-600 transition">
              <AiOutlineBook /> My Publications
            </Link>
            <Link href="/agent" className="flex items-center gap-3 hover:text-green-600 transition">
              <AiOutlineRobot /> My AI Agent
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-600 transition">
              <AiOutlineFilePdf /> Resume
            </a>
          </nav>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center gap-4">
            <FiGithub size={30} />
            <FiLinkedin size={30} />
            <AiOutlineMail size={30} />
            <FiInstagram size={30} />
            <button onClick={toggleTheme}>{theme === 'dark' ? '🌙' : '🌞'}</button>
          </div>

          <p className="text-xs text-center">21.1731558, 72.8058916</p>
        </div>
      </aside>
    </>
  )
}
