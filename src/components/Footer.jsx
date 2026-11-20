import { useLang } from '../i18n.jsx'
import { profile, ui } from '../content.js'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__big serif" aria-hidden="true">
          Aidana<span className="italic">.</span>
        </p>
        <div className="footer__row mono">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{t(ui.footer)}</span>
          <a href="#top">{t(ui.backToTop)} ↑</a>
        </div>
      </div>
    </footer>
  )
}
