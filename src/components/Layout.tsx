import { ReactNode } from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#efeee7] dark:bg-[#0e0e10] text-black dark:text-white">
      <Sidebar />
      <main className="ml-72 w-full p-6">{children}</main>
    </div>
  )
}
