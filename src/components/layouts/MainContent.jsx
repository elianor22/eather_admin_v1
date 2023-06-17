import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Typography from '../atoms/Typography/Typography'
import { ColorProps } from '../ultilities/thema/colors'

const MainWrapper = styled(Box)(({ theme }) => {
  console.log(theme)
  return {
    width: '100%',
    height: '100vh',
    padding: '20px',
    backgroundColor: ColorProps['primary.1'][theme.palette?.mode] || '#fafafaf',
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
