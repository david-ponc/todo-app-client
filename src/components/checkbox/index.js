import { Wrapper, Label, HiddenCheckbox, CheckboxStyled, HiCheckStyled } from './checkbox.styles'

export default function Checkbox ({ size, checked, ...props }) {
  return (
  <Wrapper>
      <HiddenCheckbox checked={checked} {...props} />
      <CheckboxStyled size={size} state={checked} {...props}>
        {checked && <HiCheckStyled />}
      </CheckboxStyled>
      {props.label && <Label>{props.label}</Label>}
  </Wrapper>
  )
}
