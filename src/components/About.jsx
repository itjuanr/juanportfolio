import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import SectionHeader from './SectionHeader'

export default function About() {
  const { lang, t } = usePreferences()

  return (
    <section className="section" id="about">
      <SectionHeader title={t.about.title} />
      <div className="about">
        <div data-reveal>
          <p className="about__heading">
            {profile.aboutHeading[lang].map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          {profile.photo && <img className="about__photo" src={profile.photo} alt={profile.name} />}
          <dl className="facts">
            {profile.facts.map((fact) => (
              <div key={fact.label.en}>
                <dt className="label">{fact.label[lang]}</dt>
                <dd>{fact.value[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about__text" data-reveal style={{ '--i': 1 }}>
          {profile.about[lang].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
