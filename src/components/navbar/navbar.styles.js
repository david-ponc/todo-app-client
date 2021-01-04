import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled(motion.header)`
  width: 100%;
  max-width: var(--navbar-max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.625rem;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.body.background};
  transition: background 320ms ease,
  color 320ms ease,
  border 320ms ease;
`

export const Links = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: calc(100vh - 76px);
    top: 76px;
    right: -100%;
    grid-auto-flow: row;
    grid-template-rows: repeat(4, 4rem);
    padding: 1rem;
    background: ${({ theme }) => theme.colors.body.background};
    transition: background 320ms ease,
    color 320ms ease,
    border 320ms ease,
    right 320ms ease;

    & > a,
    & > button,
    & > a > button {
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
    }

    & > a,
    & > button {
      &:hover {
      background: ${({theme}) => theme.colors.link.hover};
      }
    }
  }
`

export const Hyper = styled.span`
  color: ${({ theme, active }) => active ? theme.colors.link.active : theme.colors.link.default};
  @media screen and (max-width: 768px) {
    display: grid;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    place-items: center;
    border-radius: 0.5rem;

    &:hover {
      background: ${({theme}) => theme.colors.link.hover};
    }
  }
`

export const TitleMenu = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const WrapperMenu = styled.div`
  position: relative;
`

export const MenuContainer = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: ${({ theme }) => theme.colors.dropdown.background};
  box-shadow: ${({ theme }) => theme.colors.dropdown.border};
  padding: 1rem;
  border-radius: 11px;
`

export const MenuItem = styled.span`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 0.75rem 1.5rem;
  gap: 2rem;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.875rem;
  user-select: none;
  color: ${({ theme, active }) => active ? theme.colors.dropdown.itemColorActive : theme.colors.dropdown.itemColor};

  &:hover {
    background: ${({ theme }) => theme.colors.dropdown.hover};
    color: ${({ theme, active }) => active ? theme.colors.dropdown.itemHoverActive : theme.colors.dropdown.itemHover};
  }
`
export const MenuMobileContainer = styled.div`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`