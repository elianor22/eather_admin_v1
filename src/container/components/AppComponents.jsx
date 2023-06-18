import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
// import { RouterProvider } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../layouts/sidebar/Sidebar'
import MainContent from '../../layouts/MainContent'
import { routes } from '../../routes/routes'
import Navbar from '../../components/organims/Navbar'
// import { useRouter } from '../../routes/useRouter'

const MainWrapper = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
}))

const AppComponents = () => {
  const renderRoutes = () => {
    return routes.map((route) => {
      return <Route key={route.path} path={route.path} element={route.element} />
    })
  }
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
          <Routes>
            {renderRoutes()}
            <Route path="/card" element={<div>wow</div>} />
          </Routes>
        </MainContent>
      </Box>
    </MainWrapper>
  )
}

export default AppComponents
