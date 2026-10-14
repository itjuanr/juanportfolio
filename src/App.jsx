import { useEffect } from 'react'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { usePreferences } from './context/Preferences'
import { useInteractions } from './hooks/useInteractions'
import { profile } from './data/content'

export default function App() {
  const { lang, t } = usePreferences()
  useInteractions()

  useEffect(() => {
    document.title = `${profile.name} · ${profile.role[lang]}`
  }, [lang])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Cursor />
    </>
  )
}
