import Close from 'components/icons/close'
import BadgeCheck from 'components/icons/badge_check'
import Exclamation from 'components/icons/exclamation'
import ExclamationCircle from 'components/icons/exclamation_circle'
import Info from 'components/icons/info'
import { Wrapper, IconContainer, ContentContainer, Circles } from './alert.styles'

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
          {type === 'success' && <BadgeCheck size={42}/>}
          {type === 'error' && <ExclamationCircle size={42}/>}
          {type === 'warning' && <Exclamation size={42}/>}
          {type === 'info' && <Info size={42}/>}
        </IconContainer>
        <ContentContainer type={type}>
          <h5>{title}</h5>
          {
            Array.isArray(content) ? <ul style={{ margin: 0 }}>{
              content.map((item, i) => {
                return <li key={i}><p>{item}</p></li>
              })
            }</ul> : content
          }
        </ContentContainer>
        <Close onClick={() => action({ error: content, visible: false })} />
      </Wrapper>
  )
}

export default Alert
