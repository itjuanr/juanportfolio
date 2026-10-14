import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/content'

const PreferencesContext = createContext(null)

// localStorage pode falhar (aba anônima, bloqueio de cookies), então nunca deixamos quebrar a página.
function readStored(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // sem persistência; a preferência vale só para esta visita
  }
}

function initialTheme() {
  const stored = readStored('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function initialLang() {
  const stored = readStored('lang')
  if (stored === 'pt' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme)
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    store('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    store('lang', lang)
  }, [lang])

  const value = {
    theme,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    lang,
    setLang,
    t: translations[lang],
  }

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) throw new Error('usePreferences deve ser usado dentro de PreferencesProvider')
  return context
}
