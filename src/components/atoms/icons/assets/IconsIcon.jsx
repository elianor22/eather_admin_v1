import React from 'react'

import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

const IconsIcon = ({ color, size, sx }) => {
  return (
    <SvgIcon
      fontSize={size}
      viewBox="0 0 24 24"
      sx={{
        color: 'transparent',
        ...sx,
      }}
    >
      <path
        d="M20.2002 3.79999H20.3002M3.7002 20.2H3.8002"
        stroke={color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6 6C14.5 5.4 13.3 5 12 5C8.1 5 5 8.1 5 12C5 13.3 5.4 14.6 6 15.7M8.3 18C9.4 18.7 10.6 19 12 19C15.9 19 19 15.9 19 12C19 10.7 18.6 9.4 18 8.3"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

IconsIcon.defaultProps = {
  color: 'black',
}

IconsIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default IconsIcon
