import { Typography as MUITypography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

export const typoTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2']

const Typography = ({ children, variant = 'body1', fontSize, fontWeight, color, sx, ...props }) => {
  return (
    <MUITypography
      variant={variant}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      sx={{ ...sx }}
      {...props}
    >
      {children}
    </MUITypography>
  )
}

Typography.propTypes = {
  variant: PropTypes.oneOf(typoTypes, 'body1'),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  sx: PropTypes.object,
  children: PropTypes.node,
}

export default Typography
