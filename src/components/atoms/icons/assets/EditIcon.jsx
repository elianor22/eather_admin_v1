import { default as MUIEditIcon } from '@mui/icons-material/Edit'
import React from 'react'
import PropTypes from 'prop-types'

const EditIcon = ({ color, size, sx }) => {
  return (
    <MUIEditIcon
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
EditIcon.defaultProps = {
  color: 'info',
}
EditIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default EditIcon
