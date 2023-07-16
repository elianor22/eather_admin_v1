import React from 'react'
import { IconButton, Button as MUIButton } from '@mui/material'
import PropTypes from 'prop-types'
import { buttonColors, buttonIconPosition, buttonTypes } from '../../../constants/button'

const Button = ({ variant, onClick, children, startIcon, endIcon, sx, color, type, ...props }) => {
  if (variant === 'icon') {
    return (
      <IconButton onClick={onClick} sx={{ ...sx }} {...props}>
        {children}
      </IconButton>
    )
  }
  return (
    <MUIButton
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
      type={type}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </MUIButton>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(buttonTypes),
  children: PropTypes.any,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(buttonIconPosition),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.oneOf(buttonColors),
  type: PropTypes.string,
  sx: PropTypes.object,
}

export default Button
