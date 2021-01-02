import ThemeContext from 'context/ThemeContext'
import { UserContextProvider } from 'context/UserContext'
import { AnimatePresence } from 'framer-motion'
import { withTheme } from 'hoc/withTheme'
import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globals.styles'
import Footer from 'components/footer'

function MyApp ({ Component, pageProps, router }) {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContextProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </UserContextProvider>
      <Footer />
    </ThemeProvider>
  )
}

export default withTheme(MyApp)
