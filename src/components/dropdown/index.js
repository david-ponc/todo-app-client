import ChevronDown from 'components/icons/chevronDown'
import Grid from 'components/icons/grid'
import Home from 'components/icons/home'
import Personal from 'components/icons/personal'
import Work from 'components/icons/work'
import { useState } from 'react'
import { Wrapper, ItemsContainer, Tape, ItemStyle, Overlay } from './dropdown.styles'
import { AnimatePresence } from 'framer-motion'

const categories = [
  { title: 'Personal', icon: <Personal />, meta: 'personal' },
  { title: 'Hogar', icon: <Home />, meta: 'home' },
  { title: 'Trabajo', icon: <Work />, meta: 'work' }
]

export default function Dropdown ({ category, setCategory }) {
  const [visible, setVisible] = useState(false)

  const handleClick = (current) => {
    setCategory(current)
    setVisible(false)
  }

  return (
    <Wrapper>
      <Overlay visible={visible} onClick={() => setVisible(false)} />
      <Tape onClick={() => setVisible(!visible)}>
        { category === '' && <Grid />}
        { category === 'home' && <Home />}
        { category === 'personal' && <Personal />}
        { category === 'work' && <Work />}
        <ChevronDown />
      </Tape>
      <AnimatePresence>
        { visible &&
          (<ItemsContainer onMouseLeave={() => setVisible(false)} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
            {
              categories.map(({ title, icon, meta }, i) => {
                return (
                  <Item active={category === meta} key={i} title={title} icon={icon} onClick={() => handleClick(meta)} />
                )
              })
            }
          </ItemsContainer>
          )
        }
      </AnimatePresence>
    </Wrapper>
  )
}

function Item ({ title, icon, ...props }) {
  return (
    <ItemStyle {...props} >{title} {icon}</ItemStyle>
  )
}
