// Mirror of /api/json at a cleaner top-level path
export async function GET() {
  return Response.json({
    name: 'Erdene Batbayar',
    title: 'Software Engineer',
    website: 'https://erdene.dev',
    github: 'https://github.com/syren0914',
    linkedin: 'https://linkedin.com/in/erdenebatbayar'
  })
}


