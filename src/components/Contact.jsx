import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { contacts, ui } from '../content.js'
import SectionHead from './SectionHead.jsx'

export default function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${contacts.email}`
    }
  }

  const socials = [
    { name: 'Telegram', href: contacts.telegram, handle: contacts.telegram.replace('https://t.me/', '@') },
    { name: 'GitHub', href: contacts.github, handle: contacts.github.replace('https://github.com/', '@') },
    { name: 'LinkedIn', href: contacts.linkedin, handle: 'Aidana Shynbulatova' },
  ].filter((s) => s.href)

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHead index={4} label={t(ui.sections.contact)} title={t(ui.sections.contactTitle)}>
          <p className="shead__note" data-reveal style={{ '--d': '140ms' }}>
            {t(ui.sections.contactText)}
          </p>
        </SectionHead>

        <div className="contact__mail" data-reveal>
          <a href={`mailto:${contacts.email}`} className="contact__email serif italic">
            {contacts.email}
          </a>
          <button type="button" className="btn btn--ghost btn--sm" onClick={copy}>
            {copied ? `✓ ${t(ui.copied)}` : t(ui.copy)}
          </button>
        </div>

        <ul className="socials">
          {socials.map((s, i) => (
            <li key={s.name} data-reveal style={{ '--d': `${70 * i}ms` }}>
              <a href={s.href} target="_blank" rel="noreferrer">
                <span className="mono socials__i">0{i + 1}</span>
                <span className="socials__name serif">{s.name}</span>
                <span className="socials__handle mono">{s.handle}</span>
                <span className="socials__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
