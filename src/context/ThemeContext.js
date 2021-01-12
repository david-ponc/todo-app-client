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
    if (parseCookies()?.theme) {
      const { theme } = parseCookies()
      setTheme(THEMES[theme])
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) => {
        if (evt.matches) {
          setTheme(THEMES.dark)
        } else {
          setTheme(THEMES.light)
        }
      })
    }
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change')
    }
  }, [])

  const switchTheme = (current) => {
    const switched = current === 'light' ? 'dark' : 'light'
    setCookie(null, 'theme', switched)
    setTheme(THEMES[switched])
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
