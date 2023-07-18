import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../layouts/sidebar/Sidebar'
import MainContent from '../../layouts/MainContent'
import '../../assets/styles/globalStyles.scss'
import Navbar from '../../components/organisms/Navbar'
import AdminFooter from '../../layouts/footer/adminFooter'

const MainWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette['background.1'][theme.palette.mode],
  }
})

const AppComponents = () => {
  return (
    <MainWrapper>
      <Navbar />
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
      <AdminFooter />
    </MainWrapper>
  )
}

export default AppComponents
