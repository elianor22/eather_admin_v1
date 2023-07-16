import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormLabel, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { inputSizes } from '../../../../constants/input'
import { Spacing } from '../../../../utils/thema/spacing'

const ControlledInput = ({
  name,
  label,
  value,
  onChange,
  control,
  errors,
  onBlur,
  size,
  fullWidth,
  sxFC,
  sxFl,
  sx,
}) => {
  return (
    <FormControl sx={{ mb: Spacing['s'], ...sxFC }}>
      <FormLabel sx={{ ...sxFl }}>{label}</FormLabel>
      <Controller
        name={name}
        defaultValue=""
        control={control}
        id={name}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              value={value || field.value}
              onChange={(e) => {
                if (onChange) {
                  onChange(e.target.value)
                } else {
                  field.onChange(e.target.value)
                }
              }}
              onBlur={(e) => {
                if (onBlur) {
                  onBlur?.(e)
                } else {
                  field.onBlur(e)
                }
              }}
              fullWidth={fullWidth}
              size={size}
              error={!!errors[name]}
              helperText={errors[name] && errors[name].message}
              sx={{
                '& .MuiFormHelperText-root ': {
                  mx: '0px',
                },
                ...sx,
              }}
            />
          )
        }}
      />
    </FormControl>
  )
}

ControlledInput.defaultProps = {
  size: 'small',
}

ControlledInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.any,
  error: PropTypes.any,
  value: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf(inputSizes),
}

export default ControlledInput
