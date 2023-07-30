import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormLabel, Autocomplete as MUIAutocomplate, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { Spacing } from '../../../../../utils/thema/spacing'

const SimpleAutocomplate = ({
  name,
  control,
  options,
  errors,
  optionLabel,
  getValueBy,
  renderKey,
  label,
  placeholder,
  size,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => {
        return (
          <FormControl fullWidth sx={{ mb: Spacing['s'] }}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <MUIAutocomplate
              {...field}
              id={name}
              options={options}
              isOptionEqualToValue={(o, v) => o[getValueBy] === v[getValueBy]}
              getOptionLabel={(option) => option[optionLabel]}
              onChange={(_, v) => field.onChange(v)}
              renderOption={(props, options) => (
                <li key={options[renderKey]} {...props}>
                  {options[optionLabel]}
                </li>
              )}
              renderInput={(props) => (
                <TextField
                  {...props}
                  placeholder={placeholder}
                  error={!!errors[name]}
                  helperText={errors[name] && errors[name].message}
                />
              )}
              size={size}
            />
          </FormControl>
        )
      }}
    />
  )
}
SimpleAutocomplate.defaultProps = {
  size: 'small',
  optionLabel: 'label',
  getValueBy: 'value',
  optionValue: 'label',
  renderKey: 'label',
  placeholder: 'Type something',
}

SimpleAutocomplate.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  errors: PropTypes.any.isRequired,
  label: PropTypes.string,
  size: PropTypes.string,
  optionLabel: PropTypes.string,
  getValueBy: PropTypes.string,
  placeholder: PropTypes.string,
  renderKey: PropTypes.string.isRequired,
}

export default SimpleAutocomplate
