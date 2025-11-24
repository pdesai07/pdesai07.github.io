'use client'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import projectData from '@/data/projectData'

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [animationParent] = useAutoAnimate()
  // Group projects by timeline
  const grouped = projectData.reduce((acc: { [key: string]: typeof projectData }, project) => {
    if (!acc[project.timeline]) acc[project.timeline] = []
    acc[project.timeline].push(project)
    return acc
  }, {} as { [key: string]: typeof projectData })

  const timelines = Object.keys(grouped)

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 
                      pt-24 sm:pt-28 md:pt-32   
                      text-center md:text-left   
      ">
        <h1 className="text-5xl mb-10 border-b border-gray-700 pb-2">
          My Projects
        </h1>

        <div className="space-y-20" ref={animationParent}>
          {timelines.map((timeline, i) => (
            <div key={timeline} className="border-b border-gray-300 dark:border-gray-800 rounded-lg">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-xl text-left bg-[#efeee7] hover:bg-[#e0ded6] dark:bg-[#0e0e10] dark:hover:bg-[#222] transition-all"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-4xl text-black dark:text-white">{timeline}</span>
                <span className="transform transition-transform duration-200 text-black dark:text-white">
                  {openIndex === i ? '▲' : '▼'}
                </span>
              </button>

              {openIndex === i && (
                <div className="p-4 bg-[#efeee7] dark:bg-[#0e0e10] animate-in fade-in duration-500 space-y-6">
                  <div className="flex flex-wrap items-start gap-8 justify-center md:justify-start max-w-full">
                    {grouped[timeline].map((project, j) => (
                      <div
                        key={j}
                        className="flex flex-col items-left rounded-2xl border border-[#2e2e32] bg-[#efeee7] dark:bg-[#18181b] text-black dark:text-white p-4 w-full sm:w-[400px] md:w-[500px] h-[500px] shadow-xl hover:scale-[1.02] hover:shadow-green-600"
                      >
                        {project.video ? (
                          <video src={project.video} controls className="w-full h-80 rounded-lg object-cover mb-3" />
                        ) : (
                          <div className="relative w-full h-60 mb-3 rounded-lg overflow-hidden shadow-md">
                            <Image
                              src={project.image ?? '/memoji_full_2.png'}
                              alt={project.title}
                              fill
                              className="object-fill"
                            />
                          </div>
                        )}

                        <h3 className="text-2xl font-bold mb-3 text-left">
                          📌 <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
                            {project.title}
                          </a>
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 text-left mb-1">
                          {project.description}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic text-left mb-3">{project.timeline}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>

  )
}