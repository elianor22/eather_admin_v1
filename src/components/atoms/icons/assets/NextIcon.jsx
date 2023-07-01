import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import PropTypes from 'prop-types'

const NextIcon = ({ color, size, sx }) => {
  return (
    <SkipNextIcon
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

NextIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default NextIcon
