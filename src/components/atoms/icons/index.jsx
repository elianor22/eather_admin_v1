import React from 'react'
import DashboardIcon from './assets/DashboardIcon'
import PropTypes from 'prop-types'
import { iconsType } from '../../../constants/icons'
import CardIcon from './assets/CardIcon'
import TableIcon from './assets/TableIcon'

const components = {
  dashboard: DashboardIcon,
  card: CardIcon,
  table: TableIcon,
}

const Icon = ({ variant, color, size, sx }) => {
  if (components[variant]) {
    const IconComponent = components[variant]
    return <IconComponent color={color} size={size} sx={sx} />
  }
  return null
}

Icon.propTypes = {
  variant: PropTypes.oneOf(iconsType),
  color: PropTypes.string,
  size: PropTypes.string,
  sx: PropTypes.object,
}

export default Icon
