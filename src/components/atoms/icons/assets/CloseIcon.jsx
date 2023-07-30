import { default as MUICloseIcon } from '@mui/icons-material/Close'
import React from 'react'
import PropTypes from 'prop-types'

const CloseIcon = ({ color, size, sx }) => {
  return (
    <MUICloseIcon
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

CloseIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default CloseIcon
