import ThemeContext from 'context/ThemeContext'
import { UserContextProvider } from 'context/UserContext'
import { AnimatePresence } from 'framer-motion'
import { withTheme } from 'hoc/withTheme'
import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globals.styles'
import Footer from 'components/footer'
import { useRouter } from 'next/router'
import es from 'locales/es'
import en from 'locales/en'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  const { theme } = useContext(ThemeContext)
  const { locale, route } = useRouter()
  const t = locale === 'en' ? en : es
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserContextProvider>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={route} t={t[route]} />
          </AnimatePresence>
        </UserContextProvider>
        <Footer content={t[route]?.footer} />
      </ThemeProvider>
    </>
  )
}

export default withTheme(MyApp)
