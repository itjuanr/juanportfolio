import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'

// Separa o ponto final para ele receber a cor de destaque.
function WithDot({ children }) {
  if (!children.endsWith('.')) return children
  return (
    <>
      {children.slice(0, -1)}
      <span className="dot">.</span>
    </>
  )
}

export default function Hero() {
  const { lang, t } = usePreferences()
  const { now } = profile

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div>
          <p className="hero__name">{profile.name}</p>

          <h1 className="hero__headline">
            {profile.headline[lang].map((line) => (
              <span className="hero__line" key={line}>
                <WithDot>{line}</WithDot>
              </span>
            ))}
          </h1>

          <p className="hero__intro">{profile.intro[lang]}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects" data-magnetic>
              {t.hero.viewProjects}
            </a>
            <a className="button" href="#contact" data-magnetic>
              {t.hero.contact}
            </a>
          </div>
        </div>

        {/* Janela de terminal: "lê" um arquivo com o que você faz hoje. --i define a ordem de entrada. */}
        <aside className="terminal">
          <p className="terminal__bar" aria-hidden="true">
            <span />
            <span />
            <span />
            juan@portfolio
          </p>
          <div className="terminal__body">
            <p className="terminal__cmd" style={{ '--i': 0 }}>
              whoami
            </p>
            <p className="terminal__out" style={{ '--i': 1 }}>
              {profile.name}
            </p>
            <p className="terminal__cmd" style={{ '--i': 2 }}>
              cat {now.file[lang]}
            </p>
            <dl className="terminal__rows" style={{ '--i': 3 }}>
              {now.items.map((item) => (
                <div key={item.label.en}>
                  <dt>{item.label[lang]}</dt>
                  <dd>{item.value[lang]}</dd>
                </div>
              ))}
            </dl>
            <p className="terminal__cmd" style={{ '--i': 4 }} aria-hidden="true">
              <span className="terminal__cursor" />
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
