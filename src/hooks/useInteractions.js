import { useEffect } from 'react'

// Efeitos globais ligados por atributos no HTML, sem precisar de lógica em cada componente:
//   data-reveal    → o elemento aparece suavemente quando entra na tela
//   data-magnetic  → o elemento é levemente "puxado" pelo mouse
//   .hero          → recebe a posição do mouse (--mx, --my) para a grade de pontos no CSS
export function useInteractions() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.dataset.revealed = ''
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))

    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let magnet = null

    const onMove = (event) => {
      const spotlight = event.target.closest?.('.hero')
      if (spotlight) {
        const rect = spotlight.getBoundingClientRect()
        spotlight.style.setProperty('--mx', `${event.clientX - rect.left}px`)
        spotlight.style.setProperty('--my', `${event.clientY - rect.top}px`)
      }

      const next = reducedMotion ? null : event.target.closest?.('[data-magnetic]')
      if (magnet && magnet !== next) magnet.style.translate = ''
      magnet = next
      if (magnet) {
        const rect = magnet.getBoundingClientRect()
        const dx = (event.clientX - (rect.left + rect.width / 2)) * 0.25
        const dy = (event.clientY - (rect.top + rect.height / 2)) * 0.25
        magnet.style.translate = `${dx}px ${dy}px`
      }
    }

    if (hasMouse) window.addEventListener('pointermove', onMove)

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', onMove)
      if (magnet) magnet.style.translate = ''
    }
  }, [])
}
