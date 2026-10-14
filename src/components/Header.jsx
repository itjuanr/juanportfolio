import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

const SECTIONS = ['about', 'journey', 'projects', 'skills', 'contact']
const LANGUAGES = ['pt', 'en']

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

// Descobre qual seção está no meio da tela para destacar o link correspondente.
function useActiveSection() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

export default function Header() {
  const { theme, toggleTheme, lang, setLang, t } = usePreferences()
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection()

  // Com o menu do celular aberto (tela cheia), a página de trás não rola e Esc fecha o menu.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  // Atalhos de contato, visíveis só quando o menu vira coluna lateral (telas largas).
  const links = [
    { label: 'GitHub', href: profile.github, external: true },
    { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'E-mail', href: profile.email && `mailto:${profile.email}` },
  ].filter((link) => link.href)

  // Troca de tema com um círculo que se expande a partir do botão (View Transitions API).
  const handleThemeToggle = (event) => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reducedMotion) {
      toggleTheme()
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const root = document.documentElement
    root.style.setProperty('--vt-x', `${rect.left + rect.width / 2}px`)
    root.style.setProperty('--vt-y', `${rect.top + rect.height / 2}px`)
    document.startViewTransition(() => {
      root.dataset.theme = theme === 'dark' ? 'light' : 'dark'
      flushSync(toggleTheme)
    })
  }

  return (
    <header className="header">
      <a className="header__brand" href="#top" aria-label={profile.name}>
        {initials(profile.name)}
        <span>.</span>
      </a>

      <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} id="nav">
        {SECTIONS.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={active === section ? 'is-active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav[section]}
          </a>
        ))}
      </nav>

      <div className="header__end">
        <ul className="header__links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.external ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <div className="lang-switch" role="group" aria-label={t.a11y.language}>
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                className={lang === code ? 'is-active' : ''}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="icon-button"
            onClick={handleThemeToggle}
            data-magnetic
            aria-label={theme === 'dark' ? t.a11y.toLight : t.a11y.toDark}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t.a11y.menu}
            aria-expanded={menuOpen}
            aria-controls="nav"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
