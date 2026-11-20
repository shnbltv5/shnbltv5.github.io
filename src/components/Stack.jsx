import { useLang } from '../i18n.jsx'
import { stack, ui } from '../content.js'
import SectionHead from './SectionHead.jsx'

export default function Stack() {
  const { t } = useLang()

  return (
    <section className="section section--alt" id="stack">
      <div className="container">
        <SectionHead index={2} label={t(ui.sections.stack)} title={t(ui.sections.stackTitle)}>
          <p className="shead__note" data-reveal style={{ '--d': '140ms' }}>
            {t(ui.sections.stackNote)}
          </p>
        </SectionHead>

        <div className="stack">
          {stack.map((group, gi) => (
            <div className="stack__col" key={gi} data-reveal style={{ '--d': `${80 * gi}ms` }}>
              <h3 className="stack__title mono">
                <span>{String(gi + 1).padStart(2, '0')}</span>
                {t(group.title)}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className={item.primary ? 'is-primary' : ''}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
