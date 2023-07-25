import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PropTypes from 'prop-types'

const PlayIcon = ({ color, size, sx }) => {
  return (
    <PlayArrowIcon
      fontSize={size}
      color={color}
      sx={{
        minWidth: '18px !important',
        // color: color,
        ...sx,
        width: '100% !important',
      }}
    />
  )
}

PlayIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default PlayIcon
