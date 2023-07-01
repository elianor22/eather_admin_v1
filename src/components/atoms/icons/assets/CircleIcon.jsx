import { default as MUICircleIcon } from '@mui/icons-material/Circle'
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
const CircleIcon = ({ color, size, sx }) => {
  return (
    <MUICircleIcon
      fontSize={size}
      sx={{
        minWidth: '18px !important',
        color: color,
        ...sx,
        width: '100% !important',
      }}
    />
  )
}

CircleIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default CircleIcon
