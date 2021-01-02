import Sun from 'components/icons/sun'
import Moon from 'components/icons/moon'
import { Toggle } from './toggle_theme.styles'
import { useContext } from 'react'
import ThemeContext from 'context/ThemeContext'
import { motion } from 'framer-motion'

const variantsSun = {
  animate: { rotate: 10, opacity: 1 },
  whileTap: { rotate: 40, x: -3, y: -2, opacity: 0 }
}

const variantsMoon = {
  animate: { rotate: -10, scale: 1, opacity: 1 },
  whileTap: { rotate: 40, scale: 0, opacity: 0 }
}

export default function ToggleTheme ({ action }) {
  const { theme } = useContext(ThemeContext)

  const handleToggle = () => {
    action()
  }
  return (
    <Toggle onClick={handleToggle}>
      {theme.title === 'dark' && <motion.div variants={variantsSun} animate="animate" whileTap="whileTap"><Sun size={22} /></motion.div>}
      {theme.title === 'light' && <motion.div variants={variantsMoon} animate="animate" whileTap="whileTap"><Moon size={21} /></motion.div>}
    </Toggle>
  )
}
