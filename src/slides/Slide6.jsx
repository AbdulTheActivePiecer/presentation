import { motion } from 'framer-motion'
import { GitBranch, Bot, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import Sources from '../components/Sources'

const sources = [
  { label: 'Orkes — Agents vs Workflows', url: 'https://orkes.io/blog/agentic-ai-explained-agents-vs-workflows/' },
  { label: 'RapidCanvas — Agentic AI', url: 'https://www.rapidcanvas.ai/blogs/agentic-ai-vs-workflow-automation-what-enterprises-need-to-know' },
  { label: 'RelevanceAI — Definitive Guide', url: 'https://relevanceai.com/blog/the-definitive-guide-understanding-ai-agents-vs-ai-workflows' },
  { label: 'Make — AI Agents explained', url: 'https://www.make.com/en/blog/the-difference-between-ai-agents-and-agentic-automation' },
]

const workflowPoints = [
  'Predefined steps & rules',
  'Linear, deterministic flow',
  'Triggers → Actions → Done',
  'No decision-making at runtime',
  'Examples: Activepieces, Zapier, Make, n8n',
]

const agentPoints = [
  'Dynamic, goal-driven reasoning',
  'Adapts based on context & results',
  'Plans, acts, observes, replans',
  'Makes decisions autonomously',
  'Examples: Claude Agents, AutoGPT',
]

export default function Slide6() {
  return (
    <div className="slide bg-[#050914]">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] blob-purple -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] blob-cyan translate-x-1/2 -translate-y-1/2 opacity-60" />

      {/* Screenshot background strip */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full px-16 flex flex-col gap-7">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-pink-500/10 border border-pink-500/25 text-pink-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Automation Paradigms
            </span>
          </motion.div>
          <div className="flex gap-3 items-end">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="font-space text-5xl font-bold text-white leading-none tracking-tight">
              Workflow
            </motion.h1>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="font-space text-5xl font-bold text-white/20 leading-none">vs</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="font-space text-5xl font-bold leading-none tracking-tight gradient-text-warm">
              Agentic
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="font-space text-5xl font-bold text-white leading-none tracking-tight">
              Automation
            </motion.h1>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Workflow column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="glass rounded-2xl p-6 flex flex-col gap-5 border border-violet-500/15"
            style={{ boxShadow: '0 0 40px rgba(139,92,246,0.08)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Workflow Automation</p>
                <p className="text-white/35 text-xs">Rule-based execution</p>
              </div>
            </div>

            <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
              {['Trigger', 'Step 1', 'Step 2', 'Done'].map((s, i, arr) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="text-xs font-medium text-violet-300/70 px-2 py-1 rounded bg-violet-500/10">{s}</span>
                  {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-white/20" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              {workflowPoints.map((p, i) => (
                <motion.div key={p} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <p className="text-white/60 text-sm">{p}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-white/5">
              <p className="text-white/25 text-xs italic">"If X happens, do Y. Always."</p>
            </div>
          </motion.div>

          {/* Agentic column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.6 }}
            className="glass rounded-2xl p-6 flex flex-col gap-5 border border-orange-500/15"
            style={{ boxShadow: '0 0 40px rgba(251,146,60,0.08)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center">
                <Bot className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Agentic Automation</p>
                <p className="text-white/35 text-xs">Goal-driven decision making</p>
              </div>
            </div>

            <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
              {['Goal', 'Plan', 'Act', 'Observe', 'Adapt'].map((s, i, arr) => (
                <div key={s} className="flex items-center gap-1.5">
                  <span className="text-xs font-medium text-orange-300/70 px-2 py-1 rounded bg-orange-500/10">{s}</span>
                  {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-white/20" />}
                </div>
              ))}
              <span className="text-orange-400/40 text-xs ml-1">↺</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {agentPoints.map((p, i) => (
                <motion.div key={p} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.48 + i * 0.07, duration: 0.5 }} className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-white/60 text-sm">{p}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-3 border-t border-white/5">
              <p className="text-white/25 text-xs italic">"Reach goal Y. Figure out how."</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl glass border border-white/5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-orange-400" />
          <p className="text-white/40 text-sm">
            Workflow automation is about <span className="text-white/70 font-medium">execution</span>.
            Agentic AI is about <span className="text-white/70 font-medium">decision-making</span>.
            The last decade was about automating the <em>what</em>. The next is about the <em>why</em>.
          </p>
        </motion.div>
      </div>
      <Sources links={sources} />
    </div>
  )
}
