'use client'
import { useState } from 'react'

export default function ChatUI() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, `🧑: ${input}`, `🤖: [Response about Priyansh]`])
    setInput('')
  }

  return (
    <div className="border rounded p-4 max-w-xl mx-auto">
      <div className="h-60 overflow-y-auto mb-4 bg-gray-50 p-2 border">
        {messages.map((msg, i) => (
          <p key={i} className="text-sm mb-1">{msg}</p>
        ))}
      </div>
      <div className="flex">
        <input
          className="border flex-grow p-2 rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about Priyansh..."
        />
        <button className="bg-orange-700 text-white px-4 rounded-r" onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
