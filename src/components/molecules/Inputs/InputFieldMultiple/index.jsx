import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { inputVariants } from '../../../../constants/input'

const InputFieldMulti = ({
  variant,
  name,
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  rows,
  fullWidth,
  sx,
  ...props
}) => {
  return (
    <TextField
      id={name}
      variant={variant}
      name={name}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      rows={rows}
      placeholder={placeholder}
      multiline
      sx={{ ...sx }}
      {...props}
    />
  )
}

InputFieldMulti.defaultProps = {
  rows: 4,
  fullWidth: true,
}

InputFieldMulti.propTypes = {
  variant: PropTypes.oneOf(inputVariants),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  sx: PropTypes.any,
}

export default InputFieldMulti
