import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') || ''
  const isCurl = /curl|wget|httpie|fetch/i.test(ua)
  const { pathname, searchParams } = req.nextUrl

  if (isCurl && pathname === '/') {
    const link = (text: string, url: string) => `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`

    const output = `
\x1b[38;5;208m
      ___           ___          _____          ___           ___           ___     
     /  /\         /  /\        /  /::\        /  /\         /__/\         /  /\    
    /  /:/_       /  /::\      /  /:/\:\      /  /:/_        \  \:\       /  /:/_   
   /  /:/ /\     /  /:/\:\    /  /:/  \:\    /  /:/ /\        \  \:\     /  /:/ /\  
  /  /:/ /:/_   /  /:/~/:/   /__/:/ \__\:|  /  /:/ /:/_   _____\__\:\   /  /:/ /:/_ 
 /__/:/ /:/ /\ /__/:/ /:/___ \  \:\ /  /:/ /__/:/ /:/ /\ /__/::::::::\ /__/:/ /:/ /\
 \  \:\/:/ /:/ \  \:\/:::::/  \  \:\  /:/  \  \:\/:/ /:/ \  \:\~~\~~\/ \  \:\/:/ /:/
  \  \::/ /:/   \  \::/~~~~    \  \:\/:/    \  \::/ /:/   \  \:\  ~~~   \  \::/ /:/ 
   \  \:\/:/     \  \:\         \  \::/      \  \:\/:/     \  \:\        \  \:\/:/  
    \  \::/       \  \:\         \__\/        \  \::/       \  \:\        \  \::/   
     \__\/         \__\/                       \__\/         \__\/         \__\/    
\x1b[0m 

\x1b[38;5;244m┌──────────────────────────────────────────────────────────────┐\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;33mErdene Batbayar\x1b[0m  \x1b[2m— Developer & Builder\x1b[0m                      \x1b[38;5;244m│\x1b[0m
\x1B[38;5;244m│\x1B[0m  \x1B[36m${link('https://erdene.dev','https://erdene.dev')}\x1B[0m                                                 \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m└──────────────────────────────────────────────────────────────┘\x1b[0m


\x1b[38;5;244m┌────────────────────────────── About ──────────────────────────────────┐\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[36mHey, I’m Erdene — a full‑stack developer focused on AI, creative     \x1b[0m\x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[36mtechnology, and building tools that make an impact. This terminal    \x1b[0m\x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[36mview offers a quick, keyboard‑friendly way to explore my work.       \x1b[0m\x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m└───────────────────────────────────────────────────────────────────────┘\x1b[0m

\x1b[38;5;244m┌───────────────────────────── Links & Socials ──────────────────────┐\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;35mGitHub\x1b[0m    \x1b[38;5;244m│\x1b[0m  \x1b[36m${link('github.com/syren0914','https://github.com/syren0914')}\x1b[0m                                 \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;35mLinkedIn\x1b[0m  \x1b[38;5;244m│\x1b[0m  \x1b[36m${link('linkedin.com/in/erdenebatbayar','https://linkedin.com/in/erdenebatbayar')}\x1b[0m                       \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;35mWebsite\x1b[0m   \x1b[38;5;244m│\x1b[0m  \x1b[36m${link('erdene.dev','https://erdene.dev')}\x1b[0m                                           \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m└────────────────────────────────────────────────────────────────────┘\x1b[0m

\x1b[38;5;244m┌──────────────────────────── Recent Projects ───────────────────────┐\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[36mTalkGroup.AI\x1b[0m • \x1b[36mLooplet\x1b[0m • \x1b[36mBoundary‑AU\x1b[0m                              \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m└────────────────────────────────────────────────────────────────────┘\x1b[0m

\x1b[38;5;244m┌──────────────────────────────── Commands ───────────────────────────┐\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;32m$ curl erdene.dev\x1b[0m         \x1b[38;5;244m→\x1b[0m  This page                             \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;32m$ curl erdene.dev/json\x1b[0m    \x1b[38;5;244m→\x1b[0m  Portfolio data (JSON)                 \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;32m$ curl erdene.dev/projects\x1b[0m \x1b[38;5;244m→\x1b[0m  Project directory                    \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;32m$ curl erdene.dev/resume\x1b[0m   \x1b[38;5;244m→\x1b[0m  Resume link                          \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;32m$ curl erdene.dev/contact\x1b[0m  \x1b[38;5;244m→\x1b[0m  Contact details                      \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m│\x1b[0m  \x1b[1;32m$ curl erdene.dev/help\x1b[0m    \x1b[38;5;244m→\x1b[0m  CLI endpoints                         \x1b[38;5;244m│\x1b[0m
\x1b[38;5;244m└─────────────────────────────────────────────────────────────────────┘\x1b[0m
`

    const colorParam = (searchParams.get('color') || '').toLowerCase()
    const colorEnabled = !['off', '0', 'false', 'no'].includes(colorParam)
    const ansiRegex = /\x1b\[[0-9;]*m/g
    const finalOutput = colorEnabled ? output : output.replace(ansiRegex, '')

    return new NextResponse(finalOutput, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  return NextResponse.next()
}
