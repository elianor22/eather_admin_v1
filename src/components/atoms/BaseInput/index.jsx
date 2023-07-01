import React from 'react'
import PropTypes from 'prop-types'
import { InputAdornment, TextField } from '@mui/material'
import { inputSizes, inputTypes } from '../../../constants/input'

const BaseInput = ({
  name,
  type = 'text',
  variant,
  value,
  onChange,
  defaultValue,
  size = 'small',
  placeholder,
  color,
  disabled,
  notAllow,
  autoFocus,
  fullWidth,
  startAdornmentText,
  endAdornmentText,
  error,
  sx,
  ...props
}) => {
  console.log(endAdornmentText)
  return (
    <TextField
      id={name}
      name={name}
      variant={variant}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      defaultValue={defaultValue}
      type={type}
      size={size}
      placeholder={placeholder}
      color={color}
      disabled={disabled}
      autoFocus={autoFocus}
      fullWidth={fullWidth}
      InputProps={{
        ...(startAdornmentText && {
          startAdornment: <InputAdornment position="start">{startAdornmentText}</InputAdornment>,
        }),
        ...(endAdornmentText && {
          endAdornment: <InputAdornment position="end">{endAdornmentText}</InputAdornment>,
        }),
      }}
      error={error}
      sx={{
        ...(notAllow && {
          cursor: 'not-allowed !important',
        }),
        ...sx,
      }}
      {...props}
    />
  )
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(inputTypes),
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  size: PropTypes.oneOf(inputSizes),
  placeholder: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  notAllow: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.bool,
}

export default BaseInput
