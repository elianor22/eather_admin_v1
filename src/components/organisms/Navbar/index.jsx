import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setExpanded, setIsOpenSidebar } from '../../../store/reducers/sidebar'
import Typography from '../../atoms/Typography/Typography'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { DotNotif, LogoWrapper, NavbarContent } from './elements'
import SettingsIcon from '@mui/icons-material/Settings'
import Icon from '../../atoms/icons'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'
import { toggleTheme } from '../../../store/reducers/themeReducer'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Navbar = () => {
  const sidebar = useAppSelector((state) => state.sidebar)
  const mediaQuery = useAppSelector((state) => state.mediaQuery)
  const dispatch = useAppDispatch()
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [openSetting, setOpenSetting] = useState(false)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  function handleClickTheme() {
    dispatch(toggleTheme())
  }

  return (
    <Box
      sx={{
        height: '60px',
        width: '100%',
        display: 'flex',
        boxShadow: ({ palette }) => `0px 0px 10px ${palette.mode === 'light' ? '#c6e0f9' : '#0000004f'}`,
        position: 'sticky',
        top: 0,
        backgroundColor: ({ palette }) => palette.background.default,
        zIndex: 2,
      }}
    >
      {isMediumScreen ? null : (
        <LogoWrapper maxWidth={sidebar.isExpand && mediaQuery.isLargeScreen ? '216px' : '70px'}>
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

            {anchorElUser && (
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
            )}
          </Box>
          <Box ml={2}>
            <IconButton onClick={() => setOpenSetting(!openSetting)}>
              <SettingsIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </NavbarContent>
      <Drawer
        open={openSetting}
        onClose={() => setOpenSetting(false)}
        anchor="right"
        PaperProps={{
          sx: {
            backgroundColor: ({ palette }) => palette['background'].default,
          },
        }}
      >
        <Box minWidth={'250px'}>
          <Box display={'flex'} justifyContent={'space-between'} py={'1rem'} alignItems={'center'} px={1}>
            <Typography variant="h4">Settings</Typography>
            <IconButton onClick={() => setOpenSetting(false)}>
              <Icon variant={'close'} />
            </IconButton>
          </Box>
          <Divider />
          <Box py={'1rem'} px={1}>
            <Typography variant="body1">Theme Mode</Typography>

            <Box
              display={'flex'}
              sx={{
                border: ({ palette }) => `1px solid ${palette.primary[palette.mode]}`,
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Button
                onClick={handleClickTheme}
                fullWidth
                sx={{
                  alignItems: 'center',
                  backgroundColor: ({ palette }) => (palette.mode === 'light' ? 'rgba(0,0,0,.1)' : null),
                }}
              >
                <LightModeIcon fontSize="small" />
                <Typography ml={1}>Light </Typography>
              </Button>
              <Button
                onClick={handleClickTheme}
                fullWidth
                sx={{
                  alignItems: 'center',
                  backgroundColor: ({ palette }) => (palette.mode === 'light' ? null : 'rgba(255,255,255,0.3)'),
                }}
              >
                <NightlightIcon fontSize="small" />
                <Typography ml={1}>Dark </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Navbar
