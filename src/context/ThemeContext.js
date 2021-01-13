import { createContext, useState, useEffect } from 'react'
import dark from 'styles/schemes/dark'
import light from 'styles/schemes/light'
import { setCookie, parseCookies } from 'nookies'

const THEMES = {
  dark,
  light
}

const ThemeContext = createContext({})

export function ThemeContextProvider ({ children }) {
  const [theme, setTheme] = useState(light)

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handlePrefersColorScheme)
    if (parseCookies()?.theme) {
      const { theme } = parseCookies()
      setTheme(THEMES[theme])
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(THEMES.dark)
      } else {
        setTheme(THEMES.light)
      }
    }
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handlePrefersColorScheme)
    }
  }, [])

  const handlePrefersColorScheme = ({ matches }) => {
    if (matches) {
      setTheme(THEMES.dark)
    } else {
      setTheme(THEMES.light)
    }
  }

  const switchTheme = (current) => {
    const switched = current === 'light' ? 'dark' : 'light'
    setCookie(null, 'theme', switched, { path: '/' })
    setTheme(THEMES[switched])
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
