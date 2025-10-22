// Returns a list of notable projects in JSON format
export async function GET() {
  return Response.json({
    projects: [
      {
        slug: 'talkgroup-ai',
        name: 'TalkGroup.AI',
        description: 'AI-powered group collaboration assistant',
        url: 'https://talkgroup.ai',
        tags: ['AI', 'SaaS', 'LLM']
      },
      {
        slug: 'looplet',
        name: 'Looplet',
        description: 'Automation workflows for indie builders',
        url: 'https://looplet.app',
        tags: ['Automation', 'SaaS']
      },
      {
        slug: 'boundary-au',
        name: 'Boundary-AU',
        description: 'Data tooling for creative coding',
        url: 'https://boundary.au',
        tags: ['Creative Tech', 'Tools']
      }
    ]
  })
}


