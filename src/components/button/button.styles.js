import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.button)`
  cursor: pointer;
  font-weight: 500;
  padding: ${({ compact }) => compact ? '0.5rem 1.5rem' : '0.75rem 2rem'};
  border-radius: 0.375rem;
  background: ${({ theme, primary }) => primary ? theme.colors.button.primary.background : theme.colors.button.secondary.background};
  color: ${({ theme, primary }) => primary ? theme.colors.button.primary.text : theme.colors.button.secondary.text};
  box-shadow: ${({ theme, primary }) => primary ? theme.colors.button.primary.shadow : theme.colors.button.secondary.shadow};
  user-select: none;
  transition: box-shadow 320ms ease;
  
`
