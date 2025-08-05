import { ReactNode } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Priyansh Desai</title>
      </Head>

      <div className="flex min-h-screen bg-[#efeee7] dark:bg-[#0e0e10] text-black dark:text-white">
        <Sidebar />
        <main className="ml-72 w-full p-6">{children}</main>
      </div>
    </>
  )
}
