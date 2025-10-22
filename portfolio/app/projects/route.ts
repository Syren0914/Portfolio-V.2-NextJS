// Text-based directory of projects for terminal users
export async function GET() {
  const link = (text: string, url: string) => `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`
  const text = `
Projects Directory

  - ${link('TalkGroup.AI', 'https://talkgroup.ai')}        AI-powered group collaboration assistant
  - ${link('Looplet', 'https://looplet.app')}         Automation workflows for indie builders
  - ${link('Boundary-AU', 'https://boundary.au')}         Data tooling for creative coding

More: ${link('github.com/syren0914', 'https://github.com/syren0914')}
JSON:  curl erdene.dev/api/projects
`
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}


