import React from 'react'
import PropTypes from 'prop-types'
import { Box, List, MenuItem } from '@mui/material'
import Icon from '../../atoms/icons'
import { iconsVariants } from '../../../constants/icons'
import Typography from '../../atoms/Typography/Typography'

const OptionsMenu = ({ data, sx }) => {
  return (
    <List sx={{ ...sx }}>
      {data.map((list, idx) => (
        <MenuItem key={idx} onClick={list.onClick} color={list.color}>
          <Box>{list.icon && <Icon variant={list.icon} size={'small'} />}</Box>
         <Typography color={'inherit'}>{list.menu}</Typography>
        </MenuItem>
      ))}
    </List>
  )
}

OptionsMenu.propTypes = {
  data: PropTypes.shape({
    menu: PropTypes.string.isRequired,
    color: PropTypes.string,
    icon: PropTypes.oneOf(iconsVariants),
    onClick: PropTypes.func,
  }),
}

export default OptionsMenu
