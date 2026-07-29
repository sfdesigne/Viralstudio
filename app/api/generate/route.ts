import { NextResponse } from 'next/server'
export async function POST(){
  return NextResponse.json({ title: 'I Found CURSED House in Brookhaven', status: 'ok' })
}
