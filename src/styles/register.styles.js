import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 2rem;
    }
  }
`

export const Wrapper = styled(motion.main)`
  max-width: 568px;
  //margin: 7rem auto 1rem;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  & > p {
    grid-column: 1 / span 2;
  }
  
  & > button {
    grid-column: 1 / span 2;
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
      margin-bottom: 2rem;
    }
    & > p {
      grid-column: auto;
    }
    
    button {
      grid-column: auto;
    }
  }
`

export const Title = styled.h5`
  margin: 0;
`

export const Text = styled.p`
  font-size: 0.875rem;
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.body.secondText};
  @media screen and (max-width: 768px) {
      font-size: 1rem;
      margin: 1rem 0 2rem;
  }
`

export const Terms = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.body.secondText};
`

export const LinkStyled = styled.a`
  font-weight: var(--medium);
  font-size: var(--s-small);
  color: ${({ theme }) => theme.colors.body.secondText};
  display: block;
`
