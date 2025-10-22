// app/api/json/route.ts
export async function GET() {
    return Response.json({
      name: 'Erdene Batbayar',
      title: 'Fullstack Developer',
      website: 'https://erdene.dev',
      github: 'https://github.com/syren0914',
      linkedin: 'https://linkedin.com/in/erdenebatbayar',
      email: 'erdene.batbayar@gmail.com',
      address: 'Leesburg, VA, USA',
      city: 'Leesburg',
      state: 'Virginia',
      country: 'United States'
    })
  }
  