import { motion } from 'framer-motion'
import { Plug, Eye, Mic, Code2, Image, ChevronRight } from 'lucide-react'
import Sources from '../components/Sources'

const sources = [
  { label: 'MCP Protocol', url: 'https://modelcontextprotocol.io' },
  { label: 'Anthropic MCP announcement', url: 'https://www.anthropic.com/news/model-context-protocol' },
  { label: 'GPT-4o multimodal', url: 'https://openai.com/gpt-4o' },
  { label: 'Gemini 2.0', url: 'https://deepmind.google/technologies/gemini/gemini-2/' },
]

const mcpFeatures = [
  'Connect AI to any database or API',
  'Universal standard — like USB-C for AI',
  'Enables tool use, file access, web browsing',
  'Adopted by Claude, Cursor, Zed, and more',
]

const modalities = [
  { icon: Eye, label: 'Vision', desc: 'Read images, diagrams, screenshots', color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { icon: Mic, label: 'Voice', desc: 'Speak and listen in real time', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Code2, label: 'Code', desc: 'Write, run, debug entire codebases', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Image, label: 'Generation', desc: 'Create images, video, and documents', color: 'text-pink-400', bg: 'bg-pink-500/10' },
]

export default function Slide4() {
  return (
    <div className="slide bg-[#050914]">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] blob-purple -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-cyan translate-x-1/3 -translate-y-1/3" />

      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050914]/80 via-transparent to-[#050914]/80" />

      <div className="relative z-10 max-w-6xl w-full px-16 flex flex-col gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-pink-500/10 border border-pink-500/25 text-pink-300">
            <Plug className="w-3 h-3" />
            Breakthrough #3
          </span>
        </motion.div>

        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="font-space text-6xl font-bold text-white leading-none tracking-tight">
            The New
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }} className="font-space text-6xl font-bold leading-none tracking-tight gradient-text-warm">
            AI Stack
          </motion.h1>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* MCP card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }} className="glass rounded-2xl p-6 flex flex-col gap-4 border border-pink-500/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center">
                <Plug className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Model Context Protocol</p>
                <p className="text-white/35 text-xs">By Anthropic · Nov 2024</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              A universal open standard so AI models can connect to tools, APIs, and data sources — regardless of the model or platform.
            </p>
            <div className="flex flex-col gap-2">
              {mcpFeatures.map((f, i) => (
                <motion.div key={f} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <p className="text-white/55 text-xs">{f}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Multimodal card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.6 }} className="flex flex-col gap-4">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">Multimodal Capabilities</p>
            <div className="grid grid-cols-2 gap-3">
              {modalities.map((m, i) => {
                const Icon = m.icon
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 + i * 0.08, duration: 0.5 }}
                    className="glass rounded-xl p-4 flex flex-col gap-2 border border-white/5"
                  >
                    <div className={`w-8 h-8 rounded-lg ${m.bg} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${m.color}`} />
                    </div>
                    <p className="text-white/80 text-sm font-medium">{m.label}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{m.desc}</p>
                  </motion.div>
                )
              })}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass rounded-xl px-4 py-3 border border-white/5">
              <p className="text-white/35 text-xs">GPT-4o, Gemini 2.0, Claude 3.5, and Llama 3 all ship multimodal as a default — not a premium add-on.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Sources links={sources} />
    </div>
  )
}
