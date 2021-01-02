import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  height: calc(80vh - 85px);
  display: grid;
  place-items: center;
`

export const Wrapper = styled(motion.main)`
  max-width: var(--content-max-width);
  margin: 0 auto;
  text-align: center;
`
