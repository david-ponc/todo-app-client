import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: grid;
  place-items: center;
`

export const Wrapper = styled(motion.main)`
  max-width: 568px;
  //margin: 7rem auto 1rem;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  & > p {
    grid-column: 1 / span 2;
  }
  
  button {
    grid-column: 1 / span 2;
  }
`

export const Title = styled.h5`
  margin: 0;
`

export const Text = styled.p`
  font-size: 0.875rem;
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.body.secondText};
`

export const Terms = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.body.secondText};
`
