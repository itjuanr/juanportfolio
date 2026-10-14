import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, [data-cursor]'

// Cursor customizado: um ponto que acompanha o mouse e um anel que o segue com atraso.
// Só liga em dispositivos com mouse e quando o visitante não pediu menos movimento.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hasMouse || reducedMotion) return

    const root = document.documentElement
    const dot = dotRef.current
    const ring = ringRef.current
    let x = 0
    let y = 0
    let ringX = 0
    let ringY = 0
    let started = false
    let frame

    const setHover = (element) => {
      ring.classList.toggle('is-hover', Boolean(element?.closest?.(INTERACTIVE)))
    }

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      if (!started) {
        started = true
        ringX = x
        ringY = y
        root.classList.add('custom-cursor')
      }
      dot.style.translate = `${x}px ${y}px`
    }

    const tick = () => {
      ringX += (x - ringX) * 0.18
      ringY += (y - ringY) * 0.18
      // A posição usa "translate" (e não "transform") de propósito: o CSS aumenta o anel com
      // "scale", e com transform o aumento multiplicaria também a posição, fazendo o anel pular.
      ring.style.translate = `${ringX}px ${ringY}px`
      frame = requestAnimationFrame(tick)
    }

    const onOver = (event) => setHover(event.target)
    // Ao rolar, o que está embaixo do cursor muda sem o mouse se mexer.
    const onScroll = () => {
      if (started) setHover(document.elementFromPoint(x, y))
    }
    const onDown = () => ring.classList.add('is-down')
    // O "soltar" pode acontecer fora da página (arrastar, trocar de aba), então
    // limpamos o estado de clique em todas essas saídas para o anel não ficar preso.
    const release = () => ring.classList.remove('is-down')
    const onLeave = () => {
      release()
      root.classList.add('custom-cursor--hidden')
    }
    const onEnter = () => root.classList.remove('custom-cursor--hidden')

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', release)
    window.addEventListener('dragend', release)
    window.addEventListener('blur', release)
    root.addEventListener('mouseleave', onLeave)
    root.addEventListener('mouseenter', onEnter)
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', release)
      window.removeEventListener('dragend', release)
      window.removeEventListener('blur', release)
      root.removeEventListener('mouseleave', onLeave)
      root.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(frame)
      root.classList.remove('custom-cursor', 'custom-cursor--hidden')
    }
  }, [])

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor__ring" ref={ringRef} />
      <div className="cursor__dot" ref={dotRef} />
    </div>
  )
}
