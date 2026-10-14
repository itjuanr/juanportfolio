import { useState } from 'react'
import { usePreferences } from '../context/Preferences'
import { courses, education, experience } from '../data/content'
import SectionHeader from './SectionHeader'

// Alguns campos são iguais nos dois idiomas e vêm como texto simples.
const text = (value, lang) => (typeof value === 'string' ? value : value[lang])

// Linha da trajetória com lista de tópicos. No celular os tópicos começam recolhidos
// atrás do botão "Ver detalhes"; em telas maiores ficam sempre abertos (o botão some pelo CSS).
function DetailedRow({ period, title, place, summary, children }) {
  const { t } = usePreferences()
  const [open, setOpen] = useState(false)

  return (
    <li className={`journey__row ${open ? 'is-open' : ''}`} data-reveal>
      <div>
        <p className="label">{period}</p>
        <h4 className="journey__title">{title}</h4>
        <p className="journey__place">{place}</p>
      </div>
      <div>
        <p className="journey__summary">{summary}</p>
        <ul className="journey__highlights">{children}</ul>
        <button
          type="button"
          className="journey__toggle"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? t.journey.hideDetails : t.journey.showDetails}
        </button>
      </div>
    </li>
  )
}

export default function Journey() {
  const { lang, t } = usePreferences()

  return (
    <section className="section" id="journey">
      <SectionHeader title={t.journey.title} />

      <h3 className="label journey__group" data-reveal>
        {t.journey.experience}
      </h3>
      <ol className="journey">
        {experience.map((job) => (
          <DetailedRow
            key={job.period.en}
            period={job.period[lang]}
            title={job.title[lang]}
            place={text(job.place, lang)}
            summary={job.summary[lang]}
          >
            {job.highlights[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </DetailedRow>
        ))}
      </ol>

      <h3 className="label journey__group" data-reveal>
        {t.journey.education}
      </h3>
      <ol className="journey journey--compact">
        {education.map((course) => (
          <li className="journey__row" key={course.period.en} data-reveal>
            <p className="label">{course.period[lang]}</p>
            <div>
              <h4 className="journey__title">{course.title[lang]}</h4>
              <p className="journey__place">{course.place[lang]}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="label journey__group" data-reveal>
        {t.journey.courses}
      </h3>
      <ol className="journey">
        {courses.map((course) => (
          <DetailedRow
            key={course.title.en}
            period={course.period[lang]}
            title={course.title[lang]}
            place={course.place[lang]}
            summary={course.summary[lang]}
          >
            {course.details.map((detail) => (
              <li key={detail.label.en}>
                <strong>{detail.label[lang]}:</strong> {detail.value[lang]}
              </li>
            ))}
          </DetailedRow>
        ))}
      </ol>
    </section>
  )
}
