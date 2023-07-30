import React from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PropTypes from 'prop-types'

const PreviousIcon = ({ color, size, sx }) => {
  return (
    <SkipPreviousIcon
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

PreviousIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default PreviousIcon
