import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Landing = styled(motion.main)`
  max-width: var(--content-max-width);
  margin: 3.5rem auto 1.5rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 1rem;
    }
  }
`

export const Title = styled.h1`
  line-height: 1;
  background: ${({ theme }) => theme.colors.body.gradientText};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display: inline-block;
  margin: 0;
`

export const Subtitle = styled.h2`
  font-weight: 300;
  @media screen and (max-width: 768px) {
    & {
      margin: 0.5rem 0;
      line-height: 1.1;
    }
  }
`
export const Leyend = styled.h5`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.body.secondText};
  margin-bottom: 1.5rem;
`

export const TaskContainer = styled(motion.section)`
  max-width: 558px;
  margin: 5rem auto 1rem;
  @media screen and (max-width: 768px) {
    & {
      padding: 0 1.5rem;
    }
  }
  /* display: grid;
  grid-auto-rows: rows;
  gap: 1rem; */
`

// export const Header = styled.header`
//   max-width: var(--content-max-width);
//   margin: 0 auto;
// `
