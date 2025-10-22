// Simple text contact card for terminal users
export async function GET() {
  const link = (text: string, url: string) => `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`
  const text = `
Contact

  Email:    erdene.batbayar@gmail.com
  Website:  ${link('erdene.dev', 'https://erdene.dev')}
  GitHub:   ${link('github.com/syren0914', 'https://github.com/syren0914')}
  LinkedIn: ${link('linkedin.com/in/erdenebatbayar', 'https://linkedin.com/in/erdenebatbayar')}

Tip: add ?color=off to disable colors.
`
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}


