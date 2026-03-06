import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Navigation from './components/Navigation'

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6]

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export default function App() {
  const [[current, direction], setCurrent] = useState([0, 0])
  const [touchStartX, setTouchStartX] = useState(null)

  const goTo = useCallback((next) => {
    if (next < 0 || next >= slides.length) return
    setCurrent([next, next > current ? 1 : -1])
  }, [current])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  const CurrentSlide = slides[current]

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#050914]"
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX === null) return
        const diff = touchStartX - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
        setTouchStartX(null)
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <Navigation
        current={current}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  )
}
