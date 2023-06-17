import React from 'react'
import Navbar from '../../components/organims/navbar/Navbar'
import { Box } from '@mui/material'
import Sidebar from '../../components/layouts/sidebar/Sidebar'
import MainContent from '../../components/layouts/MainContent'
import styled from '@emotion/styled'


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
        <MainContent />
      </Box>
    </MainWrapper>
  )
}

export default AppComponents
