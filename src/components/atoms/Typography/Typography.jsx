import { Typography as MUITypography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

export const typoType = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2']

const Typography = ({ children, variant = 'body1', fontSize, fontWeight, color, sx }) => {
  return (
    <MUITypography variant={variant} fontSize={fontSize} fontWeight={fontWeight} color={color} sx={{ ...sx }}>
      {children}
    </MUITypography>
  )
}

Typography.propTypes = {
  variant: PropTypes.oneOf(typoType),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  sx: PropTypes.object,
  children: PropTypes.node,
}

export default Typography
