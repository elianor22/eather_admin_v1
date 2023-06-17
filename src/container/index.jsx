import React from 'react'

import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../components/ultilities/createEmotionChace'
import { CssBaseline, ThemeProvider } from '@mui/material'
import AppComponents from './components/AppComponents'
import { useConsumTheme } from '../components/ultilities/thema/useCustomTheme'

const clientSideEmotion = createEmotionCache()

const AppContainer = () => {
  const theme = useConsumTheme()
  return (
    <CacheProvider value={clientSideEmotion}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppComponents />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default AppContainer
