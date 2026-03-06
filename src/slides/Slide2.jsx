import { motion } from 'framer-motion'
import { Brain, ArrowRight } from 'lucide-react'
import Sources from '../components/Sources'

const sources = [
  { label: 'OpenAI o1', url: 'https://openai.com/o1' },
  { label: 'OpenAI o3', url: 'https://openai.com/index/introducing-o3-and-o4-mini/' },
  { label: 'DeepSeek-R1', url: 'https://api-docs.deepseek.com/news/news250120' },
  { label: 'Simon Willison — Year in LLMs', url: 'https://simonwillison.net/2025/Dec/31/the-year-in-llms/' },
  { label: 'AIME benchmark scores', url: 'https://blog.promptlayer.com/openai-o3-vs-deepseek-r1-an-analysis-of-reasoning-models/' },
  { label: 'GPQA (PhD science)', url: 'https://arxiv.org/abs/2311.12022' },
  { label: 'MMLU (57 subjects)', url: 'https://arxiv.org/abs/2009.03300' },
  { label: 'HumanEval (code)', url: 'https://arxiv.org/abs/2107.03374' },
]

const steps = [
  { label: 'Problem', color: 'bg-violet-500/20 border-violet-500/30 text-violet-300' },
  { label: 'Think', color: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' },
  { label: 'Reflect', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
  { label: 'Reason', color: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300' },
  { label: 'Answer', color: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' },
]

const models = [
  {
    name: 'OpenAI o1',
    date: 'Sep 2024',
    desc: 'First model to "think before answering". Set a new benchmark in math, science, and coding.',
    cost: 'Proprietary',
    score: '78%',
    initials: 'o1',
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    name: 'DeepSeek-R1',
    date: 'Jan 2025',
    desc: "Matched o1 performance. Trained for ~$6M. Wiped $500B off Nvidia's market cap on launch day.",
    cost: '~$6M to train',
    score: '79.8%',
    initials: 'DS',
    gradient: 'from-sky-600 to-cyan-600',
  },
  {
    name: 'OpenAI o3',
    date: 'Apr 2025',
    desc: 'Near-human performance on ARC-AGI. Reasoning became the dominant AI architecture paradigm.',
    cost: 'Proprietary',
    score: '96.7%',
    initials: 'o3',
    gradient: 'from-emerald-600 to-teal-600',
  },
]

export default function Slide2() {
  return (
    <div className="slide bg-[#050914]">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] blob-purple -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] blob-cyan translate-x-1/4 translate-y-1/4" />

      {/* Background screenshot-style image strip */}
      <div
        className="absolute right-0 top-0 w-[38%] h-full opacity-[0.06]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute right-0 top-0 w-[38%] h-full bg-gradient-to-l from-transparent to-[#050914]" />

      <div className="relative z-10 max-w-6xl w-full px-16 flex flex-col gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 border border-violet-500/25 text-violet-300">
            <Brain className="w-3 h-3" />
            Breakthrough #1
          </span>
        </motion.div>

        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="font-space text-6xl font-bold text-white leading-none tracking-tight">
            Reasoning
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }} className="font-space text-6xl font-bold leading-none tracking-tight gradient-text">
            Models
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28, duration: 0.6 }} className="text-white/45 text-base mt-3 max-w-lg">
            AI stopped just predicting the next word — it started <em>thinking step by step</em> before answering.
          </motion.p>
        </div>

        {/* Chain of thought visual */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${s.color}`}>{s.label}</div>
              {i < steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-white/20" />}
            </div>
          ))}
        </motion.div>

        {/* Benchmark explanation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="glass rounded-xl px-4 py-3 border border-white/5 flex flex-col gap-1.5">
          <p className="text-white/50 text-xs">
            Scores below are on <span className="text-white/80 font-semibold">AIME 2024</span> — a university-level math competition that tests multi-step reasoning. Higher = better problem solving.
          </p>
          <p className="text-white/30 text-xs">
            <span className="text-amber-400/70 font-medium">Note:</span> AIME only measures <span className="text-white/50">math & logical reasoning</span> — not medical knowledge, language, coding, or science. Other benchmarks cover those: <span className="text-white/50">GPQA</span> (PhD science), <span className="text-white/50">MMLU</span> (57 subjects incl. medicine & law), <span className="text-white/50">HumanEval</span> (code).
          </p>
        </motion.div>

        {/* Model cards */}
        <div className="flex flex-col gap-3">
          {models.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.42 + i * 0.1, duration: 0.55 }}
              className="glass rounded-xl px-5 py-4 flex items-center gap-5 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${m.gradient} flex items-center justify-center shrink-0`}>
                <span className="text-white text-xs font-bold tracking-tight">{m.initials}</span>
              </div>
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-white font-semibold text-sm">{m.name}</p>
                  <span className="text-white/25 text-xs">{m.date}</span>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">{m.desc}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-2xl font-bold gradient-text">{m.score}</p>
                <p className="text-white/40 text-[10px] font-semibold">AIME 2024</p>
              </div>
              <div className="shrink-0 text-right w-24">
                <p className="text-white/40 text-xs">{m.cost}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Sources links={sources} />
    </div>
  )
}
