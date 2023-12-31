import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

const CardIcon = ({ color, size, sx }) => {
  return (
    <SvgIcon viewBox="0 0 24 24" fontSize={size} sx={{ width: '100%', ...sx }}>
      <path
        d="M21 16V6H7V16H21ZM21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C6.46957 18 5.96086 17.7893 5.58579 17.4142C5.21071 17.0391 5 16.5304 5 16V6C5 4.89 5.89 4 7 4H21ZM3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z"
        fill={color}
      />
    </SvgIcon>
  )
}

CardIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default CardIcon
