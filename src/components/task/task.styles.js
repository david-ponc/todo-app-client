import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.article)`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 11px;
  background: ${({ theme }) => theme.colors.task.background};
  box-shadow: ${({ theme }) => theme.colors.task.shadow};
  display: grid;
  grid-template-columns: auto auto 1fr 21px;
  gap: 0.875rem;
  align-items: center;
  overflow: hidden;

  &:hover > svg {
    color: ${({ theme }) => theme.colors.task.iconHover};
    filter: ${({ theme }) => theme.colors.task.iconHoverShadow};
  }

  & > svg {
    color: ${({ theme }) => theme.colors.task.icon};
    grid-column: 4 / 5;
    transition: color 340ms ease;
  }
`

export const Text = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.task.text};
  user-select: none;
  // Line animation
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 50%;
  background-repeat: no-repeat;
  background-size: ${({ checked }) => checked ? '100%' : '0'} 2px;
  transition: background-size 0.3s;
`
