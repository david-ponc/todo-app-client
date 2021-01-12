import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.form`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  padding: 10px 10px 10px 1.5rem;
  border-radius: 11px;
  background: ${({ theme }) => theme.colors.taskCreator.background};
  position: relative;
  margin-bottom: ${({ error }) => error ? '3.5rem' : '1.5rem'};
  transition: margin-bottom .3s ease;
`

export const Field = styled.textarea`
  width: 100%;
  align-self: center;
  height: 30px;
  resize: none;
  background: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.taskCreator.text};
  position: relative;
  z-index: 3;

  &::placeholder {
    color: ${({ theme }) => theme.colors.taskCreator.placeholder};
  }
`

export const ErrorStyled = styled(motion.span)`
  position: absolute;
  top: calc(100% + 0.5rem);
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.field.descError};
`

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`

export const PlaceholderStyled = styled.span`
  position: absolute;
  left: 2px;
  top: 6px;
  cursor: text;
  color: ${({ theme }) => theme.colors.taskCreator.placeholder};
  font-size: 1rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: .5em;
`
