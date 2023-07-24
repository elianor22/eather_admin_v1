/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { Autocomplete, FormControl, FormLabel, MenuItem, TextField } from '@mui/material'
import { Spacing } from '../../../../../utils/thema/spacing'
import { inputSizes } from '../../../../../constants/input'

const ControlledAutocomplete = ({
  name,
  control,
  renderOption,
  options,
  errors,
  value,
  onChange,
  inputValue,
  onInputChange,
  isOptionEqualToValue,
  getOptionLabel,
  label,
  size,
  placeholder,
  multiple,
  sx,
  sxFC,
  sxFL,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={multiple ? [] : null}
      render={({ field }) => (
        <FormControl
          fullWidth
          sx={{
            mb: Spacing['sm'],
            ...sxFC,
          }}
        >
          <FormLabel
            htmlFor={name}
            sx={{
              mb: Spacing['xxs'],
              ...sxFL,
            }}
          >
            {label}
          </FormLabel>

          <Autocomplete
            {...field}
            id={name}
            multiple={multiple}
            options={options}
            value={value || field.value}
            onChange={(_, val) => {
              if (onChange) {
                onChange?.(val)
              } else {
                field.onChange(val)
              }
            }}
            inputValue={inputValue}
            onInputChange={onInputChange}
            getOptionLabel={(opt) => {
              if (getOptionLabel) {
                return getOptionLabel(opt)
              } else {
                return opt.label
              }
            }}
            isOptionEqualToValue={(option, value) => {
              if (isOptionEqualToValue) {
                return isOptionEqualToValue(option, value)
              } else {
                return option.value === value.value
              }
            }}
            renderOption={(props, option) => {
              if (renderOption) {
                return renderOption(props, option)
              } else {
                return (
                  <MenuItem key={option.label} {...props}>
                    {option.label}
                  </MenuItem>
                )
              }
            }}
            renderInput={(props) => (
              <TextField
                {...props}
                error={!!errors[name]}
                helperText={errors[name] && errors[name].message}
                placeholder={placeholder}
              />
            )}
            size={size}
            sx={{
              ...sx,
            }}
            {...props}
          />
        </FormControl>
      )}
    />
  )
}

ControlledAutocomplete.defaultProps = {
  size: 'small',
  placeholder: 'Search something...',
  multiple: false,
}

ControlledAutocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
  isOptionEqualToValue: PropTypes.func,
  getOptionLabel: PropTypes.func,
  size: PropTypes.oneOf(inputSizes),
  placeholder: PropTypes.string,
}

export default ControlledAutocomplete
