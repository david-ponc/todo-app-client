import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const Form = styled(motion.form)`
  max-width: 272px;
  width: 272px;
  display: grid;
  grid-auto-flow: row;
  gap: 2rem 1.5rem;

  @media screen and (max-width: 768px) {
      max-width: 100%;
      width: 100%;
      padding: 0 2rem;
  }
`

export const Title = styled.h5`
  text-align: center;
  margin: 0;
`

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
`

export const Text = styled.p`
  text-align: center;
  font-size: 0.875rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.body.secondText};
  @media screen and (max-width: 768px) {
      font-size: 1rem;
  }
`

export const LinkStyled = styled.a`
  font-weight: var(--medium);
  font-size: var(--s-small);
  color: ${({ theme }) => theme.colors.body.secondText};
  justify-self: center;
`
