import React from 'react'

import Navbar from '../components/organims/navbar/Navbar'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import MainContent from '../components/layouts/MainContent'
import Sidebar from '../components/layouts/sidebar/Sidebar'

const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
}))

const AppContainer = () => {
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

export default AppContainer
