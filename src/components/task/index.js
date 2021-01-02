import Checkbox from 'components/checkbox'
import Personal from 'components/icons/personal'
import Work from 'components/icons/work'
import Home from 'components/icons/home'
import { varsTask, varsTextTask } from 'styles/variants'
import { Container, Text } from './task.styles'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Task ({ text, category, taskCompleted, isMobile }) {
  const [checked, setChecked] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    checked && taskCompleted()
  }, [checked])

  const handleChange = evt => {
    const { checked } = evt.target
    checked && setChecked(checked)
  }

  return (
    <Container
      whileHover={isMobile ? '' : 'hovered'}
      initial={isMobile ? 'animate' : 'initial'}
      animate="animate"
      exit="exit"
      variants={varsTask}
    >
      <Checkbox checked={checked} onChange={handleChange} />
        <motion.div style={{ position: 'static' }} initial={isMobile ? 'hovered' : 'initial'} variants={varsTextTask}>
        <Text ref={textRef} checked={checked}>
          {text}
        </Text>
      </motion.div>
      {category === 'work' && <Work />}
      {category === 'personal' && <Personal />}
      {category === 'home' && <Home />}
    </Container>
  )
}
