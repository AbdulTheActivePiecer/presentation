import { motion } from 'framer-motion'
import { TrendingUp, Users, Building2, Cpu } from 'lucide-react'
import Sources from '../components/Sources'

const sources = [
  { label: 'OpenAI — 500M users', url: 'https://openai.com/news/' },
  { label: 'OpenAI — Fortune 500', url: 'https://openai.com/enterprise' },
  { label: 'Gartner AI agents forecast', url: 'https://www.gartner.com/en/newsroom/press-releases/2024-10-21-gartner-predicts-33-percent-of-enterprise-software-will-include-agentic-ai-by-2028' },
  { label: 'McKinsey State of AI 2025', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { label: 'Gartner Finance AI Survey 2025', url: 'https://www.gartner.com/en/newsroom/press-releases/2025-11-18-gartner-survey-shows-finance-ai-adoption-remains-steady-in-2025' },
]

const stats = [
  {
    icon: Users,
    value: '500M+',
    label: 'Weekly ChatGPT users',
    sub: 'As of early 2025',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: Building2,
    value: '92%',
    label: 'Fortune 500 use OpenAI',
    sub: 'Products across their orgs',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Enterprise apps with AI agents',
    sub: 'Gartner forecast by end of 2026',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Cpu,
    value: '$200B+',
    label: 'Global AI investment',
    sub: 'In 2024 alone',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
]

const sectors = [
  { name: 'Tech / Software', detail: '88% of tech companies actively use GenAI — highest of any sector', pct: 88, source: 'McKinsey State of AI, 2025', sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { name: 'Finance', detail: '58% of finance functions actively using AI — fraud detection, trading & risk modelling', pct: 58, source: 'Gartner Finance AI Survey, 2025', sourceUrl: 'https://www.gartner.com/en/newsroom/press-releases/2025-11-18-gartner-survey-shows-finance-ai-adoption-remains-steady-in-2025' },
  { name: 'Healthcare', detail: '71% of acute care hospitals used predictive AI in 2024, up from 66% in 2023', pct: 71, source: 'AHA Survey via AAPC, 2024', sourceUrl: 'https://www.aapc.com/blog/93386-2024-saw-71-of-hospitals-using-predictive-ai/' },
  { name: 'Legal', detail: '31% of legal professionals personally used GenAI at work in 2024, up from 27% in 2023', pct: 31, source: 'ABA Legal Industry Report, 2025', sourceUrl: 'https://www.americanbar.org/groups/law_practice/resources/law-technology-today/2025/the-legal-industry-report-2025/' },
]

export default function Slide5() {
  return (
    <div className="slide bg-[#050914]">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] blob-purple translate-x-[-30%] translate-y-[30%]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-cyan translate-x-[20%] translate-y-[-20%]" />

      {/* Background screenshot image */}
      <div
        className="absolute right-0 top-0 w-[40%] h-full opacity-[0.06]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-transparent to-[#050914]" />

      <div className="relative z-10 max-w-6xl w-full px-6 md:px-16 flex flex-col md:flex-row gap-8 md:gap-16 md:items-center pt-24 pb-8 md:pt-0 md:pb-0">
        {/* Left column */}
        <div className="flex flex-col gap-8 flex-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Real World Impact
            </span>
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
              className="font-space text-4xl md:text-6xl font-bold text-white leading-none tracking-tight"
            >
              AI in the
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }}
              className="font-space text-4xl md:text-6xl font-bold leading-none tracking-tight gradient-text-green"
            >
              Real World
            </motion.h1>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.28 + i * 0.08, duration: 0.5 }}
                  className="glass rounded-2xl p-5 flex flex-col gap-2"
                >
                  <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-white/80 text-sm font-medium leading-snug">{s.label}</p>
                  <p className="text-white/35 text-xs">{s.sub}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Right column — sector bars */}
        <div className="flex flex-col gap-5 w-full md:w-72">
          <div className="flex flex-col gap-0.5">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/40 text-xs font-semibold tracking-widest uppercase"
            >
              Sector Adoption
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }}
              className="text-white/20 text-[10px]"
            >
              % using AI — note: each sector measured differently across surveys
            </motion.p>
          </div>
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.38 + i * 0.1, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <p className="text-white/80 text-sm font-medium">{s.name}</p>
                <p className="text-white/40 text-xs">{s.pct}%</p>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.pct}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                />
              </div>
              <p className="text-white/30 text-xs">{s.detail}</p>
              <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/20 hover:text-white/50 text-[10px] italic transition-colors w-fit">
                <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                {s.source}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Sources links={sources} />
    </div>
  )
}
