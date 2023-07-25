import VisibilityIcon from '@mui/icons-material/Visibility'
import React from 'react'
import PropTypes from 'prop-types'

const EyeIcon = ({ color, size, sx }) => {
  return (
    <VisibilityIcon
      fontSize={size}
      color={color}
      sx={{
        ...sx,
      }}
    />
  )
}

EyeIcon.defaultProps = {
  color: 'primary',
}

EyeIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default EyeIcon
