/* eslint-disable no-unused-vars */
import { Box, List, ListItemButton, ListItemIcon } from '@mui/material'
import React, { useState } from 'react'
import { SidebarItem, SidebarWrapper } from './elemets'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../features/store/store'
import { ColorProps } from '../../utils/thema/colors'
import { routes } from '../../routes/routes'
import Icon from '../../components/atoms/icons'

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSeletedItem] = useState('')
  const sidebar = useAppSelector((state) => state.sidebar)
  const navigate = useNavigate()
  const handleClick = (idx, item) => {
    setSeletedItem(idx)
    navigate(item.path, { replace: true })
  }

  const mediaQueries = useAppSelector((state) => state.mediaQuery)

  if (mediaQueries.isLargeScreen) {
    return (
      <Box
        width={'100%'}
        sx={{
          height: '100vh',
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
          {routes.map((item, idx) => (
            <SidebarWrapper
              key={idx}
              padding={sidebar.isExpand ? '0px' : '0px'}
              sx={{
                ...(sidebar.isExpand && {
                  borderRight: `2px solid ${selectedItem === idx ? ColorProps.sidebar.active : 'unset'}`,
                }),
              }}
            >
              <ListItemButton
                onClick={() => {
                  handleClick(idx, item)
                }}
                sx={{
                  padding: sidebar.isExpand ? '12px 16px' : '12px 0px',
                  backgroundColor: selectedItem === idx ? '#EFEAFF' : 'unset',
                  '& .mui-1op4pi2-MuiListItemIcon-root': {
                    ...(sidebar.isExpand
                      ? {
                          width: '100%',
                          maxWidth: '70px',
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
                  <SidebarItem color={selectedItem === idx ? ColorProps.sidebar.active : 'unset'}>
                    {item.name}
                  </SidebarItem>
                ) : null}
              </ListItemButton>
            </SidebarWrapper>
          ))}
        </List>
      </Box>
    )
  }
  return null
}

export default Sidebar
