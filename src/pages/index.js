import Button from 'components/button'
import Navbar from 'components/navbar'
import TaskList from 'components/tasks_list'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Title, Subtitle, Landing, Leyend, TaskContainer } from 'styles/home.styles'
import { varsLanding } from 'styles/variants'
import Loader from 'components/Loader'

const initialTasks = [
  { _id: '3452', content: 'Hacer el diseño de la web', category: 'work', completed: false },
  { _id: '6543', content: 'Sacar la basura', category: 'home', completed: false },
  { _id: '7638', content: 'Reunión para análisis de requerimientos', category: 'work', completed: false },
  { _id: '5634', content: 'Hacer un todo list', category: 'personal', completed: false }]

function LandingPage ({ t }) {
  const router = useRouter()
  const [tasks, setTasks] = useState([...initialTasks])

  useEffect(() => {
    const tTasks = tasks.map((task, i) => {
      task.content = t.localTasks[i]
      return task
    })
    setTasks(tTasks)
  }, [])

  const sendStart = () => {
    router.push('/join', '/join', { locale: `${router.locale}` })
  }

  useEffect(() => {
    tasks.length === 0 && setTimeout(() => setTasks(initialTasks), 2400)
  }, [tasks])

  const taskCompleted = task => {
    const newTasks = tasks.filter(item => item._id !== task._id)
    setTimeout(async () => {
      setTasks(newTasks)
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>{t.hTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar {...{ links: t.links, navbarButton: t.navbarButton }} />
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Landing initial="initial" animate="animate" exit="exit" variants={varsLanding}>
          <Title>{t.title}</Title>
          <Subtitle>{t.subtitle}</Subtitle>
          <Leyend>{t.p}</Leyend>
          <Button onClick={sendStart} color="primary">{t.landingButton}</Button>
        </Landing>
        {tasks.length === 0 && <div style={{ width: '32px', margin: '7rem auto 0' }}><Loader size={32} /></div>}
        <TaskContainer initial="initial" animate="animate" exit="exit" variants={varsLanding}>
          <TaskList tasks={tasks} action={taskCompleted} />
        </TaskContainer>
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const initialTasks = [
    { _id: '3452', content: 'Hacer el diseño de la web', category: 'work', completed: false },
    { _id: '6543', content: 'Sacar la basura', category: 'home', completed: false },
    { _id: '7638', content: 'Reunión para análisis de requerimientos', category: 'work', completed: false },
    { _id: '5634', content: 'Hacer un todo list', category: 'personal', completed: false }]
  return {
    props: {
      initialTasks
    }
  }
}

export default LandingPage
