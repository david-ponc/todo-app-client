import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Field = styled.input`
  font-size: 0.875rem;
  padding: 0.875rem 1.5rem;
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.field.background};
  color: ${({ theme }) => theme.colors.field.text};
  box-shadow: ${({ theme }) => theme.colors.field.border};
  ${({ theme, error }) => error && `box-shadow: ${theme.colors.field.borderError};`}
  width: 100%;
  align-self: start;
  &::placeholder {
    color: ${({ theme }) => theme.colors.field.placeholder};
  }
  @media screen and (max-width: 768px) {
      font-size: 1rem;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
`

export const Label = styled.label`
  position: absolute;
`

export const Desc = styled(motion.span)`
  //position: absolute;
  //top: calc(100% + 0.5rem);
  //left: 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme, error }) => error ? theme.colors.field.descError : theme.colors.field.desc};
  @media screen and (max-width: 768px) {
      font-size: 0.875rem;
  }
`
