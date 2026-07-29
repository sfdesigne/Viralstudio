import Link from 'next/link'
export default function Home(){
  return (
    <main className="min-h-screen">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500"></div><span className="font-black text-xl">VIRAL STUDIO</span></div>
        <Link href="/dashboard" className="btn-primary">Open Dashboard</Link>
      </nav>
      <section className="text-center py-20 px-6 max-w-5xl mx-auto">
        <div className="inline-flex glass px-4 py-2 rounded-full text-sm mb-6 gap-2"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Autopilot LIVE - 5x per day</div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Create Viral Roblox Videos <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">5x Per Day</span> on Autopilot</h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">AI generates scripts, voice, subtitles, scenes and auto-publishes to YouTube Shorts at 10am, 1pm, 4pm, 7pm, 10pm. Zero editing.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">Start Generating Free</Link>
          <a href="#how" className="glass px-8 py-4 rounded-xl font-semibold">How it works</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="glass p-6 rounded-2xl"><div className="text-3xl font-black">2.3M+</div><div className="text-sm text-gray-400">Views Generated</div></div>
          <div className="glass p-6 rounded-2xl"><div className="text-3xl font-black">5x</div><div className="text-sm text-gray-400">Per Day Autopilot</div></div>
          <div className="glass p-6 rounded-2xl"><div className="text-3xl font-black">15s</div><div className="text-sm text-gray-400">To Generate</div></div>
          <div className="glass p-6 rounded-2xl"><div className="text-3xl font-black">0</div><div className="text-sm text-gray-400">Editing Needed</div></div>
        </div>
      </section>
      <section id="how" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        <div className="glass p-8 rounded-3xl"><h3 className="font-bold text-xl mb-3">1. AI Writes Viral Scripts</h3><p className="text-gray-400">Hook + Story + CTA optimized for 100% retention in Brookhaven, Doors, Evade.</p></div>
        <div className="glass p-8 rounded-3xl"><h3 className="font-bold text-xl mb-3">2. Auto Voice + Subtitles</h3><p className="text-gray-400">ElevenLabs voice + burned-in captions + gameplay scenes auto-synced.</p></div>
        <div className="glass p-8 rounded-3xl"><h3 className="font-bold text-xl mb-3">3. Auto-Publish 5x Daily</h3><p className="text-gray-400">Publishes at 10am, 1pm, 4pm, 7pm, 10pm to YouTube Shorts via API.</p></div>
      </section>
    </main>
  )
}
