import Check from 'components/icons/check'
import { varsCheck } from 'styles/variants'
import { Container, HiddenCheckbox, CustomCheckbox, Wrapper, Label } from './checkbox.styles'

export default function Checkbox ({ checked, ...props }) {
  return (
  <Wrapper>
      <Container
        variants={varsCheck} {...props} >
        <HiddenCheckbox checked={checked} {...props} />
        <CustomCheckbox checked={checked}>
          <Check size={18} />
        </CustomCheckbox>
      </Container>
      {props.label && <Label>{props.label}</Label>}
  </Wrapper>
  )
}
