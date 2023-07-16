import { Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { SidebarItem, SidebarWrapper } from './elemets'
import { NavLink, useLocation } from 'react-router-dom'
import { ColorProps } from '../../utils/thema/colors'
import { routes } from '../../routes/routes'
import Icon from '../../components/atoms/icons'
import Typography from '../../components/atoms/Typography/Typography'
import { useDispatch } from 'react-redux'
import Button from '../../components/atoms/Button/Button'
import { useAppSelector } from '../../store'
import { setIsOpenSidebar } from '../../store/reducers/sidebar'

const Sidebar = () => {
  const {
    palette: { mode },
  } = useTheme()

  const [selectedItem, setSeletedItem] = useState('')
  const sidebar = useAppSelector((state) => state.sidebar)
  const [open, setOpen] = useState(true)

  // eslint-disable-next-line no-unused-vars
  const handleClick = (idx, item) => {
    if (open === idx) {
      setOpen((prev) => !prev)
    }
    setOpen(idx)

    setSeletedItem(idx)
  }
  const dispatch = useDispatch()

  const location = useLocation()
  const pathWithoutLastPart = location.pathname.slice(0, location.pathname.lastIndexOf('/'))
  const getLastSelected = `${location.pathname.split('/')}`.replace(/,/g, '/')
  const mediaQueries = useAppSelector((state) => state.mediaQuery)

  const handleDrawer = () => {
    dispatch(setIsOpenSidebar(false))
  }

  if (mediaQueries.isLargeScreen) {
    return (
      <Box
        width={'100%'}
        sx={{
          boxShadow: ({ palette }) => `0px 10px 10px ${palette.mode === 'light' ? '#c6e0f9' : '#0000004f'}`,
          zIndex: 2,
          maxWidth: `${sidebar.isExpand ? '216px' : '70px'}`,
          transition: 'ease-out .3s',
          position: 'fixed',
          top: '60px',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: ({ palette }) => palette.background.default,
        }}
      >
        <SidebarWrapper>
          <List
            sx={{
              marginTop: '1rem',
              width: '100%',
              overflow: 'hidden',
              transition: 'ease 0.3s',
            }}
          >
            {routes.map((item, idx) => {
              if (item.child) {
                return (
                  <React.Fragment key={idx}>
                    <ListItemButton
                      onClick={() => {
                        handleClick(idx)
                      }}
                      sx={{
                        padding: sidebar.isExpand ? '12px 16px' : '12px 0px',
                        backgroundColor: selectedItem === idx || item.path === getLastSelected ? '#EFEAFF' : 'unset',
                        '& .mui-1op4pi2-MuiListItemIcon-root': {
                          ...(sidebar.isExpand
                            ? {
                                width: '100%',
                                maxWidth: '40px',
                                minWidth: '0px',
                              }
                            : {
                                minWidth: '70px',
                              }),
                        },
                        '&:hover': {
                          backgroundColor: '#EFEAFF',
                          '& .MuiTypography-root': {
                            color: ColorProps['sidebar']['active'],
                          },
                          '& svg': {
                            color: ColorProps['sidebar']['active'],
                          },
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          justifyContent: 'center',
                        }}
                      >
                        <Icon
                          variant={item.icon}
                          color={
                            selectedItem === idx || item.path === getLastSelected ? ColorProps.sidebar.active : 'unset'
                          }
                        />
                      </ListItemIcon>
                      {sidebar.isExpand ? (
                        <SidebarItem
                          color={
                            selectedItem === idx || item.path === getLastSelected ? ColorProps.sidebar.active : 'unset'
                          }
                        >
                          {item.name}
                        </SidebarItem>
                      ) : null}
                      <Box>
                        {open === idx || item.path === getLastSelected ? (
                          <Icon
                            variant="dropdown"
                            color={
                              selectedItem === idx || item.path === getLastSelected
                                ? ColorProps.sidebar.active
                                : 'unset'
                            }
                          />
                        ) : (
                          <Icon
                            variant="dropup"
                            color={
                              selectedItem === idx || item.path === getLastSelected
                                ? ColorProps.sidebar.active
                                : 'unset'
                            }
                          />
                        )}
                      </Box>
                    </ListItemButton>

                    <Collapse
                      in={open === idx || `${item.layout}/${item.path}` === `${pathWithoutLastPart}${item.path}`}
                      timeout={'auto'}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'inherit',
                        },
                      }}
                    >
                      <List
                        sx={{
                          ...(sidebar.isExpand
                            ? {
                                padding: '0 16px 0px 42px',
                              }
                            : {
                                padding: '0px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                              }),
                        }}
                      >
                        {item.child.map((child) => {
                          return (
                            <NavLink
                              key={child.path}
                              to={`${item.path}/${child.path}`}
                              onClick={() => {
                                handleClick(idx)
                              }}
                              style={{
                                color: 'inherit',
                                textDecoration: 'none',
                              }}
                            >
                              <Box display={'flex'} alignItems={'center'}>
                                {sidebar.isExpand ? (
                                  <React.Fragment>
                                    <ListItemIcon
                                      sx={{
                                        minWidth: '0px',
                                      }}
                                    >
                                      <Icon
                                        variant={'circle'}
                                        size="small"
                                        color={
                                          getLastSelected === `/${child.layout}/${item.path}/${child.path}`
                                            ? ColorProps['sidebar']['active']
                                            : 'inherit'
                                        }
                                        sx={{
                                          width: '8px',
                                          height: '8px',
                                        }}
                                      />
                                    </ListItemIcon>
                                    <ListItemButton disableRipple disableTouchRipple>
                                      <SidebarItem
                                        color={
                                          getLastSelected === `/${child.layout}/${item.path}/${child.path}`
                                            ? ColorProps['sidebar']['active']
                                            : 'inherit'
                                        }
                                      >
                                        {child.name}
                                      </SidebarItem>
                                    </ListItemButton>
                                  </React.Fragment>
                                ) : (
                                  <ListItemButton disableRipple disableTouchRipple={true}>
                                    <SidebarItem
                                      sx={{
                                        fontSize: '12px',
                                      }}
                                    >
                                      {child.abbr}
                                    </SidebarItem>
                                  </ListItemButton>
                                )}
                              </Box>
                            </NavLink>
                          )
                        })}
                      </List>
                    </Collapse>
                  </React.Fragment>
                )
              } else {
                return (
                  <NavLink
                    key={idx}
                    to={item.path}
                    onClick={() => {
                      handleClick(idx, item)
                    }}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <ListItemButton
                      key={idx}
                      className=""
                      sx={{
                        padding: sidebar.isExpand ? '12px 16px' : '12px 0px',
                        backgroundColor: selectedItem === idx ? '#EFEAFF' : 'unset',
                        ...(sidebar.isExpand && {
                          borderRight: `2px solid ${selectedItem === idx ? ColorProps.sidebar.active : 'unset'}`,
                        }),
                        '&:hover': {
                          backgroundColor: '#EFEAFF',
                          '& .MuiTypography-root': {
                            color: ColorProps['sidebar']['active'],
                          },
                          '& svg': {
                            color: ColorProps['sidebar']['active'],
                          },
                        },
                        '& .mui-1op4pi2-MuiListItemIcon-root': {
                          ...(sidebar.isExpand
                            ? {
                                width: '100%',
                                maxWidth: '40px',
                                minWidth: '0px',
                              }
                            : {
                                minWidth: '70px',
                              }),
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          justifyContent: 'center',
                        }}
                      >
                        <Icon variant={item.icon} color={selectedItem === idx ? ColorProps.sidebar.active : 'unset'} />
                      </ListItemIcon>
                      {sidebar.isExpand ? (
                        <SidebarItem
                          sx={{
                            color: selectedItem === idx ? ColorProps.sidebar.active : 'unset',
                          }}
                        >
                          {item.name}
                        </SidebarItem>
                      ) : null}
                    </ListItemButton>
                  </NavLink>
                )
              }
            })}
          </List>
        </SidebarWrapper>
      </Box>
    )
  }
  return (
    <Drawer
      className="custom__sidebar"
      open={sidebar.isOpenSidebar}
      onClose={handleDrawer}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', minWidth: '200px' },
      }}
    >
      <Box position="fixed" right={'10px'} top={'10px'}>
        <Button
          onClick={handleDrawer}
          variant={'icon'}
          sx={{
            backgroundColor: '#ffffff',
          }}
        >
          <Icon variant="close" color={ColorProps['primary.2'][mode]} />
        </Button>
      </Box>
      <Box padding={'30px 1rem 1rem 1rem'}>
        <Box display={'flex'} justifyContent={'center'}>
          <Typography variant="h1">EATHER</Typography>
        </Box>
        <Box
          className="admin__sidebar"
          width={'100%'}
          sx={{
            minHeight: '100vh',
            height: '100%',
            zIndex: 1,
            transition: 'ease-out .3s',
          }}
        >
          <List
            sx={{
              marginTop: '1rem',
              width: '100%',
              overflow: 'hidden',
              transition: 'ease 0.3s',
            }}
          >
            {routes.map((item, idx) => {
              if (item.child) {
                return (
                  <React.Fragment key={idx}>
                    <ListItemButton
                      onClick={() => {
                        handleClick(idx)
                      }}
                      sx={{
                        padding: sidebar.isExpand ? '12px 16px' : '12px 0px',
                        backgroundColor: selectedItem === idx || item.path === getLastSelected ? '#EFEAFF' : 'unset',
                        '& .mui-1op4pi2-MuiListItemIcon-root': {
                          ...(sidebar.isExpand
                            ? {
                                width: '100%',
                                maxWidth: '40px',
                                minWidth: '0px',
                              }
                            : {
                                minWidth: '70px',
                              }),
                        },
                        '&:hover': {
                          // backgroundColor: `${ColorProps.sidebar.hover} `,
                          '&.MuiTypography-root': {
                            color: ColorProps['typo.1'][mode],
                          },
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          justifyContent: 'center',
                        }}
                      >
                        <Icon
                          variant={item.icon}
                          color={
                            selectedItem === idx || item.path === getLastSelected ? ColorProps.sidebar.active : 'unset'
                          }
                        />
                      </ListItemIcon>
                      <SidebarItem
                        color={
                          selectedItem === idx || item.path === getLastSelected ? ColorProps.sidebar.active : 'unset'
                        }
                      >
                        {item.name}
                      </SidebarItem>
                      <Box>
                        {open === idx || item.path === getLastSelected ? (
                          <Icon
                            variant="dropdown"
                            color={
                              selectedItem === idx || item.path === getLastSelected
                                ? ColorProps.sidebar.active
                                : 'unset'
                            }
                          />
                        ) : (
                          <Icon
                            variant="dropup"
                            color={
                              selectedItem === idx || item.path === getLastSelected
                                ? ColorProps.sidebar.active
                                : 'unset'
                            }
                          />
                        )}
                      </Box>
                    </ListItemButton>

                    <Collapse in={open === idx || item.path === `${pathWithoutLastPart}${item.path}`} timeout={'auto'}>
                      <List
                        sx={{
                          padding: '0 16px 0px 42px',
                        }}
                      >
                        {item.child.map((child) => {
                          return (
                            <NavLink
                              key={child.path}
                              to={`${item.path}/${child.path}`}
                              onClick={() => {
                                handleClick(idx)
                              }}
                              style={{
                                color: 'inherit',
                                textDecoration: 'none',
                              }}
                            >
                              <Box display={'flex'} alignItems={'center'}>
                                <ListItemIcon
                                  sx={{
                                    minWidth: '0px',
                                  }}
                                >
                                  <Icon
                                    variant={'circle'}
                                    size="small"
                                    color={
                                      getLastSelected === `/${child.layout}/${item.path}/${child.path}`
                                        ? ColorProps['sidebar']['active']
                                        : 'inherit'
                                    }
                                    sx={{
                                      width: '8px',
                                      height: '8px',
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemButton key={child.path}>
                                  <SidebarItem
                                    sx={{
                                      ...(getLastSelected === `/${child.layout}/${item.path}/${child.path}` && {
                                        textDecoration: 'underline',
                                        textDecorationColor: ColorProps['sidebar']['active'],
                                      }),
                                    }}
                                  >
                                    {child.name}
                                  </SidebarItem>
                                </ListItemButton>
                              </Box>
                            </NavLink>
                          )
                        })}
                      </List>
                    </Collapse>
                  </React.Fragment>
                )
              } else {
                return (
                  <NavLink
                    key={idx}
                    to={item.path}
                    onClick={() => {
                      handleClick(idx, item)
                    }}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <ListItemButton
                      key={idx}
                      className=""
                      // onClick={() => {
                      //   handleClick(idx, item)
                      // }}
                      sx={{
                        padding: sidebar.isExpand ? '12px 16px' : '12px 0px',
                        backgroundColor: selectedItem === idx ? '#EFEAFF' : 'unset',
                        ...(sidebar.isExpand && {
                          borderRight: `2px solid ${selectedItem === idx ? ColorProps.sidebar.active : 'unset'}`,
                        }),
                        '&:hover': {
                          backgroundColor: '#EFEAFF',
                          '& .MuiTypography-root': {
                            color: ColorProps['sidebar']['active'],
                          },
                          '& svg': {
                            color: ColorProps['sidebar']['active'],
                          },
                        },
                        '& .mui-1op4pi2-MuiListItemIcon-root': {
                          ...(sidebar.isExpand
                            ? {
                                width: '100%',
                                maxWidth: '40px',
                                minWidth: '0px',
                              }
                            : {
                                minWidth: '70px',
                              }),
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          justifyContent: 'center',
                        }}
                      >
                        <Icon variant={item.icon} color={selectedItem === idx ? ColorProps.sidebar.active : 'unset'} />
                      </ListItemIcon>

                      <ListItemText
                        sx={{
                          color: selectedItem === idx ? ColorProps.sidebar.active : 'unset',
                        }}
                      >
                        {item.name}
                      </ListItemText>
                    </ListItemButton>
                  </NavLink>
                )
              }
            })}
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Sidebar
