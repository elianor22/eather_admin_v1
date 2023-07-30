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

  function renderIcon(item) {
    switch (item.title) {
      case 'view':
        return <Icon variant={item.icon ? item.icon : 'eye'} color={item.color} size={'small'} />

      case 'edit':
        return <Icon variant={item.icon ? item.icon : 'edit'} color={item.color} size={'small'} />
      case 'delete':
        return (
          <Icon
            variant={item.icon ? item.icon : 'delete'}
            size={'small'}
            sx={{
              color: 'white',
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <Box>
      <Button
        id="table-button-item"
        aria-controls={open ? 'table-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => handleClick(e)}
      >
        <Icon variant={'more-vertical'} size={'small'} />
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
            minHeight: 0,
            minWidth: 0,
            boxShadow: '0px 1px 12px 0px rgba(0,0,0,0.1)',
          },
        }}
      >
        {data &&
          data.map((item, idx) => {
            const visible = item.visible ? true : item.visible === undefined ? true : false
            return (
              <div key={idx}>
                {visible ? (
                  <MenuItem
                    onClick={() => handleClickItem(item)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: ({ palette }) =>
                        item.title === 'delete' ? palette['error'][palette.mode] : 'unset',
                      '&:hover': {
                        backgroundColor: item.title === 'delete' ? 'rgb(255 0 0 / 26%)' : 'rgba(255,255,255,.2)',
                      },
                    }}
                  >
                    <Box mr={1} display={'flex'}>
                      {renderIcon(item)}
                    </Box>
                    <Typography
                      sx={{
                        textTransform: 'capitalize',
                        color: item.title === 'delete' ? 'white' : 'unset',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </MenuItem>
                ) : null}
              </div>
            )
          })}
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
      visible: PropTypes.bool,
    })
  ),
}

export default TableMenu
