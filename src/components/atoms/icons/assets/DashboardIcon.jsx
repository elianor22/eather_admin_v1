import React from 'react'
import { default as MUIDashboardIcon } from '@mui/icons-material/Dashboard'
import PropTypes from 'prop-types'

const DashboardIcon = ({ color, size, sx }) => {
  return (
    <MUIDashboardIcon
      size={size}
      sx={{
        minWidth: '18px !important',
        color: color,
        ...sx,
        width: '100% !important',
      }}
    />
  )
}

DashboardIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default DashboardIcon
