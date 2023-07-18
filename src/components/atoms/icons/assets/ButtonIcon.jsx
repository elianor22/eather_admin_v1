import React from 'react'

import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

const ButtonIcon = ({ color, size, sx }) => {
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
        d="M20.4002 6H3.6002C2.2802 6 1.2002 7.08 1.2002 8.4V15.6C1.2002 16.92 2.2802 18 3.6002 18H20.4002C21.7202 18 22.8002 16.92 22.8002 15.6V8.4C22.8002 7.08 21.7202 6 20.4002 6ZM21.6002 14.4C21.6002 15.12 21.1202 15.6 20.4002 15.6H3.6002C2.8802 15.6 2.4002 15.12 2.4002 14.4V8.4C2.4002 7.68 2.8802 7.2 3.6002 7.2H20.4002C21.1202 7.2 21.6002 7.68 21.6002 8.4V14.4Z"
        fill={color}
      />
    </SvgIcon>
  )
}

ButtonIcon.defaultProps = {
  color: 'black',
}

ButtonIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default ButtonIcon
