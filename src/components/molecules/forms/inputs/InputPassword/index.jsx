import React from 'react'
import PropTypes from 'prop-types'
import { InputAdornment, TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { inputSizes } from '../../../../../constants/input'

const InputPassword = ({ name, label, value, onCHange, size, sx }) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <TextField
      name={name}
      value={value}
      type={visible ? 'text' : 'password'}
      size={size}
      onChange={(e) => onCHange?.(e.target.value)}
      label={label}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={() => setVisible(!visible)}
            sx={{
              cursor: 'pointer',
            }}
          >
            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </InputAdornment>
        ),
      }}
      sx={{ ...sx }}
    />
  )
}

InputPassword.defaultProps = {
  size: 'small',
}

InputPassword.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(inputSizes),
  sx: PropTypes.any,
}

export default InputPassword
