import { Avatar, Box, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { useAppDispatch, useAppSelector } from '../../../features/store/store'
import { setExpanded, setIsOpenSidebar } from '../../../features/store/reducers/sidebar'
import Typography from '../../atoms/Typography/Typography'
import ThemaSwitch from '../../atoms/Switch/ThemaSwitch'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { DotNotif, LogoWrapper, NavbarContent } from './elements'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Navbar = () => {
  const sidebar = useAppSelector((state) => state.sidebar)
  const mediaQuery = useAppSelector((state) => state.mediaQuery)
  const dispatch = useAppDispatch()
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box
      sx={{
        height: '60px',
        width: '100%',
        display: 'flex',
        borderBottom: '.2px solid #cdcdcd',
      }}
    >
      {isMediumScreen ? null : (
        <LogoWrapper maxWidth={sidebar.isExpand && mediaQuery.isLargeScreen ? '250px' : '70px'}>
          <Typography variant="body1">Logo</Typography>
        </LogoWrapper>
      )}
      <NavbarContent>
        <Button
          disableRipple
          onClick={() => {
            if (isMediumScreen) {
              dispatch(setIsOpenSidebar(!sidebar.isOpenSidebar))
            } else {
              dispatch(setExpanded(!sidebar.isExpand))
            }
          }}
        >
          <MenuIcon />
        </Button>
        <Box
          width={'100%'}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box mr={2} display={'flex'} alignItems={'center'}>
            <ThemaSwitch />
          </Box>
          <Box mr={1} position={'relative'}>
            <DotNotif>2</DotNotif>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{ mt: '45px' }}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{
                    minWidth: '200px',
                    padding: '10px',
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </NavbarContent>
    </Box>
  )
}

export default Navbar
