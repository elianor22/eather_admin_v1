import { Box, Button } from '@mui/material'
import React from 'react'
import { LogoWrapper } from './elements'
import MenuIcon from '@mui/icons-material/Menu'
import { useAppDispatch, useAppSelector } from '../../../features/store/store'
import { setExpanded } from '../../../features/store/reducers/sidebar'

const Navbar = () => {
  const sidebar = useAppSelector((state) => state.sidebar)
  const dispatch = useAppDispatch()
  
  return (
    <Box
      sx={{
        backgroundColor: 'pink',
        height: '60px',
        width: '100%',
        display: 'flex',
      }}
    >
      <LogoWrapper maxWidth={sidebar.isExpand ? '250px' : '70px'}>ini logo</LogoWrapper>
      <Box display={'flex'}>
        <Button
          disableRipple
          onClick={() => {
            dispatch(setExpanded(!sidebar.isExpand))
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default Navbar
