import { usePreferences } from '../context/Preferences'
import { profile } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const { t } = usePreferences()

  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
  ].filter((link) => link.href)

  return (
    <section className="section section--alt" id="contact">
      <SectionHeader title={t.contact.title} />
      <div className="contact" data-reveal>
        <p className="contact__text">{t.contact.text}</p>
        {profile.email && (
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        )}
        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.label}>
              <a className="link" href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
