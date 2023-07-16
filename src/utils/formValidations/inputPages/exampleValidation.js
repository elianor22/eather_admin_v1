import * as yup from 'yup'
import { validationInputField } from '../defaultValidations'

export const controlledInputValidations = yup.object({
  username: yup.string().required('must be a filled'),
  name: validationInputField('Input', 5, 50),
})
