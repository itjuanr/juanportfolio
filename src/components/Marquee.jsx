import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'

// Faixa de texto em movimento contínuo. A lista é repetida duas vezes para o laço não ter emenda.
export default function Marquee() {
  const { lang } = usePreferences()
  const items = profile.marquee[lang]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy}>
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
