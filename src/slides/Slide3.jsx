import { motion } from 'framer-motion'
import { GitFork, DollarSign, TrendingDown } from 'lucide-react'
import Sources from '../components/Sources'

const sources = [
  { label: 'Meta Llama 3', url: 'https://ai.meta.com/llama/' },
  { label: 'DeepSeek V3', url: 'https://api-docs.deepseek.com/news/news1226' },
  { label: 'Mistral AI', url: 'https://mistral.ai' },
  { label: 'HuggingFace Open LLM', url: 'https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard' },
]

const models = [
  { name: 'Llama 3.1 405B', org: 'Meta', params: '405B', cost: 'Free', badge: 'Open Weight', badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/20' },
  { name: 'DeepSeek V3', org: 'DeepSeek', params: '685B MoE', cost: '$5.5M', badge: 'Open Weight', badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' },
  { name: 'Mistral Large', org: 'Mistral AI', params: '123B', cost: 'Free', badge: 'Open Weight', badgeColor: 'bg-violet-500/15 text-violet-300 border-violet-500/20' },
  { name: 'DeepSeek-R1', org: 'DeepSeek', params: '671B', cost: '~$6M', badge: 'Open Weight', badgeColor: 'bg-orange-500/15 text-orange-300 border-orange-500/20' },
]

const costCompare = [
  { label: 'GPT-4 Training Est.', value: 100, color: 'bg-red-500/60', display: '$100M+' },
  { label: 'Gemini Ultra Est.', value: 80, color: 'bg-orange-500/60', display: '$80M+' },
  { label: 'DeepSeek-R1', value: 6, color: 'bg-emerald-500/80', display: '$6M' },
]

export default function Slide3() {
  return (
    <div className="slide bg-[#050914]">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] blob-cyan translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-purple -translate-x-1/4 translate-y-1/4" />

      {/* Background image */}
      <div
        className="absolute left-0 top-0 w-[35%] h-full opacity-[0.07]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=700&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute left-0 top-0 w-[35%] h-full bg-gradient-to-r from-transparent to-[#050914]" />

      <div className="relative z-10 max-w-6xl w-full px-16 flex gap-14 items-center">
        {/* Left */}
        <div className="flex flex-col gap-7 flex-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <GitFork className="w-3 h-3" />
              Breakthrough #2
            </span>
          </motion.div>

          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="font-space text-6xl font-bold text-white leading-none tracking-tight">
              Open Weight
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }} className="font-space text-6xl font-bold leading-none tracking-tight gradient-text-green">
              Wins
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28, duration: 0.6 }} className="text-white/45 text-sm mt-3 max-w-sm">
              Open weight models went from "good enough" to "better than GPT-4" in 12 months. Truly open source models exist but lag behind in performance.
            </motion.p>
          </div>

          {/* Cost comparison */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="glass rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-emerald-400" />
              <p className="text-white/60 text-sm font-medium">Training Cost Comparison</p>
            </div>
            {costCompare.map((c, i) => (
              <div key={c.label} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">{c.label}</span>
                  <span className="text-white/70 font-semibold">{c.display}</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${c.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${c.value}%` }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — model list */}
        <div className="flex flex-col gap-3 w-80">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-white/25 text-[10px] font-semibold tracking-widest uppercase">
            Top Open Models
          </motion.p>

          {/* Open weight explainer */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }} className="glass rounded-xl px-3 py-2.5 border border-white/5 flex flex-col gap-1">
            <p className="text-white/55 text-[11px] font-semibold">What is "Open Weight"?</p>
            <p className="text-white/30 text-[10px] leading-relaxed">
              The model's internal parameters (weights) are publicly released — anyone can download, run, and modify it. You get the intelligence, but not necessarily the training code or data.
            </p>
            <p className="text-white/20 text-[10px] mt-0.5">
              <span className="text-amber-400/60">vs Open Source</span> — which also releases training code & data. Most "open" AI models today are open weight only.
            </p>
          </motion.div>

          {/* Parameter glossary */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42, duration: 0.5 }} className="glass rounded-xl px-3 py-2.5 border border-white/5 flex flex-col gap-1.5">
            <p className="text-white/55 text-[11px] font-semibold">Reading the numbers</p>
            <div className="flex flex-col gap-1">
              <p className="text-white/30 text-[10px] leading-relaxed">
                <span className="text-white/55 font-medium">B</span> = billions of parameters — the numerical values inside the model that store its knowledge. More = generally smarter, but slower & costlier to run.
              </p>
              <p className="text-white/30 text-[10px] leading-relaxed">
                <span className="text-white/55 font-medium">MoE</span> = Mixture of Experts — the model is split into specialist sub-networks. Only a small fraction activates per query. DeepSeek V3 has 685B total but uses only ~37B at a time, making it cheap to run despite its size.
              </p>
            </div>
          </motion.div>
          {models.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.38 + i * 0.09, duration: 0.55 }}
              className="glass rounded-xl p-4 flex items-center gap-3 border border-white/5"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4 text-white/30" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/80 text-sm font-medium truncate">{m.name}</p>
                <p className="text-white/30 text-xs">{m.org} · {m.params}</p>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${m.badgeColor}`}>
                {m.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <Sources links={sources} />
    </div>
  )
}
