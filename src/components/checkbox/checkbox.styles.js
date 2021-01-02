import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 0.875rem;
  align-items: center;
`

export const Container = styled(motion.label)`
  cursor: pointer;
  width: 18px;
  height: 18px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  display: none;
`

export const CustomCheckbox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: grid;
  place-items: center;
  background: ${({ theme, checked }) => checked ? theme.colors.check.checked : theme.colors.check.background};
  box-shadow: ${({ theme }) => theme.colors.check.border};
  color: ${({ theme }) => theme.colors.check.color};
  transition: background 230ms ease;

  & > svg {
    visibility: ${({ checked }) => checked ? 'visible' : 'hidden'};
  }
`

export const Label = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.body.secondText};
`
