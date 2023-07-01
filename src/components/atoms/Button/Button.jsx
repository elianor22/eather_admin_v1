/* eslint-disable no-unused-vars */
import React from 'react'
import { IconButton, Button as MUIButton } from '@mui/material'
import PropTypes from 'prop-types'
import { buttonColors, buttonIconPosition, buttonTypes } from '../../../constants/button'
// import { ColorProps } from '../../../utils/thema/colors'

const Button = ({ variant, onClick, children, startIcon, endIcon, sx, color, ...props }) => {
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
      sx={{
        ...sx,
        // backgroundColor: ColorProps['button']['main'],
        // color: '#FFFFFF',
        // '&:hover': {
        //   backgroundColor: '#5826E5',
        // },
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
  sx: PropTypes.object,
}

export default Button
