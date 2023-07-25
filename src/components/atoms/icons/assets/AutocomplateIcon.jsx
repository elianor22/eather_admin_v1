import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

const AutocomplateIcon = ({ color, size, sx }) => {
  return (
    <SvgIcon
      fontSize={size}
      color={color}
      viewBox="0 0 24 24"
      sx={{
        fill: 'none',
        stroke: ({ palette }) => palette[color][palette.mode],
        ...sx,
      }}
    >
      <path
        d="M9 12C9 12.2652 8.89464 12.5196 8.70711 12.7071C8.51957 12.8946 8.26522 13 8 13C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11C8.26522 11 8.51957 11.1054 8.70711 11.2929C8.89464 11.4804 9 11.7348 9 12ZM13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12Z"
        fill="transparent"
      />
      <path
        d="M15 2V22M22 12C22 15.771 22 17.657 20.828 18.828C19.765 19.892 18.114 19.99 15 20M12 4H10C6.229 4 4.343 4 3.172 5.172C2 6.343 2 8.229 2 12C2 15.771 2 17.657 3.172 18.828C4.343 20 6.229 20 10 20H12M15 4C18.114 4.01 19.765 4.108 20.828 5.172C21.482 5.825 21.771 6.7 21.898 8"
        stroke={'inherit'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SvgIcon>
  )
}

AutocomplateIcon.defaultProps = {
  color: 'primary',
}

AutocomplateIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default AutocomplateIcon
