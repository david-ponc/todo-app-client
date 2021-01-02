import { createContext, useState, useEffect } from 'react'
import dark from 'styles/schemes/dark'
import light from 'styles/schemes/light'

const ThemeContext = createContext({})

export function ThemeContextProvider ({ children }) {
  const [theme, setTheme] = useState(dark)

  useEffect(() => {
    const current = localStorage.getItem('theme')
    const newTheme = current === 'light' ? light : dark
    setTheme(newTheme)
  }, [])

  const switchTheme = current => {
    const newTheme = current === 'light' ? dark : light
    localStorage.setItem('theme', current === 'light' ? 'dark' : 'light')
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
