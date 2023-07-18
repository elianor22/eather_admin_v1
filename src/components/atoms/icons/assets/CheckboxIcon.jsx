import React from 'react'

import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

const TypographyIcon = ({ color, size, sx }) => {
  return (
    <SvgIcon
      fontSize={size}
      viewBox="0 0 24 24"
      sx={{
        // color: color,
        color: 'transparent',
        ...sx,
      }}
    >
      <path d="M9 11L12 14L20 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

TypographyIcon.defaultProps = {
  color: 'black',
}

TypographyIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default TypographyIcon
