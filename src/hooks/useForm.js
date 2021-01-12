import { useState } from 'react'

const useForm = ({ initialFields }) => {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState([])

  const reset = () => {
    const mapFields = new Map(Object.entries(fields))

    mapFields.forEach(field => {
      if (typeof field.value === 'string') {
        field.value = ''
        field.failed = false
      }
    })
    setFields(initialFields)
    setErrors([])
  }

  const validate = (field) => {
    field.failed = !field.regex.test(field.value) || field.value === ''
  }

  const validationAll = (fields) => {
    const mapFields = new Map(Object.entries(fields))

    mapFields.forEach(field => {
      if (typeof field.value === 'string') {
        validate(field)
        setFields({ ...fields, [name]: field })
      }
    })
    if (mapFields.get('confirm')) {
      if (mapFields.get('password').value !== mapFields.get('confirm').value) {
        fields.confirm.failed = true
        fields.confirm.message = 'La confirmación debe coincidir con la contraseña'
        setFields({ ...fields, [name]: fields.confirm })
      } else {
        fields.confirm.message = 'La confirmación debe contener al menos un mayúscula, un numero, un caracter especial y un minimo de 8 caracteres'
        setFields({ ...fields, [name]: fields.confirm })
      }
    }
  }

  const onChange = evt => {
    const { value, name, type, checked } = evt.target
    const field = { ...fields[name] }
    field.value = type === 'checkbox' ? checked : value
    if (type === 'email' || type === 'password' || type === 'text') {
      validate(field)
    }
    setFields({ ...fields, [name]: field })
  }

  const defineMessages = (messages) => {
    messages.forEach(item => {
      const { name, message } = item
      fields[name].message = message
      setFields({ ...fields, [name]: fields[name] })
    })
  }

  return {
    fields,
    errors,
    getInput: (name) => ({ name, value: fields[name].value, onChange }),
    getCheckbox: (name) => ({ name, checked: fields[name].value, onChange }),
    validationAll,
    reset,
    defineMessages
  }
}

export default useForm
