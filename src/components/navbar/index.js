import Logo from 'components/icons/logo'
import { MenuMobileContainer, Header, Hyper, Links, WrapperMenu, MenuContainer, MenuItem, TitleMenu } from './navbar.styles'
import ThemeContext from 'context/ThemeContext'
import { useContext, useRef, useState } from 'react'
import ToggleTheme from 'components/toggle_theme'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import Button from 'components/button'
import ChevronDown from 'components/icons/chevronDown'
import Logout from 'components/icons/logout'
import User from 'components/icons/user'
import { destroyCookie } from 'nookies'
import { AnimatePresence } from 'framer-motion'
import Menu from 'components/icons/menu'

function Navbar ({ user, isMobileView }) {
  const { theme, switchTheme } = useContext(ThemeContext)
  const linkRef = useRef(null)
  const router = useRouter()

  const changeTheme = () => {
    toggleMenuMobile()
    switchTheme(theme.title)
  }

  const toggleMenuMobile = () => {
    if (isMobileView) {
      linkRef.current.style.right === '0px' ? linkRef.current.style.right = '-100%' : linkRef.current.style.right = '0px'
    }
  }

  return (
    <Header>
      <Link href={user ? '/dashboard' : '/'}>
        <a><Logo /></a>
      </Link>
      <MenuMobileContainer onClick={toggleMenuMobile}>
        <Menu size={21} />
      </MenuMobileContainer>
      <Links ref={linkRef}>
        {/* eslint-disable-next-line multiline-ternary */}
        { user ? <UserAction name={`${user.name}`} isMobileView={isMobileView} /> : (
          <>
            <Link href="/">
              <a><Hyper active={router.pathname === '/'}>Inicio</Hyper></a>
            </Link>
            <Link href="/ingreso">
              <a><Hyper active={router.pathname === '/ingreso'}>Ingreso</Hyper></a>
            </Link>
            <Link href="/registro">
              <a><Button action={() => {}} compact primary>Registro</Button></a>
            </Link>
          </>
        )}
        <ToggleTheme action={changeTheme} />
      </Links>
    </Header>
  )
}

function UserAction ({ name, isMobileView }) {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    destroyCookie(null, 'auth-token')
    destroyCookie(null, 'identifier')
    localStorage.removeItem('r-as0dj')
    localStorage.removeItem('r-as1dj')
    Router.push('/')
  }

  return (
    <>
    { isMobileView ?
      <>
        <MenuItem>Perfil <User /> </MenuItem>
        <MenuItem onClick={handleClick} >Salir <Logout /> </MenuItem>
      </>
      : 
        <WrapperMenu>
          <TitleMenu onClick={() => setVisible(!visible)}>
            <span>{name}</span>
            <ChevronDown size={18} />
          </TitleMenu>
          <AnimatePresence>
          {visible && <MenuUserAction onMouseLeave={() => setVisible(false)}/>}
          </AnimatePresence>
        </WrapperMenu>
    }
    </>
  )
}

function MenuUserAction ({ ...props }) {
  const handleClick = () => {
    destroyCookie(null, 'auth-token')
    destroyCookie(null, 'identifier')
    localStorage.removeItem('r-as0dj')
    localStorage.removeItem('r-as1dj')
    Router.push('/')
  }

  return (
    <MenuContainer {...props} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} >
      <MenuItem>Perfil <User /> </MenuItem>
      <MenuItem onClick={handleClick} >Salir <Logout /> </MenuItem>
    </MenuContainer>
  )
}

export default Navbar
