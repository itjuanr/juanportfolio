import { useEffect, useRef } from 'react'

// Barra fina que mostra o quanto da página já foi rolado. O CSS decide a direção:
// horizontal no topo em telas pequenas, vertical ao lado do menu em telas largas.
export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      barRef.current.style.setProperty('--progress', progress)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />
}
