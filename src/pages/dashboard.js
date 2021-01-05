import Head from 'next/head'
import Navbar from 'components/navbar'
import TaskList from 'components/tasks_list'
import TaskCreator from 'components/task_creator'
import { useState, useEffect } from 'react'
import { Main, Greeting, ActualDate, Text } from 'styles/dashboard.styles'
import { varsDashPage } from 'styles/variants'
import { destroyCookie, parseCookies } from 'nookies'
import { es } from 'date-fns/locale'
import { format } from 'date-fns'
import { getTasksOfCurrentUser, getUser, completeTask } from 'services/api'

function getGreeting () {
  const time = new Date().getHours()
  if (time < 5) {
    return 'Buena madrugada'
  } else if (time >= 5 && time < 8) {
    return 'Buena mañana'
  } else if (time >= 8 && time < 12) {
    return 'Buen día'
  } else if (time >= 12 && time < 15) {
    return 'Buena tarde'
  } else if (time >= 15) {
    return 'Buena noche'
  }
}

function DashboardPage ({ serverTasks, user, isMobileView }) {
  const [tasks, setTasks] = useState(serverTasks)
  const [greeting, setGreeting] = useState(getGreeting())

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting())
    }, 5000)
    return () => clearInterval(interval)
  }, [greeting])

  const taskCompleted = task => {
    const { _id: id } = task
    const newTasks = tasks.filter(({ _id: idItem }) => idItem !== id)
    setTimeout(async () => {
      const { 'auth-token': authToken } = parseCookies(null)
      await completeTask(authToken, { identifier: user.username, taskIdentifier: id })
      setTasks(newTasks)
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>To-Do List App | {user.name}</title>
      </Head>
      <Navbar user={user} isMobileView={isMobileView} />
      <Main initial="initial" animate="animate" exit="exit" variants={varsDashPage}>
        <Greeting>{greeting}, {user.name}</Greeting>
        <ActualDate>Hoy es {format(new Date(), "EEEE, d 'de' MMMM", { locale: es })}</ActualDate>
        {tasks.length > 0 && <Text>Tienes <strong>{tasks.length}</strong> tarea{tasks.length > 1 ? 's' : ''} pendiente{tasks.length > 1 ? 's' : ''}.</Text>}
        {!tasks.length && <Text>No tienes tareas pendientes 😉</Text>}
        <TaskCreator tasks={tasks} setTasks={setTasks} isMobileView={isMobileView} />
        <TaskList isMobile={isMobileView} tasks={tasks} action={taskCompleted} />
      </Main>
    </>
  )
}

export async function getServerSideProps (ctx) {
  const { 'auth-token': authToken, identifier } = parseCookies(ctx)
  let serverTasks = []
  let user = {}
  const { error, hasProfileData, profile } = await getUser(identifier, authToken)
  if (hasProfileData) {
    user = { ...profile }
    const { hasExistedTasks, tasks } = await getTasksOfCurrentUser(identifier, authToken)
    if (hasExistedTasks) {
      serverTasks = [...tasks]
    }
  } else {
    destroyCookie(ctx, 'identifier')
    destroyCookie(ctx, 'auth-token')
    console.log(error)
  }

  const isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent).match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
  return {
    props: {
      serverTasks,
      user,
      isMobileView
    }
  }
}

export default DashboardPage
