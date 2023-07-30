import React from 'react'
import { default as MUIRepeatIcon } from '@mui/icons-material/Repeat'
import PropTypes from 'prop-types'

const RepeatIcon = ({ color, size, sx }) => {
  return (
    <MUIRepeatIcon
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

RepeatIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default RepeatIcon
