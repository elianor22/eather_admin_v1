import React from 'react'

import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

const SelectIcon = ({ color, size, sx }) => {
  return (
    <SvgIcon
      fontSize={size}
      viewBox="0 0 44 24"
      sx={{
        // color: color,
        color: 'transparent',
        ...sx,
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H40C40.2652 21 40.5196 20.8946 40.7071 20.7071C40.8946 20.5196 41 20.2652 41 20V4C41 3.73478 40.8946 3.48043 40.7071 3.29289C40.5196 3.10536 40.2652 3 40 3ZM4 0C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H40C41.0609 24 42.0783 23.5786 42.8284 22.8284C43.5786 22.0783 44 21.0609 44 20V4C44 2.93913 43.5786 1.92172 42.8284 1.17157C42.0783 0.421427 41.0609 0 40 0L4 0ZM8 11.5C8 10.672 8.38 10 8.848 10H20.152C20.62 10 21 10.672 21 11.5C21 12.328 20.62 13 20.152 13H8.848C8.38 13 8 12.328 8 11.5ZM31.707 10.293L31 9.586L29.586 11L30.293 11.707L32.293 13.707L33 14.414L33.707 13.707L35.707 11.707L36.414 11L35 9.586L34.293 10.293L33 11.586L31.707 10.293Z"
        fill={color}
      />
    </SvgIcon>
  )
}

SelectIcon.defaultProps = {
  color: 'black',
}

SelectIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default SelectIcon
