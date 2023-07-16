/* eslint-disable no-unused-vars */
import styled from '@emotion/styled'
import { Box, Breadcrumbs, Container, Stack } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../components/atoms/Typography/Typography'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../routes/routes'
import { useAppSelector } from '../store'
import { useSidebarWathcer } from '../hooks/useSidebarWatcher'
import Breadrumb from '../components/molecules/Breadcrumb'

const MainWrapper = styled('main')(({ pl }) => {
  return {
    width: '100%',
    height: '100%',
    position: 'relative',
    paddingTop: '1rem',
    paddingLeft: pl,
    transition: 'all ease .5s',
    flexGrow: 1,
  }
})

const MainContent = ({ children }) => {
  const location = useLocation()
  const { isLargeScreen } = useAppSelector((state) => state.mediaQuery)
  const { isExpand } = useAppSelector((state) => state.sidebar)

  const fullPath = location.pathname.split('/')
  const lasIndex = fullPath[fullPath.length - 1]
  const breadcrumbs = fullPath.slice(1)

  const { sidebarPadding: sidebarOption } = useSidebarWathcer()

  const renderTitle = () => {
    let getPatname
    for (let idx = 0; idx < routes.length; idx++) {
      if (routes[idx].child) {
        for (let j = 0; j < routes[idx].child.length; j++) {
          if (routes[idx].child[j].path === lasIndex) {
            getPatname = routes[idx].child[j].name
          }
        }
      }
      if (routes[idx].path === lasIndex) {
        getPatname = routes[idx].name
      }
      if (routes[idx].path === '') {
        getPatname = routes[0].name
      }
    }

    if (getPatname) {
      return (
        <Typography variant="h1" mb={'24px'}>
          {getPatname}
        </Typography>
      )
    }
  }

  return (
    <MainWrapper pl={sidebarOption}>
      <Container width={'100%'} p={'20px'}>
        <Stack>
          <Breadrumb breadcrumbs={breadcrumbs} />
        </Stack>
        <Box mt={1}>{renderTitle()}</Box>
        {children}
      </Container>
    </MainWrapper>
  )
}
MainContent.propTypes = {
  children: PropTypes.node,
}

export default MainContent
