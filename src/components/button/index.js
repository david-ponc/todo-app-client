import { Container } from './button.styles'
import Loader from 'components/Loader'

export default function Button ({ primary, children, action, compact, processing }) {
  const handleAction = () => {
    action()
  }

  return (
    <Container whileTap={{ scale: 0.92 }} primary={primary} compact={compact} onClick={handleAction} processing={processing}>
      {processing ? <Loader size={20} /> : children}
    </Container>
  )
}
