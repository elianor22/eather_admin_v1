import React from 'react'
import {default as MUIShuffleIcon} from '@mui/icons-material/Shuffle';
import PropTypes from 'prop-types'

const ShuffleIcon = ({ color, size, sx }) => {
  return (
    <MUIShuffleIcon
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

ShuffleIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default ShuffleIcon
