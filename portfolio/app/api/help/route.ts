export async function GET() {
  const text = `
Erdene Batbayar — Portfolio CLI

Usage:
  $ curl erdene.dev              → Summary page
  $ curl erdene.dev/help         → This help
  $ curl erdene.dev/json         → Basic profile JSON
  $ curl erdene.dev/projects     → Project directory (text)
  $ curl erdene.dev/api/projects → Project directory (JSON)
  $ curl erdene.dev/resume       → Resume link and info
  $ curl erdene.dev/contact      → Contact details

Flags:
  Add ?color=off to disable ANSI colors (supported on root and text pages)

Endpoints:
  /                              Root CLI overview
  /help                          CLI usage and endpoints
  /json                          Basic profile JSON
  /projects                      Text directory of projects
  /api/projects                  JSON projects listing
  /resume                        Resume link (text)
  /contact                       Contact details (text)
`
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
  