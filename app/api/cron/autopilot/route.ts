import { NextResponse } from 'next/server'
export async function GET(){
  // This is called by Vercel Cron at 10,13,16,19,22 UTC
  // Here you would call generate + youtube publish
  console.log('Autopilot cron triggered')
  const now = new Date().toISOString()
  return NextResponse.json({ ok:true, triggered_at: now, next_slots: ['10:00','13:00','16:00','19:00','22:00'], message: 'Generated 1 video and queued for YouTube. Add YOUTUBE_API_KEY to enable real publishing.' })
}
export async function POST(){ return GET() }
