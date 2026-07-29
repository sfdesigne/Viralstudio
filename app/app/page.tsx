import Link from 'next/link'
export default function Home(){
  return (
    <main style={{padding:40,textAlign:'center'}}>
      <h1 style={{fontSize:40,fontWeight:900}}>ROBLOX VIRAL STUDIO - FIXED</h1>
      <p>Build works with ZERO env keys. Set Root Directory to ./ and Framework to Next.js</p>
      <Link href="/dashboard" style={{display:'inline-block',marginTop:20,background:'#8B5CF6',padding:'12px 24px',borderRadius:12,color:'white'}}>Open Dashboard</Link>
    </main>
  )
}
