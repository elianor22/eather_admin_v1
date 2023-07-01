import React from 'react'
import { default as MUIStarIcon } from '@mui/icons-material/Star'
import PropTypes from 'prop-types'

const StarIcon = ({ color, size, sx }) => {
  return (
    <MUIStarIcon
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

StarIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default StarIcon
