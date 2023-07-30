import { default as MUIDeleteIcon } from '@mui/icons-material/Delete'
import React from 'react'
import PropTypes from 'prop-types'

const DeleteIcon = ({ color, size, sx }) => {
  return (
    <MUIDeleteIcon
      fontSize={size}
      color={color}
      sx={{
        minWidth: '18px !important',
        ...sx,
        width: '100% !important',
      }}
    />
  )
}
DeleteIcon.defaultProps = {
  color: 'error',
}
DeleteIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default DeleteIcon
