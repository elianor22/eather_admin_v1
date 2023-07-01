import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import React from 'react'
import PropTypes from 'prop-types'

const MoreHorizontalIcon = ({ color, size, sx }) => {
  return (
    <MoreHorizIcon
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

MoreHorizontalIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default MoreHorizontalIcon
