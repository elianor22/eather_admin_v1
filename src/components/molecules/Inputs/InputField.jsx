import React from 'react'
import PropTypes from 'prop-types'
import { InputAdornment, TextField } from '@mui/material'
import { inputSizes, inputTypes } from '../../../constants/input'

const InputField = ({
  name,
  type,
  variant,
  value,
  onChange,
  defaultValue,
  size,
  label,
  placeholder,
  color,
  disabled,
  notAllow,
  autoFocus,
  fullWidth,
  onBlur,
  startAdornmentText,
  endAdornmentText,
  startIcon,
  endIcon,
  error,
  InputProps,
  sx,
  ...props
}) => {
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      variant={variant}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      defaultValue={defaultValue}
      type={type}
      size={size}
      placeholder={placeholder}
      color={color}
      onBlur={onBlur}
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
        ...(startIcon && {
          startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
        }),
        ...(endIcon && {
          endAdornment: <InputAdornment position="end">{endIcon}</InputAdornment>,
        }),

        ...InputProps,
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

InputField.defaultProps = {
  type: 'text',
  size: 'small',
}

InputField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(inputTypes),
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  size: PropTypes.oneOf(inputSizes),
  placeholder: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  notAllow: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.bool,
  InputProps: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
}

export default InputField
