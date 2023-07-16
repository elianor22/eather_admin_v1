import * as yup from 'yup'

export const validationInputField = (label, min = 5, max = 255) =>
  yup
    .string()
    .required(`${label} must be filled`)
    .min(min, `${label} Minimum ${min} Characters!`)
    .max(max, `${label} Maximum ${max} Characters!`)

export const validationNumberField = (label = 'input', min = 5, max = 255) =>
  yup
    .number(`${label} must be number!`)
    .required()
    .min(min, `${label} Minimum ${min}`)
    .max(max, `${label} Maximum ${max}`)
