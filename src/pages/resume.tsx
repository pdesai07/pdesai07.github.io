export default function Resume() {
  return (
    <div className="bg-[#121215] min-h-screen border border-[#2c2c32] rounded-2xl shadow-xl p-10 w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        className="rounded-xl border border-[#2e2e32]"
      />
    </div>
  )
}