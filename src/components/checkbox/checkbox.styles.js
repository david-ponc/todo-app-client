import styled from 'styled-components'
import { HiCheck } from 'react-icons/hi'

export const Wrapper = styled.label`
  display: grid;
  grid-template-columns: 18px auto;
  gap: 0.875rem;
  align-items: center;
`

export const CheckboxStyled = styled.div`
  cursor: pointer;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 0.4375rem;
  background: ${({ theme, state }) => !state ? theme.colors.check.background : theme.colors.check.checked};
  box-shadow: ${({ theme }) => theme.colors.check.border};
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HiCheckStyled = styled(HiCheck)`
  fill: ${({ theme }) => theme.colors.check.color};
  color: ${({ theme }) => theme.colors.check.color};
  stroke-width: 1.125;
  margin-top: 1px;
`

export const Label = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.body.secondText};
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
