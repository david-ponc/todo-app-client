import { Wrapper, IconContainer, ContentContainer, Circles } from './alert.styles'
import { HiBadgeCheck, HiExclamation, HiExclamationCircle, HiInformationCircle, HiXCircle } from 'react-icons/hi'

function Alert ({ type, visible, action, title, content }) {
  return (
    <>
      {visible && <AlertContent type={type} visible={visible} action={action} title={title} content={content} />}
    </>
  )
}

function AlertContent ({ type, visible, action, title, content }) {
  return (
      <Wrapper
        type={type}
        initial={{ opacity: 0, y: -20 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <IconContainer type={type}>
          <Circles type={type} />
          {type === 'success' && <HiBadgeCheck size={42}/>}
          {type === 'error' && <HiExclamationCircle size={42}/>}
          {type === 'warning' && <HiExclamation size={42}/>}
          {type === 'info' && <HiInformationCircle size={42}/>}
        </IconContainer>
        <ContentContainer type={type}>
          <h5>{title}</h5>
          {
            // eslint-disable-next-line multiline-ternary
            Array.isArray(content) ? <ul style={{ margin: 0 }}>{
              content.map((item, i) => {
                return <li key={i}><p>{item}</p></li>
              })
            }</ul> : content
          }
        </ContentContainer>
        <HiXCircle onClick={() => action({ error: content, visible: false })} />
      </Wrapper>
  )
}

export default Alert
