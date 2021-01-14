import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'components/navbar'
import Button from 'components/button'
import { varsDashPage } from 'styles/variants'
import { confirmAccount } from 'services/api'
import Loader from 'components/Loader'
import { Container, Wrapper } from 'styles/confirm.styles'

function ConfirmationPage ({ t }) {
  const router = useRouter()
  const { token } = router.query
  const [isLoading, setLoading] = useState(true)
  const [hasError, setError] = useState(false)

  useEffect(() => {
    confirmAccount(token)
      .then(res => {
        if (!res?.error) {
          setTimeout(() => {
            setError(false)
            setLoading(false)
          }, 1000)
        } else {
          setError(true)
          setLoading(false)
          router.push('/')
        }
      })
  }, [])

  if (isLoading) {
    return (
      <Layout t={t}>
        <Loader
          size={40}
        />
      </Layout>
    )
  }

  return (
    <Layout t={t}>
        <Wrapper initial="initial" animate="animate" exit="exit" vars={varsDashPage}>
          {!hasError && (
            <>
            <h4>{t.title}</h4>
            <img src="/congrats-mail.svg" style={{ margin: '1.5rem 0' }} alt=""/>
            <p>{t.p} 🥳</p>
            <Link href="/login">
              <a style={{ marginTop: '1.5rem' }}>
                <Button color="primary">{t.linkButton}</Button>
              </a>
            </Link>
            </>
          )}
        </Wrapper>
    </Layout>
  )
}

function Layout ({ children, t }) {
  return (
    <Fragment>
      <Head>
        <title>{t.hTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar {...{ links: t.links, navbarButton: t.navbarButton }} />
      <Container>
        {children}
      </Container>
    </Fragment>
  )
}

export async function getServerSideProps () {
  return {
    props: {
    }
  }
}

export default ConfirmationPage
