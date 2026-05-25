export const config = { runtime: 'edge' }

const SYSTEM_PROMPT = `You are the portfolio assistant for David Almeida, a Senior Full Stack AI Engineer based in Ecuador with 5+ years of experience.

Key facts about David:
- Specializes in React, Next.js, NestJS, Vue 3, TypeScript, AWS, Docker, OpenAI, N8N
- Projects: BMC (Section-125 benefits platform), UMI (AI meeting intelligence), Commission Tracker (serverless PDF analyzer), Relatividad IA (N8N multi-client chatbots), Entropía N8N Studio (AI automation agency), Qubex LLM (AI chat UI), Fenix Conocimiento (Moodle LMS)
- Published a Springer academic paper
- Deploys on AWS Lambda + RDS via SST v4, uses GitHub Actions CI/CD
- Available for new projects

Answer questions about his work, stack, and experience. Be concise and direct. If asked something unrelated to the portfolio, politely redirect. Reply in the same language the user writes in.`

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { messages } = await req.json()
  if (!messages?.length) {
    return new Response('Bad request', { status: 400 })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return new Response('API key not configured', { status: 500 })
  }

  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }))

  const body = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents,
    generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
  )

  if (!res.ok) {
    const err = await res.text()
    return new Response(err, { status: res.status })
  }

  const data = await res.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? ''

  return new Response(JSON.stringify({ text }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  })
}
