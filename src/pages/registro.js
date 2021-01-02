import Head from 'next/head'
import Navbar from 'components/navbar'
import TextField from 'components/text_field'
import Button from 'components/button'
import { varsForm } from 'styles/variants'
import { Container, Wrapper, Form, Title, Text, Terms } from 'styles/register.styles'
import useForm from 'hooks/useForm'
import { register } from 'services/api'
import { useState, useEffect } from 'react'
import Alert from '../components/alert'

const initialFields = {
  name: {
    value: '',
    message: 'El nombre solo debe contener letras y un mínimo de 4 letras',
    regex: /[a-zA-Z]{4,16}/,
    failed: false
  },
  surname: {
    value: '',
    message: 'El apellido solo debe contener letras y un mínimo de 4 letras',
    regex: /[a-zA-Z]{4,16}/,
    failed: false
  },
  username: {
    value: '',
    message: 'El nombre de usuario es una combinación de letras y puntos con un mínimo de 3 letras',
    regex: /(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}/,
    failed: false
  },
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
  confirm: {
    value: '',
    message: 'La confirmación debe contener al menos un mayúscula, un numero, un caracter especial y un minimo de 8 caracteres',
    regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/,
    failed: false
  }
}

function RegisterPage () {
  const form = useForm({ initialFields })
  const [alertManager, setAlertState] = useState({ visible: false, error: '' })
  const [isSuccessProcess, setSuccessProcess] = useState(false)
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
      <Layout>
        <SuccessContent fullName={`${form.fields.name.value} ${form.fields.surname.value}`}/>
      </Layout>
    )
  }

  return (
    <Layout setAlertState={setAlertState} alertManager={alertManager}>
      <FormRegister form={form} processing={processing} handleSubmit={handleSubmit}/>
    </Layout>
  )
}

function FormRegister ({ form, handleSubmit, processing }) {
  return (
    <>
      <Title>Únete a nosotros y mantén tus tareas bajo control</Title>
      <Text>Rellena los campos solicitados para crear tu cuenta y utiliza nuestra aplicación.</Text>
      <Form onSubmit={handleSubmit}>
        <TextField error={form.fields.name} placeholder="Nombre" type="text" {...form.getInput('name')} />
        <TextField error={form.fields.surname} placeholder="Apellidos" type="text" {...form.getInput('surname')} />
        <TextField error={form.fields.username} placeholder="Nombre de usuario" type="text" {...form.getInput('username')} />
        <TextField error={form.fields.email} placeholder="Correo electrónico" type="email" {...form.getInput('email')} />
        <TextField error={form.fields.password} placeholder="Clave de seguridad" type="password" desc="La clave debe tener al menos 8 caracteres" {...form.getInput('password')} />
        <TextField error={form.fields.confirm} placeholder="Confirmación de clave" type="password" {...form.getInput('confirm')} />
        <Terms>Al registrarse, esta permitiendo el uso de sus datos proporcionados para que sean usados en la aplicación</Terms>
        <Button action={() => {}} processing={processing} primary>Terminar registro</Button>
      </Form>
    </>
  )
}

function SuccessContent ({ fullName }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ textAlign: 'center' }}>¡{fullName}, Has terminado tu registro con éxito!</h3>
      <img style={{ margin: '2rem auto' }} src="/send-mail.svg" alt=""/>
      <p style={{ textAlign: 'center' }}>Te hemos enviado un correo electrónico, para confimar tu cuenta</p>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 500 }}>Ya puedes cerrar esta pesntaña</p>
    </div>
  )
}

function Layout ({ children, alertManager, setAlertState }) {
  return (
    <>
      <Head>
        <title>To-Do List App | Registro</title>
      </Head>
      <Navbar />
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
