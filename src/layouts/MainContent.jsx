import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import { ColorProps } from '../utils/thema/colors'

const MainWrapper = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    height: '100vh',
    padding: '20px',
    backgroundColor: ColorProps['primary.1'][theme.palette?.mode] || '#f3f3f3',
  }
})

const MainContent = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}
MainContent.propTypes = {
  children: PropTypes.node,
}

export default MainContent
