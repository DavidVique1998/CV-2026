import { useState, useRef, useEffect } from 'react'

function renderMd(text) {
  const lines = text.split('\n')
  const out = []
  let listItems = []

  const flushList = () => {
    if (listItems.length) {
      out.push(<ul key={`ul-${out.length}`}>{listItems}</ul>)
      listItems = []
    }
  }

  const parseInline = (str, key) => {
    const parts = str.split(/(\*\*[^*]+\*\*)/g)
    return (
      <span key={key}>
        {parts.map((p, i) =>
          p.startsWith('**') && p.endsWith('**')
            ? <strong key={i}>{p.slice(2, -2)}</strong>
            : p
        )}
      </span>
    )
  }

  lines.forEach((line, i) => {
    const bullet = line.match(/^[\*\-]\s+(.*)/)
    if (bullet) {
      listItems.push(<li key={i}>{parseInline(bullet[1], i)}</li>)
    } else {
      flushList()
      if (line.trim() === '') {
        out.push(<br key={i} />)
      } else {
        out.push(<p key={i}>{parseInline(line, i)}</p>)
      }
    }
  })
  flushList()
  return out
}

const SUGGESTIONS = [
  "What's your main stack?",
  "Tell me about UMI",
  "Are you available for hire?",
]

export default function ChatWidget({ lang = 'en' }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: lang === 'es' ? '¡Hola! Soy el asistente de David. ¿En qué te puedo ayudar?' : "Hi! I'm David's assistant. What would you like to know?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const send = async (text) => {
    const content = text.trim()
    if (!content || loading) return
    setInput('')
    const next = [...messages, { role: 'user', content }]
    setMessages(next)
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages([...next, { role: 'assistant', content: data.text }])
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Something went wrong. Try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = (e) => { e.preventDefault(); send(input) }

  return (
    <>
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="3" y1="3" x2="15" y2="15"/><line x1="15" y1="3" x2="3" y2="15"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <span className="chat-header-dot" />
            <strong>Ask David's AI</strong>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg--${m.role}`}>
                {m.role === 'assistant' ? renderMd(m.content) : m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-msg chat-msg--assistant chat-typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chat-suggestion" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}

          <form className="chat-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'es' ? 'Escribe aquí...' : 'Ask anything...'}
              disabled={loading}
            />
            <button className="chat-send" type="submit" disabled={loading || !input.trim()}>→</button>
          </form>
        </div>
      )}
    </>
  )
}
