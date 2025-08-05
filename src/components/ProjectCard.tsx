import Image from 'next/image'


type ProjectCardProps = {
  title?: string
  subtitle?: string
  description?: string
  timeline?: string
  image?: string
  onClick?: () => void
}

export default function ProjectCard({
  title = '',
  subtitle = '',
  description = '',
  timeline = '',
  image = '',
  onClick,
}: ProjectCardProps) {
  const trimmedDesc =
    description.length > 220 ? description.slice(0, 220) + '...' : description

  return (
    <div
      className="bg-white dark:bg-[#18181b] text-black dark:text-white border border-[#dcdad2] dark:border-[#2e2e32] rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-xl hover:scale-[1.01] transition transform duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="md:w-1/3 h-[200px] md:h-auto relative">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        )}
      </div>

      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          {subtitle && <p className="text-sm opacity-80 mb-1">{subtitle}</p>}
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{trimmedDesc}</p>
        </div>

        {timeline && (
          <p className="text-xs mt-4 text-gray-500 dark:text-gray-400">{timeline}</p>
        )}
      </div>
    </div>
  )
}
