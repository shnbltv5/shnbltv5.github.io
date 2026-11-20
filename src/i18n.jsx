import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: (v) => v })

function readSavedLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ru') return saved
  } catch {
    /* storage unavailable */
  }
  return 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readSavedLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  // t({ en, ru }) → string in the current language; plain strings pass through
  const t = (value) => {
    if (value == null) return ''
    if (typeof value === 'string' || Array.isArray(value)) return value
    return value[lang] ?? value.en ?? ''
  }

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
