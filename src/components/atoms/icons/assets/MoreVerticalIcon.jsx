import MoreVertIcon from '@mui/icons-material/MoreVert'
import React from 'react'
import PropTypes from 'prop-types'

const MoreVerticalIcon = ({ color, size, sx }) => {
  return (
    <MoreVertIcon
      fontSize={size}
      color={color}
      sx={{
        ...sx,
      }}
    />
  )
}

MoreVerticalIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default MoreVerticalIcon
