import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import { iconsVariants } from '../../../../constants/icons'
import Icon from '../../../atoms/icons'
import Typography from '../../../atoms/Typography/Typography'

const TableMenu = ({ data, onClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    onClick?.()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  function handleClickItem(item) {
    item.onClick()
    setAnchorEl(null)
  }

  console.log(data)
  return (
    <Box>
      <Button
        id="table-button-item"
        aria-controls={open ? 'table-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => handleClick(e)}
      >
        <Icon variant={'more-vertial'} size={'small'}/>
      </Button>

      <Menu
        id="table-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'table-button-item',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            boxShadow: '0px 1px 12px 0px rgba(0,0,0,0.1)',
          },
        }}
      >
        {data &&
          data.map((item, idx) => (
            <MenuItem
              key={idx}
              onClick={() => handleClickItem(item)}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box mr={1} display={'flex'}>
                <Icon variant={item.icon} color={item.color} size={'small'} />
              </Box>
              <Typography>{item.title}</Typography>
            </MenuItem>
          ))}
      </Menu>
    </Box>
  )
}

TableMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.oneOf(iconsVariants),
      color: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
}

export default TableMenu
