import Layout from '@/components/Layout'
import React, { useState, useRef, useEffect } from 'react'

export default function Agent() {
  const [messages, setMessages] = useState([
    { role: 'user', text: 'Who is Priyansh Desai?' },
    {
      role: 'agent',
      text: 'Priyansh Desai is an AI engineer passionate about LLMs, Golang, and building intelligent systems.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const scrollRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  // Autofocus input
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      })

      const data = await res.json()
      const botMessage = { role: 'agent', text: data.response }

      setMessages((prev) => [...prev, botMessage])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'agent', text: '⚠️ Error talking to the AI agent.' },
      ])
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      
        <div className="relative dark:bg-[#18181b] bg-[#efeee7] text-black dark:text-white h-[calc(100vh-3rem)] flex flex-col rounded-2xl border border-[#dcdad2] dark:border-[#2c2c32] px-6 py-10 shadow-xl w-full max-w-9xl mx-auto">
            <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center rounded-2xl">
              <h2 className="text-white text-3xl md:text-5xl font-semibold">🚧 Coming Soon</h2>
            </div>
          
            {/* Header */}
            <h1 className="text-2xl md:text-3xl mb-6 text-left ">
            Get to know more about me, Talk to my Bot
            </h1>

            {/* Chat Box Container */}
            <div className="flex-1 w-full rounded-2xl border border-[#dcdad2] dark:border-[#2c2c32] bg-[#efeee7] dark:bg-[#18181b] shadow-inner overflow-hidden">

            {/* Scrollable Messages */}
            <div
                ref={scrollRef}
                className="h-[calc(100%-1rem)] overflow-y-auto px-6 py-6 space-y-4"
            >
                {messages.map((msg, i) => (
                <div
                    key={i}
                    className={`px-4 py-3 rounded-xl max-w-[90%] text-xl md:text-xl leading-relaxed ${
                    msg.role === 'user'
                        ? 'bg-[#e7e5dc] dark:bg-[#2a2a2e] text-black dark:text-white self-start ml-auto text-right'
                        : 'bg-[#dcdad2] dark:bg-[#202022] text-black dark:text-white self-start'
                    }`}
                >
                    {msg.text}
                </div>
                ))}

                {loading && (
                <div className="text-sm text-gray-400 italic">Agent is typing...</div>
                )}
            </div>
            </div>

            {/* Spacer */}
            <div className="h-6" />

            {/* Input box */}
            <form
            onSubmit={handleSubmit}
            className="flex gap-2 border border-[#dcdad2] dark:border-[#2c2c32] bg-[#f5f4ef] dark:bg-[#1c1c1f] rounded-2xl px-4 py-4 shadow"
            >
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Priyansh..."
                disabled={loading}
                className="flex-grow bg-transparent text-black dark:text-white placeholder-gray-400 focus:outline-none disabled:opacity-50"
            />
            <button
                type="submit"
                disabled={loading}
                className="px-6 py-1 text-white font-medium bg-[#2e7d32] hover:bg-[#256429] transition rounded-xl disabled:opacity-50"
            >
                {loading ? '...' : 'Send'}
            </button>
            </form>
        </div>
    </Layout>

  )
}
