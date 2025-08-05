import { useState } from 'react'
import Image from 'next/image'

type Publication = {
  image: string;
  title: string;
  authors: string;
  abstract: string;
  link?: string;
};

interface PublicationOverlayCardProps {
  pub: Publication;
}

export default function PublicationOverlayCard({ pub }: PublicationOverlayCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Closed Card */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer flex flex-row items-start gap-6 bg-[#f1f0e9] dark:bg-[#18181b] rounded-xl p-6 border border-[#dcdad2] dark:border-[#2e2e32] shadow-lg hover:scale-[1.05] hover:shadow-green-600 transition-transform duration-200"
      >
        <img src={pub.image} alt={pub.title} className="rounded-md w-[250px] h-[150px] object-cover" />
        <div>
          <h2 className="text-3xl mb-1">{pub.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-2xl mt-16">{pub.authors}</p>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
          onClick={() => setOpen(false)} // 👈 closes on background click
        >
            <div
              className="bg-[#f1f0e9] dark:bg-[#18181b] w-full max-w-4xl md:w-[50vw] rounded-2xl p-6 relative text-black dark:text-white max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-0 right-2 text-xl text-gray-400 hover:text-red-400"
              >
                ✕
              </button>

              {/* Image */}
              <Image
                src={pub.image ?? '/fallback.jpg'}
                alt={pub.title}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-xl mb-6"
                unoptimized // required for `output: 'export'`
              />

              {/* Text */}
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl mb-2 underline block"
                >
                  {pub.title}
                </a>
              ) : (
                <h2 className="text-5xl mb-2">{pub.title}</h2>
              )}
              <p className="text-xl text-gray-500 mb-4">{pub.authors}</p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{pub.abstract}</p>
              
            </div>
        </div>   
      )}
    </>
  )
}
