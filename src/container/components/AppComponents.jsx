import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../layouts/sidebar/Sidebar'
import MainContent from '../../layouts/MainContent'
import Navbar from '../../components/organisms/Navbar'
import '../../assets/styles/globalStyles.scss'

const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
}))

const AppComponents = () => {
  return (
    <MainWrapper>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </Box>
    </MainWrapper>
  )
}

export default AppComponents
