import React from 'react'
import { default as BackupTableIcon } from '@mui/icons-material/BackupTable'
import PropTypes from 'prop-types'

const TableIcon = ({ color, size, sx }) => {
  return (
    <BackupTableIcon
      size={size}
      sx={{
        minWidth: '2px',
        color: color,
        ...sx,
      }}
    />
  )
}

TableIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default TableIcon
