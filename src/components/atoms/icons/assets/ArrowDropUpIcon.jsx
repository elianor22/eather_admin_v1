import { default as MUIArrowDropUpIcon } from '@mui/icons-material/ArrowDropUp'
import React from 'react'
import PropTypes from 'prop-types'

const ArrowDropUpIcon = ({ color, size, sx }) => {
  return (
    <MUIArrowDropUpIcon
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

ArrowDropUpIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default ArrowDropUpIcon
