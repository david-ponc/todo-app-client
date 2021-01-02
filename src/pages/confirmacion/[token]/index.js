import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'components/navbar'
import Button from 'components/button'
import { varsDashPage } from 'styles/variants'
import { confirmAccount } from 'services/api'
import Loader from 'react-loader-spinner'
import { Container, Wrapper } from 'styles/confirm.styles'

function ConfirmationPage () {
  const router = useRouter()
  const { token } = router.query
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    confirmAccount(token)
      .then(res => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }, [])

  if (isLoading) {
    return (
      <Layout>
        <Loader
          type="Oval"
          color="var(--gray-500)"
          height={40}
          width={40}
        />
      </Layout>
    )
  }

  return (
    <Layout>
        <Wrapper initial="initial" animate="animate" exit="exit" vars={varsDashPage}>
          <h4>¡Has confirmado tu cuenta con éxito!</h4>
          <img src="/congrats-mail.svg" alt=""/>
          <p>Ya estas listo para utilizar la aplicación 🥳</p>
          <Link href="/ingreso">
            <a>
              <Button action={() => {}} primary>Iniciar ahora</Button>
            </a>
          </Link>
        </Wrapper>
    </Layout>
  )
}

function Layout ({ children }) {
  return (
    <Fragment>
      <Head>
        <title>To-Do List App | Confirmación de cuenta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
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
