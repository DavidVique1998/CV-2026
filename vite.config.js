import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const SYSTEM_PROMPT = `You are the portfolio assistant for David Almeida, a Senior Full Stack AI Engineer based in Ecuador with 5+ years of experience.

Key facts about David:
- Specializes in React, Next.js, NestJS, Vue 3, TypeScript, AWS, Docker, OpenAI, N8N
- Projects: BMC (Section-125 benefits platform), UMI (AI meeting intelligence), Commission Tracker (serverless PDF analyzer), Relatividad IA (N8N multi-client chatbots), Entropía N8N Studio (AI automation agency), Qubex LLM (AI chat UI), Fenix Conocimiento (Moodle LMS)
- Published a Springer academic paper
- Deploys on AWS Lambda + RDS via SST v4, uses GitHub Actions CI/CD
- Available for new projects

Answer questions about his work, stack, and experience. Be concise and direct. If asked something unrelated to the portfolio, politely redirect. Reply in the same language the user writes in.`

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'api-dev-server',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.end('Method not allowed')
              return
            }

            const apiKey = env.GEMINI_API_KEY
            if (!apiKey) {
              res.statusCode = 500
              res.end(JSON.stringify({ text: 'GEMINI_API_KEY not set in .env' }))
              return
            }

            let body = ''
            req.on('data', (chunk) => { body += chunk })
            req.on('end', async () => {
              try {
                const { messages } = JSON.parse(body)
                const contents = messages.map((m) => ({
                  role: m.role === 'assistant' ? 'model' : 'user',
                  parts: [{ text: m.content }],
                }))

                const geminiRes = await fetch(
                  `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`,
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
                      contents,
                      generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
                    }),
                  }
                )

                const data = await geminiRes.json()
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No response'

                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ text }))
              } catch (e) {
                res.statusCode = 500
                res.end(JSON.stringify({ text: 'Error: ' + e.message }))
              }
            })
          })
        },
      },
    ],
  }
})
