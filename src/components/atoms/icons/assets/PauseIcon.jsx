import React from 'react'
import { default as MUIPauseIcon } from '@mui/icons-material/Pause'
import PropTypes from 'prop-types'

const PauseIcon = ({ color, size, sx }) => {
  return (
    <MUIPauseIcon
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

PauseIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default PauseIcon
