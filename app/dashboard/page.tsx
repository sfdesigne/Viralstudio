'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
type Idea = { id:string, title:string, hook:string, script:string, status:string, views:string, time:string }
const MOCK: Idea[] = [
  { id:'1', title:'I Found CURSED House in Brookhaven at 3AM', hook:'I should NOT have entered this house...', script:'Hook: You wont believe... Story: ...', status:'Published', views:'24.5K', time:'10:00 AM' },
  { id:'2', title:'This Doors Entity is BANNED in Roblox', hook:'Roblox deleted this monster...', script:'Hook: ...', status:'Scheduled', views:'-', time:'1:00 PM' },
]
export default function Dashboard(){
  const [ideas,setIdeas]=useState<Idea[]>(MOCK)
  const [loading,setLoading]=useState(false)
  async function generate(){
    setLoading(true)
    try{
      const r=await fetch('/api/generate',{method:'POST'})
      const d=await r.json()
      const newIdea:Idea={id:Date.now().toString(), title:d.title, hook:d.hook, script:d.script||d.title, status:'Ready', views:'-', time:'Next slot'}
      setIdeas([newIdea,...ideas])
    }catch(e){ alert('Generated! (mock mode)') }
    setLoading(false)
  }
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div><h1 className="text-3xl font-black">Dashboard</h1><p className="text-gray-400">Autopilot: 5x per day • Next: 1:00 PM</p></div>
        <Link href="/" className="glass px-4 py-2 rounded-xl">← Home</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass p-6 rounded-2xl"><div className="text-gray-400 text-sm">Today Generated</div><div className="text-3xl font-bold">2/5</div><div className="w-full h-2 bg-white/10 rounded-full mt-2"><div className="h-2 bg-violet-500 rounded-full" style={{width:'40%'}}></div></div></div>
        <div className="glass p-6 rounded-2xl"><div className="text-gray-400 text-sm">Total Views</div><div className="text-3xl font-bold">127K</div><div className="text-green-400 text-sm">+23% today</div></div>
        <div className="glass p-6 rounded-2xl"><div className="text-gray-400 text-sm">Autopilot</div><div className="text-xl font-bold text-green-400">● LIVE</div><div className="text-xs text-gray-500">10h,13h,16h,19h,22h</div></div>
        <div className="glass p-6 rounded-2xl"><div className="text-gray-400 text-sm">Queue</div><div className="text-3xl font-bold">3</div><div className="text-xs text-gray-500">Ready to publish</div></div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold">Video Queue</h2><button onClick={generate} disabled={loading} className="btn-primary">{loading?'Generating...':' + Generate New Pack'}</button></div>
          <div className="space-y-3">
            {ideas.map(idea=>(
              <div key={idea.id} className="glass p-5 rounded-2xl flex justify-between items-center card-hover">
                <div><div className="font-bold">{idea.title}</div><div className="text-sm text-gray-400">{idea.hook}</div><div className="flex gap-2 mt-2"><span className="text-xs glass px-2 py-1 rounded-full">{idea.time}</span><span className={`text-xs px-2 py-1 rounded-full ${idea.status==='Published'?'bg-green-500/20 text-green-400':'bg-yellow-500/20 text-yellow-400'}`}>{idea.status}</span></div></div>
                <div className="text-right"><div className="font-bold">{idea.views}</div><div className="text-xs text-gray-500">views</div></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="glass p-6 rounded-2xl mb-4"><h3 className="font-bold mb-3">Schedule (5x/day)</h3><div className="space-y-2 text-sm"><div className="flex justify-between"><span>10:00 AM</span><span className="text-green-400">Done</span></div><div className="flex justify-between"><span>1:00 PM</span><span className="text-yellow-400">Next</span></div><div className="flex justify-between"><span>4:00 PM</span><span className="text-gray-500">Queued</span></div><div className="flex justify-between"><span>7:00 PM</span><span className="text-gray-500">Queued</span></div><div className="flex justify-between"><span>10:00 PM</span><span className="text-gray-500">Queued</span></div></div></div>
          <div className="glass p-6 rounded-2xl"><h3 className="font-bold mb-3">Connect YouTube</h3><p className="text-sm text-gray-400 mb-3">Add YOUTUBE_API_KEY in Vercel Env to auto-publish.</p><button className="w-full glass py-2 rounded-xl">Connect</button></div>
        </div>
      </div>
    </div>
  )
}
