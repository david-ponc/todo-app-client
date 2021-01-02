import { setCookie, destroyCookie, parseCookies } from 'nookies'

async function register (internaut) {
  const response = await fetch(`${process.env.URL_API}/users/auth/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(internaut)
  })
  return await response.json()
}

async function confirmAccount (token) {
  const confirmResponse = await fetch(`${process.env.URL_API}/users/auth/confirm-email`, {
    method: 'PUT',
    headers: {
      'email-token': token
    }
  })
  return await confirmResponse.json()
}

async function login (credentials, remember) {
  try {
    const response = await fetch(`${process.env.URL_API}/users/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })

    const { isValidCredentials, error, identifier } = await response.json()
    if (isValidCredentials) {
      setCookie(null, 'auth-token', response.headers.get('auth-token'), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      })
      setCookie(null, 'identifier', identifier.username, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      })
      if (remember) {
        localStorage.setItem('r-as0dj', identifier.email)
        localStorage.setItem('r-as1dj', identifier.password)
      }
    } else {
      return Promise.resolve({ isValidCredentials: false, error })
    }
    return Promise.resolve({ isValidCredentials })
  } catch (err) {
    return Promise.resolve({ isValidCredentials: false, error: err })
  }
}

async function getUser (identifier, token) {
  const userResponse = await fetch(`${process.env.URL_API}/users/${identifier}/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return await userResponse.json()
}

async function getTasksOfCurrentUser (identifier, token) {
  const tasksResponse = await fetch(`${process.env.URL_API}/tasks/${identifier}/list`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return await tasksResponse.json()
}

async function createTask (jwt, taskDraft) {
  const { identifier } = parseCookies(null)
  const createResponse = await fetch(`${process.env.URL_API}/tasks/${identifier}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ taskDraft })
  })

  return await createResponse.json()
}

async function completeTask (token, { identifier, taskIdentifier }) {
  const updateResponse = await fetch(`${process.env.URL_API}/tasks/${identifier}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ taskIdentifier })
  })

  return await updateResponse.json()
}

export { register, login, confirmAccount, createTask, getUser, completeTask, getTasksOfCurrentUser }
