import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can include weights you use
  variable: '--font-barlow',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${barlow.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}