import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from 'components/button'
import { HiMoon, HiSun, HiCog, HiLogout } from 'react-icons/hi'
import ThemeContext from 'context/ThemeContext'
import { NavbarStyled, NavStyled, LinkStyled, ItemOptionTheme } from './navbar.styles'
import { useMediaQuery } from 'react-responsive'
import { destroyCookie } from 'nookies'

function Navbar ({ links, navbarButton, user }) {
  const router = useRouter()
  const { theme, switchTheme } = useContext(ThemeContext)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  useEffect(() => setVisibleMenu(false), [])

  const sendToJoin = () => router.push(navbarButton.path, '/join', { locale: `${router.locale}` })

  const changeTheme = () => {
    switchTheme(theme.title)
    visibleMenu && setVisibleMenu(false)
  }

  const toggleNav = () => {
    isMobile && setVisibleMenu(!visibleMenu)
  }

  function logout () {
    destroyCookie(null, 'auth-token', { path: '/' })
    destroyCookie(null, 'identifier', { path: '/' })
    localStorage.removeItem('r-as0dj')
    localStorage.removeItem('r-as1dj')
    router.push('/', '/', { locale: `${router.locale}` })
  }

  if (isMobile) {
    return (
      <NavbarStyled>
        <Link href={user?.username ? '/dashboard' : '/'} locale={router.locale}><a>
          <Image
            src={`/static/logo-${theme.title}.svg`}
            width="21"
            height="21"
            priority
          />
        </a></Link>
        <HiCog
            size={26}
            color={theme.colors.body.color}
            cursor="pointer"
            onClick={toggleNav}
          />
        {visibleMenu && (
          <NavStyled>
            <LinksOptions links={links} locale={router.locale} design="full" />
            {!user && <Button color="primary" design="full" onClick={sendToJoin}>{navbarButton.name}</Button>}
            {user && <ItemOptionTheme>Logout <HiLogout size={24} onClick={logout} cursor="pointer" /></ItemOptionTheme>}
            <ItemOptionTheme onClick={changeTheme}>
              Apariencia
              <IconTheme
                theme={theme.title}
                size={24}
                color={theme.colors.body.color}
                cursor="pointer"
              />
            </ItemOptionTheme>
          </NavStyled>
        )}
      </NavbarStyled>
    )
  }

  return (
    <NavbarStyled>
      <Link href={user?.username ? '/dashboard' : '/'} as={user?.username ? '/dashboard' : '/'} locale={router.locale}><a>
        <Image
          src={`/static/logo-${theme.title}.svg`}
          width="21"
          height="21"
          priority
        />
      </a></Link>
      <NavStyled>
        <LinksOptions links={links} locale={router.locale} />
        {!user && <Button color="primary" design="compact" onClick={sendToJoin}>{navbarButton.name}</Button>}
        {user && <HiLogout size={24} onClick={logout} cursor="pointer" />}
        <IconTheme
          theme={theme.title}
          size={24}
          color={theme.colors.body.color}
          cursor="pointer"
          onClick={changeTheme}
        />
      </NavStyled>
    </NavbarStyled>
  )
}

const IconTheme = ({ theme, ...props }) => {
  if (theme === 'light') {
    return <HiMoon {...props} />
  }
  return <HiSun {...props}/>
}

function LinksOptions ({ links, design, locale }) {
  return (
    <> {
        links.map(link =>
          <Link key={link.path} href={link.path} locale={locale} passHref >
            <LinkStyled design={design}>{link.name}</LinkStyled>
          </Link>
        )
    } </>
  )
}

export default Navbar
