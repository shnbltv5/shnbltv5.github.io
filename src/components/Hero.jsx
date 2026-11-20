import { useLang } from '../i18n.jsx'
import { profile, stack, ui } from '../content.js'

export default function Hero() {
  const { t } = useLang()
  const ticker = stack.flatMap((g) => g.items.map((i) => i.name))

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <div className="hero__meta mono" data-reveal>
            <span>{t(ui.hero.issue)}</span>
            <span className="hero__rule" />
            <span>{t(profile.location)}</span>
          </div>

          <h1 className="hero__name serif">
            <span className="line" data-reveal>
              {t(profile.firstName)}
            </span>
            <span className="line italic indent" data-reveal style={{ '--d': '120ms' }}>
              {t(profile.lastName)}
            </span>
          </h1>

          <p className="hero__role mono" data-reveal style={{ '--d': '220ms' }}>
            <span className="accent">—</span> {t(profile.role)}
          </p>

          <p className="hero__tagline" data-reveal style={{ '--d': '300ms' }}>
            {t(profile.tagline)}
          </p>

          <div className="hero__cta" data-reveal style={{ '--d': '380ms' }}>
            <a href="#work" className="btn btn--solid">
              {t(ui.hero.viewWork)} <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t(ui.hero.contact)}
            </a>
          </div>

          {profile.openToWork && (
            <p className="hero__status mono" data-reveal style={{ '--d': '460ms' }}>
              <span className="pulse" /> {t(ui.hero.open)}
            </p>
          )}
        </div>

        <figure className="hero__photo" data-reveal style={{ '--d': '200ms' }}>
          <div className="hero__frame">
            <img src={`${import.meta.env.BASE_URL}${profile.photo.replace(/^\//, '')}`} alt={profile.name} />
          </div>
          <figcaption className="mono">
            <span>Fig. 01</span>
            <span>{profile.name}</span>
          </figcaption>
        </figure>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1].map((k) => (
            <div className="ticker__group" key={k}>
              {ticker.map((name) => (
                <span key={name + k}>
                  {name} <i>✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
