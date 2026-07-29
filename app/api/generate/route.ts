import { NextResponse } from 'next/server'
const TITLES = [
  'I Found CURSED House in Brookhaven at 3AM',
  'This Doors Entity is BANNED in Roblox',
  'I Survived 24 Hours in Evade With NO Sprinting',
  'The SECRET Ending of Doors Floor 2',
  'Brookhaven Admins Are Hiding This House',
]
const HOOKS = [
  'I should NOT have entered this house...',
  'Roblox deleted this monster for a reason...',
  'This challenge is impossible but I tried...',
  'Only 1% of players found this...',
  'Admins dont want you to know this...',
]
export async function POST(){
  const i = Math.floor(Math.random()*TITLES.length)
  // If OPENAI_API_KEY present, you could call OpenAI here
  const title = TITLES[i]
  const hook = HOOKS[i]
  const script = `HOOK (0-3s): ${hook}\n\nSTORY (3-25s): So I was playing Brookhaven and found this weird house that wasnt on the map. I went inside and the lights flickered. Then I heard footsteps upstairs but I was alone in server.\n\nCTA (25-30s): Follow for Part 2 where I show what was upstairs. Comment if you want seed.\n\nHashtags: #roblox #brookhaven #shorts #viral #doors`
  return NextResponse.json({ title, hook, script, youtube: { title: `${title} #shorts`, description: `${hook}\n\n${script}\n\n#roblox #brookhaven #robloxshorts`, tags: ['roblox','brookhaven','shorts'] }, scenes: [{ time:'0-3s', visual:'Brookhaven house exterior night' }, { time:'3-15s', visual:'Walking inside, lights flicker' }, { time:'15-25s', visual:'Upstairs door creaks' }] })
}
