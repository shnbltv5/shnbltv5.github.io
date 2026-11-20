import { useMemo, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { categories, contacts, projects, ui } from '../content.js'
import { useReveal } from '../useReveal.js'
import SectionHead from './SectionHead.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

function Card({ project, index }) {
  const { t } = useLang()
  const { title, subtitle, year, status = [], image, description, tech, links = {}, featured } = project
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className={`card ${featured ? 'card--featured' : ''}`} data-reveal>
      <div className={`card__cover ${image ? '' : 'card__cover--type'}`}>
        {image ? (
          <img src={asset(image)} alt={title} loading="lazy" />
        ) : (
          <div className="card__type" aria-hidden="true">
            <span className="card__num serif">{num}</span>
            <span className="card__word serif italic">{title}</span>
          </div>
        )}
        <div className="card__badges">
          {status.map((s) => (
            <span key={s} className={`badge badge--${s}`}>
              {t(ui.status[s])}
            </span>
          ))}
        </div>
      </div>

      <div className="card__body">
        <p className="card__meta mono">
          <span>No. {num}</span>
          <span>{year}</span>
        </p>
        <h3 className="card__title serif">{title}</h3>
        <p className="card__subtitle serif italic">{t(subtitle)}</p>
        <p className="card__desc">{t(description)}</p>

        <ul className="card__tech">
          {tech.map((x) => (
            <li key={x} className="mono">
              {x}
            </li>
          ))}
        </ul>

        {(links.github || links.demo) && (
          <div className="card__links">
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noreferrer" className="link-arrow">
                {t(ui.links.demo)} <span aria-hidden="true">↗</span>
              </a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="link-arrow">
                {t(ui.links.github)} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Work() {
  const { t } = useLang()
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category.includes(filter))),
    [filter],
  )
  useReveal([filter])

  const count = (id) => (id === 'all' ? projects.length : projects.filter((p) => p.category.includes(id)).length)

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead index={3} label={t(ui.sections.work)} title={t(ui.sections.workTitle)} />

        <div className="filters" role="tablist" data-reveal>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={filter === c.id}
              className={`chip ${filter === c.id ? 'is-active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {t(c.label)} <sup className="mono">{count(c.id)}</sup>
            </button>
          ))}
        </div>

        <div className="cards" key={filter}>
          {visible.map((p) => (
            <Card key={p.title} project={p} index={projects.indexOf(p)} />
          ))}
        </div>

        <div className="work__more" data-reveal>
          <a href={contacts.github + '?tab=repositories'} target="_blank" rel="noreferrer" className="btn btn--ghost">
            {t(ui.links.more)} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
