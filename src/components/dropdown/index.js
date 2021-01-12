import { useState } from 'react'
import { Wrapper, ItemsContainer, Tape, ItemStyle, Overlay } from './dropdown.styles'
import { AnimatePresence } from 'framer-motion'
import { HiBriefcase, HiChevronDown, HiHome, HiUser, HiViewGrid } from 'react-icons/hi'

const categories = [
  { title: 'Personal', icon: <HiUser size={21} />, meta: 'personal' },
  { title: 'Hogar', icon: <HiHome size={21} />, meta: 'home' },
  { title: 'Trabajo', icon: <HiBriefcase size={21} />, meta: 'work' }
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
        { category === '' && <HiViewGrid size={21} />}
        { category === 'home' && <HiHome size={21} />}
        { category === 'personal' && <HiUser size={21} />}
        { category === 'work' && <HiBriefcase size={21} />}
        <HiChevronDown size={18} />
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
