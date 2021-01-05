import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  position: relative;
  align-self: flex-start;
  z-index: 3;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: ${({ visible }) => visible ? 'static' : 'none'};
`

export const Tape = styled.div`
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  border-radius: 6px;
  display: grid;
  grid-auto-flow: column;
  gap: 0.1rem;
  align-items: center;
  background: ${({ theme }) => theme.colors.dropdown.background};
  box-shadow: ${({ theme }) => theme.colors.dropdown.border};
  color: ${({ theme }) => theme.colors.dropdown.color};
  position: relative;
  z-index: 3;
`

export const ItemsContainer = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: ${({ theme }) => theme.colors.dropdown.background};
  box-shadow: ${({ theme }) => theme.colors.dropdown.border};
  padding: 1rem;
  border-radius: 11px;
  z-index: 3;
`
export const ItemStyle = styled.span`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 2rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.875rem;
  color: ${({ theme, active }) => active ? theme.colors.dropdown.itemColorActive : theme.colors.dropdown.itemColor};

  &:hover {
    background: ${({ theme }) => theme.colors.dropdown.hover};
    color: ${({ theme, active }) => active ? theme.colors.dropdown.itemHoverActive : theme.colors.dropdown.itemHover};
  }
`
