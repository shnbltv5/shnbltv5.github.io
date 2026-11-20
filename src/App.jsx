import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useLang } from './i18n.jsx'
import { useReveal } from './useReveal.js'

function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setP(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return <div className="progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
}

export default function App() {
  const { lang } = useLang()
  useReveal([lang])

  return (
    <>
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main key={lang} className="lang-fade">
        <Hero />
        <About />
        <Stack />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
