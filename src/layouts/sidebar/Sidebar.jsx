/* eslint-disable no-unused-vars */
import { Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { SidebarItem, SidebarWrapper } from './elemets'
import { NavLink, Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../features/store/store'
import { ColorProps } from '../../utils/thema/colors'
import { routes } from '../../routes/routes'
import Icon from '../../components/atoms/icons'
import Typography from '../../components/atoms/Typography/Typography'
import { useDispatch } from 'react-redux'
import { setIsOpenSidebar } from '../../features/store/reducers/sidebar'
import Button from '../../components/atoms/Button/Button'

const Sidebar = () => {
  const {
    palette: { mode },
  } = useTheme()
  const [selectedItem, setSeletedItem] = useState('')
  const sidebar = useAppSelector((state) => state.sidebar)
  const [open, setOpen] = useState(true)

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
        className="admin__sidebar"
        width={'100%'}
        sx={{
          minHeight: '100vh',
          height: '100%',
          boxShadow: '2px 0px 6px -5px #b9b9b9',
          zIndex: 1,
          maxWidth: `${sidebar.isExpand ? '250px' : '70px'}`,
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
                            selectedItem === idx || item.path === getLastSelected ? ColorProps.sidebar.active : 'unset'
                          }
                        />
                      ) : (
                        <Icon
                          variant="dropup"
                          color={
                            selectedItem === idx || item.path === getLastSelected ? ColorProps.sidebar.active : 'unset'
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
                            to={item.layout + child.path}
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
                                    getLastSelected === child.layout + child.path
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
                                  color={
                                    getLastSelected === child.layout + child.path
                                      ? ColorProps['sidebar']['active']
                                      : 'inherit'
                                  }
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
                  to={item.layout + item.path}
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
                    {sidebar.isExpand ? (
                      <ListItemText
                        sx={{
                          color: selectedItem === idx ? ColorProps.sidebar.active : 'unset',
                        }}
                      >
                        {item.name}
                      </ListItemText>
                    ) : null}
                  </ListItemButton>
                </NavLink>
              )
            }
          })}
        </List>
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
            maxWidth: `${sidebar.isExpand ? '250px' : '70px'}`,
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
                              to={item.layout + child.path}
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
                                      getLastSelected === child.layout + child.path
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
                                  <SidebarItem>{child.name}</SidebarItem>
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
                    to={item.layout + item.path}
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
                      {sidebar.isExpand ? (
                        <ListItemText
                          sx={{
                            color: selectedItem === idx ? ColorProps.sidebar.active : 'unset',
                          }}
                        >
                          {item.name}
                        </ListItemText>
                      ) : null}
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
