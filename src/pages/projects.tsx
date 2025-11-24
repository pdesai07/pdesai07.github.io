'use client'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import projectData from '@/data/projectData'

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [animationParent] = useAutoAnimate()

  const grouped = projectData.reduce((acc: { [key: string]: typeof projectData }, project) => {
    if (!acc[project.timeline]) acc[project.timeline] = []
    acc[project.timeline].push(project)
    return acc
  }, {} as { [key: string]: typeof projectData })

  const timelines = Object.keys(grouped)

  return (
    <Layout>
      <div className="max-w-9xl mx-auto px-4 pt-4 sm:pt-4 md:pt-4">
        <h1 className="text-4xl md:text-5xl mb-10 border-b border-gray-700 pb-2">
          My Projects
        </h1>

        <div className="space-y-20" ref={animationParent}>
          {timelines.map((timeline, i) => (
            <div key={timeline} className="border-b border-gray-300 dark:border-gray-800 rounded-lg">

              {/* ------------ TIMELINE HEADER ---------------- */}
              <button
                className="w-full flex justify-between items-center px-4 py-3
                           bg-[#efeee7] hover:bg-[#e0ded6]
                           dark:bg-[#0e0e10] dark:hover:bg-[#222]
                           text-xl md:text-2xl transition-all"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-3xl md:text-4xl">{timeline}</span>
                <span className="transition-transform">{openIndex === i ? '▲' : '▼'}</span>
              </button>

              {/* ------------ PROJECT CARDS ---------------- */}
              {openIndex === i && (
                <div className="p-4 bg-[#efeee7] dark:bg-[#0e0e10] space-y-6 animate-in fade-in duration-500">

                  <div className="flex flex-wrap items-start gap-8 justify-center md:justify-start max-w-full">
                    {grouped[timeline].map((project, j) => (
                      <div
                        key={j}
                        className="flex flex-col rounded-2xl border border-[#2e2e32]
                                   bg-[#efeee7] dark:bg-[#18181b]
                                   text-black dark:text-white
                                   p-4 w-full sm:w-[350px] md:w-[420px] lg:w-[450px]
                                   max-h-[80vh] overflow-y-auto  /* KEY FIX */
                                   shadow-xl hover:scale-[1.02] hover:shadow-green-600
                                   transition-all duration-300"
                      >
                        {/* ---- Image or Video ---- */}
                        {project.video ? (
                          <video src={project.video} controls className="w-full h-60 rounded-lg object-cover mb-3" />
                        ) : (
                          <div className="relative w-full min-h-[250px] max-h-[300px] mb-3 rounded-lg overflow-hidden shadow-md">
                            <Image
                              src={project.image ?? '/memoji_full_2.png'}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        {/* ---- TITLE ---- */}
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          📌 <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
                            {project.title}
                          </a>
                        </h3>

                        {/* ---- DESCRIPTION ---- */}
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                          {project.description}
                        </p>

                        {/* ---- TIMELINE ---- */}
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                          {project.timeline}
                        </p>
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
