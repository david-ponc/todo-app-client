import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useForm from 'hooks/useForm'
import { login, register } from 'services/api'
import Navbar from 'components/navbar'
import Button from 'components/button'
import Checkbox from 'components/checkbox'
import TextField from 'components/text_field'
import Alert from 'components/alert'
import { varsForm } from 'styles/variants'
import { Container, Form, Main, Text, Title } from 'styles/acceso.styles'

const initialFields = {
  email: {
    value: '',
    message: 'El correo electrónico debe tener un formato válido',
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    failed: false
  },
  password: {
    value: '',
    message: 'La contraseña debe contener al menos un mayúscula, un numero, un caracter especial y un minimo de 8 caracteres',
    regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/,
    failed: false
  },
  remember: {
    value: false
  }
}

function SignInPage () {
  const router = useRouter()
  const form = useForm({ initialFields })
  const [alertManager, setAlertState] = useState({ visible: false, error: '' })
  const [processing, setProcess] = useState(false)

  useEffect(() => {
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
        <title>To-Do List App | Acceso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
       <Alert type="error" title="Tuvimos problemas" content={alertManager.error} visible={alertManager.visible} action={setAlertState}/>
      <Main>
        <Form onSubmit={handleSubmit} initial="initial" animate="animate" exit="exit" variants={varsForm}>
          <Title>Únete a nosotros y mantén tus tareas bajo control</Title>
          <Container>
            <Button action={() => console.log('')}>Google</Button>
            <Button action={() => console.log('')}>Github</Button>
          </Container>
          <Text>o inicia sesión con tu correo</Text>
          <TextField error={form.fields.email} type="email" placeholder="ejemplo@dominio.com" {...form.getInput('email')} />
          <TextField
            error={form.fields.password}
            type="password"
            placeholder="Clave de seguridad"
            desc="La clave debe tener al menos 8 caracteres"
            {...form.getInput('password')}
          />
          <Checkbox
            initial={false}
            variants={false}
            label="Recordar credenciales"
            {...form.getCheckbox('remember')}
          />
          <Button action={() => {}} processing={processing} primary>Iniciar ahora</Button>
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
