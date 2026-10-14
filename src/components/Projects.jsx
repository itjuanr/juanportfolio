import { usePreferences } from '../context/Preferences'
import { projects } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Projects() {
  const { lang, t } = usePreferences()

  return (
    <section className="section section--alt" id="projects">
      <SectionHeader title={t.projects.title} />
      <ul className="projects">
        {projects.map((project) => (
          <li className="project" key={project.title} data-reveal>
            <div>
              <h3 className="project__title">{project.title}</h3>
              {project.note && <p className="label">{project.note[lang]}</p>}
            </div>
            <div>
              <p className="project__description">{project.description[lang]}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project__links">
                {project.demo && (
                  <a className="link" href={project.demo} target="_blank" rel="noreferrer">
                    {t.projects.demo} <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.repo && (
                  <a className="link" href={project.repo} target="_blank" rel="noreferrer">
                    {t.projects.code} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
