import {default as MUIArrowDropDownIcon} from '@mui/icons-material/ArrowDropDown'
import React from 'react'
import PropTypes from 'prop-types'

const ArrowDropDownIcon = ({ color, size, sx }) => {
  return (
    <MUIArrowDropDownIcon
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

ArrowDropDownIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default ArrowDropDownIcon
