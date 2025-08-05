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
    <aside id="sidebar" className="fixed left-4 top-4 h-[calc(100vh-2rem)] w-64 bg-[#efeee7] dark:bg-[#18181b] text-black dark:text-white flex flex-col justify-between py-8 px-6 border border-[#dcdad2] dark:border-[#2c2c32] rounded-2xl shadow-xl">
      {/* Top Section */}
      <div>
        {/* Small Icon + Name */}
        <div className="flex items-center gap-3 mb-10">
          <Image src="/my_photo_1.jpeg" alt="Profile" width={48} height={48} className="rounded-full" />
          <h2 className="text-lg font-semibold">Priyansh</h2>
        </div>

        {/* Navigation */}
        <nav className="space-y-6 text-[20px]">
          <Link href="/" className="flex items-center gap-3 hover:text-green-600 transition">
            <AiOutlineHome size={20} /> Home
          </Link>
          <Link href="/projects" className="flex items-center gap-3 hover:text-green-600 transition">
            <AiOutlineProject size={20} /> My Projects
          </Link>
          <Link href="/publications" className="flex items-center gap-3 hover:text-green-600 transition">
            <AiOutlineBook size={20} /> My Publications
          </Link>
          <Link href="/agent" className="flex items-center gap-3 hover:text-green-600 transition">
            <AiOutlineRobot size={20} /> My AI Agent
          </Link>
          {/* <Link href="/project_2" className="flex items-center gap-3 hover:text-green-600 transition">
            <AiOutlineProject size={20} /> My Projects 2
          </Link> */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-green-600 transition"
          >
            <AiOutlineFilePdf size={20} /> Resume
          </a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* Socials */}
        <div className="flex justify-center gap-4 text-gray-500 dark:text-gray-400">
          <a href="https://github.com/pdesai07" target="_blank" rel="noreferrer"><FiGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/priyansh-desai-6bb470230/" target="_blank" rel="noreferrer"><FiLinkedin size={30} /></a>
          <a href="priyanshdesai03@gmail.com" rel="noreferrer"><AiOutlineMail size={30} /></a>
          <a href="https://www.instagram.com/priyanshh.7/" target="_blank" rel="noreferrer"><FiInstagram size={30} /></a>
          <button
                onClick={toggleTheme}
                className="px-2 py-1 text-sm rounded-full bg-gray-200 dark:bg-[#2c2c32] text-black dark:text-white hover:opacity-80 transition"
            >
                {theme === 'dark' ? '🌙' : '🌞'}
            </button>
        </div>


        {/* Coordinates */}
        <p className="text-xs text-center text-gray-600 dark:text-gray-400">21.1731558, 72.8058916</p>
      </div>
      {/* Theme Toggle Button */}
        {/* <div className="flex justify-center my-4">
            <button
                onClick={toggleTheme}
                className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-[#2c2c32] text-black dark:text-white hover:opacity-80 transition"
            >
                {theme === 'dark' ? '🌙 Dark' : '🌞 Light'}
            </button>
        </div> */}
    </aside>
  )
}
