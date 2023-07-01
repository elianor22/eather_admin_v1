import React from 'react'
import {default as MUIFavoriteIcon} from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types'

const FavoriteIcon = ({ color, size, sx }) => {
  return (
    <MUIFavoriteIcon
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

FavoriteIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default FavoriteIcon
