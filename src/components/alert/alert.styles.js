import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  max-width: 768px;
  position: absolute;
  display: grid;
  grid-template-columns: 66px 1fr;
  grid-auto-flow: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 11px;
  padding: 1rem 2.5rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 5rem;
  box-shadow: ${({ theme }) => theme.colors.alert.shadow};
  z-index: 5;
  ${({ theme, type }) => type === 'success' && `background: ${theme.colors.alert.success.background};`}
  ${({ theme, type }) => type === 'error' && `background: ${theme.colors.alert.error.background};`}
  ${({ theme, type }) => type === 'warning' && `background: ${theme.colors.alert.warning.background};`}
  ${({ theme, type }) => type === 'info' && `background: ${theme.colors.alert.info.background};`}
  
  & > svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.alert.close};
  }
`
export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid blue;
  display: grid;
  place-items: center;
  position: relative;
  ${({ theme, type }) => type === 'success' && `color: ${theme.colors.alert.success.icon};`}
  ${({ theme, type }) => type === 'error' && `color: ${theme.colors.alert.error.icon};`}
  ${({ theme, type }) => type === 'warning' && `color: ${theme.colors.alert.warning.icon};`}
  ${({ theme, type }) => type === 'info' && `color: ${theme.colors.alert.info.icon};`}
`
export const ContentContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  
  h5, p {
    margin: 0;
    ${({ theme, type }) => type === 'success' && `color: ${theme.colors.alert.success.title};`}
    ${({ theme, type }) => type === 'error' && `color: ${theme.colors.alert.error.title};`}
    ${({ theme, type }) => type === 'warning' && `color: ${theme.colors.alert.warning.title};`}
    ${({ theme, type }) => type === 'info' && `color: ${theme.colors.alert.info.title};`}
  }
  h5 {
    font-weight: 500;
  }
  p {
    font-size: 0.875rem;
    ${({ theme, type }) => type === 'success' && `color: ${theme.colors.alert.success.subtitle};`}
    ${({ theme, type }) => type === 'error' && `color: ${theme.colors.alert.error.subtitle};`}
    ${({ theme, type }) => type === 'warning' && `color: ${theme.colors.alert.warning.subtitle};`}
    ${({ theme, type }) => type === 'info' && `color: ${theme.colors.alert.info.subtitle};`}
  }
`

export const Circles = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 3rem;
  height: 3rem;
  opacity: 0.32;
  border-radius: 50%;
  ${({ theme, type }) => type === 'success' && `background: ${theme.colors.alert.success.circles};`}
  ${({ theme, type }) => type === 'error' && `background: ${theme.colors.alert.error.circles};`}
  ${({ theme, type }) => type === 'warning' && `background: ${theme.colors.alert.warning.circles};`}
  ${({ theme, type }) => type === 'info' && `background: ${theme.colors.alert.info.circles};`}
  
  &::before {
    content: "";
    position: absolute;
    margin: auto;
    left: -18%;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4.125rem;
    height: 4.125rem;
    border-radius: 50%;
    ${({ theme, type }) => type === 'success' && `background: ${theme.colors.alert.success.circles};`}
    ${({ theme, type }) => type === 'error' && `background: ${theme.colors.alert.error.circles};`}
    ${({ theme, type }) => type === 'warning' && `background: ${theme.colors.alert.warning.circles};`}
    ${({ theme, type }) => type === 'info' && `background: ${theme.colors.alert.info.circles};`}
  }
`
