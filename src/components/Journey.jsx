import { usePreferences } from '../context/Preferences'
import { courses, education, experience } from '../data/content'
import SectionHeader from './SectionHeader'

// Alguns campos são iguais nos dois idiomas e vêm como texto simples.
const text = (value, lang) => (typeof value === 'string' ? value : value[lang])

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
          <li className="journey__row" key={job.period.en} data-reveal>
            <div>
              <p className="label">{job.period[lang]}</p>
              <h4 className="journey__title">{job.title[lang]}</h4>
              <p className="journey__place">{text(job.place, lang)}</p>
            </div>
            <div>
              <p className="journey__summary">{job.summary[lang]}</p>
              <ul className="journey__highlights">
                {job.highlights[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
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
          <li className="journey__row" key={course.title.en} data-reveal>
            <div>
              <p className="label">{course.period[lang]}</p>
              <h4 className="journey__title">{course.title[lang]}</h4>
              <p className="journey__place">{course.place[lang]}</p>
            </div>
            <div>
              <p className="journey__summary">{course.summary[lang]}</p>
              <ul className="journey__highlights">
                {course.details.map((detail) => (
                  <li key={detail.label.en}>
                    <strong>{detail.label[lang]}:</strong> {detail.value[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
