import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const labels = [
  'The AI Explosion',
  'Reasoning Models',
  'Open Weight Wins',
  'The New AI Stack',
  'AI in the Real World',
  'Workflow vs Agentic',
]

export default function Navigation({ current, total, onPrev, onNext }) {
  return (
    <>
      {/* Slide counter + dots */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-5">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === current ? 28 : 6,
                opacity: i === current ? 1 : 0.3,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-1.5 rounded-full bg-white cursor-pointer"
              onClick={() => {
                if (i < current) onPrev(current - i)
                if (i > current) onNext(i - current)
              }}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide label top right */}
      <div className="fixed top-9 right-10 z-50 flex items-center gap-3">
        <motion.p
          key={current}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-white/30 text-xs font-medium tracking-wide"
        >
          {labels[current]}
        </motion.p>
        <span className="text-white/15 text-xs">{current + 1} / {total}</span>
      </div>

      {/* Keyboard hint — only on first slide */}
      {current === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="fixed bottom-6 right-10 z-50 flex items-center gap-2 text-white/20 text-xs"
        >
          <kbd className="px-2 py-0.5 rounded border border-white/10 font-mono">←</kbd>
          <kbd className="px-2 py-0.5 rounded border border-white/10 font-mono">→</kbd>
          <span>to navigate</span>
        </motion.div>
      )}
    </>
  )
}
