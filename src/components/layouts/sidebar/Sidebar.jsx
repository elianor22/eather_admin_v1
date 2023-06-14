import { Box, List, ListItemButton, ListItemIcon } from '@mui/material'
import React, { useState } from 'react'
import { routes } from '../../../routes/routes'
import { SidebarItem, SidebarWrapper } from './elemets'
import { useAppSelector } from '../../../features/store/store'

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSeletedItem] = useState(0)
  const sidebar = useAppSelector((state) => state.sidebar)

  return (
    <Box
      width={'100%'}
      maxWidth={sidebar.isExpand ? '250px' : '70px'}
      sx={{
        height: '100vh',
      }}
    >
      {routes.map((item, idx) => (
        <Box key={idx}>
          <SidebarWrapper padding={sidebar.isExpand ? '0px 16px' : '0px'}>
            <List
              sx={{
                width: '100%',
                backgroundColor: selectedItem === idx ? 'transparant' : 'unset',
                borderRadius: '10px',
                overflow: 'hidden',
                padding: '0px',
              }}
            >
              <ListItemButton
                onClick={() => setSeletedItem(idx)}
                sx={{
                  padding: sidebar.isExpand ? '18px 16px' : '18px 0px',
                }}
              >
                <ListItemIcon
                  sx={{
                    width: '100%',
                    maxWidth: '69px',
                    justifyContent: 'center',
                  }}
                >
                  {item.authIcon}
                </ListItemIcon>
                {sidebar.isExpand ? <SidebarItem>{item.name}</SidebarItem> : null}
              </ListItemButton>
            </List>
          </SidebarWrapper>
        </Box>
      ))}
    </Box>
  )
}

export default Sidebar
