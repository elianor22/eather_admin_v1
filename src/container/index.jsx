import React, { useEffect } from 'react'

import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import AppComponents from './components/AppComponents'
import { useConsumTheme } from '../utils/thema/useCustomTheme'
import { BrowserRouter } from 'react-router-dom'
import createEmotionCache from '../utils/createEmotionChace'
import { useAppDispatch } from '../features/store/store'
import { setMediaQuery } from '../features/store/reducers/mediaQuery'

const clientSideEmotion = createEmotionCache()

const AppContainer = () => {
  const dispatch = useAppDispatch()
  const theme = useConsumTheme()
  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 960px)')
  const isLargeScreen = useMediaQuery('(min-width: 961px)')
  useEffect(() => {
    dispatch(setMediaQuery({ isSmallScreen, isMediumScreen, isLargeScreen }))
  }, [dispatch, isSmallScreen, isMediumScreen, isLargeScreen])

  return (
    <CacheProvider value={clientSideEmotion}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppComponents />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default AppContainer
