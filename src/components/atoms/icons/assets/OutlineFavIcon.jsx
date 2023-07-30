import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PropTypes from 'prop-types'

const OutlineFavIcon = ({ color, size, sx }) => {
  return (
    <FavoriteBorderIcon
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

OutlineFavIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default OutlineFavIcon
