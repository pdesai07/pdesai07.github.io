import { useState } from 'react'
import Image from 'next/image'

type Publication = {
  image: string
  title: string
  authors: string
  abstract: string
  link?: string
}

interface PublicationOverlayCardProps {
  pub: Publication
}

export default function PublicationOverlayCard({ pub }: PublicationOverlayCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="
          cursor-pointer flex flex-col sm:flex-row items-start gap-4 sm:gap-6
          bg-[#f1f0e9] dark:bg-[#18181b] rounded-xl p-4 sm:p-6
          border border-[#dcdad2] dark:border-[#2e2e32]
          shadow-lg hover:scale-[1.03] sm:hover:scale-[1.05] transition-transform duration-200
        "
      >
        <img
          src={pub.image}
          alt={pub.title}
          className="rounded-md w-full sm:w-[250px] h-[180px] object-cover"
        />

        <div className="flex flex-col">
          <h2 className="text-xl sm:text-3xl font-semibold mb-2">{pub.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-xl mt-auto">
            {pub.authors}
          </p>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-3 sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="
              bg-[#f1f0e9] dark:bg-[#18181b] w-full max-w-lg sm:max-w-3xl
              rounded-2xl p-4 sm:p-6 relative text-black dark:text-white
              max-h-[90vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-xl text-gray-400 hover:text-red-400"
            >
              ✕
            </button>

            {/* Image */}
            <Image
              src={pub.image ?? '/fallback.jpg'}
              alt={pub.title}
              width={500}
              height={300}
              className="w-full h-[200px] sm:h-[300px] object-cover rounded-xl mb-6"
              unoptimized
            />

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl mb-2 font-semibold">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {pub.title}
              </a>
            </h2>

            <p className="text-gray-500 text-sm sm:text-xl mb-4">{pub.authors}</p>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {pub.abstract}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
