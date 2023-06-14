import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Typography from '../atoms/Typography/Typography'

const MainWrapper = styled(Box)(() => {
  return {
    width: '100%',
    height: '100vh',
    padding: '20px',
    backgroundColor: 'gray',
  }
})

const MainContent = () => {
  return (
    <MainWrapper>
      <Typography variant="h1">Header</Typography>
    </MainWrapper>
  )
}

export default MainContent
