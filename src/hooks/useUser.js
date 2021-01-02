import { setCookie } from 'nookies'

const useUser = () => {
  const login = async (credentials) => {
    const { email: identifier, password } = credentials
    try {
      const response = await fetch('http://localhost:1337/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identifier, password })
      })

      const { jwt } = await response.json()

      setCookie(null, 'jwt', jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      })
      return Promise.resolve()
    } catch (err) {
      return err
    }
  }

  return {
    login
  }
}

export default useUser
