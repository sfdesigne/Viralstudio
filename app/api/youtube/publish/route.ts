import { NextResponse } from 'next/server'
export async function POST(req: Request){
  const body = await req.json().catch(()=>({}))
  // Placeholder - integrate YouTube Data API v3 here
  // Requires YOUTUBE_CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN
  return NextResponse.json({ ok:false, mock:true, message:'YouTube publishing not configured. Add env YOUTUBE_API_KEY. Received:', body, next_step:'Add YouTube API credentials in Vercel Env Variables' })
}
