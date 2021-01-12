import Dropdown from 'components/dropdown'
import { useRef, useState, useEffect } from 'react'
import { Field, Wrapper, ErrorStyled, FieldContainer, PlaceholderStyled } from './task_creator.styles'
import { createTask } from 'services/api'
import { parseCookies } from 'nookies'
import EnterCommand from 'components/icons/enter-command'

const DEFAULT_HEIGHT = 30

function setInputHeight (evt, initial) {
  if (evt) {
    const target = evt.target ? evt.target : evt
    target.style.height = `${initial}px`
    target.style.height = `${target.scrollHeight}px`
  } else {
    evt.style.height = `${initial}px`
  }
}

export default function TaskCreator ({ tasks, setTasks, isMobileView, placeholder }) {
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const areaRef = useRef(null)

  useEffect(() => {
    category !== '' && setError('')
    content.length && setError('')
  }, [category, content])

  const handleSubmit = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { value } = areaRef.current
      if (value !== '' && category !== '') {
        const { 'auth-token': authToken } = parseCookies(null)
        const { hasExistedTask, task } = await createTask(authToken, { content: value, category })
        if (hasExistedTask) {
          setTasks([task, ...tasks])
          setContent('')
          setCategory('')
          areaRef.current.style.height = `${DEFAULT_HEIGHT}px`
          setError('')
        }
      } else {
        !value ? setError('El contenido de la tarea no es válido') : setError('Debe seleccionar una categoría para crear una tarea')
      }
    }
  }

  const handleChange = evt => {
    setInputHeight(evt, DEFAULT_HEIGHT)
    setContent(evt.target.value)
  }

  return (
    <>
      <Wrapper error={error}>
        <FieldContainer>
          <Field
            onKeyPress={handleSubmit}
            value={content}
            ref={areaRef}
            placeholder={''}
            onChange={handleChange}
          />
          {!content && !isMobileView && <PlaceholderStyled>{placeholder[0]} <EnterCommand/> {placeholder[1]}</PlaceholderStyled>}
          {!content && isMobileView && <PlaceholderStyled><EnterCommand/> {placeholder[1]}</PlaceholderStyled>}
        </FieldContainer>
        <Dropdown category={category} setCategory={setCategory} />
        {error && <ErrorStyled initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{error}</ErrorStyled>}
      </Wrapper>
    </>
  )
}
