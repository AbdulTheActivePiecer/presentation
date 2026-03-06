import { motion } from 'framer-motion'
import Sources from '../components/Sources'

const sources = [
  { label: 'OpenAI GPT-4', url: 'https://openai.com/research/gpt-4' },
  { label: 'OpenAI o1', url: 'https://openai.com/o1' },
  { label: 'TIME — AI 2025', url: 'https://time.com/7341939/ai-developments-2025-trump-china/' },
  { label: 'Simon Willison — Year in LLMs', url: 'https://simonwillison.net/2025/Dec/31/the-year-in-llms/' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const milestones = [
  { year: '2023', label: 'GPT-4 launches', sub: 'Multimodal reasoning at scale', color: 'from-violet-500 to-purple-600' },
  { year: '2024', label: 'o1 & reasoning models', sub: 'Chain-of-thought becomes mainstream', color: 'from-sky-500 to-cyan-600' },
  { year: '2025', label: 'Agents go live', sub: 'AI moves from chat to action', color: 'from-emerald-500 to-teal-600' },
]

export default function Slide1() {
  return (
    <div className="slide bg-[#050914]">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] blob-purple -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] blob-cyan translate-x-1/3 translate-y-1/3" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-16 flex flex-col gap-12">
        {/* Top tag */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            AI Overview
          </span>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <motion.h1 {...fadeUp(0.1)} className="font-space text-7xl font-bold text-white leading-none tracking-tight">
            The AI
          </motion.h1>
          <motion.h1 {...fadeUp(0.18)} className="font-space text-7xl font-bold leading-none tracking-tight gradient-text">
            Explosion
          </motion.h1>
          <motion.p {...fadeUp(0.28)} className="text-lg text-white/50 mt-2 max-w-lg">
            In just a few years, AI went from a research curiosity to the most transformative technology in a generation.
          </motion.p>
        </div>

        {/* Milestone timeline */}
        <div className="flex gap-5">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              {...fadeUp(0.35 + i * 0.1)}
              className="flex-1 glass rounded-2xl p-6 flex flex-col gap-3 hover:bg-white/[0.06] transition-colors duration-300"
            >
              <div className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${m.color} text-white`}>
                {m.year}
              </div>
              <p className="text-white font-semibold text-lg leading-snug">{m.label}</p>
              <p className="text-white/45 text-sm">{m.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div {...fadeUp(0.65)} className="flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-white/30 text-sm font-medium tracking-wide">$200B+ invested in AI in 2024 alone</p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
      <Sources links={sources} />
    </div>
  )
}
