import { Field, Wrapper, Desc, Label } from './text_field.styles'
import { AnimateSharedLayout } from 'framer-motion'

export default function TextField ({ type, label, desc, placeholder, value, error, ...props }) {
  return (
    <AnimateSharedLayout>
      <Wrapper desc={desc}>
        {label && <Label>{label}</Label>}
        <Field
          type={type}
          placeholder={placeholder}
          value={value}
          error={error.failed}
          {...props}
        />
        { !error.failed && (desc && <Desc>{desc}</Desc>) }
        { error.failed && <Desc initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} error={error.failed}>{error.message}</Desc> }
      </Wrapper>
    </AnimateSharedLayout>
  )
}
