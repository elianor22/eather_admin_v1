import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import Icon from '../icons'
import { iconsVariants } from '../../../constants/icons'
import { MUIColors } from '../../../constants/MUIColors'

const ButtonIcon = ({ icon, color, size, onClick, sx, sxIcon }) => {
  return (
    <Button onClick={onClick} sx={{ ...sx }}>
      <Icon variant={icon} color={color} size={size} sx={{ ...sxIcon }} />
    </Button>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(iconsVariants).isRequired,
  color: PropTypes.oneOf(MUIColors),
  size: PropTypes.number,
  onClick: PropTypes.func,
  sx: PropTypes.object,
  sxIcon: PropTypes.object,
}

export default ButtonIcon
