import React from 'react'

import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

const InputIcon = ({ color, size, sx }) => {
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
      <path
        d="M5 8.5H6.5M6.5 8.5H8M6.5 8.5V15.5M6.5 15.5H5M6.5 15.5H8M4 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

InputIcon.defaultProps = {
  color: 'black',
}

InputIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default InputIcon
