import { useLang } from '../i18n.jsx'
import { about, ui } from '../content.js'
import SectionHead from './SectionHead.jsx'

export default function About() {
  const { t } = useLang()
  const [first, ...rest] = t(about.paragraphs)

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index={1} label={t(ui.sections.about)} title={t(ui.sections.aboutTitle)} />

        <div className="about__grid">
          <div className="about__text">
            <p className="about__lead serif" data-reveal>
              {first}
            </p>
            {rest.map((p, i) => (
              <p key={i} data-reveal style={{ '--d': `${80 * (i + 1)}ms` }}>
                {p}
              </p>
            ))}
          </div>

          <dl className="facts">
            {about.facts.map((f, i) => (
              <div className="facts__row" key={i} data-reveal style={{ '--d': `${60 * i}ms` }}>
                <dt className="mono">{t(f.label)}</dt>
                <dd>{t(f.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
