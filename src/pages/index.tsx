import Image from 'next/image'
import Layout from '@/components/Layout'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center min-h-screen px-8 py-16 pt-0 pb-12 text-black dark:text-white relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[1400px] gap-16">
          
          {/* Left: About You */}
          <div className="w-full md:w-[65%]">
            <p className="text-sm text-green-600 dark:text-green-500 uppercase tracking-wide mb-2">Love to Build from Scratch</p>
            
            <TypeAnimation
              sequence={['Hey, I\'m Priyansh!', 1000]}
              speed={50}
              wrapper="h1"
              className="text-5xl md:text-6xl font-bold mb-4"
              repeat={0}
            />

            <p className="text-gray-700 dark:text-gray-400 text-xl mb-6">
              I’m based in Surat and graduated from Plaksha University with a major in Computer Science and Artificial Intelligence. My work focuses on machine learning, and I’ve spent the last few years exploring how to build useful, responsible systems that connect intelligence with the real world.
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-xl mb-6">
              I’ve worked on projects ranging from recommendation systems and smart contract platforms to personalized productivity tools and Edge-AI for yoga correction. Most of my recent work combines technical depth with personal interests, like building my own RAG-based chatbot from my notes, or experimenting with real-time AI for situational awareness.              
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-xl mb-6">
              Sports have always been an important part of my life. I trained and competed in lawn tennis for many years, and that experience shaped how I approach both research and problem solving—with discipline, patience, and a clear focus under pressure. It continues to influence how I show up in collaborative and technical environments.
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-xl mb-6">
              I care deeply about ideas and enjoy thinking through them in conversation, especially when reading and discussing research papers in machine learning. Whether it’s computer vision, retrieval-augmented generation, or probabilistic modeling, I’m interested in understanding how systems work and the thinking behind their design.
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-xl mb-6">
              Outside of work, I’ve put effort into understanding myself better and improving how I communicate. I believe small things like being open in conversation, listening carefully, and showing up with a smile matter in the long run.    
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-xl mb-6">
              I want to do work that leaves a mark. That’s what keeps me moving forward.
            </p>

            <div className="flex gap-3 flex-wrap text-sm text-gray-600 dark:text-gray-400">
              <span className="border border-gray-400 dark:border-gray-600 rounded px-3 py-1">Golang</span>
              <span className="border border-gray-400 dark:border-gray-600 rounded px-3 py-1">Python</span>
              <span className="border border-gray-400 dark:border-gray-600 rounded px-3 py-1">AI/ML</span>
              <span className="border border-gray-400 dark:border-gray-600 rounded px-3 py-1">CV</span>
              <span className="border border-gray-400 dark:border-gray-600 rounded px-3 py-1">NLP</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[35%] flex justify-center md:justify-end mt-4 md:mt-16">
            <Image
              src="/my_photo_4.JPG"
              alt="Priyansh Desai"
              width={400}
              height={500}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
