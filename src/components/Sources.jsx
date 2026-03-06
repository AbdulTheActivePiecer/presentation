import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Sources({ links }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-3 left-10 z-40 hidden md:flex flex-col gap-1"
    >
      <p className="text-white/20 text-[10px] font-semibold tracking-widest uppercase mb-0.5">Sources</p>
      <div className="flex flex-wrap gap-1.5">
        {links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium text-white/30 hover:text-white/70 border border-white/8 hover:border-white/20 transition-all duration-200 backdrop-blur-sm bg-white/3"
          >
            <ExternalLink className="w-2.5 h-2.5" />
            {l.label}
          </a>
        ))}
      </div>
    </motion.div>
  )
}
