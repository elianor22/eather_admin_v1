import GridViewIcon from '@mui/icons-material/GridView'
import React from 'react'
import PropTypes from 'prop-types'

const ComponentIcon = ({ color, size, sx }) => {
  return (
    <GridViewIcon
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

ComponentIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default ComponentIcon
