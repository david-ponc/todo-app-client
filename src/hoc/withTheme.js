import { ThemeContextProvider } from 'context/ThemeContext'

export const withTheme = Page => props => {
  return (
    <ThemeContextProvider>
      <Page {...props} />
    </ThemeContextProvider>
  )
}
