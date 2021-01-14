import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useForm from 'hooks/useForm'
import { login } from 'services/api'
import Navbar from 'components/navbar'
import Button from 'components/button'
import Checkbox from 'components/checkbox'
import TextField from 'components/text_field'
import Alert from 'components/alert'
import { varsForm } from 'styles/variants'
import { Form, Main, Title, LinkStyled } from 'styles/acceso.styles'
import Link from 'next/link'

const initialFields = {
  email: {
    value: '',
    message: '',
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    failed: false
  },
  password: {
    value: '',
    message: '',
    regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/,
    failed: false
  },
  remember: {
    value: false
  }
}

function SignInPage ({ t }) {
  const router = useRouter()
  const form = useForm({ initialFields })
  const [alertManager, setAlertState] = useState({ visible: false, error: '' })
  const [processing, setProcess] = useState(false)

  useEffect(() => {
    form.defineMessages(t.fields)
    return () => {
      form.reset()
    }
  }, [])

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setProcess(true)
    form.validationAll(form.fields)
    if (form.fields.email.failed || form.fields.password.failed) {
      setProcess(false)
    } else {
      const { isValidCredentials, error } = await login({
        email: form.fields.email.value,
        password: form.fields.password.value
      }, form.fields.remember.value)
      if (isValidCredentials) {
        setProcess(false)
        router.push('/dashboard')
      } else {
        setAlertState({ visible: true, error })
      }
    }
  }

  return (
    <>
      <Head>
        <title>{t.hTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar {...{ links: t.links, navbarButton: t.navbarButton }} />
       <Alert type="error" title="Tuvimos problemas" content={alertManager.error} visible={alertManager.visible} action={setAlertState}/>
      <Main>
        <Form onSubmit={handleSubmit} initial="initial" animate="animate" exit="exit" variants={varsForm}>
          <Title>{t.title}</Title>
          {/* <Container>
            <Button color="neutral" >Google</Button>
            <Button color="neutral" >Github</Button>
          </Container>
          <Text>{t.p}</Text> */}
          <TextField error={form.fields.email} type="email" placeholder={t.phEmail} {...form.getInput('email')} />
          <TextField
            error={form.fields.password}
            type="password"
            placeholder={t.phPass}
            desc={t.descPass}
            {...form.getInput('password')}
          />
          <Checkbox
            size={21}
            label={t.chkRemember}
            {...form.getCheckbox('remember')}
          />
          <Button loading={processing} color="primary">{t.submitButton}</Button>
          <Link href="/join" locale={router.locale} passHref><LinkStyled>{t.finalLink}</LinkStyled></Link>
        </Form>
      </Main>
    </>
  )
}

export async function getServerSideProps () {
  return {
    props: {}
  }
}

export default SignInPage
