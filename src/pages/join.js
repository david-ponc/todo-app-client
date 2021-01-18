import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'components/navbar'
import TextField from 'components/text_field'
import Button from 'components/button'
import { varsForm } from 'styles/variants'
import { Container, Wrapper, Form, Title, Text, Terms, LinkStyled } from 'styles/register.styles'
import useForm from 'hooks/useForm'
import { register } from 'services/api'
import { useState, useEffect } from 'react'
import Alert from '../components/alert'
import { useRouter } from 'next/router'

const initialFields = {
  name: {
    value: '',
    message: '',
    regex: /[a-zA-Z]{4,16}/,
    failed: false
  },
  surname: {
    value: '',
    message: '',
    regex: /[a-zA-Z]{4,16}/,
    failed: false
  },
  username: {
    value: '',
    message: '',
    regex: /(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}/,
    failed: false
  },
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
  confirm: {
    value: '',
    message: '',
    regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/,
    failed: false
  }
}

function RegisterPage ({ t }) {
  const { locale } = useRouter()
  const form = useForm({ initialFields })
  const [alertManager, setAlertState] = useState({ visible: false, error: '' })
  const [isSuccessProcess, setSuccessProcess] = useState(false)
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
    if (form.fields.name.failed ||
        form.fields.surname.failed ||
        form.fields.username.failed ||
        form.fields.email.failed ||
        form.fields.password.failed ||
        form.fields.confirm.failed) {
      setProcess(false)
    } else {
      const internaut = {
        name: form.fields.name.value,
        surname: form.fields.surname.value,
        username: form.fields.username.value,
        email: form.fields.email.value,
        password: form.fields.password.value
      }
      const { isRegistered, error } = await register({ internaut })
      setProcess(false)
      if (isRegistered) {
        setSuccessProcess(true)
      } else {
        setAlertState({ visible: true, error })
      }
    }
  }

  if (isSuccessProcess) {
    return (
      <Layout t={t} navbar={{ links: t.links, navbarButton: t.navbarButton }}>
        <SuccessContent t={t} fullName={`${form.fields.name.value} ${form.fields.surname.value}`}/>
      </Layout>
    )
  }

  return (
    <Layout t={t} setAlertState={setAlertState} alertManager={alertManager} navbar={{ links: t.links, navbarButton: t.navbarButton }}>
      <FormRegister locale={locale} t={t} form={form} processing={processing} handleSubmit={handleSubmit}/>
    </Layout>
  )
}

function FormRegister ({ form, handleSubmit, processing, t, locale }) {
  return (
    <>
      <Title>{t.title}</Title>
      <Text>{t.subtitle}</Text>
      <Form onSubmit={handleSubmit}>
        <TextField error={form.fields.name} placeholder={t.phName} type="text" {...form.getInput('name')} />
        <TextField error={form.fields.surname} placeholder={t.phSurname} type="text" {...form.getInput('surname')} />
        <TextField error={form.fields.username} placeholder={t.phUsername} type="text" {...form.getInput('username')} />
        <TextField error={form.fields.email} placeholder={t.phEmail} type="email" {...form.getInput('email')} />
        <TextField error={form.fields.password} placeholder={t.phPass} type="password" desc={t.descPass} {...form.getInput('password')} />
        <TextField error={form.fields.confirm} placeholder={t.phConfirm} type="password" {...form.getInput('confirm')} />
        <Terms>{t.p}</Terms>
        <Button loading={processing} color="primary">{t.submitButton}</Button>
        <Link href="/login" locale={locale} passHref><LinkStyled>{t.finalLink}</LinkStyled></Link>
      </Form>
    </>
  )
}

function SuccessContent ({ fullName, t }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ textAlign: 'center' }}>¡{fullName}, {t.successContent.title}!</h3>
      <img style={{ margin: '2rem auto' }} src="/send-mail.svg" alt=""/>
      <p style={{ textAlign: 'center' }}>{t.successContent.subtitle}</p>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 500 }}>{t.successContent.p}</p>
    </div>
  )
}

function Layout ({ children, alertManager, setAlertState, navbar, t }) {
  return (
    <>
      <Head>
        <title>{t.hTitle}</title>
      </Head>
      <Navbar {...navbar} />
      {alertManager && (<Alert
        type="error"
        title="Error en el registro"
        content={alertManager.error}
        visible={alertManager.visible}
        action={setAlertState}
      />)}
      <Container>
        <Wrapper initial="initial" animate="animate" exit="exit" variants={varsForm}>
          {children}
        </Wrapper>
      </Container>
    </>
  )
}

export async function getServerSideProps () {
  return {
    props: {}
  }
}

export default RegisterPage
