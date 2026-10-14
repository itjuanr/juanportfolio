import { usePreferences } from '../context/Preferences'
import { skills } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Skills() {
  const { lang, t } = usePreferences()
  const label = (item) => (typeof item === 'string' ? item : item[lang])

  return (
    <section className="section" id="skills">
      <SectionHeader title={t.skills.title} />
      <div className="grid grid--skills" data-reveal>
        {skills.map((group) => (
          <div className="skills__group" key={group.category.en}>
            <h3 className="label">{group.category[lang]}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={label(item)}>{label(item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
