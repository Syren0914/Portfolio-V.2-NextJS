// Provides a simple text entry with a link to the latest resume
export async function GET() {
  const link = (text: string, url: string) => `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`
  const text = `
Resume

  Latest PDF: ${link('Erdene Batbayar Resume 2025.pdf', 'https://erdene.dev/Erdene%20Batbayar%20Resume%202025.pdf')}
  Site:       ${link('erdene.dev', 'https://erdene.dev')}

Tip: add ?color=off to disable colors.
`
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}


