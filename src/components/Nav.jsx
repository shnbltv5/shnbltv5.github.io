import { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { ui } from '../content.js'

const LINKS = ['about', 'stack', 'work', 'contact']

export function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Language">
      <span className="lang__thumb" style={{ transform: `translateX(${lang === 'ru' ? '100%' : '0'})` }} />
      {['en', 'ru'].map((l) => (
        <button
          key={l}
          type="button"
          className={lang === l ? 'is-active' : ''}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Nav() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight the section currently on screen
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'top' ? '' : e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    const ids = ['top', ...LINKS]
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)} aria-label="Aidana Shynbulatova — home">
          <span className="serif">A</span>
          <span className="nav__logo-dot" />
          <span className="serif italic">S</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          {LINKS.map((id, i) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              <span className="mono">0{i + 1}</span>
              {t(ui.nav[id])}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <LangToggle />
          <button
            type="button"
            className="nav__burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
